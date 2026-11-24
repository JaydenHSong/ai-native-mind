---
title: "Java4Shell(CVE-2026-114938) — Codex가 1시간 만에 찾은 OpenJDK RCE"
category: concepts
tags: [java4shell, codex, security, vulnerability, openjdk, ai-security]
created: 2026-11-19
updated: 2026-11-24
sources:
  - "raw/articles/2026-11-19-java4shell-codex-openjdk-rce.md"
  - "raw/articles/2026-11-24-openai-cisco-shirudo-linux-runtime.md"
related:
  - "[[concepts/google-threat-tracker-exploit-agent]]"
  - "[[concepts/openai-cisco-shirudo]]"
  - "[[concepts/anthropic-disclosure-window-30-days]]"
  - "[[concepts/microsoft-agent-framework-pypi-compromise]]"
status: draft
confidence: medium
---

# Java4Shell(CVE-2026-114938) — Codex가 1시간 만에 찾은 OpenJDK RCE

## 쉽게 읽기

**비유**: 전 세계 서버의 절반이 쓰는 자바(Java)라는 언어의 심장부에 구멍이 뚫려 있었다. "A" 65자만 보내면 서버의 문이 열린다. 이 구멍을 찾아낸 건 사람이 아니라 AI 코딩 도구 Codex다 — 찾는 데 1시간, 공격 코드 만드는 데 2시간, 비용은 200달러도 안 들었다. AI가 버그를 찾는 속도가 빨라지자, 버그를 고치고 알리는 기한도 90일에서 30일로 줄었다.

| 용어 | 풀이 |
|------|------|
| **RCE (원격 코드 실행)** | 로그인 없이 인터넷 너머에서 남의 서버에 명령을 내리는 공격 |
| **CVE** | 전 세계가 공유하는 취약점 번호 — CVE-2026-114938이 이 구멍의 이름 |
| **Base64** | 데이터를 문자로 바꿔서 주고받는 흔한 인코딩 방식 — 로그인 토큰 등 곳곳에 쓰인다 |
| **CVSS** | 취약점 위험도를 10점 만점으로 매기는 점수 |
| **HotSpot** | 자바 프로그램을 실제로 돌리는 엔진(JVM)의 이름 |

## 한줄 정의

보안 업체 Calif가 2026년 11월 17일 공개한 **Java4Shell(CVE-2026-114938)**은 OpenJDK의 Base64 디코더에 있는 메모리 손상 취약점으로, 로그인 없이 원격 코드 실행(RCE)으로 이어질 수 있다. Calif 연구원 Quang Luong은 OpenAI의 Codex를 이용해 HotSpot 내부를 감사하다 약 1시간 만에 결함을 찾았고, 첫 작동 익스플로잇까지 2시간이 더 걸렸으며, 토큰 비용은 $200 미만이었다고 한다.

## 핵심 내용

- **취약점**: HotSpot JVM이 AVX-512 VBMI 명령어로 Base64 디코딩을 가속하는 손수 작성한 x86-64 어셈블리 코드의 힙 경계 밖 쓰기(heap out-of-bounds write). 64개의 문자 'A' 뒤에 '=' 하나가 오면 디코더가 출력 배열 끝을 62바이트 넘어서 쓴다. Calif 평점 CVSS 4.0 기준 9.2(치명적), Oracle·OpenJDK 자문은 CVSS 3.1 기준 8.1(높음).
- **영향 범위**: OpenJDK 17.0.6 이후(Java 21·25·27 포함) 및 이를 기반으로 한 배포판(Oracle Java SE, Amazon Corretto, Eclipse Temurin, Microsoft Build of OpenJDK, Azul Zulu, Red Hat OpenJDK, Oracle Java 8 Enterprise Performance Pack). AVX-512 VBMI를 지원하는 x86-64 프로세서에서만 발동하며 ARM64는 영향받지 않는다.
- **실증된 RCE(기본 설정)**: 로그인 없이 — Keycloak, Atlassian Jira, Atlassian Confluence, JFrog Artifactory, Jenkins, PingFederate. 로그인 후 — Apache Kafka Broker, Apache Solr, Elasticsearch, Gerrit, Spinnaker. 이는 실증이지 실제 공격 관측이 아니다.
- **발견 과정**: Luong은 Codex에 HotSpot의 JIT 컴파일러·인트린식·암호화 코드를 감사하게 했고, 오탐을 거른 뒤 약 20분 만에 Base64 결함이 드러났다고 Calif는 전한다. 발견 1시간, 첫 익스플로잇 2시간, 토큰 비용 $200 미만.
- **대응**: Oracle이 11월 17일 오후 1시(PT) 패치를 배포했고, OpenJDK 자문도 같은 날 나왔다. Oracle의 11월 Critical Security Patch Update는 총 655개 취약점을 다루며 Java SE 패치 11건이 포함됐다. CISA는 11월 17일 즉시 패치를 촉구했고, 인터넷 노출 시스템부터 우선하라고 했다. 11월 17일 기준 실제 악용 사례는 보고되지 않았고, CISA의 알려진 악용 취약점 목록(KEV)에도 아직 오르지 않았다. Calif는 사용자가 업그레이드할 시간을 주기 위해 제품별 익스플로잇 체인은 공개하지 않고 있다. Oracle·Amazon은 Java 17·21·25·27용 수정 빌드를 냈으나, 11월 18일 오전 기준 Temurin·Zulu·Microsoft·Red Hat·리눅스 배포판은 아직 수정 빌드를 내지 않았다.
- **함께 나온 보도**: 같은 날 Forbes는 OpenAI의 GPT-6 Cyber가 Apple 제품 전반에서 결함을 찾고 있다고 보도했다. 이는 별개의 주장이다. Calif 발표문은 도구로 Codex를 지목했을 뿐 그 뒤의 모델은 밝히지 않았다.

## 왜 중요한가 (1인 개발자 관점)

1. **AI가 찾는 버그의 시대**: 예전에는 숙련된 연구원이 몇 주씩 들여다보던 코드베이스를 Codex가 1시간 만에 훑었다. 공격자도 같은 도구를 쓸 수 있다 — 방어자보다 공격자가 먼저 찾는 구조가 됐다. [[concepts/anthropic-disclosure-window-30-days]]에서 공개 기한이 90일에서 30일로 줄어든 이유가 바로 이것이다.
2. **런타임 자체의 구멍**: 앱의 버그가 아니라 자바 엔진 자체의 구멍이라, 자바로 만든 유명 앱 여섯 개가 한 번에 뚫렸다. 의존성 하나가 아니라 "바닥"이 흔들리는 종류의 사건이다. 내가 쓰는 스택의 바닥이 무엇인지 아는 게 중요하다.
3. **패치 속도 경쟁**: 패치는 나왔지만 배포판마다 시차가 있다. 내 서버의 자바 배포판이 수정 빌드를 받았는지 확인하는 것 — 그 확인 자체가 오늘 할 일이다.

## 2026-11-23 보강 — Shirudo: 에이전트가 만드는 임시 실드

- **공개**: Cisco와 OpenAI가 11월 23일 오픈소스 프로젝트 Shirudo를 공개했다. AI 에이전트가 취약점을 찾아 eBPF 기반 임시 보호막('실드')을 만들고, 정식 패치가 나올 때까지 재부팅 없이 실행 중인 Linux 시스템을 지킨다.
- **실증**: OpenAI의 Codex로 Java4Shell(CVE-2026-114938)용 실드를 만들어, 실행 중인 Elasticsearch 서비스의 익스플로잇 시도를 서비스 중단 없이 차단했다. 발견(1시간 만에 Codex가 찾음)의 반대편 — 이제 에이전트가 '방어'까지 맡는 루프가 완성됐다.
- **구조**: 실드는 에이전트가 만들어도 활성화는 증거와 인간 승인이 결정한다. 모든 실드는 암호학적으로 서명되고 TPM으로 적재·제거 기록을 남긴다. BSD 2-Clause 라이선스, GitHub: github.com/shirudo-dev/shirudo. 프리릴리스 단계, Linux 전용이다. 자세한 내용은 [[concepts/openai-cisco-shirudo]] 참조.

## 한계 (명시)

- RCE 실증은 Calif가 통제된 환경에서 기본 설정으로 한 것이며, 실제 공격 관측은 11월 17일 기준 없다.
- "1시간·$200 미만"은 Calif의 자체 발표 수치이며 독립 검증은 없다.
- GPT-6 Cyber 관련 Forbes 보도는 별개 주장으로, Calif 발표와 섞어 읽지 말 것.
- confidence는 medium — BleepingComputer·Calif·Oracle·CISA 교차이나, Calif 원문 전문 정독은 아니다.

## 관련 개념

- [[concepts/google-threat-tracker-exploit-agent]] — 같은 주에 관측된 AI 기반 익스플로잇 자동화 흐름과 맞물리는 사례 (2026-11-17)
- [[concepts/anthropic-disclosure-window-30-days]] — "AI가 같은 버그를 다시 찾아내는 속도가 빨라졌다"는 이유로 공개 기한을 30일로 단축한 배경과 직접 연결 (2026-11-17)
- [[concepts/microsoft-agent-framework-pypi-compromise]] — 공급망·런타임 신뢰를 흔드는 같은 주의 보안 사건 (2026-11-18)

## 참고 소스

- [Java4Shell(CVE-2026-114938) — Codex가 1시간 만에 찾은 OpenJDK RCE, 11-17 패치 (BleepingComputer, 11-17)](raw/articles/2026-11-19-java4shell-codex-openjdk-rce.md)