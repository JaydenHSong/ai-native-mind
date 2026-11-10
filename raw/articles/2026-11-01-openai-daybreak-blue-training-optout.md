---
title: "OpenAI Daybreak Blue — 학습 거부 켜둬도 11-29부터 사이버 세션은 학습에 쓴다"
source_url: "https://www.machinebrief.com/news/openai-plans-to-train-models-on-daybreak-blue-cybersecurity-y12e"
source_type: "news"
authors: ["The Decoder"]
published: 2026-10-31
fetched: 2026-11-01
tags: [openai, daybreak, trusted-access, training-data, consent, cybersecurity]
status: raw
---

# OpenAI Daybreak Blue — 학습 거부 켜둬도 11-29부터 사이버 세션은 학습에 쓴다

> OpenAI가 Trusted Access for Cyber 프로그램의 Daybreak Blue 세션 데이터를 2026-11-29부터 모델 학습에 사용한다. 개인 계정의 '모두를 위해 모델 개선' 토글을 꺼둬도 Daybreak 세션은 예외다. 연구자 반발 뒤 별도 옵트아웃을 약속하는 2차 이메일이 나갔지만, 그 작동 방식은 공개 도움말에 아직 없다. (The Decoder, 프로그램 회원 이메일 기반)

## 내용

- **변경 내용**: Daybreak Blue 세션 데이터는 지금까지 학습 파이프라인에서 완전히 제외돼 있었다. 일반 학습 설정이 꺼져 있어도 마찬가지였다. 11-29부터는 개인 계정 Daybreak 세션이 학습 대상이 된다.
- **예외 범위**: Business·Enterprise·Edu·API Platform 활동은 기본적으로 학습에서 제외되며 그대로다. 예외는 개인 계정의 Daybreak 세션에만 적용된다. Daybreak 세션 외 개인 활동은 기존 토글을 따른다.
- **반발과 2차 이메일**: 보안 연구자 Sean Heelan의 X 게시물(600+ 좋아요)이 비판을 확산시킨 뒤, OpenAI는 별도 Daybreak 옵트아웃을 약속하는 2차 이메일을 보냈다. 기본값·소급 적용 여부·공개 시점은 미설명이다.
- **안전 검토 예외**: 안전 검토에서 플래그된 상호작용은 안전 목적으로 계속 사용될 수 있다. 학습 옵트아웃이 모든 사용을 막는 것은 아니다.
- **민감성**: Daybreak 세션에는 미공개 취약점·익스플로잇 PoC·진행 중 사건 데이터가 들어갈 수 있다. 개별 Daybreak Blue API 접근은 11-20 종료 보고가 있어, 프로그램 사용자는 비즈니스 계정으로 이동하게 된다.
- **과거 분쟁**: The Decoder는 수학자 Buckmaster·Alpöge가 미공개 연구의 학습 사용 의혹을 제기했던 일을 연결 짓는다. OpenAI는 학습 사실을 부인했고 입증된 바 없다.

## 맥락

- [[concepts/ai-training-opt-out-robots-txt]] — 4대 랩 AI 학습 거부 단일 robots.txt 토큰 합의, IETF 개인 초안 (2026-10-31 위키)
- [[concepts/openai-frontier-misalignment-monitoring]] — OpenAI 프론티어 오정렬 감시 4단계, Hugging Face 리플레이·9월 20일 DNS 사건 (2026-10-30 위키)
- [[concepts/openai-safety-monitor-disabling]] — OpenAI misalignment 보고, 코딩 에이전트의 안전 감시 해제 + 거짓 진술 (2026-10-22 위키)
