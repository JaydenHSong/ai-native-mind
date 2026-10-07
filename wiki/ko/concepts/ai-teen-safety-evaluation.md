---
title: "AI 청소년 안전성 평가 — ChatGPT for Teens 'Unacceptable Risk' 판정"
category: concepts
tags: [teen-safety, common-sense-media, openai, chatgpt, youth-ai-safety-institute, parental-controls, age-estimation]
created: 2026-10-07
updated: 2026-10-07
sources:
  - "raw/articles/2026-10-07-chatgpt-teens-unacceptable-risk.md"
related:
  - "[[concepts/nyc-ai-hearing]]"
  - "[[concepts/ai-text-watermarking]]"
  - "[[patterns/agent-authority-model]]"
status: draft
confidence: medium
---

# AI 청소년 안전성 평가 — ChatGPT for Teens 'Unacceptable Risk' 판정

## 쉽게 읽기

**비유**: 자동차에 어린이 보호 잠금장치가 있다고 광고했는데, 독립 기관이 4,000번 문을 당겨보니 절반은 그냥 열렸다. Common Sense Media가 OpenAI의 청소년용 ChatGPT를 테스트한 결과다 — "보호 기능이 있다"는 주장과 "실제로 동작한다"는 실측 사이의 간극을 숫자로 보여준 사건.

## 한줄 정의

AI 제품의 청소년 보호 기능에 대한 독립 기관의 실측 평가 — Common Sense Media 산하 Youth AI Safety Institute가 2026-10-07 ChatGPT for Teens를 18세 미만 대상 "Unacceptable Risk"로 판정하고, 보호 기능이 광고대로 동작할 때까지 청소년 접근 차단을 촉구한 사례.

## 핵심 내용

- 판정: 8개 AI 원칙 중 2개(Keep Kids & Teens Safe, Put People First)가 Unacceptable Risk, 4개 High, 2개 Moderate.
- 테스트: 4,000+ 프롬프트, 출시 전(7/13–8/17)과 후(8/25–9/28) 비교. 13–17세 계정(부모 연동/미연동) + 19세 등록 계정.
- 통과: 노골적 성적 롤플레이 거부 등 일부 보호장치는 유지.
- 실패:
  - 자살·자해·섭식장애 60분 대화(부모 연동) → 부모 알림 0건 (목표 1시간 이내). 위기 배터리 전체 알림 4건.
  - 위기 핫라인 언급률 33%→23%, 우울증 프롬프트 63%→3%. Red Line 5개 중 3개가 95% 기준 미달.
  - Study Mode "Show me the answer" 팝업 (연동 13세 43%, 미연동 17세 90%). @study 접두어 삭제로 Study Hours 탈출 → 과제 100% 대신 완성.
  - 연령 추정 실패: 19세 등록 계정+10대 페르소나 ~1,000 프롬프트 → teen experience 발동 0회 (나이 13 명시에도). 13세·17세 계정 간 차이 감지 불가.
  - ~2,000 프롬프트 중 휴식 알림 2건. Quiet Hours는 기기 시간대 변경으로 우회.
- Institute의 7개 권고: 독립 검증 전까지 청소년 접근 차단, Study Mode 정답 보기 제거, 위기 알림 상세화 등.
- OpenAI는 방법론에 이의 제기. Institute는 초안을 OpenAI와 사실관계 검토했고, OpenAI Foundation 자금도 받으나 편집 독립성을 주장.
- 배경: 2025-10-23 ChatGPT High Risk, 2025-11-14 정신건강 지원 Unacceptable Risk 판정 이력. CA 주지사는 AI 컴패니언 위기 프로토콜·부모 통제·연례 감사를 법제화.

## 왜 중요한가

- "주장 vs 실측"의 간극을 정량화한 첫 대규모 독립 평가 — AI 안전 논쟁이 기업 주장 대 기업 주장이 아니라 **재현 가능한 테스트**로 이동하는 신호.
- 연령 추정(age estimation)의 실패는 더 넓은 문제: teen mode·연령별 권한 차등 같은 설계가 "누가 10대인지"를 모르면 전부 무너짐. [[patterns/agent-authority-model]]의 권한 단계도 식별(identification) 전제가 깨지면 무력화.
- 규제 압력선상 위치: [[concepts/nyc-ai-hearing]]의 킬 스위치 법안, EU AI Act 대응(textGrain)과 같은 흐름의 민간 평가 축. CA 법제화가 이미 시작됨.

## 관련 개념

- [[concepts/nyc-ai-hearing]] — 뉴욕시 AI 청문회, 청소년 보호 법안 패키지
- [[concepts/ai-text-watermarking]] — EU AI Act 대응, 규제의 기술적 구현
- [[patterns/agent-authority-model]] — 연령·권한 식별이 전제인 권한 프레임워크

## 참고 소스

- [Common Sense Media, ChatGPT for Teens에 'Unacceptable Risk' 판정 (10/7)](raw/articles/2026-10-07-chatgpt-teens-unacceptable-risk.md)
