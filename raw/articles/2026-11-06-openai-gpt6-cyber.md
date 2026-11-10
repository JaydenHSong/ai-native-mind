---
title: "OpenAI GPT-6 Cyber 출시 — 취약점 찾고 패치까지, Daybreak Red 승인 고객만 (11-05)"
source_url: "https://www.marketscale.com/industries/software-and-technology/openai-gpt-6-cyber-approved-security-teams-firefox-linux"
source_type: "news"
authors: ["OpenAI"]
published: 2026-11-05
fetched: 2026-11-06
tags: [openai, gpt-6-cyber, cybersecurity, daybreak, exploitgym]
status: raw
---

# OpenAI GPT-6 Cyber 출시 — 취약점 찾고 패치까지, Daybreak Red 승인 고객만 (11-05)

> OpenAI가 11-05 사이버 보안 특화 모델 GPT-6 Cyber를 발표했다. ExploitGym 48.5%로 전작 GPT-5.6 Cyber(32.1%)를 크게 앞섰고, Preparedness Framework 사이버 보안 등급은 High에서 Critical로 상향됐다. 접근은 승인된 Daybreak Red 고객부터 API·Codex 경유로만 열린다.

## 내용

- **발표**: 11-05 OpenAI 발표 "GPT-6 Cyber: Advancing the frontier of aligned cybersecurity agents". GPT-6 Astra를 기반으로 한 사이버 보안 특화 모델로, 취약점 발견·익스플로잇 검증·웹 펜테스트·패치 개발을 위해 학습됐다. API와 Codex를 통해 승인된 Daybreak Red 고객 일부부터 제공되고, 전 Daybreak Red 고객으로 확대될 예정이다. GPT-5.6 Cyber는 전 Daybreak Red 고객에게 개방됐다.
- **성능**: ExploitGym(지정된 취약점을 실제로 익스플로잇할 수 있는지 측정) 48.5%, GPT-5.6 Cyber 32.1% 대비 약 16.4pp 상승·상대 51% 개선. GPT-6 Astra는 42.4%. 웹 펜테스트 평가의 취약점 회상률은 40.3%로 Astra 32.0%를 앞섰다. 새 RemoteExploitBench(GitLab·PostgreSQL·Jenkins 등 실제 앱의 알려진 취약점)에서는 95% 완료, Astra(Daybreak Blue)는 100% 거부했다.
- **범위 준수**: ExploitGym Honeypot(범위 밖 서비스를 일부러 쉽게 공격 가능하게 둔 테스트)에서 범위 밖 서비스를 건드리지 않은 비율이 99.93%(배포 안전 프롬프트 없이; GPT-5.6 Cyber 94.49%), 프롬프트 포함 시 100%였다. OpenAI는 범위 준수를 이번 모델의 핵심 설계 목표로 내세웠다.
- **실전 연구**: 11-04 공개된 "A thousand fewer paths to root" 연구에서 같은 모델을 쓴 자율 발견-패치 파이프라인이 Linux 커널 취약점 2,308개 후보 중 1,724개를 재현하고 948개의 로컬 권한 상승(LPE) 익스플로잇을 작성했다. GPT-5.6 Sol이 같은 하네스로 만든 166개의 5배 이상이다. 304개 중대 발견은 후보 패치와 함께 공개됐고, 비용은 API 크레딧 $1,213,430(익스플로잇당 $1,279)이었다. Firefox에서는 이전에 알려지지 않은 고심각 취약점 81개를 찾았고, 기존 30개의 심각도를 재평가했다. Mozilla는 다수에 패치를 배포했다.
- **등급·가격**: Preparedness Framework 사이버 보안 등급 Critical(최상위), GPT-5.6 Cyber의 High에서 상향 — OpenAI 사이버 모델 중 첫 Critical 등급이다. 가격은 입력 $20·출력 $100(백만 토큰당). Cisco·Calif·CodeRabbit의 보안팀이 이미 취약점 연구·코드 리뷰에 쓰고 있으며, OpenAI도 자사 인프라 취약점 탐색에 활용했다고 밝혔다.
- **접근 통제**: 신원 확인·SSO·MFA·API IP 허용목록(기본 적용)이 필요하고, Zero Data Retention API 고객에게는 Private Safety Processing이 적용된다. 핵심 OT/ICS 대상 고위험 지원은 모니터링으로 차단하면서 승인된 테스트는 허용한다. Daybreak Red for Critical Infrastructure 트랙을 신설했고, Daybreak for Frontline Defenders에 $10억 규모 보조금을 약속했다. 11-12 "Cyber at the Frontier" 라이브스트림이 예고됐다.

## 맥락

- [[concepts/openai-frontier-misalignment-monitoring]] — OpenAI 프런티어 오정렬 감시 4단계, Hugging Face 리플레이
- [[concepts/gpt-62-astra-codex-leak]] — GPT-6.2 Astra 유출설, Codex 사용량 화면에 등장
- [[concepts/openai-safety-monitor-disabling]] — 코딩 에이전트의 안전 감시 해제 + 거짓 진술 보고
- [[concepts/php2shell-ai-vulnerability-discovery]] — AI가 찾아낸 PHP 치명적 취약점 2건
