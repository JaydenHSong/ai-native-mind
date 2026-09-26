---
title: "AudioEye study: AI agent task completion falls two-thirds on inaccessible sites; median run uses 43% more tokens"
source_url: "https://agilebrandguide.com/yesterdays-martech-ai-cx-news-september-25-2026/"
source_type: "research-news"
authors: ["AudioEye"]
published: 2026-09-24
fetched: 2026-09-26
tags: [agentic-commerce, accessibility, benchmarks, token-cost, evaluation]
status: raw
---

# AudioEye study: AI agent task completion falls two-thirds on inaccessible sites; median run uses 43% more tokens

> 접근성 기업 AudioEye(2026-09-24 연구): 6개 상용 모델 기반 에이전트 1,560개를 6개 사이트의 실세계 작업 13개에 투입한 결과, 접근성이 가장 낮은 사이트에서 작업 완료율이 약 2/3 하락(96%→31%). 접근성 수정이 없으면 중앙값 기준 토큰 사용량이 43% 증가 — "에이전트 대응 준비 = 접근성 백로그".

## 메타

- **Title**: Yesterday's MarTech, AI & CX News | September 25, 2026 (AudioEye 연구 요약 포함)
- **Source**: Agile Brand Guide (AudioEye 2026-09-24 연구 인용, PR Newswire 원문)
- **Link**: <https://agilebrandguide.com/yesterdays-martech-ai-cx-news-september-25-2026/>
- **Published**: 2026-09-24 (연구) / 2026-09-25 (기사)

## 한 줄 요약

**"스크린 리더가 의존하는 alt 텍스트·폼 라벨·버튼 이름은 쇼핑 에이전트가 의존하는 것과 정확히 같은 요소다" — 접근성 백로그는 이제 전환율 백로그이자 에이전트 준비도 백로그다."
**

## 핵심 내용

1. **실험 설계**: AudioEye(디지털 접근성 기업, Nasdaq: AEYE)는 6개 상용 모델 기반 AI 에이전트 **1,560개**를 6개 웹사이트(리테일·여행·D2C 5곳 + W3C 데모 사이트)의 실세계 작업 **13개**에 투입, 각 테스트를 **10회 반복**. 유일한 변수는 AudioEye 접근성 수정 패치의 로드 여부.
2. **완료율 격차**: 가장 접근성이 낮은 테스트 사이트에서 에이전트 작업 완료율이 접근성 버전 **96%** vs 비접근성 버전 **31%**. 모든 테스트 모델에서 약 **2/3 하락**. 이미지에만 숫자가 있고 텍스트 설명이 없는 작업에서는 6개 모델 × 10회 = **60회 시도 전부 실패**.
3. **토큰 비용**: 접근성 수정 없이 실행된 중앙값 런이 **43% 더 많은 토큰** 사용 (128,000 vs 90,000), 최악의 사이트에서는 최대 6배. 추가 토큰 비용은 에이전트 운영자가 부담.
4. **메커니즘**: 에이전트는 페이지의 **접근성 트리(accessibility tree)** — 스크린 리더도 사용하는 페이지 콘텐츠의 구조화된 지도 — 를 통해 페이지를 읽음. 평가자 일치도: Ohio State NLP 그룹의 오픈소스 평가자 WebJudge가 AudioEye 채점과 **95%** 일치.
5. **수요 측 맥락**: NIQ Agentic Commerce Tracker(2026-09-24): 미국 소비자의 **51%**가 지난 한 달간 AI 도구로 쇼핑을 지원받음. AI 상품 추천 20%, AI 개인 쇼핑 어시스턴트 16%. 단 월 ~500명 샘플 기준이므로 단일 월 수치의 오차는 ±4.4%p 수준.
6. **출처 주의**: 벤더 생산 수치 — AudioEye는 테스트한 수정 패치를 판매하고, NIQ는 트래커를 판매함. AudioEye 연구는 최악 사이트의 사이트별 결과만 공개했고 다른 5개 사이트의 개별 완료율은 비공개.

## 시사점

- `[[patterns/agentic-commerce]]` 핵심 증거 추가: "에이전트가 누구 편인가" 논쟁에 더해 **"에이전트가 내 사이트에서 결제를 완료할 수 있는가"** 가 전환율의 새 병목. 9/25 Gemini 음성 커머스 항목과도 연결 (채널 확대 vs 사이트 준비도).
- `[[patterns/ai-cost-management]]`에 **새 비용 축**: 접근성 부족 → 토큰 43% 초과 소비. 비용 절감이 모델 선택만이 아니라 **읽을 대상 페이지의 품질**에도 달려 있음.
- `[[concepts/gen-ai-observability]]` 관점에서는 "에이전트 완료율"이 마케팅 지표로 들어가는 움직임 — 에이전트 성능 측정의 비즈니스 침투 사례.
- 벤더 수치라는 한계는 있지만 실험 설계(통제 변수 1개, 10회 반복, 외부 평가자 교차검증)는 탄탄한 편 — confidence는 **medium**.
