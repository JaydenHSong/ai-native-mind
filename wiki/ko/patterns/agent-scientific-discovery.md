---
title: "Agent Scientific Discovery"
category: patterns
tags: [agentic-research, scientific-discovery, evaluation, anthropic, claude, claims, openai, math-discovery, agmai, verification-asymmetry]
created: 2026-09-25
updated: 2026-10-08
sources:
  - "raw/articles/2026-09-25-anthropic-claude-crispr-art-enzyme.md"
  - "raw/articles/2026-09-26-stanford-paper2agent.md"
  - "raw/articles/2026-10-07-openai-377-math-results-github.md"
  - "raw/articles/2026-10-08-openai-722-math-manuscripts.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/mcp]]"
status: draft
confidence: medium
---

# Agent Scientific Discovery

## 쉽게 읽기

**비유**: 대학원생 950명에게 "바이러스 DNA 더미에서 재미있는 역전사효소를 찾아 봐"라는 한 줄 지시만 주고 21시간을 줬더니, 아무도 몰랐던 효소 시스템을 찾아냈다. Anthropic의 Claude 에이전트가 CRISPR 닮은 효소(ART)를 찾은 사건이다. "AI가 발견했다"는 말은 반만 맞다 — **가설은 에이전트가 냈고, 검증은 아직 lab과 peer review 차례**다.

| 용어 | 풀이 |
|------|------|
| **In-silico** | 컴퓨터 안에서만 수행되는 실험·분석 (wet-lab의 반대) |
| **ART** | Array-associated Reverse Transcriptases — 이번에 찾은 효소 시스템 이름 |

## 한줄 설명

연구급 에이전트의 발견 파이프라인 — **문헌 접지(literature grounding) → in-silico 가설 → wet-lab 검증** — "발견"의 주체는 에이전트였지만, 주장이 지식이 되려면 검증 파이프라인을 통과해야 한다.

## 문제 상황

"AI가 X를 발견했다"는 헤드라인이 나올 때마다 같은 논쟁이 반복된다.

- **기대**: 에이전트가 과학적 발견을 자동화
- **현실**: 발견 주장이 pre-print·블로그 수준에서 멈추고, 재현성·자율성 프레이밍 논쟁으로 번짐
- 이번 사건의 HN 토론(566 pts): (a) RT 자체는 알려진 것 — 새로운 건 주변 배열 (b) 블로그 발표는 심사 논문 아님 (c) LLM 탐색의 재현성 약함 (d) 자율성 과장

## 해결 방법 — 3단계 발견 템플릿

### 1. Literature grounding (문헌 접지)

에이전트는 막무가내로 뒤지지 않는다. Claude 에이전트들은 20만 개 reverse transcriptase를 수집하고, 3,500개 후보로 좁히고, 20개 보고서를 만들었다 — 각 단계에서 기존 문헌과 대조해 "이미 알려진 것"을 걸렀다.

### 2. In-silico hypothesis (계산 가설)

한 에이전트의 로그: "DNA next to the RT is spectacular: I can see by eye a tandem repeat array ... that's a CRISPR-like ... repeat array?!"

그 뒤 에이전트가 한 일:

1. 반복 수·간격 측정
2. 알려진 RT 시스템과 레이아웃 비교
3. 문헌에 같은 패턴의 선행 보고가 있는지 검색
4. human review용 보고서로 에스컬레이션

→ 즉 "발견"은 한 번의 추론이 아니라 **측정→비교→문헌대조→보고**의 파이프라인 산출물.

### 3. Wet-lab validation (실험 검증)

- Anthropic wet-lab에서 후속 분석·실험 — 어레이가 짧은 RNA로 발현되는 것 확인 (CRISPR guide RNA 유추의 근거)
- ART의 **기능은 아직 미지** — 프로그래머블하다는 주장 없음
- Feng Zhang(MIT·Broad): pre-print 리뷰 후 "genuinely intriguing"
- peer review는 아직 — Anthropic 스스로 "admittedly premature"(시기상조 인정)

## 적용 예시

에이전트에게 "발견"을 맡길 때의 체크리스트:

1. **탐색 범위를 문헌으로 먼저 좁힌다** — "새로운 것"의 기준을 명시
2. **가설은 보고서 형태로** — 측정값·비교·선행연구 대조를 포함
3. **검증 주체를 분리** — 발견 에이전트 ≠ 검증 주체 (wet-lab·peer review)
4. **주장의 강도를 단계별로 표기** — 가설 / in-silico 지지 / lab 확인 / peer 통과

## 장단점

| 장점 | 단점 |
|------|------|
| 전문가가 몇 주~몇 달 걸릴 분석을 21시간에 | 인간 개입 "초기 프롬프트 + wet-lab" — 프롬프트 설계의 기여도 불투명 |
| 950개 에이전트 병렬 탐색의 스케일 | 210M 토큰 — 비용이 만만치 않음 |
| 발견 과정이 로그로 남아 감사 가능 | 재현성 약함 — 같은 탐색을 다시 돌리면 같은 결과가 나올지 미보장 |

## 적용 사례 2 — Stanford Paper2Agent (2026-09-16): 논문 → MCP 에이전트

Claude의 ART 발견이 "에이전트가 발견을 수행"하는 사례라면, Paper2Agent는 **"논문 자체를 에이전트로"** 만드는 사례 — 발견 파이프라인의 입력(문헌)을 실행 가능한 형태로 바꾸는 접근.

- **방식**: 논문의 원고·코드·데이터·워크플로우를 **MCP 서버**로 감싸 Claude Code 같은 채팅 에이전트가 호출. 논문 1편당 약 45분, 비용 약 $14.
- **규모**: 계산생물학 논문 100편 중 **74편** 에이전트화 성공, **593개 검증 툴** 생성. AlphaGenome 케이스에서 튜토리얼 기반 쿼리 **98.7%**(저장소 직접 접근 82.7% 대비), 전체 벤치마크 평균 **91.2%**.
- **개념**: "virtual corresponding author(가상 교신저자)" — 논문에 질문하고, 방법론을 새 데이터에 적용하고, 다른 논문의 에이전트와 협업.
- **부수 효과**: 실패 26건(코드 불완전·문서 누락·의존성 비호환)은 사실상 논문 **재현성의 자동 감사**.
- **한계**: 성공률·정확도는 연구팀 자체 측정(독립 검증 필요). 원저자 동의 여부·생물학 밖 적용성은 미해결.

→ "문헌 접지" 단계가 **정적 읽기에서 실행 가능한 도구 호출**로 바뀐다는 점에서 위 "해결 방법" 3단계 템플릿의 입력층을 업그레이드하는 사례. [[concepts/mcp]]의 실전 패턴이기도 함.

## 적용 사례 3 — OpenAI 722개 수학 원고 GitHub 공개 (2026-10-06/07): 검증 비대칭의 정점

Claude의 ART 발견이 "에이전트가 wet-lab과 협업해 발견"하는 사례라면, OpenAI의 수학 결과 공개는 **"프론티어 랩이 비공개 모델로 발견을 독점"**하는 사례 — 발견 파이프라인의 입력(모델) 자체가 닫혀 있는 경우. (정정: 어제 기록의 "377개 결과"는 722개 원고 / 372개 결과 패밀리의 초기 수치였음.)

- **규모**: 10/6 밤 GitHub에 722개 원고 = 372개 결과 패밀리 공개. 약 4,000개 문제를 미공개 내부 모델에 던져 유의미하다고 판단한 것만 선별. Apache-2.0 라이선스. 레포의 GitHub Issues는 비활성화.
- **주장**: 대변인은 "단일 프롬프트를 단일 AI 에이전트에 건네 거의 모든 결과를 얻었다"고 주장. 결과당 평균 약 3시간의 ChatGPT Pro 사고 연산. 샘플: quasi-Riemann hypothesis(리만 가설의 약한 버전), 4차원 Kakeya 추측, Catalan 상수의 무리수성.
- **검증 상태**: Lean 형식화 메인 결과는 162건(~22%). 10건에 대한 축약 추론 요약만 공개. OpenAI는 "형식화되지 않은 결과 중 일부에 문제가 있을 수 있다"고 경고. 8/1 발표 10건에 대한 arXiv 감사는 실질 오류 미확인 (10월분은 미포함).
- **수학계의 "영수증을 달라"**: IAS 산하 AGMAI(9/29)는 모델명·프롬프트·추론 요약·연산 비용 공개를 권고. OpenAI는 평균 연산 시간과 일부 통계만 공개하고 프롬프트는 미공개. 대변인: "권고에 구속되지 않는다(not bound)." MIT Andrew Sutherland: "모델이 공개돼 재현 가능해지기 전까지 single-agent 주장은 unverified." Terence Tao: "문제가 분야가 흡수하는 속도보다 빨리 수확되고 있다."
- **전례**: Navier-Stokes 반례 당시, OpenAI가 AI를 쓰던 다른 수학자 팀의 작업을 "swooped in and finished"했다는 NYT 보도 — 발견 경쟁의 학계 윤리 문제와 맞물림.
- **이 페이지의 템플릿으로 읽으면**: "문헌 접지→in-silico 가설→검증" 파이프라인은 돌아가지만, **검증 주체(수학 커뮤니티)가 모델에 접근할 수 없어** 3단계 중 "검증 분리" 원칙이 무너짐. 결과물은 열려 있고(Apache-2.0) 과정(모델·프롬프트·Issues)은 닫힌 비대칭 — 여기에 수학계가 재현 규범으로 맞서는 구도까지 더해져 **검증 비대칭(verification asymmetry)**이 이 패턴의 핵심 사례로 굳어짐.

→ "발견의 주체"를 넘어 **"발견 도구의 공개성"** 이 새로운 논점. AGMAI의 요구는 사실상 "검증 가능성을 위한 모델 공개" 요구다.

## 관련 패턴

- [[concepts/llm-evaluation|LLM Evaluation]] — "AI discovers X" 주장에 대한 평가 프레임 (주장 강도 단계별 검증)
- [[concepts/harness-engineering|Harness Engineering]] — 950개 에이전트의 탐색을 지휘한 하네스 자체가 핵심 인프라

## 참고 소스

- [Claude agents identify a CRISPR-like enzyme system (ART) — 950 agents, 21 hours, 210M tokens](raw/articles/2026-09-25-anthropic-claude-crispr-art-enzyme.md)
- [Stanford Paper2Agent: research papers become MCP-based AI agents (~45 min, ~$14)](raw/articles/2026-09-26-stanford-paper2agent.md)
- [OpenAI, 미공개 모델의 수학 논문 722건 GitHub 공개 — '영수증을 달라'는 수학계 반발 (Decrypt, 10/7)](raw/articles/2026-10-08-openai-722-math-manuscripts.md)