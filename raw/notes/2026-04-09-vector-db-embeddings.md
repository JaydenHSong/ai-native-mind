# Vector Database & Embeddings 리서치 (2026-04-09)

## 출처
- https://www.groovyweb.co/blog/vector-database-comparison-2026
- https://encore.dev/articles/best-vector-databases
- https://encore.dev/articles/pgvector-vs-pinecone
- https://4xxi.com/articles/vector-database-comparison/

## Embedding이란?
텍스트를 고차원 숫자 벡터로 변환 (보통 768~3072차원).
의미가 비슷한 텍스트는 벡터 공간에서 가깝게 위치.

## Vector DB란?
임베딩 벡터를 저장하고 유사도 검색하는 DB.
RAG의 핵심 인프라.

## 2026 시장
- 글로벌 시장 규모: $3.2B (2025), 연 24% 성장

## 주요 Vector DB 비교

### Pinecone (클라우드 관리형)
- **장점**: 수억~수십억 벡터 확장, 완전 관리형
- **단점**: 비용, 클라우드 종속
- **적합**: 엔터프라이즈, 대규모 프로덕션

### pgvector (Postgres 확장)
- **장점**: 기존 Postgres 스택 활용, 트랜잭션 일관성, 단일 DB
- **단점**: 500만 벡터 이상에서 성능 저하
- **적합**: 이미 Postgres 쓰는 팀, 중소 규모
- **2026 기본 추천**: 대부분의 프로젝트

### Chroma (로컬 친화적)
- **장점**: 배포 간단, 4-8GB RAM으로 수백만 벡터
- **단점**: 매우 큰 규모에는 부적합
- **적합**: 프로토타입, 소규모 프로덕션, 1인 개발자
- **성능**: 100K 벡터 기준 p50 20ms, p90 90ms

### Weaviate
- **장점**: 하이브리드 검색 (키워드 + 벡터), 강력한 필터링
- **적합**: 복잡한 검색 요구사항

### Qdrant
- **장점**: Rust 기반, 빠른 성능
- **적합**: 성능 우선

### Milvus
- **장점**: 대규모 분산, 오픈소스
- **적합**: 매우 큰 규모 (10억+ 벡터)

## 선택 가이드 (1인 개발자 관점)

### 프로토타입
**Chroma** — 로컬, 간단, 무료

### MVP/초기 프로덕션
**pgvector** — Postgres 이미 쓰면 추가 DB 불필요

### 확장 단계
**Pinecone** 또는 **Qdrant Cloud**

## 성능 고려사항
- 100만 미만 벡터: 대부분 DB가 단일/두 자리 ms 응답
- 차이는 임베딩 API 지연시간보다 작음
- 벡터 DB 선택보다 임베딩 모델 선택이 더 중요할 수도

## 임베딩 모델 옵션
- **OpenAI**: text-embedding-3-small ($0.02/1M), text-embedding-3-large
- **Cohere**: embed-v3
- **Voyage AI**: voyage-3 (코드/문서 특화)
- **로컬**: sentence-transformers, BGE 등

## RAG와의 관계
Vector DB는 RAG의 "검색" 계층.
- Chunking → Embedding → Vector DB 저장
- Query → Embedding → 유사도 검색 → Top-K 청크 반환
- Top-K를 LLM 컨텍스트에 주입
