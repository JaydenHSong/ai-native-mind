---
title: "Microsoft, Agensh 오픈소스 — 중앙 오케스트레이터 없이 1,024개 에이전트 조율"
source_url: "https://www.marktechpost.com/2026/10/24/microsoft-agensh-multi-agent-harness-1024-agents/"
source_type: "news"
authors: ["Microsoft Research", "MarkTechPost", "CryptoNwz", "AIDailyPost"]
published: 2026-10-24
fetched: 2026-10-25
tags: [microsoft, agensh, multi-agent, harness, orchestrator, program-bench, open-source]
status: raw
---

# Microsoft, Agensh 오픈소스 — 중앙 오케스트레이터 없이 1,024개 에이전트 조율

> Microsoft Research가 10-24 다중 에이전트 하네스 Agensh의 코드를 오픈소스 공개. 리드 에이전트 없이 워커들이 스스로 하위 태스크를 가져가고 공유 Git 저장소에 병합하는 구조로, ProgramBench에서 1개부터 1,024개 에이전트까지 확장 실험. 128개 에이전트에서 5개 과제 평균 19.31%→28.78%, GPT-6.1-sol + 32개 에이전트에서 pandoc 79.59%. 원논문은 2026-09-22. (MarkTechPost·CryptoNwz·AIDailyPost·프로젝트 사이트 교차)

## 내용

- **구조**: 중앙 오케스트레이터 제거. 모든 워커가 동일한 5단계 루프(맥락 수집→하위 태스크 선점→행동·공유→검증→병합)를 비동기로 수행. 조율은 공유 워크스페이스(제안/진행/완료 상태)·메시지 인터페이스·공유 컨텍스트 보드라는 인프라가 담당.
- **규모 실험**: 1→1,024개 에이전트, 최대 16노드×64개. Linux + Docker Compose, 단일 노드 기본 8워커. 워커당 입력 272,000토큰·출력 128,000토큰 상한, 메모리 64GiB 상한.
- **벤치**: ProgramBench의 가장 어려운 5개 과제(FFmpeg·gromacs·pandoc·PHP-src·ctags를 처음부터 재구축), 과제당 6시간·오프라인 예산. 1→128개에서 평균 19.31%→28.78%(+49% 상대). pandoc은 1개 33.89%→1,024개 55.06%(GPT-5.6-sol), GPT-6.1-sol + 32개에서 79.59%.
- **속도**: pandoc 30% 통과 도달 시간 — 128개 30분 vs 32개 60분 vs 8개 90분. 규모가 커질수록 같은 수준에 더 빨리 도달.
- **창발**: 규모가 커지며 협력 형태가 동료 조율→다중 워커 통합→표준 워크플로우→역할 전문화 4단계로 확장됐다는 관찰.
- **조건**: MIT 라이선스, 모델 무관(Claude Code·Copilot 어댑터 언급, GPT-5.6-sol·GPT-6.1-sol로 테스트). 토큰 비용은 미공개 — 재현 시 최대 미지수.
- **주의**: 논문(9-22)과 코드 공개(10-24)를 구분할 것. 1,024개 수치는 스케일 실험의 상한이지 권장 운영 규모가 아님.

## 맥락

- [[concepts/ai-orchestration]] — 여러 AI 에이전트 조율 6대 패턴, 오케스트레이터 중심 설계의 대안으로 Agensh의 인프라 조율 대비
- [[concepts/harness-engineering]] — Agent = Model + Harness, 하네스를 인프라로 설계하는 3세대 관점
- [[patterns/agent-planning-to-implementation]] — 계획에서 구현까지의 에이전트 실행 패턴
