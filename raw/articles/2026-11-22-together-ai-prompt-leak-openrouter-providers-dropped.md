---
title: "Together AI, 코딩 에이전트가 커밋한 키로 고객 프롬프트 유출 — OpenRouter, 공급사 3곳 퇴출 (11-21~22)"
source_url: "https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026"
source_type: "news"
authors: ["Together AI", "OpenRouter"]
published: 2026-11-21
fetched: 2026-11-22
tags: [security, prompt-leak, together-ai, openrouter, coding-agents, zero-data-retention]
status: raw
---

# Together AI, 코딩 에이전트가 커밋한 키로 고객 프롬프트 유출 — OpenRouter, 공급사 3곳 퇴출 (11-21~22)

> Together AI가 11월 21일 공식 보안 공지에서 AI 코딩 에이전트가 실수로 커밋한 자격증명 탓에 고객 프롬프트 샘플이 유출됐다고 밝혔다. 유출된 샘플 속 자격증명 중 5개는 Dragos가 심은 카나리아 토큰이었다. 다음 날 OpenRouter는 관련 공급사 3곳을 퇴출하고 ZDR 대상에서 125개 엔드포인트를 제외했다.

## 내용

- **Together AI 유출**: 공개 GitHub 저장소 `xorl` 개발 중 AI 코딩 에이전트가 비공개 Hugging Face 저장소 접근 자격증명을 커밋. 자동 스캔이 탐지·되돌렸으나 노출 창구 동안 무단 제3자가 저장된 프롬프트 샘플을 전부 다운로드.
- **유출 범위**: MiniMax M3·GLM-5.2·Kimi K2.6 요청(주로 2026-06-24, 07-04, 07-08, 07-14)에서 일상 테스트용으로 수집한 프롬프트 샘플. 침입자는 샘플 속 타 서비스 자격증명을 찾아 유효성을 테스트했고, 그중 5개가 Dragos 실험용 카나리아였음. 실제 자격증명 유출 여부는 검토 중.
- **대책 4가지**: 범위·단기 자격증명 및 키리스 접근, 전 PR 자격증명 검사, 신규 계정 ZDR 기본값, 코딩 에이전트 사용 개발 프로세스 개정.
- **OpenRouter 조치(11-22)**: 공급사 3곳 퇴출(업체명 비공개), ZDR 적격 엔드포인트 125개 제외(일부 예방적). 잠재 피해 고객 전원 통지. OpenRouter 자체 침해는 없었다고 밝힘. Novita도 05-28~11-11 MiniMax 경유 요청의 제3자 접근 가능성을 별도 공지.
- **배경**: Dragos(HD Moore)의 카나리아 토큰 연구(7~11월 약 200만 개 프롬프트에 고유 URL·자격증명 심음, 11월 20일 공개)의 후속 파장. ZDR 표시에도 프롬프트가 저장·전달된 사례가 확인돼 "ZDR은 라벨일 뿐 보장 아니었다"는 문제 제기.

## 맥락

- "에이전트가 비밀을 커밋했다"는 최초급 사례 — 코딩 에이전트 보안·권한 관리의 대표 사건
- 추론 라우터·ZDR 신뢰 모델·에이전트 데이터 거버넌스와 직결
