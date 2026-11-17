---
title: "Anthropic, 취약점 공개 기한 90일→30일로 단축 — AI 재발견 시대의 CVD 개편 (11-16)"
source_url: "https://www.anthropic.com/research/coordinated-vulnerability-disclosure-timelines"
source_type: "news"
authors: ["Anthropic Frontier Red Team"]
published: 2026-11-16
fetched: 2026-11-17
tags: [anthropic, vulnerability-disclosure, security-policy, project-zero]
status: raw
---

# Anthropic, 취약점 공개 기한 90일→30일로 단축 — AI 재발견 시대의 CVD 개편 (11-16)

> Anthropic Frontier Red Team이 협조적 취약점 공개(CVD) 기한을 대폭 단축했다. 2027-01-01 이후 신고분부터 고위험·치명적 취약점은 90일에서 30일, 나머지는 45일로 공개가 앞당겨진다. 근거는 "AI가 같은 버그를 다시 찾아내는 속도가 빨라져 90일 동안 비공개로 둘 수 없게 됐다"는 것이다.

## 내용

- **발표**: 2026-11-16, Anthropic Frontier Red Team 정책 업데이트 "Updating our coordinated vulnerability disclosure policy timelines" (1차 출처: anthropic.com).
- **변경 내용**: 2027-01-01 이후 신고된 취약점부터 적용. 고위험·치명적(high/critical) 90일→30일, 그 외 45일. 패치 후 전체 기술 세부사항 공개까지 45일→30일. 유지보수자 무응답 시 외부 코디네이터 에스컬레이션 30일→15일. 이미 악용 중인 취약점의 7일 공개 기한은 그대로.
- **근거**: 프런티어 모델이 취약점을 너무 잘 찾아내 같은 버그를 다른 모델도 다시 찾을 가능성이 커졌다는 것. Anthropic 표현: "90일 기한은 취약점이 몇 달간 비공개로 남을 수 있을 때 말이 됐다. 더는 그렇다고 믿지 않는다."
- **현황 수치**: Anthropic 대시보드 기준 2026-11-02 현재 680개 오픈소스 프로젝트에 5,087건의 결함이 보고됐고, 그중 알려진 패치가 있는 것은 12%에 불과하다.
- **예외**: 인간 검토를 거치지 않은 AI 발견 결과(OSS Scanner 등)는 새 기한 적용 대상이 아니다. 핵심 인프라 등 일부는 협상 가능하다.
- **동조 흐름**: Google Project Zero도 2026-11-13에 "90+30" 정책을 폐기하고 30일 시계로 전환을 발표했다(당장은 90일, 2027-02-02부터 60일, 2028-01-03부터 30일). Anthropic 발표는 그로부터 사흘 뒤다.

## 맥락

- [[concepts/llm-evaluation]] — 모델의 취약점 발견 능력이 빨라지면서 생긴 정책 변화
- [[concepts/anthropic-anvil-automated-red-teaming]] — 같은 Frontier Red Team 계열의 자동 레드티밍 흐름(2026-11-13 수집)
- [[concepts/google-threat-tracker-exploit-agent]] — 패치가 곧 공격으로 이어지는 현실이 기한 단축의 배경(별도 수집)
