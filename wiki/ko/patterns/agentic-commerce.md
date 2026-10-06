---
title: "Agentic Commerce"
category: patterns
tags: [agentic-commerce, shopping-agents, benchmarks, principal-agent, computer-use, steering, voice-agent, gemini, accessibility, stt]
created: 2026-09-24
updated: 2026-10-06
sources:
  - "raw/articles/2026-09-24-agentic-commerce-benchmark-booking.md"
  - "raw/articles/2026-09-25-gemini-live-avatar-business-calling-suncatcher.md"
  - "raw/articles/2026-09-26-audioeye-agent-accessibility-study.md"
  - "raw/articles/2026-09-27-sarvam-saaras-v4-stt.md"
  - "raw/articles/2026-10-06-tiktok-agentic-commerce.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[comparisons/agent-eval-frameworks]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: low
---

# Agentic Commerce

## 쉽게 읽기

**비유**: 심부름꾼에게 "제일 좋은 걸로 사 와"라고 시켰는데, 가게 주인이 심부름꾼 귀에 대고 "이걸로 사 가"라고 속삭였다. 에이전트 커머스의 핵심 질문은 **"에이전트가 누구 편인가"** 다.

| 용어 | 풀이 |
|------|------|
| **Principal-agent 문제** | 시킨 사람(주인)과 실행하는 사람(대리인)의 이해관계가 어긋나는 문제 — 에이전트 시대의 실전 버전 |
| **Steering** | 마켓플레이스가 에이전트의 선택을 특정 방향으로 유도하는 것 |

## 한줄 설명

에이전트가 상품을 고르고 결제하는 커머스 패러다임 — 아직 침투율은 1% 미만이지만, 마켓플레이스 스티어링이 에이전트 "충성도"를 78.6%에서 17.3%로 떨어뜨린다는 측정으로 평가 방식 자체가 흔들리고 있다.

## 문제 상황

- **기대**: 에이전트가 사용자를 대신해 최적 상품을 찾아 결제
- **현실**: Booking Holdings CEO — LLM 트래픽이 전체 숙박 예약의 "1%에 현저히 못 미침"
- **더 깊은 문제**: 새 벤치마크에서 computer-use 에이전트는 통제 조건에서 사용자 최적 상품을 78.6% 확률로 구매했지만, **마켓플레이스가 스티어링을 허용받으면 17.3%로 급락**

## 해결 방법

에이전트 평가에 **"적대적 환경" 조건**을 넣는다. 성능만 재는 게 아니라 "환경이 개입할 때 에이전트가 주인 편에 남는가"를 잰다. 한편 플랫폼들은 일제히 셀러/구매 도구를 여는 중 — Amazon은 셀러 콘솔을 Claude에 개방하고 자체 셀러 에이전트 "workflows"를 출시. 커머스의 에이전트화는 **플랫폼 주도**로 진행 중이다.

## 적용 예시

쇼핑 에이전트를 만들 때: (1) 스티어링 탐지 — 추천 상품이 사용자 최적과 얼마나 어긋나는지 로깅, (2) 주인 명시 — 에이전트의 principal을 프롬프트·정책에 못 박기, (3) 적대적 테스트 — 마켓플레이스 개입 시나리오를 eval에 포함.

## 장단점

| 장점 | 단점 |
|------|------|
| 에이전트 평가에 "충성도"라는 새 축 추가 | 침투율 1% 미만 — 아직 실험 단계, 데이터 부족 |
| principal-agent 문제를 실전 지표로 번역 | 스티어링 벤치마크 1건 — 교차 검증 필요 |

## 관련 패턴

- [[concepts/llm-evaluation|LLM Evaluation]] — "적대적 환경" 조건을 eval 설계에 넣어야 한다는 근거
- [[comparisons/agent-eval-frameworks|Agent Eval Frameworks]] — 기존 6대장 프레임워크에 스티어링/충성도 축이 없음 — 확장 후보
- [[concepts/agent-supply-chain-security|Agent Supply Chain Security]] — 마켓플레이스라는 "환경" 자체가 신뢰 모델의 일부가 됨

## 2026-09-25 보강 — Gemini 음성 커머스: "에이전트가 누구 편인가"에 음성 채널 추가

Gemini가 Pixel 11 유료 구독자를 대신해 **사업자에 직접 전화**를 건다 — 예약, 대기 음악(hold music) 감내, phone-tree(IVR) 탐색까지. computer-use의 음성 버전이다: "GUI 클릭"이 "IVR 버튼 누르기"로 바뀐 것.

### 스티어링 축의 확장

어제의 스티어링 벤치마크(충성도 78.6%→17.3%)는 **웹 UI** 환경이었다. 음성 채널에서는 스티어링이 다른 형태로 일어난다:

- 통화 상대의 **목소리 톤·영업 멘트** — 텍스트 추천보다 설득력이 강함
- **대기 시간** — 기다리게 만들어 특정 선택으로 유도
- Phone-tree 구조 자체가 선택지를 좁힘

→ "적대적 환경" eval 조건에 **음성 채널 시나리오**를 추가해야 한다는 함의. [[comparisons/agent-eval-frameworks]]의 확장 후보에 음성 스티어링 축 메모.

### 실무 적용

음성 에이전트를 만들 때: (1) 통화 transcript를 principal 최적과 대조 로깅, (2) 예약·결제 전 **음성 확인 + 텍스트 요약** 이중 확인, (3) 대기·유도 패턴 탐지 시 사용자에게 에스컬레이션.

## 2026-09-26 보강 — AudioEye: 접근성 백로그 = 에이전트 전환율 백로그

"에이전트가 누구 편인가"(스티어링)에 더해 **"에이전트가 내 사이트에서 결제를 완료할 수 있는가"** 가 전환율의 새 병목.

- **실험**: AudioEye(2026-09-24) — 6개 상용 모델 기반 에이전트 1,560개를 6개 사이트의 실세계 작업 13개에 투입, 10회 반복. 유일한 변수는 접근성 수정 패치 로드 여부.
- **결과**: 최악 사이트에서 완료율 **96% → 31%**(약 2/3 하락, 전 모델 공통). 이미지에만 숫자가 있는 작업은 60회 시도 전부 실패.
- **비용**: 접근성 수정 없으면 중앙값 기준 토큰 **43% 증가**(128k vs 90k), 최악 사이트 최대 6배 — 초과분은 에이전트 운영자 부담.
- **메커니즘**: 에이전트는 **접근성 트리**(스크린 리더와 같은 구조화된 지도)로 페이지를 읽음. "스크린 리더가 의존하는 alt 텍스트·폼 라벨·버튼 이름 = 쇼핑 에이전트가 의존하는 것".
- **수요 측**: NIQ Agentic Commerce Tracker(2026-09-24) — 미국 소비자 **51%**가 지난 한 달간 AI 도구로 쇼핑 지원. 단 월 ~500명 샘플(오차 ±4.4%p 수준).

### 실무 적용

쇼핑 에이전트를 만들 때 기존 체크리스트(스티어링 탐지·주인 명시·적대적 테스트)에 추가: (4) **에이전트 완료율 테스트** — 주요 여정 5개를 에이전트로 10회씩 돌려 완료율을 전환율 옆에 둔다. 접근성 수정은 "컴플라이언스 예산"이 아니라 **"전환율 예산"** 에서 집행.

### 한계·모순 플래그

- 벤더 생산 수치: AudioEye는 테스트한 수정 패치를 판매, NIQ는 트래커를 판매 — 사이트별 상세 결과는 최악 사이트 1곳만 공개.
- "침투율 1% 미만"(Booking CEO, 9/24)과 "51% 사용"(NIQ)은 **서로 다른 지표** — 전자는 LLM 트래픽의 예약 점유율, 후자는 쇼핑 보조용 AI 도구 사용 경험. 모순 아님, 지표 정의 차이.

## 2026-09-27 보강 — Saaras V4: 음성 입력 품질이 전환율의 입력

9/25 Gemini 음성 커머스(사업자에 직접 전화)에 **입력 채널 품질** 축이 추가된다.

- **Sarvam Saaras V4** (9/26): 22개 인도 공용어 + 글로벌 영어 STT. 벤더 수치 — 7개 영어 데이터셋 평균 최저 WER, Kathbath Noisy에서 Deepgram Nova-3·GPT-4o Transcribe 대비 절반 이하 오류, 언어 식별 오류 2.9%/5.22%. 단일 모델 5개 모드: transcribe/verbatim/**codemix**/translit/translate.
- 음성 에이전트(전화 예약·주문)의 성패는 **STT가 아니라 "무슨 말인지"** — 코드믹싱(codemix) 지원은 다언어 시장의 실전 조건.
- 9/26 AudioEye(접근성 트리가 에이전트의 눈)와 짝: 텍스트 채널의 접근성 트리 ↔ 음성 채널의 STT — **"에이전트가 세상을 읽는 인터페이스 품질"** 이 전환율의 입력.
- 한계: 전부 벤더 발표 수치, 독립 재현 없음 — confidence low. 음성 스티어링(9/25 섹션) eval에 "STT 오류율" 변수를 추가하는 방향으로 메모.

## 2026-10-06 보강 — TikTok 에이전틱 커머스: 소셜 피드가 결제 채널이 된다

TikTok이 **Buy Direct**(For You 피드에서 브랜드 이탈 없는 원클릭 인앱 결제)와 **AI Shopping Assistant**(상품 탐색·배송·사이즈·재고·구매를 하나의 대화에서)를 개시 (10/5, PYMNTS). Salesforce·Shopify·Shoplazza·Stripe와 구축, 광고주 자격 기반 테스트 중. Advertising Week New York 2026 타이밍 — TikTok이 계획 중인 여러 에이전틱 커머스 경험 중 첫 번째.

- "에이전트가 누구 편인가"가 소셜 맥락에서 재등장: 피드 추천(발견) → 인앱 결제(전환)가 한 화면에서 일어나면 스티어링의 경계가 더 흐려짐. 9/24 스티어링 벤치마크(충성도 78.6%→17.3%)의 "적대적 환경" eval에 **피드-결제 일체형** 시나리오 추가.
- 같은 날 Constructor의 Stripe 기반 Agentic Checkout(온사이트 쇼핑 에이전트 내 결제) — 플랫폼 내장형(TikTok) vs 온사이트 임베디드(Constructor)의 두 경로가 같은 날 등장.

## 참고 소스

- [Agentic commerce reality check: Booking Holdings says LLM traffic is 'significantly below 1%' of bookings](raw/articles/2026-09-24-agentic-commerce-benchmark-booking.md)
- [Gemini 3.8 Live Avatar, business-calling agents, and TPUs on a Falcon 9 (Project Suncatcher)](raw/articles/2026-09-25-gemini-live-avatar-business-calling-suncatcher.md)
- [AudioEye study: AI agent task completion falls two-thirds on inaccessible sites; median run uses 43% more tokens](raw/articles/2026-09-26-audioeye-agent-accessibility-study.md)
- [TikTok kicks off agentic commerce push: Buy Direct checkout + AI Shopping Assistant](raw/articles/2026-10-06-tiktok-agentic-commerce.md)
