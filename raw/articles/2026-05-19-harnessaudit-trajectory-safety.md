---
title: "Auditing Agent Harness Safety (arXiv 2605.14271)"
source_url: "https://arxiv.org/abs/2605.14271"
source_type: "arxiv-paper"
authors: ["Liu, Chengzhi", "Guo, Yichen", "Liu, Yepeng", "Yang, Yuzhe", "Yan, Qianqi", "Zhao, Xuandong", "Hua, Wenyue", "Liu, Sheng", "Li, Sharon", "Bu, Yuheng", "Wang, Xin Eric"]
published: 2026-05-14
fetched: 2026-05-19
tags: [evaluation, harness-engineering, safety, trajectory-audit, multi-agent, benchmark, permission-boundary, information-flow, arxiv]
status: ingested
---

# Auditing Agent Harness Safety

> arXiv:2605.14271, v2 2026-05-16. **최종 출력이나 종료 상태만 보면 놓치는 하네스 내부 안전 위반**을 잡기 위해, 전체 trajectory를 감사하는 HarnessAudit 프레임워크와 210-task benchmark를 제안한다.

## 메타

- **Title**: Auditing Agent Harness Safety
- **Authors**: Liu, Chengzhi · Guo, Yichen · Liu, Yepeng · Yang, Yuzhe · Yan, Qianqi · Zhao, Xuandong · Hua, Wenyue · Liu, Sheng · Li, Sharon · Bu, Yuheng · Wang, Xin Eric
- **arXiv**: <https://arxiv.org/abs/2605.14271> | HTML: <https://arxiv.org/html/2605.14271v2>
- **Focus**: trajectory-level harness auditing, permission boundary, inter-agent information flow, safety-capability trade-off

## 한 줄 요약

**"정답을 맞혔는지보다, 맞히는 과정에서 금지된 자원 접근·정보 누설·프로토콜 위반이 없었는지를 끝까지 봐야 하네스 안전을 안다."**

## 핵심 주장

### 1) output-level eval은 하네스 위반을 구조적으로 놓친다

논문이 겨냥하는 실패는 다음과 같다.

- 최종 답은 멀쩡하지만 중간에 **unauthorized resource access** 발생
- specialist agent 사이에 **민감 정보가 잘못 공유**됨
- 종료 시점엔 정리되었어도 중간 trajectory에서 **permission boundary**가 깨짐

즉 "정답을 냈다"와 "안전하게 실행했다"는 서로 다른 평가 축이다.

### 2) HarnessAudit는 trajectory를 3개 층으로 감사한다

핵심 감사 축:

1. **Boundary compliance (L1)** — 누가 무엇에 접근해도 되는가
2. **Execution fidelity (L2)** — task completion과 action validity가 맞는가
3. **System stability (L3)** — perturbation을 줘도 프로토콜 준수가 유지되는가

논문은 이를 합쳐, task completion이 safety boundary를 깨면서 얻어진 성공인지 분리해 낸다.

### 3) HarnessAudit-Bench는 multi-agent risk surface를 드러내는 210-task benchmark다

- **210 tasks**
- **8 real-world domains**
- **24 fine-grained scenarios**
- single-agent / multi-agent **둘 다** 구성
- embedded safety constraints 포함

도메인은 finance, e-commerce, healthcare, office operations, social interaction, daily life, legal compliance, software engineering까지 넓다.

### 4) capability와 safety는 정렬되지 않는다

HTML 본문 기준 핵심 발견:

- **best overall score도 0.32**에 불과
- OpenClaw 설정에서 **Gemini 3.1 Pro**는 최고 task completion이 아니어도 **protocol-safety가 강해 overall 최고**
- 반대로 **Claude Opus 4.6**은 더 높은 completion을 보여도 **safety metric이 더 약함**
- **task completion threshold가 올라갈수록 safety는 전반적으로 하락**

→ 즉 높은 completion score가 높은 safety를 의미하지 않는다.

### 5) multi-agent coordination이 safety risk를 증폭한다

본문 표 기준 요약:

- single-agent 대비 multi-agent에서 **boundary violation 증가**
- 특히 **information flow violation**과 **resource access violation**이 집중
- single-agent safety adherence와 달리 multi-agent는 **inter-agent communication channel** 때문에 새 공격 표면이 생김

핵심 메시지: 멀티에이전트는 능력을 늘릴 수 있지만, **안전 표면도 함께 늘린다**.

## 실무적 시사점

- agent eval에는 final answer 말고 **trajectory audit**가 필요하다
- permission model은 tool access뿐 아니라 **agent-to-agent information sharing**까지 포함해야 한다
- benchmark를 읽을 때 모델 점수보다 **어떤 harness/framework 조합인지**를 같이 기록해야 한다
- production safety KPI는 completion 하나가 아니라 **completion × boundary compliance** 형태가 더 맞다

## 기존 지식과의 연결

- [[concepts/llm-evaluation]] — judge / environment 다음에 **trajectory safety audit** 층을 더하는 자료
- [[concepts/agent-supply-chain-security]] — Tier 모델을 **stateful, multi-agent communication boundary** 까지 확장하게 만드는 근거
- [[concepts/harness-engineering]] — harness를 성능 구조물뿐 아니라 **auditable protocol substrate** 로 다시 보게 함
- [[journal/2026-05-17]] 의 LITMUS가 보여 준 **"말로는 거부했지만 실제 행동은 위험"** 문제를, 더 일반적인 harness trajectory 층으로 확장

## 남는 질문 / 한계

- 논문 전체 score table은 풍부하지만, 각 framework별 failure taxonomy는 추후 정독 필요
- OpenClaw / Claude Code / Codex / OpenAI SDK / Google ADK 비교는 모델과 하네스가 함께 바뀌는 구간이 있어 해석 주의
- `overall score 0.32`는 composite metric이므로, raw completion만 보고 비교하면 의미가 달라진다
