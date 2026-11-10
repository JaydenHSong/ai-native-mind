---
title: "LiteLLM 1.107.0 PyPI 공급망 침해 — .pth 지속 실행으로 자격증명 탈취"
source_url: "https://securitylabs.datadoghq.com/articles/litellm-1.107.0-supply-chain-compromise/"
source_type: "news"
authors: ["Datadog Security Labs", "SafeDep", "dev.to", "redsecuretech.com", "ai-tldr.dev", "The Hacker News"]
published: 2026-10-21
fetched: 2026-10-22
tags: [litellm, pypi, supply-chain-attack, backdoor, pth-persistence, credential-theft, ai-infra-security]
status: raw
---

# LiteLLM 1.107.0 PyPI 공급망 침해 — .pth 지속 실행으로 자격증명 탈취

> 2026-10-21 litellm 1.107.0이 PyPI에 자격증명 스틸러와 원격 코드 실행 백도어를 탑재한 채 게시. 노출 창 약 2시간 (11:39~13:23 UTC 업로드→삭제, Docker 이미지 11:46~14:20 UTC). 7개 휠 모두에 3개 파일이 심어졌고, `cook.pth`를 통한 Python 시작 시 로드 방식으로 litellm을 import하지 않아도 매 Python 프로세스 시작 시 실행 (지속 실행). 탈취 대상: SSH 키·클라우드 자격증명·CI/CD 시크릿·AI 툴 토큰 (Claude Code·Cursor·Codex 등) ·브라우저 비밀번호·LiteLLM 프록시 DB의 LLM 제공자 키. 유출처는 유사 도메인 www.litellm[.]dev. 공격자는 훔친 GitHub CLI OAuth 토큰으로 3명의 엔지니어 계정을 이용해 공식 릴리즈 파이프라인을 악용했고, 악성 포크 `Berri-AI/litellm` (실제와 하이픈 하나 차이) 이 빌드 출처로 기록. 2026년 들어 두 번째 LiteLLM 공급망 침해 (3월 1.82.7/1.82.8 — TeamPCP 연관). 안전 버전: 1.106.2 · 1.107.0rc1/rc2. (Datadog Security Labs·SafeDep·dev.to·redsecuretech.com·ai-tldr.dev·The Hacker News 교차)

## 내용

- **사건**: 10-21 litellm 1.107.0 — PyPI에 자격증명 스틸러 + RCE 백도어 탑재 게시. 노출 약 2시간 (11:39~13:23 UTC), Docker 이미지 (11:46~14:20 UTC).
- **지속 실행**: `cook.pth` — Python 시작 시 로드. litellm을 import하지 않아도 매 Python 프로세스 시작 시 실행. 의존성 핀닝 조언을 넘어서는 메커니즘.
- **탈취 범위**: SSH 키·클라우드 자격증명·CI/CD 시크릿·AI 툴 토큰 (Claude Code·Cursor·Codex 등) ·브라우저 비밀번호·프록시 DB의 LLM 제공자 키 — LLM 프록시가 "프로바이더 API 키가 모이는 곳"이라 고가치 표적.
- **침투 경로**: 유사 도메인 www.litellm[.]dev에서 훔친 GitHub CLI OAuth 토큰으로 3명의 엔지니어 계정 이용 — 공식 릴리즈 파이프라인 악용. 빌드 출처는 악성 포크 `Berri-AI/litellm`.
- **재발**: 2026년 두 번째 (3월 1.82.7/1.82.8, TeamPCP 연관). 안전 버전 1.106.2 · 1.107.0rc1/rc2.

## 맥락

- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델 + dual-LLM/CaMeL + Tier 등급 — LLM 프록시 공급망 공격의 실전 사례로 보강 가치.
- [[concepts/opencode-key-breach]] — OpenCode 키 노출 사고 (2026-10-18) — AI 툴 토큰 유출 맥락.
- [[patterns/agent-safety-runtime]] — 실행시점 에이전트 보안 런타임 — .pth 지속 실행이 런타임 관측의 사각지대임을 시사.
