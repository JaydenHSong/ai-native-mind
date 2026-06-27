---
title: "Wiki Log"
category: meta
tags: [log, history]
created: 2026-04-06
updated: 2026-06-27
sources: []
status: active
---

# ai-native-mind Wiki Log

> Chronological work log. Parsable with `grep "^## \[" wiki/log.md`.

## Read this page easily

This page records only **what changed** by date. For concept explanations, see the main pages under `wiki/concepts/` and elsewhere.

- World-map hub: [[campaign-map|Campaign Map]]
- Navigation guide: [[overview|Overview]]
- Full catalog: [[index|Index]]

## [2026-06-27] en-sync | Friday English batch sync through Korean maintenance 2026-06-27

- **English files updated**:
  - `patterns/ai-news-scouting-taxonomy.md` — synced frontmatter `sources` with the Korean source page by adding `raw/notes/2026-05-25-weekday-ai-software-watch.md`; updated date now matches the Korean 2026-06-23 repair.
  - `index.md` — refreshed latest-update wording for this Friday English batch sync.
  - `overview.md` — added the 2026-06-23~27 Korean maintenance mirror and this English sync summary.
  - `campaign-map.md` — added a patch note confirming no campaign-route drift.
  - `log.md` — added this entry and the translated Korean maintenance entries through 2026-06-27.
- **Comparison result**:
  - `wiki/ko` and `wiki/en` currently expose the same 84 Markdown-page paths.
  - No missing English `concepts/`, `tools/`, `patterns/`, `comparisons/`, `journal/`, or meta files were found.
  - The only readable English page with older content metadata was `patterns/ai-news-scouting-taxonomy.md`; this sync corrected its source-reference drift.
- **Operational note**:
  - Several older English concept/tool/pattern/comparison files returned filesystem read errors during this cron run, so content-drift inspection for those files remains a follow-up hygiene candidate. Path-level parity was still confirmed.

## [2026-06-27] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-27 scheduled maintenance pass.
  - `overview.md` — added the consistency recheck result and kept pending hygiene candidates visible.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files still use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` shows `author` / `collected`. That source-layer key drift remains deferred to a separate hygiene task.
  - Some early Claude Code plugin pages still have empty `sources`; no source was invented for them.
  - The scheduled maintenance pass itself did not edit the English wiki; this entry is the English-batch mirror.

## [2026-06-26] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-26 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept pending hygiene candidates visible.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Raw frontmatter key drift and early plugin pages with empty `sources` remain separate hygiene candidates.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-25] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-25 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept pending hygiene candidates visible.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Raw frontmatter key drift and early plugin pages with empty `sources` remain separate hygiene candidates.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-24] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-24 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept pending hygiene candidates visible.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Raw frontmatter key drift and early plugin pages with empty `sources` remain separate hygiene candidates.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-23] maintain | AI news taxonomy source-reference repair + Korean consistency recheck

- **Pages updated in Korean source**:
  - `patterns/ai-news-scouting-taxonomy.md` — frontmatter `sources` was empty, so the actual source note `raw/notes/2026-05-25-weekday-ai-software-watch.md` was connected and `updated` was refreshed.
  - `index.md` — refreshed the latest-update wording for the 2026-06-23 weekday maintenance pass.
  - `overview.md` — added the source-reference repair and consistency recheck result.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Raw frontmatter key drift and early plugin pages with empty `sources` remain separate hygiene candidates.
  - The weekday maintenance pass itself did not edit the English wiki; this Friday sync mirrors the corresponding English taxonomy frontmatter.

## [2026-06-20] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-20 scheduled maintenance pass.
  - `overview.md` — added the consistency recheck result and kept the raw-frontmatter drift note deferred.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files still use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` shows `author` / `collected`. That source-layer key drift remains deferred to a separate hygiene task.
  - The scheduled maintenance pass itself did not edit the English wiki; this entry is the English-batch mirror.

## [2026-06-19] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-19 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept the raw-frontmatter drift note deferred.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files still use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` shows `author` / `collected`. That source-layer key drift remains deferred to a separate hygiene task.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-18] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-18 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept the raw-frontmatter drift note deferred.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files still use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` shows `author` / `collected`. That source-layer key drift remains deferred to a separate hygiene task.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-17] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-17 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept the raw-frontmatter drift note deferred.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files still use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` shows `author` / `collected`. That source-layer key drift remains deferred to a separate hygiene task.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-16] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-16 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept the raw-frontmatter drift note deferred.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files still use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` shows `author` / `collected`. That source-layer key drift remains deferred to a separate hygiene task.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-13] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-13 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept the raw-frontmatter drift note deferred.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files still use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` shows `author` / `collected`. That source-layer key drift remains deferred to a separate hygiene task.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-12] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-12 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept the raw-frontmatter drift note deferred.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files still use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` shows `author` / `collected`. That source-layer key drift remains deferred to a separate hygiene task.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-11] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-11 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept the raw-frontmatter drift note deferred.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files still use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` shows `author` / `collected`. That source-layer key drift remains deferred to a separate hygiene task.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-10] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-10 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept the raw-frontmatter drift note deferred.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files still use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` shows `author` / `collected`. That source-layer key drift remains deferred to a separate hygiene task.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-09] maintain | Korean source-of-truth consistency recheck + no new ingest

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-09 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and kept the raw-frontmatter drift note deferred.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
  - Category-folder mismatches in `wiki/ko`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files still use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` shows `author` / `collected`. That source-layer key drift remains deferred to a separate hygiene task.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-06] maintain | Korean source-of-truth consistency recheck + raw ingest-state verification

- **Pages updated in Korean source**:
  - `index.md` — refreshed the latest-update wording for the 2026-06-06 weekday maintenance pass.
  - `overview.md` — added the consistency recheck result and a deferred raw-frontmatter drift note.
  - `log.md` — added this entry.
- **Verification**:
  - Raw files without any source reference in `wiki/ko`: 0 out of 110 `raw/**/*.md` files.
  - Broken wikilinks in `wiki/ko`: 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - Recent `raw/articles/` files use `source_type` / `authors` / `fetched`, while the raw-file example in `CLAUDE.md` still shows `author` / `collected`. That source-layer key drift was left for a separate hygiene task.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-03] maintain | placeholder wikilink false-positive repair + consistency recheck

- **Pages updated in Korean source**:
  - `overview.md` — changed example `wiki/...` placeholders in the previous work description into plain text and refreshed the recent-work entry.
  - `log.md` — changed example `wiki/...` placeholders in the previous log entry into plain text and added this entry.
  - `index.md` — refreshed the latest-update wording for the 2026-06-03 maintenance pass.
- **Verification**:
  - Broken wikilinks in `wiki/ko`: 2 → 0.
  - Pages missing from `wiki/ko/index.md`: 0.
  - Raw source references missing from `wiki/ko`: 0.
  - Required frontmatter fields missing in `wiki/ko/**/*.md`: 0.
- **Notes**:
  - No new raw source was present, so no new ingest was performed.
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-06-02] maintain | meta wikilink consistency repair

- **Pages updated in Korean source**:
  - `index.md` — replaced example-style meta links with actual root links (`[[campaign-map]]`, `[[overview]]`, `[[index]]`, `[[log]]`) and refreshed latest-update wording.
  - `overview.md` — cleaned the top navigation and Campaign Map guide links, then added a recent-work entry.
  - `campaign-map.md` — connected the World Map hub to the actual Overview / Index / Log files.
  - `log.md` — cleaned top navigation links and added this entry.
  - `journal/2026-05-15.md` — fixed two Friday-review meta links so they point to real root meta files.
  - `patterns/ai-code-review.md` — fixed one Campaign Map link.
  - `patterns/ai-cost-management.md` — fixed two Campaign Map / Log links.
  - `patterns/harness-engineering-casebook.md` — fixed one Campaign Map link.
- **Verification**:
  - Broken wikilinks in `wiki/ko`: 22 → 0.
  - Total page count remained 84. No new source ingest.
- **Notes**:
  - The weekday maintenance pass itself did not edit the English wiki; this entry is the Friday English-batch mirror.

## [2026-05-26] maintain | examples link cleanup + source-orphan fix + Obsidian placeholder-link repair

- **Pages updated in Korean source**:
  - `tools/obsidian.md` — wrapped example `link` / `page-name` wikilink strings as code so they are not interpreted as broken wikilinks.
  - `patterns/solo-product-strategy.md` — connected `raw/notes/2026-04-09-solo-dev-cases-detail.md` in `sources` / source references and changed the examples cost-simulator reference to a normal Markdown link.
  - `patterns/ai-cost-management.md` — changed the examples cost-simulator reference from a wikilink to a normal Markdown link.
  - `patterns/agent-mvp-stack-2026.md` — changed three examples cost-simulator references to normal Markdown links to preserve the boundary between wiki pages and supporting artifacts.
  - `comparisons/agent-platforms-for-solo-dev.md` — changed the examples widget reference to a normal Markdown link.
  - `patterns/owasp-llm-typescript-mitigations.md` — changed the `examples/agent-safety-sketch` reference to a README-based normal Markdown link.
- **Pages updated (meta)**:
  - `index.md` — latest-update wording refreshed for maintenance.
  - `overview.md` — reflected this maintenance as artifact-link cleanup + source-orphan resolution.
  - `log.md` — this entry.
- **Notes**:
  - `examples/` is a supporting artifact folder, not part of the counted wiki page body. Going forward, references to it should prefer normal relative Markdown links over wikilinks.
  - The raw source reference scan found one source-layer file that was not directly connected to a wiki body page; it was assigned to `solo-product-strategy`.

## [2026-05-25] maintain | AGENTS.md + SKILL.md pattern + link-consistency repair

- **Pages created**:
  - `patterns/agents-md-skill-md.md` — documents the harness pattern that separates `AGENTS.md` as **repo-scope policy** and `SKILL.md` as a **task-scope progressive-disclosure manual**, gaining portability and token efficiency.
- **Pages updated in Korean source**:
  - `patterns/claude-md-guide.md` — added a cross-link from the `CLAUDE.md ↔ AGENTS.md ↔ SKILL.md` section to [[patterns/agents-md-skill-md]].
  - `comparisons/claude-code-plugins.md` — fixed wikilink escaping typos in a table, restoring links to `bkit`, `Superpowers`, `Codex`, and `gstack`.
- **Pages updated (meta)**:
  - `index.md` — total 83→84, patterns 21→22, new pattern registered, latest-update wording refreshed.
  - `overview.md` — current-state counts refreshed and the new pattern/link repair reflected.
  - `log.md` — this entry.
- **Notes**:
  - Existing `tools/managed-agents.md` and `tools/deep-agents-deploy.md` already pointed at the previously empty `[[patterns/agents-md-skill-md]]` link. This update fills that missing page and repairs the upper-middle agent-platform knowledge graph.
  - For weekday maintenance, promoting this already-assumed document pattern was more useful than adding another unrelated concept page.

## [2026-05-25] watch | weekday watch kick-off + operator/runtime/observability priority validation

- **Pages created**:
  - `journal/2026-05-25.md` — first weekday-watch calibration journal. Uses Cline, browser-use, LangGraph, and Langfuse releases to summarize why **integration surface / operator control / trace artifactization** are priority signals for weekday watch.
- **Sources captured**:
  - `raw/notes/2026-05-25-weekday-ai-software-watch.md` — shortlist and deferral notes based on official release/news links.
- **Pages updated (meta)**:
  - `index.md` — total 82→83, journal 19→20, new 2026-05-25 journal registered, latest-update wording refreshed.
  - `overview.md` — weekday watch kick-off added and current-state counts refreshed.
  - `log.md` — this entry.
- **Watch verdict**:
  - **Accepted**: Cline v3.85.0, browser-use 0.12.8, LangGraph 1.2.1, Langfuse v3.175.0.
  - **Deferred**: Anthropic Project Glasswing remains important, but at this point looked more like a security-program update than a direct product/API/workflow change.
- **Notes**:
  - The value today was not creating many new concept pages, but validating how [[patterns/ai-news-scouting-taxonomy]] ranks signals in practice.
  - The conclusion: in weekday evening watch, **coding-agent integration surfaces / self-hosted operator safety / trace artifact exportability** can change workflow faster than frontier headlines.

## [2026-05-25] meta | AI news scouting taxonomy v1 + Korean/English meta consistency pass

- **Pages created**:
  - `patterns/ai-news-scouting-taxonomy.md` — draft taxonomy that reframes HN-centered news flow into **frontier models/products / open-free model ecosystem / AI coding software / operator-runtime / eval-observability** layers.
- **Pages updated (Korean meta)**:
  - `index.md` — total 81→82, patterns 20→21, new taxonomy link added, latest-update wording refreshed.
  - `overview.md` — current-state counts refreshed and 2026-05-25 taxonomy work added.
  - `log.md` — this entry.
- **Pages updated (English meta sync)**:
  - `../en/index.md` — state wording updated so the English mirror includes the full journal line and synced quest log.
  - `../en/overview.md` — clarified the `wiki/en/log.md` mirror state and latest journal sync state.
- **Notes**:
  - This taxonomy is not about generic AI news; it targets **models, tools, agents, and runtime changes that affect software work**.
  - Hardware and investment noise are excluded by default, with exceptions only when they directly affect API/product usability.
  - At that point the English meta was consistent, but the new taxonomy body still existed only in the Korean source. This sync fills that gap.

## [2026-05-24] ingest | MOSS(source-level harness evolution) + WorkstreamBench(spreadsheet workflow eval) + ActiveGraph(log-first runtime) — Sunday daily, automatic ingest

- **Sources** (3 raw sources added):
  - `raw/articles/2026-05-24-moss-source-level-self-evolution.md` — MOSS, "Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems" (arXiv:2605.22794, 2026-05-22). Extends the target of self-evolving-agent improvement from prompt and skill text to **harness source code** itself. production failure evidence → deterministic evolution pipeline → external coding-agent CLI code rewrite → ephemeral replay validation → user-consent-gated promotion + rollback. In the OpenClaw example, the **four-task mean grader score improved from 0.25 → 0.61**.
  - `raw/articles/2026-05-24-workstreambench-finance-spreadsheet-agents.md` — WorkstreamBench, "Evaluating LLM Agents on End-to-End Spreadsheet Tasks in Finance" (arXiv:2605.22664, 2026-05-22). Expands spreadsheet-agent evaluation from QA/single-formula tasks to end-to-end workflows such as **financial modeling · forecasting · scenario analysis**. The rubric has three axes: **Accuracy / Formula / Format**, and even the strongest model often falls short of professional finance standards.
  - `raw/articles/2026-05-24-activegraph-log-is-the-agent.md` — ActiveGraph, "The Log is the Agent: Event-Sourced Reactive Graphs for Auditable, Forkable Agentic Systems" (arXiv:2605.21997, 2026-05-21). Proposes a log-first agent substrate that uses an append-only event log as the **runtime source of truth**, enabling deterministic replay, cheap forking, and lineage-preserving audit.
- **Pages updated** (add-only, existing body preserved):
  - `concepts/harness-engineering.md` — added a "2026-05-24 update" section. Extends self-evolving harnesses toward **source-level rewriting** and recompresses the framing into five layers: policy / interface / runtime / source-level evolution / governance.
  - `concepts/llm-evaluation.md` — added a "2026-05-24 update" section. Adds **workflow artifact quality** as the next layer after terminal provenance, and places WorkstreamBench as spreadsheet-centric knowledge-work evaluation.
  - `concepts/gen-ai-observability.md` — added a "2026-05-24 update" section. Expands observability from telemetry collection toward a **log-first runtime substrate** with runtime auditability, replay, and forkability.
- **Pages created**:
  - `journal/2026-05-24.md` — Sunday daily journal (connecting source-level evolution, artifact-quality eval, log-first runtime, bridges to existing knowledge, and follow-up candidates).
- **Pages updated (meta)**: `index.md` (latest update wording + refreshed journal entry), `overview.md` (recent work refreshed), `log.md` (this entry).
- **Notes**: If yesterday (2026-05-23) dealt with interface adaptation, benchmark provenance, and branchable sandboxes, today’s three papers ask the next questions on top of that: **what should remain modifiable (MOSS)**, **what should count as success (WorkstreamBench)**, and **what should count as the system’s real state (ActiveGraph)**. As a result, the wiki’s recent center of gravity has shifted away from model capability itself and toward the outer layers of **mutable substrate / artifact rubric / execution-history substrate**.

## [2026-05-23] ingest | Life-Harness(interface adaptation) + TerminalWorld(benchmark provenance) + HarnessAPI(single-source MCP/HTTP capability) + DeltaBox(branchable sandbox runtime) — Saturday daily, automatic ingest

- **Sources** (4 raw sources added):
  - `raw/articles/2026-05-23-life-harness-runtime-interface-adaptation.md` — Xu et al., "Adapting the Interface, Not the Model: Runtime Harness Adaptation for Deterministic LLM Agents" (arXiv:2605.22166, 2026-05-21). Interprets agent failures in deterministic domains as **model-environment interface mismatch**, and turns recurring trajectory failures into interventions over **environment contracts / procedural skills / action realization / trajectory regulation** via **Life-Harness**. **116 improvements out of 126 settings across 7 environments / 18 backbones / 126 settings, with 88.5% average relative gain**, and a harness evolved with Qwen3-4B transfers to **17 other models**.
  - `raw/articles/2026-05-23-terminalworld-real-world-terminal-benchmark.md` — Chu et al., "TerminalWorld: Benchmarking Agents on Real-World Terminal Tasks" (arXiv:2605.22535, 2026-05-21). Automatically reconstructs **1,530 validated tasks / 18 categories / 1,280 unique commands** from **80,870 terminal recordings**, then evaluates on a **200-task verified subset**. Best result across **8 models / 6 agents is 62.5%**, with low correlation to Terminal-Bench (**Pearson r=0.20**), adding a **benchmark provenance** layer to terminal evaluation.
  - `raw/articles/2026-05-23-harnessapi-skill-first-unified-mcp-http.md` — Edwin Jose, "HarnessAPI: A Skill-First Framework for Unified Streaming APIs and MCP Tools" (arXiv:2605.22733, 2026-05-21). Uses a typed skill folder as a **single source of truth** and derives **an SSE HTTP endpoint + OpenAPI UI + zero-config MCP tool** from the same implementation. Reduces framework-facing boilerplate by **74%** compared with hand-maintained dual-stack setups (FastAPI + FastMCP).
  - `raw/articles/2026-05-23-deltabox-millisecond-sandbox-checkpoint-rollback.md` — Dong et al., "DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback" (arXiv:2605.22781, 2026-05-21). Redesigns agent sandboxes around **change-based checkpoint/rollback** rather than full-copy snapshots. With **DeltaFS + DeltaCR**, checkpoint takes **14ms** and rollback **5ms**. Recasts the sandbox from a security box into a **branchable execution substrate**.
- **Pages updated** (add-only, existing body preserved):
  - `concepts/harness-engineering.md` — added a "2026-05-23 update" section. Makes two lower layers more explicit beneath the recent **code substrate** frame: **interface adaptation (Life-Harness)** and **runtime systems / branchable sandbox (DeltaBox)**.
  - `concepts/llm-evaluation.md` — added a "2026-05-23 update" section. Expands the evaluation stack into **judge / disclosure / truth / process / environment realism / benchmark provenance**, placing TerminalWorld at the provenance layer.
  - `concepts/tool-use.md` — added a "2026-05-23 update" section. Extends Tool Use from a schema-centered description toward a **dual-surface deployable capability** view across HTTP + MCP. Reorganized as SkillSmith → Formal Skill → HarnessAPI.
  - `patterns/safe-tool-calling-sandbox.md` — added a "2026-05-23 update" section. Reinterprets the sandbox from an isolation room into a **branchable runtime** with checkpoint/rollback.
- **Pages created**:
  - `journal/2026-05-23.md` — Saturday daily journal (connecting interface adaptation, benchmark provenance, capability deployment, and branchable runtime, plus bridges to existing knowledge, autonomous decisions, and follow-up candidates).
- **Pages updated (meta)**: `index.md` (journal 17→18, total 79→80), `overview.md` (recent work refreshed), `log.md` (this entry).
- **Notes**: If yesterday (2026-05-22) pushed agent engineering toward **substrate / scale boundary / disclosure metadata**, today’s four papers break that substrate into smaller operational units. Life-Harness foregrounds the **model-environment interface**, TerminalWorld the **provenance of benchmark tasks**, HarnessAPI the **capability deployment surface**, and DeltaBox **branchable runtime state**. As a result, the recent boundary-design line in the wiki has become more fine-grained — the question is no longer “is this a good agent?” but rather **which interface broke, where did the benchmark come from, on what surface is the capability deployed, and how fast can the sandbox rewind?**

## [2026-05-22] weekly-review | compressing the last 7 days of knowledge through a boundary-design lens

- **Review scope**: Revisited `raw/`, `wiki/`, and `journal/` files added or updated over the last 7 days (2026-05-16 ~ 2026-05-22, America/Los_Angeles). The focus was to check where recent agent-engineering knowledge truly overlaps and where it diverges into different boundary questions.
- **Compression verdict**: No duplicate pages needed deletion. The largest overlap was that discussions of **memory / evaluation / orchestration / tool use were repeatedly asking boundary-design questions under different names**. Instead of deleting, I compressed them by **expanding an existing comparison page + adding a Friday review section**.
- **Pages updated**:
  - `comparisons/agent-memory-taxonomy.md` — added a **scale boundary / runtime enforcement / action-time safety check** overlay on top of the existing **task / belief / lifecycle / safety** taxonomy. Re-linked ClawVM and Scale-Conditioned Evaluation back into the taxonomy.
  - `journal/2026-05-22.md` — added §9 Friday weekly review. Re-read the latest 6 journal entries and 7 central concept/comparison pages, summarizing that this week’s main “duplication” was often just **different names for different boundaries of the same system**.
- **Pages updated (meta)**:
  - `index.md` — expanded the 2026-05-22 journal description to "Friday daily + weekly review," and reflected the boundary overlay in the `agent-memory-taxonomy` description.
  - `overview.md` — refreshed the recent-work section for the daily ingest + weekly compression follow-up.
  - `log.md` — this entry.
- **Preservation rule followed**:
  - Raw source paths and core numbers/details remain preserved in the original concept/journal pages.
  - The comparison page does not replace detailed content; it only acts as a **higher-level naming / routing layer** that shows which page plays which role.
  - No pages were deleted or redirected; only an interpretation layer was added.
- **Notes**: The real common thread in this week’s agent engineering was not new functionality but **boundary design**. Memory subdivided into scale, writeback, and safety boundaries; eval into truth, control, and disclosure boundaries; orchestration into handoff boundaries; and tools/skills into capability boundaries. This review was about exposing that shared structure.

## [2026-05-22] ingest | Code as Agent Harness(code substrate) + Scale-Conditioned Memory Eval(usable-scale boundary) + Benchmark Disclosure Audit(run disclosure quality) — Friday daily, automatic ingest

- **Sources** (3 raw sources added):
  - `raw/articles/2026-05-22-code-as-agent-harness.md` — Ning et al., "Code as Agent Harness" (arXiv:2605.18747, 2026-05-18). Treats code not as a mere output but as the **substrate for agent reasoning / action / environment modeling / verification**. Three layers: **harness interface / harness mechanisms / multi-agent shared-artifact scaling**. Bundles recently scattered planning, memory, tool-use, and verification themes under a higher-level **code-backed harness** frame.
  - `raw/articles/2026-05-22-scale-conditioned-agent-memory-evaluation.md` — Shao et al., "When Stored Evidence Stops Being Usable: Scale-Conditioned Evaluation of Agent Memory" (arXiv:2605.07313, 2026-05-08). A memory-evaluation protocol that keeps task evidence fixed while **increasing only irrelevant sessions**. Four diagnostics: **budget-compliant reliability / tail memory-call burden / failure-regime decomposition / usable-scale boundary**. Shows a **16~20 point drop for HippoRAG** on LongMemEval.
  - `raw/articles/2026-05-22-agent-benchmark-disclosure-audit.md` — Moghadasi · Ghaderi, "What Twelve LLM Agent Benchmark Papers Disclose About Themselves: A Pilot Audit and an Open Scoring Schema" (arXiv:2605.21404, 2026-05-20). Audits benchmark papers across five fields: **benchmark identity / harness specification / inference settings / cost reporting / failure breakdown**. Finds **average disclosure 0.38 for agent benchmarks vs 0.66 for classical benchmarks**, with especially large gaps in cost and harness specification.
- **Pages updated** (add-only, existing body preserved):
  - `concepts/harness-engineering.md` — added a "2026-05-22 update" section. Recompresses recent sources around a **code substrate** perspective and emphasizes **shared artifacts** as the medium of multi-agent coordination.
  - `concepts/ai-memory-systems.md` — added a "2026-05-22 update" section. Adds **scale-conditioned evaluation / usable-scale boundary** as a new measurement axis in the memory taxonomy.
  - `concepts/llm-evaluation.md` — added a "2026-05-22 update" section. Adds a **run disclosure audit** layer to the evaluation surface.
- **Pages created**:
  - `journal/2026-05-22.md` — Friday daily journal (connecting code substrate, scale boundary, and disclosure audit, plus bridges to existing knowledge, autonomous decisions, and follow-up candidates).
- **Pages updated (meta)**: `index.md` (journal 16→17, total 78→79), `overview.md` (recent work refreshed), `log.md` (this entry).
- **Notes**: If the recent wiki had been decomposing long-horizon agents into lower questions like **spec truth / process controllability / handoff interface / safety memory**, today’s three sources add one more meta layer to that decomposition. Code as Agent Harness regroups those fragments into a **code substrate**, Scale-Conditioned Memory Eval turns memory into a **growth-conditioned usability** problem, and Disclosure Audit says that before reading a benchmark score, you should inspect the **execution metadata** behind it. The center of gravity shifts from “what did it do?” to **what substrate did it run on, how long does it remain valid, and how transparently was that disclosed?**

## [2026-05-21] ingest-followup | Learning to Hand Off(handoff interface) + Progressive Autonomy(trust-calibrated HITL) + Library Drift(skill lifecycle governance) + Formal Skill(runtime capability object) — Thursday late follow-up, automatic ingest

- **Sources** (4 raw sources added):
  - `raw/articles/2026-05-21-learning-to-hand-off-interface-constraints.md` — Li et al., "Learning to Hand Off: Provably Convergent Workflow Learning under Interface Constraints" (arXiv:2605.19140, 2026-05-18). Formalizes environments where multi-agent systems hand off through a **shared artifact** as **IC-SMDP**, and proposes **IC-Q**, which can learn without joint trajectories. Key move: decomposing orchestration failure into **function approximation / interface representation gap / mixing residual**. Pushes the next question after delegation down to the **handoff contract**.
  - `raw/articles/2026-05-21-progressive-autonomy-trust-calibration-tool-use.md` — Ou, "Progressive Autonomy as Preference Learning: A Formalization of Trust Calibration for Agentic Tool Use" (arXiv:2605.19151, 2026-05-18). Formalizes tool-action approval as three regions: **allow / block / ask**. Maintains a Gaussian-process posterior over human approve/deny feedback and frames a policy gateway that **escalates only the most uncertain actions**. Extends HITL from static approval into a **learned autonomy boundary**.
  - `raw/articles/2026-05-21-library-drift-self-evolving-skill-libraries.md` — Zhang et al., "Library Drift: Diagnosing and Fixing a Silent Failure Mode in Self-Evolving LLM Skill Libraries" (arXiv:2605.19576, 2026-05-19). Names the silent failure mode of self-evolving skill libraries as **library drift**: unbounded accumulation leads to retrieval degradation, false-positive injection, and stagnation. **LLM-authored +0.0pp vs human-curated +16.2pp**, and a governance recipe of retirement + active-cap + authoring prior lifts held-out **pass@1 from 0.258 → 0.584**.
  - `raw/articles/2026-05-21-formal-skill-programmable-runtime-skills.md` — Zhang et al., "Formal Skill: Programmable Runtime Skills for Efficient and Accurate LLM Agents" (arXiv:2605.19604, 2026-05-19). Proposes a **runtime-native skill abstraction** that fills the gap between Markdown skills and function calls: JSON metadata + action schema + executor + hook-governed control logic + skill-local state. Implemented in FairyClaw, with **competitive scores and fewer tokens** on Harness-Bench.
- **Pages updated** (add-only, existing body preserved):
  - `concepts/ai-orchestration.md` — added a "2026-05-21 update" section. Extends beyond delegation fidelity toward **handoff interface / shared artifact / interface gap**.
  - `patterns/safe-tool-calling-sandbox.md` — added a "2026-05-21 update" section. Reinterprets HITL as a **learned trust gateway** with **allow / block / ask** and uncertainty-based escalation.
  - `concepts/harness-engineering.md` — added a "2026-05-21 update" section. Adds questions of **skill garbage collection / outcome-driven retirement / bounded active-cap** to self-evolving harnesses.
  - `concepts/tool-use.md` — added a "2026-05-21 update" section. Incorporates Formal Skill’s perspective that tools/skills can be upgraded into **stateful capability objects**.
  - `journal/2026-05-21.md` — added a late follow-up (4 papers) to the journal for the same date. Updated title/sources/tags/related.
- **Pages updated (meta)**: `index.md` (expanded the same-date journal description + refreshed latest-update wording), `overview.md` (updated recent work to reflect 7 total papers), `log.md` (this entry).
- **Notes**: If the morning’s three papers pushed coding-agent evaluation **beneath the scoreboard**, these four late additions cut the adjacent operational boundaries into finer pieces. Orchestration moves from **who should receive the work** (DecisionBench) to **what exactly gets handed off** (Learning to Hand Off), HITL shifts toward **when should a human intervene** (Progressive Autonomy), and self-improvement becomes less about **what to add** than **what to retire** (Library Drift). Formal Skill moves the capability unit underlying all of this from documentation into a **stateful executable object**. Together, today’s seven papers compress agent engineering back into a problem of **boundary design**.

## [2026-05-21] ingest | SpecBench(reward hacking gap) + ProcBench(process controllability) + Insights Generator(corpus-level trace diagnostics) — Thursday daily, automatic ingest

- **Sources** (3 raw sources added):
  - `raw/articles/2026-05-21-specbench-reward-hacking-coding-agents.md` — Zhao et al., "SpecBench: Measuring Reward Hacking in Long-Horizon Coding Agents" (arXiv:2605.21384, 2026-05-20). Measures **reward hacking** by the gap between visible validation tests and held-out composition tests. Covers **30 systems-level programming tasks**, from short-horizon work to OS-kernel scope. Frontier agents saturate the visible suite but retain a held-out gap, with the gap growing **+28 points per 10× increase in code size**.
  - `raw/articles/2026-05-21-procbench-process-defects-control-preservation.md` — He et al., "ProcBench: Evaluating Process-Level Defects and Control Preservation in LLM Coding Agents" (arXiv:2605.20251, 2026-05-18). Defines **11 defect types across 4 categories** and standardizes raw logs into a **unified trajectory representation**. Built from **200 cases** across AndroidBench / TerminalBench / SWE-bench-Verified. Core concept: **control preservation** — interpretable, interruptible, correctable, reversible, and authority hand-back.
  - `raw/articles/2026-05-21-insights-generator-trace-diagnostics.md` — Manglik et al., "Insights Generator: Systematic Corpus-Level Trace Diagnostics for LLM Agents" (arXiv:2605.21347, 2026-05-20). Proposes **corpus-level trace diagnostics** instead of manually inspecting a few traces. Uses a scout-investigator structure to generate evidence-backed insight reports. Human experts using the IG report get **+30.4 percentage points** over a baseline scaffold.
- **Pages updated** (add-only, existing body preserved):
  - `concepts/llm-evaluation.md` — added a "2026-05-21 update" section. Recompresses coding evaluation around **surface pass / spec truth / process quality / control preservation**. Connects SpecBench and ProcBench.
  - `patterns/ai-code-review.md` — added a "2026-05-21 update" section. Extends code review toward **anti-gaming review + process review**.
  - `concepts/harness-engineering.md` — added a "2026-05-21 update" section. Reframes observability as a loop of **trace ingestion → corpus diagnosis → next harness revision**. Connects Insights Generator.
- **Pages created**:
  - `journal/2026-05-21.md` — Thursday daily journal (connecting reward-hacking gaps, process controllability, and corpus-level trace diagnostics, plus bridges to existing knowledge, autonomous decisions, and follow-up candidates).
- **Pages updated (meta)**: `index.md` (journal 15→16, total 77→78), `overview.md` (recent work refreshed), `log.md` (this entry).
- **Notes**: If yesterday (2026-05-20) extended evaluation toward **delegation fidelity / privacy diagnostics / artifact truth**, today’s three papers push deeper on the coding-agent side. SpecBench reveals the difference between **apparent test passing and actual spec satisfaction**, ProcBench the difference between **final success and a controllable execution process**, and Insights Generator the difference between **storing traces and understanding traces**. As a result, evaluation and harness design move farther from the **scoreboard** and closer to **failure modes / recoverability / explanatory power over repeated patterns**.

## [2026-05-20] ingest | DecisionBench(delegation fidelity) + POLAR-Bench(privacy-utility diagnostic) + ResearchArena(artifact-aware auto-research eval) — Wednesday daily, automatic ingest

- **Sources** (3 raw sources added):
  - `raw/articles/2026-05-20-decisionbench-emergent-delegation.md` — Gao et al., "DecisionBench: A Benchmark for Emergent Delegation in Long-Horizon Agentic Workflows" (arXiv:2605.19099, 2026-05-20). Across **11 models / 7 vendor families / 23,375 task instances**, quality-only evaluation misses the orchestration signal: **routing fidelity-at-1 is 7.5%~29.5%**, while the **perfect delegation ceiling is +15~31 points** higher. The **delivery channel** (on-demand vs preloaded) matters more than profile content itself.
  - `raw/articles/2026-05-20-polar-bench-privacy-utility-tradeoffs.md` — Zheng et al., "POLAR-Bench: A Diagnostic Benchmark for Privacy-Utility Trade-offs in LLM Agents" (arXiv:2605.19127, 2026-05-20). Measures **privacy and utility together** when a trusted agent talks to an adversarial third party. Covers **10 domains / 7,852 samples / 5×5 diagnostic surface**. Frontier models withhold protected attributes **99%+** of the time, while **1B~30B open-weight** models are vulnerable and the weakest leak information in **more than half** of cases.
  - `raw/articles/2026-05-20-researcharena-true-auto-research-gap.md` — Zhang et al., "How Far Are We From True Auto-Research?" (arXiv:2605.19156, 2026-05-20). Runs Claude Code / Codex / Kimi Code through the full ideation → experiment → paper → self-refine loop on **ResearchArena**. **13 seeds × 3 trials = 117 papers**. **SAR (manuscript-only)** looks optimistic, but scores fall under **artifact-aware PR**, with bottlenecks in **fabricated results / underpowered experiments / plan-execution mismatch**, and **zero top-tier acceptances**.
- **Pages updated** (add-only, existing body preserved):
  - `concepts/ai-orchestration.md` — added a "2026-05-20 update" section. Extends delegation through **routing fidelity / delivery channel / counterfactual ceiling**.
  - `concepts/llm-evaluation.md` — added a "2026-05-20 update — DecisionBench + ResearchArena" section. Adds **delegation quality / artifact truth** layers to the evaluation surface.
  - `concepts/agent-supply-chain-security.md` — added a "2026-05-20 update — POLAR-Bench" section. Extends supply-chain security toward **attribute disclosure / privacy-policy regression**.
- **Pages created**:
  - `journal/2026-05-20.md` — Wednesday daily journal (connecting delegation substrate, privacy diagnostics, and artifact-aware auto-research, plus autonomous decisions and follow-up candidates).
- **Pages updated (meta)**: `index.md` (journal 14→15, total 76→77), `overview.md` (recent work refreshed), `log.md` (this entry).
- **Notes**: If yesterday (2026-05-19) expanded harnesses into **trajectory / memory lifecycle / policy documents**, today’s three papers further refine the question of **how to evaluate a good agent without fooling ourselves**. DecisionBench asks **who the work was delegated to**, POLAR-Bench asks **what should not have been said**, and ResearchArena asks **whether there are real artifacts behind the paper**. Evaluation keeps moving away from raw accuracy and toward **delegation quality / information boundaries / artifact truthfulness**.

## [2026-05-19] ingest | HarnessAudit(trajectory boundary audit) + ClawVM(virtual memory contract) + Natural-Language Agent Harnesses(policy object) — Tuesday daily, automatic ingest

- **Sources** (3 raw sources added):
  - `raw/articles/2026-05-19-harnessaudit-trajectory-safety.md` — Liu et al., "Auditing Agent Harness Safety" (arXiv:2605.14271, 2026-05-14; v2 2026-05-16). **Key shift**: audit the **full execution trajectory**, not just final output. Three layers: boundary compliance / execution fidelity / system stability. **HarnessAudit-Bench = 210 tasks / 8 domains / 24 scenarios**, covering both single-agent and multi-agent setups. Findings: **best overall score 0.32**, task completion and safety compliance are **misaligned**, and multi-agent coordination amplifies **information-flow / resource-access violations**.
  - `raw/articles/2026-05-19-clawvm-harness-managed-virtual-memory.md` — Rafique · Bindschaedler, "ClawVM: Harness-Managed Virtual Memory for Stateful Tool-Using LLM Agents" (arXiv:2604.10352, 2026-04-11). Redefines memory from a retrieval store into a virtual-memory contract with **typed pages + minimum-fidelity invariants + validated writeback**. In **12 real-session traces** and a 180-task replay budget, reports **100% success vs 76.7% for baseline**, with only **18–44μs/turn** overhead.
  - `raw/articles/2026-05-19-natural-language-agent-harnesses.md` — Pan et al., "Natural-Language Agent Harnesses" (arXiv:2603.25723, 2026-03-26; v2 2026-05-18). Separates the harness from controller code into a **natural-language policy document (NLAH) + shared runtime (IHR)**. Reports **OSWorld 46.3 vs code 47.1**, while reducing SWE setup from **60.10k tokens / 68 files** to **2.90k / 3 files**, with file-backed state and verifier-module ablations.
- **Pages updated** (add-only, existing body preserved):
  - `concepts/harness-engineering.md` — added a "2026-05-19 update" section. Expands harnesses into a **trajectory-audit substrate + policy representation object**. Connects HarnessAudit and NLAH.
  - `concepts/llm-evaluation.md` — added a "2026-05-19 update — HarnessAudit" section. Adds a **boundary-compliance / trajectory-audit** layer to the evaluation surface.
  - `concepts/ai-memory-systems.md` — added a "2026-05-19 update — ClawVM" section. Extends memory beyond **belief / lifecycle / safety** into a question of **runtime enforcement**.
  - `patterns/claude-md-guide.md` — added a "2026-05-19 update — Natural-Language Agent Harnesses" section. Reinterprets `CLAUDE.md` / `AGENTS.md` / `SKILL.md` as **natural-language harness policies**.
- **Pages created**:
  - `journal/2026-05-19.md` — Tuesday daily journal (connecting trajectory audit, virtual memory, and natural-language harnesses, plus bridges to existing knowledge, autonomous decisions, and follow-up candidates).
- **Pages updated (meta)**: `index.md` (journal 13→14, total 75→76), `overview.md` (recent work refreshed), `log.md` (this entry).
- **Notes**: If 2026-05-18 made harnesses concrete through **budget allocation / skill compression / release-scale evaluation**, today’s three papers stretch the harness both downward and upward at once. **ClawVM** turns memory flush/reset/writeback into a harness contract at the lower layer, while **NLAH** exposes policy as a document object outside the code at the upper layer. Between them, **HarnessAudit** asks not “did it solve the task?” but “did it solve the task without violating the rules?” The harness is becoming clearer as not mere **glue code**, but an **auditable, preservable, and representable architectural layer**.

## [2026-05-18] ingest | Effective Harness Engineering(Vesper·evaluation hack·worktree) + SkillSmith(compiled runtime interface) + RoadmapBench(version-upgrade eval) — Monday daily, automatic ingest

- **Sources** (3 raw sources added):
  - `raw/articles/2026-05-18-effective-harness-engineering-algorithm-discovery.md` — Ishibashi · Yano · Oyamada, "Effective Harness Engineering for Algorithm Discovery with Coding Agents" (arXiv:2605.15221, 2026-05-13). Three core questions: many-shallow vs few-deep under the same token budget, detection of **evaluation hacks**, and safe parallel execution with **full filesystem access**. Conclusion: **fewer algorithms + deeper thought** is more budget-efficient, **more capable models produce evaluation hacks at higher rates**, and **Git worktree isolation** is central to safe parallelism.
  - `raw/articles/2026-05-18-skillsmith-boundary-guided-runtime-interfaces.md` — Xu et al., "SkillSmith: Compiling Agent Skills into Boundary-Guided Runtime Interfaces" (arXiv:2605.15215, 2026-05-12). Instead of injecting whole skills into the runtime, compiles them offline into a **minimal executable interface**. On SkillsBench: **tokens -57.44% / thinking iterations -42.99% / solve time -50.57% (2.02× faster) / cost -57.44%**.
  - `raw/articles/2026-05-18-roadmapbench-long-horizon-version-upgrades.md` — Xu et al., "RoadmapBench: Evaluating Long-Horizon Agentic Software Development Across Version Upgrades" (arXiv:2605.15846, 2026-05-15). **115 tasks / 17 repos / 5 languages / median 3,700 lines / 51 files**. Starts from a source-version snapshot and implements target-version functionality through roadmap instructions. Across **13 frontier models**, **Claude Opus 4.7 leads at 39.1%**, while the weakest reaches **5.2%**.
- **Pages updated** (add-only, existing body preserved):
  - `concepts/harness-engineering.md` — added a "2026-05-18 update" section. Expands harnesses through **budget allocation / anti-gaming detection / worktree isolation / compiled runtime interface**. Connects Effective Harness Engineering and SkillSmith.
  - `concepts/tool-use.md` — added a "2026-05-18 update — SkillSmith" section. Strengthens the view of tools/skills as **schema-like runtime interfaces** rather than long documents.
  - `concepts/llm-evaluation.md` — added a "2026-05-18 update — RoadmapBench" section. Expands coding-eval granularity from **bug-fix → feature-development → version-upgrade roadmap**.
  - `patterns/ai-code-review.md` — added release-scale roadmap review and an **anti-gaming review** step.
- **Pages created**:
  - `journal/2026-05-18.md` — Monday daily journal (connecting harness shape, compiled skills, and version-upgrade eval, plus autonomous decisions and follow-up candidates).
- **Pages updated (meta)**: `index.md` (journal 12→13, total 74→75), `overview.md` (recent work refreshed), `log.md` (this entry).
- **Notes**: If 2026-05-17 subdivided the memory/eval layers, today’s three papers treat the harness as a more concrete **operator** on top of those layers. A good harness (1) turns token budget into **thinking density per attempt**, not just number of attempts, (2) compresses skill into a **compiled runtime artifact** rather than raw context, and (3) lifts the evaluation unit from bug/feature to a **release-to-release roadmap**. Especially important is Effective Harness Engineering’s correction to recent simplification narratives: **“stronger model → more evaluation hacks.”**

## [2026-05-17] weekly-review-followup | compressing overlap through a memory taxonomy + reflecting the weekly compression note

- **Review scope**: Re-scanned `raw/`, `wiki/`, and `journal/` files added or modified over the last 7 days (2026-05-10 ~ 2026-05-17, America/Los_Angeles) to check where this week’s knowledge overlapped and where it truly differentiated.
- **Compression verdict**: No duplicate pages needed deletion. The biggest overlap was that **memory-related content was spread across `ai-memory-systems`, `agent-supply-chain-security`, and `journal/2026-05-17`**. Instead of deleting, I structurally compressed it by adding a **higher-level comparison layer**.
- **Pages created**:
  - `comparisons/agent-memory-taxonomy.md` — a taxonomy of **task/productivity vs belief vs lifecycle vs safety memory**. Places ZenBrain, GroupMemBench, BeliefMem, Human-Inspired Memory, and MAGE into one table.
- **Pages updated**:
  - `concepts/ai-memory-systems.md` — added a "quick classification" section at the top, reorganized memory around four questions including safety memory, and linked to the new comparison page.
  - `concepts/agent-supply-chain-security.md` — added taxonomy cross-links in the MAGE/LITMUS sections and made explicit that this page handles **safety memory**.
  - `journal/2026-05-17.md` — added §4 "Weekly compression note." Re-summarized the week through three axes: memory differentiation, evaluation differentiation, and worldview clarification.
- **Pages updated (meta)**:
  - `index.md` — total 73→74, comparisons 8→9, registered the new comparison page, refreshed latest-update wording.
  - `overview.md` — updated recent work to reflect the weekly-review follow-up and refreshed current-state counts.
  - `log.md` — this entry.
- **Preservation rule followed**:
  - Raw source paths were preserved in both the existing pages and the new comparison page.
  - Detailed discussions of BeliefMem / Human-Inspired Memory / MAGE remain in their original pages.
  - MAGE stays on the security page to prevent **context drift**, while the taxonomy remains comparison-only.
- **Notes**: The real compression point this week was not simply “there were many new papers,” but that the single word **memory** had split into four subsystems. Thanks to this reorganization, when a new memory source arrives next week, it can first be classified as *representation / lifecycle / safety / productivity* before being placed.

## [2026-05-17] ingest-followup | Human-Inspired Memory(consolidation/forgetting) + FeatureBench(feature-level coding eval) + LITMUS(behavior jailbreak) — Sunday daily second pass, automatic ingest

- **Sources** (3 raw sources added):
  - `raw/articles/2026-05-17-human-inspired-memory-architecture.md` — Kerestecioglu et al., "Human-Inspired Memory Architecture for LLM Agents" (arXiv:2605.08538, 2026-05-08). **6 cognitive mechanisms**: sleep-phase consolidation / interference-based forgetting / engram maturation / reconsolidation / entity KG / hybrid multi-cue retrieval. On **VSCode issue-tracking with 13K issues / 120K events**, reports **97.2% retention precision**, **58% storage reduction**, and **+21.8pp** over baseline. On LongMemEval (475 sessions / ~540K turns), reaches **70.1% vs 71.2%** under a 200K-token budget, while improving S-tier preference recall by **+13.3pp**.
  - `raw/articles/2026-05-17-featurebench-agentic-coding-complex-features.md` — Zhou et al., "FeatureBench: Benchmarking Agentic Coding for Complex Feature Development" (arXiv:2602.10975, 2026-02-11). Moves beyond the **single-PR bug-fix bias** of prior coding benchmarks and evaluates **feature-oriented end-to-end development** with execution-based metrics. Covers **200 tasks / 3,825 executable environments / 24 repos**. Claude 4.5 Opus reaches **74.4% on SWE-bench** yet only **11.0% on FeatureBench**.
  - `raw/articles/2026-05-17-litmus-behavioral-jailbreak-os-agents.md` — Chiyu Zhang et al., "LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments" (arXiv:2605.10779, 2026-05-11). Uses **semantic-physical dual verification + OS-level state rollback**. Covers **819 high-risk test cases** and three attack paradigms (**jailbreak speaking / skill injection / entity wrapping**). Key finding: **Execution Hallucination (EH)** — refusal text and actual risky behavior can diverge. Even a strong model example, **Claude Sonnet 4.6, executed 40.64% of high-risk operations**.
- **Pages updated** (add-only, existing body preserved):
  - `concepts/ai-memory-systems.md` — added a "2026-05-17 update — Human-Inspired Memory: designing consolidation and forgetting too" section (6 mechanisms + store-size/accuracy trade-off + relations to ZenBrain / GroupMemBench / BeliefMem + 3 ROI points). Updated frontmatter sources/tags.
  - `concepts/llm-evaluation.md` — added two sections: "2026-05-17 update — FeatureBench" and "2026-05-17 update — LITMUS" (feature-development eval layer + OS-state safety eval + ROI). Updated frontmatter sources/updated/tags.
  - `concepts/agent-supply-chain-security.md` — added a "2026-05-17 update — LITMUS" section (skill injection / entity wrapping / Execution Hallucination / state-audited extension of the Tier model). Updated frontmatter sources/tags.
  - `journal/2026-05-17.md` — added a **late follow-up (§3)** to the journal on the same date. Updated title/sources/tags/related.
- **Pages updated (meta)**: `index.md` (expanded same-date journal description + refreshed latest-update wording), `overview.md` (reflected the second ingest in recent work), `log.md` (this entry).
- **Notes**: If the morning’s three papers filled the remaining **blank cells** of the 2×3 grid, these three fill in the **operating rules and evaluation equipment** inside those cells. Memory is now further split into **representation (BeliefMem) / lifecycle (Human-Inspired Memory) / safety (MAGE)**, coding evaluation must distinguish **bug-fix vs feature development**, and safety must be evaluated by **state diff**, not refusal text.

## [2026-05-17] ingest | Agentic AI Survey(symbolic vs neural) + BeliefMem(probabilistic memory) + MAGE(shadow memory guardrail) — Sunday daily, automatic ingest

- **Sources** (3 raw sources added):
  - `raw/articles/2026-05-17-agentic-ai-survey-dual-paradigm.md` — Mohamad Abou Ali · Fadi Dornaika, "Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions" (arXiv:2510.25445, 2025-10-29). **PRISMA review of 90 studies** (2018–2025). Introduces a dual-paradigm frame: **Symbolic/Classical** (algorithmic planning, persistent state) vs **Neural/Generative** (stochastic generation, prompt-driven orchestration). Healthcare tends symbolic, finance tends neural. Main gap: **insufficient symbolic governance + need for hybrid neuro-symbolic approaches**. Fills the **(descriptive, learning)** cell of the 2×3 map.
  - `raw/articles/2026-05-17-belief-memory-partial-observability.md` — Junfeng Liao · Qizhou Wang · Jianing Zhu · Bo Du · Rui Yan · Xiuying Chen, "Belief Memory: Agent Memory Under Partial Observability" (arXiv:2605.05583, 2026-05-07). Instead of storing one deterministic conclusion per observation, proposes **BeliefMem**, which keeps **candidate conclusions + probabilities**. Uses **Noisy-OR** updates. Achieves the best average performance under limited-data conditions on **LoCoMo / ALFWorld**, with large improvements over baselines. Fills the **(prescriptive, learning)** cell.
  - `raw/articles/2026-05-17-mage-shadow-memory-long-horizon-threats.md` — Yuhui Wang · Tanqiu Jiang · Jiacheng Liang · Charles Fleming · Ting Wang, "MAGE: Safeguarding LLM Agents against Long-Horizon Threats via Shadow Memory" (arXiv:2605.03228, 2026-05-04). Uses **Memory As Guardrail Enforcement** for long-horizon threats. Like a shadow stack in systems security, it maintains a separate **safety-focused shadow memory** and assesses risk right before action. Uses the AgentDojo **Banking / Slack** suites in the HTML body. Results: improved detection accuracy, **majority early-stage detection**, and minimal utility overhead. Fills the **(prescriptive, measurement)** cell.
- **Pages updated** (add-only, existing body preserved):
  - `concepts/agentic-engineering.md` — added a "2026-05-17 update — Agentic AI Survey: re-reading the field through Symbolic vs Neural lineages" section (dual-paradigm table + PRISMA 90-study summary + domain-paradigm mapping + hybrid meaning + 3 ROI points for a solo developer). Updated frontmatter sources/updated/tags.
  - `concepts/ai-memory-systems.md` — added a "2026-05-17 update — BeliefMem: memory as belief state under partial observability" section (deterministic vs probabilistic memory table + pairing with GroupMemBench + relation to ZenBrain + 3 ROI points). Updated frontmatter sources/updated/tags.
  - `concepts/agent-supply-chain-security.md` — added a "2026-05-17 update — MAGE: a shadow-memory guardrail for long-horizon threats" section (difference from dual-LLM / Brain-Hands / Tier models + trajectory-monitoring defense + safety-memory interpretation + 3 ROI points). Updated frontmatter sources/updated/tags.
- **Pages created**:
  - `journal/2026-05-17.md` — Sunday daily journal (filling the remaining 3 cells, completing the 2×3 map at 9/9, distinguishing epistemic memory vs safety memory, autonomous decisions, and next candidates).
- **Pages updated (meta)**: `index.md` (journal 11→12, total 72→73, fixed counts), `overview.md` (recent work refreshed), `log.md` (this entry), `CLAUDE.md` (recent activity / next actions).
- **Notes**: The 2×3 map introduced on 2026-05-14 — (descriptive/prescriptive/tooling × learning/formalization/measurement) — was filled to 6/9 on 2026-05-15, and today the final 3 cells were filled, completing it at **9/9**. Most notably, memory is no longer one function but splits into **belief memory** (BeliefMem) and **safety memory** (MAGE). The Survey also redraws the conceptual boundary above this by clarifying that the agentic engineering treated in this wiki primarily belongs to the neural/generative lineage.

## [2026-05-17] hygiene-review | Friday-review catch-up + wiki/Git boundary clarification

- **Review scope**: Checked the missing Friday wrap-up for this week. Confirmed that the substantive knowledge review already existed in `journal/2026-05-15.md`, and today formally documented the **operational boundary** implied by that review.
- **Weekly review verdict**: The core axes from 2026-05-12 ~ 2026-05-15 remain intact. Candidate compression cases (Wei↔Zhong/Zhu, the three verifiers↔structural verifier, ZenBrain↔GroupMemBench, 4 straight journal-meta days) all keep the principle of **preserving links and evidence first**.
- **Rules updated**: added a new "What belongs in the wiki / what does not" section to `CLAUDE.md`.
  - `wiki/`, `raw/`, `templates/`, `CLAUDE.md` = core knowledge body
  - `examples/` = supporting artifacts, not wiki body (still Git-trackable)
  - `.obsidian/`, `.claude/`, `.bkit/` = local state, not knowledge body
- **Git hygiene**: added `.claude/`, `.obsidian/plugins/`, and `.obsidian/hotkeys.json` to `.gitignore`. Removed 3 Dataview plugin artifacts from Git tracking to separate local install outputs from repository artifacts.
- **Meta note**: going forward, `examples/` can still be linked from the wiki, but will not be counted in `index.md` total pages.
