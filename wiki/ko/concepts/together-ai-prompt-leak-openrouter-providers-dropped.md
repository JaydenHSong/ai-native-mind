---
title: "Together AI 프롬프트 유출 — 코딩 에이전트가 커밋한 키, OpenRouter 공급사 3곳 퇴출"
category: concepts
tags: [security, prompt-leak, together-ai, openrouter, coding-agents, zero-data-retention, supply-chain]
created: 2026-11-22
updated: 2026-11-22
sources:
  - "raw/articles/2026-11-22-together-ai-prompt-leak-openrouter-providers-dropped.md"
related:
  - "[[concepts/dragos-canary-tokens-ai-supply-chain]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/agent-data-leakage]]"
  - "[[concepts/fireworks-notion-ai-breach]]"
status: draft
confidence: medium
---

# Together AI 프롬프트 유출 — 코딩 에이전트가 커밋한 키, OpenRouter 공급사 3곳 퇴출

## 쉽게 읽기

**비유**: AI 코딩 도우미가 실수로 집 열쇠를 길바닥에 떨어뜨렸고, 그 열쇠로 누군가 창고에 들어가 고객들이 AI에게 보낸 질문들을 몽땅 가져갔다. 더 놀라운 건, 가져간 질문들 속에 "이건 가짜 열쇠입니다"라고 몰래 표시해 둔 것들이 섞여 있었다는 점이다. 그 표시를 심은 보안 회사가 "고객 질문이 새고 있다"고 알린 지 하루 만에, 중개 사이트가 관련 회사 3곳을 내쫓았다.

| 용어 | 풀이 |
|------|------|
| **코딩 에이전트** | 개발자를 대신해 코드를 쓰고 고치는 AI |
| **자격증명** | 비밀번호나 열쇠 같은, 남의 저장소에 들어갈 수 있게 해 주는 정보 |
| **프롬프트** | 사용자가 AI에게 보내는 질문·지시문 |
| **카나리아 토큰** | 유출을 추적하기 위해 심어 두는 고유한 표시 — 가짜 URL이나 가짜 키처럼, 어딘가에서 나타나면 유출됐다는 증거 |
| **제로 데이터 보존(ZDR)** | "고객 데이터를 저장하지 않겠다"는 약속·설정 |

## 한줄 정의

Together AI가 2026년 11월 21일 공식 보안 공지에서 AI 코딩 에이전트가 실수로 커밋한 자격증명 탓에 고객 프롬프트 샘플이 유출됐다고 밝혔다. 유출된 샘플 속 자격증명 중 5개는 Dragos가 심은 카나리아 토큰이었다. 다음 날 OpenRouter는 관련 공급사 3곳을 퇴출하고 ZDR 대상에서 125개 엔드포인트를 제외했다.

## 핵심 내용

- **Together AI 유출**: 공개 GitHub 저장소 `xorl` 개발 중 AI 코딩 에이전트가 비공개 Hugging Face 저장소 접근 자격증명을 커밋. 자동 스캔이 탐지·되돌렸으나 노출 창구 동안 무단 제3자가 저장된 프롬프트 샘플을 전부 다운로드.
- **유출 범위**: MiniMax M3·GLM-5.2·Kimi K2.6 요청(주로 2026-06-24, 07-04, 07-08, 07-14)에서 일상 테스트용으로 수집한 프롬프트 샘플. 침입자는 샘플 속 타 서비스 자격증명을 찾아 유효성을 테스트했고, 그중 5개가 Dragos 실험용 카나리아였음. 실제 자격증명 유출 여부는 검토 중.
- **대책 4가지**: 범위·단기 자격증명 및 키리스 접근, 전 PR 자격증명 검사, 신규 계정 ZDR 기본값, 코딩 에이전트 사용 개발 프로세스 개정.
- **OpenRouter 조치(11-22)**: 공급사 3곳 퇴출(업체명 비공개), ZDR 적격 엔드포인트 125개 제외(일부 예방적). 잠재 피해 고객 전원 통지. OpenRouter 자체 침해는 없었다고 밝힘. Novita도 05-28~11-11 MiniMax 경유 요청의 제3자 접근 가능성을 별도 공지.
- **배경**: Dragos(HD Moore)의 카나리아 토큰 연구(7~11월 약 200만 개 프롬프트에 고유 URL·자격증명 심음, 11월 20일 공개)의 후속 파장. ZDR 표시에도 프롬프트가 저장·전달된 사례가 확인돼 "ZDR은 라벨일 뿐 보장 아니었다"는 문제 제기.

## 왜 중요한가 (1인 개발자 관점)

1. **"에이전트가 비밀을 커밋했다"는 최초급 사례다**: 지금까지의 비밀 유출은 사람이 실수한 것이었다. 이번엔 코딩 에이전트가 개발 과정에 자격증명을 박아 넣었다. [[concepts/claude-code-dont-ask-again-secret-leak]]의 "사람이 무심코 넘긴 권한"과 짝을 이루는, 에이전트 시대의 비밀 관리 실패 패턴이다.
2. **ZDR은 라벨이지 보장이 아니었다**: "저장 안 한다"는 표시가 붙은 경로에서도 프롬프트가 저장·전달됐다. [[concepts/fireworks-notion-ai-breach]]와 같은 구조 — 약속은 제공사 단계에서 끝나고, 중간 호스팅·재판매 단계에서는 소용없다. 내 서비스가 외부 AI를 쓸 때 "어디까지 가는지"는 믿는 게 아니라 재는 문제다.
3. **카나리아 토큰이 "믿음"을 "증거"로 바꿨다**: Dragos가 심은 표시가 없었다면 이 유출은 "누가 가져갔는지 모르는" 사고로 남았을 것이다. [[concepts/dragos-canary-tokens-ai-supply-chain]]의 연구가 하루 만에 실제 퇴출 조치로 이어진, 실전 추적 도구의 위력을 보여주는 사례다.

## 한계 (명시)

- 유출된 샘플 속 실제 자격증명 유출 여부는 검토 중 — 확정된 사실이 아니다.
- 퇴출된 공급사 3곳의 업체명은 비공개 — 독립 교차검증이 제한적이다.
- confidence는 medium — Together AI·OpenRouter 공식 공지 교차이나, 업체명 비공개·실제 자격증명 유출 여부 미확정.

## 관련 개념

- [[concepts/dragos-canary-tokens-ai-supply-chain]] — Dragos 카나리아 토큰 연구, 유출의 단서가 된 바로 그 실험 — 샘플 속 5개 자격증명이 이 연구의 표시였다 (2026-11-19)
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델, 공급망 침해 대응의 기준
- [[concepts/agent-data-leakage]] — 훈련·평가 환경 에이전트의 사용자 데이터 유출, OpenAI 53건 이미지 사건 (2026-09-26)
- [[concepts/fireworks-notion-ai-breach]] — Fireworks AI 침해로 Notion AI 채팅 기록 노출, 제로 리텐션 약속과 달리 보관 (2026-11-09·11-11)

## 참고 소스

- [Together AI, 코딩 에이전트가 커밋한 키로 고객 프롬프트 유출 — OpenRouter, 공급사 3곳 퇴출 (Together AI·OpenRouter, 11-21~22)](raw/articles/2026-11-22-together-ai-prompt-leak-openrouter-providers-dropped.md)
