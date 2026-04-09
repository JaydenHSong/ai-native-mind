# Vibe Coding 안티패턴 리서치 (2026-04-09)

## 출처
- https://thenewstack.io/vibe-coding-could-cause-catastrophic-explosions-in-2026/
- https://developers.redhat.com/articles/2026/02/17/uncomfortable-truth-about-vibe-coding
- https://www.builder.io/m/explainers/vibe-coding-limitations
- https://newly.app/articles/vibe-coding-limitations

## Vibe Coding의 어두운 면

### 충격적 수치
- AI 생성 코드의 **최대 45%**가 보안 취약점 포함
- 2026년 초 vibe-coded 앱에서 **150만 API 키 + 3.5만 이메일** 유출 사건
- 전문가들이 "Challenger 재난"에 비유

## 주요 안티패턴

### 1. The Happy Path Problem (행복 경로 문제)
AI는 "모든 게 잘 될 때"만 잘 처리:
- ✅ 정상 입력 → 잘 작동
- ❌ 엣지 케이스 → 미처리
- ❌ 에러 상태 → 무시
- ❌ 예상 못한 입력 → 크래시

**특히 취약한 영역**:
- Authentication (인증)
- Payment processing (결제)
- Encryption (암호화)
- Input validation

### 2. Security Blindness (보안 무지)
AI 생성 코드의 일반적 취약점:
- 평문 비밀번호 저장
- API 키 하드코딩
- SQL injection 취약성
- XSS 취약성
- CSRF 미처리
- Rate limiting 없음

### 3. Happy Diff, Sad Code
- AI가 보여주는 diff는 깔끔해 보임
- 하지만 전체 시스템에 미치는 영향 파악 안 됨
- 작은 변경이 숨겨진 의존성 깨뜨림

### 4. Architectural Decay (아키텍처 부패)
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
- 기술 부채 + 인지 부채 동시 축적

## Red Flags (경고 신호)

### 당신이 Vibe Coding 함정에 빠진 징후
- [ ] "내가 이걸 왜 썼지?"가 자주 나옴
- [ ] 디버깅할 때 AI에게 내 코드 설명 요청
- [ ] 프로덕션에서 예상 못한 버그가 계속
- [ ] 테스트를 AI가 쓰고 통과 여부만 확인
- [ ] 같은 기능을 여러 곳에서 다르게 구현
- [ ] PR 설명을 AI가 씀 (근거 없이)
- [ ] 에러 메시지를 이해 못하고 AI에 바로 붙여넣기

## 안전한 Vibe Coding (가이드라인)

### 적합한 영역
- ✅ MVP, 프로토타입
- ✅ 해커톤
- ✅ 내부 도구
- ✅ 학습/실험
- ✅ 개인 프로젝트 (낮은 위험)

### 부적합한 영역
- ❌ 프로덕션 시스템
- ❌ 금융, 의료, 법률
- ❌ 사용자 데이터 처리
- ❌ 보안 민감 시스템
- ❌ 분산 시스템 (복잡한 상태)

### 필수 가드레일
1. **의무 코드 리뷰** — 모든 AI 코드를 사람이 읽음
2. **자동화 테스트** — 테스트 없이 머지 금지
3. **보안 스캔** — SAST/DAST 도구
4. **Spec-driven tools** — 명세 기반 검증
5. **의도적 아키텍처** — 큰 그림은 사람이 설계
6. **Incremental commits** — 작은 단위로 이해하며 진행

## Vibe Coding → Agentic Engineering 전환
Karpathy가 명명한 성숙 단계:
- Vibe: 결과만 수용
- Agentic: 구조적 감독 + AI 위임
- Harness Engineering으로 가드레일 구축
