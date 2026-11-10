---
title: "Thinking Machines Inkling 2 Small — 594B MoE 2세대 모델, AA 지수 31점·Apache 2.0 가중치는 다음 주"
category: concepts
tags: [thinking-machines, inkling, open-weights, moe, tinker]
created: 2026-11-06
updated: 2026-11-06
sources:
  - "raw/articles/2026-11-06-thinking-machines-inkling-2-small.md"
related:
  - "[[concepts/moonshot-kimi-k31-pro]]"
  - "[[concepts/meta-muse-spark-open]]"
  - "[[concepts/reflection-open-weight]]"
status: draft
confidence: high
---

# Thinking Machines Inkling 2 Small — 594B MoE 2세대 모델, AA 지수 31점·Apache 2.0 가중치는 다음 주

## 쉽게 읽기

**비유**: 요리법을 "다음 주에 공개하겠다"고 예고하고 시식만 먼저 연 셈이다. 맛(벤치마크 점수)은 공개됐고 가격은 싸졌지만, 레시피(가중치)는 아직 손에 없다. 약속이 지켜지는지는 다음 주가 갈림길이다.

| 용어 | 풀이 |
|------|------|
| **MoE** | Mixture-of-Experts — 토큰마다 일부 전문가(파라미터)만 활성화하는 구조 |
| **Tinker** | Thinking Machines의 모델 호스팅·파인튜닝 플랫폼 |
| **Apache 2.0** | 상업 이용까지 허용하는 관대한 오픈소스 라이선스 |

## 한줄 정의

2026-11-05 — Mira Murati의 Thinking Machines Lab이 Inkling 2세대 첫 모델 Inkling 2 Small을 출시했다. 594B MoE(활성 17B)로 Artificial Analysis 지수 31점을 기록했고, 현재는 Tinker 플랫폼에서만 쓸 수 있다. 전체 가중치는 외부 안전 테스트·레드티밍이 끝나면 "다음 주" Apache 2.0으로 공개될 예정이다.

## 핵심 내용

- **규모**: MoE 594B 총 파라미터, 토큰당 활성 17B. 텍스트·이미지 입력, 텍스트 출력, 네이티브 비전(292M 파라미터 비전 인코더). 컨텍스트 최대 1M 토큰. 12T 토큰을 GB300에서 68시간 학습했다. 에이전틱 코딩·장시간 자율 작업·비전·지식 작업을 목표로 한다.
- **성능**: Artificial Analysis Intelligence Index v5.0.1 기준 31점, 전작 13점(일부 매체는 12점으로 표기)에서 18점 상승. SWEBench Pro Hard 86.3%. Artificial Analysis는 가중치가 공개되면 중국 외 지역 개발사 중 최고 점수의 오픈웨이트 모델이 될 것이라고 평가했다.
- **접근**: 현재는 Tinker 플랫폼에서만 이용 가능하다. Tinker Playground는 추론 전용, Tinker에서 추론·파인튜닝이 가능하다. 가중치는 출시 시점에는 비공개이며, 외부 안전 테스트와 레드티밍이 완료되면 "다음 주" 전체 가중치를 Apache 2.0 라이선스로 공개하겠다는 계획이다. 날짜는 미확정이고 조건부다. Artificial Analysis는 출시 시점을 proprietary로 표기했다.
- **가격**: Tinker 기준 입력 $0.30·출력 $1.00(백만 토큰당), 캐시 입력 $0.03. 1세대 Xhigh 설정($1.00/$4.05) 대비 출력 가격이 약 75% 낮아졌다.
- **사업 맥락**: Business Insider는 랩이 약 $40B 프리머니 밸류에이션으로 약 $50억 조달 중이라고 보도했으나, 라운드는 미확정이다. 랩은 2026-07-31 단계적 출시 프레임워크를 따르고 있으며, 가중치 공개는 되돌릴 수 없다는 점을 강조해 왔다.

## 왜 중요한가 (1인 개발자 관점)

1. **"오픈"의 약속과 실행이 갈리는 지점이다**: Kimi가 약속 당일 가중치를 공개한 바로 다음 날, Inkling은 "다음 주"라는 조건부 약속을 내놨다. 오픈웨이트 경쟁에서 약속의 이행 여부가 곧 신뢰가 된다.
2. **가격이 성능의 절반을 말한다**: 출력 가격이 75% 떨어졌다는 것은, 같은 랩의 2세대가 "더 세다"가 아니라 "더 싸게 같은 일을 한다"는 방향으로 진화했다는 뜻이다. 1인 개발자에게는 가격표가 벤치만큼 중요하다.
3. **68시간 학습이라는 속도**: 12T 토큰을 GB300에서 68시간 만에 학습했다는 것은, 프런티어급 학습이 주 단위가 아니라 일 단위로 들어섰음을 보여준다. 학습 속도가 곧 출시 속도가 된다.

## 한계 (명시)

- 가중치는 아직 공개되지 않았고, "다음 주" 공개는 안전 테스트 완료라는 조건이 붙어 있다. 날짜 미확정이며 연기될 수 있다.
- 벤치마크 수치는 Artificial Analysis 지수 기준이며, 회사 제공 모델에 대한 제3자 측정으로 독립 재현은 아직 없다.
- 조달 보도($40B 밸류·$50억)는 미확정 보도이며, 랩이 확인한 바 없다.

## 참고 소스

- [Inkling 2 Small 원본](raw/articles/2026-11-06-thinking-machines-inkling-2-small.md)
