---
title: "Anthropic Anvil 공개 — 자동 레드티밍이 인간 전문가를 능가한다, 생물·사이버 양쪽에서 (11-12)"
source_url: "https://safeguards.anthropic.com/2026/automated-red-teaming/"
source_type: "news"
authors: ["Anthropic"]
published: 2026-11-12
fetched: 2026-11-13
tags: [anthropic, anvil, red-teaming, safeguards, biosecurity]
status: raw
---

# Anthropic Anvil 공개 — 자동 레드티밍이 인간 전문가를 능가한다, 생물·사이버 양쪽에서 (11-12)

> Anthropic이 11-12 safeguards 블로그에서 자동 레드티밍 시스템 Anvil을 공개했다. 목표는 Responsible Scaling Policy의 기준 — 전문가 인간보다 세이프가드 취약점을 더 잘 찾는 것. 생물 분야에서는 인간 버그바운티 레드팀 전원을 합친 것보다 강한 탈옥을 더 빠르고 효율적으로 찾아냈다.

## 내용

- **생물 분야**: 8문항 바이오 버그바운티에서 인간은 7주 이상·430시간을 들여 8문항 중 1문항에서만 고위험 탈옥을 찾았다. Anvil은 테스트한 모든 분류기에서 최고의 인간 탈옥과 동등하거나 더 강한 탈옥을 24~48시간 안에 찾아냈다.
- **사이버 분야**: Anvil은 세이프가드가 걸린 모델이 알려진 Chrome·Firefox 자바스크립트 엔진 취약점의 완전한 작동 익스플로잇을 작성하게 만들었다 — 임의 코드 실행까지 도달했다.
- **작동 방식**: 세이프가드를 끈 프론티어급 내부 Claude 버전을 사용한다. Anthropic은 공격자도 곧 약한 세이프가드의 모델로 비슷한 시스템을 만들 수 있다고 경고했다.
- **의미**: 레드티밍 자체가 자동화의 대상이 됐다. 세이프가드 평가는 인간 시간(주 단위)에서 기계 시간(일 단위)으로 바뀌고, 방어 측이 공격 측보다 먼저 자동화해야 하는 이유가 된다.
- **한계**: 수치는 Anthropic 자체 발표다. 독립 재현·외부 검증은 아직 없다. '인간보다 강하다'는 Anthropic이 정한 분류기·문항 기준에서의 결과다.

## 맥락

- [[concepts/anthropic-worse-together-multi-agent]] — 멀티에이전트 팀은 단일 코디네이터에 진다, MAMUBench (2026-11-12)
- [[concepts/openai-daybreak-red-team-defense-factory]] — OpenAI Daybreak 보안 에이전트, 같은 날 공개 (2026-11-13)
- [[concepts/llm-evaluation]] — LLM 출력 체계적 테스트, Evals 방법론
