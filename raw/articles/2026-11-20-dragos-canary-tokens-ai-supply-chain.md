---
title: "Dragos 카나리아 토큰 연구 — AI 호스팅 업체 3곳 침해, 프롬프트 유출 실증 (11-19)"
source_url: "https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens"
source_type: "research"
authors: ["Dragos", "HD Moore"]
published: 2026-11-19
fetched: 2026-11-20
tags: [security, supply-chain, ai-hosting, canary-tokens, dragos]
status: raw
---

# Dragos 카나리아 토큰 연구 — AI 호스팅 업체 3곳 침해, 프롬프트 유출 실증 (11-19)

> 산업보안 기업 Dragos가 2026년 7~11월 5개월간 약 200만 개의 프롬프트에 고유 카나리아 토큰(URL·AWS 키)을 심어 AI 서비스에 전송한 뒤 추적한 연구를 공개했다. 최소 3개 AI 호스팅 업체에서 데이터 노출 증거가 확인됐고, 3곳 모두 Dragos가 알리기 전까지 침해를 몰랐다.

## 내용

- **방법**: 약 200만 개 프롬프트에 고유 카나리아 토큰을 심어 AI 서비스로 전송, 이후 토큰이 어디서 나타나는지 추적.
- **침해 증거**: 최소 3개 AI 호스팅 업체에서 데이터 노출 증거 확인. 미끼 AWS 키가 공격자의 AWS API 호출(수만 건)에 사용됐다. 최대 침해 건은 10월 말 며칠간 약 200개의 AWS 키가 전부 탈취된 사례.
- **재판매자 열람**: AI 추론 마켓플레이스 재판매자들이 표준 로깅 기능만으로 고객 프롬프트를 열람·보관할 수 있었다.
- **제로 데이터 보존 무력화**: Zero Data Retention 설정에도 프롬프트가 유출됐고, 한 사례는 24일 뒤 Feishu 채팅에 게시됐다. 프롬프트가 중국 AI 조직에 도달한 사례도 확인됐다.
- **출처 구분**: Dragos 공식 블로그의 1차 연구(연구 책임자 HD Moore). 보안 연구자의 능동 실험 결과이므로, 침해 업체명은 공개되지 않았다.

## 맥락

- [[concepts/litellm-pypi-supply-chain-compromise]] — 같은 주 발생한 Microsoft Agent Framework PyPI 침해와 함께 AI 공급망 보안이 연쇄 이슈로 부상
- [[concepts/google-threat-tracker-exploit-agent]] — AI 서비스·에이전트 인프라를 겨냥한 공격 표면 확대의 연장선
- [[concepts/ai-memory-systems]] — 프롬프트·대화 기록이 제3자 인프라에 남는 구조적 문제와 연결
