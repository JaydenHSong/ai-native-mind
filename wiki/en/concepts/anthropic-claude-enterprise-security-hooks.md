---
title: "Anthropic Ships Inference Hooks GA and a Security Center Beta for Claude Enterprise — Corporate DLP Can Block Claude's Answers and Tool Calls Before They Happen"
category: concepts
tags: [anthropic, claude-enterprise, security, dlp, inference-hooks]
created: 2026-11-08
updated: 2026-11-08
sources:
  - "raw/articles/2026-11-08-anthropic-claude-enterprise-security-hooks.md"
related:
  - "[[concepts/anthropic-claude-cowork-enterprise-unified]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/anthropic-agent-skills-foundation]]"
  - "[[concepts/google-agent-compute-engine]]"
status: draft
confidence: high
---

# Anthropic Ships Inference Hooks GA and a Security Center Beta for Claude Enterprise — Corporate DLP Can Block Claude's Answers and Tool Calls Before They Happen

## Start here

**Analogy**: imagine a checkpoint installed before an employee shows a secret document to Claude — the company's security team first asks, "is this something that must not leave the building?" If the checkpoint says no, Claude does not answer at all. Only the verdict is recorded; the document itself stays on the security team's server.

| Term | Meaning |
|------|------|
| **Inference hooks** | Connection points where, before the model answers or runs a tool, an outside security tool is asked to inspect the request |
| **DLP** | Data loss prevention — security tools that stop sensitive information from leaving the company |
| **Prompt hook / pre-tool-call hook** | A hook that inspects the prompt before it is sent, and a hook that inspects a tool call just before it runs |

## One-line definition

On 2026-11-05, Anthropic announced a Claude Enterprise security update whose centerpiece is the general availability of inference hooks. A company's existing data loss prevention (DLP) and security tools inspect Claude's prompts and tool calls before generation or execution, and if the verdict is "deny," Claude does not answer. A Security Center (beta), a centralized management console (beta) and EDR sensors for Cowork (beta) arrived alongside.

## Key facts

- **Inference hooks (GA)**: two kinds — prompt hooks and pre-tool-call hooks. Prompt hooks send the user's prompt to the customer's security server for an allow-or-deny verdict; pre-tool-call hooks inspect a proposed tool call — reading a file, querying a database — before it executes. The check runs on Anthropic's servers after the request leaves the client and before inference starts. Verdicts are allow or block only, with no rewriting or partial redaction. The default timeout is five seconds (adjustable by the customer).
- **Inspection scope**: conversation text, tool calls and their results, and attachment text are inspected. File and image bytes and system instructions are excluded. Anthropic says it keeps only configuration data and verdicts, not the inspected content.
- **Integrations**: DLP endpoints from Netskope, Palo Alto Networks, Proofpoint and Zscaler, or a customer's own internal server. Coverage spans claude.ai (web, desktop, mobile), Cowork, Claude Code, Claude for Microsoft 365, Claude in Slack and Claude in Chrome. Available to Claude Enterprise organizations only — not on Amazon Bedrock or Google Cloud, and Claude Platform organizations are out of scope.
- **Security Center (beta)**: one page that lines up the organization's Claude settings for chat, Cowork and Claude Code against Anthropic's recommended configuration, flags gaps and recent changes, and exports an auditor report. Anthropic is explicit that it is guidance, not a certification of legal compliance.
- **Other betas**: a centralized management console at admin.claude.com (SSO, SCIM, domain verification, groups, Compliance API keys), Admin API member sign-out, self-serve IP allowlists, Desktop shadow-IT blocks, and EDR sensors inside the local Cowork virtual machine (detection-only, macOS and Windows). No extra fee is charged for the preview features.

## Why it matters (solo-developer view)

1. **Agent security is moving from behind the model to in front of it**: until now, security mostly meant reviewing what the model produced. Inference hooks let corporate DLP intervene before a prompt is answered or a tool is run. It shows where the security boundary is forming in the agent era — before the agent reads a file or touches a database.
2. **It reuses the existing security stack**: companies connect the DLP tools they already run — Netskope, Zscaler and the like — instead of buying new AI-specific ones. For a solo developer, the fact that "our company's DLP now stands in front of Claude too" lowers the adoption barrier.
3. **The inspection scope has holes**: image and file bytes and system instructions are not inspected. A secret inside an image or an attached file's raw bytes can still reach Claude untouched. Hooks do not block everything.

## Limitations (stated)

- One tracker (aiweekly) says inference hooks became generally available on October 20, 2026, while Anthropic's November 5 announcement and most reporting treat November 5 as the GA announcement date. The GA date needs confirmation against Anthropic's original post.
- Enterprise organizations only; not available on Bedrock, Google Cloud or Platform organizations. The Security Center, centralized management and EDR are all in beta, with no GA schedule announced.

## Sources

- [Claude Enterprise security update source](raw/articles/2026-11-08-anthropic-claude-enterprise-security-hooks.md)
