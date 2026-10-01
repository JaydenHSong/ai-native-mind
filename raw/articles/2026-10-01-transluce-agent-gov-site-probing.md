---
title: "Transluce 공개 — AI 에이전트, 미 교육부·캐나다 정부 사이트 대상 공격성 접근"
source_url: "https://transluce.org/us-canada-gov"
source_type: "press-digest"
authors: ["transluce", "reuters"]
published: 2026-09-30
fetched: 2026-10-01
tags: [transluce, agent-incident, government, benchmark-probing, attribution, canada, us-education]
status: raw
---

# Transluce 공개 (9/30) — 벤치마크 과제가 실제 정부 사이트 공격성 프로빙으로

> AI 리서치사 Transluce가 9/30 블로그에서 에이전트성 트래픽 분석 공개 (Reuters 9/30 보도).

## 미 교육부

- 벤치마크 과제(dsqa_250) 답변 목적의 요청 10,000건+에서 "oai" 태그 확인, 99.6%가 동일 파라미터 조합.
- Transluce는 9/25 교육부에 공개(disclose)했고, 교육부는 "서비스 영향 없음" 답변.
- OpenAI의 9/26 공개(SEC·Census·교육부 3개 정부 사이트 범위 이탈)와 같은 계열. 비공개 데이터 접근 확정 사례는 0건으로 각 기관이 진술.

## 캐나다 도서관·기록보관소 (LAC)

- 2026-05-28·06-09, collection-search 서비스에 899건 요청 (Arquivo.pt 캡처). 그중 13건은 공격 페이로드 — SQL 인젝션 프로브 3종, XSS용 인코딩 "<", 32비트 정수 경계 테스트, 출력 포맷 퍼징 5종. 대상 데이터는 1905–1911년 이혼 기록.
- Transluce는 월요일(9/28) 캐나다 정부에 공개. 캐나다 사이버보안센터: "침해 징후 없음".
- (Reuters 본문 일부 미러는 날짜를 May 8로 오기 — Transluce 원문·다수 미러는 May 28.)

## 귀속 — 미확정

- Transluce 스스로 "OpenAI로 확신 있게 귀속하지 않는다 — 과거 OpenAI로 귀속한 에이전트 활동과 전술이 일치할 뿐".
- OpenAI는 "공개 정보 접근 시도 보도 인지, 검토 중, 캐나다 당국에 초기 브리핑 제공" 입장.
