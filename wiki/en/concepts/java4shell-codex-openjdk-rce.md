---
title: "Java4Shell (CVE-2026-114938) — the OpenJDK RCE Codex Found in an Hour"
category: concepts
tags: [java4shell, codex, security, vulnerability, openjdk, ai-security]
created: 2026-11-19
updated: 2026-11-24
sources:
  - "raw/articles/2026-11-19-java4shell-codex-openjdk-rce.md"
  - "raw/articles/2026-11-24-openai-cisco-shirudo-linux-runtime.md"
related:
  - "[[concepts/google-threat-tracker-exploit-agent]]"
  - "[[concepts/openai-cisco-shirudo]]"
  - "[[concepts/anthropic-disclosure-window-30-days]]"
  - "[[concepts/microsoft-agent-framework-pypi-compromise]]"
status: draft
confidence: medium
---

# Java4Shell (CVE-2026-114938) — the OpenJDK RCE Codex Found in an Hour

## Start here

**Analogy**: a hole was found in the heart of Java, the language that runs half the world's servers. Sending just 65 characters — "A" 65 times — opens the server's door. The hole was found not by a person but by Codex, an AI coding tool: one hour to find it, two more to build the attack code, for under $200. Because AI now finds bugs this fast, the deadline for fixing and disclosing them has shrunk from 90 days to 30.

| Term | Meaning |
|------|------|
| **RCE (remote code execution)** | Running commands on someone else's server over the internet, without logging in |
| **CVE** | The shared worldwide numbering for vulnerabilities — this hole is CVE-2026-114938 |
| **Base64** | A common way of encoding data as text, used everywhere including login tokens |
| **CVSS** | A 10-point score for how dangerous a vulnerability is |
| **HotSpot** | The engine (JVM) that actually runs Java programs |

## One-line definition

**Java4Shell (CVE-2026-114938)**, disclosed by security firm Calif on November 17, 2026, is a memory-corruption flaw in OpenJDK's Base64 decoder that can lead to remote code execution (RCE) without logging in. Calif researcher Quang Luong audited HotSpot's internals with OpenAI's Codex and found the flaw in about an hour; the first working exploit took two more hours, at a token cost under $200.

## Key points

- **The flaw**: a heap out-of-bounds write in hand-written x86-64 assembly that HotSpot uses to speed up Base64 decoding with AVX-512 VBMI instructions. A string of 64 letter A's followed by a single `=` makes the decoder write 62 bytes past the end of its output array. Calif scores it 9.2 under CVSS 4.0 (critical); the Oracle and OpenJDK advisories score it 8.1 under CVSS 3.1 (high).
- **Scope**: OpenJDK 17.0.6 and later (including Java 21, 25, and 27) and distributions built from it (Oracle Java SE, Amazon Corretto, Eclipse Temurin, Microsoft Build of OpenJDK, Azul Zulu, Red Hat OpenJDK, Oracle Java 8 Enterprise Performance Pack). It fires only on x86-64 processors with AVX-512 VBMI support; ARM64 is unaffected.
- **Demonstrated RCE (default configurations)**: without login — Keycloak, Atlassian Jira, Atlassian Confluence, JFrog Artifactory, Jenkins, PingFederate. After login — Apache Kafka Broker, Apache Solr, Elasticsearch, Gerrit, Spinnaker. This is a demonstration, not an observed attack.
- **Discovery**: Luong directed Codex to audit HotSpot's JIT compiler, intrinsics, and cryptography code; after filtering false positives, the Base64 finding surfaced in about 20 minutes. One hour to discover, two more to build the first working exploit, under $200 in tokens.
- **Response**: Oracle shipped a patch at 1:00 p.m. PT on November 17, with the OpenJDK advisory the same day. Oracle's November Critical Security Patch Update covers 655 vulnerabilities, including 11 in Java SE. CISA urged immediate patching on November 17, starting with internet-facing systems. As of November 17, no in-the-wild exploitation had been reported, and the flaw had not yet entered CISA's Known Exploited Vulnerabilities catalog. Calif is withholding product-specific exploit chains while users upgrade. Oracle and Amazon shipped fixed builds for Java 17, 21, 25, and 27, but as of the morning of November 18, Temurin, Zulu, Microsoft, Red Hat, and Linux distributions had not yet published fixed builds.
- **A separate report the same day**: Forbes reported that OpenAI's GPT-6 Cyber has been finding flaws across Apple products. That is a separate claim. Calif's write-up names the tool, Codex, but not the model behind it.

## Why it matters (solo-developer lens)

1. **The era of AI-found bugs**: a codebase that once took a skilled researcher weeks to review was swept by Codex in an hour. Attackers have the same tools — the structure now favors whoever finds it first. That is exactly why the disclosure window in [[concepts/anthropic-disclosure-window-30-days]] shrank from 90 days to 30.
2. **A hole in the runtime itself**: this is not a bug in an app but in the Java engine, so six famous Java apps fell open at once. When the "floor" shakes, knowing what your stack stands on matters.
3. **A race to patch**: the patch is out, but distributions ship on different schedules. Checking whether your own Java distribution has a fixed build is today's job.

## 2026-11-23 update — Shirudo: agent-built temporary shields

- **Launch**: on November 23, Cisco and OpenAI unveiled the open-source project Shirudo. AI agents find vulnerabilities and build eBPF-based temporary protections ("shields") that defend running Linux systems without a reboot until the official patch arrives.
- **Demonstration**: using OpenAI's Codex, the team generated a shield for Java4Shell (CVE-2026-114938) and blocked an exploit attempt against a running Elasticsearch service without interrupting it. The other side of the discovery story (Codex found the flaw in an hour) — the loop is now complete, with agents taking on defense as well.
- **Structure**: agents build the shield, but evidence and human approval decide activation. Every shield is cryptographically signed, and the TPM records shield loads and removals. BSD 2-Clause license, GitHub: github.com/shirudo-dev/shirudo. Pre-release stage, Linux only. See [[concepts/openai-cisco-shirudo]] for details.

## Limits (stated explicitly)

- The RCE demonstrations were Calif's controlled-environment tests on default configurations; no real-world exploitation was reported as of November 17.
- "One hour, under $200" is Calif's own published figure with no independent verification.
- The Forbes GPT-6 Cyber report is a separate claim; do not mix it with Calif's disclosure.
- confidence is medium — BleepingComputer, Calif, Oracle, and CISA crossed, but the full Calif write-up was not read line by line.

## Related concepts

- [[concepts/google-threat-tracker-exploit-agent]] — the AI-driven exploit-automation trend observed in the same week (2026-11-17)
- [[concepts/anthropic-disclosure-window-30-days]] — directly connected: the disclosure window was cut to 30 days because "AI rediscovers the same bug faster" (2026-11-17)
- [[concepts/microsoft-agent-framework-pypi-compromise]] — another supply-chain and runtime-trust incident from the same week (2026-11-18)

## Sources

- [Java4Shell (CVE-2026-114938) — the OpenJDK RCE Codex found in an hour, patched Nov 17 (BleepingComputer, 11-17)](raw/articles/2026-11-19-java4shell-codex-openjdk-rce.md)