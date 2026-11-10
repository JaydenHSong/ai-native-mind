---
title: "DeepSeek dsh-superagent — 상시 온라인 코딩 에이전트 연구 프로토타입 (MIT)"
category: concepts
tags: [deepseek, dsh-superagent, coding-agent, open-source, super-agent]
created: 2026-11-02
updated: 2026-11-02
sources:
  - "raw/articles/2026-11-02-deepseek-dsh-superagent-prototype.md"
related:
  - "[[patterns/agent-planning-to-implementation]]"
  - "[[concepts/plan-then-verify-agent-planning]]"
  - "[[concepts/claude-duet-proactive-agent]]"
status: draft
confidence: high
---

# DeepSeek dsh-superagent — 상시 온라인 코딩 에이전트 연구 프로토타입 (MIT)

## 쉽게 읽기

**비유**: 개발팀 채팅방에 상주하면서 "이 버그 고쳐줘"라는 말을 듣자마자 혼자 일감을 쪼개고, 각자 방에서 일한 뒤 PR로 결과를 돌려주는 팀원이다. 단, 아직은 연구용 시제품이라 현장 투입 전에 격리가 필수다.

| 용어 | 풀이 |
|------|------|
| **Router/Worker** | Router가 요청을 받아 격리된 Worker 세션에 배정하는 2층 구조 |
| **Watchdog** | 에이전트 외부에서 작업을 감시·제어하는 모듈 |
| **Feishu** | ByteDance의 업무용 채팅 앱, Slack과 유사 |

## 한줄 정의

2026-10-31 공개 — DeepSeek Harness 위에서 하나의 GitHub 저장소를 대상으로 요청을 받아 PR로 답하는, 상시 온라인·병렬·자기 회복을 지향하는 코딩 에이전트 연구 프로토타입.

## 핵심 내용

- **아키텍처 5모듈**: Router/Worker 이중 구조, 이벤트 기반 설계, 비동기 다중 채널 상호작용, 컴퓨트·상태·환경 분리, 외부 Watchdog.
- **동작**: GitHub(선택적으로 Feishu)의 허용된 요청·팀 규칙에 따라 일감을 만들고, Worker가 별도 세션·디렉토리에서 작업한 뒤 결과를 원본 대화로 반환한다. 병합은 Delivery requirements 프롬프트가 제어하며, 에이전트 계정의 자동 병합은 기본값이 아니다.
- **공개 규모**: 단일 커밋, 약 15,200줄 TypeScript·110개 파일·테스트 약 790건, 설계 문서 9건. 11-01 오전 약 4,100개 스타에서 11-02 약 11,400개 스타로 보도됐다.
- **실험 수치(자체)**: 합성 테스트 중앙값 12.4분(단일 세션+서브에이전트 13.8~20.4분), 다만 실행당 캐시 토큰 약 2,320만 개로 2~4배 많았다.
- **실행 조건**: DeepSeek Harness 0.2.1 alpha, Node.js 22.19+, pnpm, git, tmux, Python 3.8+, GitHub CLI 2.48+, 모델 제공자, 에이전트 전용 GitHub 계정.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트의 근무 형태가 바뀐다**: 호출하면 일하는 도구가 아니라, 상주하면서 일을 찾아오는 팀원이 설계의 기준이 되고 있다. 1인 개발자에게는 '내가 부르는 에이전트'에서 '내 저장소를 지키는 에이전트'로의 전환이다.
2. **격리가 설계의 일부다**: Worker가 운영자 권한으로 승인 없이 명령을 실행할 수 있다는 경고는, 프로토타입을 돌릴 때 별도 OS 계정·전용 자격증명·제한된 저장소 범위가 선택이 아니라 전제임을 보여준다.
3. **비용은 토큰으로 드러난다**: 빨라진 중앙값 뒤에 캐시 토큰 2,320만 개가 있다. 속도만 보고 도입하면 토큰 비용이 조용히 불어난다. PTV의 실행 전 검증과 함께 보면, 상시 에이전트에는 '무엇을 얼마나 돌릴 것인가'의 예산 게이트가 필요하다.

## 한계 (명시)

- README가 명시한 연구 프로토타입이며 공식 제품이 아니고, 코드가 내부 버전·설계 글과도 다르다. 일부 설계는 미구현이다.
- 실험 수치는 DeepSeek 자체 합성 테스트로 독립 검증이 없다.
- Harness는 미감사 프리뷰 소프트웨어로 보도되며, 최근 샌드박스 탈출 결함이 수정됐다는 지적이 있다.

## 참고 소스

- [DeepSeek super-agent 원본](raw/articles/2026-11-02-deepseek-dsh-superagent-prototype.md)
