---
title: "Block, Dessa 공개 — 텍스트 없이 음성만으로 학습한 풀듀플렉스 음성 AI"
source_url: "https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/"
source_type: "news"
authors: ["Block", "TechCrunch", "CoinDesk", "Cryptopolitan"]
published: 2026-10-24
fetched: 2026-10-25
tags: [block, dessa, voice-ai, speech-to-speech, full-duplex, local-inference]
status: raw
---

# Block, Dessa 공개 — 텍스트 없이 음성만으로 학습한 풀듀플렉스 음성 AI

> Jack Dorsey의 Block이 10-23 음성 전용 AI 모델 Dessa를 공개, 10-24 TechCrunch·CoinDesk 등 보도 확산. 텍스트 변환 단계 없이 음성에서 음성으로 직접 처리하는 풀듀플렉스 모델로, 말하면서 동시에 듣고 끼어들기·웃음·백채널('yeah', 'got it')을 처리. 단일 NVIDIA GB200 NVL72 랙으로 처음부터 학습했고, M4 Max 이상 MacBook Pro에서 로컬 실행이 가능하다고 주장. 연구 프리뷰 단계로 대기자 명단 운영 중, 파라미터·가격·벤치마크 미공개. (Block 발표·TechCrunch·CoinDesk·Cryptopolitan 교차)

## 내용

- **아키텍처**: 음성 입력→음성 출력, 중간 텍스트 없음. 기존 음성 비서가 음성을 텍스트로 바꾸며 감정·억양·타이밍 정보를 버린다는 문제의식에서 출발. 풀듀플렉스라 말 도중 끼어들기·웃음·감정 변화에 실시간 반응.
- **학습 효율 주장**: 텍스트 LLM보다 '수백 배 적은 단어'로 언어를 학습했다고 Block 주장. 음성은 단어당 수천 배 많은 바이트를 차지해 학습이 더 어렵다는 설명과 함께 단일 GB200 NVL72 시스템으로 학습 완료.
- **실행**: 실시간보다 빠른 추론, M4 Max 이상 MacBook Pro에서 로컬 실행 가능 주장. 소형 연구 조직(토론토 스타트업 Dessa 출신, Ragavan Thurairatnam 주도, Dorsey 직보)이 8년 이상 생성 음성 모델을 개발해 온 배경.
- **공개 범위**: 연구 프리뷰, 대기자 명단. 소수 AI 안전 연구자에게 먼저 접근을 열어 예상 못한 위험을 찾는다는 방침. 파라미터 수·API·가격·벤치마크 전부 미공개 — 증거는 Block 자체 데모 녹음뿐.
- **데모와 반응**: 유도 없는 실시간 대화 녹음 공개, OpenAI GPT-Live-1과의 대화 데모도 포함(해당 개발자의 검증·지지 없음). The Verge는 대체로 자연스럽지만 어색한 구간도 있다고 평가(상대를 'Ronaldo'로 착각한 구간). 인간다움에 대한 경탄과 전화 사기 악용 우려가 동시에 보도됨. CZ는 어린이 교육 활용에 관심을 표명했다는 CoinDesk 보도.
- **주의**: 어제(10-24) 수집에서 연구 프리뷰 단계로 보류했던 주제이나, 10-24 보도 확산과 로컬 실행 주장·사기 우려라는 새 맥락이 더해져 오늘 정식 수집 대상으로 승격. 수치·성능 주장은 전적으로 Block 자체 발표임.

## 맥락

- [[patterns/agent-safety-runtime]] — 음성 에이전트의 사기·기만 위험과 실행시점 안전 통제
- [[concepts/tool-use]] — 음성 인터페이스가 도구 호출과 만나는 지점, 텍스트 파이프라인 없는 음성 에이전트의 설계 차이
- [[concepts/moonshot-kimi-k31-pro]] — 오픈웨이트 공개 전 능력 절충 공개 사례와 Dessa의 프리뷰-우선 공개 방식 대비
