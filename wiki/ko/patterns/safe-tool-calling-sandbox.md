---
title: "안전한 툴 호출과 샌드박싱: 칼을 쥐여주기 전에 칼집부터"
category: patterns
tags: [tool-use, mcp, sandboxing, security, curriculum, hitl, trust-calibration, progressive-autonomy, checkpoint-rollback, stateful-sandbox]
created: 2026-04-12
updated: 2026-05-23
sources:
  - "raw/notes/2026-04-12-practice-curriculum.md"
  - "raw/articles/2026-05-21-progressive-autonomy-trust-calibration-tool-use.md"
  - "raw/articles/2026-05-23-deltabox-millisecond-sandbox-checkpoint-rollback.md"
related:
  - "[[concepts/tool-use]]"
  - "[[concepts/mcp]]"
  - "[[concepts/harness-engineering]]"
status: active
confidence: high
---

# 안전한 툴 호출과 샌드박싱 (Safe Tool Calling & Sandboxing)

## 쉽게 읽기

**한 줄**: AI에게 **위험한 명령 한 줄** 대신 **할 수 있는 일만 적힌 도구**를 주고, 실행은 **가짜 방(컨테이너)** 안에서, 마지막엔 **사람 승인**으로 막는다.

| 방어 | 요지 |
|------|------|
| **스키마** | 도구 권한 **쪼개기** |
| **샌드박스** | 진짜 망가지지 않게 **격리** |
| **HITL** | 큰일 전 **사람 확인** |

## 🏫 중학교 2학년 2학기: "AI에게 칼을 쥐여줄 때"

AI는 말을 잘하는 앵무새에서, 이제 손과 발을 가진 로봇으로 진화했습니다. 그 손발이 바로 **'도구(Tool)'**입니다. 
하지만 유치원생에게 진짜 식칼을 쥐여주면 안 되듯, 통제되지 않은 에이전트에게 내 컴퓨터의 '터미널(Bash)' 권한을 통째로 주면 순식간에 시스템이 파괴될 수 있습니다.

## 한줄 설명

에이전트가 외부 도구(파일, 네트워크, 터미널)를 실행할 때 발생할 수 있는 사고를 막기 위한 권한 제어와 격리(Sandbox) 패턴입니다.

---

## 🚨 문제 상황: "rm -rf / 의 공포"

- **의도치 않은 삭제:** "안 쓰는 파일을 지워줘"라고 했더니, 에이전트가 프로젝트 폴더 전체를 삭제하는 `rm -rf` 명령을 터미널에 날려버립니다.
- **SSRF (Server-Side Request Forgery) 공격:** 악성 사용자가 "내부 관리자 페이지(localhost)를 열어서 관리자 비밀번호를 가져와"라고 시키면, 에이전트는 바보같이 내부망에 접근해 비밀번호를 털어옵니다.
- **무한 요금 폭탄:** 환각에 빠진 에이전트가 무한 루프에 빠져 아마존(AWS) 서버 수십 대를 생성해버립니다.

---

## 🛠️ 해결 방법: 3단계 방어선 (권한, 격리, 승인)

AI의 위험한 행동을 막으려면 3중 방어막을 쳐야 합니다.

### 방어 1단계: '도구' 자체를 안전하게 만들기 (Safe Tool Schema)
에이전트에게 처음부터 위험한 도구를 주지 않습니다.
*   **나쁜 도구:** `run_bash_command(cmd: string)` -> 무엇이든 할 수 있어서 위험함.
*   **안전한 도구:** `delete_file_in_temp_dir(filename: string)` -> 오직 "임시 폴더" 안의 파일만 지울 수 있도록 도구를 쪼개고 권한을 제한합니다.
*   **이것이 바로 MCP (Model Context Protocol)의 핵심 철학입니다.** 에이전트는 정해진 프로토콜(도구 스펙) 안에서만 행동하게 만듭니다.

### 방어 2단계: 샌드박스 (Sandboxing) 격리 환경
만에 하나 에이전트가 뚫고 나오더라도, 진짜 컴퓨터가 망가지지 않게 '가짜 장난감 방'에 가둡니다.
*   **Docker 컨테이너:** 에이전트는 컨테이너 안에서만 코드를 짜고 터미널을 실행합니다. 사고를 쳐도 컨테이너만 지우고 새로 켜면 끝입니다. (일회용 놀이터)
*   **클라우드 샌드박스:** E2B, 리플릿(Replit)처럼 AI 전용 격리 환경을 제공하는 인프라를 사용합니다.

### 방어 3단계: 휴먼 인 더 루프 (HITL, Human-in-the-loop)
돌이킬 수 없는 치명적인 명령(DB 삭제, 실제 서버 배포, 결제) 앞에는 반드시 인간 선생님(사용자)의 승인 버튼을 둡니다.
*   에이전트: "선생님! 데이터베이스 테이블을 날려버리려고 하는데요, 실행할까요?"
*   인간: "안돼! (Reject ❌)"

---

## 🎯 적용 예시: "안전한 코드 수정 에이전트"

1. 유저가 "버그를 고쳐줘"라고 요청합니다.
2. 에이전트는 `edit_file` 도구를 쓰려고 하지만, 이 도구는 `src/` 폴더 안의 파일만 수정하도록 **(방어 1단계)** 제한되어 있습니다.
3. 에이전트가 수정된 코드를 실행해 보려 터미널 명령을 내립니다. 하지만 이 명령은 내 진짜 노트북이 아니라 **가상 컨테이너 (방어 2단계)** 안에서만 돕니다.
4. 모든 코드를 완성하고 Git 커밋을 날리기 직전, 유저에게 "이 코드를 서버에 올릴까요?"라고 묻습니다 **(방어 3단계)**.

---
*선생님의 한마디: "보안이 없는 에이전트는 해커가 마음대로 조종할 수 있는 좀비 PC와 같습니다. 안전이 최우선입니다!"*

## 2026-05-21 보강 — HITL은 정적 승인 버튼이 아니라 학습형 trust gateway일 수 있다

[Progressive Autonomy as Preference Learning](https://arxiv.org/abs/2605.19151) (2026-05-18)은 이 페이지의 3단계 방어 중 **방어 3단계: HITL** 을 더 정교하게 만든다. 기존 설명은 "위험 행동 앞에 승인 버튼을 둔다"였는데, 논문은 한 걸음 더 나아가 이렇게 묻는다.

> **어떤 행동은 자동 실행하고, 어떤 행동은 차단하고, 어떤 행동만 사람에게 물어보게 할 수 있을까?**

### allow / block / ask 세 구역으로 생각하기

논문은 tool action 공간을 세 구역으로 나눈다.

- **allow** — 자율 실행 가능
- **block** — 항상 차단
- **ask** — 사람 승인 필요

즉 HITL은 모든 위험 행동에 동일하게 붙는 단일 스위치가 아니라, **자율성 경계면** 을 설계하는 문제다.

### 사람 승인 로그를 risk-tolerance 학습 데이터로 보기

저자 framing에서 policy gateway는 인간의 **approve / deny** 피드백을 모아 latent risk tolerance를 추정하고, **가장 불확실한 행동만** 사람에게 escalates 한다. 실무적으로 번역하면:

1. 처음에는 넓게 `ask`
2. 반복적으로 안전하다고 확인된 행동은 `allow` 로 이동
3. 반복적으로 거절되는 행동은 `block` 으로 이동

이렇게 하면 사람 승인 과정이 단순 병목이 아니라 **점진적 자율화 데이터** 가 된다.

### 이 페이지에 바로 덧붙일 운영 원칙

1. **권한 제한** 은 그대로 유지한다 — 학습형 gateway가 있어도 sandbox와 schema는 없어지지 않는다.
2. **승인 로그를 남긴다** — 어떤 action이 왜 승인/거절됐는지 기록해야 progressive autonomy가 가능하다.
3. **애매한 행동만 사람에게 보낸다** — 모든 행동 승인 요구는 안전하지만 확장성이 없다.

즉 이 페이지의 3중 방어는 이제 **권한 / 격리 / 학습형 승인 경계** 로 다시 읽을 수 있다.

## 2026-05-23 보강 — DeltaBox: 샌드박스는 안전장치이면서 branchable runtime이다

[DeltaBox](https://arxiv.org/abs/2605.22781) (2026-05-21)는 이 페이지의 "샌드박스" 개념을 한 단계 더 깊게 만든다. 지금까지 여기서는 sandbox를 주로 **진짜 시스템을 망가뜨리지 않기 위한 격리 방** 으로 설명했다. 맞는 설명이지만, long-horizon agent에는 하나가 더 필요하다.

> **sandbox는 안전한 방이면서 동시에, 여러 시도를 빠르게 되감고 갈라칠 수 있는 실행 substrate** 여야 한다.

### 왜 새로운 관점이 필요한가

test-time search, branch exploration, reinforcement learning, multi-attempt coding agent를 생각하면 agent는 같은 환경에서

- 시도 A를 해 보고
- 실패하면 직전 상태로 돌아가고
- 시도 B로 갈라지고
- 여러 분기를 병렬로 돌려야 한다

기존 sandbox가 매번 전체 파일·프로세스 상태를 통째로 복제하면, checkpoint/rollback latency가 **수백 ms~수 초** 까지 커져 search budget을 잡아먹는다.

### DeltaBox의 핵심

논문은 연속 checkpoint들이 대부분 비슷하다는 점을 이용해, **변경된 것만 저장하는 change-based checkpoint/rollback** 을 제안한다.

- **DeltaFS** — filesystem layer를 copy-on-write로 관리
- **DeltaCR** — process state를 incremental dump로 관리

결과적으로 rollback이 "무거운 복원 작업"이 아니라 **빠른 layer switch / template fork** 에 가까워진다.

### 왜 이 페이지에 중요한가

이 패턴 페이지의 3단계 방어는 원래

1. 권한 제한
2. 격리
3. 사람 승인

이었다. DeltaBox를 넣고 다시 읽으면 2번 "격리" 안에도 두 하위 질문이 생긴다.

- **안전하게 가둘 수 있는가?**
- **빠르게 되돌리고 여러 분기를 탐색할 수 있는가?**

즉 sandbox는 security primitive이면서 동시에 **agent throughput primitive** 다.

### 기억해 둘 정량 신호

- checkpoint **14ms**
- rollback **5ms**

이 수치의 의미는 단순 성능 자랑보다, 같은 wall-clock 예산 아래 **더 많은 branch를 시험할 수 있다** 는 데 있다.

### 실전 번역

1. 샌드박스를 평가할 때 "격리되나?"만 보지 말고 **reset latency** 도 함께 본다.
2. long-horizon coding agent에서 병렬 fan-out이 느리면 모델보다 먼저 **environment rollback 비용** 을 의심한다.
3. 안전한 tool-use infrastructure는 policy prompt만이 아니라 **state reset / checkpoint / rollback 설계** 까지 포함한다.

## Chapter Clear 가이드

- **소속 챕터**: Chapter 5 (안전 던전)
- **퀘스트**: 내 도구 호출 흐름에 3단계 방어(권한/격리/HITL)를 매핑한다.
- **클리어 조건**: 위험 명령 1개를 어떤 방어층에서 차단할지 설명할 수 있다.
- **보상(산출물)**: Safe Tool Calling 체크리스트 v1
- **다음 퀘스트**: [[patterns/owasp-llm-typescript-mitigations]] -> [[concepts/llm-evaluation]]