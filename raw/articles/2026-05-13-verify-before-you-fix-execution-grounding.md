---
title: "Verify Before You Fix: Agentic Execution Grounding for Trustworthy Cross-Language Code Analysis (arXiv 2604.10800)"
source_url: "https://arxiv.org/abs/2604.10800v1"
source_type: "arxiv-paper"
authors: ["Jugal Gajjar (George Washington University)"]
published: 2026-04-12
fetched: 2026-05-13
tags: [execution-grounding, vulnerability-detection, code-analysis, cross-language, agentic-pipeline, arxiv]
status: ingested
---

# Verify Before You Fix: Agentic Execution Grounding for Trustworthy Cross-Language Code Analysis

> arXiv:2604.10800v1, 2026-04-12. Jugal Gajjar (Department of Computer Science, The George Washington University). Cross-language vulnerability lifecycle: Java + Python + C++.

## 메타

- **Title**: Verify Before You Fix: Agentic Execution Grounding for Trustworthy Cross-Language Code Analysis
- **Author**: Jugal Gajjar (GWU CS)
- **arXiv**: <https://arxiv.org/abs/2604.10800v1>
- **HTML**: <https://arxiv.org/html/2604.10800v1>
- **Domain**: 취약점(vulnerability) 탐지 → 검증 → 자동 수리(repair) 파이프라인. Cross-language: Java / Python / C++.

## 한 줄 요약

**"Learned classifier의 prediction은 probabilistic inference이지 verified conclusion이 아니다 — execution-grounded confirmation 없이 repair 액션을 하면 downstream에서 실패가 누적된다. 따라서 strict invariant: *exploit-가능성이 execution으로 확인되기 전엔 절대 고치지 않는다*."**

## 핵심 주장

### 1) 문제 정의 — Compounding Failure

- 학습된 classifier가 agentic pipeline 안에 들어가면, 그 출력은 **확률적 추론**이다.
- "취약점이다(확률 0.87)"로 곧장 repair를 시작 → false positive로 인한 잘못된 코드 변경 → 다음 stage(테스트, 배포)에서 noise 누적.
- **Compounding failure**: 단계마다 작은 오탐이 곱해져 결과적으로 신뢰 불가능한 시스템.

### 2) 3-stage pipeline + Strict Invariant

```
Stage 1: Hybrid Structural-Semantic Detection
   - uAST (Universal AST: Java/Python/C++ → 공통 schema)
   - GraphSAGE embedding + Qwen2.5-Coder-1.5B embedding
   - 두 embedding을 learned two-way gating으로 fusion

Stage 2: Execution-Grounded Agentic Validation
   - Stage 1 후보를 실제로 실행 → exploit 가능한지 확인
   - "추론만으로 확정 금지"

Stage 3: Validation-Aware Iterative Repair
   - Stage 2가 confirm한 vulnerability만 repair 시도
   - Repair 결과도 다시 execution으로 verify (loop)
```

**Strict invariant**: *"No repair action is taken without execution-based confirmation of exploitability."* — 이것이 단순한 "best practice"가 아니라 시스템 invariant로 박혀 있는 것이 차별점.

### 3) Cross-language 일반화

- 세 언어를 **uAST**(Universal Abstract Syntax Tree)로 normalize → 같은 graph 표현.
- 그래프 임베딩(GraphSAGE)과 코드 LM 임베딩(Qwen2.5-Coder-1.5B)을 합치는 것이 핵심 — *구조*와 *의미*를 둘 다 본다.
- 학습 데이터/모델 한 벌로 세 언어 cover.

## 의의

### "Verification before action"의 코드 도메인 사례

- 같은 시점 [[journal/2026-05-13|GSAR]](claim 도메인) / [[journal/2026-05-13|Affordance Agent Harness]](embodied 도메인)와 짝.
- 셋 다 같은 질문: "model이 한 말을 믿기 전에 무엇을 검사할 것인가?" 답이 도메인마다 다른 evidence 종류로 갈라진다 — text evidence (GSAR), execution trace (이 논문), visual+kinesthetic evidence (AAH).

### Harness Engineering 매핑

- [[concepts/harness-engineering|harness-engineering]]의 **Sensors** 컴포넌트의 강한 사례. Sensor = execution validation.
- [[patterns/agent-server-harness|agent-server-harness]]에서 "외부 도구 호출 후 검증"의 패턴화.
- [[concepts/ai-orchestration|ai-orchestration]]의 **Evaluator-Optimizer** 패턴의 안전-크리티컬 인스턴스.

### 1인 개발자 적용

- `examples/` 폴더에 "코드 변경 → 테스트 실행 → 결과로 commit/revert 결정"이라는 minimal sketch 가능 (over-engineering 없이).
- 본 위키에서 [[patterns/ai-code-review|ai-code-review]]의 Plan-Review-Execute 패턴에 **Execute 전에 verify 게이트**를 명시적으로 끼우는 변형.

## 한계 / 주의

- **Execution이 가능한 도메인에 한정**: 모든 LLM 출력에 execution grounding을 적용할 순 없다 (e.g., 자연어 답변). GSAR는 텍스트, AAH는 시각/물리 — 도메인마다 verifier가 다르다.
- **uAST 정확도가 cross-language 일반화의 상한**: 세 언어를 잘 normalize 못하면 detection 자체가 무너진다.
- **Repair 루프 budget 통제 필요**: validation-aware iterative repair는 budget 없으면 발산 가능.

## 출처

- arXiv abstract + HTML
- Submitted: 2026-04-12 (v1)
- License: 명시 안 됨 (arXiv 기본)
- 본 위키 fetch: 2026-05-13
