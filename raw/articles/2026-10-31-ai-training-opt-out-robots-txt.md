---
title: "4대 프론티어 랩, AI 학습 거부 단일 robots.txt 토큰 합의 — IETF 초안 공개"
source_url: "https://ppc.land/google-microsoft-openai-and-anthropic-back-one-ai-training-opt-out/"
source_type: "news"
authors: ["PPC Land", "Emergent"]
published: 2026-10-30
fetched: 2026-10-31
tags: [robots-txt, ai-training, opt-out, copyright, openai, google, microsoft, anthropic]
status: raw
---

# 4대 프론티어 랩, AI 학습 거부 단일 robots.txt 토큰 합의 — IETF 초안 공개

> 10-30 OpenAI·Google·Microsoft·Anthropic이 AI 학습 거부를 위한 단일 robots.txt 토큰 `__usage_ai-training`에 합의했다. 크롤러별 개별 거부 대신 `User-Agent: __usage_ai-training` + `Disallow: /` 한 줄로 학습 거부 의사를 표시하는 방식이다. 정의는 Anthropic의 Kevin Kelley가 작성한 IETF 개인 초안에 담겼다. (PPC Land·Emergent 교차)

## 내용

- **메커니즘**: robots.txt 정책 토큰 `__usage_ai-training`에 `Disallow: /`를 붙이는 방식이다. 기존의 크롤러별 개별 opt-out을 대체하는 단일 신호를 노린다.
- **표준 상태**: IETF 개인 초안 `draft-kelley-aipref-training-preference-signal-00`(10-30자, 2027-05-03 만료)이며 채택된 표준이 아니고 IETF의 보증도 없다. 10-21 AIPREF 회의에서는 합의가 선언되지 않았다.
- **이행 시기**: Anthropic은 구현 시작, OpenAI는 "수개월 내", Microsoft는 2027-02-01 목표, Google은 2027년 초 목표(확정일 없음)다. Microsoft는 AI 그라운딩(답변 시 실시간 검색)용 별도 제어도 추가한다.
- **범위**: 학습에만 적용된다. 크롤링·검색 색인·AI 답변은 포함하지 않으며, 이미 데이터셋에 들어갔거나 학습된 콘텐츠를 제거하지도 않는다. 다만 Google은 이 토큰을 Google-Extended에 매핑해 Gemini 그라운딩에서도 제외한다.
- **예외**: Meta는 지지를 표명했으나 이행 약속은 하지 않았다. 개별 라이선스 계약이 이 신호보다 우선할 수 있다.
- **한계**: Anthropic의 참여는 논란이 있다. Anthropic 자체 발표가 없고 초안 작성자의 게시물에 근거한다는 지적이 있어, Anthropic 참여는 "보도됨" 수준으로 다뤄야 한다.

## 맥락

- [[concepts/wikimedia-amicus-nyt-openai]] — 학습은 공정 이용 가능·RAG는 라이선스 준수 (2026-10-30 위키)
- [[concepts/publishers-ai-covert-use]] — 출판사의 은밀한 AI 사용, 저자 동의 없는 카피·커버 제작 (2026-10-12 위키)
- [[concepts/meta-commercial-terms-delay]] — 메타 상업 약관 시행 연기, AI 크롤링 논란 10-30→11-20 (2026-10-24 위키)
