---
title: "Java4Shell(CVE-2026-114938) — Codex가 1시간 만에 찾은 OpenJDK RCE, 11-17 패치 (11-17)"
source_url: "https://www.bleepingcomputer.com/news/security/critical-java4shell-flaw-allows-rce-attacks-on-major-java-applications/"
source_type: "news"
authors: ["BleepingComputer"]
published: 2026-11-17
fetched: 2026-11-19
tags: [java4shell, codex, security, vulnerability, openjdk, ai-security]
status: raw
---

# Java4Shell(CVE-2026-114938) — Codex가 1시간 만에 찾은 OpenJDK RCE, 11-17 패치 (11-17)

> 보안 업체 Calif가 11월 17일 공개한 Java4Shell(CVE-2026-114938)은 OpenJDK의 Base64 디코더에 있는 메모리 손상 취약점으로, 로그인 없이 원격 코드 실행(RCE)으로 이어질 수 있다. Calif 연구원 Quang Luong은 OpenAI의 Codex를 이용해 HotSpot 내부를 감사하다 약 1시간 만에 결함을 찾았고, 첫 작동 익스플로잇까지 2시간이 더 걸렸으며, 토큰 비용은 $200 미만이었다고 한다.

## 내용

- **취약점**: HotSpot JVM이 AVX-512 VBMI 명령어로 Base64 디코딩을 가속하는 손수 작성한 x86-64 어셈블리 코드의 힙 경계 밖 쓰기(heap out-of-bounds write). 64개의 문자 'A' 뒤에 '=' 하나가 오면 디코더가 출력 배열 끝을 62바이트 넘어서 쓴다. Calif 평점 CVSS 4.0 기준 9.2(치명적), Oracle·OpenJDK 자문은 CVSS 3.1 기준 8.1(높음).
- **영향 범위**: OpenJDK 17.0.6 이후(Java 21·25·27 포함) 및 이를 기반으로 한 배포판(Oracle Java SE, Amazon Corretto, Eclipse Temurin, Microsoft Build of OpenJDK, Azul Zulu, Red Hat OpenJDK, Oracle Java 8 Enterprise Performance Pack). AVX-512 VBMI를 지원하는 x86-64 프로세서에서만 발동하며 ARM64는 영향받지 않는다.
- **실증된 RCE(기본 설정)**: 로그인 없이 — Keycloak, Atlassian Jira, Atlassian Confluence, JFrog Artifactory, Jenkins, PingFederate. 로그인 후 — Apache Kafka Broker, Apache Solr, Elasticsearch, Gerrit, Spinnaker. 이는 실증이지 실제 공격 관측이 아니다.
- **발견 과정**: Luong은 Codex에 HotSpot의 JIT 컴파일러·인트린식·암호화 코드를 감사하게 했고, 오탐을 거른 뒤 약 20분 만에 Base64 결함이 드러났다고 Calif는 전한다. 발견 1시간, 첫 익스플로잇 2시간, 토큰 비용 $200 미만. 같은 날 Forbes는 OpenAI의 GPT-6 Cyber가 Apple 제품 전반에서 결함을 찾고 있다고 보도했는데, 이는 별개의 주장이다(Calif 발표문은 도구로 Codex를 지목했을 뿐 그 뒤의 모델은 밝히지 않았다).
- **대응**: Oracle이 11월 17일 오후 1시(PT) 패치를 배포했고, OpenJDK 자문도 같은 날 나왔다. Oracle의 11월 Critical Security Patch Update는 총 655개 취약점을 다루며 Java SE 패치 11건이 포함됐다. CISA는 11월 17일 즉시 패치를 촉구했고, 인터넷 노출 시스템부터 우선하라고 했다. 11월 17일 기준 실제 악용 사례는 보고되지 않았고, CISA의 알려진 악용 취약점 목록(KEV)에도 아직 오르지 않았다. Calif는 사용자가 업그레이드할 시간을 주기 위해 제품별 익스플로잇 체인은 공개하지 않고 있다. Oracle·Amazon은 Java 17·21·25·27용 수정 빌드를 냈으나, 11월 18일 오전 기준 Temurin·Zulu·Microsoft·Red Hat·리눅스 배포판은 아직 수정 빌드를 내지 않았다.

## 맥락

- [[concepts/google-threat-tracker-exploit-agent]] — 같은 주에 관측된 AI 기반 익스플로잇 자동화 흐름과 맞물리는 사례
- [[concepts/anthropic-disclosure-window-30-days]] — "AI가 같은 버그를 다시 찾아내는 속도가 빨라졌다"는 이유로 공개 기한을 30일로 단축한 배경과 직접 연결
- [[concepts/microsoft-agent-framework-pypi-compromise]] — 공급망·런타임 신뢰를 흔드는 같은 주의 보안 사건