---
title: "Google Gemini 4 Carbon — 사이버 방어에 특화된 최강 모델, 일단 소수 방어자에게만"
source_url: "https://www.digitbin.com/gemini-4-carbon-cybersecurity-access/"
source_type: "news"
authors: ["Google DeepMind", "Artificial Analysis", "DigitBin"]
published: 2026-10-28
fetched: 2026-10-29
tags: [google, deepmind, gemini, carbon, cybersecurity, frontier-model, fairwind]
status: raw
---

# Google Gemini 4 Carbon — 사이버 방어에 특화된 최강 모델, 일단 소수 방어자에게만

> Google DeepMind가 10-28 Gemini 4 Carbon을 발표했다. Gemini 4 Argon이 정식 출시(GA)된 지 약 2주 만이다. 포지션은 명확하다: 취약점 발견·검증·패치까지 사이버 방어 사이클 전 단계와, 며칠씩 이어지는 장기 엔지니어링 작업에 특화된 모델이다. 다만 성능이 강할수록 접근은 좁게 열린다 — 첫 사용자는 선별된 사이버 방어자 소수이며, 일반 개발자·소비자 일정은 미공개다. (Google DeepMind 발표·Artificial Analysis 지수·DigitBin/Particle 교차)

## 내용

- **독립 지수 1위 주장**: Artificial Analysis Intelligence Index v5.0에서 Carbon은 59점으로 1위. Claude Opus 5.5(58), GPT-6 Astra(57), Argon(50)을 앞선다. WebDev Arena에서는 Argon보다 89 Elo 올라 1,768~1,769점으로 4위다.
- **사이버 벤치마크(회사 발표, 가드레일 없는 평가)**: 취약점 발견 SEC-bench Pro 88.2%, 익스플로잇 검증 ExploitGym 54.8%, 근본 원인 패치 CWE-bench 71.0%. 내부 보안 코드 생성 성공률은 Argon의 2배 이상, Chrome 팀 내부 테스트에서는 다른 대형 프런티어 모델보다 10배 이상 높은 고품질 패치율을 보였다고 한다. 모두 회사 자체 평가라 독립 검증이 남아 있다.
- **장기 작업**: 내부 팀이 어려운 엔지니어링 과제에 며칠씩 Carbon을 돌려 막힌 지점을 뚫고 근본 원인을 찾는 장면을 관찰했다고 DeepMind는 밝혔다. Terminal-Bench 계열에서도 Argon 대비 큰 폭의 향상이 보고됐다.
- **접근 통제(Fairwind Program)**: 선별된 사이버 방어자 → 신뢰 파트너 순으로 단계적 확대하며, 그 사이 가드레일을 다듬고 미국 정부의 자발적 사전 출시 테스트에 참여한다. 일반 공개 일정·모델 ID·컨텍스트 윈도우(일부 보도 1M 토큰)·API 페이지는 아직 공개되지 않았다.
- **가격**: 도입 가격으로 입력 토큰 100만 개당 $2, 출력 $10(캐시 입력 95% 할인)이며, 이후 $4/$20으로 오를 예정이라는 보도가 있다. 과제당 비용은 Argon과 비슷한 수준($7.76 대 $7.68)이라는 분석도 있다.

## 맥락

- [[concepts/gemini-4-argon]] — 10-01 위키의 Gemini 4 Argon, Carbon의 직전 세대이자 비교 기준
- [[concepts/gemini-4-carbon-testing]] — 10-10 위키의 'Carbon' 내부 테스트 기록, 이번 정식 발표와 연결된다
- [[concepts/google-genie-4-native-audio-world-model]] — 전날 위키의 Genie 4, 같은 주 Google DeepMind의 두 번째 대형 발표
