---
title: "Wiz 'Black October' — AI 개발 플랫폼 9곳의 자격증명 침해와 LLMjacking"
category: concepts
tags: [wiz, security, supply-chain, llmjacking, api-keys, agent-security]
created: 2026-10-31
updated: 2026-10-31
sources:
  - "raw/articles/2026-10-31-wiz-black-october-ai-platform-breaches.md"
related:
  - "[[concepts/litellm-pypi-supply-chain-compromise]]"
  - "[[concepts/opencode-key-breach]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/cairn-norforge-ai-agent-hacking-spree]]"
status: draft
confidence: high
---

# Wiz 'Black October' — AI 개발 플랫폼 9곳의 자격증명 침해와 LLMjacking

## 쉽게 읽기

**비유**: 금고가 아니라 금고 열쇠를 맡긴 관리사무소가 털렸다. 10월에만 아홉 곳의 개발 플랫폼에서 고객의 AI 키가 새었고, 훔친 키는 30분 만에 "써먹을 수 있는지" 테스트된 뒤 남의 돈으로 추론을 돌리는 재판매 시장으로 흘러갔다.

| 용어 | 풀이 |
|------|------|
| **LLMjacking** | 탈취한 API 키로 타인 비용으로 모델 추론을 돌리고 재판매하는 행위 |
| **환경변수(env var)** | 코드 밖에 두고 주입하는 설정값. API 키를 보관하는 관행적 장소 |
| **에이전트 스웜** | 여러 에이전트가 협업하듯 자동화된 대규모 공격 양상(보고된 징후) |

## 한줄 정의

2026-10-30 Wiz 정리 — 10월 한 달 AI 개발 플랫폼 9곳의 자격증명 침해, 환경변수 속 AI 키 탈취와 LLMjacking 재판매망의 실측.

## 핵심 내용

- **9곳**: Fireworks AI(10-06), Andromeda(10-09), Zeabur(10-14), Lightning AI(10-15), OpenCode(10-16~17), Railway(10-20), Warp(10-23), CommandCode(10-28), Northflank(10-30). 단일 취약점이 아니라, 저장된 환경변수를 노린 공통 사냥감이다.
- **공격 양상**: Fireworks·OpenCode·Warp는 에이전트 스웜 징후를, OpenCode·CommandCode는 증류 시도라고 밝혔다. 근본 원인은 제각각(자격증명 접근, 빌드 인프라 권한 상승, 서드파티 의존성, 레거시 시스템)이지만 목표는 같았다.
- **하류 남용 실측**: 기업용 Bedrock 키 2건이 추적됐다. 약 30시간 동안 약 80만 콜(약 90% 성공, 성공 콜의 약 75%가 Opus 계열)과 약 13시간 동안 약 170만 콜, 합산 정가 $100,000 초과. 키 검증은 자격증명 접근 보고 후 30분 안에 이뤄졌다.
- **피해 규모**: Railway는 최대 1.85% 워크스페이스(약 100,000개)의 환경변수 유출 가능성, OpenCode는 약 1.4% Console 사용자의 키를 가진 레거시 시스템 도달을 밝혔다. Zeabur는 사건을 계기로 서비스 종료를 발표했다.
- **재판매망**: Wiz는 탈취 키를 테스트한 'momo'와 'Xingjiabi'를 지목했으나, 9건 배후에 단일 행위자가 있다고 주장하지 않았다. 재판매 인프라와 최초 침해의 연결도 미입증 상태다.

## 왜 중요한가 (1인 개발자 관점)

1. **공격 표면은 모델이 아니라 중간자다**: 에이전트 시대의 보안 병목은 모델 가드레일이 아니라 키를 쥐고 있는 플랫폼이다. 빌드·배포·CI에 박힌 장기 키가 곧 자산이다.
2. **30분 규칙**: 탈취 후 검증까지 30분이면, 키 유출 대응은 "나중에 교체"가 아니라 자동 폐기·단기 키·범위 제한으로 설계해야 한다.
3. **LLMjacking의 경제학**: 훔친 키는 재판매 시장에서 현금화된다. 추론 비용이 곧 공격자의 수익이라, 사용량 급증 알림은 보안 탐지기가 된다.

## 한계 (명시)

- Wiz 원문은 2차 요약을 통해 확인했으며, 수치의 1차 대조는 남았다.
- 탈취된 고객 키 총수는 어느 플랫폼도 공개하지 않았다. 대부분 근본 원인은 조사 중이다.
- 9건을 하나의 조직적 캠페인으로 묶는 해석은 Wiz의 입장과 다르다. Railway만 '캠페인'이라는 표현을 썼다.
