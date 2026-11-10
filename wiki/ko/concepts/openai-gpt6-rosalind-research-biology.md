---
title: "OpenAI GPT-6 Rosalind Research — 승인된 생명과학 연구소 전용 수직 모델"
category: concepts
tags: [openai, gpt-6, rosalind, biology, life-sciences, biosecurity]
created: 2026-10-31
updated: 2026-10-31
sources:
  - "raw/articles/2026-10-31-openai-gpt6-rosalind-research-biology.md"
related:
  - "[[concepts/openai-ai-science-three-discoveries]]"
  - "[[concepts/uk-ai-biosecurity-lab]]"
  - "[[concepts/anthropic-ai-safety-bill]]"
status: draft
confidence: medium
---

# OpenAI GPT-6 Rosalind Research — 승인된 생명과학 연구소 전용 수직 모델

## 쉽게 읽기

**비유**: 같은 엔진을 얹되, 생명과학 연구실에만 문을 여는 차를 내놓았다. 누구나 타는 일반 모델이 아니라, 신원을 확인받은 연구소만 타는 전용 모델이다. 엔진은 GPT-6 Astra와 같고, 달라진 것은 "누가 탈 수 있느냐"와 "생명과학 질문을 어떻게 다루느냐"다.

| 용어 | 풀이 |
|------|------|
| **수직 모델** | 특정 분야에 맞춰 접근·처리 방식을 튜닝한 모델. 가중치가 달라도 되고, 같아도 된다 |
| **이중용도 질문** | 정당한 연구와 악용이 모두 가능한 질문. 거부의 경계가 핵심이다 |
| **Discovery vs Research** | OpenAI의 승인 단계. Discovery 승인이 Research 접근권을 주지 않는다 |

## 한줄 정의

2026-10-30 공개된 GPT-6 Rosalind Research — 승인된 생명과학 연구소 전용, Astra와 동일 가중치, 접근 통제와 생명과학 핸들링이 차별점.

## 핵심 내용

- **접근 구조**: 승인된 Research 기관만 ChatGPT Work·Codex와 별도 승인 API로 쓴다. 일반 Chat 탭에는 없고, Discovery 승인만으로는 접근할 수 없다. 기업 롤아웃은 2주간 관리자 프리뷰로 시작하며 기본값은 꺼짐이다.
- **모델 정체**: GPT-6 Astra와 동일한 가중치에 이번 릴리스를 위한 추가 학습은 없다. 수직화는 학습이 아니라 접근 통제와 생명과학 처리 방식에서 이뤄졌다.
- **벤치마크(최고 추론 예산, OpenAI 보고)**: 의약화학 평가 49.6%(GPT-Rosalind-5.5는 28.9%), 실무 과학자 태스크 기반 응용 생명과학 벤치마크 61.3%(5.5는 44.0%).
- **위험 분류**: 높은 생물·화학 역량으로 분류되나 임계치(critical threshold)에는 미달한다. 일부 정당한 이중용도 생물학 질문에는 거부가 줄었고, 생물무기화 관련 거부는 유지된다.
- **가격(2차 트래커 기준)**: $15 / 캐시 $1.50 / $75(백만 토큰당)로, 5.5($5 / $0.50 / $25)의 3배 수준이다.

## 왜 중요한가 (1인 개발자 관점)

1. **수직화의 새 형태**: 모델을 새로 학습시키는 대신 접근 계층으로 수직화를 구현했다. 고위험 분야의 제품화 패턴이 "가중치"에서 "게이트"로 이동하고 있다.
2. **과학 에이전트의 가격표**: 3배 가격은 과학 태스크의 추론 비용이 곧 연구 예산이 된다는 뜻이다. 벤치마크 점수보다 토큰 단가가 도입 여부를 가를 수 있다.
3. **거부 경계의 실측**: 이중용도 질문의 거부가 줄었다는 발표는, 안전 정책이 "막는다"에서 "누구에게는 열어준다"로 정교해지고 있음을 보여준다.

## 한계 (명시)

- 단일 2차 보도 기반이며 confidence는 medium이다. OpenAI 1차 자료 대조가 남았다.
- 가격은 2차 트래커 집계로 OpenAI 요약에서 확인되지 않았다.
- 벤치마크는 OpenAI 자체 보고이고, 한 생물학 데이터 벤치마크는 비프로덕션 설정으로 측정됐다.
