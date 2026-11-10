---
title: "AI 청소년 안전성 평가 — ChatGPT for Teens 'Unacceptable Risk' 판정"
category: concepts
tags: [teen-safety, common-sense-media, openai, chatgpt, youth-ai-safety-institute, parental-controls, age-estimation]
created: 2026-10-07
updated: 2026-10-15
sources:
  - "raw/articles/2026-10-07-chatgpt-teens-unacceptable-risk.md"
  - "raw/articles/2026-10-15-states-sue-openai-child-safety.md"
related:
  - "[[concepts/nyc-ai-hearing]]"
  - "[[concepts/ai-text-watermarking]]"
  - "[[patterns/agent-authority-model]]"
  - "[[concepts/character-ai-bankruptcy]]"
  - "[[concepts/eight-states-openai-child-safety-lawsuit]]"
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

## 2026-10-14 보강 — Common Sense Media의 요구가 "접근 차단"으로 확대 + Character.AI 파산의 교차점

Axios(10/13): Common Sense Media가 청소년의 **ChatGPT 접근 유지 차단(keeping teens off ChatGPT)** 을 직접 촉구 — 10/7 'Unacceptable Risk' 판정의 요구사항이 "보호 기능이 광고대로 동작할 때까지 접근 차단"에서 공개적 촉구로 확대. 이 페이지의 핵심 내용(4,000+ 프롬프트 실측)이 이제 정책 요구의 근거 문헌이 됨.

같은 주 [[concepts/character-ai-bankruptcy]] — Character.AI의 파산 신청 배경에 **청소년 안전 소송**(Megan Garcia 소송, Sewell Setzer III 자살 사건, 올해 초 5건 합의)이 자리. 독립 평가의 "Unacceptable Risk" 판정과 법원의 소송이 같은 주에 하나의 챕터11 파일로 연결됨:

- 평가 축: CSM/Youth AI Safety Institute의 실측(정량).
- 법적 축: Character.AI 파산 신청서·스토킹호스 입찰(디즈니 $20M) — 청소년 피해 소송이 기업 가치·존속에 직접 타격을 준 첫 대형 사례.
- "주장 vs 실측"의 간극(왜 중요한가 1번)이 이제 **법적 리스크 → 파산**으로 이어지는 경로를 확보 — 1인 개발자 관점에서는 청소년 대상 기능의 "보호 기능 광고"가 곧 법적 노출 면적.

## 2026-10-15 보강 — 8개 주 법무장관의 소송: 평가→요구→소송 3단의 완결

azcentral(10/14) 원보도: 애리조나 AG Kris Mayes가 Maricopa County 상급법원에 OpenAI 소송 제기. Arkansas·Idaho·Montana·Iowa·Kansas·West Virginia·Nebraska 7개 주도 같은 날 각자 법원에 별도 소송 — **공동 소송이 아닌 8개 병렬 소장**.

- 혐의: ChatGPT가 미성년자의 강박적 사용을 극대화하도록 설계 — "조작적 디자인 전술"과 아첨형(sycophantic) 동조성. 인용 피해: 비판적 사고 저하·편집증/망상·무면허 의료 조언·자해 조장. 모든 혐의는 **주장 단계, 법원 판단 아님**.
- 소장: 애리조나 87페이지. 요구는 ChatGPT 작동 방식 변경 명령 + 소비자 사기 이론에 따른 **고의 위반 1건당 최대 $10,000**. 타 주들은 미성년자 피해 기간 중 수익 반환(disgorgement)과 안전 주장 금지 가처분 요구.
- OpenAI 반박(Drew Pusateri 대변인): 학부모 통제·휴식 알림·연령 적합 보호 장치 존재, 사실관계 다툼.
- 병렬 전선: Bloomberg Law — 10/13 별도 집단소송(아동 데이터의 부모 동의 없는 수집 혐의). 배경: 2026년 6월 플로리다 AG 소송, 6월 다주 사용자 안전 소환장. AI Lawsuit Tracker 기준 OpenAI 관련 소송 **약 51건** 진행/계류.
- 이 페이지의 프레이밍으로 읽으면: CSM의 "Unacceptable Risk" 판정(10/7) → Common Sense Media의 공개 접근 차단 촉구(10/14 보강) → **주 법무장관들의 직접 소송(10/15)** — 평가→요구→소송 3단이 한 주 안에 완결. 이 페이지의 정량 평가(4,000+ 프롬프트 실측)가 이제 사법 요구의 근거 문헌이 됨.
- [[concepts/character-ai-bankruptcy]]가 "소송→파산"의 기업 리스크 경로였다면, 이번은 **"소송→작동 방식 변경 명령"**의 사법 직접 개입 경로 — 제품 설계 자체가 판결 대상이 될 수 있다는 선례. 1인 개발자 관점에서는 "중독 설계"로 읽힐 수 있는 UI·응답 패턴(아첨형 동조성 등)이 곧바로 법적 노출 면적.
- 상세: [[concepts/eight-states-openai-child-safety-lawsuit]]

## 관련 개념

- [[concepts/nyc-ai-hearing]] — 뉴욕시 AI 청문회, 청소년 보호 법안 패키지
- [[concepts/ai-text-watermarking]] — EU AI Act 대응, 규제의 기술적 구현
- [[patterns/agent-authority-model]] — 연령·권한 식별이 전제인 권한 프레임워크
- [[concepts/character-ai-bankruptcy]] — 청소년 안전 소송이 파산으로 이어진 첫 대형 사례
- [[concepts/eight-states-openai-child-safety-lawsuit]] — 평가→요구→소송 3단을 완결한 8개 주 AG 소송

## 참고 소스

- [Common Sense Media, ChatGPT for Teens에 'Unacceptable Risk' 판정 (10/7)](raw/articles/2026-10-07-chatgpt-teens-unacceptable-risk.md)
