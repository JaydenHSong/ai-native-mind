---
title: "Fireworks AI 침해로 Notion AI 채팅 기록 노출 — 11-11 API 키 폐기 (11-09 권고)"
category: concepts
tags: [notion, fireworks-ai, data-breach, supply-chain, ai-privacy, api-key]
created: 2026-11-12
updated: 2026-11-12
sources:
  - "raw/articles/2026-11-12-fireworks-notion-ai-breach.md"
related:
  - "[[concepts/malbear-operation-snowball-deepseek-telecom]]"
  - "[[concepts/openai-codex-npm-prompt-injection]]"
  - "[[concepts/australia-ai-regulator-agent-breach]]"
status: draft
confidence: high
---

# Fireworks AI 침해로 Notion AI 채팅 기록 노출 — 11-11 API 키 폐기 (11-09 권고)

## 쉽게 읽기

**비유**: 금고는 안 털렸는데, 금고 주인(Notion)이 복사본을 맡긴 복사집(Fireworks AI)이 털린 셈이다. 복사집은 "복사본은 바로 버린다"고 약속했지만, 실은 분류용으로 보관하고 있었다. 금고 주인은 뒤늦게 복사본을 찾아다니며 그 안에 섞인 열쇠(API 키)를 폐기하고 있다.

| 용어 | 풀이 |
| **zero data retention** | 벤더가 데이터를 저장하지 않고 처리 후 즉시 삭제한다는 계약상 약속 |
| **Insights** | Notion AI의 기능 — 채팅 기록을 분류·활용해 인사이트를 만드는 용도 |
| **unattributable** | 작성자·워크스페이스 정보가 없어 누구의 기록인지 특정할 수 없는 상태 |
| **공급망(supply-chain) 리스크** | 내 시스템이 아니라, 내가 쓰는 벤더·부품·라이브러리의 취약점이 나에게 전이되는 위험 |

## 한줄 정의

2026-11-09 — Fireworks AI 침해로 Notion AI 채팅 기록이 노출된 사실이 Notion 보안 권고로 공개됐고, 11-11에는 채팅에서 발견된 Notion API 키를 폐기하는 후속 조치가 나왔다. AI 기능 공급망의 프라이버시 리스크를 보여주는 사례다. '우리 시스템은 털리지 않았다'와 '우리 프롬프트가 벤더에 보관돼 있었다'는 다르다.

## 핵심 내용

- **사건**: Fireworks AI 침해(10월 23~24일, 제3자 클라우드 R&D 머신 경유)로 Notion AI 채팅 기록(Insights 기능용 분류 데이터)이 노출됐다. 영향 범위는 전체 워크스페이스의 1% 미만이다.
- **노출 내용**: 대부분 기록은 작성자·워크스페이스 라벨이 없는 "unattributable" 상태이며 도구 호출 결과는 포함되지 않았다. 다만 채팅 본문에 붙여넣은 비밀정보(키·계약서 등)는 그대로 노출됐다. 노출된 기록 총수는 미공개다.
- **대응 타임라인**: Notion은 11월 3일 Fireworks 연결 차단·데이터 삭제, Insights 비활성화, Fireworks 경유 오픈웨이트 모델 제공 중단. 영향 고객 통지는 11월 9일, **11월 11일 채팅에서 발견된 Notion API 키 폐기**가 윈도우 내 신규 전개다.
- **쟁점**: Fireworks가 계약상 "zero data retention"을 약속했음에도 Insights용 데이터가 보관돼 있었다는 점이다. 제로 리텐션 약속의 한계를 보여준다.
- **의미**: AI 기능을 외부 벤더에 위탁할 때 프롬프트·채팅 기록이 벤더 인프라에 남는 구조적 리스크다. 보안 사고의 책임 경계가 '우리 시스템'이 아니라 '우리 데이터가 머문 곳'까지 넓어진다.

## 왜 중요한가 (1인 개발자 관점)

1. **프롬프트도 데이터다 — 채팅 기록이 곧 유출 자산이다**: API 키·계약서·내부 정보를 AI 채팅에 붙여넣는 습관은, 그 채팅이 벤더 인프라에 남는 순간 유출 경로가 된다. 비밀정보는 AI 채팅에 붙여넣지 않는 것이 원칙이고, 붙여넣었다면 키를 폐기하는 것까지가 대응이다.
2. **'제로 리텐션'은 계약 문구가 아니라 검증 대상이다**: 벤더가 약속한 데이터 처리 방식을 실제로 지키는지 확인하는 수단이 필요하다. 내 하네스가 외부 모델 API를 쓸 때도, 프롬프트가 어디에 얼마나 남는지 계약서와 실제 동작을 함께 확인해야 한다.
3. **공급망 보안의 범위가 넓어졌다**: Codex npm 체인(같은 날)이 '코드의 공급망'이라면, 이 사건은 '데이터의 공급망'이다. 에이전트 시대의 공급망은 코드·모델·데이터 세 갈래를 함께 본다.

## 한계 (명시)

- 노출된 기록 총수는 미공개다. '1% 미만'이라는 영향 범위도 Notion 자체 발표다.
- 대부분 기록이 unattributable 상태라, 실제 피해 규모는 Notion도 정확히 특정하지 못했다.
- Fireworks 측의 침해 경위·범위에 대한 독립 검증은 아직 없다.

## 관련 개념

- [[concepts/malbear-operation-snowball-deepseek-telecom]] — 탈옥 DeepSeek 에이전트의 유럽 통신사 침투 (2026-11-11)
- [[concepts/openai-codex-npm-prompt-injection]] — Codex npm 파이프라인 프롬프트 인젝션, 공급망 보안 (2026-11-12)
- [[concepts/australia-ai-regulator-agent-breach]] — 호주 AI 규제기관 신설, 에이전트 침입 계기 (2026-11-10)

## 참고 소스

- [Fireworks AI 침해·Notion AI 채팅 기록 노출 원본](raw/articles/2026-11-12-fireworks-notion-ai-breach.md)
