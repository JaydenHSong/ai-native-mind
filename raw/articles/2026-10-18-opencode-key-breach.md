---
title: "OpenCode 키 노출 사고 — Anomaly Innovations, 레거시 콘솔 침입으로 3사 프로바이더 키 유출 가능성 통보"
source_url: "https://aitoolsrecap.com/Blog/opencode-breach-provider-api-keys-2026"
source_type: "news"
authors: ["AIToolsRecap", "The Latent", "OfficeChai", "Startup Fortune"]
published: 2026-10-18
fetched: 2026-10-18
tags: [opencode, api-keys, security-breach, distillation-attack, developer-tools]
status: raw
---

# OpenCode 키 노출 사고 — Anomaly Innovations, 레거시 콘솔 침입으로 3사 프로바이더 키 유출 가능성 통보

> Anomaly Innovations(구 SST, OpenCode 개발사)가 10/17 22:51 UTC경 피해 사용자에게 이메일 통보 — 10/17 00:30 UTC경 발생한 침입으로 OpenAI·Anthropic·Google 프로바이더 키 노출 가능성. 상태 페이지 공지 없이 이메일 통보만. 원문: AIToolsRecap(10/18 00:55 UTC), The Latent(10/17 21:07 UTC), OfficeChai·Startup Fortune.

## 내용

- 침입 경로: 폐기(decommission) 중이던 **레거시 콘솔 시스템**. 워크스페이스 저장 3사 키(OpenAI·Anthropic·Google) 노출 가능성. 피해 규모는 OpenCode Console 사용자의 약 **1.4%**.
- 타임라인: 회사 식별 최초 노출 10-17 00:30 UTC → 첫 통보 10-17 22:51 UTC(약 22시간 차이) → 2차 이메일 10-18 01:00 UTC 직전.
- 부정 사용 보고 2건: 한 사용자는 10-17 저녁 무단 Claude API 사용 확인, 다른 사용자는 약 **$100** 부정 요금 신고. 회사는 악용 여부 미확인 입장.
- 회사 설명: "대규모 증류(distillation) 공격" 관련 침해, 조사는 진행 중, 다른 데이터 유출 증거는 없음. Anthropic·OpenAI·Google과 대응 중.
- 조치 권고: 각 프로바이더 대시보드에서 키 폐기·재발급, 10-17 이후 사용 로그 점검. 공동창업자 Dax Raad(@thdxr) X에 본인 계정 공격 게시.

## 맥락

- [[concepts/agent-supply-chain-security]] — 개발 도구가 키 보관소가 되는 순간 공급망 위협이 됨.
- [[concepts/claude-misbehavior-disclosure]]·[[concepts/openai-agent-sepolia-wallet]] — 키·자금이 에이전트 경제의 공격 표면이 되는 흐름.
- [[patterns/ai-cost-management]] — API 키는 비용 자산: $100 부정 요금이 보여주는 최소 단위.
