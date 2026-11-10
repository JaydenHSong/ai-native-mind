---
title: "Meta, Muse Wonder로 학습한 특화 모델을 Muse·Meta AI 전 사용자에게 출시 — Active Memory·Active Focus"
category: concepts
tags: [meta, muse, wonder, active-memory, active-focus]
created: 2026-11-07
updated: 2026-11-07
sources:
  - "raw/articles/2026-11-07-meta-muse-wonder-rollout-active-memory.md"
related:
  - "[[concepts/meta-muse-wonder-models]]"
  - "[[concepts/ai-memory-systems]]"
  - "[[concepts/anthropic-agent-memory-dreaming]]"
  - "[[concepts/claude-duet-proactive-agent]]"
status: draft
confidence: high
---

# Meta, Muse Wonder로 학습한 특화 모델을 Muse·Meta AI 전 사용자에게 출시 — Active Memory·Active Focus

## 쉽게 읽기

**비유**: 비싼 과외 선생님(Wonder)의 기억력과 끈기를, 그 선생님을 직접 고용할 수 없는 모두에게 나눠 주는 셈이다. 단, 선생님 본인이 오는 게 아니라, 선생님한테 배운 "작은 선생님"이 온다. 작은 선생님은 예전보다 약속을 덜 잊고, 일이 막혀도 포기하지 않고 끝까지 해낸다고 한다 — 단, 성적표는 회사 스스로 매긴 것이다.

| 용어 | 풀이 |
|------|------|
| **Active Memory** | 대화 간에 중요한 맥락을 기억하고, 무엇이 여전히 관련 있는지 가려내는 기능 |
| **Active Focus** | 예상치 못한 장애가 생겨도 목표를 향해 계속 진행하는 능력 |
| **증류(distillation)** | 큰 모델의 행동을 작은 모델에 옮겨 학습시키는 방법 |

## 한줄 정의

2026-11-06 — Meta가 Muse Wonder로 학습한 특화 모델을 Muse와 Meta AI 전 사용자에게 출시하기 시작했다. 핵심은 Active Memory(대화 간 맥락 유지)와 Active Focus(예상치 못한 장애에도 목표를 향해 계속 진행)다. Meta 주장으로는 새 Muse 모델이 중요 정보를 잊을 확률이 2.4배 낮고, 일상 업무 자가 수정·완수율이 67% 높다. Wonder 본체는 여전히 유료 구독자용 고난도 워크로드에 남는다.

## 핵심 내용

- **발표**: Meta AI Research 블로그 "Bringing Specialized Models to Muse and Meta AI"(11-06)와 마크 저커버그의 X 게시글. 기존 모델의 특화 버전을 플래그십 Muse Wonder 계열로 학습(증류)해 일상 소비자 상호작용에 맞는 경량 시스템으로 만들었다. 11-06 금요일부터 Muse와 Meta AI 전 사용자에게 롤아웃 시작, 무료 티어 포함. 지역·계정 등급별 단계 일정은 공개되지 않았다.
- **Active Memory**: 임시 정보와 영구 정보를 구분하고, 시간에 걸쳐 추론하며, 여전히 관련 있는 것과 진부해진 것을 가려내는 능력을 모델에 학습시켰다. Meta 내부 평가에서 중요 맥락을 정확히 활용하는 비율이 76%에서 90%로 올랐고, 중요 정보 망각 확률은 2.4배 낮아졌다고 한다. Meta 내부 Personal Superintelligence Index는 38%에서 47%로 상승했다.
- **Active Focus**: 예상치 못한 문제가 생긴 일상 업무를 완수하는 능력이 67% 향상됐다고 Meta는 밝혔다. Meta AI에서는 복잡한 질문을 다단계 워크플로로 나누고, 대화 중 주제 전환을 처리하도록 조정됐다.
- **한계**: 모든 수치는 Meta 자체 테스트의 자체 측정치로, 평가 기준선·표본 크기·방법론이 공개되지 않았고 제3자 검증이 없다. Meta AI용 별도 수치는 없으며, 특화 모델의 정식 공개 명칭도 부여되지 않았다. Wonder 본체는 Meta Model API에서 입력 $4·출력 $20(백만 토큰당)이며, Wonder Full은 Muse Code 최상위 2개 요금제에서만 쓸 수 있다.
- **같은 주 Muse 소식**: 11-05에는 미국에서 실시간 음성 대화와 표현력 있는 아바타가 Muse 앱에 출시됐고, 11-06에는 설명만으로 만드는 커스텀 미니앱 "Spaces"도 함께 출시됐다. Muse는 북미에서 1,000만 건 이상의 설치를 기록했다.

## 왜 중요한가 (1인 개발자 관점)

1. **메모리 경쟁이 "기능"에서 "기본값"으로 이동했다**: 같은 주 Anthropic이 에이전트 메모리의 내부 설계(dreaming)를 공개했고, Meta는 메모리 기능을 전 사용자에게 깔았다. 이제 메모리 없는 어시스턴트는 구식 취급을 받는다. 1인 개발자에게는 "내 에이전트도 지난 대화를 기억하는가"가 설계의 기본 질문이 된다.
2. **증류가 프런티어의 보급 경로가 됐다**: 가장 비싼 모델을 모두에게 주는 대신, 그 행동을 작은 모델에 옮겨 무료 티어까지 내리는 방식이다. 프런티어 성능의 "맛보기"가 아니라, 일상 태스크에 특화된 별도 모델을 만드는 전략이다. 가격·속도·기능의 타협점을 설계하는 감각이 중요해진다.
3. **수치는 Meta 것이고 검증은 없다**: 2.4배·67%·90% 같은 수치는 모두 회사 내부 평가다. 제품 선택의 근거로 쓰려면 독립 벤치나 직접 사용 경험이 필요하다. "발표된 숫자"와 "검증된 숫자"를 구분하는 습관이 곧 비용을 아끼는 길이다.

## 한계 (명시)

- 모든 성능 수치는 Meta 자체 테스트의 자체 측정치로, 기준선·표본 크기·방법론이 공개되지 않았고 제3자 검증이 없다.
- 지역·계정 등급·기기별 롤아웃 일정이 공개되지 않아, 실제 사용 가능 시점은 사용자마다 다를 수 있다.
- Wonder 본체와 특화 모델의 성능 차이는 정량적으로 공개되지 않았다.

## 참고 소스

- [Meta Muse Wonder 특화 모델 롤아웃 원본](raw/articles/2026-11-07-meta-muse-wonder-rollout-active-memory.md)