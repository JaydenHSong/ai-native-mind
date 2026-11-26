---
title: "Claude Artifacts, 원클릭 데스크톱 앱으로 — 'Install as app' 베타, Mac·Windows"
category: concepts
tags: [anthropic, claude, artifacts, desktop-apps, permissions, security, distribution]
created: 2026-11-26
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-26-claude-artifacts-install-as-app.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/anthropic-claude-ship]]"
  - "[[concepts/agent-authority-model]]"
status: draft
confidence: medium
---

# Claude Artifacts, 원클릭 데스크톱 앱으로 — 'Install as app' 베타, Mac·Windows

## 쉽게 읽기

**비유**: Claude와 대화하며 만든 작은 도구(계산기, 이미지 편집기 같은 것)가 지금까지는 대화창 안에서만 열렸다. 이제 버튼 한 번이면 그 도구가 내 컴퓨터의 진짜 앱이 된다. 자기 아이콘으로 Dock에 뜨고, 따로 창이 열린다. 다만 앱에게 "내 컴퓨터를 어디까지 건드려도 되나"를 정해 줘야 한다. 권한은 세 단계다. (1) 브라우저에서 할 수 있는 것만, (2) 항상 위에 뜨기·단축키 같은 앱 기능, (3) 파일 읽기·삭제까지 매번 묻지 않고 전부. 3단계는 편리하지만 위험해서, 본인이 만든 앱이나 같은 회사 사람이 만든 앱에만 줄 수 있다.

| 용어 | 풀이 |
|------|------|
| **Artifact** | Claude 대화 안에서 만든 작은 도구·웹페이지·문서 |
| **Install as app** | Artifact를 데스크톱 앱처럼 설치하는 기능 |
| **권한 (permission)** | 앱이 내 컴퓨터에서 무엇을 할 수 있는지 정한 범위 |
| **Full computer access** | 프로그램 실행, 파일 읽기·변경·삭제까지 매번 묻지 않고 가능한 최고 권한 |
| **커넥터** | Claude를 Gmail·Drive 같은 외부 서비스와 연결하는 기능 |

## 한줄 정의

Anthropic이 2026-11-24 Claude Artifacts를 Mac·Windows 데스크톱 앱으로 설치하는 'Install as app' 기능을 베타로 출시했다. 패키징·서명 없이 대화에서 만든 도구를 독자적인 앱으로 만들 수 있으며, '내 컴퓨터 전체 접근'까지 허용할 수 있는 3단계 권한 체계가 핵심이다.

## 핵심 내용

- **사용법**: Claude 대화에서 Artifact를 만든 뒤 Share 메뉴에서 "Install as app" 클릭. 자기 아이콘·독자 창으로 열리고 Dock에도 뜬다. Mac에선 Applications 안 Claude Apps 폴더에 들어간다. Claude for Mac/Windows v6.28899.0 이상 필요. 온라인·로그인 상태여야 열린다.
- **권한 3단계**: (1) Default — 브라우저에서 할 수 있는 것만 가능. (2) App permissions — 항상 위 창, 전역 단축키, 알림, 메뉴바 항목 등 Claude가 통제 가능한 기능. (3) Full computer access — 프로그램 실행, 파일 읽기·변경·삭제까지 매번 묻지 않고 가능. 권한은 현재 버전 앱에만 적용되며, Artifact를 수정하면 업데이트될 때마다 다시 물어본다.
- **보안 주의**: Anthropic은 설치 전 앱을 검토하지 않는다고 명시. 전체 접근은 본인이 만든 앱, 또는 Team·Enterprise에서 같은 조직 사람이 만든 앱에만 줄 수 있다. 앱이 Claude와 커넥터를 쓸 수 있고, 앱의 Claude 호출은 요금제 사용 한도에 포함된다.
- **출시 범위**: Free 포함 전 요금제 베타. Team은 기본 켜짐(전체 접근은 꺼짐), Enterprise는 소유자가 켜야 사용 가능. Linux·웹·모바일 미지원, HIPAA 구성 조직 미지원, Docs·Slides·Sheets 템플릿 Artifact는 설치 불가.
- **Anthropic 내부 사용 사례**: Linnet(레이어 이미지 편집기), Phosphor(파일 매니저), Sift(폴더 정리 규칙), Tern(Claude 동행 터미널), Vitals(성능 메뉴바 앱).

## 왜 중요한가 (1인 개발자 관점)

1. **챗봇 결과물이 '소프트웨어'가 되는 단계**: 공유하는 문서에서 내 컴퓨터에서 도는 앱으로 넘어갔다. 1인 개발자에게는 "대화로 만든 도구 → 배포"의 가장 짧은 경로다.
2. **권한이 곧 제품이다**: 3단계 권한 체계는 에이전트 권한 거버넌스의 축소판이다. Full computer access를 줄 때는 "누가 만들었나"가 유일한 기준 — 내 하네스에도 권한을 줄 때 출처를 먼저 따지는 설계가 맞다.
3. **검토 없는 배포의 위험**: Anthropic이 설치 전 검토를 안 한다고 명시했다. 남이 만든 Artifact 앱에 전체 접근을 주는 일은, 검증 안 된 코드를 sudo로 돌리는 것과 같다.

## 한계 (명시)

- Anthropic이 설치 전 앱을 검토하지 않는다 — 악성 앱 가능성.
- Full computer access는 본인·같은 조직의 앱에만 허용되지만, 한 번 주면 파일 삭제까지 매번 묻지 않는다.
- Linux·웹·모바일 미지원, HIPAA 구성 조직 미지원, Docs·Slides·Sheets 템플릿 설치 불가.
- confidence는 medium — Anthropic 공식 발표 기준이나, 실사용 검증·보안 사고 사례는 아직 없다.

## 관련 개념

- [[concepts/mcp]] — MCP의 기본 개념. Artifact 앱이 Claude와 커넥터를 쓰는 연결 방식의 바탕 (2026-11-26)
- [[concepts/anthropic-claude-ship]] — 같은 시기 Anthropic의 에이전트 제품. 권한을 넘기는 쪽과 앱으로 배포하는 쪽의 양면 (2026-11-26)
- [[concepts/agent-authority-model]] — 업무별 에이전트 권한 5단계 프레임워크. 3단계 권한 체계의 거버넌스 관점 (2026-11-26)

## 참고 소스

- [Claude Artifacts, 원클릭 데스크톱 앱으로 — 'Install as app' 베타, Mac·Windows (Anthropic, 11-24)](raw/articles/2026-11-26-claude-artifacts-install-as-app.md)
