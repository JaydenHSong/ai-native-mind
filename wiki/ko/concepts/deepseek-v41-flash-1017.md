---
title: "DeepSeek V4.1-Flash-1017 — MIT 오픈웨이트, 1/42 가격의 프론티어급 코딩·에이전트 모델"
category: concepts
tags: [deepseek, open-weights, frontier-model, mit-license, benchmarks, api-pricing, moev4, search-api]
created: 2026-10-18
updated: 2026-10-18
sources:
  - "raw/articles/2026-10-18-deepseek-v41-flash-1017.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/gpt-61-sol-ultrafast]]"
  - "[[concepts/meta-muse-spark-open]]"
  - "[[concepts/china-ai-export-controls]]"
status: draft
confidence: high
---

# DeepSeek V4.1-Flash-1017 — MIT 오픈웨이트, 1/42 가격의 프론티어급 코딩·에이전트 모델

## 쉽게 읽기

**비유**: 프론티어 레스토랑이 코스 요리를 42만 원에 팔 때, 같은 재료를 쓴 노점상이 1만 원에 파는 격이다. DeepSeek는 9월 모델의 "마이너 업데이트"로 Terminal-Bench를 31.2→42.3으로 올리면서 API 출력 가격을 Claude Opus 5의 1/42($0.6 vs $25/1M 토큰)로 책정했다. 오픈웨이트라서 "레시피"(가중치)도 공개 — 식당이 아니라 식재료 시장을 흔드는 셈.

| 용어 | 풀이 |
|------|------|
| **MIT 라이선스 오픈웨이트** | 가중치 다운로드를 상업 이용·수정·재배포까지 허용하는 가장 관대한 라이선스 |
| **763B MoE / 활성 16B** | 전체 7,630억 파라미터 중 토큰당 실제 연산에 쓰이는 건 160억 — "큰 도서관에서 필요한 책만 펼치는" 구조 |
| **Search·Fetch API** | 모델에 검색·웹페이지 수집 도구를 API로 붙인 것 — 에이전트의 "눈"을 상품화 |

## 한줄 정의

2026-10-17 발표된 DeepSeek V4.1-Flash의 마이너 업데이트 — MIT 라이선스 오픈웨이트로 763B MoE를 공개하면서 자사 벤치 11개 중 코딩·에이전트 4개를 프론티어급으로, 태스크당 비용을 $0.2 미만으로 끌어내린 "파괴자" 릴리스.

## 핵심 내용

- **릴리스** (2026-10-17, X 발표): V4.1-Flash의 마이너 업데이트. Hugging Face·ModelScope에 가중치 공개, DeepSeek 웹사이트·앱·API에도 즉시 적용.
- **아키텍처**: 763B 파라미터 MoE, 생성 시 활성 16B / 프리필 8B, 1M 컨텍스트, 최대 출력 256K+. 전작과 같은 체크포인트 규모.
- **벤치(자사 측정, 제3자 미검증)**: Terminal-Bench 4.0 31.2→42.3, DeepSWE v1.1 74.2→77.0, Automation-Bench 60.5, Agents' Last Exam 35.4, HLE(no tools) 42.6. 11개 중 4개에서 GPT-5.6 Sol·Claude Opus 5를 앞섰다고 주장.
- **비용**: 태스크당 비용 $0.5→$0.2 미만(자사 차트, 60%↓). API 출력 $0.6/1M 토큰(off-peak) — GPT-5.6 Sol $20, Claude Opus 5 $25의 약 **1/42**.
- **신규 도구 API**: Search·Fetch $0.75/1,000 성공 호출(실패·빈 결과 무료). DeepSeek Harness·Claude Code·Codex 경유 서버측 호출은 10-31 16:00 UTC까지 무료.
- **HF CSO Thomas Wolf** X 발언: "'소규모 업데이트'라 부르는 게 정말 웃기다(Terminal-Bench 31.2→42.3)… 내부 평가 밖에서도 유지될지 궁금하다."

## 왜 중요한가 (1인 개발자 관점)

1. **가격 파괴의 정량화**: "1/42"는 수사가 아니라 계산이다. 코딩 에이전트의 단위 경제가 모델 성능이 아니라 **태스크당 $0.2**라는 숫자로 재정의됨 — [[patterns/ai-cost-management]]의 라우팅·캐싱·스펜드캡에 "오픈웨이트 교체"라는 4번째 레버.
2. **Speed beats paper**: ai0.news의 HN 관찰 — 벤치에서 Claude/Gemini가 "더 똑똑"해도 사용자는 속도와 토큰 효율 때문에 DeepSeek를 집는다. **체감 품질 = 속도 × 비용**의 공식이 프론티어 경쟁의 새 축.
3. **도구의 상품화**: Search·Fetch API 개방은 모델이 아니라 **에이전트 인프라**를 파는 것 — 10-16 초안(중국 AI 수출통제) 속에서도 모델 가중치는 오히려 바깥으로 풀리는 역설.

## 한계 (명시)

- 벤치 점수는 **DeepSeek 자체 측정** — 독립 재현 대기. Wolf도 "내부 평가 밖 유지"에 의문을 표함.
- "4/11 앞섰다"는 자사 테이블 기준 — Claude Opus 5가 6개를 이끈다는 같은 테이블의 대목도 함께 읽어야 함.
- 중국발 오픈웨이트: 10-16 수출통제 초안과의 상호작용(초안은 ≥2T 파라미터 규제 — V4.1은 763B라 임계값 아래)은 미확인.
