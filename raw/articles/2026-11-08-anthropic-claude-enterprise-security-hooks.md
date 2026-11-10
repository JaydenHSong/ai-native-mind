---
title: "Anthropic, Claude Enterprise에 추론 훅 GA·보안 센터 베타 — 기업 DLP가 Claude의 답변·도구 호출 전에 차단 (11-05)"
source_url: "https://www.agent-intelligence.net/anthropic-security-center-inference-hooks/"
source_type: "news"
authors: ["Anthropic", "agent-intelligence", "blockchain.news"]
published: 2026-11-05
fetched: 2026-11-08
tags: [anthropic, claude-enterprise, security, dlp, inference-hooks]
status: raw
---

# Anthropic, Claude Enterprise에 추론 훅 GA·보안 센터 베타 — 기업 DLP가 Claude의 답변·도구 호출 전에 차단 (11-05)

> Anthropic이 11-05 발표한 Claude Enterprise 보안 업데이트의 핵심은 추론 훅(inference hooks)의 정식 출시(GA)이다. 기업의 기존 데이터 유출 방지(DLP)·보안 도구가 Claude의 프롬프트와 도구 호출을 생성·실행 전에 검사하고, 거부 판정이 나오면 Claude는 답하지 않는다. 보안 센터(베타), 중앙 관리 콘솔(베타), Cowork용 EDR 센서(베타)도 함께 나왔다.

## 내용

- **추론 훅 (GA)**: 프롬프트 훅과 도구 호출 전(pre-tool-call) 훅 2종. 프롬프트 훅은 사용자의 프롬프트를 고객 보안 서버로 보내 허용·거부 판정을 받고, 도구 호출 전 훅은 파일 읽기·DB 조회 같은 도구 호출 실행 전에 검사한다. 검사는 클라이언트를 떠난 뒤 추론이 시작되기 전, Anthropic 서버에서 이뤄진다. 판정은 허용·차단 2가지뿐이며 부분 수정·편집은 없다. 기본 타임아웃은 5초(고객 조정 가능).
- **검사 범위**: 대화 텍스트, 도구 호출과 그 결과, 첨부 파일 텍스트가 검사 대상이다. 파일·이미지 바이트와 시스템 지시문은 제외된다. Anthropic은 검사한 내용이 아니라 설정 데이터와 판정만 보관한다고 밝혔다.
- **연동 대상**: Netskope·Palo Alto Networks·Proofpoint·Zscaler의 DLP 엔드포인트 또는 고객 자체 서버. 적용 범위는 claude.ai(웹·데스크톱·모바일), Cowork, Claude Code, Claude for Microsoft 365, Claude in Slack, Claude in Chrome이다. Claude Enterprise 조직에만 제공되며, Amazon Bedrock·Google Cloud에서는 쓸 수 없고 Claude Platform 조직은 대상 밖이다.
- **보안 센터 (베타)**: 채팅·Cowork·Claude Code의 보안 설정을 한 페이지에 모아 Anthropic 권장 설정과 비교하고, 차이와 최근 변경을 표시하며 감사 보고서를 내보낼 수 있다. Anthropic은 법적 준수 인증이 아니라 안내라고 명시했다.
- **기타 베타**: admin.claude.com 중앙 관리 콘솔(SSO·SCIM·도메인 검증·그룹·Compliance API 키), Admin API 회원 로그아웃, 셀프 IP 허용 목록, 데스크톱 섀도 IT 차단, Cowork 가상머신 내 EDR 센서(탐지 전용, macOS·Windows). 프리뷰 기능은 추가 요금이 없다.
- **날짜 불일치 주의**: 한 추적 매체(aiweekly)는 추론 훅이 2026-10-20에 GA가 됐다고 적었으나, Anthropic의 11-05 공지와 대다수 보도는 11-05를 GA 발표일로 다룬다. GA 시점에 대해서는 Anthropic 원문 확인이 필요하다.

## 맥락

- [[concepts/anthropic-claude-cowork-enterprise-unified]] — 통합 Claude Enterprise 정식 출시, 11-16 기본 켜짐 (2026-10-26)
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델 + dual-LLM/CaMeL + Tier 등급
- [[concepts/anthropic-agent-skills-foundation]] — Anthropic Agent Skills의 Agentic AI Foundation 기증 (2026-10-23)
- [[concepts/google-agent-compute-engine]] — Google Cloud Agent Compute Engine, 에이전트 세션마다 하드웨어 격리 microVM (2026-10-23)
