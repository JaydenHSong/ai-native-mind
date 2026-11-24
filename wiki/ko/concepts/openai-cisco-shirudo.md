---
title: "OpenAI·Cisco Shirudo — 패치 전 eBPF 실드로 Linux를 지키는 에이전트 보안 런타임"
category: concepts
tags: [openai, cisco, shirudo, security, ebpf, linux, agents]
created: 2026-11-24
updated: 2026-11-24
sources:
  - "raw/articles/2026-11-24-openai-cisco-shirudo-linux-runtime.md"
related:
  - "[[concepts/java4shell-codex-openjdk-rce]]"
  - "[[concepts/anthropic-disclosure-window-30-days]]"
  - "[[concepts/google-threat-tracker-exploit-agent]]"
  - "[[concepts/ai-orchestration]]"
status: draft
confidence: medium
---

# OpenAI·Cisco Shirudo — 패치 전 eBPF 실드로 Linux를 지키는 에이전트 보안 런타임

## 쉽게 읽기

**비유**: 서버에 구멍이 뚫린 걸 알았는데 정식 수리(패치)가 나오려면 며칠이 걸린다. 그동안 문을 열어 둘 수는 없으니, AI가 구멍 난 곳만 정확히 가리는 임시 방패를 만들어 붙인다. 이 방패는 서버를 끄지 않고도 붙일 수 있고, 진짜 공격은 막되 정상 손님은 그대로 들여보낸다. 방패가 안전한지는 실제 공격으로 미리 시험해 보고, 사람이 "붙여도 된다"고 확인해야만 활성화된다. 이름 Shirudo는 일본어로 '방패'라는 뜻이다.

| 용어 | 풀이 |
|------|------|
| **eBPF** | 리눅스 커널 안에 작은 프로그램을 붙여서, 시스템을 끄지 않고 동작을 바꾸는 기술 |
| **실드 (shield)** | 취약한 코드 경로만 차단하는 임시 보호막. 정식 패치가 나올 때까지 버티는 용도 |
| **제로데이** | 아직 패치가 없는, 세상에 처음 알려진 취약점 |
| **TPM** | 컴퓨터 안에 있는 보안 칩. 무엇이 설치·제거됐는지 하드웨어 수준에서 기록해 둔다 |
| **OCI 레지스트리** | 컨테이너 이미지를 주고받는 저장소. 실드 패키지도 여기서 배포한다 |

## 한줄 정의

Cisco와 OpenAI가 2026-11-23 공개한 오픈소스 프로젝트 Shirudo는 AI 에이전트가 취약점을 찾아 eBPF 기반 임시 보호막('실드')을 만들고, 정식 패치가 나올 때까지 재부팅 없이 실행 중인 Linux 시스템을 지키는 런타임이다. GitHub: github.com/shirudo-dev/shirudo.

## 핵심 내용

- **동작**: 에이전트가 취약점 보고를 읽고, 취약한 코드 경로만 차단하는 실드를 코드로 작성해 실제 익스플로잇 재현기로 테스트한 뒤, 인간 운영자가 승인하면 배포. 실드는 증거가 안전하다고 말할 때만 활성화되고, 모든 실드는 암호학적으로 서명돼 호스트가 실행 전 검증(공격자가 관리자 권한을 얻었어도 위조 불가).
- **기술 기반**: eBPF — 커널 소스를 바꾸거나 재시작하지 않고 커널 안 특정 지점에 작은 프로그램을 붙이는 Linux 기술. Isovalent(Cisco가 2024년 인수)에 따르면 Shirudo는 자사의 오픈소스 eBPF 런타임 보안 플랫폼 Tetragon을 AI 에이전트 중심으로 다시 쓴 것.
- **네 가지 축**: 실시간 보호, AI 지원 위협 조사, 신뢰할 수 있는 배포, 하드웨어 기반 검증(TPM으로 실드 적재·제거 기록을 측정해 남김). 실드는 서명된 패키지로 OCI 레지스트리를 통해 배포 — Isovalent 블로그는 `.bee` 패키지라 하고, Shirudo GitHub 문서는 `.upatch`라 해 용어가 아직 어긋남(프리릴리스 단계의 문서·코드 불일치).
- **실증**: OpenAI의 Codex로 Java4Shell(CVE-2026-114938)용 실드를 만들어, 실행 중인 Elasticsearch 서비스의 익스플로잇 시도를 서비스 중단 없이 차단.
- **라이선스**: BSD 2-Clause, eBPF 프로그램은 BSD+GPL 이중 라이선스. 상주 데몬 없이 일회성 CLI로 동작.
- **한계**: 프리릴리스 단계, Linux 전용(Windows·macOS 제외), 커널 전제조건이 까다롭다. 기술 설명 웨비나 12월 15일 예정.

## 왜 중요한가 (1인 개발자 관점)

1. **공격 속도 = 방어 속도**: 11월 19일 Java4Shell은 에이전트가 1시간 만에 취약점을 찾았다. 이제 같은 에이전트가 '방어'까지 맡는다. 취약점 발견에서 방어 배포까지의 간격이 패치 주기가 아니라 에이전트 실행 시간이 되는 구조다.
2. **에이전트에게 주는 권한의 설계도**: 실드는 에이전트가 만들어도, 활성화는 증거와 인간 승인이 결정한다. 에이전트에게 "만들게는 하되, 켜는 건 사람이 정한다"는 분리 — [[concepts/anthropic-disclosure-window-30-days]]의 30일 공개 기한 단축과 같은 맥락의 '속도 대 안전' 설계다.
3. **내 서버에도 적용 가능한 패턴**: 패치를 기다리는 동안의 노출 창(윈도우)을 임시 실드로 메우는 아이디어는, 내 운영 서버의 취약점 대응 절차에도 그대로 쓸 수 있다. 정식 패치 전 임시 완화책을 '코드'로 남기는 습관이 곧 이 프로젝트의 핵심이다.

## 한계 (명시)

- 프리릴리스 단계로, 실전 운영 검증은 아직 없다. `.bee` vs `.upatch` 용어 불일치처럼 문서·코드가 아직 어긋나는 지점이 있다.
- Linux 전용이며 커널 전제조건이 까다로워, 내 환경에서 바로 돌릴 수 없을 수 있다.
- 실증은 Java4Shell 한 건의 통제된 시연이다. 다양한 취약점·워크로드에서의 효과는 미검증.
- confidence는 medium — Cisco·OpenAI 1차 발표 + BleepingComputer 등 다수 보도 교차이나, 실전 검증은 없다.

## 관련 개념

- [[concepts/java4shell-codex-openjdk-rce]] — Shirudo 실증의 대상이 된 취약점, 에이전트가 1시간 만에 찾은 OpenJDK RCE (2026-11-24)
- [[concepts/anthropic-disclosure-window-30-days]] — AI가 버그를 빨리 찾게 되면서 공개 기한이 90일에서 30일로 줄어든 배경 (2026-11-24)
- [[concepts/google-threat-tracker-exploit-agent]] — AI 기반 익스플로잇 자동화 흐름과 맞물리는 사례 (2026-11-24)
- [[concepts/ai-orchestration]] — 취약점 조사·실드 생성·검증을 맡는 에이전트 워크플로우 (2026-11-24)

## 참고 소스

- [OpenAI·Cisco, 오픈소스 Linux 보안 런타임 Shirudo 공개 (Cisco·OpenAI, 11-23)](raw/articles/2026-11-24-openai-cisco-shirudo-linux-runtime.md)
- [Shirudo on GitHub](https://github.com/shirudo-dev/shirudo)
