---
source_url: "https://claude.com/blog/claude-managed-agents"
title: "Claude Managed Agents: get to production 10x faster"
publisher: "Anthropic / Claude Platform"
published: 2026-04-08
ingested: 2026-05-01
related_urls:
  - "https://platform.claude.com/docs/en/managed-agents/overview"
  - "https://www.testingcatalog.com/anthropic-launches-memory-in-claude-agents-for-enterprise"
---

# Claude Managed Agents — Public Beta 출시 (2026-04-08)

> 출처: [Anthropic / claude.com 공식 블로그 (2026-04-08)](https://claude.com/blog/claude-managed-agents) · [공식 docs](https://platform.claude.com/docs/en/managed-agents/overview)

## 한 줄 요약

Anthropic이 4월 8일 **클라우드 호스팅 에이전트 인프라 — Claude Managed Agents** 를 public beta로 출시. 자체 에이전트를 만들어 운영하는 데 보통 **수개월**이 걸리는 인프라(샌드박스 코드 실행, 체크포인트, 자격증명 관리, 권한 스코핑, 엔드투엔드 트레이싱)를 **며칠 단위**로 단축. Anthropic 인프라 위에 내 에이전트의 정의·도구·가드레일만 올리면 돌아간다.

## 발표 (인용 1줄, 짧게)

"Today, we're launching Claude Managed Agents, a suite of composable APIs for building and deploying cloud-hosted agents at scale." — Anthropic 공식 블로그.

## 핵심 구성

| 항목 | 내용 |
|------|------|
| **Production-grade agents** | 보안 샌드박스·인증·도구 실행이 디폴트로 처리됨 |
| **Long-running sessions** | 수 시간 단위 자율 실행, 진행·출력이 disconnect를 견디고 영속 |
| **Multi-agent coordination** | 에이전트가 다른 에이전트를 spin up하고 지휘해 복잡한 작업 병렬화 (research preview) |
| **Trusted governance** | scoped permissions, identity management, execution tracing 내장 |

핵심 아키텍처 표현은 **"agent harness tuned for performance + production infrastructure"** — Anthropic이 Claude Code 등에서 다듬은 하네스가 매니지드로 노출.

## Outcome-driven mode (research preview)

전통적 prompt-and-response 워크플로 외에 **outcome + success criteria**를 정의하면 Claude가 self-evaluate하며 도달할 때까지 iterate하는 모드 제공. 내부 테스트(structured file generation)에서 표준 prompting 루프 대비 **outcome task 성공률 +10pp**, 가장 어려운 문제에서 가장 큰 향상.

## 가격 모델

- **표준 Claude API 토큰 요금** + **세션 활성 시간당 $0.08**
- "인프라가 아니라 **런타임**에 비용을 낸다"는 포지셔닝

## 운영·관측

세션 트레이싱, integration analytics, troubleshooting 가이드가 **Claude Console 내장** — 모든 tool call·decision·failure mode를 직접 검사 가능.

## Memory 추가 (2026-04-23)

발표 약 2주 후 **persistent memory** 기능이 추가됨 ([TestingCatalog 보도](https://www.testingcatalog.com/anthropic-launches-memory-in-claude-agents-for-enterprise)). 메모리는 **파일시스템 위 파일**로 저장되며, API나 Claude Console에서 직접 export·edit·관리 가능. 에이전트가 다른 모델 세대(예: Claude 4.6 → 다음)로 넘어가도 메모리는 그대로 유지된다는 것이 핵심 메시지.

## 초기 도입 사례 (공식 글에 인용된 5건)

| 회사 | 사용처 | 보고된 임팩트 |
|------|--------|--------------|
| **Notion** | Notion Custom Agents에서 코딩·문서·슬라이드 생성을 워크스페이스 안에서 위임 (private alpha) | 수십 개 작업 병렬 실행 |
| **Rakuten** | Slack/Teams 통합 부서별 specialist 에이전트(엔지니어링·세일즈·마케팅·재무) | 각 specialist를 **1주 단위**로 배포 |
| **Asana** | AI Teammates — 사람과 같이 일하는 협업 에이전트 | 고급 기능 출시 가속 |
| **Vibecode** | "프롬프트→배포 앱" 디폴트 인프라 | 사용자 환경 spin-up **10x↑** |
| **Sentry** | Seer(디버그 에이전트) + Claude 패치 작성 에이전트 통합 | 통합을 **수개월→수주** |
| **Atlassian** | Jira에서 직접 작업 할당 | 기능 배포 **수개월→수주** |
| **Blockit** | 미팅 prep 에이전트 | 아이디어→배포 **3x↑** |

품질 임팩트 보고 (다른 출처): 첫 패스 오류 **97% 감소**, 문서 검증 워크플로 **30% 속도↑** ([medium 정리](https://medium.com/@unicodeveloper/claude-managed-agents-what-it-actually-offers-the-honest-pros-and-cons-and-how-to-run-agents-52369e5cff14)).

## "Brain vs Hands" — 모델 업그레이드 내성

공식 블로그가 명시: 현재 Anthropic의 **brain vs. hands** 디자인 결정 덕분에 **다음 Claude 모델이 출시되어도 인프라가 그대로 동작**한다. 이는 [[concepts/harness-engineering]]의 "모델이 좋아지면 하네스를 줄여라" 메시지와 같은 결의 메시지.

## Trade-offs (정리)

**얻는 것**:
- 자격증명 격리 샌드박스가 디폴트
- multi-protocol(MCP, A2A, Agent Protocol) 통합
- 모델 업그레이드 내성 있는 인프라
- session tracing·analytics가 콘솔에 통합

**잃는 것**:
- **Claude 전용 lock-in** (other 모델로 못 옮김)
- 라우팅·메모리 정책의 fine-grained 제어 일부 포기
- 비용 예측: $0.08/세션-시간이 **다수 long-lived agent**에서 누적
- 디버깅: append-only 세션 로그는 복구엔 좋고 **검사엔 덜 readable**

## 위키 매핑

- 새 페이지 후보: `tools/managed-agents` (Claude Managed Agents 도구 페이지) — 본 raw가 1차 출처
- 비교 대상: `comparisons/managed-vs-deep-agents`(신규) — vs LangChain Deep Agents Deploy
- 보강: [[concepts/harness-engineering]] (Brain/Hands가 모델 업그레이드 내성 사례), [[patterns/agent-server-harness]] (Anthropic이 운영하는 매니지드 변형 사례)

confidence: high (Anthropic 공식 출처)
