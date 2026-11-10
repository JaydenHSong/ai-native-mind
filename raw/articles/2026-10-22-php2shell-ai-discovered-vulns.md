---
title: "PHP2Shell — AI가 찾아낸 PHP 치명적 취약점 2건 긴급 공개"
source_url: "https://www.wiz.io/blog/php2shell-ai-discovered-critical-vulnerabilities"
source_type: "news"
authors: ["Wiz", "Computer Weekly", "The New Stack", "cryptobriefing.com", "oossa.org", "OpenAI Codex Security"]
published: 2026-10-21
fetched: 2026-10-22
tags: [php2shell, cve-2026-109618, vulnerability-discovery, ai-offense, wiz, gpt-5-6-sol, gemini-4-argon, php-rce]
status: raw
---

# PHP2Shell — AI가 찾아낸 PHP 치명적 취약점 2건 긴급 공개

> 2026-10-21 PHP 엔진의 두 개 치명적 취약점 (CVE-2026-109618 · CVE-2026-109619, CVSS v4.0 9.2) 긴급 공개. 인증 없는 원격 코드 실행 (RCE) 가능, PHP 5.4까지 거슬러 올라가는 메모리 안전성 결함으로 10년 넘게 숨어 있었음. 보안업체 Calif는 OpenAI의 GPT-5.6 Sol을, Wiz는 자사 Wiz Atlas와 Google의 Gemini 4 Argon을 이용해 독립적으로 발견 — OpenAI Codex Security 팀도 참여. Wiz는 한 명의 연구원이 프론티어 모델을 이용해 한 주 만에 전문가 팀이 수개월 걸릴 작업을 해냈다며 "AI 변곡점"이라고 평가. 공개 예정일 (10/22) 하루 전에 세부 정보가 유출되면서 릴리스가 앞당겨졌고, 영국 NCSC는 패치가 불가능하면 시스템을 오프라인으로 둘 것을 권고. (Wiz 공식 블로그·Computer Weekly·The New Stack·cryptobriefing.com·oossa.org 교차)

## 내용

- **취약점**: CVE-2026-109618 · CVE-2026-109619 ("PHP2Shell"), CVSS v4.0 9.2. 인증 없는 RCE. PHP 5.4까지 거슬러 올라가는 메모리 안전성 결함 — 10년+ 은닉.
- **발견 주체**: Calif (OpenAI GPT-5.6 Sol 사용) · Wiz (자사 Wiz Atlas + Google Gemini 4 Argon 사용) — 독립적으로 동일 결함 발견. OpenAI Codex Security 팀도 참여.
- **생산성 주장**: Wiz — "한 명의 연구원이 프론티어 모델로 한 주 만에 전문가 팀이 수개월 걸릴 작업을 수행", "AI 변곡점".
- **릴리스 혼선**: 공개 예정일 (10/22) 하루 전 세부 정보 유출 → 릴리스 앞당김. 영국 NCSC는 패치 불가 시 시스템 오프라인 권고.
- **의의**: AI 주도 취약점 발견의 실증적 전환점 — 3사 (OpenAI·Google·Wiz) 프론티어 모델이 동일 결함을 독립 발견.

## 맥락

- [[concepts/agent-scientific-discovery]] — 연구급 에이전트의 발견 파이프라인: 문헌 접지→in-silico 가설→wet-lab 검증 — 취약점 발견도 같은 발견 파이프라인의 사이버 인스턴스.
- [[patterns/codex-security]] — OpenAI Codex Security, 취약점 탐지→패치→수정 루프 (리서치 프리뷰) — 발견 주체의 한 축.
- [[concepts/opencode-key-breach]] — OpenCode 키 노출 사고 (2026-10-18) — 코드 생태계 보안 맥락.
- [[concepts/self-improving-ai-risk]] — 자기개선 AI의 통제 상실 리스크 — AI 오펜스 역량의 가속 측면.
