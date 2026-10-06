---
title: "AI 텍스트 워터마킹 — OpenAI textGrain, EU AI Act 대응의 출처 표시 표준화"
category: concepts
tags: [watermarking, textgrain, openai, anthropic, eu-ai-act, provenance, detection]
created: 2026-10-06
updated: 2026-10-06
sources:
  - "raw/articles/2026-10-06-openai-textgrain-watermarking.md"
related:
  - "[[concepts/agent-attribution]]"
  - "[[patterns/agent-safety-runtime]]"
status: draft
confidence: medium
---

# AI 텍스트 워터마킹

## 한줄 정의

AI 생성 텍스트에 기계 판독 가능한 식별 신호를 심는 기술 — EU AI Act의 식별 의무에 대응해 빅랩이 제품 기능으로 도입 중인 출처 표시(provenance) 레이어.

## 핵심 내용

- OpenAI textGrain (2026-10-05 발표): 모델의 단어 선택에 보이지 않는 통계적 신호를 추가. 디텍터가 신호를 찾아 OpenAI 워터마크 포함 여부를 판정. 오픈소스 공개 계획.
- 적용: API는 전 세계 고객이 select 모델에 옵트인 (기본 off). ChatGPT·Codex는 수주 내 EU eligible 사용자에게 적용.
- 디텍터 접근: 승인된 연구자·전문 기관에 신청 개방.
- 한계: false positive/negative 존재. 짧은 텍스트·수학 등 단어 선택 유연성이 낮은 도메인에서 약함. 편집에 취약 — 400토큰 문단에서 10% 동의어 교체 시 탐지율 92%→66%, 25% 교체 시 17%.
- 성능 영향: 워터마크 텍스트가 여러 벤치마크에서 근소하게 높음 (Artificial Analysis Intelligence Index 49.76 vs 49.57, Terminal-Bench 4.0 56.06 vs 53.90) — 회사 설명 "의미 있는 차이 없음".
- 증명하지 않는 것: 인간 기여도·소유권·책임·사용자 식별·정확도. "워터마크 미검출이 인간 저작을 증명하지도 않음".
- 배경: 몇 달 전 Anthropic이 EU AI Act 대응으로 Claude 단어 선택 조정 워터마킹을 발표해 논란 — 당시 Anthropic은 "다른 주요 사업자들도 마킹 시스템 도입 중"이라고 강조. OpenAI가 그 후속.

## 왜 중요한가

출처 표시의 표준화 국면: EU AI Act가 강제하는 '기계 판독 가능 식별' 의무에 빅랩이 하나씩 대응 중 — 규제 준수가 제품 기능으로 들어오고 있다. 같은 주의 뉴욕시 청문회(킬 스위치·감사 로그)와 같은 흐름 — AI 출력의 추적 가능성이 법·기술 양쪽에서 하드 요구사항화. 탐지율의 편집 취약성(10% 편집→66%, 25%→17%)은 실효성 논쟁의 핵심 수치. API 옵트인 방식이라 자신의 서비스 출력에 워터마크를 켤지 선택 가능 — 콘텐츠 신뢰도가 중요한 서비스라면 고려 대상.

## 관련 개념

- [[concepts/agent-attribution]] — "누가 만들었는가" 귀속 논쟁의 기술적 토대
- [[patterns/agent-safety-runtime]] — 출력 추적 가능성과 실행 추적 가능성의 결합

## 참고 소스

- [OpenAI details new text watermarking system for ChatGPT, Codex, and the API (9to5Mac)](raw/articles/2026-10-06-openai-textgrain-watermarking.md)
