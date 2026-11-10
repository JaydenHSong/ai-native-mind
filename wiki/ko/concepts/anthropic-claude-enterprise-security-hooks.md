---
title: "Anthropic, Claude Enterprise에 추론 훅 GA·보안 센터 베타 — 기업 DLP가 Claude의 답변·도구 호출 전에 차단"
category: concepts
tags: [anthropic, claude-enterprise, security, dlp, inference-hooks]
created: 2026-11-08
updated: 2026-11-08
sources:
  - "raw/articles/2026-11-08-anthropic-claude-enterprise-security-hooks.md"
related:
  - "[[concepts/anthropic-claude-cowork-enterprise-unified]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/anthropic-agent-skills-foundation]]"
  - "[[concepts/google-agent-compute-engine]]"
status: draft
confidence: high
---

# Anthropic, Claude Enterprise에 추론 훅 GA·보안 센터 베타 — 기업 DLP가 Claude의 답변·도구 호출 전에 차단

## 쉽게 읽기

**비유**: 회사 직원이 Claude에게 비밀 문서를 보여주기 전에, 회사 보안팀이 먼저 "이 문서, 밖으로 나가면 안 되는 거야?"라고 검사하는 검문소를 설치한 셈이다. 검문소에서 "안 돼"라고 하면 Claude는 아예 답을 안 한다. 검사 결과만 기록하고 문서 내용은 보안팀 서버에만 남는다.

| 용어 | 풀이 |
|------|------|
| **추론 훅(inference hooks)** | 모델이 답을 만들거나 도구를 실행하기 전에, 외부 보안 도구에 검사를 맡기는 연결 지점 |
| **DLP** | 데이터 유출 방지 — 민감 정보가 회사 밖으로 나가는 것을 막는 보안 도구 |
| **프롬프트 훅 / 도구 호출 전 훅** | 프롬프트를 보내기 전 검사하는 훅과, 도구 실행 직전 검사하는 훅 |

## 한줄 정의

2026-11-05 — Anthropic이 발표한 Claude Enterprise 보안 업데이트의 핵심은 추론 훅(inference hooks)의 정식 출시(GA)이다. 기업의 기존 데이터 유출 방지(DLP)·보안 도구가 Claude의 프롬프트와 도구 호출을 생성·실행 전에 검사하고, 거부 판정이 나오면 Claude는 답하지 않는다. 보안 센터(베타), 중앙 관리 콘솔(베타), Cowork용 EDR 센서(베타)도 함께 나왔다.

## 핵심 내용

- **추론 훅 (GA)**: 프롬프트 훅과 도구 호출 전(pre-tool-call) 훅 2종. 프롬프트 훅은 사용자의 프롬프트를 고객 보안 서버로 보내 허용·거부 판정을 받고, 도구 호출 전 훅은 파일 읽기·DB 조회 같은 도구 호출 실행 전에 검사한다. 검사는 클라이언트를 떠난 뒤 추론이 시작되기 전, Anthropic 서버에서 이뤄진다. 판정은 허용·차단 2가지뿐이며 부분 수정·편집은 없다. 기본 타임아웃은 5초(고객 조정 가능).
- **검사 범위**: 대화 텍스트, 도구 호출과 그 결과, 첨부 파일 텍스트가 검사 대상이다. 파일·이미지 바이트와 시스템 지시문은 제외된다. Anthropic은 검사한 내용이 아니라 설정 데이터와 판정만 보관한다고 밝혔다.
- **연동 대상**: Netskope·Palo Alto Networks·Proofpoint·Zscaler의 DLP 엔드포인트 또는 고객 자체 서버. 적용 범위는 claude.ai(웹·데스크톱·모바일), Cowork, Claude Code, Claude for Microsoft 365, Claude in Slack, Claude in Chrome이다. Claude Enterprise 조직에만 제공되며, Amazon Bedrock·Google Cloud에서는 쓸 수 없고 Claude Platform 조직은 대상 밖이다.
- **보안 센터 (베타)**: 채팅·Cowork·Claude Code의 보안 설정을 한 페이지에 모아 Anthropic 권장 설정과 비교하고, 차이와 최근 변경을 표시하며 감사 보고서를 내보낼 수 있다. Anthropic은 법적 준수 인증이 아니라 안내라고 명시했다.
- **기타 베타**: admin.claude.com 중앙 관리 콘솔(SSO·SCIM·도메인 검증·그룹·Compliance API 키), Admin API 회원 로그아웃, 셀프 IP 허용 목록, 데스크톱 섀도 IT 차단, Cowork 가상머신 내 EDR 센서(탐지 전용, macOS·Windows). 프리뷰 기능은 추가 요금이 없다.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 보안이 "모델 뒤"에서 "모델 앞"으로 옮겨왔다**: 지금까지는 모델이 만든 결과를 검수하는 게 보안의 중심이었다. 추론 훅은 프롬프트와 도구 호출이 실행되기 전에 기업의 DLP가 개입한다. 에이전트가 파일을 읽거나 DB를 두드리기 전에 차단한다는 점에서, 에이전트 시대의 보안 경계가 어디에 생기는지 보여준다.
2. **기존 보안 스택을 재활용한다**: Netskope·Zscaler 같은 이미 쓰는 DLP 도구를 그대로 연결한다. 기업이 AI용 보안 도구를 새로 사는 게 아니라, 기존 도구를 AI 앞단에 꽂는 방식이다. 1인 개발자 관점에서는 "우리 회사 DLP가 Claude 앞에도 선다"는 사실 자체가 도입 장벽을 낮춘다.
3. **검사 범위에 구멍이 있다**: 이미지·파일 바이트와 시스템 지시문은 검사 대상 밖이다. 이미지 속 비밀, 첨부 파일 원본이 그대로 Claude에 들어갈 수 있다는 뜻이다. 훅이 있다고 전부를 막는 게 아니라는 점을 알아야 한다.

## 한계 (명시)

- 한 추적 매체(aiweekly)는 추론 훅이 2026-10-20에 GA가 됐다고 적었으나, Anthropic의 11-05 공지와 대다수 보도는 11-05를 GA 발표일로 다룬다. GA 시점에 대해서는 Anthropic 원문 확인이 필요하다.
- Enterprise 조직 전용이며 Bedrock·Google Cloud·Platform 조직에서는 쓸 수 없다. 보안 센터·중앙 관리·EDR은 모두 베타로, GA 일정은 미정이다.

## 참고 소스

- [Claude Enterprise 보안 업데이트 원본](raw/articles/2026-11-08-anthropic-claude-enterprise-security-hooks.md)
