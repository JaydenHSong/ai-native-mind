---
title: "llm-d 1.0 — 프로덕션급 분산 LLM 추론 스택, 에이전트용 세션 어웨어 라우팅"
source_url: "https://cloud.google.com/blog/topics/ai-infrastructure/llm-d-1-0-an-open-source-stack-for-distributed-inference"
source_type: "news"
authors: ["Google Cloud", "SiliconANGLE", "Unite.AI"]
published: 2026-10-20
fetched: 2026-10-20
tags: [llm-d, inference, kubernetes, vllm, sglang, agents, pytorch-conference, cncf]
status: raw
---

# llm-d 1.0 — 프로덕션급 분산 LLM 추론 스택, 에이전트용 세션 어웨어 라우팅

> 10/20 PyTorch Conference NA에서 llm-d 1.0 릴리스 — Kubernetes 네이티브 분산 추론 서빙 스택 (CNCF Sandbox). 리드 메인테이너 Red Hat/IBM/Google, CoreWeave+NVIDIA 공동 창립, 500+ 기여자·25개 조직. 1.0의 핵심은 프로덕션 성숙도: 안정 v1 API·멀티테넌트 플로우 컨트롤·라우터 HA·무중단 업그레이드·**에이전트용 세션 어웨어 라우팅**. (Google Cloud 공식 블로그·SiliconANGLE·Unite.AI 교차)

## 내용

- **릴리스**: 2026-10-20, PyTorch Conference NA. 오픈소스 분산 추론 스택, CNCF Sandbox 프로젝트.
- **거버넌스**: 리드 메인테이너 Red Hat/IBM/Google — CoreWeave+NVIDIA가 공동 창립. 500+ 기여자, 25개 조직 (AMD·Cisco·Hugging Face·Intel·Lambda·Mistral AI).
- **1.0의 프로덕션 성숙도**: 안정 v1 API, 멀티테넌트 플로우 컨트롤, 라우터 고가용성(HA), 무중단 업그레이드, **에이전트용 세션 어웨어 라우팅**.
- **기술 기능**: prefix-cache-aware 라우팅, 플로우 컨트롤, KV 캐시 오프로드 (vLLM/SGLang), disaggregated prefill/decode.
- **수치**: IBM Ruchir Puri — 양자 오류정정 워크로드에서 **추론 비용 효율 11.8×**.
- **타깃 트래픽**: 멀티스텝 에이전트 + RL 롤아웃 트래픽 — 버스트성, 공유 long prefix가 많은 패턴을 명시적으로 겨냥.
- **번들 발표**: GKE에서 GPU/TPU 단일 엔드포인트. Google은 **TorchTPU** (TPU용 네이티브 PyTorch 백엔드, vLLM/SGLang 지원)도 함께 오픈소스.

## 맥락

- [[concepts/harness-engineering]] — 에이전트 트래픽(버스트·long prefix 공유)을 1급 시민으로 다루는 추론 스택 — "Agent = Model + Harness"의 Harness 층에 추론 라우팅이 들어옴. prefix 캐싱·세션 어웨어 라우팅은 멀티스텝 에이전트 설계의 직접 변수.
- [[concepts/persistent-agent]] — 상시 가동형 에이전트의 추론 인프라 전제 — 11.8× 비용 효율은 "항상 켜진 에이전트"의 단위 경제를 바꿈.
- [[comparisons/frontier-lab-economics]] — TorchNeuron (AWS)과 TorchTPU (Google)의 같은 날 발표 — 하이퍼스케일러의 "PyTorch 네이티브 백엔드" 경쟁 구도. 추론 스택의 칩 이식성이 10/20의 테마.
