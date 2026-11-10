---
title: "Google DeepMind, AI 에이전트가 레거시 1024비트 RSA의 약점 2건 발견 — 서명 위조·일괄 인수분해, 2048비트는 안전 (11-06)"
source_url: "https://cryptobriefing.com/google-deepmind-ai-rsa-1024-bit-weaknesses/"
source_type: "news"
authors: ["Google DeepMind"]
published: 2026-11-06
fetched: 2026-11-07
tags: [google-deepmind, rsa, cryptanalysis, ai-agents, cybersecurity]
status: raw
---

# Google DeepMind, AI 에이전트가 레거시 1024비트 RSA의 약점 2건 발견 — 서명 위조·일괄 인수분해, 2048비트는 안전 (11-06)

> Google DeepMind가 11-06 인간 감독 하의 AI 에이전트가 레거시 1024비트 RSA 암호체계의 약점 2건을 찾아냈다고 발표했다. 서명 위조 경로와 일괄 인수분해 비용 절감이다. 현대 2048비트 이상 키는 영향이 없다고 밝혔다. 발표는 Pushmeet Kohli(DeepMind 과학 부문 부사장)의 X 게시글과 2편의 기술 논문으로 이뤄졌고, 별도 블로그 글은 확인되지 않았다.

## 내용

- **발표 형태**: Kohli의 X 게시글(11-06)과 2편의 기술 논문. 연구는 Dj Dvijotham·Abhradeep Thakurta가 이끌었고, UC San Diego·Inria의 암호학자 Nadia Heninger·Emmanuel Thomé가 참여했다. 한 검증 매체는 DeepMind의 블로그 글·공식 게시물을 찾지 못했다고 밝혀, 수치는 DeepMind 발표와 보도 매체 인용 기준이다.
- **서명 위조**: 선택 메시지 서명 오라클(PKCS#11의 CKM_RSA_PKCS 메커니즘)이 있는 환경에서, 공격자가 서명 블록 128바이트 중 약 65바이트 이상을 통제하면 패딩이 보호를 주지 못하고 패딩 없는 서명만큼 쉬워진다는 결과다. 32바이트 다이제스트(SHA-256 같은 짧은 지문) 경우의 새 알고리즘은 기존 최선 방법보다 이론상 약 1,600배 개선됐다고 하나, 점근적 추정치로 이 크기에서 실행된 것은 아니다. 이미 풀린 1024비트 벤치마크 키를 에이전트 2개가 인간의 짧은 메시지 약 20개로 4일 안에 재현했고, CPU 시간은 학계 팀보다 3.5배 적게 썼다. 실행 중 32비트 인덱스 오버플로를 스스로 찾아내 고치기도 했다.
- **일괄 인수분해**: 여러 개의 관련 1024비트 키를 한꺼번에 인수분해할 때 키당 평균 비용을 기존 일괄 방법보다 약 30배 낮추는 새 알고리즘이다. 점근적 복잡도가 개선됐다는 주장이다.
- **적용 범위**: 1024비트 RSA에만 해당한다. 2048비트 이상을 쓰는 현대 프로토콜은 안전하다고 DeepMind는 밝혔다. NIST는 2013년부터 SP 800-131A로 1024비트 RSA의 신규 서명 생성을 불허해 왔다. 공격에는 서명 인터페이스에 대한 직접 호출이 약 40억 회 필요하다는 등 현실적 제약도 논문에 명시됐다.
- **선행 연구**: 2026-09-20 UC San Diego·INRIA 팀(Shea·Haller·Suhl·Heninger·Thomé)의 IACR ePrint 논문이 1024비트 RSA 서명 위조를 이미 시연했고, 이번 작업은 그 벤치마크를 재현·확장한 것이다. 해당 논문은 AI를 쓰지 않았다.

## 맥락

- [[concepts/openai-gpt6-cyber]] — OpenAI GPT-6 Cyber, 정렬된 사이버 모델·ExploitGym 48.5%·Critical 등급 (2026-11-06)
- [[concepts/google-gemini-4-carbon-cyber-defense]] — Google Gemini 4 Carbon, 사이버 방어 특화 최강 모델 (2026-10-29)
- [[patterns/agent-scientific-discovery]] — 연구급 에이전트의 발견 파이프라인: 문헌 접지→in-silico 가설→wet-lab 검증
- [[concepts/openai-ai-science-three-discoveries]] — OpenAI AI 과학 발견 3건, 수학·컴퓨터과학·물리학 (2026-10-27)