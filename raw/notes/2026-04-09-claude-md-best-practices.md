# CLAUDE.md 잘 쓰는 법 리서치 (2026-04-09)

## 출처
- https://www.humanlayer.dev/blog/writing-a-good-claude-md
- https://www.builder.io/blog/claude-md-guide
- https://uxplanet.org/claude-md-best-practices-1ef4f861ce7c
- https://code.claude.com/docs/en/best-practices
- https://www.eesel.ai/blog/claude-code-best-practices
- https://ranthebuilder.cloud/blog/claude-code-best-practices-lessons-from-real-projects/

## 핵심 원칙: 짧고 명확하게
- 200줄 미만 유지 — 너무 길면 Claude가 절반을 무시
- 보편적으로 적용되는 규칙만 포함
- 정기적으로 리뷰 (2-3주마다)

## 필수 포함 섹션 (10가지)
1. 프로젝트 컨텍스트 — 한 줄 설명 ("Next.js e-commerce with Stripe")
2. 기술 스택 — 프레임워크, 언어, 주요 라이브러리
3. 프로젝트 구조 — 코드베이스 맵 (특히 모노레포)
4. 코딩 컨벤션 — 네이밍, 포매팅, 패턴
5. 빌드/테스트/배포 명령어
6. 환경 변수 가이드
7. 금지 사항 — 하면 안 되는 것 명시
8. 선호 패턴 — 이런 식으로 써줘
9. 의존성 규칙 — 어떤 라이브러리 쓰고 안 쓰는지
10. 참고 문서 링크

## 빠른 시작
- `/init` 명령으로 자동 생성 가능
- 프로젝트 구조와 기술 스택 기반으로 초안 생성

## 계층 구조
- `~/.claude/CLAUDE.md` — 전역 (모든 프로젝트)
- `프로젝트/CLAUDE.md` — 프로젝트별
- `프로젝트/서브폴더/CLAUDE.md` — 서브폴더별
- 하위가 상위를 오버라이드
