---
title: "OpenAI 211분 장애 — 인증 DB 복제본 2개 동시 붕괴로 요청 75% 실패"
category: concepts
tags: [openai, infrastructure, reliability, outage, postgres, single-point-of-failure]
created: 2026-11-22
updated: 2026-11-22
sources:
  - "raw/articles/2026-11-22-openai-outage-211-minutes-postgres-replicas.md"
related:
  - "[[concepts/gen-ai-observability]]"
  - "[[patterns/agent-server-harness]]"
  - "[[concepts/ai-debt-boom-cracking]]"
status: draft
confidence: medium
---

# OpenAI 211분 장애 — 인증 DB 복제본 2개 동시 붕괴로 요청 75% 실패

## 쉽게 읽기

**비유**: 전 세계가 쓰는 AI 서비스가 3시간 반 동안 멈췄다. 이유는 뜻밖에도 작았다 — 로그인 확인을 맡은 데이터베이스의 복사본 2개가 정기 점검 중에 같이 고장 난 것이다. "누가 맞는지 확인해 주는" 문지기 하나가 멈추자, 뒤에 줄 선 모든 서비스가 함께 쓰러졌다. 복사본이 2개나 있었는데도 동시에 고장 나니 소용이 없었다.

| 용어 | 풀이 |
|------|------|
| **Postgres 읽기 복제본** | 원본 데이터베이스의 내용을 복사해 두는 사본 — 읽는 일을 나눠 맡아 부담을 덜어준다 |
| **단일장애점** | 하나만 고장 나도 전체가 멈추는 지점 |
| **사후보고서** | 장애가 끝난 뒤 원인과 대응을 정리해 공개하는 보고서 |

## 한줄 정의

2026년 11월 21일 오후 1시 48분~5시 21분(PT) 약 211분 동안 OpenAI API와 ChatGPT 요청 실패율이 최대 75%에 달했다. 원인은 정기 점검 중 Primary API 서비스 뒤의 Postgres 읽기 복제본 2개가 동시에 붕괴한 것. 인증을 담당하는 단일 서비스가 멈추면서 전 스택이 함께 쓰러졌다. OpenAI는 당일 사후보고서를 공개했다.

## 핵심 내용

- **시간·규모**: 11월 21일 13:48~17:21 PT, 총 211분(약 3.5시간). 유료·무료 ChatGPT와 API 모두 실패율 최대 75%.
- **원인**: Primary API 서비스(전 스택 인증 담당)가 쓰는 PostgresDB 정기 점검 중 읽기 복제본 2개 동시 실패. 복제본이 인증 경로의 하중을 지고 있던 구조적 단일장애점.
- **영향**: API 전 영역(Chat Completions, Fine-tuning, Embeddings, Images, Batch, Audio, Moderations, Realtime, Files)과 ChatGPT(대화·로그인·검색·파일 업로드·음성 모드).
- **복구·검증**: 신규 복제본 2개를 같은 리전에 띄워 복구, 11월 21일 저녁 복구·11월 22일 아침 전 시스템 정상. 쿼리를 주 DB로 100% 전환해 복제본이 원인임을 확인.
- **재발 방지**: 유사 점검 중단(moratorium), 연결 churn 감소 설정 조정, 복제본에서 트래픽을 비율 단위로 빼는 기능 플래그 배포.
- **시장 맥락**: 나스닥100이 5.61% 급락한 다음 날이라 파장이 컸음. OpenAI는 비상장이라 MSFT(-2.8%, $484.52)가 대리 지표. 일부 매체는 장애 시간을 213분으로 보도.

## 왜 중요한가 (1인 개발자 관점)

1. **복제본 2개가 동시에 죽는다는 건 "우연"이 아니라 구조다**: 같은 점검·같은 설정·같은 리전이면 같은 고장이 같이 온다. 내 에이전트 스택도 "백업이 있으니까 괜찮다"가 아니라 "백업이 같은 이유로 같이 죽지 않는가"를 따져야 한다. [[patterns/agent-server-harness]]의 장애 모드 설계와 직결된다.
2. **인증이 전 스택의 목줄이다**: 모델 호출이 아니라 "누구인지 확인하는" 서비스가 멈추자 API 전 영역과 ChatGPT가 함께 쓰러졌다. 에이전트 운영에서 인증·권한 경로는 모델보다 먼저 따져야 할 단일장애점이다.
3. **단일 제공자 의존의 대가**: OpenAI 하나로만 돌아가는 스택은 이 211분 동안 답이 없었다. 폴백 모델·대기 제공자를 두는 건 비용 문제가 아니라 "3시간 반을 버틸 수 있는가"의 문제다. [[concepts/gen-ai-observability]]의 관측 지표에 "제공자 장애 시 폴백 동작"을 넣어둘 때다.

## 한계 (명시)

- 장애 시간은 OpenAI 사후보고서 기준 211분이나, 일부 매체는 213분으로 보도해 2분 차이가 있다 — 분 단위 수치는 출처를 밝혀 읽을 것.
- 원인·복구 내용은 OpenAI 자사 사후보고서(1차 출처) 기반이며, 외부 독립 검증은 아직 없다.
- confidence는 medium — OpenAI 공식 사후보고서 + 복구 확인이나, 시간 수치에 매체 간 편차가 있다.

## 관련 개념

- [[concepts/gen-ai-observability]] — OpenTelemetry GenAI·에이전트 시맨틱 컨벤션, 트레이스·표준 계측 — 장애 때 "어디가 죽었는지"를 아는 기반
- [[patterns/agent-server-harness]] — HTTP·큐·SSE 뒤의 에이전트 백엔드·상태·보안 하네스 — 단일장애점·폴백 설계의 자리
- [[concepts/ai-debt-boom-cracking]] — AI 부채 붐 균열 — 장애 다음 날 나스닥 급락과 겹친 시장 맥락 (2026-10-16)

## 참고 소스

- [OpenAI 3.5시간 장애 — 인증 DB 복제본 2개 동시 붕괴로 요청 75% 실패 (AI Agent Update·OpenAI, 11-22)](raw/articles/2026-11-22-openai-outage-211-minutes-postgres-replicas.md)
