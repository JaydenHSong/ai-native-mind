---
title: "OpenAI GPT-6 Cyber — 취약점 찾고 패치까지 하는 정렬된 사이버 모델, Daybreak Red 승인 고객만"
category: concepts
tags: [openai, gpt-6-cyber, cybersecurity, daybreak, exploitgym]
created: 2026-11-06
updated: 2026-11-06
sources:
  - "raw/articles/2026-11-06-openai-gpt6-cyber.md"
related:
  - "[[concepts/openai-frontier-misalignment-monitoring]]"
  - "[[concepts/gpt-62-astra-codex-leak]]"
  - "[[concepts/openai-safety-monitor-disabling]]"
  - "[[concepts/php2shell-ai-vulnerability-discovery]]"
status: draft
confidence: high
---

# OpenAI GPT-6 Cyber — 취약점 찾고 패치까지 하는 정렬된 사이버 모델, Daybreak Red 승인 고객만

## 쉽게 읽기

**비유**: 해커가 아니라 "모의 해킹 전문 수사관"이다. 소프트웨어의 약점을 찾아내고, 실제로 뚫리는지 확인하고, 고치는 방법까지 제시하는데 — 수사관이 영장 범위를 벗어나지 않듯, 정해진 대상 밖은 건드리지 않도록 훈련된 모델이다.

| 용어 | 풀이 |
|------|------|
| **ExploitGym** | 지정된 취약점을 실제로 익스플로잇할 수 있는지 재는 OpenAI 벤치마크 |
| **Daybreak Red** | OpenAI의 Daybreak 프로그램 중 침투 테스트·레드팀 같은 공격형 보안 작업을 위한 승인제 트랙 |
| **Critical 등급** | OpenAI Preparedness Framework의 사이버 보안 최상위 등급 |

## 한줄 정의

2026-11-05 — OpenAI가 GPT-6 Astra 기반의 사이버 보안 특화 모델 GPT-6 Cyber를 발표했다. ExploitGym 48.5%로 전작을 크게 앞섰고 사이버 보안 등급은 Critical로 상향됐으며, 접근은 승인된 Daybreak Red 고객에게 API·Codex 경유로만 열린다.

## 핵심 내용

- **성능**: ExploitGym 48.5%, GPT-5.6 Cyber 32.1% 대비 약 16.4pp 상승·상대 51% 개선. GPT-6 Astra는 42.4%다. 웹 펜테스트 취약점 회상률 40.3%로 Astra 32.0%를 앞섰다. 새 RemoteExploitBench에서는 95%를 완료했고, Astra(Daybreak Blue)는 100% 거부했다.
- **범위 준수**: ExploitGym Honeypot에서 범위 밖 서비스를 건드리지 않은 비율이 99.93%(배포 안전 프롬프트 없이; GPT-5.6 Cyber 94.49%), 프롬프트 포함 시 100%였다. 범위 준수가 이번 모델의 핵심 설계 목표였다.
- **실전 연구**: 11-04 공개된 "A thousand fewer paths to root" 파이프라인이 Linux 커널 취약점 2,308개 후보 중 1,724개를 재현하고 948개의 LPE 익스플로잇을 작성했다(GPT-5.6 Sol 동일 하네스 166개의 5배 이상). 304개 중대 발견은 후보 패치와 함께 공개됐고 비용은 API 크레딧 $1,213,430(익스플로잇당 $1,279)이었다. Firefox에서는 미발견 고심각 취약점 81개를 찾았고 기존 30개의 심각도를 재평가했다.
- **등급·가격**: Preparedness Framework 사이버 보안 등급 Critical(최상위)로, GPT-5.6 Cyber의 High에서 상향 — OpenAI 사이버 모델 중 첫 Critical이다. 가격은 입력 $20·출력 $100(백만 토큰당). Cisco·Calif·CodeRabbit 보안팀이 이미 쓰고 있다.
- **접근 통제**: 신원 확인·SSO·MFA·API IP 허용목록(기본 적용)이 필요하고, Zero Data Retention 고객에게는 Private Safety Processing이 적용된다. 핵심 OT/ICS 대상 고위험 지원은 모니터링으로 차단하면서 승인된 테스트는 허용한다. Daybreak Red for Critical Infrastructure 트랙 신설, Daybreak for Frontline Defenders에 $10억 규모 보조금 약속. 11-12 "Cyber at the Frontier" 라이브스트림 예고.

## 왜 중요한가 (1인 개발자 관점)

1. **"정렬된 공격 능력"이 상품이 됐다**: 취약점을 찾는 능력과 범위 안에 머무는 능력을 같은 모델의 판매 포인트로 묶었다. 에이전트의 권한 설계가 보안 제품의 핵심 스펙이 된 사례다.
2. **취약점 발견이 자동화 파이프라인이 됐다**: 948개 익스플로잇을 $1,279개당 비용으로 뽑아냈다는 것은, 취약점 리서치의 단가가 공개됐다는 뜻이다. 방어자도 공격자도 같은 단가표를 본다.
3. **접근 통제가 곧 제품이다**: Critical 등급 모델을 전면 공개하지 않고 Daybreak Red 승인제로 묶은 것은, 능력과 배포를 분리하는 게이티드 릴리스의 표준 패턴이 굳어졌음을 보여준다.

## 한계 (명시)

- 모든 성능 수치는 OpenAI 자체 보고이며 독립 검증은 없다. 벤치마크 점수가 실제 운영 환경의 익스플로잇 성공률을 보장하지 않는다.
- Linux·Firefox 연구 결과는 통제된 연구 환경에서 나온 것이며, 948개 익스플로잇 중 실제 패치 적용 여부는 확인되지 않았다.
- 가격·접근 조건은 Daybreak Red 승인 고객 기준이며, 일반 이용자에게는 아직 열려 있지 않다.

## 참고 소스

- [GPT-6 Cyber 원본](raw/articles/2026-11-06-openai-gpt6-cyber.md)
