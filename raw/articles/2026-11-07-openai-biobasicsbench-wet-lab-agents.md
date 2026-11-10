---
title: "OpenAI×Ligo, BioBasicsBench 공개 — 실제 젖은 실험실 데이터 100개 과제로 에이전트를 평가, Astra 66.7% (11-06)"
source_url: "https://kingy.ai/blog/biobasicsbench-openai-wet-lab-ai-guide/"
source_type: "news"
authors: ["OpenAI"]
published: 2026-11-06
fetched: 2026-11-07
tags: [openai, biobasicsbench, wet-lab, agent-evaluation, ligo]
status: raw
---

# OpenAI×Ligo, BioBasicsBench 공개 — 실제 젖은 실험실 데이터 100개 과제로 에이전트를 평가, Astra 66.7% (11-06)

> OpenAI가 11-06 효소 설계 기업 Ligo와 함께 BioBasicsBench를 공개했다. 논문의 깔끔한 차트가 아니라 실제 실험실에서 나오는 날것의 증거(젤 이미지·현미경 사진·기기 출력)를 읽고, 오류를 잡고, 증거가 부족하면 결론을 보류할 수 있는지를 묻는 100개 과제다. 최고 추론 설정(xhigh)에서 GPT-6 Astra가 평균 66.7%의 루브릭 크레딧을 얻었다. 단, 테스트한 7개 모델이 전부 OpenAI 자사 모델이고, 인간 기준선과 데이터셋은 함께 공개되지 않았다.

## 내용

- **과제 구성**: 100개 과제는 단백질 방법·이미징과 세포계측·정량과 분석·핵산 방법·분자 클로닝 5개 영역이다. 입력은 젤·블롯 이미지 31개, 프로토콜·노트·사양 27개, 표·기기 출력 20개, 현미경 14개 과제(유형이 겹쳐 합이 100이 되지 않는다). Ligo 과학자들이 자기 실험 데이터로 과제를 만들고 전문가 루브릭을 붙였으며, 다른 Ligo 과학자 1명과 외부 젖은 실험실 박사 1명의 검토를 거쳤다.
- **평가 규모**: 7개 모델 × 37개 모델·추론 설정 조합, 과제당 5회 시도, 총 18,500개의 채점 응답. 점수는 부분 크레딧을 주는 루브릭 평균 보상(mean reward)으로, 과제를 완전히 푼 비율이 아니다.
- **결과(xhigh, 최고 추론 설정)**: GPT-6 Astra 66.7%(95% CI 60.3–73.1%, 과제당 출력 토큰 4,704개), GPT-6.1 Sol 62.0%, GPT-5.6 Sol 43.8%, GPT-6 Luna 38.3%, GPT-5.5 35.4%, GPT-5.4 33.2%, GPT-5.2 31.2%. Astra는 GPT-5.6 Sol보다 약 절반의 출력 토큰으로 더 높은 점수를 냈다.
- **OpenAI의 단서**: "점수가 높아졌다고 해서 모델이 실험실에서 신뢰할 만한 판단을 내릴 수 있다는 뜻은 아직 아니다"라고 밝혔다. 벤치마크는 목표점이지 판정이 아니라는 프레이밍이다.
- **한계**: 7개 모델이 전부 OpenAI 자사 모델이라 경쟁사와의 비교는 안 된다. 발표 시점에 논문·데이터셋·전체 루브릭·평가 코드·원시 결과 링크가 없었다. 100개 과제만으로 모든 기기·시료·실험 맥락을 대표할 수 없다.

## 맥락

- [[concepts/openai-gpt6-rosalind-research-biology]] — GPT-6 Rosalind Research, 승인된 생명과학 연구소 전용 수직 모델 (2026-10-31)
- [[patterns/agent-scientific-discovery]] — 연구급 에이전트의 발견 파이프라인: 문헌 접지→in-silico 가설→wet-lab 검증
- [[concepts/llm-evaluation]] — LLM 출력을 체계적으로 테스트하는 Evals 방법론
- [[concepts/openai-ai-science-three-discoveries]] — OpenAI AI 과학 발견 3건, 수학·컴퓨터과학·물리학 (2026-10-27)