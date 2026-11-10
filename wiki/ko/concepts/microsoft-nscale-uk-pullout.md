---
title: "Microsoft의 Nscale 영국 계약 파기 — AI 네오클라우드 붐의 첫 균열, $3B IPO 직전"
category: concepts
tags: [microsoft, nscale, datacenter, ai-infrastructure, neocloud, ipo, power-constraint, ai-debt]
created: 2026-10-19
updated: 2026-10-19
sources:
  - "raw/articles/2026-10-19-microsoft-nscale-uk-pullout.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/microsoft-maia-300]]"
  - "[[concepts/ai-debt-boom-cracking]]"
  - "[[concepts/nvidia-uk-ai-safety-compute]]"
status: draft
confidence: high
---

# Microsoft의 Nscale 영국 계약 파기 — AI 네오클라우드 붐의 첫 균열, $3B IPO 직전

## 쉽게 읽기

**비유**: AI용 데이터센터를 짓는 회사(Nscale)가 "마이크로소프트가 우리 건물의 제일 큰 세입자예요"라며 상장을 준비했는데, 정작 마이크로소프트가 "그 건물 계약은 없던 걸로" 했다. 이유는 전기 — 영국 전력망이 그 부지에 전기를 대주려면 2030년대는 돼야 한단다. AI 붐의 병목이 "칩"에서 "전기"로 넘어가는 순간을 보여주는 사건이다.

| 용어 | 풀이 |
|------|------|
| **Neocloud** | AI 컴퓨팅 임대 전문 클라우드 (CoreWeave·Nscale·Nebius·Crusoe·Lambda) — 차입 건설이 특징 |
| **앵커 테넌트** | 건물의 핵심 세입자. Nscale Loughton 부지의 앵커는 Microsoft(23,000 칩 예정) |
| **Stalking horse** | (참고) 10/14 Character.AI 파산 때 디즈니가 한 것처럼 경매의 기준 입찰 — 여기는 해당 없음 |

## 한줄 정의

Telegraph 단독(10/18)→Reuters 재보도 — Microsoft가 영국 Nscale의 Loughton 데이터센터 계약을 해지. 최대 $3B IPO를 앞둔 네오클라우드의 전력난·공기지연이 겹친 AI 인프라 자금 조달 경색의 실전 사례.

## 핵심 내용

- **사건**: Microsoft, Nscale 첫 영국 데이터센터(Loughton, Essex) 계약 해지. Microsoft는 Nscale 계약 매출의 **약 40%**, 두 최대 고객 중 하나.
- **표면 이유**: 전력. 영국 전력 당국이 2030년대까지 공급 불가 통보. 원래 2026년 가동 예정 → 반복 지연.
- **노르웨이도**: 주력 시설 6개월 지연, 계획 30MW 중 6.4MW만 가동. 냉각수 누수·규제·화재 보도.
- **양사 입장**: Microsoft "파트너십 유지, 단일 부지 결정". Nscale "관계 강하고 장기적, 대체 전원·다른 부지 검토".
- **IPO**: 지난달 미국 IPO 신청, 최대 $3B 조달·기대 밸류 $35B(Telegraph). Microsoft·Anthropic이 주요 고객. Nvidia 후원. 2.5년 만에 계약 총액 $1억→$1,030억+.
- **자금 경색 맥락**: FT 10/10 — 글로벌 AI 부채 발행 6월 $113B → 9월 **$23B**. CoreWeave 전주 −25%. 호주 Firmus IPO 철회.
- **정상 진행**: 2025-09 $24B Microsoft 계약의 다른 부지(텍사스·포르투갈·노르웨이 제2)는 정상.

## 왜 중요한가 (1인 개발자 관점)

1. **병목의 이동: 칩 → 전기**: AI 인프라의 다음 병목은 GPU가 아니라 전력망 접속. 데이터센터 투자를 볼 때 "칩 확보"가 아니라 "전력 확보"가 리스크 지표. 1인 개발자의 클라우드 비용 전망에도 같은 논리 — 전력난 지역은 가격 상승 압력.
2. **네오클라우드 리스크의 정량화**: 차입해서 짓고(빚), 세입자(빅테크)에 의존하는 구조 — 세입자 하나가 빠지면 IPO가 흔들림. "AI 수요는 무한"이라는 서사와 "실행 리스크" 사이의 간극이 숫자로 드러난 첫 대형 케이스.
3. **Microsoft의 양면 전략**: 자체 칩(Maia 300, 랙당 96칩·내년 100만 개 배치, 10/12 수집)과 외부 네오클라우드 의존을 병행 — 한쪽이 흔들려도 다른 쪽이 받치는 구조. 인프라 의존도를 분산하는 설계의 실전 예시.

## 한계 (명시)

- 파기 사유는 양사 모두 "미공개" — 전력난이 표면 이유이나 확정 아님.
- $35B 밸류에이션·$3B 조달액은 Telegraph 보도 수치 — IPO 서류의 확정 수치가 아님.
- 10/16 수집 "AI 부채 붐 균열" 페이지의 후속 사례 — 단독 사건이 아니라 흐름의 일부로 읽을 것.
