---
title: "OpenAI, '프라이빗 추론' 알파 테스트 시작 — 처리 중에도 프롬프트를 못 보게 (11-25)"
source_url: "https://www.unite.ai/openai-begins-limited-customer-trials-of-alpha-private-inference/"
source_type: "news"
authors: ["unite-ai"]
published: 2026-11-25
fetched: 2026-11-27
tags: [openai, private-inference, confidential-computing, privacy, enterprise, zero-data-retention, agents]
status: raw
---

# OpenAI, '프라이빗 추론' 알파 테스트 시작 — 처리 중에도 프롬프트를 못 보게 (11-25)

> 샘 올트먼이 11월 25일 X에 올린 글: OpenAI가 소수 비즈니스 고객과 함께 'Private Inference' 테스트를 시작했다. 모델이 프롬프트를 처리하는 바로 그 순간에도 OpenAI가 내용을 볼 수 없게 하는 것이 목표다. DevDay 2026(9월 29일)에서 예고한 Private Intelligence의 두 번째 축이다.

## 내용

- **무엇인가**: 기밀 컴퓨팅(confidential computing) + 검증 가능한 통제. 프롬프트와 응답이 모델 처리 중에도 암호화된 채로 격리된 하드웨어에서 실행됨. 대부분의 프라이버시 약속이 '답변 후' 데이터를 어떻게 다루는지에 관한 것이라면, 이건 '답변 중'을 겨냥한다.
- **범위**: 비즈니스 API 고객 대상 소규모 알파. 소비자용 ChatGPT가 아님. 가격·지원 모델 목록·정식 출시일 모두 미공개. 관심 기업은 @shekar4x(OpenAI 담당자)에게 연락하는 방식.
- **함께 공개된 것**: ZDR with Private Safety Processing — 안전 검토에 걸린 콘텐츠를 고객 소유 클라우드(AWS·Azure·Google Cloud·OCI)에 암호화 저장하고, 고객은 최소 30일간 보관해야 함. 자동 안전 검토는 OpenAI 직원이 원본 내용을 보지 않고 수행됨.
- **백서**: 10월 26일 Private Safety Processing 백서 — 키는 런타임 신원·하드웨어 증명·소프트웨어 측정값 검증 뒤에만 해제, 내부 키는 매일 교체·30일 뒤 파기, 측정값은 변조 방지 로그에 기록. 단, 표준 안전 런타임은 '추론 전체에 대한 Zero Operator Access 보장'을 제공하지 않는다고 명시.
- **확장 계획**: 올트먼은 대규모 출시를 위해 기밀 컴퓨팅 용량을 확보 중이라고 밝혔으나 일정은 없음. Shekar는 "모두를 위한 프라이빗 인텔리전스의 첫걸음"이라고 표현.

## 맥락

- Anthropic이 이틀 전(11월 23일) 같은 아이디어의 자사 버전(Enterprise Frontier Safeguards)을 퍼블릭 베타로 개시 — 프론티어 랩들의 기업 프라이버시 경쟁이 같은 주로 수렴
- 삼성 SPAC(같은 날 수집)과 같은 '프라이버시 컴퓨트' 흐름. 위키의 에이전트 거버넌스·데이터 주권 페이지와 연결