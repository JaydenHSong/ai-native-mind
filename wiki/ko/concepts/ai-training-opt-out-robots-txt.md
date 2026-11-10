---
title: "AI 학습 거부 단일 robots.txt 토큰 — 4대 랩 합의, IETF 개인 초안"
category: concepts
tags: [robots-txt, ai-training, opt-out, copyright, openai, google, microsoft, anthropic]
created: 2026-10-31
updated: 2026-10-31
sources:
  - "raw/articles/2026-10-31-ai-training-opt-out-robots-txt.md"
related:
  - "[[concepts/wikimedia-amicus-nyt-openai]]"
  - "[[concepts/publishers-ai-covert-use]]"
  - "[[concepts/meta-commercial-terms-delay]]"
status: draft
confidence: high
---

# AI 학습 거부 단일 robots.txt 토큰 — 4대 랩 합의, IETF 개인 초안

## 쉽게 읽기

**비유**: 지금까지는 출판사가 "우리 글은 학습하지 마세요"라고 알리려면 랩마다 다른 문패를 달아야 했다. 이제 네 랩이 한 문패를 같이 보기로 했다. 다만 그 문패는 아직 정식 표준이 아니라 초안이고, 문패를 단다고 이미 외운 글을 지워 주지는 않는다.

| 용어 | 풀이 |
|------|------|
| **robots.txt** | 웹사이트가 크롤러에게 접근 허용 범위를 알리는 관례 파일 |
| **IETF 개인 초안** | 개인이 제출한 표준 초안. 채택된 표준이 아니며 IETF 보증도 없음 |
| **그라운딩** | AI가 답변 시점에 실시간 검색 결과를 끌어와 근거로 삼는 방식 |

## 한줄 정의

2026-10-30 합의된 AI 학습 거부 단일 신호 — `User-Agent: __usage_ai-training` + `Disallow: /`, IETF 개인 초안 기반, 4대 랩이 단계적으로 이행.

## 핵심 내용

- **신호**: robots.txt에 `User-Agent: __usage_ai-training`와 `Disallow: /`를 적으면 학습 거부 의사를 표시한다. 크롤러별 개별 opt-out을 하나의 토큰으로 대체하는 것이 목표다.
- **표준 상태**: Anthropic의 Kevin Kelley가 작성한 IETF 개인 초안 `draft-kelley-aipref-training-preference-signal-00`(2027-05-03 만료)이다. 채택된 표준이 아니고, 10-21 AIPREF 회의에서 합의도 선언되지 않았다.
- **이행 일정**: Anthropic 구현 시작, OpenAI 수개월 내, Microsoft 2027-02-01 목표, Google 2027년 초 목표다. Microsoft는 그라운딩용 별도 제어도 추가하고, 2027-03-01 이후에는 NoArchive/NoCache를 학습·그라운딩 선호로 보지 않는다.
- **범위와 한계**: 학습 거부일 뿐 크롤링·검색 색인·AI 답변을 막지 않으며, 이미 데이터셋에 들어갔거나 학습된 콘텐츠는 제거하지 않는다. 단, Google은 이 토큰을 Google-Extended에 매핑해 Gemini 그라운딩에서도 제외한다 — Microsoft와 갈리는 지점이다.
- **예외**: Meta는 지지만 표명하고 이행은 약속하지 않았다. 개별 라이선스 계약은 이 신호보다 우선할 수 있다.

## 왜 중요한가 (1인 개발자 관점)

1. **데이터 권리의 기계판독 전환**: 소송과 정책 논쟁이던 "학습 거부"가 robots.txt 한 줄의 기계 신호로 바뀌었다. 자기 콘텐츠를 지키는 방법이 법률 문서에서 설정 파일로 이동한다.
2. **학습과 그라운딩의 분리**: 같은 토큰도 Google은 그라운딩까지, Microsoft는 학습까지만 막는다. RAG·그라운딩을 만드는 개발자는 랩별 매핑 차이를 코드로 다뤄야 한다.
3. **아직 약속 단계**: 표준도 아니고 이행 시점도 랩마다 다르다. 이 토큰을 "보호된다"고 전제하고 제품을 설계하면 안 된다.

## 한계 (명시)

- Anthropic의 참여는 자체 발표가 없고 초안 작성자의 게시물에 근거한다는 지적이 있어 "보도됨" 수준으로 다룬다.
- 이행 일정은 각사 발표이지 실제 강제력이 확인된 바가 아니다.
- 학습 거부 신호가 법적 효력을 갖는지는 국가·소송마다 별개 문제다.
