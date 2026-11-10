---
title: "DHS DeepSeek 연방 금지 공식화 — 공급망 보안법 기반 모델 제거 명령"
category: concepts
tags: [deepseek, dhs, federal-ban, supply-chain, china, regulation, federal-register, model-governance]
created: 2026-10-21
updated: 2026-10-21
sources:
  - "raw/articles/2026-10-21-dhs-deepseek-federal-register-ban.md"
related:
  - "[[concepts/uk-csrb-ai-agent-loss-of-control]]"
  - "[[concepts/uk-frontier-model-access-restoration]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: high
---

# DHS DeepSeek 연방 금지 공식화 — 공급망 보안법 기반 모델 제거 명령

## 쉽게 읽기

**비유**: 지금까지 "중국산 AI 쓰지 마"는 권고 수준이었다. 이번엔 "정부 컴퓨터에서 중국산 AI를 찾아내 지워라"는 명령이다. 그것도 딥시크 본체만이 아니라, 딥시크 기술이 들어간 제3자 제품까지. 마치 "특정 제조사의 부품이 들어간 모든 기기를 리콜하라"는 것과 같다 — 공급망 전체를 뒤져야 한다.

| 용어 | 풀이 |
|------|------|
| **Exclusion and Removal Order** | 미국 DHS가 공급망 보안법에 따라 특정 기술의 조달 금지·제거를 명령하는 제도 |
| **Federal Register** | 미국 연방 정부의 공식 관보 — 여기에 게재되면 법적 효력이 공식화됨 |
| **FASCA** | Federal Acquisition Supply Chain Security Act (2018) — 연방 조달 공급망 보안법 |

## 한줄 정의

DHS Exclusion and Removal Order #2026-01 — 연방 민간행정부 기관에 딥시크 제품의 조달을 금지하고 기존 IT 시스템에서 제거할 것을 명령. Hangzhou DeepSeek AI Co., Ltd 및 계열사 + 딥시크 기술 기반 제3자 제품/서비스가 대상. 2026-07-24 발령, 60일 예외신청 기간 후 10-20 Federal Register 게재 (FR Doc. 2026-21447). 법적 근거는 2018년 FASCA.

## 핵심 내용

- **명령**: DHS Exclusion and Removal Order #2026-01. 연방 민간행정부 기관 대상 — 조달 금지 + 기존 시스템에서 제거.
- **대상 범위**: Hangzhou DeepSeek AI Co., Ltd 및 계열사, 그리고 **딥시크 기술을 기반으로 한 제3자 제품/서비스** — 모델 직접 사용뿐 아니라 기술이 들어간 파생 제품까지.
- **타임라인**: 2026-07-24 발령 (장관 Markwayne Mullin 서명) → 60일 예외신청 기간 → 10-20 Federal Register 공식 게재. 제거 마감 시한은 명시되지 않음.
- **법적 근거**: 2018년 Federal Acquisition Supply Chain Security Act (FASCA).
- **DHS 근거**: "multiple threat vectors" — 미국 정부 사용자 민감 데이터의 중국 유출 가능성, 모델 자체의 멀웨어/취약점 경고.
- **중국 반응**: 외교부 Mao Ning (10-20) — "국가안보 개념의 과도 확대" 반발, 중국 기업 권익 수호 천명.

## 왜 중요한가 (1인 개발자 관점)

1. **공급망 실사의 범위가 넓어짐**: "제3자 제품/서비스 포함"은 모델을 직접 쓰지 않아도, 쓰는 도구에 딥시크 기술이 들어 있으면 대상이 된다는 뜻. 1인 개발자가 정부·공공 프로젝트에 납품한다면 의존성 트리 전체를 실사해야 하는 선례.
2. **국가 개입의 양면**: 10-12 영국 AISI가 자국 모델 접근을 차단·복원했고, 10-19 영국 CSRB가 에이전트 행위에 집행권을 걸었으며, 10-20 미국 DHS가 타국 모델 제거를 명령했다 — 8일 만에 "모델 접근 통제"가 대서양 양쪽에서 국가 권한으로 굳어짐. 모델 선택이 기술 선택을 넘어 지정학 선택이 되는 중.
3. **오픈 웨이트의 역설**: 딥시크는 오픈 웨이트 모델의 대표주자다. "오픈이라서 투명하다"는 논리와 "오픈이라서 통제 불가"는 동전의 양면 — 이번 명령은 후자를 택한 사례. 오픈 웨이트 전략을 짜는 빌더는 "어느 나라의 오픈인가"를 따져야 한다.

## 한계 (명시)

- 연방 민간행정부 기관 대상 — 민간 부문·주 정부에는 직접 적용되지 않음 (다만 조달 시장의 신호 효과는 별개).
- 제거 마감 시한 미명시 — 실제 제거 속도는 미지수.
- DHS가 제시한 "multiple threat vectors"의 구체적 증거는 공개되지 않음 — 위협의 실체는 DHS 주장에 의존.
- 10-20 Federal Register 게재가 뉴스 훅 — 명령 자체는 7-24 발령 (어제 탈락 후보의 후속 추적 결과).
