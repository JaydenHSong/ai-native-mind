---
title: "Campaign Map"
category: meta
tags: [map, campaign, navigation]
created: 2026-04-12
updated: 2026-04-13
sources:
 - "wiki/overview.md"
 - "wiki/index.md"
 - "wiki/log.md"
status: active
confidence: high
---

# ai-native-mind Campaign Map

> 위키 전체를 "챕터 클리어 게임"처럼 따라가기 위한 월드맵.

## 쉽게 읽기

처음부터 끝까지 다 읽는 문서가 아니다. 지금 내 레벨에 맞는 챕터를 하나 고르고, **클리어 조건 + 산출물**만 달성하면 된다.

## 월드맵 허브

- 시작 마을: [[wiki/overview|Overview]]
- 도감(전체 목록): [[wiki/index|Index]]
- 퀘스트 기록: [[wiki/log|Log]]
- 플레이 일지: [[journal/2026-04-12|Journal 샘플]]

## 메인 퀘스트 라인 (권장)

### Chapter 0 - 튜토리얼
- 문서: [[patterns/llm-wiki]], [[tools/obsidian]], [[tools/claude-code]]
- 클리어 조건: ingest/query/lint 흐름을 3문장으로 설명
- 산출물: 개인 위키 사용 규칙 메모

### Chapter 1 - 세계관 이해
- 문서: [[concepts/ai-native-programmer]], [[concepts/ai-native-architecture]]
- 클리어 조건: AI 네이티브 방식이 필요한 이유 5문장 정리
- 산출물: 내 개발 방식 Before/After 노트

### Chapter 2 - 기본 전투
- 문서: [[concepts/context-engineering]], [[concepts/prompt-engineering]], [[concepts/context-vs-prompt-practice]]
- 클리어 조건: 문제를 prompt vs context로 분류
- 산출물: 내 컨텍스트 소스 목록

### Chapter 3 - 파티 운영
- 문서: [[concepts/ai-orchestration]], [[patterns/orchestration-patterns-practice]]
- 클리어 조건: 현재 작업을 6대 패턴으로 분류
- 산출물: 작업 흐름도(텍스트 가능)

### Chapter 4 - 제작소
- 문서: [[patterns/agent-planning-to-implementation]], [[patterns/subagents-delegation]]
- 클리어 조건: 기능 1개를 기획->스펙->구현->검증으로 분해
- 산출물: 기능 1개 체크리스트

### Chapter 5 - 안전 던전
- 문서: [[patterns/agent-server-harness]], [[patterns/safe-tool-calling-sandbox]], [[patterns/owasp-llm-typescript-mitigations]]
- 클리어 조건: 권한/검증/로깅/재시도 누락 지점 1개 이상 발견
- 산출물: 보안 체크리스트 v1

### Chapter 6 - 운영 보스전
- 문서: [[concepts/llm-evaluation]], [[concepts/gen-ai-observability]]
- 클리어 조건: 품질 지표 2개 + 관측 지표 2개 정의
- 산출물: 지표 카드(대시보드 초안)

### Chapter 7 - 엔드게임
- 문서: [[patterns/git-ai-workflow]], [[patterns/ai-code-review]], [[patterns/ai-cost-management]]
- 클리어 조건: 반복 작업 1개 자동화/표준화
- 산출물: 나만의 AI 개발 플레이북 1페이지

## 서브 퀘스트 라인 (선택)

- **하네스 심화 + 공식 스터디**: [[patterns/harness-engineering-casebook]] (케이스 30 + Anthropic Academy 맵)
- **보안 특화**: [[patterns/owasp-llm-typescript-mitigations]] -> [[patterns/safe-tool-calling-sandbox]] -> [[concepts/context-rot-hallucination]]
- **도구 비교**: [[comparisons/claude-code-plugins]] -> [[comparisons/ai-coding-tools]] -> [[comparisons/agent-frameworks]]
- **비용/효율**: [[patterns/prompt-caching]] -> [[patterns/ai-cost-management]] -> [[concepts/structured-output]]

## 진행도 트래커

- [ ] Chapter 0 클리어
- [ ] Chapter 1 클리어
- [ ] Chapter 2 클리어
- [ ] Chapter 3 클리어
- [ ] Chapter 4 클리어
- [ ] Chapter 5 클리어
- [ ] Chapter 6 클리어
- [ ] Chapter 7 클리어

## 플레이 규칙

1. 하루 1챕터만 클리어한다.
2. 읽기보다 산출물을 남긴다.
3. 막히면 이전 챕터로 돌아가 재도전한다.
4. 완료 증거는 `wiki/journal/` 또는 프로젝트 문서에 남긴다.

## 패치 노트

- 2026-04-12: Chapter 0~2 핵심 문서에 공통 `Chapter Clear 가이드` 섹션을 추가해, 문서 단위에서도 퀘스트 흐름이 끊기지 않도록 보강.
- 2026-04-12: Chapter 3~7 핵심 문서까지 `Chapter Clear 가이드`를 확장해 전체 챕터 라인이 문서 단위로 연속되도록 연결.
- 2026-04-13: [[patterns/harness-engineering-casebook]] 추가 — 하네스 도메인 케이스 30 + Anthropic Academy 스터디 맵, 서브 퀘스트에 연결.

