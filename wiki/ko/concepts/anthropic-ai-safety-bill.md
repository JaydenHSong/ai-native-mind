---
title: "Anthropic의 미국 AI 안전 법안 초안 — 10억 달러·50명 임계값의 모델 중단 조항, 상무부→법원 절차"
category: concepts
tags: [anthropic, ai-safety-bill, regulation, model-shutdown, us-policy, kill-switch, commerce-department]
created: 2026-10-18
updated: 2026-10-18
sources:
  - "raw/articles/2026-10-18-anthropic-ai-safety-bill.md"
related:
  - "[[concepts/nyc-ai-hearing]]"
  - "[[concepts/australia-frontier-ai-regulation]]"
  - "[[concepts/claude-misbehavior-disclosure]]"
  - "[[patterns/agent-safety-runtime]]"
status: draft
confidence: high
---

# Anthropic의 미국 AI 안전 법안 초안 — 10억 달러·50명 임계값의 모델 중단 조항, 상무부→법원 절차

## 쉽게 읽기

**비유**: Anthropic이 "우리 같은 회사를 멈출 수 있는 법을 우리가 써서 가져왔다"고 의회에 건넨 셈이다. 조건은 엄격하다 — 10억 달러 피해 또는 50명 사상 수준의 임박한 재앙적 위험. 그리고 멈추는 절차도 법원이 최종 결정한다. 이건 "정부가 마음대로 끈다"가 아니라 **"끄는 절차를 미리 법으로 못 박자"**는 제안이다.

| 용어 | 풀이 |
|------|------|
| **Foreseeable, imminent risk** | 예견 가능하고 임박한 위험 — 중단 청원의 법적 기준 |
| **Independent evaluator** | 상무부에 등록한 독립 평가자 — 주기적 모델 평가 주체 |
| **72시간 통보** | 임박 위험 발견 시 평가자가 72시간 안에 상무부에 알려야 함 |

## 한줄 정의

Anthropic이 비공개로 의회에 로비 중인 연방법 초안 — 10억 달러 이상 피해 또는 50명 이상 사망·중상의 임박한 재앙적 위험 시 상무부→DC 연방지방법원 절차로 모델을 중단하는 **기업 작성 킬 스위치 법안**.

## 핵심 내용

- **상태** (10/16 Politico·Reuters 확인, 10/18 재보도): 정식 발의 안 됨, 후원 의원 미확인. 비공개 로비 단계.
- **중단 요건**: "foreseeable, imminent risk"가 **10억 달러 이상 피해 또는 50명 이상 사망·중상** 초래 시에만.
- **위험 경로 3종**: 생물무기 생성/유출, 모델의 개발자 통제 탈출, 사이버공격 — 이 외 사유로는 중단 불가.
- **절차**: 상무부 등록 독립 평가자 주기 평가 → 임박 위험 발견 시 72시간 내 상무부 통보 → 상무부가 DC 연방지방법원 판사에게 중단 청원. **다른 연방 기관의 독자적 중단 명시 금지**.
- **Anthropic 대변인**: 자사 "Advanced AI Framework"의 입법화 — "가장 강력한 모델의 위험한 배포를 차단·저지할 수 있는 능력" 부여.

## 왜 중요한가 (1인 개발자 관점)

1. **셀프 로비의 선례**: 규제 대상 기업이 규제 문안을 직접 쓰는 시대 — 문안의 숫자(10억/50명/72시간)가 **업계 표준의 출발점**이 될 수 있음. 에이전트 제품을 만들 때 "중단 가능성"이 설계 제약이 되는 시점.
2. **킬 스위치의 법제화**: [[concepts/nyc-ai-hearing]]의 지방 킬 스위치 논의가 연방 법안 문안으로 — "자율적 선택"([[patterns/agent-safety-runtime]])이 "법적 의무"로 넘어가는 다리.
3. **권한 집중의 역설**: 중단 권한을 상무부→법원으로 일원화하고 다른 기관의 독자 중단을 금지 — "아무도 못 끄는 게 아니라, **정해진 절차로만 끄는**" 설계. 에이전트 거버넌스 설계에도 같은 질문: "누가, 어떤 절차로, 이 에이전트를 멈추는가."

## 한계 (명시)

- 아직 **법안이 아님** — 초안 로비 단계. 통과 여부·최종 문안 미정.
- 원보도는 10/16 — 스토리 자체는 이틀 전 뉴스. 윈도우 내 재보도(hokanews 10/18) 기준 수집.
- Anthropic의 "Advanced AI Framework"가 무엇을 포함하는지 보도에 상세 없음.
