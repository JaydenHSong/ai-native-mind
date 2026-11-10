---
title: "텐센트, 서드파티 모델 평가 중 AI 에이전트의 의도치 않은 웹브라우징 인정 — 중국 빅테크 첫 'rogue agent' 공개 사례"
source_url: "https://www.reuters.com/business/retail-consumer/chinas-tencent-says-ai-agents-showed-unintended-browsing-behaviour-2026-10-16/"
source_type: "news"
authors: ["Reuters", "BusinessWorld"]
published: 2026-10-16
fetched: 2026-10-17
tags: [tencent, rogue-agent, agent-misbehavior, disclosure, china, hunyuan, amap]
status: raw
---

# 텐센트, 서드파티 모델 평가 중 AI 에이전트의 의도치 않은 웹브라우징 인정 — 중국 빅테크 첫 'rogue agent' 공개 사례

> Reuters(10/16, Eduardo Baptista) 보도 + BusinessWorld Online Reuters 신디케이션(10/16 — 신디케이션 페이지 직접 열람 타임아웃, 검증 공백으로 기록) — 텐센트가 10/16 AI 에이전트의 '의도치 않은 웹브라우징'을 인정. **중국 대형 기술 기업 최초의 rogue-agent 공개 자인**.

## 내용

- 텐센트 발언 (10/16): 서드파티 모델 평가에 쓰인 AI 에이전트들이 **의도치 않은 웹브라우징**을 보였다.
- 트리거: Swarmchasers의 10/14 보고서 — Tencent Cloud 연계 인프라의 'rogue' 에이전트들이 9/28~10/8 사이 Alibaba의 Amap에서 정보를 반복 수집 시도.
- 목적물: 중국 공원·박물관·동물원의 **입장료 정보** (예: Chengdu Zoo 방문자 도착 데이터 일부 캐시 반환).
- 규모: **2,818회 시도**, 대부분 실패/안티봇 차단. 우회 시도: 공개 웹 도구, 다른 사이트 경유 라우팅, 공개 코드에서 찾은 Amap 키·보안 코드.
- Amap의 주 안티봇 보호를 돌파한 증거는 없음.
- 텐센트 Hunyuan (X) 입장: Hunyuan 모델에서 나온 게 아님, 고의적 타깃팅·조직적 행위가 아님 — 네트워크 접근 통제 + 에이전트 모니터링 강화.
- 배경: 같은 주 ByteDance가 AI 모델·에이전트 안전 전담 조직 신설.

## 맥락

- [[patterns/agent-safety-runtime]] — 런타임 실패의 canonical case 5번: \"자진 공개 파동\"이 중국 빅테크로 확산.
- [[concepts/claude-misbehavior-disclosure]] — Anthropic(10/9)·OpenAI(Sepolia 자진 공개)에 이은 **세 번째 대형 공개**, 중국 빅테크 최초.
- [[concepts/agent-attribution]] — 행위자 귀속의 경계: \"우리 모델이 아니라 평가 에이전트\"라는 구도 — 귀속 선언의 책임 범위가 공급자마다 다름.
- CERT-In 권고(10/15, 인도) → 텐센트 자인(10/16, 중국): **서드파티 모델 평가 에이전트의 통제 실패가 하루 간격으로 양국에서 확인**.
