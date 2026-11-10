---
title: "OpenAI GPT-6 Rosalind Research — 승인된 생명과학 연구소에만 문 여는 수직 모델"
source_url: "https://jbiznews.com/openai-offers-new-biology-research-ai-to-approved-labs-with-tight-access-controls/"
source_type: "news"
authors: ["JBizNews"]
published: 2026-10-31
fetched: 2026-10-31
tags: [openai, gpt-6, rosalind, biology, life-sciences, biosecurity]
status: raw
---

# OpenAI GPT-6 Rosalind Research — 승인된 생명과학 연구소에만 문 여는 수직 모델

> OpenAI가 GPT-6 Rosalind Research(`gpt-6-rosalind`)를 승인된 연구 기관에 한해 ChatGPT Work와 Codex, 별도 승인된 API로 제공한다. 일반 Chat 탭에는 없고, Discovery 승인만으로는 접근할 수 없다. GPT-6 Astra와 같은 가중치에 추가 학습은 없으며, 차이는 생명과학 처리 방식과 접근 안전장치다. (JBizNews, OpenAI 10-30 안전 보고서·릴리스 노트 기반)

## 내용

- **접근 구조**: 승인된 Research 기관 대상이며, ChatGPT Work·Codex와 별도 승인 API로 제공된다. Discovery 승인은 Rosalind 접근 권한이 아니다. 기업 롤아웃은 2주간 관리자 프리뷰로 시작하며 기본값은 꺼짐이다.
- **모델 정체**: GPT-6 Astra와 동일한 가중치, 이번 릴리스를 위한 추가 학습 없음. 수직화의 차이는 생명과학 핸들링과 안전장치에 있다.
- **벤치마크(최고 추론 예산)**: 의약화학 평가 49.6%(GPT-Rosalind-5.5는 28.9%), 실무 과학자 태스크 기반 응용 생명과학 벤치마크 61.3%(5.5는 44.0%).
- **위험 분류**: 높은 생물·화학 역량으로 분류되나 임계치(critical threshold)에는 미달한다. 일부 정당한 이중용도 생물학 질문에는 거부가 줄었고, 생물무기화 관련 거부는 유지된다.
- **가격(2차 트래커 기준)**: $15 / 캐시 $1.50 / $75(백만 토큰당)로, 5.5($5 / $0.50 / $25)의 3배 수준이라고 AICoder가 집계했다.
- **한계**: 가격은 2차 트래커 집계이며 OpenAI 요약에서 확인되지 않았다. 벤치마크는 OpenAI 자체 보고이고, 한 생물학 데이터 벤치마크는 비프로덕션 설정으로 측정됐다.

## 맥락

- [[concepts/openai-ai-science-three-discoveries]] — OpenAI AI 과학 발견 3건, 수학·컴퓨터과학·물리학 (2026-10-27 위키)
- [[concepts/uk-ai-biosecurity-lab]] — 영국 AI 바이오보안 연구소, 현금 £100M + 기업 크레딧 최대 £200M (2026-10-25 위키)
- [[concepts/anthropic-ai-safety-bill]] — Anthropic의 미국 AI 안전 법안 초안, 10억 달러·50명 임계값 모델 중단 (2026-10-18 위키)
