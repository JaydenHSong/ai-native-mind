---
title: "Anthropic Cuts Vulnerability Disclosure Window from 90 to 30 Days — CVD Reworked for the AI-Rediscovery Era"
category: concepts
tags: [anthropic, vulnerability-disclosure, security-policy, project-zero, cvd, frontier-red-team]
created: 2026-11-17
updated: 2026-11-17
sources:
  - "raw/articles/2026-11-17-anthropic-disclosure-window-30-days.md"
related:
  - "[[concepts/google-threat-tracker-exploit-agent]]"
  - "[[concepts/anthropic-anvil-automated-red-teaming]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/php2shell-ai-vulnerability-discovery]]"
status: draft
confidence: medium
---

# Anthropic Cuts Vulnerability Disclosure Window from 90 to 30 Days — CVD Reworked for the AI-Rediscovery Era

## Start here

**Analogy**: the rule that told the fixing side "fix it and disclose within 90 days" after a security hole was found was shortened to "30 days." Because now AI finds the same hole again quickly. If you hide it for 90 days, another AI may find that hole in the meantime and exploit it.

| Term | Meaning |
|------|------|
| **CVD (Coordinated Vulnerability Disclosure)** | The cooperative procedure where the finder first notifies the maker and discloses after the patch |
| **High/critical** | Vulnerability severity grades with large damage if exploited |
| **Project Zero** | Google's vulnerability research team, which has set the industry's standard disclosure windows |
| **OSS Scanner** | A tool that automatically scans open-source projects for vulnerabilities |

## One-line definition

Anthropic's Frontier Red Team has sharply shortened its coordinated vulnerability disclosure (CVD) window. For reports filed **from 2027-01-01**, high/critical vulnerabilities go from 90 to **30 days**, the rest to **45 days**. The reason: "AI is rediscovering the same bugs so fast that they can no longer stay undisclosed for 90 days."

## Key points

- **Announcement**: 2026-11-16, Anthropic Frontier Red Team policy update "Updating our coordinated vulnerability disclosure policy timelines" (primary source: anthropic.com).
- **Changes**: applies to vulnerabilities reported from 2027-01-01. High/critical **90 days → 30 days**, the rest **45 days**. Full technical disclosure after the patch **45 days → 30 days**. Escalation to an external coordinator when the maintainer does not respond **30 days → 15 days**. The **7-day disclosure window for already-exploited vulnerabilities stays**.
- **Reason**: frontier models are so good at finding vulnerabilities that another model is likely to rediscover the same bug. In Anthropic's words: "The 90-day window made sense when a vulnerability could stay undisclosed for months. We no longer believe that."
- **Current figures**: per Anthropic's dashboard, as of 2026-11-02, **5,087 flaws** have been reported across **680 open-source projects**, and only **12%** have a known patch.
- **Exceptions**: AI-discovered findings without human review (OSS Scanner etc.) are not covered by the new windows. Some critical infrastructure is negotiable.
- **Parallel move**: Google Project Zero also announced on 2026-11-13 that it is dropping its "90+30" policy for a 30-day clock (90 days for now, **60 days from 2027-02-02**, **30 days from 2028-01-03**). Anthropic's announcement came three days later.

## Why it matters (solo-developer lens)

1. **"Time kept undisclosed" has itself become the risk**: CVD's premise was "the finder quietly tells the maker, buying time to fix." In the era of AI rediscovery, the longer the undisclosed period, the higher the chance **another model finds the same hole and exploits it**. The disclosure window is now a "risk calculation," not "generosity."
2. **The defense side of the patch-speed race**: it pairs with GTIG's "patch→exploit automation" reported the same day ([[concepts/google-threat-tracker-exploit-agent]]). Attack is automated, and defense answers by shortening windows. My project's dependency-patch cadence has to match this speed.
3. **The 12% figure**: of 5,087 reported flaws, only 12% have a known patch. Shorter windows may mean more disclosures of unpatched vulnerabilities — holes that are "disclosed but not fixed" reaching the world faster.
4. **AI-discovered findings are exempt**: AI scan results without human review are outside the new windows. The line distinguishing a "discovery" mass-produced by AI from one verified by a human is now written into policy.

## Limits (stated explicitly)

- The announcement is an Anthropic primary source, but the 5,087 and 12% figures are Anthropic's own dashboard counts — no independent verification.
- Project Zero's transition schedule (60 days from 2027-02-02, 30 days from 2028-01-03) is phased, so its pace differs from Anthropic's immediate 30 days.
- confidence is medium — an Anthropic primary source crossed with Project Zero's parallel move, but the actual effect of the shorter windows can only be confirmed after the 2027-01-01 effective date.

## Related concepts

- [[concepts/google-threat-tracker-exploit-agent]] — the reality that patches lead straight to attacks is the backdrop for the shorter window (2026-11-16)
- [[concepts/anthropic-anvil-automated-red-teaming]] — the automated red-teaming flow from the same Frontier Red Team line (2026-11-13)
- [[concepts/llm-evaluation]] — the policy change driven by models getting faster at finding vulnerabilities
- [[concepts/php2shell-ai-vulnerability-discovery]] — PHP2Shell, two critical PHP vulnerabilities found by AI (2026-10-22)

## Sources

- [Anthropic cuts vulnerability disclosure window from 90 to 30 days — CVD reworked for the AI-rediscovery era (Anthropic Frontier Red Team, 11-16)](raw/articles/2026-11-17-anthropic-disclosure-window-30-days.md)
