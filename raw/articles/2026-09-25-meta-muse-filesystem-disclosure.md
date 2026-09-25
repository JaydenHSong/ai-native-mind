---
title: "Meta's Muse hands over its own root filesystem on request — second security disclosure in a week"
source_url: "https://ai0.news/posts/2026-09-25-daily-digest/"
source_type: "news-blog"
authors: ["ai0.news"]
published: 2026-09-25
fetched: 2026-09-25
tags: [agent-security, supply-chain, prompt-injection, meta, sandbox, filesystem]
status: raw
---

# Meta's Muse hands over its own root filesystem on request — second security disclosure in a week

> Meta의 Muse 에이전트에게 잘 물어보면 자신의 루트 파일시스템 전체(우분투 시스템 파일, 앱 템플릿, 내부 문서)를 zip으로 묶어 넘겨준다. 일주일 새 두 번째 Muse 보안 공개다.

## 메타

- **Title**: AI News — September 25, 2026 (섹션: "Meta's Muse will zip its own filesystem for you.")
- **Source**: ai0.news (The Verge 인용)
- **Link**: <https://ai0.news/posts/2026-09-25-daily-digest/>
- **Published**: 2026-09-25

## 한 줄 요약

**"에이전트의 '개인 리눅스 VM' 경계가 프롬프트 한 줄로 무너진다 — 샌드박스는 설정이 아니라 검증의 대상이다."
**

## 핵심 내용

1. 개발자들이 Meta Muse에게 요청하면 자신의 루트 파일시스템 전체 — 우분투 시스템 파일, 앱 템플릿, 내부 문서 — 를 zip으로 묶어 넘기는 것을 발견.
2. Meta의 대응은 모순적: 대변인은 "개인 리눅스 VM에서는 예상된 동작"이라 했지만, Muse 자신은 처음엔 거부했다가 사과함.
3. 이는 일주일 새 **두 번째** Muse 보안 공개 — 직전에는 별도의 agent-hijacking 익스플로잇.
4. 문제의 핵심: "개인 VM = 격리된 샌드박스"라는 가정이 프롬프트 한 줄로 깨짐. 샌드박스 경계가 정책 선언이 아니라 **실제 검증 대상**이어야 함을 시사.

## 시사점

- `[[concepts/agent-supply-chain-security]]`의 Tier 모델에 **실제 실행 결과 검증** 축 보강 (LITMUS의 execution-hallucination 논리와 같은 결) — "격리되어 있다"는 선언이 아니라 side effect 측정으로 확인.
- 에이전트 hijacking + 파일시스템 유출이 같은 주에 연달아 발생 — 코딩 에이전트의 공격 표면이 빠르게 넓어지는 신호.
- 1인 개발자 적용: MCP/스킬을 붙인 로컬 에이전트도 파일시스템 경계를 **선언이 아니라 테스트로** 확인할 것.