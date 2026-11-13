---
title: "DeepMind, AlphaProof Code로 Signal 암호 프로토콜 기계어 수준 검증 — Lean 650만 줄 (11-10)"
category: concepts
tags: [deepmind, alphaproof, formal-verification, signal, lean, gemini-carbon]
created: 2026-11-11
updated: 2026-11-11
sources:
  - "raw/articles/2026-11-11-deepmind-alphaproof-code-signal.md"
related:
  - "[[concepts/google-gemini-4-carbon-launch]]"
  - "[[concepts/deepmind-rsa-1024-agent-cryptanalysis]]"
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
status: draft
confidence: high
---

# DeepMind, AlphaProof Code로 Signal 암호 프로토콜 기계어 수준 검증 — Lean 650만 줄 (11-10)

## 쉽게 읽기

**비유**: 지금까지 암호가 안전한지 확인하는 일은, 수학자가 몇 년에 걸쳐 설계도를 검산하는 일이었다. 이제 AI 에이전트 팀이 실제 지어진 건물(컴파일된 코드) 자체를 4주 만에 샅샅이 검사해서, "이 건물의 이 기둥은 이 하중을 견딘다"는 증명서를 650만 줄 써 냈다. 사람이 직접 읽은 건 그중 1%뿐이고, 나머지는 증명 검사 기계(Lean)가 맞다고 도장을 찍었다.

| 용어 | 풀이 |
|------|------|
| **형식 검증(formal verification)** | 코드가 명세를 만족함을 수학적으로 증명하는 방법 |
| **Lean** | 증명을 기계가 검사할 수 있게 쓰는 언어·검사기 |
| **PQXDH / Triple Ratchet** | Signal의 양자내성 핸드셰이크와 메시지 키 갱신 메커니즘 |
| **AlphaProof Code** | DeepMind의 다중 LLM 에이전트 형식 검증 프레임워크 |

## 한줄 정의

2026-11-10 — Google DeepMind가 AlphaProof Code를 공개했다. 여러 LLM으로 이뤄진 에이전트 프레임워크가 Signal 암호 프로토콜(libsignal)의 컴파일된 코드가 핵심 보안 속성을 만족함을 수학적으로 증명했다. Gemini Carbon 기반 에이전트가 Lean 증명을 약 650만 줄 생성했고, 4주 만에 끝났다. DeepMind는 널리 쓰이는 암호 프로토콜을 이 깊이까지 AI로 형식 검증한 첫 사례라고 밝혔다.

## 핵심 내용

- **검증 범위**: Signal의 PQXDH 핸드셰이크와 Triple Ratchet, 두 컴포넌트를 대상으로 전방 비밀성(forward secrecy)·인증·침해 후 보안(post-compromise security)·핸드셰이크 비밀성 4개 속성을 컴파일된 기계어(AArch64) 수준에서 증명했다. 대상 코드는 Signal·Google Messages·WhatsApp 등에서 쓰이는 libsignal이다. 기존 프로토콜 검증이 설계 수준에서 멈추던 것과 달리 구현체 자체를 검증했다는 점이 핵심 주장이다.
- **방식**: 인간 전문가가 증명할 명세를 정하고 검토하는 역할, AI 에이전트 그룹이 증명을 만드는 역할로 나눈다. 에이전트가 Lean 증명을 생성하면 Lean 커널이 기계적으로 검증한다. 인간이 검토한 부분은 코드베이스의 약 1%이며, 나머지는 Lean이 검사했다. 명세 약 18,000줄이 신뢰 기반(trusted base)이다.
- **규모·기간**: 논문 기준 약 650만 줄의 Lean 증명(바이너리 증명 약 530만 줄 + 계산 증명 약 86만 줄 + 기호 증명 약 35만 줄). DeepMind 블로그 본문은 "600만 줄 이상"이라 하고 메타 설명에는 "300만 줄 이상"이라는 오래된 수치가 남아 있어 인용 시 주의가 필요하다. 외부 검증자가 저장소를 직접 세어 본 결과 .lean 파일 전체 7,528,293줄, 핵심 증명에는 sorry가 없었다. 기간은 4주, 전문가 팀이 수년이 걸리던 작업과 대비된다.
- **검증의 검증**: 과거에 이미 수정된 버그 2건을 격리된 복사본에 다시 심었더니 두 경우 모두 시스템이 해당 버전이 안전하지 않다는 기계 검사 증명을 냈다. 명세·증명 아티팩트와 기술 논문을 공개했다.
- **한계**: 전체 앱·OS·하드웨어·메타데이터 처리·명세 밖에 있는 동작은 보증하지 않는다. 타이밍 누수·하드웨어 결함도 명시적으로 모델링하지 않으면 보장 밖이다. 암호 원시(primitive)의 바이트 수준 비밀성은 가정으로 둔다. AlphaProof Code 프레임워크 자체는 범용 패키지로 출시되지 않았다.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트가 '그럴듯한 결과물'이 아니라 기계가 검사 가능한 결과를 대량 생산했다**: 650만 줄의 증명은 사람이 읽을 수 없는 규모지만 Lean 커널이 검증한다. 에이전트 성과의 신뢰 기준이 '사람이 읽어봄'에서 '기계가 검사함'으로 이동하는 사례다.
2. **형식 검증의 병목이 '증명 작성'에서 '명세 작성·검토'로 이동한다**: 증명은 에이전트가 쓰지만, 무엇을 증명할지 정하고 명세를 검토하는 일은 여전히 인간 몫이다. 보안이 중요한 소프트웨어의 보증 비용 구조가 바뀔 수 있다.
3. **페르마 형식화와 짝을 이루는 '증명 에이전트' 흐름이다**: 11-09 Anthropic이 1,000개 Fable 5.2 에이전트의 페르마 정리 형식화를 주장했고, 11-10 DeepMind가 Signal 검증을 내놨다. 수학·암호라는 '정답이 있는' 영역에서 에이전트의 기계 검사 가능 성과물이 연달아 나오고 있다.

## 한계 (명시)

- DeepMind 블로그 안에서 증명 줄 수가 300만·600만·650만 줄로 다르게 적혀 있다. 인용할 때는 논문 기준 약 650만 줄을 쓰고 출처를 밝혀야 한다.
- 검증 범위는 libsignal의 두 컴포넌트와 4개 속성에 한정되며, 앱 전체·OS·하드웨어·메타데이터는 보장 밖이다.
- 프레임워크 자체가 범용 패키지로 출시되지 않아, 오늘 당장 내 코드에 써먹을 수는 없다.

## 관련 개념

- [[concepts/google-gemini-4-carbon-launch]] — Google Gemini 4 Carbon 전면 공개, AlphaProof Code의 에이전트 기반 모델 (2026-11-10)
- [[concepts/deepmind-rsa-1024-agent-cryptanalysis]] — DeepMind 에이전트의 레거시 1024비트 RSA 약점 2건 발견 (2026-11-06)
- [[concepts/openai-gpt6-cyber]] — OpenAI GPT-6 Cyber, 사이버 보안 특화 모델 (2026-11-05)
- [[concepts/claude-fable-5-2-mythos-5-2]] — 1,000개 Fable 5.2 에이전트의 페르마 정리 Lean 형식화 주장 (2026-11-09)

## 참고 소스

- [DeepMind AlphaProof Code Signal 검증 원본](raw/articles/2026-11-11-deepmind-alphaproof-code-signal.md)