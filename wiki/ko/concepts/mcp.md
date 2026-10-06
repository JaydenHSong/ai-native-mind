---
title: "MCP (Model Context Protocol)"
category: concepts
tags: [mcp, anthropic, protocol, tools, integration]
created: 2026-04-09
updated: 2026-10-06
sources:
  - "raw/notes/2026-04-09-mcp-research.md"
  - "raw/articles/2026-05-01-a2a-protocol-spec.md"
  - "raw/articles/2026-10-06-mcp-protocol-pivoting-vulnerability.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/claude-code]]"
  - "[[concepts/ai-orchestration]]"
  - "[[patterns/owasp-llm-typescript-mitigations]]"
  - "[[concepts/a2a-protocol]]"
  - "[[tools/claude-marketplace]]"
  - "[[tools/zoho-zia]]"
status: active
confidence: high
---

# MCP (Model Context Protocol)

## 쉽게 읽기

**비유**: 예전에는 기기마다 충전기 모양이 달랐다. **MCP**는 AI 앱이 외부(깃허브, DB, 슬랙 등)와 연결할 때 쓰는 **공통 충전 포트(USB-C 같은 것)** 이다. 한 번 표준에 맞춰 두면, 새 도구도 “이 포트만 맞추면” 붙인다.

| 용어 | 풀이 |
|------|------|
| **MCP Client** | AI 앱 쪽(질문·명령을 보내는 쪽) |
| **MCP Server** | 실제 데이터·기능을 제공하는 쪽 |
| **Tools / Resources / Prompts** | AI가 실행할 함수·읽을 데이터·미리 만든 질문 템플릿 |

## 한줄 정의

AI 모델과 외부 도구/데이터 소스를 연결하는 오픈 표준 프로토콜. "AI의 USB-C".

## 핵심 내용

### 해결하는 문제

기존: 각 데이터 소스마다 커스텀 통합 필요 → 확장 불가, 정보 사일로
MCP: **하나의 표준**으로 모든 도구/데이터 연결

### 아키텍처

```
MCP Client (AI 앱)  ←→  MCP Server (도구/데이터)
   예: Claude Code         예: GitHub, Slack, DB
```

### 3대 프리미티브

| 프리미티브 | 제어 주체 | 역할 | 예시 |
|-----------|----------|------|------|
| **Tools** | 모델 | 함수 실행 | 파일 읽기, DB 쿼리, API 호출 |
| **Resources** | 앱 | 데이터 접근 | 문서, 설정, 상태 |
| **Prompts** | 사용자 | 프롬프트 템플릿 | 미리 정의된 작업 패턴 |

### 주요 MCP 서버 (이미 사용 가능)

| 카테고리 | 서버 |
|----------|------|
| **개발** | GitHub, Git, Postgres, Puppeteer |
| **생산성** | Google Drive, Slack, Gmail, Calendar |
| **디자인** | Figma, Notion |
| **데이터** | Supabase, 다양한 DB |

- 2026-10-05 채택 사례: [[tools/zoho-zia]] — Zoho가 Zia LLM + 40개 에이전트와 함께 서드파티 에이전트 연결용 MCP 서버를 기본 탑재.

### 역사

- **2024년 11월**: Anthropic이 MCP 발표
- **2025년 12월**: Linux Foundation(AAIF)에 기부 — Anthropic, Block, OpenAI 공동 설립
- **2026년**: 사실상 업계 표준

## [[concepts/context-engineering|Context Engineering]]과의 관계

MCP는 Context Engineering의 **"도구 접근" 계층을 표준화**한 것:

```
Context Engineering 5요소:
├── System Prompt  → CLAUDE.md
├── Task Decomposition → PDCA
├── Memory/State → wiki/
├── Tools/API → ★ MCP가 이 부분을 표준화 ★
└── Guardrails → 규칙, 권한
```

## [[concepts/harness-engineering|Harness Engineering]]에서의 위치

MCP는 Harness의 핵심 인프라. 에이전트가 외부 세계와 상호작용하는 **표준 인터페이스**를 제공한다.

## 왜 중요한가

1인 개발자에게 MCP는 **도구 조합의 비용을 극적으로 낮춘다**. 커스텀 API 통합 없이, MCP 서버만 연결하면 AI가 바로 도구를 사용할 수 있다.

## MCP의 자매 표준 — A2A (Agent-to-Agent)

2026년 들어 자매 표준 [[concepts/a2a-protocol|A2A 프로토콜]]이 Linux Foundation 산하로 자리 잡으면서, "AI 표준 두 축"이 분명해졌다.

| | MCP | A2A |
|--|-----|-----|
| 누구를 잇는가 | 에이전트 ↔ **도구·데이터·시스템** | 에이전트 ↔ **다른 에이전트** |
| 비유 | USB-C (장치 ↔ 도구) | HTTP (서비스 ↔ 서비스) |
| 발견 | Tools/Resources/Prompts 메타데이터 | Capability discovery |
| 거버넌스 | Anthropic → 표준화 진행 중 | Google → Linux Foundation |

**둘은 경쟁이 아니라 보완**: A2A로 발견한 다른 에이전트를 **MCP wrapper**로 도구처럼 호출 가능 ([[concepts/agentic-engineering]]의 Cisco 파일럿이 정확히 이 방법). 실무에서 둘을 같이 쓰는 게 표준 패턴.

## MCP 위의 다음 레이어 — 마켓플레이스

2026-09-23 Anthropic이 Claude Marketplace를 공개하면서, MCP가 표준화한 "연결" 위에 **발견·결제·거버넌스** 레이어가 얹혔다. 2,000개 이상의 커넥터·플러그인을 한 곳에서 찾고, 약정 예산으로 서드파티 SW를 결제한다.

1인 개발자에게는 직접 MCP 서버를 만들기 전에 마켓플레이스에서 기성 커넥터를 먼저 뒤지는 게 빠른 길이다. 다만 서드파티 커넥터의 신뢰 모델은 [[concepts/agent-supply-chain-security|Agent Supply Chain Security]]와 함께 봐야 한다.

> 자세히: [[tools/claude-marketplace|Claude Marketplace]]

## 2026-10-05 보안 — Protocol Pivoting: 에이전트 간 신뢰의 구조적 결함

Ars Technica (Dan Goodin, 10/5) — 독립 연구원 Syed Anas Mohiuddin이 5개월간 Google·JP Morgan Chase·Weaviate·Rapid7·프랑스 정부 디지털국·미국 연방정부의 에이전트를 테스트.

- **Protocol Pivoting**: 특수 목적 에이전트(번역·데이터 분석 등, 가드레일이 느슨)를 노리는 프롬프트 인젝션의 변형. MCP 서버가 에이전트별 자격증명을 저장하고, 에이전트들은 서로를 무조건 신뢰하므로, 주입된 지시가 정상 위임 태스크로 다음 에이전트에 전달·실행됨. 프로토콜을 넘나들 때(MCP→A2A/ANP) 신뢰·인가 정보가 "번역 중 소실". 에이전틱 아키텍처 구축 경쟁에서 조직들이 제로 트러스트를 버린 결과.
- **확인된 취약점**: CVE-2026-97228 (Rapid7, 심각도 2.7/10, 지난달 수정). Google googleapis/mcp-toolbox SSRF (심각도 8) — HTTP 클라이언트가 CheckRedirect 정책·대상 IP 검증 없이 초기화. 수정: IP allow-list/block list + 시작 시 unsafe base URL 거부.
- **대응**: Rapid7 Douglas McKee — "LLM→도구 입력을 인터넷의 낯선 사람 입력처럼 취급하라". X41 D-Sec Markus Vervier — 간접 프롬프트 인젝션의 하위 분류라는 반론.
- **공격 시나리오**: 공격자가 콘텐츠에 악성 텍스트 심음 → 특수 에이전트가 읽고 다른 에이전트에 정상 태스크로 위임 → 신뢰 때문에 실행. DB 내용·민감 정보 탈취, SSRF (조작된 경로 파라미터로 내부 엔드포인트로 리다이렉트).
- [[concepts/agent-supply-chain-security]]와 직결 — MCP "USB-C" 비유의 어두운 면: 표준 포트가 곧 공격 표면.

## 참고 소스

- [MCP 리서치](raw/notes/2026-04-09-mcp-research.md)
- [A2A 프로토콜 정리 (2026-05-01)](raw/articles/2026-05-01-a2a-protocol-spec.md)
- [Introducing MCP (Anthropic)](https://www.anthropic.com/news/model-context-protocol)
- [MCP Specification](https://modelcontextprotocol.io/specification/2025-11-25)
- [Code Execution with MCP (Anthropic)](https://www.anthropic.com/engineering/code-execution-with-mcp)
- [MCP for agent-to-agent comms may be the riskiest protocol you've never heard of (Ars Technica)](raw/articles/2026-10-06-mcp-protocol-pivoting-vulnerability.md)
