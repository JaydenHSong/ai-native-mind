---
title: "OpenCode 키 노출 사고 — 폐기 중 레거시 콘솔 침입, 3사 API 키 유출 가능성"
category: concepts
tags: [opencode, api-keys, security-breach, distillation-attack, developer-tools, anomaly-innovations, key-rotation]
created: 2026-10-18
updated: 2026-10-18
sources:
  - "raw/articles/2026-10-18-opencode-key-breach.md"
related:
  - "[[concepts/agent-supply-chain-security]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[patterns/ai-cost-management]]"
status: draft
confidence: high
---

# OpenCode 키 노출 사고 — 폐기 중 레거시 콘솔 침입, 3사 API 키 유출 가능성

## 쉽게 읽기

**비유**: AI 코딩 도구 OpenCode를 만든 회사가 "쓰레기통에 버리려던 옛날 금고가 털렸다"고 사용자한테 메일로 알린 사건이다. 그 금고엔 사용자들이 맡긴 OpenAI·Anthropic·Google의 API 키(돈이 들어가는 열쇠)가 있었다. 피해는 전체 사용자의 1.4%지만, 이미 한 사용자는 자기 Claude 키로 누군가 $100어치를 쓴 걸 확인했다. **API 키는 곧 돈**이라는 걸 보여주는 실전 사례.

| 용어 | 풀이 |
|------|------|
| **Provider key** | OpenAI·Anthropic·Google API를 쓰는 "열쇠" — 사용량만큼 돈이 나감 |
| **Distillation attack** | 모델의 동작을 대량으로 빼내어 복제(증류)하려는 공격 — 회사의 설명 |
| **Legacy console** | 폐기 중이던 구 관리 콘솔 — 공격 경로 |

## 한줄 정의

Anomaly Innovations(구 SST)의 OpenCode에서 폐기 중 레거시 콘솔이 침입당해 OpenAI·Anthropic·Google 프로바이더 키 노출 가능성이 발생한 2026-10-17 보안 사고 — **개발 도구가 키 보관소가 되는 순간 공급망 위협**이 되는 실증.

## 핵심 내용

- **타임라인**: 회사 식별 최초 노출 10-17 00:30 UTC → 피해 사용자 첫 이메일 통보 10-17 22:51 UTC(약 22시간 차이) → 2차 이메일 10-18 01:00 UTC 직전. 상태 페이지·체인지로그·웹사이트 공지 없음 — **이메일 통보만**.
- **침입 경로**: 폐기(decommission) 중이던 레거시 콘솔. 워크스페이스 저장 3사 키 노출 가능성. 피해 규모는 OpenCode Console 사용자의 약 **1.4%**.
- **부정 사용 보고 2건**: 한 사용자는 10-17 저녁 무단 Claude API 사용 확인, 다른 사용자는 약 **$100** 부정 요금 신고. 회사 입장: 악용 여부 미확인.
- **회사 설명**: "대규모 증류(distillation) 공격" 관련 침해, 조사 진행 중, 다른 데이터 유출 증거 없음. Anthropic·OpenAI·Google과 대응 중.
- **권고**: 각 프로바이더 대시보드에서 키 폐기·재발급, 10-17 이후 사용 로그 점검. 공동창업자 Dax Raad(@thdxr) X에 본인 계정 공격 게시.

## 왜 중요한가 (1인 개발자 관점)

1. **공급망 표면의 확장**: [[concepts/agent-supply-chain-security]]의 Tier 모델에 새 행이 추가됨 — "개발 도구의 워크스페이스 = 자격증명 보관소". 스킬·MCP뿐 아니라 **도구 벤더의 폐기 자산**까지 위협 모델.
2. **API 키 = 비용 자산**: $100 부정 요금은 작은 숫자지만, "키 유출 = 돈 유출"의 최소 실측. [[patterns/ai-cost-management]]의 스펜드캡은 "내가 쓰는 돈"을 막는 장치 — "남이 쓰는 돈"을 막는 건 **키 회전(key rotation) 자동화**.
3. **통보의 비대칭**: 상태 페이지 공지 없이 이메일 통보만 — 사용자는 자기가 피해자인지 메일을 열어봐야 앎. 벤더의 사고 공개 채널이 **관측 가능성(observability)** 의 일부가 되는 시대.

## 한계 (명시)

- 부정 사용 2건은 사용자 보고 — 회사는 악용 여부 미확인 입장.
- "증류 공격"이라는 회사 설명의 기술적 근거는 미공개.
- 실제 유출된 키 수·계정은 비공개 — 1.4%는 사용자 비율, 키 개수가 아님.
