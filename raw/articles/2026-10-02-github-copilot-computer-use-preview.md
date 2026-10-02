---
title: "GitHub Copilot computer use 퍼블릭 프리뷰 — 데스크톱 앱 직접 조작"
source_url: "https://www.vibecamp.us/ai_builder/2026-10-02"
source_type: "press-digest"
authors: ["vibecamp"]
published: 2026-10-02
fetched: 2026-10-02
tags: [github-copilot, computer-use, agent, gui-automation, desktop, approval]
status: raw
---

# GitHub Copilot computer use — 퍼블릭 프리뷰 (10/2)

> API 없는 사내 도구까지 에이전트 자동화 범위에. 화면을 읽고 직접 조작하는 에이전트의 주류화.

## 내용

- Copilot CLI와 Copilot 앱(macOS·Windows)에 computer use 기능 퍼블릭 프리뷰 오픈.
- Copilot이 화면 내용을 읽고 클릭·입력·스크롤·드래그로 여러 앱을 오가며 작업 대행.
- API·CLI·MCP 연동이 없는 레거시·GUI 전용 소프트웨어까지 자동화 범위 확대.
- 앱을 제어하기 전에는 **사용자 승인을 요청** (CLI에서는 `/computer on`으로 켜기).

## 맥락

- persistent-agent/Dots 흐름과 같은 방향: 에이전트가 "컴퓨터를 쓰는" 주체로.
- 실무 과제: 어떤 앱 제어를 허용할지 승인·권한 설계가 다음 관문 (에이전트 보안 클러스터와 연결).
