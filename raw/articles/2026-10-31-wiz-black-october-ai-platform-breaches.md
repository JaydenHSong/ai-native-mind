---
title: "Wiz 'Black October' — 10월 한 달 AI 개발 플랫폼 9곳에서 자격증명 침해 공개"
source_url: "https://theinjection.dev/items/wiz-black-october-ai-platforms/"
source_type: "news"
authors: ["The Injection", "Wiz Research"]
published: 2026-10-30
fetched: 2026-10-31
tags: [wiz, security, supply-chain, llmjacking, api-keys, agent-security]
status: raw
---

# Wiz 'Black October' — 10월 한 달 AI 개발 플랫폼 9곳에서 자격증명 침해 공개

> Wiz Research가 10-30 공개한 'Black October' 정리: 10월 한 달 동안 AI 개발 플랫폼 9곳이 자격증명 침해를 공개했다. 공통점은 모델 자체가 아니라 고객의 AI 제공자 키를 쥐고 있는 중간 플랫폼을 노렸다는 점이다. 탈취된 키는 30분 안에 검증됐고, 재판매되는 추론(LLMjacking)으로 이어졌다. (Wiz 요약·2차 보도 교차)

## 내용

- **9곳 목록**: Fireworks AI(10-06), Andromeda(10-09), Zeabur(10-14), Lightning AI(10-15), OpenCode(10-16~17), Railway(10-20), Warp(10-23), CommandCode(10-28), Northflank(10-30).
- **공통 패턴**: 단일 취약점이 아니라 공통 사냥감이다. 모든 공개 보고는 저장된 환경변수, 특히 AI 제공자 키를 노린 공격을 묘사한다. Fireworks·OpenCode·Warp는 '에이전트 스웜' 징후를, OpenCode·CommandCode는 '증류(distillation)' 시도를 원인으로 지목했다.
- **하류 남용 규모**: 탈취된 기업용 Amazon Bedrock 키 2건이 추적됐다. 한 건은 약 30시간 동안 약 80만 콜(약 90% 성공, 성공 콜의 약 75%가 Opus 계열), 다른 한 건은 약 13시간 동안 약 170만 콜로, 합산 정가 기준 $100,000을 넘겼다. 키는 자격증명 접근 보고 후 30분 안에 검증됐다.
- **피해 범위**: Railway는 최대 1.85%의 워크스페이스(약 100,000개)에서 환경변수가 유출됐을 수 있다고 밝혔고, OpenCode 침해는 약 1.4%의 Console 사용자가 저장한 키를 가진 레거시 Console 시스템에 도달했다. Zeabur는 사건을 계기로 서비스를 종료한다고 밝혔다.
- **재판매망**: Wiz는 탈취 키를 테스트한 재판매 업자 'momo'와 'Xingjiabi'를 지목했다. 단, Wiz는 9건 배후에 단일 행위자가 있다고 주장하지 않으며, 재판매 인프라와 최초 침해의 연결도 입증되지 않았다고 선을 그었다.
- **한계**: Wiz 원문은 2차 요약을 통해 확인했으며, 탈취된 고객 키 총수는 아직 어느 플랫폼도 공개하지 않았다. 대부분의 근본 원인은 조사 중이다.

## 맥락

- [[concepts/litellm-pypi-supply-chain-compromise]] — LiteLLM 1.107.0 PyPI 공급망 침해, .pth 지속 실행 백도어 (2026-10-22 위키)
- [[concepts/opencode-key-breach]] — OpenCode 키 노출 사고, 폐기 중 레거시 콘솔 침입·3사 API 키 (2026-10-18 위키)
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델 + dual-LLM/CaMeL + Tier 등급
- [[concepts/cairn-norforge-ai-agent-hacking-spree]] — Cairn 해킹 캠페인, 오픈소스 에이전트 플랫폼으로 100+ 기업 침해 — 건당 $50 (2026-10-20 위키)
