---
title: "Accenture의 Claude $29 월 상한 — 기업 에이전트 비용 거버넌스의 실측"
category: concepts
tags: [accenture, claude, enterprise, ai-cost, licensing, cost-governance, agent-economics]
created: 2026-10-17
updated: 2026-10-17
sources:
  - "raw/articles/2026-10-17-accenture-claude-29-cap.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[patterns/ai-cost-management]]"
status: draft
confidence: high
---

# Accenture의 Claude $29 월 상한 — 기업 에이전트 비용 거버넌스의 실측

## 쉽게 읽기

**비유**: 회사 법인카드 한도다. 직원이 식비로 한 달에 100만 원을 써도, 회사는 "회사 돈으로는 3만 원까지만, 나머지는 네 프로젝트 비용으로" 한다. AI 토큰도 이제 법인카드처럼 취급된다.

| 용어 | 풀이 |
|------|------|
| **Central funding cap** | 중앙에서 지원하는 월 한도 — 여기서 $29/인/월 |
| **WBS 전가** | 초과분을 프로젝트의 WBS(작업분할구조) 코드에 청구 — 결국 프로젝트 예산이 부담 |
| **Consumption-based** | 종량제 — 쓴 만큼 과금 |

## 한줄 정의

대기업이 AI 코딩 에이전트의 사용료를 **중앙 지원 한도($29/인/월) + 초과분 프로젝트 전가**의 2층 거버넌스로 관리하기 시작한 첫 정량 사례 — 에이전트 경제가 "실험 예산"에서 "운영비 한도"로 넘어가는 지점.

## 핵심 내용

- **조치** (2026-10-01 발효): Claude Enterprise 라이선스의 중앙 펀딩이 직원당 월 $29로 제한.
- **초과분 처리**: 초과 사용은 consumption-based(종량제)로 해당 프로젝트의 WBS 코드에 청구 — 프로젝트 P&L이 직접 체감.
- **배경 수치**: 일부 직원(특히 Claude Code)이 월 $500~$1,000 지출. 한 명은 접근 권한 취소. premium tier(주당 토큰 $250 상당)는 존재하나 대부분 미적용.
- **접근 규칙**: 라이선스는 정기 검토, WBS 코드가 있다고 접근이 보장되지 않음.
- **공식 입장**: 'we make AI available to all our people... right tool for the right work' — 전원 접근 명분 유지.
- 출처: 404미디어 입수 내부 공지('Claude Enterprise Users: Important Updates to Licensing and Usage Costs'), People Matters·Tech Times UK 인용 보도(10/15–16). **Accenture의 공식 공개 발표는 아님**.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 경제의 첫 실측**: 토큰 비용이 "모델 가격"이 아니라 **사용자당 월 한도**로 관리되는 시대 — [[patterns/ai-cost-management]]의 라우팅·캐싱에 "스펜드 캡"이 세 번째 레버로 추가됨.
2. **초과분 전가의 의미**: $29는 사용 제한이 아니라 **예산 귀속의 기준점** — 그 이상은 프로젝트가 가치를 입증해야 쓰는 돈. 에이전트를 도입할 때 "한도를 누가 부담하는가"가 설계 항목이 됨.
3. **Claude Code의 비용 프로파일**: $500~$1,000/월 사용자는 에이전트 루프의 runaway 비용을 실증 — 코드 에이전트의 비용 예측이 "작업당"이 아니라 "세션당 폭주 가능"으로 바뀜.

## 한계 (명시)

- 404미디어의 내부 문건 입수 보도 — Accenture의 공식 발표·IR 공시가 아님.
- 다른 기업(예: [[concepts/hcltech-anthropic-partnership]]의 거버넌스 중심 배포)도 같은 한도 정책을 쓰는지는 미확인.

## 관련 개념

- [[comparisons/frontier-lab-economics]] — 가격 결정력 인프라의 반대편: 수요 측(기업)의 **지출 한도**라는 새로운 변수.
- [[patterns/ai-cost-management]] — 스펜드 캡 거버넌스의 실전 패턴.
- [[concepts/hcltech-anthropic-partnership]] — 기업 에이전틱 AI 도입의 두 경로: 거버넌스 내장 배포(Accenture의 한도 정책과 같은 날의 대조축).

## 참고 소스

- [액센츄어, 직원 Claude 사용비 중앙 지원을 월 29달러로 제한 (People Matters·Tech Times UK·404 Media, 10/15–16)](raw/articles/2026-10-17-accenture-claude-29-cap.md)
