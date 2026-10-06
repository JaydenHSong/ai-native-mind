---
title: "OpenAI, 텍스트 워터마킹 'textGrain' 공개 — EU AI Act 대응, API 옵트인 + EU ChatGPT/Codex 적용"
source_url: "https://9to5mac.com/2026/10/05/openai-details-new-text-watermarking-system-for-chatgpt-codex-and-the-api/"
source_type: "news"
authors: ["marcus-mendes", "9to5mac"]
published: 2026-10-05
fetched: 2026-10-06
tags: [openai, watermarking, textgrain, eu-ai-act, chatgpt, codex, api, provenance]
status: raw
---

# OpenAI, textGrain 텍스트 워터마킹 공개 (10/5)

> EU AI Act(생성형 AI 텍스트 식별 의무) 대응. 단어 선택에 보이지 않는 통계적 신호를 심는 방식 — Anthropic이 몇 달 전 논란을 일으킨 방식과 유사하나 롤아웃은 훨씬 제한적.

## 내용

- 기술: textGrain — 모델의 단어 선택에 보이지 않는 통계적 신호를 추가. 디텍터가 신호를 찾아 OpenAI 워터마크 포함 여부를 판정. 오픈소스 공개 계획.
- 적용 범위: API는 오늘부터 전 세계 고객이 select 모델에 옵트인 가능 (기본 off). ChatGPT·Codex는 수주 내 EU의 eligible 사용자에게 보이지 않는 워터마크 적용.
- 디텍터 접근: 승인된 연구자·전문 기관에 신청 개방 — 기술 평가·개선 목적.
- 한계 (OpenAI 명시): false positive/negative 존재. 짧은 텍스트·수학 등 단어 선택 유연성이 낮은 도메인에서 약함. 편집에 취약 — 400토큰 문단에서 10% 단어를 동의어로 바꾸면 탐지율 92%→66%, 25% 바꾸면 17%로 급락.
- 성능: 워터마크 텍스트가 여러 벤치마크에서 비워터마크보다 근소하게 높음 — Artificial Analysis Intelligence Index 49.76 vs 49.57, Terminal-Bench 4.0 56.06 vs 53.90, Terminal-Bench Science 0.1 60.00 vs 56.90 (모델명 'Astra' 표기). DeepSWE v1.1 71.68 vs 72.80, GPQA Diamond 93.94 vs 94.44로 소폭 하락 항목도 있음. 회사 설명: "의미 있는 차이 없음".
- 워터마크가 증명하지 않는 것: 인간 기여도·소유권·책임·사용자 식별·정확도. "워터마크 미검출이 인간 저작을 증명하지도 않음".
- 배경: 몇 달 전 Anthropic이 EU AI Act 대응으로 Claude에 단어 선택 조정 워터마킹을 발표해 논란 — 당시 Anthropic은 "우리만 하는 게 아니다, 다른 주요 사업자들도 마킹 시스템 도입 중"이라고 강조. OpenAI가 그 후속.

## 맥락

- 출처 표시(provenance)의 표준화 국면: EU AI Act가 강제하는 '기계 판독 가능 식별' 의무에 빅랩이 하나씩 대응 중 — 규제 준수가 제품 기능으로.
- 킬 스위치·감사 로그(뉴욕시 청문회 10/5)와 같은 주 — AI 출력의 추적 가능성이 법·기술 양쪽에서 하드 요구사항화.
- 탐지율의 편집 취약성(10% 편집에 66%, 25%에 17%)은 실효성 논쟁의 핵심 수치 — 위키에 그대로 기록.
