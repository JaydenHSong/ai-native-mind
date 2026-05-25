---
title: "Vibe Coding 안티패턴"
category: patterns
tags: [vibe-coding, antipatterns, security, production, solo-developer]
created: 2026-04-09
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-09-vibe-coding-antipatterns.md"
related:
  - "[[concepts/agentic-engineering]]"
  - "[[concepts/cognitive-debt]]"
  - "[[patterns/ai-code-review]]"
  - "[[concepts/context-rot-hallucination]]"
status: active
confidence: high
---

# Vibe Coding 안티패턴

## 쉽게 읽기

**Vibe coding**은 “느낌상 괜찮아 보이니까” AI 코드를 **거의 검토 없이** 받아들이는 태도다. 이 페이지는 그렇게 하면 **보안·유출·유지보수**에서 어떤 일이 실제로 나는지 정리한다. 겁주기가 아니라 **체크리스트**로 읽으면 된다.

| 용어 | 풀이 |
|------|------|
| **안티패턴** | 이름은 그럴듯하지만 **피해야 할** 습관 |
| **API 키** | 외부 서비스 문을 여는 **비밀 열쇠** — 유출되면 큰일 |
| **유지보수** | 출시 후에도 **고치고 돌보는 일** |

## 한줄 설명

AI가 생성한 코드를 무비판적으로 수용하는 Vibe Coding의 **실제 실패 패턴**과 회피 방법.

## 충격적 수치 (2026)

- AI 생성 코드의 **최대 45%**가 보안 취약점 포함
- 2026년 초 vibe-coded 앱에서 **150만 API 키 + 3.5만 이메일** 유출 사건
- 전문가들이 "Challenger 재난"에 비유

## 7대 안티패턴

### 1. The Happy Path Problem

AI는 "모든 게 잘 될 때"만 잘 처리:
- ✅ 정상 입력 → 잘 작동
- ❌ 엣지 케이스 → 미처리
- ❌ 에러 상태 → 무시
- ❌ 예상 못한 입력 → 크래시

**특히 취약한 영역**:
- Authentication
- Payment processing
- Encryption
- Input validation

### 2. Security Blindness

AI 생성 코드의 일반적 취약점:
- 평문 비밀번호 저장
- API 키 하드코딩
- SQL injection
- XSS / CSRF
- Rate limiting 없음

### 3. Happy Diff, Sad Code

- AI가 보여주는 diff는 깔끔
- 하지만 전체 시스템에 미치는 영향 파악 안 됨
- 작은 변경이 **숨겨진 의존성**을 깨뜨림

### 4. Architectural Decay

연속된 vibe coding 세션의 결과:
- 아무도 의도적으로 설계하지 않음
- 코드베이스가 엉킴
- 유지보수 불가능
- "혼돈의 스파게티"

### 5. Context Amnesia

- AI가 프로젝트 전체를 기억 못함
- 같은 패턴을 다르게 구현
- 중복 코드 폭증
- 일관성 없는 API

### 6. The Prompt Gambler

- "작동할 때까지 프롬프트 바꾸기"
- 이해 없이 시행착오
- 문제가 해결됐는지 모름
- 그냥 "이번에는 에러 안 남"

### 7. Deployment Roulette

- 테스트 없이 배포
- AI가 "괜찮다고 했으니까"
- 프로덕션에서 터짐

## Red Flags 체크리스트

### 당신이 Vibe Coding 함정에 빠진 징후

- [ ] "내가 이걸 왜 썼지?"가 자주 나옴
- [ ] 디버깅할 때 AI에게 내 코드 설명 요청
- [ ] 프로덕션에서 예상 못한 버그가 계속
- [ ] 테스트를 AI가 쓰고 통과 여부만 확인
- [ ] 같은 기능을 여러 곳에서 다르게 구현
- [ ] PR 설명을 AI가 씀 (근거 없이)
- [ ] 에러 메시지를 이해 못하고 AI에 바로 붙여넣기

## 왜 Solo Developer에게 특히 위험한가

### 동료 리뷰 부재
- 다른 눈으로 볼 수 없음
- AI가 놓친 것을 사람이 놓침 → 아무도 못 잡음

### 도메인 무지
- AI가 도메인을 몰라서 생긴 문제를 개발자도 모름
- 이중 맹목

### 시간 압박
- "빨리 출시" 유혹
- 품질 검증 생략
- [[concepts/cognitive-debt|Cognitive Debt]] 동시 축적

## 안전한 Vibe Coding 가이드라인

### ✅ 적합한 영역
- MVP, 프로토타입
- 해커톤
- 내부 도구
- 학습/실험
- 개인 프로젝트 (낮은 위험)

### ❌ 부적합한 영역
- 프로덕션 시스템
- 금융, 의료, 법률
- 사용자 데이터 처리
- 보안 민감 시스템
- 분산 시스템

### 필수 가드레일
1. **의무 코드 리뷰** — 모든 AI 코드를 사람이 읽음
2. **자동화 테스트** — 테스트 없이 머지 금지
3. **보안 스캔** — SAST/DAST 도구
4. **Spec-driven tools** — 명세 기반 검증
5. **의도적 아키텍처** — 큰 그림은 사람이 설계
6. **Incremental commits** — 작은 단위로 이해하며 진행

## Vibe Coding → [[concepts/agentic-engineering|Agentic Engineering]] 전환

Karpathy가 명명한 성숙 단계:
- **Vibe**: 결과만 수용
- **Agentic**: 구조적 감독 + AI 위임
- Harness Engineering으로 가드레일 구축

## 참고 소스

- [Vibe Coding 안티패턴 리서치](raw/notes/2026-04-09-vibe-coding-antipatterns.md)
- [Vibe Coding Catastrophic Explosions (The New Stack)](https://thenewstack.io/vibe-coding-could-cause-catastrophic-explosions-in-2026/)
- [Uncomfortable Truth about Vibe Coding (Red Hat)](https://developers.redhat.com/articles/2026/02/17/uncomfortable-truth-about-vibe-coding)
