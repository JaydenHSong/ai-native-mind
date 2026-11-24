---
title: "Anthropic, Claude Ship 출시 — 코드 리뷰·수정·승인을 에이전트가 이어받다 (11-23)"
source_url: "https://www.reuters.com/business/anthropic-launches-claude-ship-help-developers-ship-code-faster-2026-11-23/"
source_type: "news"
authors: ["Reuters"]
published: 2026-11-23
fetched: 2026-11-24
tags: [anthropic, claude-ship, claude-code, code-review, agents, github]
status: raw
---

# Anthropic, Claude Ship 출시 — 코드 리뷰·수정·승인을 에이전트가 이어받다 (11-23)

> Anthropic이 11월 23일 Claude Ship을 출시했다. 이미 일반 제공 중인 Code Review에 베타 에이전트 PR Steward와 Claude Approvals를 묶어, 풀 리퀘스트(PR)의 리뷰·수정·승인까지 에이전트가 이어받는 제품이다. 로이터·TechCrunch가 같은 날 보도했다.

## 내용

- **구성 3가지**: Code Review(일반 제공, 이미 출시됨) + PR Steward(베타) + Claude Approvals(베타). Claude Team·Enterprise 요금제, GitHub 저장소 대상.
- **Code Review**: PR을 코드베이스와 대조해 여러 관점으로 검토하고, 발견 사항을 적대적으로 검증·분류해 PR에 게시. 저장소마다 Quick·Standard·Deep 리뷰 수준 선택 가능.
- **PR Steward**: 실패한 CI 체크, 병합 충돌, 리뷰 피드백(Code Review·다른 도구·동료)을 해결해 PR을 '초록 상태'로 유지. 매 푸시마다 무엇을 바꿨고 어떻게 되돌리는지 설명을 남김. **승인·병합은 하지 않음** — 수정과 결정을 분리한 설계.
- **Claude Approvals**: 팀이 저장소 파일로 작성한 승인 정책(자연어)을 적용해, 정책이 허용한 일상적 변경은 스스로 승인하고 위험한 변경은 인간에게 넘김. Anthropic은 이를 "더 똑똑한 CODEOWNERS 파일"로 설명. 정책 파일이 기본 브랜치에 있어야 시작되고, 관리자가 끌 수 있음.
- **observe-only 모드**: Anthropic은 대부분 고객에게 먼저 observe-only 모드로 켜서 "승인했을 것"을 확인한 뒤, 신뢰가 쌓이면 브랜치 보호 규칙에 Claude Approvals의 초록불을 요구하도록 권고.
- **개인 개발자용 /ship 명령**: Claude Code에서 `/ship`을 치면 변경을 푸시하고 PR을 열고 리뷰·피드백·실패 체크까지 처리. 11월 23일부터 Claude Code와 데스크톱 앱에 순차 적용.
- **요금**: 토큰 기준 과금. observe-only 정책도 분류기·Code Review를 호출하면 과금 발생. 적격 Enterprise 고객은 최소 $10,000의 Claude Ship 프로모션 크레딧 청구 가능(2027년 1월 15일까지).
- **Anthropic 자사 데이터**: Claude Code 팀에서 Claude가 대부분의 코드를 쓰는 가운데, 병합된 PR이 2026년 6월→9월 사이 2배 이상 늘었고 되돌린(reverted) PR 비중은 40% 이상 감소. 자사 주장으로 독립 검증 없음.
- **면책**: Anthropic은 "Claude Ship은 AI를 사용하며 버그·보안 취약점·기타 문제를 놓칠 수 있다"고 명시.

## 맥락

- AI가 코드 '작성'을 넘어 '병합 결정'까지 맡는 단계로 이동 — 승인 권한을 정책 파일이라는 버전 관리 가능한 형태로 인간이 쥐는 거버넌스 패턴
- 위키의 Claude Code·에이전트 하네스·코드 리뷰 자동화 주제와 직결
