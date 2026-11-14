---
title: "FBI 경고 — ARTEX AI 에이전트, 침입에서 권한 탈취까지 3시간 미만 (11-13)"
source_url: "https://cybersecuritynews.com/fbi-reveals-hackers-artex-ai-usage/"
source_type: "news"
authors: ["Cybersecurity News"]
published: 2026-11-13
fetched: 2026-11-14
tags: [fbi, artex, ai-security, hacking, llm-agents]
status: raw
---

# FBI 경고 — ARTEX AI 에이전트, 침입에서 권한 탈취까지 3시간 미만 (11-13)

> FBI가 11-13 FLASH 경보(FLASH-20261113-001)를 냈다. 오픈소스 자율 침투 테스트 프레임워크 ARTEX를 범죄·국가 연계 행위자들이 무기화하고 있다. 일부 침입은 최초 표적 식별에서 권한 탈취까지 3시간이 채 걸리지 않았다.

## 내용

- **ARTEX란**: Go로 작성된 오픈소스 보안 테스트 프레임워크. LLM 에이전트에 연결돼 평문 목표를 명령으로 바꿔 실행한다. Claude·GPT·DeepSeek·GLM·Grok·Kimi에 연결되고, 공격자 배포에서는 DeepSeek Flash가 가장 흔하다. 악성코드 패밀리가 아니라 테스트 도구다.
- **속도**: 에이전트가 목표 스캔·도구 실행·결과 검토·실패 단계 조정을 제한적 인간 개입으로 수행한다. Google 관찰로는 개별 자동 버스트가 2~25초. 일부 침입은 3시간 미만 만에 권한 접근에 도달했다(모든 배포가 그렇다는 뜻은 아니다).
- **관측 범위**: 최소 2026-08부터 금융·정부·기술·방위·에너지·헬스케어에서 사용 관측. 한국 금융기관 공격으로 약 67,000명 개인정보 유출. ConnectWise Cloud Backup 공급망 침해로 2,250개 이상 하위 테넌트 표적 시도(확정 침해 수가 아니다). 11월 초 기준 공개 노출 콘솔 1,600개 이상(노출이 곧 악용은 아니다).
- **기타 사례**: Microsoft는 ARTEX를 중국 국가 연계 Storm-0940과 연결했다. WorkOS는 영업 앱 무단 접근을 탐지해 ARTEX 연관을 확인했다(프로덕션 데이터 영향 증거 없음). 한 사례에서는 에이전트가 GitHub 비밀 검색에서 Azure Key Vault 탈취까지 5분 만에 진행했다.
- **현황**: 개발자가 10-08 GitHub 저장소를 삭제했으나 포크·복사본이 유통 중이다. FBI 권고: 노출된 관리 도구 제한, 앱 권한 축소, 저장소 비밀 스캔.

## 맥락

- [[concepts/openai-daybreak-red-team-defense-factory]] — OpenAI Daybreak, 에이전트 보안 테스트의 방어 쪽 (2026-11-12)
- [[concepts/anthropic-anvil-automated-red-teaming]] — Anthropic Anvil 자동 레드티밍, 인간 전문가 상회 주장 (2026-11-12)
- [[concepts/tool-use]] — LLM 에이전트가 도구를 호출하는 메커니즘, 공격 자동화의 기반 (2026-04)
