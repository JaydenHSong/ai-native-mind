---
title: "LLM-Wiki 패턴"
category: patterns
tags: [llm, wiki, knowledge-management, obsidian]
created: 2026-04-06
updated: 2026-04-06
sources:
  - "raw/articles/2026-04-04-llm-wiki-pattern.md"
related:
  - "[[concepts/rag]]"
  - "[[tools/obsidian]]"
  - "[[tools/claude-code]]"
  - "[[comparisons/rag-vs-llm-wiki]]"
  - "[[concepts/ai-native-architecture]]"
  - "[[concepts/context-engineering]]"
status: active
confidence: medium
---

# LLM-Wiki 패턴

## 한줄 설명

LLM이 지속적으로 유지·관리하는 개인 지식 위키를 구축하여, 학습한 지식을 누적·연결·진화시키는 패턴.

## 문제 상황

대부분의 LLM 지식 활용은 [[concepts/rag|RAG]] 방식 — 매번 원본에서 지식을 재발견한다. NotebookLM, ChatGPT 파일 업로드 등이 이 방식이다. 문제는:

- 매번 "처음 보는 사람"처럼 문서를 읽어야 함
- 5개 문서를 종합하는 질문에 매번 조각을 찾아 맞춰야 함
- 교차참조, 모순 발견, 종합 — 아무것도 축적되지 않음
- 지식이 복리(compound)로 쌓이지 않음

## 해결 방법

### 3-Layer Architecture

1. **Raw Sources** (`raw/`) — 원본 자료. 불변. LLM은 읽기만 함
2. **Wiki** (`wiki/`) — LLM이 생성·유지하는 마크다운 페이지. 요약, 개체 페이지, 개념 페이지, 비교, 종합
3. **Schema** (`CLAUDE.md`) — 위키 구조, 컨벤션, 워크플로우를 정의. 사용자와 LLM이 함께 진화시킴

### 3대 연산

- **Ingest**: 새 소스 → LLM이 읽고 → 요약 페이지 생성 → 기존 페이지 업데이트 → 교차참조 추가 → 인덱스 업데이트. 소스 하나가 10~15개 페이지를 터치할 수 있음
- **Query**: 위키 기반으로 질문에 답변. 좋은 답변은 위키에 재저장하여 탐색이 지식으로 축적됨
- **Lint**: 위키 건강 체크. 모순, 고아 페이지, 깨진 링크, 오래된 정보, 누락된 교차참조

### 핵심 인사이트

> "위키는 지속적이고, 복리로 쌓이는 산출물이다."

교차참조는 이미 되어 있고, 모순은 이미 플래그되어 있고, 종합은 읽은 모든 것을 반영한다. 소스를 추가하고 질문할 때마다 위키는 더 풍부해진다.

## 적용 예시

- **개인 성장**: 목표, 건강, 자기 개선 추적 — 일지, 글, 팟캐스트 노트를 파일링하고 구조화된 자기 그림 구축
- **리서치**: 주 단위로 논문, 글, 보고서를 읽으며 진화하는 thesis를 가진 종합 위키 구축
- **책 읽기**: 챕터별 파일링, 인물·주제·줄거리 페이지, 연결 관계 — 팬위키를 혼자 만드는 것
- **비즈니스/팀**: Slack, 회의록, 문서를 먹여서 항상 최신 상태인 내부 위키
- **경쟁 분석, 실사, 여행 계획, 수업 노트, 취미 딥다이브**

## 도구 조합

| 역할 | 도구 |
|------|------|
| 위키 브라우저/IDE | [[tools/obsidian|Obsidian]] |
| 위키 유지보수 LLM | [[tools/claude-code|Claude Code]] |
| 소스 수집 | Obsidian Web Clipper |
| 검색 (대규모) | qmd (BM25 + vector, 로컬) |
| 버전 관리 | Git |

## 장단점

| 장점 | 단점 |
|------|------|
| 지식이 복리로 축적됨 | 초기 Schema 설계 필요 |
| 교차참조·종합이 자동 유지 | LLM 비용 (대화마다 위키 읽기) |
| 사람은 사고에 집중, LLM이 잡일 담당 | 규모 커지면 검색 엔진 필요 |
| 시간이 지날수록 가치 증가 | Schema를 너무 복잡하게 만들면 역효과 |

## 역사적 맥락

Vannevar Bush의 **Memex**(1945)와 정신적으로 연결됨 — 연관 트레일이 있는 개인 큐레이션 지식 저장소. Bush의 비전은 웹보다 이 패턴에 더 가까움: 개인적, 능동적 큐레이션, 문서 간 연결이 문서 자체만큼 가치 있음. Bush가 해결 못 한 부분 — 누가 유지보수하느냐 — 을 LLM이 해결.

## 관련 패턴

- [[concepts/rag]] — LLM-Wiki가 대체/보완하는 기존 방식
- [[comparisons/rag-vs-llm-wiki]] — 두 접근법 비교

## 참고 소스

- [LLM-Wiki Pattern (Tobi Lütke)](raw/articles/2026-04-04-llm-wiki-pattern.md)
