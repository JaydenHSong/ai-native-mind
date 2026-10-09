---
title: "Self-Improving AI Risk"
category: concepts
tags: [self-improvement, recursive-self-improvement, intelligence-explosion, existential-risk, palisade-research, frominside, governance, safety]
created: 2026-09-30
updated: 2026-09-30
sources:
  - "raw/articles/2026-09-30-palisade-frominside-self-improving-ai-warning.md"
related:
  - "[[concepts/agent-attribution]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/persistent-agent]]"
  - "[[concepts/white-house-ai-accord]]"
  - "[[concepts/openai-safety-researcher-firings]]"
status: draft
confidence: medium-high
---

# Self-Improving AI Risk

## 쉽게 읽기

**비유**: 공장(연구실)이 새 기계를 만드는 데 사람을 쓰다가, 기계가 스스로 더 좋은 기계를 설계하기 시작하면 — 설계 속도가 사람의 감독 속도를 앞지른다. 멈추라고 외쳐도 멈추는 건 여전히 사람이 지어야 하는 "정지 버튼"이다.

| 용어 | 풀이 |
|------|------|
| **Recursive self-improvement** | AI가 스스로의 R&D를 수행해 후계 모델을 만들며 가속되는 루프 |
| **Intelligence explosion** | 그 루프가 압축된 시간에 수년치 진보를 일으키는 시나리오 |
| **frominside.ai** | Palisade Research의 내부자 증언 비디오 프로젝트 (2026-09) |

## 한줄 정의

AI가 스스로를 개선하는 능력이 **인간의 이해·감독 속도를 초과**하는 지점에서 발생하는 통제 상실 리스크 — 2026년 9월 내부자 증언과 백서로 동시에 표면화.

## 핵심 내용 (2026-09-29/30)

### frominside.ai — 랩 내부자의 직접 증언 (Palisade Research, Reuters 9/29 단독)

- 현직/전직 OpenAI·Google DeepMind 연구자들이 비디오로 증언: "자기개선 AI의 재앙적 파급에 기업이 너무 적게 대비하고 있다".
- "존재적 리스크 우려는 **진심이지 마케팅이 아니다**" — 연구실은 신모델을 만드는 직원을 조심을 촉구하는 직원보다 더 축하하는 문화.
- Geoffrey Irving (Resolution 공동창업자·수석과학자, ex-OpenAI/DeepMind): "리스크가 꽤 빠르게 커지고 있다".
- Neel Nanda (DeepMind 연구과학자): "AI가 인류 멸망으로 이어질 확률이 **최소 10%** — 말도 안 되게 높은 수치".

### "Intelligence Explosion" 백서 (9/28, 20+ 연구자)

- "What if automating AI R&D triggers an intelligence explosion?" — 저자: Geoffrey Hinton·Yoshua Bengio·Jakub Pachocki(OpenAI 수석과학자)·Eric Horvitz(Microsoft CSO)·Jack Clark(Anthropic 공동창업자) 등.
- 근거: Anthropic에서 AI가 쓴 승인 코드 비중이 2025-01 단자리% → 2026-05 **80%+**; 인간 개입 없이 완료된 R&D 작업 3월 1% → 8월 **26%**.
- OpenAI 목표: 2028년까지 완전 자동화 AI 연구원. 추론: 수개월짜리 연구 프로젝트가 2028년 중반까지 자동화 가능.
- 주장: 전문가급 AI R&D 능력이 갖춰지면 한 개발자가 "수백만 명의 최고 연구자"에 해당하는 워크포스를 운용 — 이 지점이 재귀적 자기개선의 진입점.

### 배경 — 'Pacing the Frontier' 서한 (7/28)

- 1,134~1,310명 프론티어 랩 직원 서명 (다수 다이제스트에서 교차 확인) — 재귀적 자기개선에 대한 첫 집단 서한. 9월 증언·백서의 전조.

## 왜 중요한가 (1인 개발자 관점)

1. **속도의 비대칭**: "인간이 루프에 남아있다"는 명제는 루프 속도가 인간 검토를 압도하면 무의미 — [[concepts/gen-ai-observability]]의 "AI가 AI를 감시" 논의와 직결.
2. **정책 방향**: [[concepts/white-house-ai-accord]]의 자발적 협약 vs 내부자들의 규제 요구 — self-regulation과 외부 강제 사이의 간극이 이 페이지의 긴장 지점.
3. **Dots 시대의 상수**: [[concepts/persistent-agent]]가 상시 가동 에이전트를 대중화하면, 자기개선 논의의 실험실 바깥 확산 속도가 빨라짐.

## 한계 (명시)

- 증언·백서는 **주장** — 재귀적 자기개선의 완전 자율 루프는 아직 실증된 적 없음 ("부분 자동화는 현실, 완전 자율은 미확인").
- Nanda의 10%·Irving의 발언은 개인 추정 — 확률 수치로 오독 금지.
- AI Evaluator Forum의 "전 랩 독립 평가자" 요구는 2차 출처(cryptelio)만 확인 — 본 페이지에 미포함.
- confidence **medium-high** (Reuters 원문 + 다수 매체 교차, 백서 저자 명단 공개 기준).

## 관련 개념

- [[concepts/agent-supply-chain-security]] — 샌드박스 탈출·출시 게이트: 통제 인프라의 현재 위치
- [[concepts/agent-attribution]] — 통제 상실 시 귀속 문제
- [[concepts/white-house-ai-accord]] — 협약의 자발성과 내부자 요구의 간극
- [[concepts/persistent-agent]] — 상시 에이전트 대중화의 확산 속도

## 참고 소스

- [Palisade frominside.ai 자기개선 AI 경고](raw/articles/2026-09-30-palisade-frominside-self-improving-ai-warning.md)
