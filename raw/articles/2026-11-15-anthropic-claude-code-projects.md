---
title: "Anthropic Claude Projects 재설계 — 코디네이터가 병렬 스레드 세션 조율 (11-14)"
source_url: "https://claude.com/resources/articles/projects-redesigned"
source_type: "news"
authors: ["Anthropic"]
published: 2026-11-14
fetched: 2026-11-15
tags: [anthropic, claude-code, projects, multi-agent, orchestration]
status: raw
---

# Anthropic Claude Projects 재설계 — 코디네이터가 병렬 스레드 세션 조율 (11-14)

> Anthropic이 11-14 Claude Projects를 파일 폴더에서 조율된 작업 세션 집합으로 재설계했다. 사용자가 목표를 적으면 코디네이터 Claude가 범위를 정하고 병렬 스레드에 일을 나눠주고 결과를 검토·합친다. 휴대폰에서도 진행을 조율할 수 있고, 사용자가 자리를 비워도 작업이 계속된다.

## 내용

- **구조**: 프로젝트는 "일을 하는 스레드(thread)와 이를 지휘하는 코디네이터"로 구성된다. 각 스레드는 자기 브랜치와 저장소 복사본에서 도는 Claude Code 클라우드 세션이다. 스레드는 필요하면 서브에이전트·루프·워크플로우로 자기 일을 더 쪼갤 수 있다. 두 스레드가 같은 코드를 건드리면 겹침은 일반 PR의 머지 충돌로 드러난다.
- **동작**: 코디네이터가 요청 범위를 정하고 작업을 위임·조율·검토해 최종 결과를 합친다. 저장소가 연결되면 스레드가 PR을 열고 테스트를 돌리고, 문서면 읽고 초안을 쓴다. 모든 스레드는 공유 메모리에 기여하고 거기서 가져가며, 프로젝트 라이브러리가 사용자가 올린 파일과 Claude가 만든 산출물을 모은다. 체크인 빈도·새 스레드 시작 빈도·업데이트 상세도를 사용자가 조절할 수 있다.
- **출시 범위**: 오늘부터 Claude Code 클라우드 세션을 쓰고 웹·데스크톱에 기존 프로젝트가 없는 일부 Pro·Max 구독자에게 베타로 제공된다. 다음 주에 같은 요금제의 Claude Code 사용자로 확대하고, 이후 Claude 전체와 Team·Enterprise 요금제로 넓힌다. 기존 프로젝트는 그대로 동작하고 롤아웃이 닿으면 업그레이드된다. 접근이 없으면 대기자 명단(claude.com/form/projects)에 등록한다.
- **비용·한계**: 프로젝트가 여러 스레드를 동시에 돌리면 각 스레드가 온전한 Claude Code 세션이라 사용량 한도에 더 빨리 도달한다. 프로젝트별 사용량을 확인하고 코디네이터 채팅과 워커 스레드의 모델·노력(effort) 수준을 각각 고를 수 있다. 보도에 따르면 하루 신규 스레드 200개 상한이 있다(AlphaSignal 인용). 스레드는 지금은 클라우드에서만 돌고, 로컬 머신에서 내 도구·코드·네트워크 안에서 도는 기능은 "곧" 온다고 한다.
- **예시**: 체크아웃 p75 지연을 줄이겠다는 목표를 주면 각 엔드포인트 프로파일링·최적화 테스트·PR 열기를 병렬 스레드로 수행한다. API·웹·모바일 저장소를 연결하고 구식 v1 엔드포인트 은퇴를 지시하면 저장소마다 스레드를 만들어 호출자를 이전하고 테스트를 돌린 뒤 어떤 PR부터 합쳐야 하는지 알려준다.

## 맥락

- [[concepts/ai-orchestration]] — 여러 AI 에이전트를 조율하는 6대 패턴, Projects의 코디네이터 구조와 연결 (2026)
- [[concepts/anthropic-worse-together-multi-agent]] — 다중 에이전트 팀이 단일 코디네이터보다 열등하다는 Anthropic 연구, 코디네이터 중심 설계의 근거 (2026-11-11)
- [[concepts/anthropic-claude-workplace-tools]] — Claude 오피스 번들(Meetings·Sheets·Whiteboards·Data), 같은 주 Anthropic의 작업 공간 확장 (2026-11-10)