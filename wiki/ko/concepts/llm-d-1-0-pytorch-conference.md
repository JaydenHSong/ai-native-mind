---
title: "llm-d 1.0 — 에이전트 트래픽을 1급 시민으로 다루는 분산 추론 스택"
category: concepts
tags: [llm-d, inference, kubernetes, vllm, sglang, agents, pytorch-conference, cncf, distributed]
created: 2026-10-20
updated: 2026-10-20
sources:
  - "raw/articles/2026-10-20-llm-d-1-0-pytorch-conference.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/persistent-agent]]"
  - "[[comparisons/frontier-lab-economics]]"
status: draft
confidence: high
---

# llm-d 1.0 — 에이전트 트래픽을 1급 시민으로 다루는 분산 추론 스택

## 쉽게 읽기

**비유**: LLM 추론 서버는 "식당"이다. 지금까지는 손님(요청)이 한 번 와서 먹고 가는 구조에 최적화돼 있었다. 에이전트는 "단골 단체 손님" — 계속 들락날락하면서 같은 메뉴(프리픽스)를 반복 주문한다. llm-d는 이 단체 손님을 위해 설계된 식당 운영 시스템 — 같은 주문은 미리 준비해두고(prefix 캐싱), 단체별로 테이블을 묶어 안내한다(세션 어웨어 라우팅).

| 용어 | 풀이 |
|------|------|
| **분산 추론 (distributed inference)** | 하나의 모델을 여러 GPU/노드에 나눠서 서빙하는 방식 — 큰 모델을 빠르게 돌리기 위한 인프라 |
| **prefix-cache-aware 라우팅** | 앞부분이 같은 요청들을 같은 서버로 보내 캐시를 재활용하는 라우팅 — 에이전트의 반복 호출에 효과적 |
| **disaggregated prefill/decode** | 입력 처리(prefill)와 토큰 생성(decode)을 분리된 리소스에서 돌리는 최적화 기법 |

## 한줄 정의

2026-10-20 PyTorch Conference NA에서 1.0이 릴리스된 Kubernetes 네이티브 분산 LLM 추론 스택 (CNCF Sandbox) — 멀티스텝 에이전트·RL 롤아웃 트래픽을 명시적으로 겨냥. 리드 메인테이너 Red Hat/IBM/Google.

## 핵심 내용

- **릴리스**: 2026-10-20, PyTorch Conference NA. 오픈소스 분산 추론 서빙 스택, CNCF Sandbox.
- **거버넌스**: 리드 메인테이너 Red Hat/IBM/Google — CoreWeave+NVIDIA 공동 창립. 500+ 기여자, 25개 조직 (AMD·Cisco·Hugging Face·Intel·Lambda·Mistral AI).
- **1.0의 프로덕션 성숙도**: 안정 v1 API, 멀티테넌트 플로우 컨트롤, 라우터 고가용성(HA), 무중단 업그레이드, **에이전트용 세션 어웨어 라우팅**.
- **기술 기능**: prefix-cache-aware 라우팅, 플로우 컨트롤, KV 캐시 오프로드 (vLLM/SGLang), disaggregated prefill/decode.
- **수치**: IBM Ruchir Puri — 양자 오류정정 워크로드에서 **추론 비용 효율 11.8×**.
- **타깃 트래픽**: 멀티스텝 에이전트 + RL 롤아웃 — 버스트성, 공유 long prefix가 많은 패턴을 명시적 타깃으로.
- **번들 발표**: GKE에서 GPU/TPU 단일 엔드포인트. Google은 **TorchTPU** (TPU용 네이티브 PyTorch 백엔드, vLLM/SGLang 지원)도 함께 오픈소스.

## 왜 중요한가 (1인 개발자 관점)

1. **"Agent = Model + Harness"에 추론층이 들어옴**: 하네스 설계에서 추론 인프라는 "그냥 API 호출"로 취급됐지만, llm-d는 에이전트 트래픽의 특성(버스트·long prefix 공유·세션)을 인프라가 직접 최적화하는 시대를 연다. prefix 캐싱·세션 어웨어 라우팅은 멀티스텝 에이전트의 레이턴시·비용에 직접적인 변수 — 자가 호스팅 에이전트를 돌린다면 스택 선택지에 들어옴.
2. **11.8×의 의미**: IBM의 양자 오류정정 워크로드 수치가 일반화되진 않지만, "추론 스택을 바꾸는 것만으로 한 자릿수 배율의 효율"이 가능하다는 신호. 10/19 위키의 "태스크당 $0.22"(모델 가격)와 "달러당 11–70%"(칩 효율)에 이은 세 번째 비용 하락 축 — 모델·칩·스택이 동시에 싸지는 중.
3. **10/20의 테마 — 칩 이식성**: 같은 날 AWS TorchNeuron (Trainium용 PyTorch 백엔드)과 Google TorchTPU (TPU용 PyTorch 백엔드)가 나란히 — 하이퍼스케일러들이 "PyTorch 네이티브"를 무기로 CUDA 대항마를 벼리는 구도. 추론 스택(llm-d) + 칩 백엔드(TorchNeuron/TorchTPU)의 조합이 "어디서든 도는 에이전트"의 표준이 될 가능성.

## 한계 (명시)

- 11.8×는 IBM의 양자 오류정정 워크로드 한정 수치 — 일반 에이전트 워크로드 대표성 없음.
- 1.0 릴리스 당일 발표 — 프로덕션 채택 사례·운영 데이터는 아직 없음.
- GKE GPU/TPU 단일 엔드포인트는 Google Cloud 종속 기능 — 멀티클라우드 이식성은 미확인.
