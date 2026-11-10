---
title: "Anthropic, Agent Skills를 Agentic AI Foundation(Linux Foundation)에 기증"
category: concepts
tags: [anthropic, agent-skills, linux-foundation, agentic-ai-foundation, mcp, skill-security, skill-md]
created: 2026-10-23
updated: 2026-10-23
sources:
  - "raw/articles/2026-10-23-anthropic-agent-skills-foundation.md"
related:
  - "[[concepts/mcp]]"
  - "[[patterns/agents-md-skill-md]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[patterns/llm-wiki]]"
status: draft
confidence: high
---

# Anthropic, Agent Skills를 Agentic AI Foundation(Linux Foundation)에 기증

## 쉽게 읽기

**비유**: 에이전트에게 일하는 법을 가르치는 "매뉴얼 양식"(SKILL.md)이 지금까지는 Anthropic이 만든 "사실상 표준"이었다. 이제 그 양식의 소유권이 Linux Foundation 산하 중립 재단으로 넘어갔다 — 마치 USB-C가 특정 회사 기술에서 국제 표준이 된 것처럼. 매뉴얼 내용은 그대로고, 앞으로의 규칙(버전·보안 가이드)은 여러 회사가 함께 정한다.

| 용어 | 풀이 |
|------|------|
| **Agent Skills** | 에이전트에게 절차 지식·워크플로를 주는 SKILL.md 기반 오픈 표준 |
| **AAIF (Agentic AI Foundation)** | Linux Foundation 산하 에이전트 표준 재단 — Anthropic·Block·OpenAI 공동설립, MCP도 수령 |
| **SKILL.md** | name/description 필수, scripts/references 선택, 단계적 로딩의 에이전트 지식 패키지 |

## 한줄 정의

2026-10-22 Anthropic이 에이전트 절차 지식 표준 Agent Skills의 이름·로고·GitHub 조직·agentskills.io를 Linux Foundation 산하 Agentic AI Foundation에 기증 — MCP에 이은 두 번째 에이전트 인프라 표준의 중립화. 기존 SKILL.md 변경 없음.

## 핵심 내용

- **기증 범위**: 이름/로고, GitHub 조직, agentskills.io 도메인 → AAIF.
- **유지보수**: Anthropic·Google·OpenAI 등 엔지니어가 개인 자격으로 참여. 리드 메인테이너 David Soria Parra·Mahesh Murag.
- **보급** (벤더 주장, 미검증): 2025-12 표준 공개 이후 70+ 플랫폼 연동 (ChatGPT·Cursor·GitHub Copilot·VS Code), 100만 스킬, ~2.8억 설치.
- **로드맵**: 버전 관리 릴리즈, 정식 제안 프로세스, 명시적 보안 가이드 — 낯선 스킬의 스크립트/의존성/네트워크 호출은 설치 전 감사 (배경: ClawHub 샘플에서 악성 스킬 76건 발견 보고).
- **기원**: Claude Code (2025-10) — 일반 지식은 잘 다뤘지만 실제 업무의 절차 지식이 부족했던 문제에서 출발.

## 왜 중요한가 (1인 개발자 관점)

1. **스킬이 인프라가 됐다**: SKILL.md 폴더 (name/description 필수, staged loading) 가 "에이전트에게 지식을 포장하는 표준 방식"으로 굳어짐. 개인 위키·프로젝트 지식을 스킬로 포장하면 ChatGPT·Cursor·Copilot·VS Code 어디서든 재사용 — 이 위키의 [[patterns/agents-md-skill-md]] 패턴이 공식 표준의 문법을 따르게 됨.
2. **보안 가이드의 공식화 예고**: 악성 스킬 76건이 로드맵에 "보안 가이드"를 밀어넣음. 스킬을 배포·설치할 때의 감사 체크리스트 (스크립트·의존성·네트워크) 가 조만간 표준 문서로 나올 것 — 미리 대비.
3. **MCP와의 쌍**: 연결 표준(MCP) + 지식 표준(Skills) 이 같은 재단 아래. 에이전트 엔지니어링의 "USB-C 두 개"가 모두 중립화 — 벤더 종속 없이 스택 설계 가능.

## 한계 (명시)

- 70+ 플랫폼·100만 스킬·2.8억 설치는 Anthropic의 벤더 주장 — 독립 검증 없음. confidence high는 "기증 사실"에 대한 것이지 보급 수치에 대한 게 아님.
- 악성 스킬 76건은 ClawHub 샘플 조사 보도 — 조사 방법론의 대표성은 미확인.
- 재단의 신뢰할 수 있는 스킬 레지스트리(curated registry) 여부는 아직 미정 — watch 항목.