---
title: "DeepSeek, dsh-superagent 연구 프로토타입 오픈소스 공개 — 상시 온라인 코딩 에이전트 설계 (MIT)"
source_url: "https://www.michaelleung.info/latest-news/deepseek-super-agent-explained"
source_type: "news"
authors: ["Michael Leung"]
published: 2026-10-31
fetched: 2026-11-02
tags: [deepseek, dsh-superagent, coding-agent, open-source, super-agent]
status: raw
---

# DeepSeek, dsh-superagent 연구 프로토타입 오픈소스 공개 — 상시 온라인 코딩 에이전트 설계 (MIT)

> DeepSeek Harness 팀이 2026-10-31 GitHub에 `deepseek-ai/dsh-superagent-prototype`을 MIT 라이선스로 공개했다. 하나의 GitHub 저장소를 대상으로 GitHub·Feishu 요청을 받아 PR로 답하는 상시 온라인 코딩 에이전트의 연구 프로토타입이다. 설계 글은 11-01에 다듬어졌고, 11-01~02 보도가 잇따랐다. (GitHub 저장소 README·설계 글·복수 보도 기반)

## 내용

- **아키텍처**: Router가 허용된 요청을 격리된 Worker 세션에 배정하고, 각 Worker가 별도 세션·디렉토리에서 작업해 결과를 원본 대화로 돌려준다. 이벤트 기반 설계, 비동기 다중 채널 상호작용, 컴퓨트·상태·환경 분리, 외부 Watchdog의 5개 모듈이 설계 글의 뼈대다.
- **목표**: 한 번에 하나의 태스크가 아니라 여러 태스크를 병렬로 돌리고, 스스로 일을 찾아내고, 실패에서 회복하는 에이전트. 사람의 역할은 결정·승인으로 올라간다.
- **규모와 반응**: 단일 커밋(약 15,200줄 TypeScript, 110개 파일, 테스트 약 790건)으로 공개됐고, 11-01 오전 기준 약 4,100개 스타, 11-02 기준 약 11,400개 스타로 보도됐다. DeepSeek Harness 본체는 약 267,714개 스타로 전해진다.
- **주의사항(README 명시)**: "연구 프로토타입, 참고용"이며 공식 제품이 아니고 내부 버전과도 다르다. Worker는 운영자 OS 사용자로 승인 없이 명령을 실행할 수 있어, 별도 OS 계정·에이전트 전용 자격증명으로만 돌려야 한다는 경고가 보도에서 반복된다.
- **실험 수치**: DeepSeek 자체 합성 테스트에서 중앙값 12.4분(단일 세션+서브에이전트 13.8~20.4분)이나, 실행당 캐시 토큰 약 2,320만 개로 훨씬 많았다. 독립 검증은 없다.

## 맥락

- [[patterns/agent-planning-to-implementation]] — 에이전트 파이프라인과 HITL 게이트
- [[concepts/plan-then-verify-agent-planning]] — 실행 전 검증과 안전 기권 패턴 (2026-11-01 위키)
- [[concepts/claude-duet-proactive-agent]] — 상시 대기 에이전트 리서치 프리뷰 (2026-10-22 위키)
- [[concepts/deepseek-v41-flash-1017]] — DeepSeek V4.1-Flash, 오픈웨이트 저가 모델 (2026-10-18 위키)
