---
title: "PrismML Ternary Bonsai 2.5 27B — 5.93GB에 SWE-bench 75.6, 로컬 에이전트용 3진 양자화"
category: concepts
tags: [prismml, bonsai, ternary, qwen, open-weight, local-models, agents, quantization]
created: 2026-11-26
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-26-prismml-ternary-bonsai-2-5-27b.md"
related:
  - "[[concepts/agent-residence]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: low
---

# PrismML Ternary Bonsai 2.5 27B — 5.93GB에 SWE-bench 75.6, 로컬 에이전트용 3진 양자화

## 쉽게 읽기

**비유**: AI 모델은 수십억 개의 숫자(가중치)로 이뤄져 있다. 보통은 숫자 하나하나를 정밀하게 저장해서 파일이 수십 GB나 된다. PrismML은 모든 숫자를 "-1, 0, +1" 세 가지 값으로만 줄였다. 색을 3가지로만 쓰는 그림처럼, 정보는 줄었지만 크기가 9분의 1(5.93GB)이 됐다. 그런데도 실제 코딩 시험(SWE-bench)에서 원본의 94% 성능을 냈다고 한다. 맥이나 일반 PC에서도 27B급 코딩 에이전트를 돌릴 수 있다는 주장이다. 단, 이 점수는 회사가 직접 잰 것이고 남이 다시 재보지 않았다.

| 용어 | 풀이 |
|------|------|
| **양자화 (quantization)** | 모델의 숫자를 적은 비트로 줄여 가볍게 만드는 기술 |
| **3진 (ternary)** | 가중치를 -1·0·+1 세 값으로만 제한하는 방식 |
| **SWE-bench** | 실제 소프트웨어 이슈를 해결하는 능력을 재는 코딩 시험 |
| **오픈 웨이트** | 모델 가중치를 공개해 누구나 내려받아 쓸 수 있는 형태 |
| **GGUF** | llama.cpp에서 쓰는 모델 파일 형식 |
| **MTP** | 다음 토큰을 여러 개 한 번에 예측해 생성 속도를 올리는 기법 |

## 한줄 정의

PrismML이 2026-11-24 공개한 Ternary Bonsai 2.5 27B는 Qwen3.8-27B의 모든 가중치를 -1·0·+1 세 값으로 줄인 3진(ternary) 모델로, 5.93GB 파일에 SWE-bench Verified 75.6점을 기록했다고 주장한다. Apache 2.0 라이선스.

## 핵심 내용

- **압축 방식**: 모든 언어 모델 가중치를 3진 값 {-1, 0, +1}으로 제한하고 128개 가중치 그룹마다 FP16 스케일 하나를 붙여 가중치당 1.76비트. 전체 5.93GB로 FP16 원본(53.8GB)의 약 1/9.
- **성능 (PrismML 자체 측정)**: SWE-bench Verified 75.6 (Bonsai 2의 60.8에서 +14.8, FP16 원본 80.6의 94%). DeepSWE 0→27.0, Terminal-Bench 2.1 52.8→60.1, AppWorld 51.2→90.5. 도구 호출 5종 평균 77.2로 FP16(77.7)과 사실상 동등. 에이전트 코딩 3종 평균은 FP16의 90% 수준.
- **실행 환경**: llama.cpp(CUDA·Metal·CPU)와 Apple MLX(Mac·iPhone·iPad)로 동작. 262K 컨텍스트. H100에서 MTP 사용 시 생성 291 토큰/초. GGUF 3종(PTQ1_0 5.93GB 등) Hugging Face에서 배포.
- **주의점**: 모든 수치는 PrismML 자체 벤치마크이며 독립 재현은 아직 없음. PrismML 스스로도 압축 모델은 긴 작업에서 오류가 누적돼 에이전트가 궤도를 이탈할 수 있다고 인정하며, 이번 버전은 도구 피드백 활용과 실패 복구를 개선했다고 설명.

## 왜 중요한가 (1인 개발자 관점)

1. **로컬 에이전트의 문턱이 낮아진다**: 27B급 코딩 에이전트를 6GB 파일로 맥에서 돌릴 수 있다면, 클라우드 비용·지연·프라이버시 걱정을 줄인 채 내 컴퓨터에서 에이전트를 상주시킬 수 있다.
2. **압축의 대가는 '긴 작업'에서 나온다**: 짧은 시험 점수는 원본의 94%지만, PrismML도 긴 작업의 오류 누적을 인정했다. 로컬 에이전트로 쓸 때는 짧은 태스크부터, 실패 복구 패턴과 함께 검증하는 게 순서다.
3. **벤더 수치의 함정**: 모든 수치가 자체 측정이다. 내 작업으로 직접 재보기 전에는 75.6점을 그대로 믿지 않는 게 맞다.

## 한계 (명시)

- 모든 수치는 PrismML 자체 벤치마크이며 독립 재현은 아직 없다.
- PrismML 스스로 긴 작업에서 오류 누적·궤도 이탈 가능성을 인정했다.
- Qwen3.8 기반 오픈 웨이트라는 점에서 중국 오픈 모델 생태계와 연결된다.
- confidence는 low — 벤더 수치만 있고 독립 검증이 전혀 없다.

## 관련 개념

- [[concepts/agent-residence]] — 에이전트의 상주 형태: 로컬 모델 vs 클라우드 컴퓨터. 27B 로컬 에이전트의 가능성 (2026-11-26)
- [[concepts/llm-evaluation]] — 벤더 자체 벤치마크의 평가 기준. 독립 재현이 없는 수치의 취급 (2026-11-26)

## 참고 소스

- [PrismML Ternary Bonsai 2.5 27B — 5.93GB에 SWE-bench 75.6, 로컬 에이전트용 3진 양자화 (PrismML, 11-24)](raw/articles/2026-11-26-prismml-ternary-bonsai-2-5-27b.md)
