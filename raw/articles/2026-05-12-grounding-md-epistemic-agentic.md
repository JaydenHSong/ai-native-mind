---
title: "Agentic AI-assisted coding offers a unique opportunity to instill epistemic grounding during software development (arXiv 2604.21744)"
source_url: "https://arxiv.org/abs/2604.21744"
source_type: "arxiv-paper"
authors: ["Magnus Palmblad", "Jared M. Ragland", "Benjamin A. Neely"]
published: 2026-04 (approx)
fetched: 2026-05-12
tags: [epistemic-grounding, grounding-md, agent-scaffold, domain-knowledge, claude-md, agents-md, arxiv]
status: ingested
---

# Agentic AI-assisted coding offers a unique opportunity to instill epistemic grounding during software development

> arXiv:2604.21744 [cs.SE]. Palmblad, Ragland, Neely. Proposes **GROUNDING.md** — field-scoped epistemic grounding document for community-curated Hard Constraints + Convention Parameters.

## 메타

- **Title**: Agentic AI-assisted coding offers a unique opportunity to instill epistemic grounding during software development
- **Authors**: Magnus Palmblad, Jared M. Ragland, Benjamin A. Neely
- **arXiv**: <https://arxiv.org/abs/2604.21744>
- **HTML**: <https://arxiv.org/html/2604.21744>
- **PDF**: <https://arxiv.org/pdf/2604.21744>
- **Example domain**: mass spectrometry-based proteomics

## 한 줄 요약

**"CLAUDE.md / AGENTS.md 위에 한 층 더 — GROUNDING.md"** — project-scoped (CLAUDE.md) / method-scoped 문서 외에 **field-scoped, community-governed** 문서를 둬서, **도메인 비전문가도 best practices가 baked in된 코드를 생성**할 수 있게 한다. **Hard Constraints는 사용자 prompt를 override한다.**

## 핵심 주장

### 1) 진화 단계

| 단계 | 내용 | 위키 매핑 |
|---|---|---|
| **Chat-based vibe coding** | 단발 prompt, agent가 즉시 코드 | [[patterns/vibe-coding-antipatterns]] |
| **Agent scaffold + plan document** | 인간이 plan, agentic AI가 implement | [[patterns/agent-planning-to-implementation]] |
| **Project + method-scoped documents** | CLAUDE.md / AGENTS.md / Skills | [[patterns/claude-md-guide]] |
| **Field-scoped GROUNDING.md (이 논문)** | 커뮤니티가 큐레이션, prompt를 *override* | (위키에 신규 — 추가 후보) |

### 2) GROUNDING.md 구조

두 부분:

- **Hard Constraints** — non-negotiable validity invariants. *Empirically required for scientific correctness*. **모든 다른 context를 override.** 사용자가 prompt에서 다른 걸 요구해도 적용.
- **Convention Parameters** — community-agreed defaults. 변경 가능하지만 *기본값*이 명시.

### 3) 위치 — Field-scoped vs Project-scoped

- **CLAUDE.md / AGENTS.md**: 한 프로젝트, 한 코드베이스
- **GROUNDING.md**: 한 **분야** (예: mass spectrometry-based proteomics 전체). 같은 분야의 모든 프로젝트가 공유.
- **거버넌스**: community-governed. 도메인 전문가가 만들고 유지, 코드 생성자는 non-expert여도 됨.

### 4) 핵심 가치 명제

- **민주화 + 무결성 양립** — agentic AI가 누구나 도메인 코드를 빠르게 만들게 하면서, **도메인 전문가가 "어떤 코드가 valid한지" 판단을 loop 안에 유지**.
- **AI vs 인간 adherence**: "guideline을 AI에게 지키게 하기가 인간에게 시키기보다 쉽다" — 이 논문의 흥미로운 행동 주장.
- **사용 시나리오**: 비전문 개발자가 proteomics 분석 도구를 작성할 때, GROUNDING.md가 "이 데이터에 적용 불가능한 통계 검정" 같은 hard rule을 강제 → 검토자도 결과를 신뢰 가능.

## 위키 연결

- **[[patterns/claude-md-guide]]** — CLAUDE.md 가이드의 *sibling*. project-scope → method-scope → field-scope 계층 추가 후보.
- **[[concepts/agent-supply-chain-security]]** — community-curated grounding은 trust 모델의 한 축 (dual-LLM/CaMeL과 같은 시점에서, 도메인 invariant 강제).
- **[[concepts/harness-engineering]]** — Hard Constraints가 prompt를 override한다는 점은 *harness가 model을 dominate*하는 또 다른 instance. CAAF의 incorruptible asset 패턴과 정확히 같은 정신.
- **[[patterns/safe-tool-calling-sandbox]]** — Hard Constraint가 사용자 prompt를 무시할 권한을 갖는다는 점에서 일종의 *content firewall*.
- **[[concepts/agentic-engineering]]** — vibe coding → agentic engineering 진화의 또 다른 표현 (4단계 계층).

## 메모

이 논문의 매력은 **CLAUDE.md / AGENTS.md / Skills로 이어진 "context 레이어 추가" 흐름을 도메인 축으로 한 단계 더 확장**한다는 점이다. 우리 위키는 이미 project-scope (CLAUDE.md), method-scope (Skills via [[tools/superpowers]], [[tools/bkit]])는 다뤘지만 **field-scope**는 비어 있었다. GROUNDING.md는 그 빈 자리에 정확히 들어간다.

특히 흥미로운 부분 — **"Hard Constraints override user prompt"**. 이는 [[patterns/owasp-llm-typescript-mitigations]]의 prompt injection defense와 같은 정신이지만 *목적이 보안이 아니라 도메인 무결성*이다. CAAF(2026-05-06 PM ingest)의 *incorruptible asset* 정신과 정확히 평행 — 둘 다 "agent의 자율 결정을 어디서 멈춰야 하는가"에 대한 답.

위키 적용 함의: 우리도 [[wiki/index]]에 한 줄 그라운딩(이 위키의 "절대 규칙")을 둬볼 수 있다. 예: "frontmatter 키 임의 변경 금지", "기존 본문 통째 교체 금지" 같은 invariant들. 사실상 우리 CLAUDE.md의 일부 규칙(Conventions, raw/ 파일 별도 표준)이 이미 GROUNDING.md 스타일 — *override on user request*.

한계: 논문 단일 도메인(proteomics) 예시. 다른 도메인(법률, 의료, 금융)으로 확장 시 governance 모델이 어떻게 다를지는 open question. Community-governance 자체가 fragile (참여 부족 / 분파 / 오래된 항목 lint) — 우리 위키의 lint workflow와 같은 도전.
