---
title: "OpenAI 3.5시간 장애 — 인증 DB 복제본 2개 동시 붕괴로 요청 75% 실패 (11-21)"
source_url: "https://aiagentupdate.com/post/openai-outage-211-minutes-2026-11-22"
source_type: "news"
authors: ["AI Agent Update", "OpenAI"]
published: 2026-11-22
fetched: 2026-11-22
tags: [openai, infrastructure, reliability, outage, postgres]
status: raw
---

# OpenAI 3.5시간 장애 — 인증 DB 복제본 2개 동시 붕괴로 요청 75% 실패 (11-21)

> 11월 21일 오후 1시 48분~5시 21분(PT) 약 211분 동안 OpenAI API와 ChatGPT 요청 실패율이 최대 75%에 달했다. 원인은 정기 점검 중 Primary API 서비스 뒤의 Postgres 읽기 복제본 2개가 동시에 붕괴한 것. 인증을 담당하는 단일 서비스가 멈추면서 전 스택이 함께 쓰러졌다. OpenAI는 당일 사후보고서를 공개했다.

## 내용

- **시간·규모**: 11월 21일 13:48~17:21 PT, 총 211분(약 3.5시간). 유료·무료 ChatGPT와 API 모두 실패율 최대 75%.
- **원인**: Primary API 서비스(전 스택 인증 담당)가 쓰는 PostgresDB 정기 점검 중 읽기 복제본 2개 동시 실패. 복제본이 인증 경로의 하중을 지고 있던 구조적 단일장애점.
- **영향**: API 전 영역(Chat Completions, Fine-tuning, Embeddings, Images, Batch, Audio, Moderations, Realtime, Files)과 ChatGPT(대화·로그인·검색·파일 업로드·음성 모드).
- **복구·검증**: 신규 복제본 2개를 같은 리전에 띄워 복구, 11월 21일 저녁 복구·11월 22일 아침 전 시스템 정상. 쿼리를 주 DB로 100% 전환해 복제본이 원인임을 확인.
- **재발 방지**: 유사 점검 중단(moratorium), 연결 churn 감소 설정 조정, 복제본에서 트래픽을 비율 단위로 빼는 기능 플래그 배포.
- **시장 맥락**: 나스닥100이 5.61% 급락한 다음 날이라 파장이 컸음. OpenAI는 비상장이라 MSFT(-2.8%, $484.52)가 대리 지표. 일부 매체는 장애 시간을 213분으로 보도.

## 맥락

- 단일 제공자 의존 에이전트 스택의 취약성을 보여주는 인프라·신뢰성 대표 사례
- 에이전트 운영의 장애 모드·단일장애점 정리와 직결
