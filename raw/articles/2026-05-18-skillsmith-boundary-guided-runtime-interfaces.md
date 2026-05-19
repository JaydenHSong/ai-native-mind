---
title: "SkillSmith: Compiling Agent Skills into Boundary-Guided Runtime Interfaces (arXiv 2605.15215)"
source_url: "https://arxiv.org/abs/2605.15215"
source_type: "arxiv-paper"
authors: ["Xu, Duling", "Chen, Zheng", "Pan, Zaifeng", "Guan, Jiawei", "Dong, Dong", "Li, Jialin", "Pu, Bangzheng"]
published: 2026-05-12
fetched: 2026-05-18
tags: [skills, tool-use, runtime-interface, context-efficiency, compiler, boundary-guided, agent-runtime, arxiv]
status: ingested
---

# SkillSmith: Compiling Agent Skills into Boundary-Guided Runtime Interfaces

> arXiv:2605.15215, 2026-05-12. skill을 매번 통째로 프롬프트에 주입하는 대신, **offline compile → minimal executable interface** 로 바꿔서 runtime의 context 낭비와 반복 추론을 줄이자는 논문.

## 메타

- **Title**: SkillSmith: Compiling Agent Skills into Boundary-Guided Runtime Interfaces
- **Authors**: Xu, Duling · Chen, Zheng · Pan, Zaifeng · Guan, Jiawei · Dong, Dong · Li, Jialin · Pu, Bangzheng
- **arXiv**: <https://arxiv.org/abs/2605.15215> | HTML: <https://arxiv.org/html/2605.15215v1>
- **Benchmark**: SkillsBench
- **Code/Data**: <https://github.com/AetherHeart-AI/Aeloon>

## 한 줄 요약

**"Skill은 읽히는 문서가 아니라, 미리 컴파일된 실행 경계(interface)로 바뀔 때 runtime이 빨라지고 싸진다."**

## 핵심 주장

### 1) raw skill injection은 두 가지 낭비를 만든다

기존 skill framework는 runtime task가 매칭되면 skill 전체를 reasoning loop에 컨텍스트로 주입한다. 논문은 이 방식이 다음 낭비를 만든다고 본다.

1. **irrelevant context injection** — 지금 task에 필요 없는 skill 내용까지 프롬프트에 들어감
2. **repeated skill-specific reasoning and planning** — 같은 skill을 쓸 때마다 해석·계획을 반복함

→ skill이 capability를 늘리기도 하지만, 동시에 **context tax** 를 키운다.

### 2) SkillSmith는 skill을 offline에 컴파일한다

SkillSmith의 핵심은 **boundary-first compiler-runtime framework** 다.

- skill package를 **offline** 에서 분석
- skill 안의 **fine-grained operational boundaries** 를 추출
- 이를 **minimal executable interfaces** 로 컴파일
- runtime에서는 필요한 컴포넌트만 동적으로 접근·실행

즉, skill을 "긴 지침 문서"로 쓰지 않고 **경계가 명확한 실행 인터페이스** 로 바꾸는 접근이다.

### 3) 런타임 절감 효과가 크다

SkillsBench 평가에서 논문이 보고한 핵심 수치:

- **solve-stage token usage -57.44%**
- **thinking iterations -42.99%**
- **solve time -50.57% (2.02x faster)**
- **token-proportional cost -57.44%**

→ skill을 잘 만드는 문제 못지않게, **skill을 어떤 형태로 runtime에 싣는가**가 비용과 속도를 크게 바꾼다.

### 4) 강한 compile 모델 + 작은 runtime 모델 조합이 가능하다

논문은 또 하나의 흥미로운 가능성을 제시한다.

- **stronger model** 이 compiled artifact를 생성
- 그 artifact를 **smaller / more efficient runtime model** 이 재사용
- raw skill interpretation이 실패하는 케이스에서 정확도 향상 가능

→ planning/compilation과 execution을 분리하는, 일종의 **skill distillation** 또는 **artifact transfer** 관점이다.

## 실무적 시사점

1. SKILL.md나 tool guide를 매 호출마다 길게 주입하기보다, **짧은 runtime interface** 로 축약하는 편이 유리하다.
2. skill 운영은 "잘 썼는가"뿐 아니라 **compile-time과 runtime을 분리했는가**도 봐야 한다.
3. 강한 모델은 매번 실행에 쓰기보다, **artifact compiler** 로 한 번 쓰고 이후엔 저렴한 모델이 재사용하게 만들 수 있다.
4. tool/schema/skill 설명은 문서가 아니라 **실행 경계 설계**의 문제로 다시 봐야 한다.

## 본 위키와의 짝

- [[concepts/tool-use]] — tool/skill을 설명서가 아니라 interface로 보는 관점 보강
- [[concepts/harness-engineering]] — skill loading 자체가 runtime harness 문제임을 보여 줌
- [[patterns/subagents-delegation]] — 긴 raw context 대신 컴파일된 handoff artifact를 주는 방향과 연결
- [[concepts/agent-supply-chain-security]] — skill을 통째로 주입하지 않고 경계화하면 공격면도 줄일 여지가 있음

## 메모

- 현재 확보한 핵심은 abstract 및 HTML snippet 기반
- benchmark의 세부 task breakdown은 추후 정독 시 보강 가능
- 그래도 메시지는 선명하다: **skills as context → skills as compiled runtime interface**
