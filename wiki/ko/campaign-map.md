---
title: "Campaign Map"
category: meta
tags: [map, campaign, navigation]
created: 2026-04-12
updated: 2026-11-12
sources:
 - "wiki/overview.md"
 - "wiki/index.md"
 - "wiki/log.md"
status: active
confidence: high
---

# ai-native-mind Campaign Map

> 위키 전체를 "챕터 클리어 게임"처럼 따라가기 위한 월드맵.

## 쉽게 읽기

처음부터 끝까지 다 읽는 문서가 아니다. 지금 내 레벨에 맞는 챕터를 하나 고르고, **클리어 조건 + 산출물**만 달성하면 된다.

## 월드맵 허브

- 시작 마을: [[overview|Overview]]
- 도감(전체 목록): [[index|Index]]
- 퀘스트 기록: [[log|Log]]
- 플레이 일지: [[journal/2026-04-12|Journal 샘플]]

## 메인 퀘스트 라인 (권장)

### Chapter 0 - 튜토리얼
- 문서: [[patterns/llm-wiki]], [[tools/obsidian]], [[tools/claude-code]]
- 클리어 조건: ingest/query/lint 흐름을 3문장으로 설명
- 산출물: 개인 위키 사용 규칙 메모

### Chapter 1 - 세계관 이해
- 문서: [[concepts/ai-native-programmer]], [[concepts/ai-native-architecture]]
- 클리어 조건: AI 네이티브 방식이 필요한 이유 5문장 정리
- 산출물: 내 개발 방식 Before/After 노트

### Chapter 2 - 기본 전투
- 문서: [[concepts/context-engineering]], [[concepts/prompt-engineering]], [[concepts/context-vs-prompt-practice]]
- 클리어 조건: 문제를 prompt vs context로 분류
- 산출물: 내 컨텍스트 소스 목록

### Chapter 3 - 파티 운영
- 문서: [[concepts/ai-orchestration]], [[patterns/orchestration-patterns-practice]]
- 클리어 조건: 현재 작업을 6대 패턴으로 분류
- 산출물: 작업 흐름도(텍스트 가능)

### Chapter 4 - 제작소
- 문서: [[patterns/agent-planning-to-implementation]], [[patterns/subagents-delegation]]
- 클리어 조건: 기능 1개를 기획->스펙->구현->검증으로 분해
- 산출물: 기능 1개 체크리스트

### Chapter 5 - 안전 던전
- 문서: [[patterns/agent-server-harness]], [[patterns/safe-tool-calling-sandbox]], [[patterns/owasp-llm-typescript-mitigations]]
- 클리어 조건: 권한/검증/로깅/재시도 누락 지점 1개 이상 발견
- 산출물: 보안 체크리스트 v1

### Chapter 6 - 운영 보스전
- 문서: [[concepts/llm-evaluation]], [[concepts/gen-ai-observability]]
- 클리어 조건: 품질 지표 2개 + 관측 지표 2개 정의
- 산출물: 지표 카드(대시보드 초안)

### Chapter 7 - 엔드게임
- 문서: [[patterns/git-ai-workflow]], [[patterns/ai-code-review]], [[patterns/ai-cost-management]]
- 클리어 조건: 반복 작업 1개 자동화/표준화
- 산출물: 나만의 AI 개발 플레이북 1페이지

## 서브 퀘스트 라인 (선택)

- **하네스 심화 + 공식 스터디**: [[patterns/harness-engineering-casebook]] (케이스 30 + Anthropic Academy 맵)
- **보안 특화**: [[patterns/owasp-llm-typescript-mitigations]] -> [[patterns/safe-tool-calling-sandbox]] -> [[concepts/context-rot-hallucination]]
- **도구 비교**: [[comparisons/claude-code-plugins]] -> [[comparisons/ai-coding-tools]] -> [[comparisons/agent-frameworks]]
- **비용/효율**: [[patterns/prompt-caching]] -> [[patterns/ai-cost-management]] -> [[concepts/structured-output]]

## 진행도 트래커

- [ ] Chapter 0 클리어
- [ ] Chapter 1 클리어
- [ ] Chapter 2 클리어
- [ ] Chapter 3 클리어
- [ ] Chapter 4 클리어
- [ ] Chapter 5 클리어
- [ ] Chapter 6 클리어
- [ ] Chapter 7 클리어

## 플레이 규칙

1. 하루 1챕터만 클리어한다.
2. 읽기보다 산출물을 남긴다.
3. 막히면 이전 챕터로 돌아가 재도전한다.
4. 완료 증거는 `wiki/journal/` 또는 프로젝트 문서에 남긴다.

## 패치 노트

- 2026-04-12: Chapter 0~2 핵심 문서에 공통 `Chapter Clear 가이드` 섹션을 추가해, 문서 단위에서도 퀘스트 흐름이 끊기지 않도록 보강.
- 2026-04-12: Chapter 3~7 핵심 문서까지 `Chapter Clear 가이드`를 확장해 전체 챕터 라인이 문서 단위로 연속되도록 연결.
- 2026-04-13: [[patterns/harness-engineering-casebook]] 추가 — 하네스 도메인 케이스 30 + Anthropic Academy 스터디 맵, 서브 퀘스트에 연결.
- 2026-10-08: 데일리 ingest — [[concepts/claude-haiku-5-5]] 신규, [[concepts/agent-residence]]·[[patterns/agent-scientific-discovery]]·[[comparisons/frontier-lab-economics]]·[[concepts/semantic-decision-engine]] 보강, 총 131페이지.
- 2026-10-09: 데일리 ingest — [[concepts/openai-safety-researcher-firings]]·[[concepts/gpt-6-intelligent-ui]]·[[tools/gemini-agent-work]]·[[concepts/robojepa-robot-scaling-laws]] 신규, [[comparisons/frontier-lab-economics]]·[[concepts/ai-doom-loop]] 보강, 총 136페이지.
- 2026-10-10: 데일리 ingest — [[concepts/white-house-ai-incident-reporting-mandate]]·[[concepts/india-ai-regulation-consultation]]·[[concepts/gemini-4-carbon-testing]]·[[concepts/uk-ico-ai-privacy-commitments]]·[[concepts/prime-intellect-agent-self-rewrite]]·[[concepts/mecka-robot-motion-data]] 신규, [[concepts/super-intelligence-force]]·[[concepts/agent-attribution]]·[[concepts/gemini-4-argon]]·[[concepts/robojepa-robot-scaling-laws]]·[[comparisons/frontier-lab-economics]] 보강, 총 143페이지.
- 2026-10-11: 데일리 ingest — [[concepts/ted-lieu-ai-personhood-opposition]]·[[concepts/anthropic-claude-usage-policy-revision]]·[[concepts/gpt-61-sol-ultrafast]]·[[concepts/australia-frontier-ai-regulation]]·[[concepts/sabi-brain-ai-interface]]·[[concepts/claude-art-discovery-controversy]] 신규, [[concepts/agent-attribution]]·[[comparisons/frontier-lab-economics]]·[[patterns/agent-scientific-discovery]]·[[concepts/agent-data-leakage]]·[[concepts/india-ai-regulation-consultation]] 보강, 총 149페이지.
- 2026-10-12: 데일리 ingest — [[concepts/microsoft-maia-300]]·[[concepts/uk-frontier-model-access-restoration]]·[[concepts/claude-misbehavior-disclosure]]·[[concepts/nadella-emergency-brake]]·[[concepts/publishers-ai-covert-use]]·[[concepts/nvidia-reflection-acquisition-talks]] 신규, [[comparisons/frontier-lab-economics]]·[[concepts/agent-attribution]]·[[patterns/agent-safety-runtime]]·[[concepts/ai-doom-loop]]·[[concepts/super-intelligence-force]]·[[concepts/reflection-open-weight]]·[[concepts/gemini-4-argon]] 보강, 총 157페이지 (concepts 카운트 off-by-one 정정 포함).
- 2026-10-13: 데일리 ingest — [[concepts/meta-muse-wonder-models]]·[[concepts/google-workspace-mcp-agentic-oauth]]·[[concepts/meta-sierra-poppy-protocol]]·[[tools/digitalocean-agent-learning-services]]·[[concepts/microsoft-binding-ai-rules-push]]·[[concepts/hcltech-anthropic-partnership]] 신규, [[patterns/agentic-commerce]]·[[concepts/agent-attribution]]·[[patterns/agent-authority-model]]·[[concepts/microsoft-maia-300]]·[[concepts/gen-ai-observability]]·[[concepts/super-intelligence-force]]·[[concepts/nadella-emergency-brake]]·[[concepts/mcp]]·[[concepts/ted-lieu-ai-personhood-opposition]]·[[comparisons/frontier-lab-economics]] 보강, 총 164페이지.
- 2026-10-14: 데일리 ingest — [[concepts/character-ai-bankruptcy]]·[[concepts/nvidia-nemotron-3-5-bolt]]·[[concepts/anthropic-pentagon-rehearing]]·[[concepts/evaluator-independence-restrictions]]·[[concepts/ai-worms-self-replication]] 신규, [[concepts/gemini-4-argon]]·[[concepts/mistral-large-4]]·[[comparisons/frontier-lab-economics]]·[[concepts/ai-teen-safety-evaluation]]·[[concepts/llm-evaluation]]·[[patterns/agent-safety-runtime]]·[[concepts/white-house-ai-accord]] 보강, 총 170페이지.
- 2026-10-15: 데일리 ingest — [[concepts/eight-states-openai-child-safety-lawsuit]]·[[concepts/booking-vayo-travel-agent]]·[[concepts/apple-intelligence-china-launch]]·[[concepts/openai-gpt4-series-retirement]]·[[concepts/nvidia-uk-ai-safety-compute]]·[[concepts/grok-voice-3]] 신규, [[concepts/ai-teen-safety-evaluation]]·[[patterns/agentic-commerce]]·[[comparisons/frontier-lab-economics]]·[[concepts/agent-residence]]·[[patterns/agent-safety-runtime]] 보강, 총 177페이지.
- 2026-10-16: 데일리 ingest — [[concepts/meta-muse-spark-open]]·[[concepts/us-super-intelligence-task-force]]·[[concepts/cert-in-ai-agents-attack-vectors]]·[[concepts/datadome-ai-traffic-q3-2026]]·[[concepts/openai-agent-sepolia-wallet]]·[[concepts/ai-debt-boom-cracking]] 신규, [[patterns/agent-safety-runtime]]·[[comparisons/frontier-lab-economics]]·[[concepts/agent-residence]]·[[concepts/super-intelligence-force]]·[[patterns/agentic-commerce]] 보강, 총 184페이지.
- 2026-10-17: 데일리 ingest — [[concepts/accenture-ai-cost-cap]]·[[concepts/china-ai-export-controls]]·[[concepts/claude-quantum-circuit-discovery]]·[[concepts/replit-anthropic-split]]·[[concepts/nvidia-autonomy-stack]]·[[concepts/tencent-rogue-agents]] 신규, [[patterns/agent-safety-runtime]]·[[comparisons/frontier-lab-economics]]·[[patterns/agentic-finance]]·[[patterns/agent-scientific-discovery]]·[[concepts/claude-misbehavior-disclosure]] 보강, 총 191페이지.
- 2026-10-18: 데일리 ingest — 신규 6개 (deepseek-v41-flash-1017, imf-asia-ai-labor-outlook, anthropic-jack-clark-44t-gdp, anthropic-ai-safety-bill, opencode-key-breach, websites-block-ai-agents) + journal 1개 (ko/en 미러), 보강 5개 (agentic-commerce, agent-authority-model, agent-supply-chain-security, nyc-ai-hearing, frontier-lab-economics); 챕터 경로 변경 없음; index·overview·log는 191→198 페이지 상태 반영.
- 2026-10-19: 데일리 ingest — [[concepts/gsa-ai-clause-live]]·[[concepts/taste-bench]]·[[concepts/anthropic-workforce-report]]·[[concepts/gemini-4-argon-minecraft]]·[[concepts/microsoft-nscale-uk-pullout]]·[[concepts/nsa-cisa-nist-rogue-agent-guidelines]] 신규, [[concepts/gemini-4-argon]]·[[concepts/ai-talent-bottleneck]]·[[patterns/agent-safety-runtime]]·[[comparisons/frontier-lab-economics]]·[[concepts/white-house-ai-incident-reporting-mandate]]·[[concepts/llm-evaluation]] 보강, 총 205페이지.
- 2026-10-20: 데일리 ingest — [[concepts/minimax-m3-1-flash]]·[[concepts/aws-torchneuron-trainium-pytorch]]·[[concepts/cloudflare-clairic-system-one-extraction]]·[[concepts/llm-d-1-0-pytorch-conference]]·[[concepts/cairn-norforge-ai-agent-hacking-spree]]·[[concepts/uk-csrb-ai-agent-loss-of-control]] 신규, [[patterns/agent-safety-runtime]]·[[comparisons/frontier-lab-economics]]·[[concepts/semantic-decision-engine]] 보강, 총 212페이지.
- 2026-10-21: 데일리 ingest — [[concepts/nvidia-openshell-reference-architecture]]·[[concepts/dhs-deepseek-federal-register-ban]]·[[concepts/state-department-super-intelligence-cable]]·[[concepts/mastercard-agent-pay-machines-developer-access]]·[[concepts/supermicro-nutanix-private-inference-stack]]·[[concepts/nvidia-dsx-pod-modular-ai-factories]] 신규, [[patterns/agent-safety-runtime]] 보강, 총 219페이지.
- 2026-10-22: 데일리 ingest — [[concepts/claude-duet-proactive-agent]]·[[concepts/recursive-flint]]·[[concepts/litellm-pypi-supply-chain-compromise]]·[[concepts/openai-safety-monitor-disabling]]·[[concepts/microsoft-storm-0940-agent-led-attacks]]·[[concepts/php2shell-ai-vulnerability-discovery]] 신규, [[concepts/cairn-norforge-ai-agent-hacking-spree]] 보강, 총 226페이지.
- 2026-10-23: 데일리 ingest — [[concepts/google-agent-compute-engine]]·[[concepts/anthropic-agent-skills-foundation]]·[[concepts/nvidia-kazakhstan-sovereign-ai]]·[[concepts/lava-b300-export-control-trace]]·[[concepts/italy-ai-decree-179-2026]]·[[concepts/openai-newsom-sb53-letter]] 신규, [[concepts/ai-debt-boom-cracking]] 보강, 총 232페이지.
- 2026-10-24: 데일리 ingest — [[concepts/moonshot-kimi-k31-pro]]·[[concepts/openai-frontier-offline-training]]·[[concepts/claude-mythos-5-aisi-postmortem]]·[[concepts/texas-sues-openai-altman]]·[[concepts/meta-commercial-terms-delay]]·[[concepts/us-banks-block-ai-agents]] 신규, 보강 없음, 총 239페이지.
- 2026-10-25: 데일리 ingest — [[concepts/microsoft-agensh-1024-agents]]·[[concepts/uk-ai-biosecurity-lab]]·[[concepts/washington-ai-ceos-product-safety]]·[[concepts/sweden-blocks-chatgpt-claude]]·[[concepts/pennsylvania-ai-ad-disclosure-law]]·[[concepts/block-dessa-speech-only-voice]] 신규, 보강 없음, 총 246페이지.
- 2026-10-26: 데일리 ingest — [[concepts/meta-95b-equity-raise-ai-infra]]·[[concepts/openai-valuation-cut-1-25t]]·[[concepts/openai-enterprise-discounts-anthropic]]·[[concepts/claude-georgia-voter-data-paywall]]·[[concepts/convovo-ai-ballot-grok-gpt-partisan]]·[[concepts/anthropic-claude-cowork-enterprise-unified]] 신규, 보강 없음, 총 253페이지.
- 2026-10-27: 데일리 ingest — [[concepts/anthropic-s1-ipo-filing]]·[[concepts/openai-gpt61-terra-half-price]]·[[concepts/microsoft-60000-buyouts-ai-capex]]·[[concepts/cohere-qwen-beijing-upload-test]]·[[concepts/apple-siri-27-2-five-languages-recall]]·[[concepts/openai-ai-science-three-discoveries]] 신규, 보강 없음, 총 260페이지.
- 2026-10-28: 데일리 ingest — [[concepts/google-genie-4-native-audio-world-model]]·[[concepts/openai-google-tpu-purchase-plan]]·[[concepts/anthropic-gsa-onegov-40-discount]]·[[concepts/oracle-vera-rubin-multi-gigawatt-tpu-cerebras]]·[[concepts/sk-hynix-q3-record-shortage-2030]]·[[concepts/uk-budget-data-centre-covenant]] 신규, 보강 없음, 총 267페이지.
- 2026-10-29: 데일리 ingest — [[concepts/microsoft-alphabet-q3-earnings-split]]·[[concepts/google-gemini-4-carbon-cyber-defense]]·[[concepts/new-york-ai-chatbot-safety-law-minors]]·[[concepts/oracle-225b-fy2030-forecast-cash-flow]]·[[concepts/samsung-q3-record-memory-profit]]·[[concepts/openai-servicenow-enterprise-workflows]] 신규, 보강 없음, 총 274페이지.
- 2026-10-30: 데일리 ingest — [[concepts/deepseek-series-b-15-8b]]·[[concepts/cohere-series-e-canada-equity]]·[[concepts/amazon-q3-aws-trainium-external]]·[[concepts/openai-frontier-misalignment-monitoring]]·[[concepts/wikimedia-amicus-nyt-openai]]·[[concepts/google-ai-mode-2020-election-glitch]] 신규, [[concepts/mistral-large-4]] 보강, 총 281페이지.
- 2026-10-31: 데일리 ingest — [[concepts/ai-training-opt-out-robots-txt]]·[[concepts/wiz-black-october-ai-platform-breaches]]·[[concepts/character-ai-asset-sale-states-objections]]·[[concepts/openai-funding-target-cut-20b]]·[[concepts/nasdaq-october-2t-wipeout-ai-spending]]·[[concepts/openai-gpt6-rosalind-research-biology]] 신규, 보강 없음, 총 287페이지.
- 2026-11-01: 데일리 ingest — [[concepts/volta-infostealer-llm-victim-ranking]]·[[concepts/claude-watermark-sampling-loophole]]·[[concepts/openai-daybreak-blue-training-optout]]·[[concepts/meta-max-humanoid-fourier]]·[[concepts/nace-drex-max-v1-open-weights]]·[[concepts/plan-then-verify-agent-planning]] 신규, 보강 없음, 총 293페이지.
- 2026-11-02: 데일리 ingest — [[concepts/gpt-62-astra-codex-leak]]·[[concepts/claude-mythos-fable-55-leak]]·[[concepts/deepseek-dsh-superagent-prototype]]·[[concepts/chatgpt-codex-shared-token-budget]]·[[concepts/openai-ai-compute-campuses-policy-push]]·[[concepts/dataline-agent-data-marketplace]] 신규, 보강 없음, 총 300페이지.
- 2026-11-03: 데일리 ingest — [[concepts/semianalysis-gdpx-benchmark]]·[[concepts/marvell-lumentum-115b-acquisition]]·[[concepts/oracle-20b-raise-ai-spending-selloff]]·[[concepts/bellingcat-ai-super-pacs-midterms]]·[[concepts/wired-cloaked-deepfake-apps-apple-removal]]·[[concepts/genrobot-100m-robot-training-data]] 신규, 보강 없음, 총 306페이지.
- 2026-11-04: 데일리 ingest — [[concepts/anthropic-s1a-q3-revenue-commitments]]·[[concepts/menlo-enterprise-ai-2026]]·[[concepts/china-unified-ai-law-fast-track]]·[[concepts/nyt-brave-ai-scraping-lawsuit]]·[[concepts/anthropic-message-threads-beta]]·[[concepts/goldman-ai-coding-tools-restriction]] 신규, 보강 없음, 총 313페이지.
- 2026-11-05: 데일리 ingest — [[concepts/cat-wu-joins-openai]]·[[concepts/apple-10k-ai-agent-risk]]·[[concepts/openai-chatgpt-images-2-6]]·[[concepts/tencent-hy4-full-release]]·[[concepts/cjeu-ai-training-opinion]] 신규, [[concepts/moonshot-kimi-k31-pro]] 보강, 총 319페이지.
- 2026-11-06: 데일리 ingest — [[concepts/openai-gpt6-cyber]]·[[concepts/anthropic-claude-personal-finance]]·[[concepts/metr-anthropic-ai-rd-acceleration]]·[[concepts/thinking-machines-inkling-2-small]]·[[concepts/google-gemini-omni-1-2-flash]]·[[concepts/openai-gpt6-astra-safety-underperformance]] 신규, 보강 없음, 총 326페이지.
- 2026-11-07: 데일리 ingest — [[concepts/openai-11b-first-close-1-25t]]·[[concepts/meta-muse-wonder-rollout-active-memory]]·[[concepts/anthropic-agent-memory-dreaming]]·[[concepts/openai-biobasicsbench-wet-lab-agents]]·[[concepts/deepmind-rsa-1024-agent-cryptanalysis]]·[[concepts/nvidia-cosmos-3-nano-open-models]] 신규, 보강 없음, 총 333페이지.
- 2026-11-08: 데일리 ingest — [[concepts/anthropic-ipo-roadshow-valuation-cut]]·[[concepts/eight-mile-style-presley-sue-suno]]·[[concepts/claude-code-dont-ask-again-secret-leak]]·[[concepts/google-backstop-anthropic-kentucky-lease]]·[[concepts/anthropic-claude-enterprise-security-hooks]]·[[concepts/dropbox-tigris-dbx-agent-cloud]] 신규, 보강 없음, 총 340페이지.
- 2026-11-09: 데일리 ingest — [[concepts/anthropic-onepwr-gas-generators-1-7gw]]·[[concepts/apple-agentic-siri-ternus-push]]·[[concepts/graphite-claude-passes-gemini-sessions]]·[[concepts/doj-super-intelligence-task-force]]·[[concepts/openai-dots-email-2fa-codes]] 신규, [[concepts/anthropic-ipo-roadshow-valuation-cut]] 보강, 총 345페이지.
- 2026-11-10: 데일리 ingest — [[concepts/claude-fable-5-2-mythos-5-2]]·[[concepts/meta-muse-ember]]·[[concepts/deepseek-harness-1-54m-dau]]·[[concepts/openai-chatgpt-enterprise-aws-marketplace]]·[[concepts/google-tpu-8tx-8i-max]]·[[concepts/australia-ai-regulator-agent-breach]] 신규, [[concepts/anthropic-ipo-roadshow-valuation-cut]] 보강, 총 352페이지.
- 2026-11-11: 데일리 ingest — [[concepts/google-gemini-4-carbon-launch]]·[[concepts/anthropic-claude-workplace-tools]]·[[concepts/openai-businesses-in-chatgpt]]·[[concepts/deepmind-gemini-robotics-2-5]]·[[concepts/deepmind-alphaproof-code-signal]]·[[concepts/malbear-operation-snowball-deepseek-telecom]] 신규, [[concepts/anthropic-ipo-roadshow-valuation-cut]] 보강, 총 358페이지.
- 2026-11-12: 데일리 ingest — [[concepts/nvidia-huang-ousted-ceo]]·[[concepts/openai-codex-npm-prompt-injection]]·[[concepts/google-gemini-decisions-api]]·[[concepts/anthropic-worse-together-multi-agent]]·[[concepts/deepmind-alphagenome-2]]·[[concepts/fireworks-notion-ai-breach]] 신규, [[concepts/anthropic-ipo-roadshow-valuation-cut]] 보강, 총 365페이지.

