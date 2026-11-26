---
title: "PrismML Ternary Bonsai 2.5 27B — 5.93GB에 SWE-bench 75.6, 로컬 에이전트용 3진 양자화 (11-24)"
source_url: "https://prismml.com/news/bonsai-2-5-27b"
source_type: "news"
authors: ["PrismML"]
published: 2026-11-24
fetched: 2026-11-26
tags: [prismml, bonsai, ternary, qwen, open-weight, local-models, agents, quantization]
status: raw
---

# PrismML Ternary Bonsai 2.5 27B — 5.93GB에 SWE-bench 75.6, 로컬 에이전트용 3진 양자화 (11-24)

> PrismML이 11월 24일 Ternary Bonsai 2.5 27B를 공개했다. Qwen3.8-27B의 모든 가중치를 -1·0·+1 세 값으로 줄인 3진(ternary) 모델로, 5.93GB 파일에 SWE-bench Verified 75.6점을 기록했다. Apache 2.0 라이선스.

## 내용

- **압축 방식**: 모든 언어 모델 가중치를 3진 값 {-1, 0, +1}으로 제한하고 128개 가중치 그룹마다 FP16 스케일 하나를 붙여 가중치당 1.76비트. 전체 5.93GB로 FP16 원본(53.8GB)의 약 1/9.
- **성능 (PrismML 자체 측정)**: SWE-bench Verified 75.6 (Bonsai 2의 60.8에서 +14.8, FP16 원본 80.6의 94%). DeepSWE 0→27.0, Terminal-Bench 2.1 52.8→60.1, AppWorld 51.2→90.5. 도구 호출 5종 평균 77.2로 FP16(77.7)과 사실상 동등. 에이전트 코딩 3종 평균은 FP16의 90% 수준.
- **실행 환경**: llama.cpp(CUDA·Metal·CPU)와 Apple MLX(Mac·iPhone·iPad)로 동작. 262K 컨텍스트. H100에서 MTP 사용 시 생성 291 토큰/초. GGUF 3종(PTQ1_0 5.93GB 등) Hugging Face에서 배포.
- **주의점**: 모든 수치는 PrismML 자체 벤치마크이며 독립 재현은 아직 없음. PrismML 스스로도 압축 모델은 긴 작업에서 오류가 누적돼 에이전트가 궤도를 이탈할 수 있다고 인정하며, 이번 버전은 도구 피드백 활용과 실패 복구를 개선했다고 설명.

## 맥락

- 로컬·온디바이스 에이전트 흐름의 연장 — 27B급 코딩 에이전트를 소비자 하드웨어(맥 포함)에서 돌릴 수 있다는 주장. 위키의 로컬 모델·에이전트 상주·양자화 주제와 직결
- Qwen3.8 기반 오픈 웨이트라는 점에서 중국 오픈 모델 생태계와도 연결
