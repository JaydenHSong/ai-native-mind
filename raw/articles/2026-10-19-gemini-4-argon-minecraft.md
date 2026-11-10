---
title: "Gemini 4 Argon 에이전트 4기가 마인크래프트 엔더드래곤 격파 — 27시간 14분, 프로그램 2,783개, 인간 개입 0"
source_url: "https://WWW.ENGADGET.COM/2289944/google-gemini-4-agents-just-beat-minecraft-with-no-human-intervention/"
source_type: "paper"
authors: ["Maxence Faldor, Satinder Singh, Roberta Raileanu (Google DeepMind)", "Engadget", "The Decoder", "explainx.ai"]
published: 2026-10-19
fetched: 2026-10-19
tags: [gemini-4-argon, minecraft, multi-agent, long-horizon, google-deepmind, coordination]
status: raw
---

# Gemini 4 Argon 에이전트 4기가 마인크래프트 엔더드래곤 격파 — 27시간 14분, 프로그램 2,783개, 인간 개입 0

> Google DeepMind 연구팀이 10/15 arXiv에 공개한 논문("A team of Gemini 4 Argon agents beats Minecraft") — Gemini 4 Argon 4개 에이전트가 무작위 시드 마인크래프트 서바이벌 월드에서 엔더드래곤을 완전 자율로 격파. 10/18–19 보도 물결(Engadget 10/19 09:19 UTC·The Decoder 10/18·explainx·mezha·iaenunminuto) 기준 수집 — 논문 자체는 윈도우 3일 전.

## 내용

- **설정**: 무작위 생성 Java 1.20.4 서바이벌, easy 난이도, 치트 off. 역할·전략·게임 전용 도구 **미지정** — 에이전트가 인게임 채팅과 공유 메모리로 스스로 분업.
- **역할 자발 분화**: "janesick"은 도구 제작, "gyldenia"는 식량·보급 수집, "auratian"은 포털 점화, "bulicame"은 엔더맨 대피소 건설 + 최후의 일격. 서로에게 위협 경고·좌표 공유·사망한 동료의 아이템 회수.
- **수치**: 27시간 14분(인게임 약 81일, 서버 재시작 6회), JavaScript 프로그램 **2,783개**(63,313줄), 채팅 메시지 229개, 사망 **605회**. 프로그램 중앙값 실행 시간 33.5초. 입력 토큰 13.5억 개.
- **비용**: 승리까지 출시가 기준 약 **$520**, 전체 세션 약 $810(출시가) / **$1,620**(표준가 — 2027년 적용).
- **검증**: 5번째 "Observer" 에이전트가 부정행위 감시 — 이상 없음. 연구진은 라이브 대시보드로 관측했고 개입할 이유가 없었음.
- **구현**: 오픈소스 Mineflayer 라이브러리로 플레이어 조작 — 픽셀·키보드 입력 없음. 텍스트 게임 상태 접근 + 패스파인딩 플러그인 사용.
- **저자 주장**: 표준 Mineflayer만으로 사전 탐색 없는 시드에서 "엔드투엔드 자율 완주"는 최초 사례. 저자들 스스로 "인간처럼 플레이한 게 아니라 **장기 수평적 코딩·협조 테스트**"로 프레임.

## 맥락

- [[concepts/gemini-4-argon]] — 10/1 출시·10/13 GA 페이지의 "실전 검증" 보강. 벤치 점수가 아니라 27시간짜리 실제 작업.
- [[concepts/llm-evaluation]] — Taste-Bench(10/19 수집)와 쌍을 이루는 장기 수평 평가 사례. "중간 판단력"을 2,783개 프로그램으로 증명한 셈.
- [[concepts/multi-agent-dialect]] — 자발적 분업·공유 메모리의 대규모 실증.
- 한계: 단일 런(재현율 미공개), easy 난이도, 텍스트 상태 접근(픽셀 플레이보다 유리), 마인크래프트는 학습 데이터에 거의 확실. 인간 무작위 시드 스피드런 기록은 7분 미만(HowLongToBeat 중앙값 45시간).
