---
title: "Claude Artifacts, 원클릭 데스크톱 앱으로 — 'Install as app' 베타, Mac·Windows (11-24)"
source_url: "https://claude.com/resources/articles/install-as-app"
source_type: "news"
authors: ["Anthropic"]
published: 2026-11-24
fetched: 2026-11-26
tags: [anthropic, claude, artifacts, desktop-apps, permissions, security, distribution]
status: raw
---

# Claude Artifacts, 원클릭 데스크톱 앱으로 — 'Install as app' 베타, Mac·Windows (11-24)

> Anthropic이 11월 24일 Claude Artifacts를 Mac·Windows 데스크톱 앱으로 설치하는 'Install as app' 기능을 베타로 내놨다. 패키징·서명 없이 대화에서 만든 도구를 독자적인 앱으로 만들 수 있으며, '내 컴퓨터 전체 접근'까지 허용할 수 있는 3단계 권한 체계가 핵심이다.

## 내용

- **사용법**: Claude 대화에서 Artifact를 만든 뒤 Share 메뉴에서 "Install as app" 클릭. 자기 아이콘·독자 창으로 열리고 Dock에도 뜬다. Mac에선 Applications 안 Claude Apps 폴더에 들어간다. Claude for Mac/Windows v6.28899.0 이상 필요. 온라인·로그인 상태여야 열린다.
- **권한 3단계**: (1) Default — 브라우저에서 할 수 있는 것만 가능. (2) App permissions — 항상 위 창, 전역 단축키, 알림, 메뉴바 항목 등 Claude가 통제 가능한 기능. (3) Full computer access — 프로그램 실행, 파일 읽기·변경·삭제까지 매번 묻지 않고 가능. 권한은 현재 버전 앱에만 적용되며, Artifact를 수정하면 업데이트될 때마다 다시 물어본다.
- **보안 주의**: Anthropic은 설치 전 앱을 검토하지 않는다고 명시. 전체 접근은 본인이 만든 앱, 또는 Team·Enterprise에서 같은 조직 사람이 만든 앱에만 줄 수 있다. 앱이 Claude와 커넥터를 쓸 수 있고, 앱의 Claude 호출은 요금제 사용 한도에 포함된다.
- **출시 범위**: Free 포함 전 요금제 베타. Team은 기본 켜짐(전체 접근은 꺼짐), Enterprise는 소유자가 켜야 사용 가능. Linux·웹·모바일 미지원, HIPAA 구성 조직 미지원, Docs·Slides·Sheets 템플릿 Artifact는 설치 불가.
- **Anthropic 내부 사용 사례**: Linnet(레이어 이미지 편집기), Phosphor(파일 매니저), Sift(폴더 정리 규칙), Tern(Claude 동행 터미널), Vitals(성능 메뉴바 앱).

## 맥락

- 챗봇이 만든 결과물이 '공유하는 문서'에서 '내 컴퓨터에서 도는 소프트웨어'로 넘어가는 단계 — 에이전트 배포·권한 거버넌스 주제와 직결
- 어제 다룬 Anthropic MCP Skills·Siren 샌드박스 이슈와 같은 주에 나온 '에이전트 권한' 뉴스의 제품 쪽 대응
