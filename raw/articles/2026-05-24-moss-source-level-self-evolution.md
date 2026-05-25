---
title: "MOSS: Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems (arXiv 2605.22794)"
source_url: "https://arxiv.org/abs/2605.22794"
source_type: "arxiv-paper"
authors: ["Qianshu Cai", "Yonggang Zhang", "Xianzhang Jia", "Wei Xue", "Jun Song", "Xinmei Tian", "Yike Guo"]
published: 2026-05-21
fetched: 2026-05-24
tags: [harness-engineering, self-evolution, source-code, coding-agents, deployment, rollback, developer-tools, arxiv]
status: ingested
---

# MOSS: Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems

> arXiv:2605.22794. self-evolving agent가 prompt·skill·memory schema 같은 text artifact만 고치는 데서 멈추지 않고, **하네스 소스코드 자체를 재작성**해야 구조적 실패를 고칠 수 있다고 주장한다.

## 메타

- **Title**: MOSS: Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems
- **Authors**: Qianshu Cai · Yonggang Zhang · Xianzhang Jia · Wei Xue · Jun Song · Xinmei Tian · Yike Guo
- **Link**: <https://arxiv.org/abs/2605.22794>
- **Published**: 2026-05-21
- **Subjects**: Artificial Intelligence (cs.AI); Machine Learning (cs.LG)
- **Code**: <https://github.com/dav-joy-thon/MOSS>

## 한 줄 요약

**"self-evolving agent가 진짜 고쳐야 하는 것은 prompt 텍스트만이 아니라, routing·hook ordering·state invariant가 들어 있는 하네스 코드일 수 있다."**

## 핵심 주장

### 1) text-mutable artifact만으로는 구조적 실패를 못 건드린다

논문은 최근 self-evolving agent 흐름이 다음 범위에 evolution을 가둔다고 본다.

- skill file
- prompt configuration
- memory schema
- workflow graph

하지만 실제 production agent에서 중요한 실패는 종종 다음 층에 있다.

- routing policy
- hook ordering
- state invariants
- dispatcher behavior

이것들은 자연어 스킬이나 prompt 파일이 아니라 **소스코드** 에 숨어 있으므로, text layer만 수정하는 진화 루프는 애초에 도달할 수 없는 failure class가 존재한다.

### 2) source-level adaptation은 더 일반적이고 결정적이다

저자들의 framing에서 source-level rewriting이 가지는 장점은 네 가지다.

1. **Turing-complete medium** 이다.
2. text-mutable scope의 **strict superset** 이다.
3. base-model compliance에 덜 의존하고 **deterministic effect** 를 낸다.
4. long-context drift에 덜 침식된다.

즉 하네스 진화를 prompt engineering의 연장으로 보지 말고, **실행 기판 자체를 고치는 software maintenance loop** 로 봐야 한다는 주장이다.

### 3) MOSS는 외부 coding agent를 쓰되, 진화 파이프라인은 하네스가 통제한다

MOSS는 코드 수정을 직접 한 모델에 전부 맡기지 않는다. 대신 다음 흐름을 유지한다.

1. production failure evidence batch를 자동 큐레이션
2. deterministic multi-stage evolution pipeline 실행
3. 코드 수정은 pluggable coding-agent CLI에 위임
4. candidate image를 ephemeral trial worker에서 replay 검증
5. user-consent-gated promotion
6. health-probe-gated rollback

핵심은 **수정은 agent가, 단계 순서와 판정은 MOSS가** 가진다는 점이다.

## 정량 / 기여점

- OpenClaw에서 **single evolution cycle** 만으로
- four-task mean grader score **0.25 → 0.61**
- human intervention 없이 개선
- promotion 시 **in-place container swap + health-probe-gated rollback** 사용

## 실무적 시사점

1. self-evolving harness를 설계할 때, "어떤 텍스트 파일을 고칠까"보다 **어떤 코드 surface를 안전하게 수정 가능하게 열어둘까** 가 더 중요해진다.
2. 진화 루프는 edit generation보다 **evidence curation / replay validation / rollback policy** 가 더 load-bearing할 수 있다.
3. coding agent를 evolution worker로 쓰더라도, deploy authority는 분리해야 한다. 즉 **generation과 promotion을 같은 agent에 몰지 않는다**.

## 기존 지식과의 연결

- [[concepts/harness-engineering]] — self-evolving harness 논의를 **text artifact evolution → source-level harness evolution** 으로 한 단계 내린다.
- [[concepts/gen-ai-observability]] — production failure evidence batch와 replay validation은 observability가 진화 루프의 입력이라는 기존 흐름과 맞닿아 있다.
- [[patterns/safe-tool-calling-sandbox]] — health-probe-gated rollback은 safe deployment와 branchable sandbox 흐름에 연결된다.
- [출처](raw/articles/2026-05-21-library-drift-self-evolving-skill-libraries.md) — Library Drift가 skill lifecycle hygiene를 강조했다면, MOSS는 **skill 바깥의 harness code** 까지 관리 범위를 넓힌다.

## 한계 / 메모

- abstract 기준으로는 task 수·failure class breakdown이 제한적이다.
- OpenClaw 단일 substrate 중심이라 다른 agent runtime으로의 일반화는 후속 확인이 필요하다.
- 성능 개선은 인상적이지만, **어떤 종류의 코드 수정이 가장 자주 이득을 냈는지** 는 본문 정독이 필요하다.

## 참고

- arXiv abs: <https://arxiv.org/abs/2605.22794>
- Code: <https://github.com/dav-joy-thon/MOSS>
