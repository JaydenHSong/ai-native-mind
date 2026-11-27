---
title: "Cloudflare Search for Agents — 웹사이트를 AI 에이전트용 검색 API로 여는 베타"
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

# Cloudflare Search for Agents — 웹사이트를 AI 에이전트용 검색 API로 여는 베타

## 쉽게 읽기

**비유**: 지금까지 AI 에이전트는 웹사이트를 보려면 사람처럼 페이지 하나하나를 뒤적이며 읽어야 했다(크롤링). Search for Agents는 가게가 입구에 "찾는 물건은 여기서 물어보세요"라는 전용 창구를 내는 것과 같다 — 에이전트가 사이트의 검색 창구에 직접 물어보면, 사이트가 정리된 답(마크다운 문서)을 건넨다.

| 용어 | 풀이 |
|------|------|
| **Search for Agents** | Cloudflare의 베타 기능 — 대시보드 토글 하나로 자기 웹사이트를 AI 에이전트가 검색할 수 있게 만듦 |
| **하이브리드 검색** | 벡터(의미) 검색 + 키워드(단어) 검색을 함께 쓰는 방식 |
| **Markdown for Agents** | 웹사이트 콘텐츠를 AI가 읽기 쉬운 마크다운 형태로 제공하는 Cloudflare 기능 |
| **.well-known/search** | 사이트가 "여기서 검색할 수 있어요"라고 알리는 표준 주소 — 에이전트가 스스로 찾아냄 |

## 한줄 정의

2026-11-25 Cloudflare가 베타로 출시한 Search for Agents — 대시보드 토글 하나로 자기 웹사이트를 AI 에이전트가 검색할 수 있는 상태로 만든다. 사이트를 일일이 크롤링하는 대신 도메인 자체의 검색 엔드포인트를 쓰게 하는 방식. Free 포함 전 플랜에서 사용 가능.

## 핵심 내용

- **동작**: 존의 Overview 페이지 Quick Actions에서 켜면 AI Search 인스턴스(search-for-agents-<ZONE_ID>)가 자동 생성되고, 사이트를 크롤링·인덱싱한 뒤 `https://<도메인>/.well-known/search` 엔드포인트를 노출. GET과 HTTP QUERY(RFC 10008) 요청 지원, 결과는 AI가 만든 답이 아니라 Markdown 콘텐츠.
- **발견 가능성**: 모든 HTML 페이지의 <head>에 agent:endpoint·agent:method 등 검색 엔드포인트 메타데이터를 자동 삽입하고, Markdown for Agents가 켜져 있으면 Markdown 응답에도 포함. 에이전트가 엔드포인트를 스스로 찾아 키워드·자연어 질의를 보낼 수 있음.
- **검색 방식**: 하이브리드(벡터+키워드) 검색, Discover 크롤링(사이트맵+링크, 최대 10만 페이지, 24시간마다 재동기화), 임베딩 모델 @cf/qwen/qwen3-embedding-0.6b. 기본 설정은 하위도메인 제외.
- **요금**: AI Search 요금 체계 적용, 과금은 2026년 12월 1일부터 시작. 이후 포함량(월 의미 검색 1,000건) 초과 시 하이브리드 질의 1,000건당 $0.75 — 에이전트가 검색할 때마다 사이트 소유자가 부담.
- **통제**: 봇 관리·AI Crawl Control·WAF 설정이 그대로 적용됨. 검색은 정보를 찾는 기능이지, 에이전트가 내용을 올바르게 해석·인용한다는 보장은 아님.

## 왜 중요한가 (1인 개발자 관점)

1. **차단에서 제공으로**: 10월 18일 수집한 '웹사이트들의 AI 에이전트 차단'([[concepts/websites-block-ai-agents]])과 반대 방향 — 사이트가 에이전트 접근을 차단이 아니라 '제공'하는 표준화 움직임이다. Markdown for Agents의 연장선으로, "에이전트가 웹을 어떻게 쓰는가"의 규칙이 만들어지는 중이다.
2. **에이전틱 웹 인프라의 세 번째 축**: MCP(도구 연결)·A2A(에이전트 간 협력)와 함께, 에이전트가 웹을 쓰는 방식을 정하는 축이다. 내 사이트·서비스가 에이전트에게 어떻게 보일지를 직접 설계할 수 있게 됐다.
3. **과금 구조의 역전**: 에이전트가 검색할 때마다 사이트 소유자가 비용을 부담한다(1,000건당 $0.75, 월 1,000건 포함). 트래픽이 곧 비용이 되는 구조 — 에이전트 시대의 웹사이트 운영비는 '사람 방문' 기준에서 '에이전트 질의' 기준으로 바뀔 수 있다.

## 한계 (명시)

- 베타 단계. 과금은 2026년 12월 1일부터 시작 — 실제 비용 체감은 미확인.
- 검색은 정보를 찾는 기능이지, 에이전트가 내용을 올바르게 해석·인용한다는 보장은 아님(Cloudflare 명시).
- 기본 설정은 하위도메인 제외, 최대 10만 페이지 — 대규모 사이트의 전체 커버리지는 제한적.
- Cloudflare 공식 블로그 단일 출처 — 독립 검증 없음.

## 관련 개념

- [[concepts/websites-block-ai-agents]] — 반대 방향의 움직임: 플랫폼의 에이전트 차단, 차단 vs 제공의 양극화
- [[concepts/mcp]] — MCP와 함께 에이전트가 외부 자원을 쓰는 표준
- [[concepts/a2a-protocol]] — A2A와 함께 에이전틱 웹 인프라의 축

## 참고 소스

- [Cloudflare, 'Search for Agents' 베타 — 웹사이트를 AI 에이전트용 검색 API로 (Cloudflare Blog, 11-25)](raw/articles/2026-11-27-cloudflare-search-for-agents.md)
