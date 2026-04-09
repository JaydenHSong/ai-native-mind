---
title: "Vector Database & Embeddings"
category: concepts
tags: [vector-db, embeddings, rag, pinecone, pgvector, chroma]
created: 2026-04-09
updated: 2026-04-09
sources:
  - "raw/notes/2026-04-09-vector-db-embeddings.md"
related:
  - "[[concepts/rag]]"
  - "[[concepts/ai-memory-systems]]"
status: active
confidence: high
---

# Vector Database & Embeddings

## 한줄 정의

텍스트를 고차원 벡터로 변환(Embedding)하고, 시맨틱 유사도로 검색하는 DB(Vector DB). [[concepts/rag|RAG]]의 기반 인프라.

## 핵심 내용

### Embedding이란?

텍스트를 **고차원 숫자 벡터**로 변환 (보통 768~3072차원).
- 의미가 비슷한 텍스트 = 벡터 공간에서 가깝게 위치
- "강아지"와 "개"는 수학적으로 비슷

### Vector DB 역할

1. **저장**: 대량의 임베딩 벡터
2. **검색**: 쿼리 벡터와 유사한 벡터 찾기 (ANN 알고리즘)
3. **필터링**: 메타데이터 조건 결합

### 2026 시장

- 글로벌 시장: **$3.2B** (2025), 연 24% 성장
- 모든 주요 DB가 프로덕션 수준

## 주요 Vector DB 비교

| DB | 강점 | 약점 | 적합 |
|----|------|------|------|
| **Pinecone** | 수십억 벡터 확장, 관리형 | 비용, 종속 | 엔터프라이즈 |
| **pgvector** | Postgres 통합, 트랜잭션 | 500만 벡터 이상 저하 | **2026 기본 추천** |
| **Chroma** | 배포 간단, 로컬 친화적 | 매우 큰 규모 부적합 | 프로토타입, 1인 |
| **Weaviate** | 하이브리드 검색, 필터링 | 복잡 | 복잡한 검색 |
| **Qdrant** | Rust 기반, 빠름 | 상대적 신생 | 성능 우선 |
| **Milvus** | 대규모 분산 | 복잡 | 10억+ 벡터 |

### Chroma 성능
100K 벡터 기준 **p50 20ms, p90 90ms**. 4-8GB RAM으로 수백만 벡터 처리.

## 1인 개발자 선택 가이드

```
프로토타입     → Chroma (로컬, 무료)
MVP/초기 프로덕션 → pgvector (Postgres 스택 활용)
확장 단계      → Pinecone or Qdrant Cloud
```

## 임베딩 모델 옵션

| 제공자 | 모델 | 특징 |
|--------|------|------|
| **OpenAI** | text-embedding-3-small | $0.02/1M, 기본값 |
| **OpenAI** | text-embedding-3-large | 고품질 |
| **Cohere** | embed-v3 | 다국어 강함 |
| **Voyage AI** | voyage-3 | 코드/문서 특화 |
| **로컬** | BGE, sentence-transformers | 무료, 프라이버시 |

## RAG 파이프라인

```
[Documents]
    ↓ Chunking (300-1000자)
[Chunks]
    ↓ Embedding
[Vectors] → Vector DB

[User Query]
    ↓ Embedding
[Query Vector]
    ↓ Similarity search
[Top-K Chunks]
    ↓ Context injection
[LLM] → Answer
```

## 성능 고려사항

- 100만 미만 벡터: 대부분 DB가 한 자리 ms 응답
- **차이는 임베딩 API 지연시간보다 작음**
- DB 선택보다 **임베딩 모델 선택**이 더 중요할 수 있음

## [[concepts/rag|RAG]]와의 관계

Vector DB는 RAG의 "검색" 계층. 임베딩은 RAG의 "표현" 계층.

## [[concepts/ai-memory-systems|AI Memory Systems]]과의 관계

장기 메모리의 Semantic memory 저장소로도 활용.

## 참고 소스

- [Vector DB 리서치](raw/notes/2026-04-09-vector-db-embeddings.md)
- [Vector DB Comparison 2026 (Encore)](https://encore.dev/articles/best-vector-databases)
- [pgvector vs Pinecone (Encore)](https://encore.dev/articles/pgvector-vs-pinecone)
