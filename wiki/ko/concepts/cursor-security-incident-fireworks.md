---
title: "Cursor 보안 사고 조사 결과 — Fireworks 키 유출로 변조된 Claude Code 확장 배포 (11-14)"
category: concepts
tags: [cursor, fireworks, security, supply-chain, claude-code]
created: 2026-11-15
updated: 2026-11-15
sources:
  - "raw/articles/2026-11-15-cursor-security-incident-fireworks.md"
related:
  - "[[concepts/fireworks-notion-ai-breach]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/fbi-artex-ai-agents]]"
status: draft
confidence: high
---

# Cursor 보안 사고 조사 결과 — Fireworks 키 유출로 변조된 Claude Code 확장 배포 (11-14)

## 쉽게 읽기

**비유**: 협력 업체에 맡긴 열쇠가 새는 바람에, 도둑이 그 열쇠로 창고(공유 저장소)를 열어 또 다른 열쇠들을 훔쳐 가고, 그중 하나로 가게 진열장(확장 마켓플레이스)에 가짜 상품(변조된 확장 프로그램)을 올려놓은 사건이다. 가짜 상품을 받은 사람은 자기 컴퓨터에 도둑의 뒷문을 열어주게 된다.

| 용어 | 풀이 |
| **공급망(supply chain) 공격** | 목표를 직접 뚫지 않고, 목표가 쓰는 협력 업체나 배포 경로를 뚫는 공격 |
| **마켓플레이스 캐시** | 확장 프로그램을 사용자에게 나눠주는 임시 저장소. 여기에 올린 파일이 그대로 배포된다 |
| **SSH 백도어** | 공격자가 나중에 몰래 다시 들어올 수 있도록 심어두는 원격 접속 통로 |
| **Privacy Mode** | Cursor에서 프롬프트·코드를 서버에 남기지 않는 설정. 켜져 있으면 트레이스가 저장되지 않는다 |
| **트레이스(trace)** | 에이전트가 일한 기록. 프롬프트·코드·호출 내역이 담길 수 있다 |

## 한줄 정의

2026-11-13 — Cursor가 2주간의 조사 결과를 발표했다. 10-29 자사 마켓플레이스에 올라온 변조된 Claude Code 확장의 출발점은 AI 인프라 업체 Fireworks AI에 노출된 접근 키였다. 공격자는 키로 공유 스토리지 버킷을 복사해 검열되지 않은 자격증명을 얻고 내부 시스템까지 파고들었다.

## 핵심 내용

- **침입 경로**: Cursor가 Fireworks에 발급한 접근 키가 Fireworks 쪽에서 노출됐다(Cursor의 표현). 공격자는 그 키로 Fireworks와 공유하던 읽기 전용 스토리지 버킷에서 데이터를 복사했다. 버킷에는 2025년 무렵의 코딩 에이전트 트레이스가 있었고, Privacy Mode가 꺼진 세션의 것이었다. 일부 트레이스에는 검열되지 않은 API 자격증명이 들어 있었다. 트레이스가 노출된 사용자는 0.05% 미만, API 자격증명이 노출된 고객은 0.01% 미만이다.
- **확장 변조**: 탈취한 자격증명 하나로 10-29 공격자는 Anthropic의 Claude Code 확장(`Anthropic.claude-code` 2.1.312·2.1.313, Windows·macOS 빌드)의 변조본을 Cursor VS Code 확장 마켓플레이스 캐시에 올렸다. 약 11시간(태평양 시간 02:27~13:35) 동안 노출됐고, 해당 캐시 버전을 요청한 최대 5,000명의 사용자가 변조본을 받았을 수 있다. 변조본은 시스템 정보 수집·공격자 SSH 키 설치·원격 로그인 활성화·역방향 터널로 지속성을 노렸다(BleepingComputer·Microsoft 분석).
- **영향 범위**: Privacy Mode 사용자의 프롬프트·코드, 고객 코드 저장소, 프로덕션 시스템, Cursor 앱 자체와 공식 업데이트는 영향받지 않았다고 Cursor는 밝혔다. Anthropic의 정식 확장과 Open VSX는 침해되지 않았다. 공격자가 Anthropic 이름으로 게시할 수 있었던 경위는 아직 설명되지 않았다.
- **대응**: 마지막 공격자 활동은 11-01에 관측됐고 차단됐다. Cursor는 Fireworks 키를 비활성화하고 노출된 자격증명을 교체·폐기했으며, 모든 추론 트래픽을 Fireworks에서 옮기고 Fireworks의 모든 공유 데이터셋 접근을 끊었다. 10-30 보안 공지에 침해 지표·제거 절차를 게시했고, 사용자에게 2.1.314로 업데이트하고 제거 스크립트를 따르라고 안내했다. 확장 삭제만으로는 부족할 수 있다고 경고했다.
- **연관 사고**: Fireworks는 10월 자체 침해도 여러 건 공개했다(API 키·토큰 노출, 제3자 클라우드 업체 경유 개발 환경 접근). Uber도 같은 Fireworks 경유로 운전자 면허 데이터가 유출됐다고 11-10 캘리포니아 법무장관실에 신고했다. Notion AI 채팅 기록 노출(11-12 수집분)도 같은 Fireworks 침해의 갈래다.

## 왜 중요한가 (1인 개발자 관점)

1. **내가 안 쓴 업체가 나를 털 수 있다**: Cursor를 쓰지 않아도, 내가 쓰는 도구가 Fireworks 같은 인프라 업체를 쓰면 그 업체의 키 하나가 내 트레이스와 자격증명으로 이어진다. 의존성 지도는 내 코드만이 아니라 내 도구의 공급망까지 봐야 한다.
2. **Privacy Mode는 장식이 아니었다**: 이번 사건에서 Privacy Mode 사용자는 무사했다. 에이전트 도구의 프라이버시 설정은 "나중에"가 아니라 "지금" 켜둘 가치가 있는 방어선이다.
3. **확장 업데이트도 신뢰의 대상이다**: 마켓플레이스에서 받는 확장 하나가 SSH 백도어가 될 수 있다. 에이전트 도구의 자동 업데이트·캐시 경로를 점검하고, 의심스러운 버전은 지침대로 제거 스크립트까지 돌려야 한다.

## 한계 (명시)

- "키가 Fireworks에 의해 노출됐다"는 Cursor의 주장이다. Fireworks 자체 보안 공지(11-09 최종 업데이트)에는 Cursor 관련 언급이 없다.
- 공격자가 Anthropic 이름으로 변조본을 게시할 수 있었던 경위는 Cursor도 Anthropic도 아직 설명하지 않았다.
- 최대 5,000명은 "해당 캐시 버전을 요청한 사용자" 추정치이지, 실제 설치 확정 수가 아니다.

## 관련 개념

- [[concepts/fireworks-notion-ai-breach]] — Fireworks AI 침해로 Notion AI 채팅 기록 노출, 같은 공급망 사고의 다른 갈래 (2026-11-12)
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델, 공급망 침해의 방어 축 (2026-09)
- [[concepts/fbi-artex-ai-agents]] — FBI ARTEX 경고, 에이전트 생태계의 보안 위협이 같은 주에 겹침 (2026-11-13)

## 참고 소스

- [Cursor 보안 사고 조사 결과 원본](raw/articles/2026-11-15-cursor-security-incident-fireworks.md)