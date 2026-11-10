---
title: "Anthropic, Enterprise에 통합 Claude 정식 출시 — 11-16 기본 켜짐"
source_url: "https://www.pymnts.com/news/artificial-intelligence/2026/anthropic-merges-claude-chat-and-cowork-for-enterprise-users/"
source_type: "news"
authors: ["Anthropic", "PYMNTS", "Mixed News"]
published: 2026-10-23
fetched: 2026-10-26
tags: [anthropic, claude, cowork, enterprise, cloud-sandbox, agent]
status: raw
---

# Anthropic, Enterprise에 통합 Claude 정식 출시 — 11-16 기본 켜짐

> Anthropic이 10-23 Enterprise 고객에 통합 Claude(채팅 + Cowork)를 정식 출시했다. 대화는 채팅으로 시작하고, 코드 실행·파일 작업이 필요해지면 Anthropic 관리 격리 클라우드 샌드박스에서 Cowork 세션으로 전환됐다가 돌아온다. 기존 조직은 기본 꺼짐 상태이며 11-16 기본 켜짐으로 전환된다. 9월 Pro·Max 통합의 기업 배포 경로 버전이다. (Anthropic 10-23 발표·PYMNTS·Mixed News 교차)

## 내용

- **동작 방식**: "모든 대화는 채팅으로 시작하고, 작업에 코드 실행이나 파일 작업이 필요하면 같은 대화가 Anthropic 관리 격리 클라우드 샌드박스에서 이어진 뒤, 완성된 작업을 검토용으로 반환한다." 모드를 미리 고를 필요 없음. 웹·데스크톱·모바일에서 이어지고, 노트북을 닫아도 클라우드 작업은 계속됨.
- **전환 일정**: 기존 조직은 기본 꺼짐, 11-16 기본 켜짐(관리자가 유지 거부 가능). 조기 활성화도 가능. 채팅과 클라우드 코드 실행이 모두 켜져 있어야 동작.
- **격리·권한 설계**: 에이전트 대화마다 격리 가상머신. Enterprise는 샌드박스 네트워크 접근 기본 차단, 커넥터 자격증명은 샌드박스 밖에 유지. 기존 SSO·컴플라이언스 API 등 기업 통제 유지. 기존 채팅·프로젝트·커넥터·스킬·플러그인 이관.
- **비용 통제**: 사용량 기반 과금 유지. 신규 Efficient 모드는 통합 경험을 Sonnet·Haiku 모델로 제한해 지출 관리 — 조직·그룹·개인별 한도와 병행.
- **제외 범위**: 제로 데이터 보존(zero data retention)·HIPAA 대응 구성·고객 관리 암호화 키(CMEK) 조직은 현행 설정 유지, 통합 대상 제외.
- **연계 일정**: 9-16 Pro·Max 통합 시작 → 10-23 Enterprise GA. 같은 주간의 Duet(10-21 연구 프리뷰)과 함께 '상시·클라우드 에이전트' 라인업 확장 국면.

## 맥락

- [[concepts/claude-duet-proactive-agent]] — 같은 주간의 상시 대기 에이전트 리서치 프리뷰, 통합 Claude는 '대화 내 에이전트' 축
- [[concepts/google-workspace-mcp-agentic-oauth]] — 에이전트 신원 분류·권한 의무화 흐름과 맞물리는 기업 에이전트 거버넌스
- [[tools/gemini-agent-work]] — Google Cloud 기업용 범용 에이전트와 같은 기업 에이전트 경쟁 축