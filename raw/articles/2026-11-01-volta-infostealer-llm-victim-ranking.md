---
title: "Cisco Talos VOLTA — LLM이 피해자를 돈 되는 순서대로 골라주는 인포스틸러"
source_url: "https://blog.talosintelligence.com/appraisal-by-ai-model-driven-victim-prioritization-in-the-volta-infostealer/"
source_type: "news"
authors: ["Cisco Talos"]
published: 2026-10-31
fetched: 2026-11-01
tags: [volta, infostealer, talos, llm, malware, openrouter, credential-theft]
status: raw
---

# Cisco Talos VOLTA — LLM이 피해자를 돈 되는 순서대로 골라주는 인포스틸러

> Cisco Talos가 10-31 공개한 Windows 인포스틸러 VOLTA-AUTODOXER는 훔친 자격증명·세션을 LLM에 넘겨 피해자의 현금화 가치와 OPSEC를 평가받는 'AI 심사' 단계를 갖춘다. 침투나 은폐가 아니라 탈취 후 선별(트리아지)에 LLM을 쓰는 첫 문서화 사례다. (Cisco Talos, WIRED·TSN·Unite.AI 보도 기반)

## 내용

- **탈취 범위**: Chromium·Firefox·Thunderbird 브라우저 자격증명·쿠키·결제카드, 암호화폐 지갑 시드, Microsoft OAuth 토큰, SSH·클라우드 키, Discord·Telegram·Steam·Roblox 세션, 스크린샷까지 싹쓸이한다. 2차 스윕에서는 Gmail 등 중심 계정에서 영수증·주문 내역으로 피해자상을 더 채운다.
- **AI 심사 단계**: 수집물을 직렬화한 증거 번들을 OpenRouter 채팅 컴플리션 엔드포인트로 POST한다. 240단어 시스템 프롬프트는 '법의학 인텔리전스 분석가' 역할을 주고 WHAT THEY'RE WORTH(현금화 가치 상·중·하)와 THEIR OPSEC 섹션을 요구한다. 결과는 AI_Analysis.txt로 저장돼 volta_dox.zip에 포함된다.
- **모델 체인**: 기본값은 Claude Opus 4.6, 거부 문구('I can't' 등) 감지 시 Moonshot Kimi K2, 다시 Google Gemini 2.5 Flash로 폴백한다. temperature 0.2. API 키가 없으면 AI 단계는 건너뛰고 스틸러 본기능만 동작한다.
- **발견 경로**: Talos의 CAIRN(Cognitive Artifact Intelligence Research Network) 연구에서 포착됐다. 분석 샘플 최초 발견은 2026-10-11. 자가 삭제형이며, 확인된 공격 인프라는 전부 서드파티 소유다.
- **한계**: 피해자 수·실전 사용 여부는 Talos도 추적하지 않았다. 모델 벤더의 대응이나 실제 거부·준수 여부는 보고되지 않았다. 공개된 것은 샘플 1개의 해시뿐이다.

## 맥락

- [[concepts/wiz-black-october-ai-platform-breaches]] — Wiz 'Black October', AI 개발 플랫폼 9곳 자격증명 침해·LLMjacking (2026-10-31 위키)
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델 + dual-LLM/CaMeL + Tier 등급
- [[concepts/cairn-norforge-ai-agent-hacking-spree]] — Cairn 해킹 캠페인, 오픈소스 에이전트 플랫폼으로 100+ 기업 침해 (2026-10-20 위키)
