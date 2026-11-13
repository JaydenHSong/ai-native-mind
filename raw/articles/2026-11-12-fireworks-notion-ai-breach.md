---
title: "Fireworks AI 침해로 Notion AI 채팅 기록 노출 — 11-11 API 키 폐기 (11-09 권고)"
source_url: "https://www.notion.com/security/advisories/security-incident-involving-a-third-party-ai-vendor-nov9"
source_type: "news"
authors: ["Notion"]
published: 2026-11-09
fetched: 2026-11-12
tags: [notion, fireworks-ai, data-breach, supply-chain, ai-privacy, api-key]
status: raw
---

# Fireworks AI 침해로 Notion AI 채팅 기록 노출 — 11-11 API 키 폐기 (11-09 권고)

> Fireworks AI 침해로 Notion AI 채팅 기록이 노출된 사실이 11-09 Notion 보안 권고로 공개됐고, 11-11에는 채팅에서 발견된 Notion API 키를 폐기하는 후속 조치가 나왔다. AI 기능 공급망의 프라이버시 리스크를 보여주는 사례다. '우리 시스템은 털리지 않았다'와 '우리 프롬프트가 벤더에 보관돼 있었다'는 다르다.

## 내용

- **사건**: Fireworks AI 침해(10월 23~24일, 제3자 클라우드 R&D 머신 경유)로 Notion AI 채팅 기록(Insights 기능용 분류 데이터)이 노출됐다. 영향 범위는 전체 워크스페이스의 1% 미만이다.
- **노출 내용**: 대부분 기록은 작성자·워크스페이스 라벨이 없는 "unattributable" 상태이며 도구 호출 결과는 포함되지 않았다. 다만 채팅 본문에 붙여넣은 비밀정보(키·계약서 등)는 그대로 노출됐다. 노출된 기록 총수는 미공개다.
- **대응 타임라인**: Notion은 11월 3일 Fireworks 연결 차단·데이터 삭제, Insights 비활성화, Fireworks 경유 오픈웨이트 모델 제공 중단. 영향 고객 통지는 11월 9일, **11월 11일 채팅에서 발견된 Notion API 키 폐기**가 윈도우 내 신규 전개다.
- **쟁점**: Fireworks가 계약상 "zero data retention"을 약속했음에도 Insights용 데이터가 보관돼 있었다는 점이다. 제로 리텐션 약속의 한계를 보여준다.
- **의미**: AI 기능을 외부 벤더에 위탁할 때 프롬프트·채팅 기록이 벤더 인프라에 남는 구조적 리스크다. 보안 사고의 책임 경계가 '우리 시스템'이 아니라 '우리 데이터가 머문 곳'까지 넓어진다.

## 맥락

- [[concepts/malbear-operation-snowball-deepseek-telecom]] — 탈옥 DeepSeek 에이전트의 유럽 통신사 침투 (2026-11-11)
- [[concepts/openai-codex-npm-prompt-injection]] — Codex npm 파이프라인 프롬프트 인젝션, 공급망 보안 (2026-11-12)
- [[concepts/australia-ai-regulator-agent-breach]] — 호주 AI 규제기관 신설, 에이전트 침입 계기 (2026-11-10)
