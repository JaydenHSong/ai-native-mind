---
title: "Dragos 카나리아 토큰 연구 — AI 호스팅 업체 3곳 침해, 프롬프트 유출 실증"
category: concepts
tags: [security, supply-chain, ai-hosting, canary-tokens, dragos]
created: 2026-11-20
updated: 2026-11-22
sources:
  - "raw/articles/2026-11-20-dragos-canary-tokens-ai-supply-chain.md"
  - "raw/articles/2026-11-22-together-ai-prompt-leak-openrouter-providers-dropped.md"
related:
  - "[[concepts/together-ai-prompt-leak-openrouter-providers-dropped]]"
  - "[[concepts/litellm-pypi-supply-chain-compromise]]"
  - "[[concepts/google-threat-tracker-exploit-agent]]"
  - "[[concepts/ai-memory-systems]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: medium
---

# Dragos 카나리아 토큰 연구 — AI 호스팅 업체 3곳 침해, 프롬프트 유출 실증

## 쉽게 읽기

**비유**: 보낸 편지에 눈에 안 보이는 표시를 해 두고, 그 표시가 어디서 나타나는지 지켜본 실험이다. 산업보안 회사 Dragos는 AI 서비스에 보내는 질문 200만 개에 몰래 표시(카나리아 토큰)를 심었다. 그랬더니 표시가 엉뚱한 곳에서 나타났다 — 최소 3개 AI 호스팅 업체에서 고객 질문이 새고 있었고, 업체들은 Dragos가 알려주기 전까지 침해 사실 자체를 몰랐다. "우리는 데이터를 저장하지 않는다"는 약속도 소용없었다.

| 용어 | 풀이 |
|------|------|
| **카나리아 토큰(canary token)** | 유출을 추적하기 위해 심어 두는 고유한 표시 — 가짜 URL이나 가짜 클라우드 키처럼, 어딘가에서 나타나면 유출됐다는 증거 |
| **AI 호스팅 업체** | 남의 AI 모델을 대신 돌려주는 회사 — 질문을 받아 모델에 넣고 답을 돌려준다 |
| **제로 데이터 보존(Zero Data Retention)** | "고객 데이터를 저장하지 않겠다"는 약속·설정 |
| **추론 마켓플레이스** | 여러 AI 모델을 골라 쓸 수 있게 중개하는 시장 — 재판매자가 중간에서 모델을 빌려준다 |
| **프롬프트** | 사용자가 AI에게 보내는 질문·지시문 |

## 한줄 정의

산업보안 기업 Dragos가 2026년 7~11월 5개월간 약 200만 개의 프롬프트에 고유 카나리아 토큰(URL·AWS 키)을 심어 AI 서비스에 전송한 뒤 추적한 연구를 공개했다. 최소 **3개 AI 호스팅 업체**에서 데이터 노출 증거가 확인됐고, 3곳 모두 Dragos가 알리기 전까지 침해를 몰랐다.

## 핵심 내용

- **방법**: 약 200만 개 프롬프트에 고유 카나리아 토큰을 심어 AI 서비스로 전송, 이후 토큰이 어디서 나타나는지 추적.
- **침해 증거**: 최소 3개 AI 호스팅 업체에서 데이터 노출 증거 확인. 미끼 AWS 키가 공격자의 AWS API 호출(수만 건)에 사용됐다. 최대 침해 건은 10월 말 며칠간 약 200개의 AWS 키가 전부 탈취된 사례.
- **재판매자 열람**: AI 추론 마켓플레이스 재판매자들이 표준 로깅 기능만으로 고객 프롬프트를 열람·보관할 수 있었다.
- **제로 데이터 보존 무력화**: Zero Data Retention 설정에도 프롬프트가 유출됐고, 한 사례는 24일 뒤 Feishu 채팅에 게시됐다. 프롬프트가 중국 AI 조직에 도달한 사례도 확인됐다.
- **출처 구분**: Dragos 공식 블로그의 1차 연구(연구 책임자 HD Moore). 보안 연구자의 능동 실험 결과이므로, 침해 업체명은 공개되지 않았다.

## 왜 중요한가 (1인 개발자 관점)

1. **"저장 안 한다"는 약속은 호스팅 업체까지 못 미친다**: 모델 제공사의 Zero Data Retention 설정과 별개로, 중간 호스팅·재판매 단계에서 프롬프트가 열람·보관됐다. 데이터를 보내는 쪽은 "어디까지 가는지"를 볼 수 없다 — [[concepts/ai-memory-systems]]의 문제와 같은 구조다.
2. **카나리아 토큰은 실전 추적 도구다**: 유출을 "믿는" 게 아니라 "재는" 방법이다. API 키·URL 같은 가짜 비밀을 심어 두면, 유출 경로를 증거로 잡을 수 있다. 내 서비스가 외부 AI를 쓸 때도 같은 방식으로 공급망을 점검할 수 있다.
3. **공급망 침해가 연쇄하고 있다**: 같은 주 Microsoft Agent Framework PyPI 침해([[concepts/litellm-pypi-supply-chain-compromise]] 맥락)와 함께, AI 인프라의 "중간 단계"가 공격 표면이 되고 있다. [[concepts/agent-supply-chain-security]]의 신뢰 모델을 다시 볼 때다.

## 2026-11-22 보강 — Together AI 유출·OpenRouter 공급사 3곳 퇴출, 카나리아가 실전 증거로

- **후속 파장**: Together AI가 11월 21일 공개한 프롬프트 유출 공지에서, 유출된 샘플 속 자격증명 중 5개가 Dragos 실험용 카나리아 토큰이었다. 다음 날 OpenRouter는 관련 공급사 3곳을 퇴출하고 ZDR 적격 엔드포인트 125개를 제외했다.
- **의미**: 이 연구가 "유출 가능성을 보여준 실험"에서 "실제 유출·퇴출의 증거"로 바뀌었다. 카나리아 토큰이 추적 도구를 넘어, 공급사 퇴출이라는 조치의 근거가 됐다. 자세한 내용은 [[concepts/together-ai-prompt-leak-openrouter-providers-dropped]] 참조.

## 한계 (명시)

- Dragos 1차 연구 단일 출처이며, 침해 업체명은 공개되지 않아 독립 교차검증이 어렵다.
- "프롬프트가 중국 AI 조직에 도달"했다는 사례의 구체적 경로는 연구에 공개되지 않았다.
- confidence는 medium — 1차 연구 자체는 직접 실험이나, 업체명 비공개·단일 출처라 교차검증이 제한적.

## 관련 개념

- [[concepts/together-ai-prompt-leak-openrouter-providers-dropped]] — Together AI 프롬프트 유출, 유출 샘플 속 5개 자격증명이 이 연구의 카나리아 토큰 — OpenRouter 공급사 3곳 퇴출 (2026-11-21~22)
- [[concepts/litellm-pypi-supply-chain-compromise]] — 같은 주 발생한 Microsoft Agent Framework PyPI 침해와 함께 AI 공급망 보안이 연쇄 이슈로 부상 (2026-10-22)
- [[concepts/google-threat-tracker-exploit-agent]] — AI 서비스·에이전트 인프라를 겨냥한 공격 표면 확대의 연장선 (2026-11-16)
- [[concepts/ai-memory-systems]] — 프롬프트·대화 기록이 제3자 인프라에 남는 구조적 문제와 연결
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델, 공급망 침해 대응의 기준

## 참고 소스

- [Dragos 카나리아 토큰 연구 — AI 호스팅 업체 3곳 침해, 프롬프트 유출 실증 (Dragos 공식 블로그, 11-19)](raw/articles/2026-11-20-dragos-canary-tokens-ai-supply-chain.md)
- [Together AI 프롬프트 유출 — OpenRouter 공급사 3곳 퇴출 (Together AI·OpenRouter, 11-21~22)](raw/articles/2026-11-22-together-ai-prompt-leak-openrouter-providers-dropped.md)
