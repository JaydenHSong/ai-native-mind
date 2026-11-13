---
title: "DeepMind, AlphaProof Code로 Signal 암호 프로토콜 기계어 수준 검증 — Lean 650만 줄 (11-10)"
source_url: "https://deepmind.google/blog/introducing-alphaproof-code/"
source_type: "research"
authors: ["Google DeepMind"]
published: 2026-11-10
fetched: 2026-11-11
tags: [deepmind, alphaproof, formal-verification, signal, lean, gemini-carbon]
status: raw
---

# DeepMind, AlphaProof Code로 Signal 암호 프로토콜 기계어 수준 검증 — Lean 650만 줄 (11-10)

> Google DeepMind가 11-10 AlphaProof Code를 공개했다. 여러 LLM으로 이뤄진 에이전트 프레임워크가 Signal 암호 프로토콜(libsignal)의 컴파일된 코드가 핵심 보안 속성을 만족함을 수학적으로 증명했다. Gemini Carbon 기반 에이전트가 Lean 증명을 약 650만 줄 생성했고, 4주 만에 끝났다. DeepMind는 널리 쓰이는 암호 프로토콜을 이 깊이까지 AI로 형식 검증한 첫 사례라고 밝혔다.

## 내용

- **검증 범위**: Signal의 PQXDH 핸드셰이크와 Triple Ratchet, 두 컴포넌트를 대상으로 전방 비밀성(forward secrecy)·인증·침해 후 보안(post-compromise security)·핸드셰이크 비밀성 4개 속성을 컴파일된 기계어(AArch64) 수준에서 증명했다. 대상 코드는 Signal·Google Messages·WhatsApp 등에서 쓰이는 libsignal이다. 기존 프로토콜 검증이 설계 수준에서 멈추던 것과 달리 구현체 자체를 검증했다는 점이 핵심 주장이다.
- **방식**: 인간 전문가가 증명할 명세를 정하고 검토하는 역할, AI 에이전트 그룹이 증명을 만드는 역할로 나눈다. 에이전트가 Lean 증명을 생성하면 Lean 커널이 기계적으로 검증한다. 인간이 검토한 부분은 코드베이스의 약 1%이며, 나머지는 Lean이 검사했다. 명세 약 18,000줄이 신뢰 기반(trusted base)이다.
- **규모·기간**: 논문 기준 약 650만 줄의 Lean 증명(바이너리 증명 약 530만 줄 + 계산 증명 약 86만 줄 + 기호 증명 약 35만 줄). DeepMind 블로그 본문은 "600만 줄 이상"이라 하고 메타 설명에는 "300만 줄 이상"이라는 오래된 수치가 남아 있어 인용 시 주의가 필요하다. 외부 검증자가 저장소를 직접 세어 본 결과 .lean 파일 전체 7,528,293줄, 핵심 증명에는 sorry가 없었다. 기간은 4주, 전문가 팀이 수년이 걸리던 작업과 대비된다.
- **검증의 검증**: 과거에 이미 수정된 버그 2건을 격리된 복사본에 다시 심었더니 두 경우 모두 시스템이 해당 버전이 안전하지 않다는 기계 검사 증명을 냈다. 명세·증명 아티팩트와 기술 논문을 공개했다.
- **한계**: 전체 앱·OS·하드웨어·메타데이터 처리·명세 밖에 있는 동작은 보증하지 않는다. 타이밍 누수·하드웨어 결함도 명시적으로 모델링하지 않으면 보장 밖이다. 암호 원시(primitive)의 바이트 수준 비밀성은 가정으로 둔다. AlphaProof Code 프레임워크 자체는 범용 패키지로 출시되지 않았다.
- **의미**: 에이전트가 '그럴듯한 결과물'이 아니라 기계가 검사 가능한 결과를 대량으로 생산한 사례다. 형식 검증의 병목이 '증명 작성'에서 '명세 작성·검토'로 이동하면, 보안이 중요한 소프트웨어의 보증 비용 구조가 바뀔 수 있다. Axiom Math의 Stacks Project 검증과 함께 AI 에이전트의 기계 검사 가능 성과물이 늘어나는 흐름이다.

## 맥락

- [[concepts/google-gemini-4-carbon-launch]] — Google Gemini 4 Carbon 전면 공개, AlphaProof Code의 에이전트 기반 모델 (2026-11-10)
- [[concepts/deepmind-rsa-1024-agent-cryptanalysis]] — DeepMind 에이전트의 레거시 1024비트 RSA 약점 2건 발견 (2026-11-06)
- [[concepts/openai-gpt6-cyber]] — OpenAI GPT-6 Cyber, 사이버 보안 특화 모델 (2026-11-05)
- [[concepts/claude-fable-5-2-mythos-5-2]] — 1,000개 Fable 5.2 에이전트의 페르마 정리 Lean 형식화 주장 (2026-11-09)
