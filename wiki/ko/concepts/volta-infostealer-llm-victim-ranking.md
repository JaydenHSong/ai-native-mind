---
title: "VOLTA 인포스틸러 — LLM이 피해자를 돈 되는 순서대로 골라주는 악성코드"
category: concepts
tags: [volta, infostealer, talos, llm, malware, openrouter, credential-theft]
created: 2026-11-01
updated: 2026-11-01
sources:
  - "raw/articles/2026-11-01-volta-infostealer-llm-victim-ranking.md"
related:
  - "[[concepts/wiz-black-october-ai-platform-breaches]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/cairn-norforge-ai-agent-hacking-spree]]"
  - "[[concepts/litellm-pypi-supply-chain-compromise]]"
status: draft
confidence: high
---

# VOLTA 인포스틸러 — LLM이 피해자를 돈 되는 순서대로 골라주는 악성코드

## 쉽게 읽기

**비유**: 도둑이 집을 턴 뒤, 훔친 물건 목록을 감정사에게 맡겨 "이 집부터 노려라"는 우선순위를 받아 오는 셈이다. 침입 기술이 아니라 탈취 후 선별에 LLM을 쓴다.

| 용어 | 풀이 |
|------|------|
| **인포스틸러** | 자격증명·쿠키·지갑 정보를 훔치는 악성코드 |
| **트리아지** | 피해자·자산을 가치 순으로 선별하는 작업 |
| **OpenRouter** | 여러 LLM 제공자를 하나의 API로 연결하는 중개 서비스 |

## 한줄 정의

2026-10-31 Cisco Talos 공개 — 탈취한 자격증명·세션을 LLM에 넘겨 피해자의 현금화 가치와 OPSEC를 평가받는 Windows 인포스틸러 VOLTA-AUTODOXER.

## 핵심 내용

- **탈취 범위**: 브라우저 자격증명·쿠키·결제카드, 암호화폐 지갑 시드, OAuth 토큰, SSH·클라우드 키, 메신저·게임 세션, 스크린샷. 2차 스윕은 중심 계정의 영수증·주문 내역으로 피해자상을 보강한다.
- **AI 심사**: 증거 번들을 OpenRouter로 POST해 '법의학 인텔리전스 분석가' 프롬프트로 WHAT THEY'RE WORTH·THEIR OPSEC 평가를 받는다. 결과는 AI_Analysis.txt로 저장돼 유출 zip에 포함된다.
- **폴백 체인**: Claude Opus 4.6 → Moonshot Kimi K2 → Gemini 2.5 Flash 순으로, 거부 문구 감지 시 다음 모델로 넘어간다. temperature 0.2. API 키가 없으면 AI 단계 없이도 동작한다.
- **발견**: Talos의 CAIRN 연구에서 포착, 분석 샘플 최초 발견 2026-10-11. 자가 삭제형이며 공격 인프라는 전부 서드파티 소유다.
- **미확인**: 피해자 수·실전 사용 여부·모델 벤더 대응은 보고되지 않았다. 공개된 것은 샘플 1개의 해시뿐이다.

## 왜 중요한가 (1인 개발자 관점)

1. **LLM이 공격자의 '분석가'가 됐다**: 모델이 침투를 돕는 게 아니라, 이미 털린 데이터를 돈 되는 순서로 정리해 준다. 방어의 초점은 침입 탐지에서 자격증명 수명 관리로 옮겨가야 한다.
2. **가드레일 회피가 설계에 들어갔다**: 거부 시 폴백하는 체인은 모델별 거부가 방어선이 되지 못함을 보여준다. API 키 유출 시 LLM 호출 자체가 공격 자산이 된다.
3. **키 하나가 도미노다**: 브라우저·클라우드·메신저 키가 한 번에 털리면, 피해자 프로파일링까지 자동화된다. 장기 키를 줄이고 단기·범위 제한 키로 바꾸는 것이 곧 피해 규모를 줄이는 일이다.

## 한계 (명시)

- Talos 원문은 2차 보도를 통해 확인했으며, 원문 수치의 1차 대조는 남았다.
- 실전 확산 규모는 미확인 상태다. 단일 샘플 분석을 캠페인으로 확대 해석해서는 안 된다.
- 모델이 실제로 요청을 준수했는지, 어느 모델이 거부했는지는 보고되지 않았다.
