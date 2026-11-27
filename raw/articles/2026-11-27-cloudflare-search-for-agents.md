---
title: "Cloudflare, 'Search for Agents' 베타 — 웹사이트를 AI 에이전트용 검색 API로 (11-25)"
source_url: "https://blog.cloudflare.com/search-for-agents/"
source_type: "news"
authors: ["cloudflare"]
published: 2026-11-25
fetched: 2026-11-27
tags: [cloudflare, ai-search, agents, web, api, markdown-for-agents, retrieval]
status: raw
---

# Cloudflare, 'Search for Agents' 베타 — 웹사이트를 AI 에이전트용 검색 API로 (11-25)

> Cloudflare가 11월 25일 Search for Agents를 베타로 출시했다. 대시보드 토글 하나로 자기 웹사이트를 AI 에이전트가 검색할 수 있는 상태로 만든다. 사이트를 일일이 크롤링하는 대신 도메인 자체의 검색 엔드포인트를 쓰게 하는 방식이다. Free 포함 전 플랜에서 사용 가능.

## 내용

- **동작**: 존의 Overview 페이지 Quick Actions에서 켜면 AI Search 인스턴스(search-for-agents-<ZONE_ID>)가 자동 생성되고, 사이트를 크롤링·인덱싱한 뒤 `https://<도메인>/.well-known/search` 엔드포인트를 노출. GET과 HTTP QUERY(RFC 10008) 요청 지원, 결과는 AI가 만든 답이 아니라 Markdown 콘텐츠.
- **발견 가능성**: 모든 HTML 페이지의 <head>에 agent:endpoint·agent:method 등 검색 엔드포인트 메타데이터를 자동 삽입하고, Markdown for Agents가 켜져 있으면 Markdown 응답에도 포함. 에이전트가 엔드포인트를 스스로 찾아 키워드·자연어 질의를 보낼 수 있음.
- **검색 방식**: 하이브리드(벡터+키워드) 검색, Discover 크롤링(사이트맵+링크, 최대 10만 페이지, 24시간마다 재동기화), 임베딩 모델 @cf/qwen/qwen3-embedding-0.6b. 기본 설정은 하위도메인 제외.
- **요금**: AI Search 요금 체계 적용, 과금은 2026년 12월 1일부터 시작. 이후 포함량(월 의미 검색 1,000건) 초과 시 하이브리드 질의 1,000건당 $0.75 — 에이전트가 검색할 때마다 사이트 소유자가 부담.
- **통제**: 봇 관리·AI Crawl Control·WAF 설정이 그대로 적용됨. 검색은 정보를 찾는 기능이지, 에이전트가 내용을 올바르게 해석·인용한다는 보장은 아님.

## 맥락

- 10월 18일 수집한 '웹사이트들의 AI 에이전트 차단'과 반대 방향: 사이트가 에이전트 접근을 차단이 아니라 '제공'하는 표준화 움직임. Markdown for Agents의 연장선
- 에이전틱 웹 인프라: MCP·A2A와 함께 에이전트가 웹을 쓰는 방식을 정하는 세 번째 축. 위키의 websites-block-ai-agents 페이지와 교차참조할 것