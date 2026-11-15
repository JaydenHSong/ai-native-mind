---
title: "Cursor 보안 사고 조사 결과 — Fireworks 키 유출로 변조된 Claude Code 확장 배포 (11-14)"
source_url: "https://ifynx.com/blog/cursor-security-breach-fireworks-key-malicious-claude-code-extension-gulf-egypt/"
source_type: "news"
authors: ["iFynx"]
published: 2026-11-14
fetched: 2026-11-15
tags: [cursor, fireworks, security, supply-chain, claude-code]
status: raw
---

# Cursor 보안 사고 조사 결과 — Fireworks 키 유출로 변조된 Claude Code 확장 배포 (11-14)

> Cursor가 11-13 2주간의 조사 결과를 발표했다. 10-29 자사 마켓플레이스에 올라온 변조된 Claude Code 확장의 출발점은 AI 인프라 업체 Fireworks AI에 노출된 접근 키였다. 공격자는 키로 공유 스토리지 버킷을 복사해 검열되지 않은 자격증명을 얻고 내부 시스템까지 파고들었다.

## 내용

- **침입 경로**: Cursor가 Fireworks에 발급한 접근 키가 Fireworks 쪽에서 노출됐다(Cursor의 표현). 공격자는 그 키로 Fireworks와 공유하던 읽기 전용 스토리지 버킷에서 데이터를 복사했다. 버킷에는 2025년 무렵의 코딩 에이전트 트레이스가 있었고, Privacy Mode가 꺼진 세션의 것이었다. 일부 트레이스에는 검열되지 않은 API 자격증명이 들어 있었다. 트레이스가 노출된 사용자는 0.05% 미만, API 자격증명이 노출된 고객은 0.01% 미만이다.
- **확장 변조**: 탈취한 자격증명 하나로 10-29 공격자는 Anthropic의 Claude Code 확장(`Anthropic.claude-code` 2.1.312·2.1.313, Windows·macOS 빌드)의 변조본을 Cursor VS Code 확장 마켓플레이스 캐시에 올렸다. 약 11시간(태평양 시간 02:27~13:35) 동안 노출됐고, 해당 캐시 버전을 요청한 최대 5,000명의 사용자가 변조본을 받았을 수 있다. 변조본은 시스템 정보 수집·공격자 SSH 키 설치·원격 로그인 활성화·역방향 터널로 지속성을 노렸다(BleepingComputer·Microsoft 분석).
- **영향 범위**: Privacy Mode 사용자의 프롬프트·코드, 고객 코드 저장소, 프로덕션 시스템, Cursor 앱 자체와 공식 업데이트는 영향받지 않았다고 Cursor는 밝혔다. Anthropic의 정식 확장과 Open VSX는 침해되지 않았다. 공격자가 Anthropic 이름으로 게시할 수 있었던 경위는 아직 설명되지 않았다.
- **대응**: 마지막 공격자 활동은 11-01에 관측됐고 차단됐다. Cursor는 Fireworks 키를 비활성화하고 노출된 자격증명을 교체·폐기했으며, 모든 추론 트래픽을 Fireworks에서 옮기고 Fireworks의 모든 공유 데이터셋 접근을 끊었다. 10-30 보안 공지에 침해 지표·제거 절차를 게시했고, 사용자에게 2.1.314로 업데이트하고 제거 스크립트를 따르라고 안내했다. 확장 삭제만으로는 부족할 수 있다고 경고했다.
- **연관 사고**: Fireworks는 10월 자체 침해도 여러 건 공개했다(API 키·토큰 노출, 제3자 클라우드 업체 경유 개발 환경 접근). Uber도 같은 Fireworks 경유로 운전자 면허 데이터가 유출됐다고 11-10 캘리포니아 법무장관실에 신고했다. Notion AI 채팅 기록 노출(11-12 수집분)도 같은 Fireworks 침해의 갈래다.

## 맥락

- [[concepts/fireworks-notion-ai-breach]] — Fireworks AI 침해로 Notion AI 채팅 기록 노출, 같은 공급망 사고의 다른 갈래 (2026-11-12)
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델, 공급망 침해의 방어 축 (2026-09)
- [[concepts/fbi-artex-ai-agents]] — FBI ARTEX 경고, 에이전트 생태계의 보안 위협이 같은 주에 겹침 (2026-11-13)