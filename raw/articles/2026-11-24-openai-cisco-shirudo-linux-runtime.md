---
title: "OpenAI·Cisco, 오픈소스 Linux 보안 런타임 Shirudo 공개 — 패치 전 eBPF 실드로 막는다 (11-23)"
source_url: "https://www.prnewswire.com/news-releases/cisco-and-openai-launch-shirudo-a-new-project-to-safeguard-agentic-ai-302948685.html"
source_type: "news"
authors: ["Cisco", "OpenAI"]
published: 2026-11-23
fetched: 2026-11-24
tags: [openai, cisco, shirudo, security, ebpf, linux, agents]
status: raw
---

# OpenAI·Cisco, 오픈소스 Linux 보안 런타임 Shirudo 공개 — 패치 전 eBPF 실드로 막는다 (11-23)

> Cisco와 OpenAI가 11월 23일 오픈소스 프로젝트 Shirudo(일본어로 '방패')를 공개했다. AI 에이전트가 취약점을 찾아 eBPF 기반 임시 보호막('실드')을 만들고, 정식 패치가 나올 때까지 재부팅 없이 실행 중인 Linux 시스템을 지키는 런타임이다. GitHub: github.com/shirudo-dev/shirudo.

## 내용

- **동작**: 에이전트가 취약점 보고를 읽고, 취약한 코드 경로만 차단하는 실드를 코드로 작성해 실제 익스플로잇 재현기로 테스트한 뒤, 인간 운영자가 승인하면 배포. 실드는 증거가 안전하다고 말할 때만 활성화되고, 모든 실드는 암호학적으로 서명돼 호스트가 실행 전 검증(공격자가 관리자 권한을 얻었어도 위조 불가).
- **기술 기반**: eBPF — 커널 소스를 바꾸거나 재시작하지 않고 커널 안 특정 지점에 작은 프로그램을 붙이는 Linux 기술. Isovalent(Cisco가 2024년 인수)에 따르면 Shirudo는 자사의 오픈소스 eBPF 런타임 보안 플랫폼 Tetragon을 AI 에이전트 중심으로 다시 쓴 것.
- **네 가지 축**: 실시간 보호, AI 지원 위협 조사, 신뢰할 수 있는 배포, 하드웨어 기반 검증(TPM으로 실드 적재·제거 기록을 측정해 남김). 실드는 서명된 패키지로 OCI 레지스트리를 통해 배포 — Isovalent 블로그는 `.bee` 패키지라 하고, Shirudo GitHub 문서는 `.upatch`라 해 용어가 아직 어긋남(프리릴리스 단계의 문서·코드 불일치).
- **실증**: OpenAI의 Codex로 Java4Shell(CVE-2026-114938, 11월 19일 수집)용 실드를 만들어, 실행 중인 Elasticsearch 서비스의 익스플로잇 시도를 서비스 중단 없이 차단.
- **라이선스**: BSD 2-Clause, eBPF 프로그램은 BSD+GPL 이중 라이선스. 상주 데몬 없이 일회성 CLI로 동작.
- **한계**: 프리릴리스 단계, Linux 전용(Windows·macOS 제외), 커널 전제조건이 까다롭다. 기술 설명 웨비나 12월 15일 예정.

## 맥락

- Java4Shell 발견(에이전트가 1시간 만에 취약점 발견, 11-19 수집)의 반대편 — 이제 에이전트가 '방어'까지 맡는 루프 완성. 공격 속도에 방어 속도를 맞추는 에이전트 보안 인프라
- 위키의 에이전트 보안·하네스 주제와 직결
