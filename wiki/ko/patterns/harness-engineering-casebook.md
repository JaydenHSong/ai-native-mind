---
title: "Harness 엔지니어링 케이스북 & Anthropic Academy 스터디 맵"
category: patterns
tags: [harness-engineering, case-studies, anthropic, curriculum, guides, sensors]
created: 2026-04-13
updated: 2026-06-02
sources:
  - "raw/notes/2026-04-13-harness-casebook-anthropic-academy.md"
  - "https://www.anthropic.com/learn"
  - "https://anthropic.skilljar.com/"
related:
  - "[[concepts/harness-engineering]]"
  - "[[patterns/harness-building-blocks]]"
  - "[[patterns/agent-server-harness]]"
  - "[[patterns/safe-tool-calling-sandbox]]"
  - "[[concepts/gen-ai-observability]]"
  - "[[concepts/llm-evaluation]]"
  - "[[campaign-map]]"
status: active
confidence: medium
---

# Harness 엔지니어링 케이스북 & Anthropic Academy 스터디 맵

## 쉽게 읽기

**한 줄**: 같은 Claude라도 **무엇을 만들지(도메인)**에 따라 하네스가 달라진다. 이 문서는 **케이스별로 Guides·Sensors·인간 루프**를 빠르게 짚고, **Anthropic Academy(공식 무료 코스)**를 하네스 학습과 짝지어 스터디 순서를 제안한다.

| 말 | 짧은 뜻 |
|----|----------|
| **Guides** | 행동 **전** 규칙·스키마·템플릿 |
| **Sensors** | 행동 **후** 검증·메트릭·eval |
| **HITL** | 위험한 버튼 전 **사람 승인** |

> Anthropic 공식 학습 허브: [Anthropic Academy / Learn](https://www.anthropic.com/learn) — 코스는 [Skilljar 카탈로그](https://anthropic.skilljar.com/)에서 수강한다.

## 왜 케이스북이 필요한가

[[concepts/harness-engineering]]은 **Agent = Model + Harness**로 정의하지만, 현장에서는 “우리 서비스는 어디가 하네스인가?”가 흐려진다. 아래 표는 **도메인마다 달라지는 Guides/Sensors/HITL**을 한눈에 비교하기 위한 것이다. 숫자·비율은 시대에 따라 변할 수 있으니 **구조 이해용**으로 쓴다.

## 도메인·시나리오 매트릭스 (다양한 케이스)

**표 읽는 법**: 각 행은 “이런 제품/작업일 때 하네스를 어디에 두나”다. G=Guides, S=Sensors, H=Human loop(in/on/out 중 강조).

| # | 시나리오 | Guides (피드포워드) | Sensors (피드백) | H / 리스크 메모 |
|---|----------|---------------------|-------------------|-----------------|
| 1 | 개인 위키·노트 ([[patterns/llm-wiki]]) | 스키마·분류 규칙·템플릿 | 링크 린트·중복 탐지 | **On** — 규칙을 사람이 고침 |
| 2 | 1인 SaaS CRUD | API 스키마·RBAC 설계 문서 | 계약 테스트·타입 | **On** — 스키마 승인 |
| 3 | 고객 지원 챗봇 | 톤·금지 주제·escalation 트리 | 만족도·hallucination 샘플링 | **In** — 민감 케이스 승인 |
| 4 | 사내 RAG + 출처 | 인용 강제·chunk 정책 | citation 검사·golden Q | **On** — 지식 큐레이션 |
| 5 | PR 단위 코드 생성 (CI) | 코딩 컨벤션·diff 크기 상한 | CI·보안 스캔 | **Out** + 실패 시 **On** |
| 6 | 보안 리뷰 전용 에이전트 | CWE 체크리스트·read-only 도구 | SAST·정적 규칙 | **In** — 머지 게이트 |
| 7 | 데이터 분석 (노트북) | 변수명·출력 형식 | 재현성·데이터 범위 검사 | **On** — 해석 책임 |
| 8 | 멀티테넌트 B2B | 테넌트 격리·키 회전 정책 | 감사 로그·쿼터 | **On** — 정책 변경 |
| 9 | 텍스트만·저지연 챗 | 짧은 system·도구 최소화 | p95 지연·토큰 상한 | **Out** |
| 10 | 장기 리서치 잡 (수 분~시간) | 단계 템플릿·중간 요약 | 체크포인트·취소 토큰 | **On** — 방향 전환 |
| 11 | 결제·환불·송금 | 불변 규칙·이중 확인 워크플로 | 대사·금액 검증 | **In** — 금전 HITL |
| 12 | 고위험(의료·법률 조언) | 면책·범위 제한·전문가 문구 | 이의 제기 로그 | **In** — 거의 전 구간 |
| 13 | 레거시 리팩터 | 모듈 경계·“만지지 말 영역” | 회귀 테스트·특성 플래그 | **On** — Harnessability 낮음 |
| 14 | 오픈소스 기여 | CONTRIBUTING·이슈 템플릿 | CI·코드 오너 규칙 | **In** — 머지 권한 |
| 15 | 데브옵스 runbook 실행 | 허용 명령 화이트리스트 | 로그·롤백 훅 | **In** — 프로덕션 버튼 |
| 16 | 게임·크리에이티브 대사 | 세계관 bible·금칙어 | 스타일 일관성 eval | **On** |
| 17 | 번역·현지화 파이프 | 용어집·톤 가이드 | BLEU/人工 샘플 | **On** |
| 18 | 문서 파이프라인 (docs-as-code) | 스타일 가이드·링크 규칙 | 빌드·링크 체커 | **Out** |
| 19 | 모바일 백엔드 (푸시·동기) | idempotency 키·버전 API | 충돌·재시도 메트릭 | **On** |
| 20 | Edge / 서버리스 짧은 함수 | cold start 예산·타임아웃 | 429·비용 알람 | **Out** |
| 21 | Batch ETL + LLM 정제 | 스키마·배치 크기 | 드리프트·샘플 검증 | **On** |
| 22 | MCP로 사내 툴 연동 | 도구 스키마·OAuth 범위 | 감사·rate limit | **On** — 토큰 회전 |
| 23 | Subagent 연구팀 시뮬 | 역할 카드·핸드오프 형식 | 중복·상충 검출 | **On** |
| 24 | Eval 회귀 루프 | golden set 버전 | PR 게이트 점수 | **Out** |
| 25 | 비용 폭주 방지 | 모델 라우팅·캐시 정책 | 토큰 대시보드 | **On** |
| 26 | 규제 대응 로그 보존 | PII 마스킹 규칙 | 보존 기간·삭제 요청 | **On** |
| 27 | 실시간 음성/멀티모달 (참고) | 짧은 컨텍스트·도구 제한 | 지연·ASR 품질 | **In** — 장비·개인정보 |
| 28 | 사내 “코파일럿” 단일 레포 | CLAUDE.md·slash 규칙 | lint·테스트 | **On** |
| 29 | 에이전틱 브라우저 자동화 | DOM 스냅샷·스텝 상한 | 스크린샷 diff | **In** — 로그인 구간 |
| 30 | A/B 실험용 카피 생성 | 실험 ID·노출 제한 | 클릭률 연동 | **On** — 윤리 검토 |

**패턴 요약**: 돈·법·프로덕션 쓰기·개인정보에 가까울수록 **HITL(In)**과 **감사 Sensor**가 두꺼워진다. 순수 문서·내부 도구는 **On/Out**과 **Computational Sensor** 비중이 커진다.

## Anthropic Academy — 코스 전체 맵 (공식)

아래는 Skilljar에 공개된 코스 목록을 **하네스 학습 축**과 연결한 것이다. 코스 추가·명칭 변경은 Anthropic 측에서 할 수 있으니, 수강 전 [카탈로그](https://anthropic.skilljar.com/)를 한 번 더 확인하면 좋다.

| 코스 (영문명) | 대상 | 하네스 축 (주) | 링크 |
|---------------|------|----------------|------|
| AI Capabilities and Limitations | 모두 | 모델 한계 이해 → Sensor 기대치 설정 | https://anthropic.skilljar.com/ai-capabilities-and-limitations |
| Claude 101 | 비개발·일반 | Guides(대화 규율)·안전 협업 | https://anthropic.skilljar.com/claude-101 |
| AI Fluency: Framework & Foundations | 모두 | Norms/Guardrails·협업 프레임 | https://anthropic.skilljar.com/ai-fluency-framework-foundations |
| AI Fluency for students | 학생 | 학습 루프 Guides·자기 점검 Sensor | https://anthropic.skilljar.com/ai-fluency-for-students |
| AI Fluency for educators | 교육자 | 교실 하네스 설계 | https://anthropic.skilljar.com/ai-fluency-for-educators |
| Teaching AI Fluency | 강사·디자이너 | 평가·과제 하네스 | https://anthropic.skilljar.com/teaching-ai-fluency |
| AI Fluency for nonprofits | 비영리 | 임팩트·가치 정렬 Guides | https://anthropic.skilljar.com/ai-fluency-for-nonprofits |
| Building with the Claude API | 개발자 | Tools 스키마·API 오류 = Guides/Sensors | https://anthropic.skilljar.com/claude-with-the-anthropic-api |
| Introduction to Model Context Protocol | 개발자 | **도구 하네스** 기초 | https://anthropic.skilljar.com/introduction-to-model-context-protocol |
| Model Context Protocol: Advanced Topics | 개발자 | 프로덕션 MCP·전송·샘플링 | https://anthropic.skilljar.com/model-context-protocol-advanced-topics |
| Claude Code 101 | 개발자 | 로컬 개발 Guides | https://anthropic.skilljar.com/claude-code-101 |
| Claude Code in Action | 개발자 | 워크플로·팀 하네스 | https://anthropic.skilljar.com/claude-code-in-action |
| Introduction to Claude Cowork | 지식 노동 | 파일·연구 루프·스킬 | https://anthropic.skilljar.com/introduction-to-claude-cowork |
| Introduction to subagents | 개발자 | **오케스트레이션·컨텍스트 분리** | https://anthropic.skilljar.com/introduction-to-subagents |
| Introduction to agent skills | 개발자 | 재사용 Guides 패키징 | https://anthropic.skilljar.com/introduction-to-agent-skills |
| Claude with Amazon Bedrock | 클라우드 | 배포·거버넌스 하네스 | https://anthropic.skilljar.com/claude-in-amazon-bedrock |
| Claude with Google Cloud's Vertex AI | 클라우드 | 동일 | https://anthropic.skilljar.com/claude-with-google-vertex |

**보조(코드 예제·노트북)**: [anthropics/courses (GitHub)](https://github.com/anthropics/courses) — API·eval·tool 등 실습 노트북.

## 스터디 트랙 제안 (“대부분” 소화용)

### 트랙 A — 개발자 하네스 코어 (추천 1순위)

1. AI Capabilities and Limitations  
2. Building with the Claude API  
3. Introduction to Model Context Protocol → Advanced Topics  
4. Introduction to subagents → Introduction to agent skills  
5. Claude Code 101 → Claude Code in Action  
6. (선택) Introduction to Claude Cowork  
7. 위키로 복귀: [[patterns/agent-server-harness]], [[concepts/gen-ai-observability]], [[patterns/owasp-llm-typescript-mitigations]]

### 트랙 B — AI Fluency 전 과정 (비개발·교육 포함)

1. AI Fluency: Framework & Foundations  
2. Claude 101  
3. AI Fluency for students / educators / nonprofits / Teaching AI Fluency — **본인 역할에 해당하는 것만** 골라도 됨  
4. 트랙 A의 가벼운 코스(Claude 101 수준)와 병행 가능

### 트랙 C — 클라우드 배포까지

- 트랙 A 1~3 완료 후  
- Claude with Amazon Bedrock **또는** Claude with Google Vertex AI (사용 클라우드에 맞게 하나)

### 트랙 D — 4주 집중 예시

| 주차 | Anthropic | 위키 병행 |
|------|-----------|-----------|
| 1주 | API + Capabilities & Limitations | [[concepts/context-engineering]], [[concepts/harness-engineering]] |
| 2주 | MCP 입문→고급 | [[concepts/mcp]], [[patterns/safe-tool-calling-sandbox]] |
| 3주 | Claude Code + subagents + skills | [[patterns/subagents-delegation]], [[patterns/claude-md-guide]] |
| 4주 | Cowork 또는 Bedrock/Vertex | [[patterns/agent-server-harness]], [[concepts/gen-ai-observability]] |

## 위키 심화 읽기 (Anthropic과 직접 맞닿는 페이지)

- [[concepts/harness-engineering]] — 정의·루프·Fowler·Anthropic 도구 글 링크  
- [[patterns/harness-building-blocks]] — Guides/Sensors 실습 톤  
- [[patterns/agent-server-harness]] — 프로덕션 런타임  
- [[patterns/safe-tool-calling-sandbox]], [[patterns/owasp-llm-typescript-mitigations]] — 도구 하네스 보안  
- [[concepts/gen-ai-observability]], [[concepts/llm-evaluation]] — Sensor 확장  

원천 큐레이션: [Harness 심화 노트](raw/notes/2026-04-12-harness-engineering-deep-dive.md), [이번 케이스북 raw](raw/notes/2026-04-13-harness-casebook-anthropic-academy.md).

## Chapter Clear 가이드

- **소속 챕터**: Chapter 5 심화 (선택 서브 퀘스트)
- **퀘스트**: 위 매트릭스에서 **본인 프로젝트와 가장 가까운 행 3개**를 골라 Guides/Sensors/H를 한 줄씩 채운다.
- **클리어 조건**: Anthropic 트랙 A에서 **이수 완료 코스 2개 이상** + 위키에 적은 3행 중 1행을 실제로 적용해 본다.
- **보상(산출물)**: “내 하네스 케이스 카드” 1장 + 수강 노트 링크
- **다음 퀘스트**: [[concepts/harness-engineering]] 재독서 → [[patterns/agent-server-harness]]

## 참고 소스

- [Anthropic Learn](https://www.anthropic.com/learn)
- [Anthropic courses (Skilljar)](https://anthropic.skilljar.com/)
- [anthropics/courses (GitHub)](https://github.com/anthropics/courses)
- [Martin Fowler — Harness engineering](https://martinfowler.com/articles/harness-engineering.html)
