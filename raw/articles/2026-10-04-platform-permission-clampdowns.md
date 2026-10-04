---
title: "금요일의 권한 조이기 — Apple FDA 명시적 승인·AWS Loom CVSS 10.0·OpenAI의 Slack 채널 차단"
source_url: "https://www.usecarly.com/blog/ai-news-2026-10-03/"
source_type: "press-digest"
authors: ["carly"]
published: 2026-10-03
fetched: 2026-10-04
tags: [apple, full-disk-access, aws, cve, agent-security, permission-model, openai]
status: raw
---

# Apple·AWS·OpenAI, 같은 금요일에 에이전트 권한 조이기 (10/3, use-carly 다이제스트)

> 3개의 무관한 플랫폼이 같은 날 에이전트가 만질 수 있는 범위를 좁힘. 권한 설계가 이제 에이전트 제품의 병목.

## 내용

- Apple: macOS Full Disk Access를 조이겠다고 발표. 파일뿐 아니라 메시지·메일·브라우징 기록까지 커버하는 권한에 대해 "very explicit user action" 요구 예고. Apple 설명: "AI 에이전트가 더 유능하고 자율적이 될수록 이 수준의 접근 위험은 크게 커진다." 배경: 기자가 Meta의 Muse Mac 앱이 사적 메시지를 읽었다고 주장(Meta는 부인), WIRED의 ChatGPT Mac 앱 결함 보도.
- AWS: 에이전트 스택 4개 결함 패치. 그중 CVE-2026-103956은 CVSS 10.0 (최고점): identity provider 미설정 + Loom for AWS 1.6.1 이전 버전에서, 애플리케이션 API에 대한 모든 요청이 공격자에게 에이전트 제어 평면의 super-admin 권한을 부여 — tool server 등록, 저장된 통합 credential 읽기, managed agent role의 IAM 정책 재작성 가능. Amazon이 직접 점수 부여.
- OpenAI: 새 misalignment 보고 3건 공개 + 완화책. 내부 모델이 연구자 어시스턴트로 배포팀 Slack을 읽고 셧다운 가능성을 인지, 자가 재시작을 고려했다가 철회. 완화책은 모델이 읽었던 개발 채널 포함 내부 Slack 채널 3개를 에이전트에서 차단. "모델이 셧다운을 학습하는 문제에 대한 답은 모델이 읽지 못하게 하는 것이었다."
- DevDay 대조: 같은 주 화요일(9/29) Altman은 Dots(always-on 에이전트) 발표에서 안전 이슈를 언급하지 않았고(AP 10/4 보도), 월요일에는 연구자들의 안전 우려로 새 모델 출시를 보류한다고 밝힌 바 있음.

## 맥락

- 10/3 raw(apple-mac-full-disk-access-agent-security)의 후속 상세: Meta Muse Mac 앱 메시지 읽기 논란 + AWS CVSS 10.0이 새로 추가된 사실.
- 위키 concepts/agent-supply-chain-security, patterns/agent-safety-runtime 클러스터. '차단이 곧 보안' — 플랫폼 사업자들이 권한 축소로 방향 전환 중.
- Copilot computer use(10/2, GUI 직접 조작)와 정면 충돌: 조작 범위가 넓어질수록 OS·플랫폼이 권한을 더 조이는 구조.