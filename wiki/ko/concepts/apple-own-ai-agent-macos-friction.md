---
title: "애플, 자체 AI 에이전트 개발 중 — 채용공고 삭제·macOS 27.3은 경쟁 에이전트 승인 14단계로 (11-19~20)"
category: concepts
tags: [apple, agents, computer-use, macos, platform]
created: 2026-11-21
updated: 2026-11-21
sources:
  - "raw/articles/2026-11-21-apple-own-ai-agent-macos-friction.md"
related:
  - "[[concepts/apple-agentic-siri-ternus-push]]"
  - "[[concepts/apple-10k-ai-agent-risk]]"
  - "[[concepts/websites-block-ai-agents]]"
status: draft
confidence: medium
---

# 애플, 자체 AI 에이전트 개발 중 — 채용공고 삭제·macOS 27.3은 경쟁 에이전트 승인 14단계로 (11-19~20)

## 쉽게 읽기

**비유**: 지금까지 "남이 만든 AI 비서는 우리 컴퓨터에서 쓰기 어렵게" 해 두었던 애플이, 이제 자기네 AI 비서를 직접 만들고 있다. 채용공고를 냈다가 하루 만에 슬그머니 지웠고, 같은 시기 맥OS 새 베타는 남의 AI 비서를 켜는 절차를 4단계에서 14단계로 늘렸다. "우리 집 규칙은 우리가 정한다"는 플랫폼의 힘이 그대로 드러나는 장면이다.

| 용어 | 풀이 |
|------|------|
| **컴퓨터 사용 에이전트** | 사람 대신 화면을 보고 클릭하고 앱을 다루는 AI — 컴퓨터를 직접 쓰는 비서 |
| **서드파티** | 애플이 아닌 다른 회사 — 여기서는 Anthropic·OpenAI 같은 경쟁 에이전트 |
| **DOJ 소송** | 미국 법무부가 애플을 상대로 낸 반독점 소송 — 서드파티 접근 차단이 쟁점 |

## 한줄 정의

블룸버그 Mark Gurman이 2026년 11월 19일 보도한 바에 따르면 애플은 웹을 탐색하고 앱을 제어하며 코드를 쓰고 디버그하는 자율 AI 에이전트를 개발 중이다. 근거는 이번 주 게시된 'Senior Engineering Manager, Agentic AI – Proactive' 채용공고다. 애플은 11월 20일 해당 공고를 삭제했다. 같은 시기 macOS 27.3 베타는 외부 AI 에이전트의 승인을 더 까다롭게 만들고 있다.

## 핵심 내용

- **에이전트상**: "유능한 사람이 컴퓨터를 쓰는 것처럼 컴퓨터를 쓸 수 있는" 적극적·범용 에이전트 — 웹 탐색, 앱 간 작업, 명령 실행, 코드 작성·디버깅, 서비스 호출, 전문 서브에이전트 조율. Siri·UI Frameworks·Apple Foundation Models 팀과 협업.
- **일정**: 이르면 2027년 말 출시 목표이나 개발은 초기 단계. 애플은 논평 거부.
- **조직**: 2026년 9월 1일 취임한 신임 CEO 존 터너스(John Ternus)가 소프트웨어 총괄 크레이그 페더리기에게 개발 가속을 압박하고 있다(Techstrong.ai 보도). [[concepts/apple-agentic-siri-ternus-push]]의 연장선이다.
- **시장 반응**: 보도 직후 Anthropic 시간외 -4.7%($92.60), Meta 약 -2%.
- **공고 삭제**: 애플은 11월 20일 해당 채용공고를 삭제했다.
- **macOS 27.3 베타**: 외부 AI 에이전트에 대한 동의 경고·승인 절차 강화. Device Control·Data Access 설정 분리로 ChatGPT 컴퓨터 사용(computer-use) 지원을 켜는 과정이 기존 4단계에서 14단계로 늘어난다. 경쟁사는 자사 영역 보호로 해석하고 있으며, 서드파티 접근 차단 관련 DOJ 소송이 계류 중이다.

## 왜 중요한가 (1인 개발자 관점)

1. **자체 에이전트가 없는 마지막 대형 플랫폼이 들어온다**: 애플이 진입하면 Claude·Muse 같은 서드파티 에이전트의 유통을 플랫폼이 통제하는 문제가 현실이 된다. [[concepts/websites-block-ai-agents]]의 "누가 들어올 수 있는가"가 웹사이트에서 운영체제(OS) 차원으로 올라갔다.
2. **마찰(friction) 자체가 전략이다**: 기능을 막지 않고 절차만 14단계로 늘리는 방식은, 사용자를 쫓아내지 않으면서 경쟁 에이전트의 채택을 늦춘다. "차단"보다 "귀찮게 만들기"가 더 조용한 플랫폼 권력이다.
3. **DOJ 소송이 배경에 있다**: 서드파티 접근 차단 관련 소송이 계류 중인데도 애플이 승인 절차를 강화하고 있다. 소송 결과에 따라 이 마찰이 유지될지, 풀릴지가 갈린다.

## 한계 (명시)

- 에이전트 개발 자체는 채용공고를 근거로 한 블룸버그 보도로, 애플이 공식 확인한 바 없다. 출시 시기(2027년 말)는 목표일 뿐 확정 일정이 아니다.
- 공고 삭제 이유도 확인되지 않았다 — 채용 완료, 전략 변경, 보도 후 조치 등 해석만 가능하다.
- macOS 27.3의 14단계 절차는 베타 기준이며 정식 출시 시 달라질 수 있다.
- confidence는 medium — Bloomberg·TechCrunch 교차이나 애플 미확인·초기 단계 보도.

## 관련 개념

- [[concepts/apple-agentic-siri-ternus-push]] — Apple 에이전트형 Siri 추진, Ternus CEO의 가속 요구·2027년 목표 (2026-11-09)
- [[concepts/apple-10k-ai-agent-risk]] — Apple 10-K, AI 에이전트 무단 행동을 사업 리스크로 명시 (2026-11-05)
- [[concepts/websites-block-ai-agents]] — 플랫폼의 에이전트 차단, 웹사이트 차원에서 OS 차원으로 확장되는 흐름 (2026-10-18)

## 참고 소스

- [애플, 자체 AI 에이전트 개발 중 — 채용공고 삭제·macOS 27.3은 경쟁 에이전트 승인 14단계로 (TechCrunch·Bloomberg, 11-19~20)](raw/articles/2026-11-21-apple-own-ai-agent-macos-friction.md)
