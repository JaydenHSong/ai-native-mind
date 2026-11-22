---
title: "자율 에이전트 Cairn, 의료 영상 서버 제로데이를 11분 만에 찾아 루트 탈취 — AWS 공개 (11-20)"
source_url: "https://www.bleepingcomputer.com/news/security/hackers-use-autonomous-ai-tool-cairn-to-find-zero-day-take-over-server/"
source_type: "news"
authors: ["BleepingComputer", "AWS"]
published: 2026-11-20
fetched: 2026-11-22
tags: [security, autonomous-agents, zero-day, aws, offensive-ai]
status: raw
---

# 자율 에이전트 Cairn, 의료 영상 서버 제로데이를 11분 만에 찾아 루트 탈취 — AWS 공개 (11-20)

> AWS가 11월 20일 공개한 글에 따르면 중국 연계로 추정되는 행위자가 오픈소스 자율 펜테스트 프레임워크 Cairn에 "셸 접근 획득"이라는 목표만 주고 동아시아 외 중국 대학들을 노렸다. 에이전트들은 의료 영상 주석 서버 MONAI Label의 경로 순회 제로데이를 약 11분 만에 발견해 루트 권한을 탈취했다.

## 내용

- **공격**: 9월 8~10일 약 48시간, 중국 연계 추정 행위자. 오픈소스 자율 펜테스트 프레임워크 Cairn에 목표("셸 접근 획득")만 입력.
- **제로데이 발견**: MONAI Label(의료 영상 주석 서버)의 경로 순회(path traversal) 제로데이를 API 매핑부터 임의 파일 쓰기까지 약 11분 만에 발견. CVE-2026-133968, CVSS 9.8.
- **탈취 과정**: 후속 세션에서 `sitecustomize.py`에 리버스 셸을 심고 학습 API 엔드포인트로 루트 프로세스를 띄워 루트 탈취.
- **발견 경위**: AWS가 9월 10일 인증 없이 노출된 Cairn 인스턴스를 발견해 공격자 대시보드 자체를 열람하며 재구성.
- **패치 상태**: 수정은 10월 19일 병합됐으나 설치 가능한 릴리스는 아직 없음(최신 0.8.5는 2024년 11월).

## 맥락

- 자율 공격 에이전트의 실전 제로데이 발견 첫 구체 사례 — AI 보안·에이전트 오용의 핵심 자료
- 에이전트 거버넌스·취약점 공개 정책과 직결
