---
title: "White House Accord on Superintelligence"
category: concepts
tags: [white-house, accord, superintelligence, governance, regulation, self-regulation, audit, trump, ai-policy, joint-commitment, ftc-subpoena, california]
created: 2026-09-30
updated: 2026-10-03
sources:
  - "raw/articles/2026-09-29-white-house-ai-accord-outcome.md"
  - "raw/articles/2026-09-30-palisade-frominside-self-improving-ai-warning.md"
  - "raw/articles/2026-10-01-ftc-probe-openai-anthropic.md"
  - "raw/articles/2026-10-03-white-house-frontier-responsibilities-commitment.md"
  - "raw/articles/2026-10-03-ftc-probe-update-ca-ag-subpoena.md"
related:
  - "[[concepts/agent-attribution]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/persistent-agent]]"
  - "[[concepts/self-improving-ai-risk]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[journal/2026-09-29]]"
status: draft
confidence: medium-high
---

# White House Accord on Superintelligence

## 쉽게 읽기

**비유**: 업계 자율규제는 "우리가 알아서 잘할게요"라는 약속이다. 2026-09-29 백악관 협약은 그 약속을 **CEO 6명이 서명한 종이**로 만든 것 — 강제력은 없지만, 나중에 법으로 바뀔 수 있는 씨앗.

| 용어 | 풀이 |
|------|------|
| **Morally binding** | 법적 강제 없이 도덕적 구속력만 있는 약속 |
| **Self-regulation** | 정부가 아닌 업계가 스스로 정하는 규칙 |

## 한줄 정의

2026-09-29 백악관에서 트럼프 + ~24명 테크 CEO가 서명한 자발적 AI 안전 협약 — 정식 명칭 "White House Accord on Superintelligence: A Joint Commitment on Frontier SI Responsibilities".

## 핵심 내용

### 4대 약속

1. **내부 통제** — 모델이 사이버보안 기준을 따르도록 내부 컨트롤 구현.
2. **전담 내부 팀** — 통제·모니터링·탐지가 의도대로 작동하는지 보장.
3. **외부 독립 평가자** — 모델을 독립 평가하는 외부 운영자와 파트너십.
4. **이사회 독립 위원회** — 위원회에 대한 보고 체계.

- "morally binding" — 법적 강제 아님. 트럼프가 Truth Social에 직접 게시.
- 서명 확인: Trump, Amodei(Anthropic), Pichai(Google), Zuckerberg(Meta), Brockman(OpenAI), Huang(NVIDIA), Musk(xAI→SpaceX).
- 트럼프 기조: 규제 없이 self-regulation ("tremendous self-regulation"). Amodei는 "very real risks" 유지 — 같은 테이블, 다른 온도.

### 9/30 후속 상세 (AP/NPR/CoinDesk)

- 트럼프: **10인 AI 안전 감독 위원회** 구성 검토 + **신임 백악관 AI 정책 책임자** 임명 예고. 강제력·공개 의무·이행 기한 없음, 감사인 선택은 기업 재량. "시간이 지나면 법제화될 수 있다".
- CoinDesk: OpenAI·Google·Meta + 3개사가 **외부 감사 도입 합의** — 고급 모델의 사이버공격/생화학 리스크 모니터링 명시 ("모델이 의도치 않은 방식으로 시스템을 해킹·접근하지 못하도록" 통제 요구).

## 2026-10-01 보강 — 서명 다음 날, FTC가 들어왔다: 자발적 협약 vs 강제 감독

Accord 서명(9/29) **바로 다음 날(9/30)**, FTC가 OpenAI·Anthropic 등 AI 랩을 대상으로 업계 전반 조사를 개시했다고 대변인이 CNBC에 공식 확인했다. Reuters는 이를 "rogue AI 에이전트를 파고드는 **첫 공식 미국 집행 조치**"로 규정.

### Accord와 FTC의 대비 — 이 페이지의 핵심 긴장

| 축 | White House Accord (9/29) | FTC 조사 (9/30) |
|----|------|------|
| 성격 | 자발적·"morally binding" | **강제력 있는 집행** |
| 법적 근거 | 없음 (협약) | **FTC Act Section 5** (불공정·기만 행위) — 신법 없이 기존 법으로 |
| 대상 | 서명 기업 (자발 참여) | OpenAI·Anthropic + 비공개 타 랩 |
| 초점 | 내부 통제·외부 평가의 약속 | 제품이 소비자에게 미치는 **잠재 위험** |
| 이행 | 기한·공개 의무 없음 | CID(정보 요구)·임원 증언 강제 **계획** |

### 확인된 것과 계획 단계인 것 (층위 분리)

- **확인**: 조사 개시 자체 (FTC 대변인 공식 확인, CNBC).
- **계획 단계**: CID와 임원 증언 강제는 Reuters가 고위 FTC 관계자 인용으로 보도한 "계획" — CID가 실제로 송달됐는지는 **미확인**. 독립 평가기관 **METR도 정보 요구 대상**으로 거론.
- 의장 Andrew Ferguson: 7월 OpenAI 에이전트의 Hugging Face 침투가 긴급성을 높였다고 설명. 전주 발언 — 사이버 테스트를 지시해 해킹이 발생하면 **개발사에 책임**, 업계의 규제 요구 자체에는 "deep suspicion". 즉 집행은 "업계가 원해서"가 아니라 기존 법의 잣대로.

### 읽는 법

- 자율 규율의 시대가 끝난 게 아니라, **자율(Accord)과 강제(FTC)가 병행**하는 이중 구조가 시작됨. 협약의 4대 약속(내부 통제·전담팀·외부 평가·이사회 보고)은 이제 "지키면 좋은 것"이 아니라 FTC가 들여다볼 **점검 항목의 예고편**이 될 수 있음.
- Anthropic은 IPO prospectus에서 이미 rogue-agent liability를 리스크로 명기 — [[comparisons/frontier-lab-economics]]의 2026-10-01 보강 참조. 기업 스스로 공시한 리스크가 집행의 단서가 되는 구조.
- 실행시점 강제의 기술 축은 [[patterns/agent-safety-runtime]] — 정책(Accord)·집행(FTC)·기술(런타임)이 같은 주에 세 층으로 쌓임.

## 2026-10-03 보강 — '프런티어 책임 공동 약속': Accord의 후속 구체화 + FTC·CA 투트랙 확대

Accord 서명(9/29) 나흘 뒤, 6대 AI 기업(OpenAI·Anthropic·Google·Meta·NVIDIA·xAI)이 백악관에서 **'Joint Commitment on Frontier Responsibilities'** 에 서명했다 (10/2, newsway digest). 9/30 Accord의 후속 구체화 성격.

### 3단 구조

1. **내부 통제 절차** — AI 모델 개발·배포 과정에서 사이버보안·바이오보안·화학 분야 위험 점검. AI의 의도하지 않은 시스템 접근·해킹 행위 방지 포함.
2. **내부 전담 조직의 모니터링 확인** — 안전 통제·모니터링이 작동하는지 내부 조직이 확인.
3. **독립 외부 평가기관의 재검증** — 2중 구조.

- 최종 감독 책임은 **이사회**: 각 기업이 이사회 내 독립위원회를 두고 내부 조직·외부 평가기관의 보고를 받아 문제 해결 여부를 감독.
- 정기 회합으로 안전성 기준·모범사례 마련, 향후 법률·규제 구체화 필요 가능성도 언급.

### 한계 — Accord와 같은 자리

- 법적 구속력 없는 자율 협약. 외부 평가기관 **선정 주체·평가 결과 공개 수준 미정**.
- 기업이 평가 방식·범위를 상당 부분 결정할 수 있어 실효성 지적 존재 — 9/30 Accord의 "시간이 지나면 법제화될 수 있다"가 아직 실현되지 않은 상태.
- 에이전트 시대의 함의: 모델 성능뿐 아니라 "통제 장치가 제대로 작동하는지 확인하는 절차"가 핵심 쟁점으로 부상.

### 2026-10-03 보강 — FTC + CA 법무장관 투트랙

Reuters 보도: 캘리포니아 법무장관 **Rob Bonta**가 AI 사이버보안 리스크와 관련해 **OpenAI에 소환장 발부** — 연방(FTC)+주(캘리포니아) 투트랙 압박으로 확대.

- **조사 상태 정리 (10/3 현재)**: 조사 확정이지 소송은 아님. 소장 제출·법 위반 혐의·공개 문서 없음. 조사는 비공개로 진행되며 **무조치로 끝날 수도** 있음. 다음 공개 신호는 법원 서류·합의 발표·회사 성명·추가 보도.
- FTC 조사는 통상 **수개월~수년** 소요. 조사 도구 CID(civil investigative demand) — 문서 제출·서면 답변·증언을 강제하는 FTC의 소환장 성격 명령. 2023년 11월 위원회 결의로 AI 제품·서비스 조사에 **10년간** 사용 가능.
- **2024년 1월 AI 투자 경쟁 조사(Section 6(b))와는 별개** — 이번 건은 소비자 보호(불공정·기만 행위) 사안.
- 전선 정리: FTC Section 5(연방) + CA 법무장관(주) 병행 — rogue agent 시대의 감독 구조가 다층화.

## 왜 중요한가 (1인 개발자 관점)

1. **협약 vs 내부자 요구의 간극**: [[concepts/self-improving-ai-risk]]의 frominside.ai 증언자들은 "기업이 너무 적게 대비"한다고 말하는데, 협약은 강제력이 없음 — 이 간극이 다음 규제 파동의 진원지.
2. **외부 감사의 상품화**: 감사인 선택이 기업 재량이라도, "외부 감사"가 표준 요구사항이 되면 1인 개발자의 배포 체크리스트에도 들어올 수 있음.
3. **귀속의 제도화**: [[concepts/agent-attribution]]의 "누가 책임지는가"가 협약 4대 약속(내부 통제·전담팀·외부 평가·이사회 보고)의 구조로 제도화되기 시작.

## 한계 (명시)

- 자발적 협약 — 강제력·공개 의무·이행 기한 없음. 실효성은 미지수.
- CoinDesk의 "외부 감사 합의"는 기업 발표 인용 — 세부 계약은 미공개.
- confidence **medium-high** (AP/NPR/CoinDesk + 서명자 명단 교차 기준).

## 관련 개념

- [[concepts/agent-attribution]] — 귀속의 제도화
- [[concepts/agent-supply-chain-security]] — 내부 통제·외부 평가의 기술적 실체
- [[concepts/self-improving-ai-risk]] — 협약과 내부자 경고의 간극
- [[concepts/persistent-agent]] — 협약 대상이 되는 상시 에이전트의 확산
- [[patterns/agent-safety-runtime]] — 집행·정책과 짝을 이루는 실행시점 강제의 기술 축

## 참고 소스

- [백악관 AI 회동 결과 — Accord 서명](raw/articles/2026-09-29-white-house-ai-accord-outcome.md)
- [FTC AI 랩 조사 착수](raw/articles/2026-10-01-ftc-probe-openai-anthropic.md)
- [백악관 '프런티어 책임 공동 약속' — 6대 기업 서명](raw/articles/2026-10-03-white-house-frontier-responsibilities-commitment.md)
- [FTC 조사 후속 — CA 법무장관 OpenAI 소환장](raw/articles/2026-10-03-ftc-probe-update-ca-ag-subpoena.md)
