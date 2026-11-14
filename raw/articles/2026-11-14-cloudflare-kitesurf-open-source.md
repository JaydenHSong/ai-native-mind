---
title: "Cloudflare Kitesurf 오픈소스 공개 — AI 에이전트용 브라우저 엔진 (11-13)"
source_url: "https://www.unite.ai/cloudflare-open-sources-kitesurf-browser-engine-for-ai-agents/"
source_type: "news"
authors: ["Unite.AI"]
published: 2026-11-13
fetched: 2026-11-14
tags: [cloudflare, kitesurf, browser, agents, open-source]
status: raw
---

# Cloudflare Kitesurf 오픈소스 공개 — AI 에이전트용 브라우저 엔진 (11-13)

> Cloudflare가 11-13 AI 에이전트용 브라우저 엔진 Kitesurf를 Apache 2.0 라이선스로 오픈소스 공개했다. 2026-08-06 출시 때 한 약속의 이행이다. Chromium이나 브라우저 컨테이너 없이 HTML 파싱·CSS 적용·페이지 JavaScript 실행·스크린샷 렌더링을 한다.

## 내용

- **동작**: Cloudflare Workers 위에서 전적으로 동작한다(Rust/WASM 컴포넌트). Puppeteer·에이전트 하네스용 Chrome DevTools Protocol 엔드포인트를 노출한다.
- **자유도**: 개발자가 검사·수정·로컬 실행하거나 자신의 Workers 계정에서 셀프 호스팅할 수 있다(유료 플랜 필요).
- **한계**: 여전히 실험 단계로, Chrome·웹 플랫폼 호환성이 불완전하다. 셀프 호스팅은 인증을 직접 추가해야 한다(내장 인증 없음, workers.dev URL은 기본 공개). Cloudflare의 'Chromium보다 CPU·메모리 적게 쓴다'는 주장은 공개된 측정값이 없어 미검증이다.

## 맥락

- [[concepts/tool-use]] — 에이전트의 브라우저 도구 사용, Kitesurf가 대체하는 실행층 (2026-04)
- [[concepts/sierra-poppy-1-0]] — 같은 날 Poppy 1.0, 에이전트가 웹을 만나는 방식의 또 다른 축 (2026-11-13)
- [[concepts/openai-daybreak-red-team-defense-factory]] — 웹 앱을 테스트·수정하는 에이전트, 브라우저 실행 환경과 연결 (2026-11-12)
