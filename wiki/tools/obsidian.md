---
title: "Obsidian"
category: tools
tags: [obsidian, markdown, note-taking, wiki]
created: 2026-04-06
updated: 2026-04-06
sources:
  - "raw/articles/2026-04-04-llm-wiki-pattern.md"
related:
  - "[[patterns/llm-wiki]]"
  - "[[tools/claude-code]]"
  - "[[comparisons/rag-vs-llm-wiki]]"
status: active
confidence: medium
---

# Obsidian

## 한줄 설명

로컬 마크다운 파일 기반의 노트 앱으로, 그래프 뷰와 Wikilink를 통한 지식 연결에 특화.

## 핵심 기능

- **Wikilink** (`[[]]`): 페이지 간 양방향 링크로 지식 그래프 구축
- **Graph View**: 위키 구조를 시각적으로 탐색 — 허브, 고아, 클러스터 파악
- **Dataview 플러그인**: frontmatter 기반 동적 쿼리 (SQL-like)
- **Web Clipper**: 브라우저 확장으로 웹 글을 마크다운으로 클리핑
- **커뮤니티 플러그인**: Calendar, Templater, Marp 등 풍부한 생태계
- **로컬 파일**: 데이터가 내 컴퓨터에 마크다운으로 저장 — 벤더 종속 없음

## 사용법 요약

[[patterns/llm-wiki|LLM-Wiki 패턴]]에서 Obsidian의 역할:

> "Obsidian은 IDE이고, LLM은 프로그래머이며, 위키는 코드베이스이다."

- Obsidian을 한쪽에 열고, Claude Code를 다른 쪽에 열어서 사용
- LLM이 위키를 수정하면 Obsidian에서 실시간으로 결과 확인
- 그래프 뷰로 위키 구조 파악, 링크 따라가며 탐색

### LLM-Wiki 관련 설정

- **Attachment folder**: `raw/assets/`로 설정 → 이미지 로컬 저장
- **Wikilinks**: ON
- **Download attachments 핫키**: 글 클리핑 후 이미지 로컬화

## 장점과 한계

| 장점 | 한계 |
|------|------|
| 로컬 마크다운 — 영구 소유 | 모바일 동기화는 유료 (Sync) |
| 그래프 뷰 — 위키 구조 시각화 | LLM이 인라인 이미지를 직접 읽지 못함 |
| 플러그인 생태계 풍부 | 초기 설정 필요 |
| Git과 자연스럽게 연동 | 협업 기능 제한적 |

## 관련 도구

- [[tools/claude-code]] — 위키 유지보수를 담당하는 LLM

## 참고 소스

- [LLM-Wiki Pattern (Tobi Lütke)](raw/articles/2026-04-04-llm-wiki-pattern.md)
