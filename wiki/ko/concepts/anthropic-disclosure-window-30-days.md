---
title: "Anthropic, 취약점 공개 기한 90일→30일로 단축 — AI 재발견 시대의 CVD 개편"
category: concepts
tags: [anthropic, vulnerability-disclosure, security-policy, project-zero, cvd, frontier-red-team]
created: 2026-11-17
updated: 2026-11-17
sources:
  - "raw/articles/2026-11-17-anthropic-disclosure-window-30-days.md"
related:
  - "[[concepts/google-threat-tracker-exploit-agent]]"
  - "[[concepts/anthropic-anvil-automated-red-teaming]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/php2shell-ai-vulnerability-discovery]]"
status: draft
confidence: medium
---

# Anthropic, 취약점 공개 기한 90일→30일로 단축 — AI 재발견 시대의 CVD 개편

## 쉽게 읽기

**비유**: 보안 구멍을 발견하면, 고치는 쪽에 "90일 안에 고치고 공개하라"고 하던 규칙을 "30일"로 줄였다. 왜냐하면 이제 AI가 같은 구멍을 금방 다시 찾아내기 때문이다. 90일 동안 숨겨 두면, 그 사이 다른 AI가 그 구멍을 찾아 악용할 수 있다.

| 용어 | 풀이 |
|------|------|
| **CVD (Coordinated Vulnerability Disclosure)** | 취약점을 발견한 쪽이 먼저 제작자에게 알리고, 패치 뒤 공개하는 협조 절차 |
| **고위험·치명적(high/critical)** | 악용 시 피해가 큰 취약점 등급 |
| **Project Zero** | Google의 취약점 연구팀 — 업계 표준 공개 기한을 정해 온 주체 |
| **OSS Scanner** | 오픈소스 프로젝트를 자동으로 스캔해 취약점을 찾는 도구 |

## 한줄 정의

Anthropic Frontier Red Team이 협조적 취약점 공개(CVD) 기한을 대폭 단축했다. **2027-01-01 이후 신고분**부터 고위험·치명적 취약점은 90일에서 **30일**, 나머지는 **45일**로 공개가 앞당겨진다. 근거는 "AI가 같은 버그를 다시 찾아내는 속도가 빨라져 90일 동안 비공개로 둘 수 없게 됐다"는 것이다.

## 핵심 내용

- **발표**: 2026-11-16, Anthropic Frontier Red Team 정책 업데이트 "Updating our coordinated vulnerability disclosure policy timelines" (1차 출처: anthropic.com).
- **변경 내용**: 2027-01-01 이후 신고된 취약점부터 적용. 고위험·치명적(high/critical) **90일→30일**, 그 외 **45일**. 패치 후 전체 기술 세부사항 공개까지 **45일→30일**. 유지보수자 무응답 시 외부 코디네이터 에스컬레이션 **30일→15일**. 이미 악용 중인 취약점의 **7일 공개 기한은 그대로**.
- **근거**: 프런티어 모델이 취약점을 너무 잘 찾아내 같은 버그를 다른 모델도 다시 찾을 가능성이 커졌다는 것. Anthropic 표현: "90일 기한은 취약점이 몇 달간 비공개로 남을 수 있을 때 말이 됐다. 더는 그렇다고 믿지 않는다."
- **현황 수치**: Anthropic 대시보드 기준 2026-11-02 현재 **680개 오픈소스 프로젝트에 5,087건의 결함**이 보고됐고, 그중 알려진 패치가 있는 것은 **12%에 불과**하다.
- **예외**: 인간 검토를 거치지 않은 AI 발견 결과(OSS Scanner 등)는 새 기한 적용 대상이 아니다. 핵심 인프라 등 일부는 협상 가능하다.
- **동조 흐름**: Google Project Zero도 2026-11-13에 "90+30" 정책을 폐기하고 30일 시계로 전환을 발표했다(당장은 90일, **2027-02-02부터 60일**, **2028-01-03부터 30일**). Anthropic 발표는 그로부터 사흘 뒤다.

## 왜 중요한가 (1인 개발자 관점)

1. **"비공개로 두는 시간"이 곧 위험이 됐다**: CVD의 전제는 "발견자가 조용히 알려주면 제작자가 고칠 시간을 번다"였다. AI가 재발견하는 시대에는 비공개 기간이 길수록 **다른 모델이 같은 구멍을 찾아 악용할 확률**이 커진다. 공개 기한은 이제 "관대함"이 아니라 "리스크 계산"이다.
2. **패치 속도 경쟁의 방어 측**: 같은 날 GTIG가 보고한 "패치→익스플로잇 자동화"([[concepts/google-threat-tracker-exploit-agent]])와 짝을 이룬다. 공격은 자동화됐고, 방어는 기한 단축으로 답하고 있다. 내 프로젝트의 의존성 패치 주기도 이 속도에 맞춰야 한다.
3. **12%라는 숫자**: 보고된 결함 5,087건 중 알려진 패치가 있는 것은 12%뿐이다. 기한이 짧아지면 패치 없는 취약점의 공개가 늘어날 수 있다 — "공개는 되는데 고쳐지지 않은" 구멍이 더 빨리 세상에 나온다는 뜻이다.
4. **AI 발견 결과는 예외**: 인간 검토를 거치지 않은 AI 스캔 결과는 새 기한 대상이 아니다. AI가 대량으로 쏟아내는 "발견"과 인간이 검증한 "발견"을 구분하는 선이 정책에 새겨졌다.

## 한계 (명시)

- 발표 사실은 Anthropic 1차 출처이나, 5,087건·12% 수치는 Anthropic 대시보드 기준 자체 집계 — 독립 검증 없음.
- Project Zero의 전환 일정(2027-02-02 60일, 2028-01-03 30일)은 단계적 전환이라 Anthropic의 즉시 30일과는 속도가 다르다.
- confidence는 medium — Anthropic 1차 출처 + Project Zero 동조 흐름의 교차이나, 기한 단축의 실제 효과는 2027-01-01 시행 이후에나 확인 가능.

## 관련 개념

- [[concepts/google-threat-tracker-exploit-agent]] — 패치가 곧 공격으로 이어지는 현실이 기한 단축의 배경 (2026-11-16)
- [[concepts/anthropic-anvil-automated-red-teaming]] — 같은 Frontier Red Team 계열의 자동 레드티밍 흐름 (2026-11-13)
- [[concepts/llm-evaluation]] — 모델의 취약점 발견 능력이 빨라지면서 생긴 정책 변화
- [[concepts/php2shell-ai-vulnerability-discovery]] — PHP2Shell, AI가 찾아낸 PHP 치명적 취약점 2건 (2026-10-22)

## 참고 소스

- [Anthropic, 취약점 공개 기한 90일→30일로 단축 — AI 재발견 시대의 CVD 개편 (Anthropic Frontier Red Team, 11-16)](raw/articles/2026-11-17-anthropic-disclosure-window-30-days.md)
