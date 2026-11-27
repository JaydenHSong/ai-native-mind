---
title: "Cloudflare Search for Agents — Turning Websites into a Search API for AI Agents (Beta)"
category: concepts
tags: [cloudflare, ai-search, agents, web, api, markdown-for-agents, retrieval]
created: 2026-11-27
updated: 2026-11-27
sources:
  - "raw/articles/2026-11-27-cloudflare-search-for-agents.md"
related:
  - "[[concepts/websites-block-ai-agents]]"
  - "[[concepts/mcp]]"
  - "[[concepts/a2a-protocol]]"
status: draft
confidence: medium
---

# Cloudflare Search for Agents — Turning Websites into a Search API for AI Agents (Beta)

## Start here

**Analogy**: Until now, an AI agent that wanted to read a website had to page through it one page at a time, the way a person does (crawling). Search for Agents is like a shop opening a dedicated counter at the entrance — "ask here for what you are looking for" — so the agent asks the site's search counter directly and the site hands over an organized answer (a Markdown document).

| Term | Meaning |
|------|------|
| **Search for Agents** | Cloudflare's beta feature — a dashboard toggle that makes your own website searchable by AI agents |
| **Hybrid search** | A method that uses vector (meaning) search and keyword (word) search together |
| **Markdown for Agents** | A Cloudflare feature that serves website content in a Markdown form that is easy for AI to read |
| **.well-known/search** | The standard address where a site announces "you can search here" — agents find it on their own |

## One-line definition

Cloudflare's Search for Agents, launched in beta on 2026-11-25 — a dashboard toggle that makes your own website searchable by AI agents. Instead of crawling the site page by page, agents use the domain's own search endpoint. Available on all plans, including Free.

## Key points

- **How it works**: enabling it from Quick Actions on the zone's Overview page auto-creates an AI Search instance (search-for-agents-<ZONE_ID>), crawls and indexes the site, and exposes a `https://<domain>/.well-known/search` endpoint. GET and HTTP QUERY (RFC 10008) requests are supported; results are Markdown content, not AI-generated answers.
- **Discoverability**: search-endpoint metadata (agent:endpoint, agent:method, and more) is auto-injected into the <head> of every HTML page, and into Markdown responses when Markdown for Agents is on. Agents can find the endpoint themselves and send keyword or natural-language queries.
- **Search method**: hybrid (vector + keyword) search, Discover crawling (sitemap + links, up to 100,000 pages, re-synced every 24 hours), embedding model @cf/qwen/qwen3-embedding-0.6b. Subdomains are excluded by default.
- **Pricing**: AI Search pricing applies; billing starts December 1, 2026. After the included allowance (1,000 semantic searches per month), hybrid queries cost $0.75 per 1,000 — the site owner pays every time an agent searches.
- **Control**: bot management, AI Crawl Control, and WAF settings continue to apply. Search is a way to find information; it does not guarantee agents will interpret or cite the content correctly.

## Why it matters

1. **From blocking to providing**: the opposite direction from the "websites block AI agents" trend collected October 18 ([[concepts/websites-block-ai-agents]]) — a standardization move in which sites "provide" agent access rather than blocking it. An extension of Markdown for Agents; the rules for "how agents use the web" are being written now.
2. **A third axis of agentic-web infrastructure**: alongside MCP (tool connections) and A2A (agent-to-agent cooperation), an axis defining how agents use the web. Site and service owners can now design how they appear to agents.
3. **The billing structure is inverted**: every agent search is paid for by the site owner ($0.75 per 1,000 queries beyond the monthly 1,000 included). Traffic becomes cost — website operating costs in the agent era may shift from a "human visits" basis to an "agent queries" basis.

## Limitations (explicit)

- Beta. Billing starts December 1, 2026 — how the cost feels in practice is unconfirmed.
- Search finds information; it does not guarantee agents interpret or cite content correctly (Cloudflare's own caveat).
- Subdomains are excluded by default; the 100,000-page cap limits full coverage of very large sites.
- A single source, the Cloudflare official blog — no independent verification.

## Related concepts

- [[concepts/websites-block-ai-agents]] — the opposite move: platforms blocking agents; blocking vs providing polarization
- [[concepts/mcp]] — with MCP, a standard for how agents use external resources
- [[concepts/a2a-protocol]] — with A2A, an axis of agentic-web infrastructure

## Sources

- [Cloudflare's 'Search for Agents' beta — websites as a search API for AI agents (Cloudflare Blog, Nov 25)](raw/articles/2026-11-27-cloudflare-search-for-agents.md)
