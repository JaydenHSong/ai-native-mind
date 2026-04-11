# 큐레이션 ② — 보안(Security) × TypeScript (AI 에이전트 맥락)

**작성**: 2026-04-12  
**범위**: LLM·에이전트·MCP를 **TypeScript 런타임**에서 다룰 때의 **위협 모델·緩和·코딩 패턴**. 첫 번째 광범위 노트는 [`2026-04-12-ai-native-learning-corpus.md`](2026-04-12-ai-native-learning-corpus.md).

---

## A. 위협 모델·표준 (언어 무관 → TS 구현에 연결)

| 자료 | TS와의 연결 |
|------|-------------|
| [OWASP Top 10 for LLM Applications (프로젝트)](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | 공식 허브. |
| [OWASP GenAI — LLM Top 10 (2025)](https://genai.owasp.org/llm-top-10/) | **LLM01** Prompt Injection, **LLM06** Excessive Agency 등 → 도구 권한·승인 게이트를 코드로 어디에 둘지 매핑. |
| [OWASP LLM Top 10 리소스 PDF (2025)](https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/) | 오프라인 독해용. |
| [OWASP Seoul — LLM Top 10 한국어 PDF (예시)](https://owasp.org/www-chapter-seoul/assets/files/LLMAll_ko-KR-2025-04-02.pdf) | 한글 요약 (챕터 자료; 버전은 상단 날짜 확인). |

**TS에서 자주 대응하는 항목만 짚기**

- **LLM01 / 부적절한 출력 처리(LLM05)**: 모델·도구 출력을 **그대로 `exec`/`eval`/SQL에 넣지 않기** — Zod·화이트리스트·파라미터 바인딩.  
- **LLM06 과도한 에이전시**: 허용 도구 목록·스텝 상한·서버 측 **확인(allowlist)** 은 TypeScript 레이어에서 구현하기 쉬움.  
- **LLM10 무제한 소비**: rate limit, `maxSteps`, 토큰 budget — Route Handler / 미들웨어에서 강제.

---

## B. MCP·도구 경계 (원격 MCP = 네트워크 신뢰)

| 자료 | 비고 |
|------|------|
| [MCP — Understanding Authorization (튜토리얼)](https://modelcontextprotocol.io/docs/tutorials/security/authorization) | OAuth 2.1 기반 원격 MCP 권장 흐름. |
| [MCP — Authorization (스펙 초안)](https://modelcontextprotocol.io/specification/draft/basic/authorization) | 스펙 버전은 문서에서 최신 확인. |
| [Stack Overflow Blog — MCP 인증·인가 (2026)](https://stackoverflow.blog/2026/01/21/is-that-allowed-authentication-and-authorization-in-model-context-protocol/) | 표준 채택 전후 맥락 정리. |

**TS 실무 체크**

- MCP 클라이언트가 붙는 **URL·서버 출처** 고정(또는 레지스트리) — 환경 변수로만 받지 말고 **런타임 검증**.  
- Stdio MCP는 OS 권한·**시크릿이 프로세스 환경에 노출**되는지 점검.  
- 토큰 **패스스루** 금지 권고는 문서에 반복됨 → 게이트웨이에서 검증·스코프 축소.

---

## C. TypeScript + Vercel AI SDK (구조화·도구·테스트 = 하네스 센서)

| 자료 | 비고 |
|------|------|
| [AI SDK — Generating Structured Data](https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data) | `Output.object` + **Zod**로 생성 결과 검증·타입 연결. **부분 스트림은 스키마 검증이 약할 수 있음** 문서 주의사항 존재. |
| [AI SDK — Tools and Tool Calling](https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling) | `tool({ inputSchema: z.object(...) })` — **도구 입력 경계**. |
| [AI SDK — MCP Tools](https://ai-sdk.dev/docs/ai-sdk-core/mcp-tools) | TS에서 MCP 도구를 붙이는 공식 경로. |
| [AI SDK — Testing](https://ai-sdk.dev/docs/ai-sdk-core/testing) | 에이전트 회귀·모킹. |
| [AI SDK — Language Model Middleware](https://ai-sdk.dev/docs/ai-sdk-core/middleware) | 요청/응답 가로채기 — 로깅 마스킹·정책 주입에 활용. |
| [AI SDK — Telemetry](https://ai-sdk.dev/docs/ai-sdk-core/telemetry) | [[concepts/gen-ai-observability]] 와 연결. |
| [TypeScript — strict 옵션](https://www.typescriptlang.org/tsconfig/#strict) | `strict` + `noImplicitAny` 등 — 에이전트 코드베이스 기본값 권장. |
| [Zod](https://zod.dev/) | 도구 입출력·환경 설정 파싱의 **사실상 표준**. |

**패턴 한 줄**

- “LLM이 준 문자열”은 **항상 `safeParse` 이후**만 비즈니스 로직으로 — `Output.json()`처럼 **비스키마 JSON은 신뢰 경계 밖**으로 취급.

---

## D. 교차: OWASP 항목 ↔ TS 레이어 (요약 표)

| 위협 축 | TypeScript에서의 전형적 완화 |
|---------|-------------------------------|
| Prompt injection | 시스템·유저 메시지 분리; RAG 스니펫에 출처·구분자; **사용자 문자열을 셸 한 조각으로도 금지** |
| Excessive agency | `stopWhen` / `maxSteps` / 도구 **allowlist** / HITL 웹훅 |
| 민감 정보 유출 | 미들웨어에서 로그 **마스킹**; 응답에 시스템 프롬프트 반사 금지 |
| 공급망 | `package-lock`·CVE 스캔; MCP 서버는 **고정 버전·해시** |

---

## E. 권장 읽기 순서 (보안×TS 짧은 코스)

1. OWASP **LLM Top 10** PDF 목차만 훑고, 팀 제품에 해당하는 3개 항목에 체크.  
2. AI SDK **Structured Data** 문서 + 예제 하나 실행 (`Output.object` + Zod).  
3. **Tools** 문서에서 `inputSchema`를 **최대한 좁게** 써 보기 (예: `z.enum`, `z.string().max()`).  
4. **MCP Authorization** 튜토리얼 — 원격 MCP 쓸 계획이 있을 때만 깊게.  
5. (선택) AI SDK **Middleware**로 “모든 모델 호출에 감사 로그” 프로토타입.

---

## F. 위키·후속

- 관련 위키: [[concepts/mcp]], [[patterns/agent-server-harness]], [[concepts/gen-ai-observability]], [[concepts/harness-engineering]], [[patterns/owasp-llm-typescript-mitigations]], [[journal/2026-04-12]].  
- 실행 스케치: 저장소 루트 `examples/agent-safety-sketch/README.md`.  
- ingest 시: OWASP 나머지 항목도 같은 패턴으로 **한 줄 완화책** 확장 가능.
