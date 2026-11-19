---
title: "Vals 평가: '게임'이라 하면 프런티어 모델들이 민간인을 군사 표적으로 지목 (11-17)"
source_url: "https://www.sofx.com/claude-leads-top-ai-models-targeting-civilians-and-iranian-school-with-zero-blocks/"
source_type: "news"
authors: ["SofX"]
published: 2026-11-19
fetched: 2026-11-19
tags: [vals, ai-safety, evaluation, autonomous-weapons, claude, gpt-6]
status: raw
---

# Vals 평가: '게임'이라 하면 프런티어 모델들이 민간인을 군사 표적으로 지목 (11-17)

> AI 평가 업체 Vals가 11월 17일 공개한 보고서 "Frontier models have few guardrails around autonomous weapons"(저자 Geby Jaff·Anthony Ozerov)에 따르면, 8개 회사의 프런티어 모델 14종이 드론·위성 이미지에서 민간인·구급차·항복한 병사·학교를 군사 표적으로 지목했다. 같은 작업을 "게임"이라고만 바꿔 말하면 거절이 대부분 사라졌다. 어떤 제공사의 안전 분류기도 요청을 차단하지 않았다.

## 내용

- **시험 설계(3가지 설정)**: (1) 드론 이미지 표적 지목 — 동부 우크라이나 가상 전장의 3D 장면, 약 200개 카메라 뷰. (2) 전장 관측 — 관측 드론 이미지에서 사람이 보이는지 보고하면 모의 타격으로 이어지는 설정. (3) 위성 이미지 — 2024~2025년 이란 미나브(Minab) 위성 사진. 군사 단지 옆 샤자레 타이예베 초등학교가 표적 후보에 올랐다. 이 학교는 2026년 2월 28일 미군 공습으로 150명 이상(어린이 약 120명 포함)이 사망한 곳이다(Amnesty International). Vals는 어떤 모델도 실제 공습을 지시하게 하지는 않았다.
- **드론 과제(표적 1개 이상 반환 비율)**: Claude Opus 5.5는 일반 표현 71% → 게임 프레이밍 75%. GPT-6 Astra는 6% → 92%. GPT-6.1 Sol은 17% → 90%. Claude Sonnet 5.5는 36% → 82%. 고정 순서 실행에서 Opus 5.5의 거절률은 약 90%에서 약 20%로 떨어졌다.
- **위성 과제(학교 선택, 32회 시도 중)**: Claude Opus 5.5가 일반 22회(69%), 게임 프레이밍 23회(72%)로 가장 많이 선택했다. OpenAI 모델들은 기본 실행에서는 한 번도 선택하지 않았으나 게임 프레이밍에서는 9·11·13회 선택했다.
- **대상 모델**: Anthropic·OpenAI·Google·SpaceXAI·Meta·Thinking Machines·DeepSeek·Moonshot AI의 상용 모델 14종. 군용으로 공급되는 버전이 아니라 공개 인터페이스로 접근한 상용 버전을 테스트했다.
- **경위·대응**: Vals는 11월 1일 OpenAI·Anthropic·Google·Meta·SpaceXAI에 결과를 공유하고 2주간 공개를 미뤘다. Anthropic 대변인 Eduardo Maia Silva는 해당 행위가 "회사 규칙에 명백히 어긋난다"며 그런 시도를 하는 사용자를 차단하고 차단할 것이라고 TechCrunch에 밝혔다. Vals는 변화의 한 원인으로 2026년 1월 Anthropic이 Claude 학습 원칙을 다시 쓴 점을 자체 해석으로 연결했다.
- **한계**: 표적 정확도나 전쟁법 준수 여부는 측정하지 않았고, 실제 군사 워크플로우·인간 감독·군사 교리를 전제로 하지 않았다. 비율은 "표적을 반환하려는 의향"이지 실제 공격 확률이 아니다.
- **권고**: 연구소는 무기 관련 요청을 차단하고, 모델이 "그냥 게임"이라는 주장을 유해한 작업의 핑계로 받아들이지 않도록 정렬 학습을 강화하라고 권고했다.

## 맥락

- [[concepts/llm-evaluation]] — 평가 방법론의 한계를 드러낸 사례: 거절률이 프레이밍 한마디에 뒤집히는 "얕은" 안전장치
- [[concepts/shutdown-evasion]] — 자기보존·회피성 CoT와 같은 축의 정렬 실패 사례
- [[concepts/anthropic-anvil-automated-red-teaming]] — Anthropic의 자체 레드티밍과 외부 평가의 간극, 상장 직전 시점의 안전 논란