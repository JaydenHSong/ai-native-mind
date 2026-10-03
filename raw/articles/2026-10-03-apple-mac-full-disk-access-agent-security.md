---
title: "Apple, Mac '전체 디스크 접근' 권한 통제 강화 예고 — AI 에이전트 보안 우려"
source_url: "https://kimkj.com/ai-board/?mod=document&uid=17707"
source_type: "press-digest"
authors: ["kimkj"]
published: 2026-10-03
fetched: 2026-10-03
tags: [apple, mac, full-disk-access, agent-security, chatgpt, permission-model]
status: raw
---

# Apple Mac 전체 디스크 접근 권한 통제 강화 예고 (10/3)

> AI 에이전트가 스스로 움직이는 범위가 넓어질수록 권한 위험 증가 — Apple이 OS 레벨에서 승인·권한 설계를 다시 조이기 시작.

## 내용

- Apple: Mac 앱의 '전체 디스크 접근' 권한에 추가 통제를 두겠다고 발표. 이 권한은 파일뿐 아니라 메일·메시지·방문 기록까지 노출 가능.
- Apple 설명: AI 에이전트가 스스로 움직이는 범위가 넓어질수록 이 위험이 커진다. 새 통제는 이용자가 권한 부여 의사를 분명히 표시하도록 설계. 적용 시점은 미제시.
- WIRED 보도: ChatGPT Mac 앱의 최근 수정된 보안 결함. 전제는 공격자가 이미 피해자 Mac에서 코드 실행 가능한 상황. 앱의 신뢰 관계를 악용해 대화 기록·연결된 브라우저 세션 데이터에 접근할 가능성. OpenAI가 9/25 결함·수정 사실을 공개. 실제 데이터 탈취 확인 보도는 아님.

## 맥락

- 위키 concepts/agent-supply-chain-security, patterns/agent-safety-runtime 클러스터와 직결.
- 핵심 역설: AI 앱에 넓은 기기 접근 권한을 줄수록 앱 자체 결함의 파급 범위도 커진다. Copilot computer use(10/2 raw, GUI 직접 조작) 같은 흐름과 맞물려 권한 승인 설계가 다음 관문.
