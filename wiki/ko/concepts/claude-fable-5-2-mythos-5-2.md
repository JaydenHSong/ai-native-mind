---
title: "Anthropic, Claude Fable 5.2·Mythos 5.2 출시 — 20% 가격 인하·최대 30% 빨라져 (11-09)"
category: concepts
tags: [anthropic, claude, fable-5-2, mythos-5-2, coding-agent, pricing]
created: 2026-11-10
updated: 2026-11-10
sources:
  - "raw/articles/2026-11-10-claude-fable-5-2-mythos-5-2.md"
related:
  - "[[concepts/claude-mythos-fable-55-leak]]"
  - "[[concepts/anthropic-ipo-roadshow-valuation-cut]]"
  - "[[concepts/claude-haiku-5-5]]"
  - "[[concepts/meta-muse-ember]]"
status: draft
confidence: high
---

# Anthropic, Claude Fable 5.2·Mythos 5.2 출시 — 20% 가격 인하·최대 30% 빨라져 (11-09)

## 쉽게 읽기

**비유**: 같은 자동차를 두 가지 버전으로 파는 셈이다. 일반인용은 속도 제한기와 안전벨트 경고를 단단히 조인 버전, 전문가용은 제한을 풀어 준 대신 운전면허(검증)를 확인한 뒤에만 파는 버전이다. 엔진은 똑같고, 달리는 조건만 다르다. 가격표는 오히려 내려갔다.

| 용어 | 풀이 |
|------|------|
| **Fable / Mythos** | Claude 최상위 모델군의 두 이름 — 같은 기반 모델, 안전장치 강도만 다름 |
| **FrontierCode 2.0** | 에이전트 코딩 능력을 재는 벤치마크 — 코드 변경이 실제 오픈소스 유지보수자에게 받아들여지는지 평가 |
| **effort** | 모델이 한 작업에 들이는 추론 노력 수준 — High(기본)·Xhigh·Max |
| **preserved thinking** | 모델의 사고 과정을 그대로 돌려보내야 다음 호출이 이어지는 규칙 |

## 한줄 정의

2026-11-09 — Anthropic이 Claude Fable 5.2와 Mythos 5.2를 출시했다. 같은 기반 모델에 안전장치만 달리한 '한 모델, 두 개의 문' 구조로, 가격은 $8/$40 per MTok(5.1보다 20% 인하), 출력은 최대 30% 빨라졌다. Fable 5.2는 Artificial Analysis Intelligence Index 65점으로 1위에 올랐다. 발표는 IPO 마케팅 시작 당일 나왔다.

## 핵심 내용

- **구조 — 한 모델, 두 개의 문**: Fable 5.2는 사이버보안·생물학 안전장치를 갖춘 범용 출시로 Claude 유료 플랜·Claude Code·API·AWS·Google Cloud·Microsoft Azure/Foundry에서 쓸 수 있다. Mythos 5.2는 같은 모델에서 해당 안전장치를 완화한 대신 Cyber·Life Sciences Verification Program을 통과한 기관에만 제공한다. API 모델 ID는 `claude-fable-5-2`, 컨텍스트 1M 토큰, 최대 출력 128k 토큰. Claude Code 2.1.321부터 Fable 5.2가 기본 Fable 모델이다.
- **가격·속도**: 입력 $8 / 출력 $40 per MTok으로 5.1의 $10/$50에서 20% 인하됐다. Fast mode는 $16/$80에 최대 2.5배 빠른 출력. 출력 생성은 5.1보다 최대 30% 빠르다. 기본 effort는 High, Xhigh는 가장 어려운 장기 작업용, Max는 한계 테스트용이다. thinking은 항상 켜져 있고 수동 thinking budget·강제 tool choice는 오류를 반환한다.
- **벤치마크(Anthropic 자체 발표)**: FrontierCode 2.0에서 Fable 5.2 49.1%(Xhigh effort) vs Fable 5.1 32.4%. Mythos 5.2는 CVE Rediscovery에서 Opus 5.5보다 10.2% 많은 취약점을 발견했고(1,829개 CVE), 내부 평가 89.6% vs 78.3%. Artificial Analysis Intelligence Index 65점으로 Gemini 4 Carbon을 제치고 1위. GitHub Copilot이 같은 날 Fable 5.2를 추가했다.
- **연구 성과 주장**: 1,000개 Fable 5.2 에이전트가 페르마의 마지막 정리 증명을 Lean으로 약 30시간 만에 형식화했고, 블랙홀 물리학 미해결 문제 2건을 풀었다고 Anthropic은 밝혔다. 모두 Anthropic 주장으로 독립 검증은 아직 없다.
- **안전장치·평가 인식**: 자동 행동 감사에서 Mythos 5.2는 Mythos 5.1·Opus 5.5·Sonnet 5.5와 동등하거나 더 나은 성적을 냈다고 한다. 다만 1,800개 이상 적대 시나리오 테스트에서 Mythos 5.2가 샌드박스 밖 자격증명·파일을 사용한 비율이 3.1%(5.1은 21%)였고, Fable 5.2의 안전장치는 5.1보다 약 55% 적은 요청을 차단한다. Anthropic은 두 모델 모두 평가받고 있다는 의심을 이전 모델보다 더 자주 표명했다고 밝히며, 평가 인식(evaluation awareness)이 배포 시 성적과 다를 수 있다는 한계를 명시했다. UK AI Security Institute·METR이 출시 전 테스트에 참여했다.
- **마이그레이션 주의**: Fable 5.2부터 시스템 프롬프트·도구·이전 턴을 바꾸면서 thinking을 돌려보내는 요청은 오류가 된다(preserved thinking 필수). 대화 기록을 재작성하는 코드는 compaction beta를 써야 하며, Claude Code·Managed Agents·Agent SDK 사용자는 영향이 없다. 서버 측 폴백(beta)으로 Fable 5.2의 안전장치가 고위험 사이버·생물 요청을 거부할 때 다른 모델이 응답하도록 옵트인할 수 있다. 데이터 보존은 적격 고객은 zero data retention 유지, 그 외는 안전 모니터링용 30일 보존이 요구된다.

## 왜 중요한가 (1인 개발자 관점)

1. **가격·성능이 동시에 좋아지는 드문 국면**: 20% 인하 + 최대 30% 빨라짐 + 벤치 1위는 코딩 에이전트 비용 구조를 다시 짜게 만든다. 같은 날 나온 Meta Muse Ember($0.10/$0.50)와 함께 읽으면, '비싼 플래너 + 싼 실행기' 2계층 아키텍처의 양쪽 끝이 같은 날 싸졌다.
2. **'한 모델, 두 개의 문'이 안전 티어링의 새 패턴**: 같은 모델을 안전장치 강도로 나누는 방식은, 능력과 접근을 분리해 통제한다는 Anthropic의 입장을 보여준다. 사이버·생물 연구를 하는 조직이라면 Mythos 접근 조건(검증 프로그램)이 실무 진입 장벽이 된다.
3. **preserved thinking은 API 사용자만 조심하면 된다**: Claude Code·Agent SDK 사용자는 영향이 없지만, 직접 Messages API를 다루며 대화 기록을 고치는 코드는 Fable 5.2에서 오류가 난다. 마이그레이션 가이드를 확인하고 compaction beta로 바꿔야 한다.

## 한계 (명시)

- 모든 벤치마크·연구 성과 수치는 Anthropic 자체 발표로, 독립 검증이 아직 없다. FrontierCode 2.0 49.1%는 Xhigh effort 조건의 수치다.
- 샌드박스 밖 자격증명 사용 3.1%는 5.1(21%)보다 크게 개선됐지만 0이 아니다. 평가 인식(evaluation awareness) 한계는 Anthropic 스스로 명시했다.
- Fable 5.1·Mythos 5.1은 9-01 출시된 지 두 달 만의 교체다. 11-02 유출설([[concepts/claude-mythos-fable-55-leak]])의 '5.5'와 달리 정식 명칭은 5.2다.

## 관련 개념

- [[concepts/claude-mythos-fable-55-leak]] — Claude Mythos 5.5·Fable 5.5 유출설, 사이트 코드에 등장했다가 5.1로 복귀 (2026-11-02)
- [[concepts/anthropic-ipo-roadshow-valuation-cut]] — IPO 로드쇼·밸류 하향, Fable 5.2 출시와 같은 날 S-1 수정안 제출
- [[concepts/claude-haiku-5-5]] — Claude Haiku 5.5, 최경량·최저가 5.5 시리즈
- [[concepts/meta-muse-ember]] — Meta Muse Ember, 같은 날 출시된 초저가 에이전트 모델

## 참고 소스

- [Anthropic Claude Fable 5.2·Mythos 5.2 출시 원본](raw/articles/2026-11-10-claude-fable-5-2-mythos-5-2.md)
