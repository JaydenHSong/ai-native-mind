---
title: "DeepSeek Harness, 일일 사용자 154만 명 — 오픈 에이전트 프레임워크의 플러그인 마켓플레이스 추진 (11-05)"
source_url: "https://www.mlllm.io/articles/3772-deepseek-reports-1-54-million-users-and-92-trillion-daily-tokens-for-its-harness-agent-framework/"
source_type: "news"
authors: ["DeepSeek", "South China Morning Post"]
published: 2026-11-09
fetched: 2026-11-10
tags: [deepseek, harness, agent-framework, plugins, open-source]
status: raw
---

# DeepSeek Harness, 일일 사용자 154만 명 — 오픈 에이전트 프레임워크의 플러그인 마켓플레이스 추진 (11-05)

> DeepSeek의 오픈소스 에이전트 프레임워크 Harness가 출시 3개월 만에 일일 활성 사용자 154만 명, 일일 토큰 소비 약 92조 개에 도달했다고 DeepSeek 팀이 11-05 밝혔다(SCMP 11-08 보도). 약 35,000개 서드파티 플러그인이 쌓였고, 공식 플러그인 마켓플레이스와 개발자 지원 프로그램을 추진한다.

## 내용

- **규모(DeepSeek 자체 발표, 독립 검증 없음)**: 11-04 기준 일일 활성 사용자 154만 명(공식 API 경유 사용자만 집계), 일일 토큰 소비 약 92조 개. 9-30 기준 7일 평균 일일 사용자 27.1만 명에서 약 5.7배 증가했다. 활성 사용자의 약 60%가 최소 1개 서드파티 플러그인을 만들거나 설치했다. 사용자·토큰 집계 방법론은 공개되지 않았다.
- **일정**: Harness v0.1은 2026-08-13 출시(MIT 라이선스, GitHub), 데스크톱 앱은 9-29 출시. 0.2.2-rc.1은 11-04에 공개됐으며 6개 언어 추가·Git worktree·Codex/Claude CLI로 작업을 넘기는 실험적 subagent_oar 플러그인을 포함한다. 명령어는 `dsh`, `npx @deepseek-ai/dsh web`으로 실행한다. 프로젝트는 아직 developer preview이며 보안 감사를 받지 않았다고 명시한다.
- **다음 단계**: 공식 플러그인 마켓플레이스(검증된 배포·보안 심사 포함)와 플러그인 개발자 지원 프로그램(토큰 인센티브·기술 교류·홍보)을 계획 중이다. 출시일은 미정. 현재 플러그인 설치는 패키지명을 직접 입력하는 방식이라 발견성이 낮다.
- **아키텍처**: 'everything-is-a-plugin' 설계로, 내장 기능과 서드파티 확장이 동일한 실행 인터페이스를 공유한다. 커뮤니티에서는 플러그인 과부하·루핑·토큰 과소비 문제가 지적되고 있다. Harness 팀은 2026-10에 첫 제품 부문을 신설했고, Jane Street 출신 Cui Tianyi가 이끌고 있다.
- **날짜 주의**: 수치는 11-05 저녁 DeepSeek 팀의 WeChat 게시물에서 처음 공개됐고 SCMP가 11-08 보도했으며, 11-09~10에 여러 매체가 재보도했다. 본 기사는 11-09 보도분을 기준으로 수집한 따라잡기(catch-up) 항목이다.

## 맥락

- [[concepts/deepseek-dsh-superagent-prototype]] — DeepSeek dsh-superagent 연구 프로토타입, 상주 코딩 에이전트·MIT (2026-11-02)
- [[concepts/deepseek-v41-flash-1017]] — DeepSeek V4.1-Flash-1017, MIT 오픈웨이트·태스크당 $0.2·Claude Opus 5의 1/42 가격 (2026-10-18)
- [[concepts/dhs-deepseek-federal-register-ban]] — DHS 딥시크 연방 금지 공식화, Federal Register 게재 — 제3자 제품 포함 (2026-10-21)
- [[concepts/claude-fable-5-2-mythos-5-2]] — Anthropic Claude Fable 5.2·Mythos 5.2 출시, 20% 가격 인하·최대 30% 빨라져 (2026-11-09)
