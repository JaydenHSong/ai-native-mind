---
title: "LiteLLM 1.107.0 PyPI 공급망 침해 — .pth 지속 실행 백도어"
category: concepts
tags: [litellm, pypi, supply-chain-attack, backdoor, pth-persistence, credential-theft, ai-infra-security, agent-supply-chain]
created: 2026-10-22
updated: 2026-10-22
sources:
  - "raw/articles/2026-10-22-litellm-pypi-compromise.md"
related:
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/opencode-key-breach]]"
  - "[[patterns/agent-safety-runtime]]"
status: draft
confidence: high
---

# LiteLLM 1.107.0 PyPI 공급망 침해 — .pth 지속 실행 백도어

## 쉽게 읽기

**비유**: 도서관에서 빌린 책 속에 도청기가 들어 있었다 — 그것도 "책을 펼치지 않아도" 작동하는 도청기. litellm 1.107.0의 백도어는 `cook.pth`라는 파일을 통해 파이썬이 켜질 때마다 자동으로 실행됐다. litellm을 쓰지도 않는데, 같은 머신의 파이썬이면 감염. 훔친 건 SSH 키·클라우드 자격증명·AI 툴 토큰 — 개발자의 "열쇠 꾸러미" 통째다.

| 용어 | 풀이 |
|------|------|
| **`.pth` 지속 실행** | 파이썬 시작 시 자동 로드되는 경로 설정 파일 — 악용 시 import 없이도 코드 실행 |
| **공급망 공격** | 소프트웨어 배포 경로 (PyPI·릴리즈 파이프라인) 를 오염시켜 사용자에게 악성코드를 전달하는 공격 |
| **LLM 프록시** | 여러 모델 제공자의 API를 하나의 인터페이스로 묶는 중계 계층 — 제공자 API 키가 모이는 곳 |

## 한줄 정의

2026-10-21 PyPI에 게시된 litellm 1.107.0에 심어진 자격증명 스틸러 + RCE 백도어 — `cook.pth`로 import 없이 지속 실행, SSH 키·클라우드 자격증명·AI 툴 토큰 탈취. 노출 약 2시간. 2026년 두 번째 LiteLLM 공급망 침해.

## 핵심 내용

- **사건**: 10-21 litellm 1.107.0 — PyPI에 자격증명 스틸러 + RCE 백도어 탑재 게시. 노출 창 약 2시간 (11:39~13:23 UTC 업로드→삭제, Docker 이미지 11:46~14:20 UTC). 7개 휠 모두에 3개 파일.
- **지속 실행**: `cook.pth` — Python 시작 시 로드. litellm을 import하지 않아도 매 Python 프로세스 시작 시 실행. "의존성 핀닝" 조언의 사각지대.
- **탈취 범위**: SSH 키·클라우드 자격증명·CI/CD 시크릿·AI 툴 토큰 (Claude Code·Cursor·Codex 등) ·브라우저 비밀번호·프록시 DB의 LLM 제공자 키.
- **침투 경로**: 유사 도메인 www.litellm[.]dev에서 훔친 GitHub CLI OAuth 토큰으로 3명의 엔지니어 계정 이용 → 공식 릴리즈 파이프라인 악용. 빌드 출처는 악성 포크 `Berri-AI/litellm` (하이픈 하나 차이).
- **재발**: 2026년 두 번째 (3월 1.82.7/1.82.8, TeamPCP 연관). 안전 버전 1.106.2 · 1.107.0rc1/rc2.
- **표적 선정의 이유**: LLM 프록시는 "프로바이더 API 키가 모이는 곳" — 한 번 뚫으면 여러 모델 계정을 한꺼번에. AI 에이전트 시대의 고가치 표적.

## 왜 중요한가 (1인 개발자 관점)

1. **핀닝으로는 안 막힘**: 보통의 조언은 "버전 핀 + 해시 검증"인데, 이번 공격은 **공식 릴리즈 파이프라인 자체**가 오염됐다 — 핀한 1.107.0이 곧 악성 버전. 방어선은 "릴리즈 무결성 검증 (서명·provenance)" 으로 한 단계 위로 올라가야 함. [[concepts/agent-supply-chain-security]]의 Tier 등급에 "릴리즈 파이프라인 신뢰" 축이 필요.
2. **`.pth`는 런타임 관측의 사각지대**: import 추적·의존성 스캔은 `cook.pth`를 못 본다. [[patterns/agent-safety-runtime]] 관점에서는 "프로세스 시작 시 뭔가 실행되는가"까지 봐야 — 에이전트 샌드박스의 시작점 검증이 필요.
3. **AI 툴 토큰이 표적**: 탈취 목록에 Claude Code·Cursor·Codex 토큰이 명시 — 개발자 머신의 `~/.config`류 토큰 저장소가 이제 "금고" 취급을 받아야 함. 토큰은 환경변수가 아니라 시크릿 매니저로.

## 한계 (명시)

- 실제 감염 규모 (다운로드 수·피해자 수) 는 미공개.
- 공격자 귀속 (TeamPCP 연관 여부 등) 은 미확인 — 3월 사건과의 연결은 추측 수준.
- `cook.pth` 탐지·제거 가이드는 Datadog 리포트 기준 — 환경별 차이 가능.