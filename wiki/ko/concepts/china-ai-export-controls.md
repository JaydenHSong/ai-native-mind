---
title: "중국의 AI 수출통제 초안 — 모델 가중치·소스코드가 첫 규제 대상"
category: concepts
tags: [china, export-control, model-weights, open-source, geopolitics, mofcom, ai-policy]
created: 2026-10-17
updated: 2026-10-17
sources:
  - "raw/articles/2026-10-17-china-ai-export-controls-oct16.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/reflection-open-weight]]"
status: draft
confidence: high
---

# 중국의 AI 수출통제 초안 — 모델 가중치·소스코드가 첫 규제 대상

## 쉽게 읽기

**비유**: 지금까지는 "칼을 만드는 기계"(칩·장비)를 수출 금지했다면, 이제는 "연마된 칼 자체"(학습된 모델 가중치)까지 수출 심사 대상이 된다. 물건이 아니라 **지식의 형태**가 통제 목록에 오른 것.

| 용어 | 풀이 |
|------|------|
| **Catalogue of Technologies Prohibited or Restricted from Export** | 중국의 수출 금지·제한 기술 목록 — 이번에 개정 초안(Announcement No. 48) |
| **Interim pre-export registration** | 사전 수출 등록 경과 조치 — 10-16부터 즉시 발효, 진행 중인 이전도 포함 |
| **WAF-like가 아닌 threshold** | ≥2T 파라미터·10^26 FLOPs·글로벌 상위 10위 — 초안 기준 허가 가능성 기준 |

## 한줄 정의

중국이 수출 통제 축을 하드웨어(칩·장비)에서 **학습된 시스템(모델 가중치·소스코드)** 으로 확장한 첫 공식 초안 — AI 규제의 대상이 "만드는 능력"에서 "완성된 지식"으로 이동.

## 핵심 내용

- **발표** (2026-10-16): MOFCOM(상무부)+MOST(과학기술부), '수출 금지·제한 기술 목록' 개정 초안 — Announcement No. 48. 의견 수렴 10/16~11/15.
- **범위**: 총 40개 기술 중 **AI 23개** (PV 12개, 바이오메디컬 5개). 금지 14 / 제한 26.
- **AI 세트**: LLM, AI 에이전트, 칩 설계, 컴퓨팅 클러스터, 정보 처리. **모델 가중치와 소스코드가 규제 대상에 처음 포함** — 이전에는 하드웨어·장비 중심.
- **초안 임계값** (Bloomberg 해석): ≥2조 파라미터, 10^26 FLOPs, 또는 글로벌 상위 10위 모델 — 수출 허가 필요 가능.
- **예외**: API·웹사이트·앱·SaaS 형태의 접근은 수출이 아님. 이미 공개된 오픈소스·학술 연구 제외. 해당 기술로 만든 **제품 자체**는 범위 밖.
- **경과 조치**: 10-16부터 **사전 수출 등록** 즉시 발효 — 진행 중인 이전도 포함.
- **협의**: MOFCOM은 올여름부터 Alibaba·ByteDance·Zhipu와 협의.

## 왜 중요한가 (1인 개발자 관점)

1. **오픈웨이트 생태계의 라이선스 리스크 구체화**: "이미 공개된 것은 제외"지만, **신규 중국 프론티어 모델의 가중치 해외 유통**은 허가 대상이 될 수 있음. 중국산 오픈웨이트에 의존하는 스택의 지정학 리스크.
2. **DeepSeek 맥락과의 겹침**: 10/2 DeepSeek×Huawei Ascend 수직 통합 + 이번 수출통제 — 중국 AI의 "독립 스택"이 국내 축적과 국외 차단의 양면으로 완성되는 구조.
3. **AI 에이전트가 목록에 명시**: 수출통제 대상이 "모델"을 넘어 **에이전트**로 확장 — 에이전트 기술 이전(라이선싱·합작)도 규제 시야에.

## 한계 (명시)

- **초안(draft)** — 의견 수렴 중이며 최종 내용 변경 가능.
- 임계값·금지/제한 분류의 세부 기준은 Bloomberg의 해석 기반 — 공고 원문 확인 필요.
- 미국 등 타국의 대응(대응 규제)은 아직 없음.

## 관련 개념

- [[comparisons/frontier-lab-economics]] — DeepSeek의 3단계(하드웨어 수직 통합) 위에 얹힌 **지식의 국경 통제** — 가격 결정력의 지정학 축.
- [[concepts/reflection-open-weight]] — "미국산 오픈웨이트" 대항마 논리와 대비: 중국산 오픈웨이트의 **유통 리스크**가 명문화됨.

## 참고 소스

- [중국, AI 23개 포함 40개 기술 수출통제 초안 발표 (AI Weekly·AI Affairs·Bloomberg, 10/16)](raw/articles/2026-10-17-china-ai-export-controls-oct16.md)
