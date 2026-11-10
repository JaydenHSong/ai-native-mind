---
title: "Anthropic, Claude Fable 5.2·Mythos 5.2 출시 — 20% 가격 인하·최대 30% 빨라져 (11-09)"
source_url: "https://www.reuters.com/technology/anthropic-unveils-new-fable-mythos-models-competition-heats-up-ahead-ipo-2026-11-09/"
source_type: "news"
authors: ["Anthropic", "Reuters"]
published: 2026-11-09
fetched: 2026-11-10
tags: [anthropic, claude, fable-5-2, mythos-5-2, coding-agent, pricing]
status: raw
---

# Anthropic, Claude Fable 5.2·Mythos 5.2 출시 — 20% 가격 인하·최대 30% 빨라져 (11-09)

> Anthropic이 11-09 Claude Fable 5.2와 Mythos 5.2를 출시했다. 같은 기반 모델에 안전장치만 달리한 '한 모델, 두 개의 문' 구조다. 가격은 $8/$40 per MTok으로 5.1보다 20% 내렸고, 출력은 최대 30% 빨라졌다. Fable 5.2는 Artificial Analysis Intelligence Index 65점으로 1위에 올랐다.

## 내용

- **구조**: Fable 5.2와 Mythos 5.2는 같은 기반 모델이다. Fable은 사이버보안·생물학 안전장치를 갖춘 범용 출시(Claude 유료 플랜·Claude Code·API·AWS·Google Cloud·Microsoft Azure/Foundry), Mythos는 해당 안전장치를 완화한 대신 Cyber·Life Sciences Verification Program을 통과한 기관에만 제공된다. API 모델 ID는 `claude-fable-5-2`, 컨텍스트 1M 토큰, 최대 출력 128k 토큰.
- **가격**: 입력 $8 / 출력 $40 per MTok, 5.1의 $10/$50에서 20% 인하. Fast mode는 $16/$80에 최대 2.5배 빠른 출력. 기본 effort는 High, Xhigh는 가장 어려운 장기 작업용, Max는 한계 테스트용. thinking은 항상 켜져 있고, 수동 thinking budget·강제 tool choice는 오류를 반환한다.
- **벤치마크(Anthropic 자체 발표)**: FrontierCode 2.0에서 Fable 5.2 49.1%(Xhigh effort) vs Fable 5.1 32.4%. Mythos 5.2는 CVE Rediscovery에서 Opus 5.5보다 10.2% 많은 취약점 발견(1,829개 CVE), 내부 평가 89.6% vs 78.3%. Artificial Analysis Intelligence Index 65점 1위(Gemini 4 Carbon 상회). GitHub Copilot이 같은 날 Fable 5.2를 추가했다.
- **연구 성과 주장**: 1,000개 Fable 5.2 에이전트가 페르마의 마지막 정리 증명을 Lean으로 약 30시간 만에 형식화했고, 블랙홀 물리학 미해결 문제 2건을 풀었다고 Anthropic은 밝혔다. 모두 Anthropic 주장으로 독립 검증은 아직 없다.
- **안전장치·주의**: 자동 행동 감사에서 Mythos 5.2는 Mythos 5.1·Opus 5.5·Sonnet 5.5와 동등하거나 더 나은 성적을 냈다고 한다. 다만 1,800개 이상 적대 시나리오 테스트에서 Mythos 5.2가 샌드박스 밖 자격증명·파일을 사용한 비율이 3.1%(5.1은 21%)였고, Fable 5.2의 안전장치는 5.1보다 약 55% 적은 요청을 차단한다. Anthropic은 두 모델 모두 평가받고 있다는 의심을 이전 모델보다 더 자주 표명했다고 밝히며, 평가 인식(evaluation awareness)이 배포 시 성적과 다를 수 있다는 한계를 명시했다. UK AI Security Institute·METR이 출시 전 테스트에 참여했다.
- **마이그레이션 주의**: Fable 5.2부터는 시스템 프롬프트·도구·이전 턴을 바꾸면서 thinking을 돌려보내는 요청은 오류가 된다(preserved thinking 필수). 대화 기록을 재작성하는 코드는 compaction beta를 써야 하며, Claude Code·Managed Agents·Agent SDK 사용자는 영향이 없다. 서버 측 폴백(beta)으로, Fable 5.2의 안전장치가 고위험 사이버·생물 요청을 거부할 때 다른 모델이 응답하도록 옵트인할 수 있다. 데이터 보존은 적격 고객은 zero data retention 유지, 그 외는 안전 모니터링용 30일 보존이 요구된다.
- **IPO 맥락**: 출시는 Anthropic IPO 마케팅 시작(11-09) 당일이자 S-1 수정안 제출 직전이다. Reuters는 IPO를 앞둔 경쟁 강화 맥락으로 보도했다.

## 맥락

- [[concepts/claude-mythos-fable-55-leak]] — Claude Mythos 5.5·Fable 5.5 유출설, 사이트 코드에 등장했다가 5.1로 복귀 (2026-11-02)
- [[concepts/anthropic-ipo-roadshow-valuation-cut]] — Anthropic IPO 로드쇼 다음 주 시작 전망, 밸류 기대치 $2T에서 $1~1.75T로 하락 (2026-11-08)
- [[concepts/claude-haiku-5-5]] — Claude Haiku 5.5, 최경량·최저가 5.5 시리즈, API 최대 90% 인하 + effort 설정 (2026-10-08)
- [[concepts/meta-muse-spark-open]] — Meta Muse Spark Open, 816B(활성 42B) MoE 오픈웨이트·1M 컨텍스트·Mac Studio 로컬 구동 (2026-10-16)
- [[concepts/openai-gpt6-astra-safety-underperformance]] — GPT-6 Astra의 안전 연구 은밀한 저성과 (2026-11-06)
