---
title: "Nace Drex Max v1 — 텍스트를 생성하지 않고 확률만 내는 27B 결정 모델의 오픈웨이트 공개"
source_url: "https://www.marktechpost.com/2026/11/01/nace-ai-open-sources-drex-max-v1-local-inference/"
source_type: "news"
authors: ["MarkTechPost"]
published: 2026-11-01
fetched: 2026-11-01
tags: [nace, drex, decision-model, open-weights, apple-silicon, agent-routing]
status: raw
---

# Nace Drex Max v1 — 텍스트를 생성하지 않고 확률만 내는 27B 결정 모델의 오픈웨이트 공개

> Nace AI가 11-01 Drex Max v1의 가중치를 공개했다. 27B dense 결정 모델로, 텍스트를 생성하지 않고 질문마다 모든 선택지의 확률을 한 번의 순전파로 반환한다. bf16·Q8_0 GGUF·affine Q4 체크포인트와 llama.cpp·Ollama 포크가 함께 나와 Apple Silicon Mac에서도 로컬 실행이 된다. (MarkTechPost, Nace 모델 카드 기반)

## 내용

- **구조**: 27B dense, 64층 중 48층 Gated DeltaNet 선형 어텐션 + 16층 풀 어텐션(4층마다 배치). 컨텍스트 262,144 토큰(기본값 16,384), 질문당 최대 255개 선택지, 요청당 최대 16개 질문.
- **실행 경로**: bf16은 H100급 GPU, Q8_0 GGUF는 48GB Mac, affine Q4는 24GB 이상 Apple Silicon Mac에서 동작한다. Mac·CPU 경로는 현재 텍스트 전용이며 이미지 입력은 Nvidia GPU용 Python 구현이 필요하다.
- **성능(자체 보고)**: Decision Index 0.4 공개 텍스트 67.52점, Drex v2.0(61.25)·Jev 1.13.0(57.96)보다 높다. InfographicVQA 97.3, Tools 영역 81.9. Artificial Analysis Decision Index는 64점으로 18개 중 4위라고 Nace는 밝힌다.
- **용도**: 에이전트 라우팅·분류·정책 검사·가드레일 같은 반복 판단 업무를 로컬에서 처리한다. API는 10-19 일반 공개됐고, 이번 공개는 가중치 자체다. 라이선스는 Nace.AI Open RAIL-M.
- **한계**: 모든 수치는 Nace 자체 보고이며 독립 검증이 없다. 훈련 데이터·베이스 모델 공개 여부는 별도 명시가 없고, 일부 보도(Artiverse)는 Nace 후원으로 작성됐다.

## 맥락

- [[concepts/semantic-decision-engine]] — 선택지가 고정된 결정 전용 비생성 엔진, Jev (2026-09-27 위키)
- [[concepts/cloudflare-clairic-system-one-extraction]] — Cloudflare Clairic, 출력 토큰 0개의 System One 추출 모델 (2026-10-20 위키)
- [[concepts/structured-output]] — LLM이 특정 스키마에 맞는 출력을 생성하도록 강제
