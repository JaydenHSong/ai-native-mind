---
title: "AGENTS.md + SKILL.md 패턴"
category: patterns
tags: [agents-md, skill-md, harness, standards, progressive-disclosure, agent-policy]
created: 2026-05-25
updated: 2026-05-25
sources:
  - "raw/articles/2026-05-01-agents-md-spec.md"
  - "raw/articles/2026-05-01-anthropic-agent-skills.md"
  - "raw/articles/2026-05-01-agent-stack-2026-layers.md"
related:
  - "[[patterns/claude-md-guide]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/deep-agents-deploy]]"
  - "[[tools/managed-agents]]"
  - "[[concepts/agent-supply-chain-security]]"
status: active
confidence: high
---

# AGENTS.md + SKILL.md 패턴

## 쉽게 읽기

`AGENTS.md` 와 `SKILL.md` 는 둘 다 "에이전트에게 일을 시키는 문서"처럼 보이지만 역할이 다르다.

- **AGENTS.md** = 이 저장소/폴더에서 지켜야 할 **공통 작업 규칙**
- **SKILL.md** = 특정 작업을 할 때만 꺼내 읽는 **지연 로딩 매뉴얼**

즉 하나는 **항상 적용되는 환경 규칙**, 다른 하나는 **필요할 때만 로드되는 태스크 지식**이다.

## 한줄 설명

코딩 에이전트 하네스에서 **항상 적용되는 repo-scope policy(`AGENTS.md`)** 와 **필요할 때만 로드되는 task-scope instruction(`SKILL.md`)** 를 분리해, portability와 token efficiency를 동시에 얻는 패턴.

## 왜 이 패턴이 필요한가

에이전트가 길게 일할수록 두 문제가 같이 생긴다.

1. **공통 규칙**은 항상 필요하다.
   - 빌드/테스트 명령
   - 코드 스타일
   - 보안 주의사항
   - PR 규칙

2. **세부 작업 매뉴얼**은 항상 싣기엔 너무 길다.
   - 배포 절차
   - 특정 서비스 운영 가이드
   - 도메인별 조사 루틴
   - 반복적인 multi-step 작업법

둘을 한 파일에 몰아넣으면,

- 공통 규칙과 드문 작업 지식이 섞여서 찾기 어려워지고
- 시스템 프롬프트나 startup context가 비대해지며
- 다른 에이전트 도구로 옮길 때 재사용성도 떨어진다.

그래서 2026년 흐름은 **환경 규칙은 AGENTS.md로**, **작업 매뉴얼은 SKILL.md로** 분리하는 쪽으로 수렴한다.

## 역할 분담

| 축 | `AGENTS.md` | `SKILL.md` |
|---|---|---|
| 기본 질문 | "여기서 일할 때 뭘 지켜야 하나?" | "이 특정 작업은 어떻게 하나?" |
| 범위 | repo / directory scope | task / method scope |
| 로딩 방식 | 가까운 파일을 기본 로드 | name·description만 사전 로드, 본문은 lazy load |
| 형식 | 자유 markdown | `name`, `description` frontmatter + markdown |
| 비유 | 회사의 **사규** | 회사의 **업무 매뉴얼** |
| 장점 | portability, 공통 정책 일관성 | token 절감, progressive disclosure |
| 리스크 | 길어지면 잡문서화 | 남발하면 skill sprawl / 공급망 위험 |

## 핵심 구조

### 1. `AGENTS.md` — repo-scope policy surface

`AGENTS.md` 는 사람용 README와 달리 **에이전트가 바로 실행에 쓰는 정보**를 담는다.

대표 내용:

- build / test / lint 명령
- 코드베이스 구조
- 수정 금지 영역
- 보안·비밀 관리 규칙
- PR / commit 규약

핵심 장점은 **tool portability** 다. 2026년 기준 여러 코딩 에이전트가 같은 `AGENTS.md` 를 읽으므로, 한 vendor에 종속되지 않는 **공통 작업 표면**이 된다.

또한 모노레포에서는 **closest-wins** 규칙으로 폴더별 정책을 더 좁게 둘 수 있다.

> The closest AGENTS.md to the edited file wins; explicit user chat prompts override everything.

이 규칙은 [[concepts/harness-engineering]] 관점에서 보면 **정책 계층의 우선순위 체계**다.

### 2. `SKILL.md` — task-scope progressive disclosure

`SKILL.md` 는 모든 내용을 처음부터 싣지 않는다.

- startup 시점에는 **name / description** 만 알려 주고
- 실제로 그 skill이 필요할 때만 본문을 읽는다

이 구조 덕분에 긴 작업 지식을 전부 컨텍스트에 넣지 않고도,

- 필요한 순간에만 세부 절차를 불러오고
- tool definition 남발 없이 task knowledge를 분리하며
- token budget과 인지 부하를 줄일 수 있다

즉 `SKILL.md` 는 도구를 늘리기보다 **행동 지식과 절차를 모듈화**하는 패턴이다.

## 둘을 같이 쓸 때의 운영 원칙

### 원칙 1. 항상 필요한 것은 `AGENTS.md`

다음은 `AGENTS.md` 에 둔다.

- 저장소 전반 규칙
- 빌드/테스트/검증 방법
- 금지된 작업
- 브랜치/PR 규칙
- 보안 주의사항

### 원칙 2. 특정 태스크에서만 필요한 것은 `SKILL.md`

다음은 `SKILL.md` 로 분리한다.

- 배포 런북
- incident 대응 절차
- 특정 외부 API 사용법
- 조사/분석/문서화 루틴
- 반복적인 multi-step workflow

### 원칙 3. 문서는 짧고 사람이 큐레이션

실증 메모 기준으로 **사람이 직접 쓴 AGENTS.md** 는 성공률 향상·버그 감소와 연결되지만, **LLM 자동 생성 컨텍스트 파일** 은 성능 저하와 비용 증가로 이어질 수 있다.

따라서

- 문서를 길게 자동 생성하지 말고
- 반복적으로 실패하는 지점만 압축해 추가하고
- 없는 것보다 "짧고 믿을 수 있는 것"을 우선한다.

## 적용 예시

### 예시 A. 코딩 저장소

- `AGENTS.md`
  - `pnpm test`, `pnpm lint`, `pnpm build`
  - `src/generated/` 수정 금지
  - migration 작성 규칙
- `skills/release/SKILL.md`
  - release checklist
  - changelog 확인 순서
  - deploy/rollback 절차

### 예시 B. 에이전트 플랫폼

[[tools/deep-agents-deploy]] 같은 도구는 이 패턴을 거의 그대로 제품화한다.

- `AGENTS.md` 로 에이전트 정체성과 기본 행동 규칙 정의
- `SKILL.md` 로 도메인별 능력을 lazy load
- 그 아래 샌드박스·메모리·프로토콜 서버는 런타임이 담당

즉 **정의 레이어와 실행 레이어를 분리**하는 것이 핵심이다.

### 예시 C. Claude Code 중심 개인 작업

[[patterns/claude-md-guide]] 의 `CLAUDE.md` 는 Claude 전용 project policy라는 점에서 `AGENTS.md` 와 같은 가족이다.

실무적으로는 이렇게 볼 수 있다.

- `CLAUDE.md` = Claude 전용 project charter
- `AGENTS.md` = 멀티툴 portable repo charter
- `SKILL.md` = method / task module

## 장점과 한계

| 장점 | 한계 |
|------|------|
| 여러 에이전트 도구에 걸쳐 **portable policy surface** 확보 | 문서가 많아지면 관리 대상 자체가 늘어남 |
| 공통 규칙과 task 지식을 분리해 **컨텍스트 혼잡 감소** | 잘못 설계하면 어느 파일에 뭘 둘지 헷갈릴 수 있음 |
| `SKILL.md` 의 lazy loading으로 token budget 절약 | skill registry를 외부에서 받아오면 공급망 위험 증가 |
| 하네스 정책을 파일 단위로 관리해 변경 추적이 쉬움 | 자동 생성·과도한 장문화는 오히려 성능 저하 가능 |

## 보안 메모

이 패턴은 편하지만, 특히 `SKILL.md` 쪽은 [[concepts/agent-supply-chain-security]] 와 바로 연결된다.

- 외부 skill registry를 무비판적으로 로드하지 말 것
- credential 접근 가능한 실행 환경과 skill source를 분리할 것
- review되지 않은 skill은 기본적으로 격리·제한 권한에서 시작할 것

즉 **정책의 모듈화** 와 **신뢰 모델** 은 같이 설계해야 한다.

## 이 위키에서의 의미

이 위키는 코드 저장소가 아니라 지식 저장소라 `AGENTS.md` / `SKILL.md` 를 직접 운영하지는 않지만, 같은 구조를 이미 갖고 있다.

- `CLAUDE.md` = 위키 전체 운영 규칙
- `templates/` = 반복 작업 구조
- `wiki/` = 누적 지식 메모리

그래서 이 패턴은 "새 표준 하나를 아는 것"보다, **에이전트 하네스에서 policy를 어디까지 공통 규칙으로 두고 어디부터 지연 로딩 지식으로 분리할지** 판단하는 기준으로 읽는 편이 더 중요하다.

## 관련 패턴 / 페이지

- [[patterns/claude-md-guide]] — `CLAUDE.md` 를 같은 계열의 project policy file로 보는 실전 가이드
- [[concepts/harness-engineering]] — Guides / policy / runtime 분리의 상위 개념
- [[tools/deep-agents-deploy]] — 이 패턴을 제품 표면으로 구현한 예
- [[tools/managed-agents]] — 같은 upper-middle layer에서 다른 패키징을 택한 예

## 참고 소스

- [AGENTS.md 공식 정리](raw/articles/2026-05-01-agents-md-spec.md)
- [Anthropic Agent Skills 정리](raw/articles/2026-05-01-anthropic-agent-skills.md)
- [Agent Stack 2026 정리](raw/articles/2026-05-01-agent-stack-2026-layers.md)
