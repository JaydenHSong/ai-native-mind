---
title: "Meta, Muse Wonder로 학습한 특화 모델을 Muse·Meta AI 전 사용자에게 출시 — Active Memory·Active Focus, 무료 티어 포함 (11-06)"
source_url: "https://www.siliconreport.com/meta-rolls-out-specialized-ai-models-trained-using-muse-wonder"
source_type: "news"
authors: ["Meta"]
published: 2026-11-06
fetched: 2026-11-07
tags: [meta, muse, wonder, active-memory, active-focus]
status: raw
---

# Meta, Muse Wonder로 학습한 특화 모델을 Muse·Meta AI 전 사용자에게 출시 — Active Memory·Active Focus, 무료 티어 포함 (11-06)

> Meta가 11-06 Muse Wonder로 학습한 특화 모델을 Muse와 Meta AI 전 사용자에게 출시하기 시작했다. 핵심은 Active Memory(대화 간 맥락 유지)와 Active Focus(예상치 못한 장애에도 목표를 향해 계속 진행)다. Meta 주장으로는 새 Muse 모델이 중요 정보를 잊을 확률이 2.4배 낮고, 일상 업무 자가 수정·완수율이 67% 높다. Wonder 본체는 여전히 유료 구독자용 고난도 워크로드에 남는다.

## 내용

- **발표**: Meta AI Research 블로그 "Bringing Specialized Models to Muse and Meta AI"(11-06)와 마크 저커버그의 X 게시글. 기존 모델의 특화 버전을 플래그십 Muse Wonder 계열로 학습(증류)해 일상 소비자 상호작용에 맞는 경량 시스템으로 만들었다. 11-06 금요일부터 Muse와 Meta AI 전 사용자에게 롤아웃 시작, 무료 티어 포함. 지역·계정 등급별 단계 일정은 공개되지 않았다.
- **Active Memory**: 임시 정보와 영구 정보를 구분하고, 시간에 걸쳐 추론하며, 여전히 관련 있는 것과 진부해진 것을 가려내는 능력을 모델에 학습시켰다. Meta 내부 평가에서 중요 맥락을 정확히 활용하는 비율이 76%에서 90%로 올랐고, 중요 정보 망각 확률은 2.4배 낮아졌다고 한다. Meta 내부 Personal Superintelligence Index는 38%에서 47%로 상승했다.
- **Active Focus**: 예상치 못한 문제가 생긴 일상 업무를 완수하는 능력이 67% 향상됐다고 Meta는 밝혔다. Meta AI에서는 복잡한 질문을 다단계 워크플로로 나누고, 대화 중 주제 전환을 처리하도록 조정됐다.
- **한계**: 모든 수치는 Meta 자체 테스트의 자체 측정치로, 평가 기준선·표본 크기·방법론이 공개되지 않았고 제3자 검증이 없다. Meta AI용 별도 수치는 없으며, 특화 모델의 정식 공개 명칭도 부여되지 않았다. Wonder 본체는 Meta Model API에서 입력 $4·출력 $20(백만 토큰당)이며, Wonder Full은 Muse Code 최상위 2개 요금제에서만 쓸 수 있다.
- **같은 주 Muse 소식**: 11-05에는 미국에서 실시간 음성 대화와 표현력 있는 아바타가 Muse 앱에 출시됐고, 11-06에는 설명만으로 만드는 커스텀 미니앱 "Spaces"도 함께 출시됐다. Muse는 북미에서 1,000만 건 이상의 설치를 기록했다.

## 맥락

- [[concepts/meta-muse-wonder-models]] — Meta Muse Wonder·Wonder Full, 클로즈드 프런티어 에이전트 모델·Active Memory·API $4/$20 (2026-10-13)
- [[concepts/ai-memory-systems]] — Short/Long-term 메모리, Episodic/Semantic/Procedural 모달리티
- [[concepts/anthropic-agent-memory-dreaming]] — Anthropic의 에이전트 메모리 "dreaming", 세션 사이 오프라인 정리 (2026-11-07)
- [[concepts/claude-duet-proactive-agent]] — Anthropic Claude Duet, 상시 대기 에이전트 리서치 프리뷰 (2026-10-22)