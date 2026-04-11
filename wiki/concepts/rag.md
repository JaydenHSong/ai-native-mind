---
title: "RAG (Retrieval-Augmented Generation)"
category: concepts
tags: [rag, llm, retrieval, knowledge]
created: 2026-04-06
updated: 2026-04-11
sources:
  - "raw/articles/2026-04-04-llm-wiki-pattern.md"
related:
  - "[[patterns/llm-wiki]]"
  - "[[comparisons/rag-vs-llm-wiki]]"
  - "[[concepts/context-engineering]]"
status: active
confidence: medium
---

# RAG (Retrieval-Augmented Generation)

## 쉽게 읽기

시험 때 **교과서 일부만 펼쳐 놓고** 답하는 것과 비슷하다. 질문과 관련된 문단을 찾아(retrieve) 모델 입력에 붙이고, 그걸 바탕으로 답을 생성(generate)한다. 모델이 원래 모르던 **회사 문서·최신 글**을 넣을 때 쓴다.

| 용어 | 풀이 |
|------|------|
| **청크(chunk)** | 긴 문서를 잘라 둔 **작은 조각** |
| **Top-K** | 가장 관련 있어 보이는 조각 **K개**만 사용 |
| **Embedding** | 글을 **숫자 벡터**로 바꿔 “가까움”을 재는 것 |

## 한줄 정의

LLM이 답변 시 외부 문서에서 관련 정보를 검색(retrieve)하여 맥락으로 활용하는 패턴.

## 핵심 내용

RAG(Retrieval-Augmented Generation, 검색 증강 생성)는 LLM의 지식 한계를 보완하기 위해:

1. 사용자 질문에 대해 문서 컬렉션에서 관련 청크를 검색
2. 검색된 청크를 LLM의 맥락에 포함
3. LLM이 검색된 정보를 기반으로 답변 생성

**작동 방식**: 업로드 → 청크 분할 → 임베딩 → 벡터 DB 저장 → 쿼리 시 유사도 검색 → 맥락 주입

**대표 서비스**: NotebookLM, ChatGPT 파일 업로드, 대부분의 "문서에 질문하기" 서비스

## 왜 중요한가

RAG는 현재 가장 널리 사용되는 LLM + 외부 지식 결합 방식이다. 하지만 한계를 이해해야 [[patterns/llm-wiki|LLM-Wiki 패턴]] 같은 대안이 왜 필요한지 알 수 있다.

**핵심 한계**:
- 매번 "처음 보는 사람"처럼 문서를 읽음 — 축적이 없음
- 여러 문서를 종합하는 질문에 약함 (관련 청크를 모두 찾아야 함)
- 교차참조, 모순 발견, 종합이 매번 다시 수행됨

## 관련 개념

- [[patterns/llm-wiki]] — RAG의 대안/보완으로서의 위키 패턴

## 참고 소스

- [LLM-Wiki Pattern (Tobi Lütke)](raw/articles/2026-04-04-llm-wiki-pattern.md)
