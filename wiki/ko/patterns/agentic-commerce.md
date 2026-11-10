---
title: "Agentic Commerce"
category: patterns
tags: [agentic-commerce, shopping-agents, benchmarks, principal-agent, computer-use, steering, voice-agent, gemini, accessibility, stt, platform-blocks, yelp, delta]
created: 2026-09-24
updated: 2026-10-18
sources:
  - "raw/articles/2026-09-24-agentic-commerce-benchmark-booking.md"
  - "raw/articles/2026-09-25-gemini-live-avatar-business-calling-suncatcher.md"
  - "raw/articles/2026-09-26-audioeye-agent-accessibility-study.md"
  - "raw/articles/2026-09-27-sarvam-saaras-v4-stt.md"
  - "raw/articles/2026-10-06-tiktok-agentic-commerce.md"
  - "raw/articles/2026-10-13-meta-sierra-poppy-protocol.md"
  - "raw/articles/2026-10-15-booking-vayo-ai-travel.md"
  - "raw/articles/2026-10-16-datadome-ai-traffic-q3-2026.md"
  - "raw/articles/2026-10-18-websites-block-ai-agents.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[comparisons/agent-eval-frameworks]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/meta-sierra-poppy-protocol]]"
  - "[[concepts/booking-vayo-travel-agent]]"
  - "[[concepts/datadome-ai-traffic-q3-2026]]"
  - "[[concepts/websites-block-ai-agents]]"
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

## 2026-10-13 보강 — Poppy: 에이전트 상거래의 신원·권한 레일

Meta×Sierra의 Personal Agent Protocol (PAP, 별칭 Poppy) draft 0.1 (10/9, Apache 2.0) — 개인의 AI 에이전트가 기업에 로그인하고 거래하는 방식을 규정한 오픈 표준. Discovery `/.well-known/poppy.json`, 세션은 OAuth 2.0 기반.

- "차단 vs 전권 위임"의 제3 옵션: 고객이 에이전트에게 view-only vs change 접근 권한 부여, 기업은 에이전트가 할 수 있는 일에 한도 설정.
- 런치 파트너: Genesys, Instinct, NiCE, Rocket, Shopify, Stripe, Walmart. 35개 디자인 파트너 — OpenAI, Visa, Mastercard, PayPal, Bank of America, Target, United Airlines.
- 데모: Meta Muse 에이전트가 프로토콜로 Rocket 에이전트를 찾아 Rocket 임원의 주택담보대출 사전승인 서한을 "몇 순간 만에" 발급.
- 배경: Amazon이 9월에 신원 미표시 Meta Muse 에이전트를 차단; 상인의 23%만이 AI 트래픽 식별 가능 (PYMNTS Intelligence).

### 실무 적용

"에이전트가 누구 편인가"(스티어링)에 "에이전트가 누구인지 증명하는가"(신원)가 추가된다. 결제·계좌를 만지는 에이전트 서비스를 만들 때: (1) Poppy 호환 신원 부여 — view-only vs change를 권한 설계의 기본값으로, (2) 기업 측 한도(limit) 설정을 UX에 노출, (3) 신원 미표시 에이전트의 거래는 기본 차단 정책. 9/24 스티어링 벤치마크의 "적대적 환경" eval에 **신원 위장** 시나리오를 추가하는 방향.

- 상세: [[concepts/meta-sierra-poppy-protocol]]

## 2026-10-15 보강 — Booking Vayo: 여행 전용 소비자 에이전트, 자본 조건부 $100M

Booking Holdings가 시애틀 기반 AI 여행 스타트업 **Vayo** 공개 (10/14, GeekWire 원보도, Skift·Morningstar·PhocusWire 교차) — **조건부 최대 $100M 투자 계획**(제품 진척·시장 조건 연동). 무료 초대 전용 프라이빗 베타, vayo.com 대기자 명단.

- 제품: 개인 AI 여행 에이전트 — "작업이 아닌 여행을 위해 설계(built for trips, not tasks)". 사용자 **인박스 연결** — 항공·호텔·식당 예약 확인 메일을 통합 여정으로 정리, 이후 **가격 하락·매진 호텔 공실·운항 차질**(항공 지연→호텔 체크인/디너 예약 놓침) 모니터링.
- 아키텍처: 다수 AI 에이전트 동시 가동, 작업별로 다른 기성 모델 선택 사용. CTO Allen Chen — 향후 커스텀 모델 필요 가능. 식당 예약 동작, 항공·호텔은 수 주 내, 네이티브 모바일 앱·그룹 여행 기획은 이후.
- 전략: **중립 오케스트레이터** — Booking 브랜드뿐 아니라 Expedia·항공사·호텔 직접 예약(메일 파싱)까지 포괄. 스크린 스크래핑 대신 **OpenTable·SeatGeek과 직접 파트너십** — Meta Muse가 Amazon에서 차단된 전철(9월)을 피하려는 선택.
- Booking의 **두 번째 AI 네이티브 스타트업** — 첫 번째는 약 2주 전 출시 Lola(Kayak 공동 창업팀, 일상 경험용).
- 이 페이지와의 연결: "에이전트가 누구 편인가"(스티어링)에 **"중립 선언의 구조"**가 추가된다. Vayo는 "중립 오케스트레이터"를 자처하지만, 투자자가 Booking인 구조 — Poppy(10/13 보강)의 신원·권한 레일 관점에서 읽으면, **누가 주인인지(principal) 선언이 투자 구조와 충돌하는지**가 eval 조건이 된다. 9/24 스티어링 벤치마크의 "적대적 환경"에 **"모회사 소유권" 시나리오** 추가 후보 — 주인이 사용자인가, 모회사인가를 구별할 수 있는가.
- 상세: [[concepts/booking-vayo-travel-agent]]

## 2026-10-16 보강 — DataDome Q3: Muse 에이전트 트래픽의 폭증과 '미신고' 문제

DataDome Q3 2026 AI 트래픽 보고서 (10/15, DataDome 공식·PPC Land) — **분기 AI 에이전트 요청 250억 건**(전분기 177억, +41.5%). 에이전틱 브라우저 트래픽이 9월 한 달 **4.7배 급증**(1,250만→5,820만).

- **Meta Muse**: 9/22~10/3 출시 12일 만에 **2,910만 요청** — 그중 **99.3%가 클라우드 인프라에서 미신고(unidentified) 발생**. Amazon이 9월 차단한 "신원 미표시 Muse 에이전트"가 12일 만에 2,910만 요청 규모로 실전 확인.
- **민감 엔드포인트**: Muse 요청의 **8.9%가 로그인·결제·장바구니** 등 민감 엔드포인트에 도달 — 신원 없는 결제 시도가 분기 수백만 건 규모.
- **Meta 비중**: 전체 에이전트 중 51.5%→49.7%. **Claude 크롤러 159% 급증**.

### 이 페이지와의 연결

- 10/13 보강(Poppy — 신원·권한 레일)의 **정량 근거**. "신원 미표시 에이전트의 거래는 기본 차단 정책"이라는 실무 적용이 이제 분기 수천만 건 규모의 문제로 확인 — Amazon의 9월 차단이 선제적 대응이었음이 수치로 입증.
- "에이전트가 누구 편인가"(스티어링)에 "에이전트가 누구인지 증명하는가"(신원)가 추가된 데 이어, 이번엔 그 신원 문제의 **규모감**이 정량화. 9/24 스티어링 벤치마크의 "적대적 환경" eval에 **미신고 대규모 트래픽** 시나리오 추가 — 신원 위장(10/13)에서 한 걸음 더 나아가 "신원 자체가 없는" 트래픽.
- 민감 엔드포인트 8.9%는 [[patterns/agentic-finance]]의 "돈을 만지는 에이전트"가 이미 실전 트래픽임을 의미 — 결제 게이트의 신원 검증이 선택이 아닌 전제.
- 상세: [[concepts/datadome-ai-traffic-q3-2026]]

## 2026-10-18 보강 — 플랫폼의 에이전트 차단: 스티어링에서 차단으로의 에스컬레이션

The Verge(Emma Roth, 10/17) — Yelp·Delta·JPMorgan Chase·Charles Schwab·Cars.com·Amtrak이 OpenAI·Meta·xAI 등의 에이전트 접근을 제한 (mylistingo·techbuzz.ai·inshorts·rrtechpulse 10/17–18 교차 보도).

- Yelp: **유료 데이터 라이선스 프로그램**을 통해서만 에이전트 접근 허용 — "돈을 내면 들어와".
- Delta: 서드파티 에이전트의 항공권 검색·예약 파트너십 "현재 없음" — 공식 금지 선언은 아님 (완곡 표현).
- 은행: Schwab CEO Wurster(10/15) "고객 대신 로그인하는 건 안전하지 않다. 허용하지 않을 것." JPMorgan Dimon(10/13) "외부 에이전트가 회사 안에 들어오는 걸 허용하지 않을 것."
- Amazon×Perplexity 소송: 1심 금지 명령 → 8월 항소 뒤집힘 → Amazon 수정 소송 — 사법 판단도 요동 중.
- Meta 반론: "개인 에이전트를 외면하는 건 그 뒤의 고객을 외면하는 것." Walmart·Gap·Sephora·Best Buy와 파트너십 체결 — Muse 구매 가능. Shopify도 네트워크 개방.

- 이 페이지의 프레이밍으로 읽으면: (1) **스티어링 → 차단의 에스컬레이션** — 9/24 스티어링 벤치마크(충성도 78.6%→17.3%)가 "에이전트 유인"이었다면, 이번은 "입구 폐쇄". 마켓플레이스가 에이전트를 속이는 데서 막는 데로 선회. (2) **"공식 통로"의 상품화** — Yelp의 데이터 라이선스, Meta의 리테일 파트너십, Poppy의 신원 협상(10/13 보강)이 "에이전트가 합법적으로 들어가는 문"의 세 가지 형태. (3) eval에 **"차단 환경" 시나리오** 추가 — 적대적 환경(스티어링)에 이어 "접근 거부" 환경에서의 폴백 동작을 측정해야 함.
- 한계: Amtrak·Cars.com 차단은 사용자 보고 기반 미검증. Delta는 공식 금지가 아님. The Verge 원문 URL은 verbatim 미확보 — 2차 보도 4개로 교차확인.
- 상세: [[concepts/websites-block-ai-agents]]

## 참고 소스

- [Agentic commerce reality check: Booking Holdings says LLM traffic is 'significantly below 1%' of bookings](raw/articles/2026-09-24-agentic-commerce-benchmark-booking.md)
- [Gemini 3.8 Live Avatar, business-calling agents, and TPUs on a Falcon 9 (Project Suncatcher)](raw/articles/2026-09-25-gemini-live-avatar-business-calling-suncatcher.md)
- [AudioEye study: AI agent task completion falls two-thirds on inaccessible sites; median run uses 43% more tokens](raw/articles/2026-09-26-audioeye-agent-accessibility-study.md)
- [TikTok kicks off agentic commerce push: Buy Direct checkout + AI Shopping Assistant](raw/articles/2026-10-06-tiktok-agentic-commerce.md)
- [Meta×Sierra Poppy: 개인 에이전트 프로토콜 draft 0.1 (PYMNTS, 10/12)](raw/articles/2026-10-13-meta-sierra-poppy-protocol.md)
- [Booking Holdings, AI 여행 스타트업 Vayo 공개 (GeekWire 원보도·Skift·Morningstar·PhocusWire, 10/14)](raw/articles/2026-10-15-booking-vayo-ai-travel.md)
- [DataDome Q3 2026 AI 트래픽 보고서 — 250억 에이전트 요청·Muse 미신고 99.3% (DataDome 공식·PPC Land, 10/15)](raw/articles/2026-10-16-datadome-ai-traffic-q3-2026.md)
- [플랫폼의 에이전트 차단 — Yelp·Delta·은행 (The Verge 10/17, mylistingo·techbuzz.ai·inshorts, 10/17–18)](raw/articles/2026-10-18-websites-block-ai-agents.md)
