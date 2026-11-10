---
title: "Anthropic Frontier Red Team: 소형 오픈 모델의 IoT 자기복제 'AI 웜' 수개월 내 가능 경고"
source_url: "https://cointelegraph.com/news/anthropic-ai-worms-autonomously-spread-devices-virus"
source_type: "research"
authors: ["Anthropic", "Cointelegraph", "IBTimes SG"]
published: 2026-10-12
fetched: 2026-10-14
tags: [anthropic, ai-safety, self-replication, iot, red-team, open-models]
status: raw
---

# Anthropic Frontier Red Team: 소형 오픈 모델의 IoT 자기복제 'AI 웜' 수개월 내 가능 경고

> Anthropic Frontier Red Team 연구 포스트 (2026-10-12, William Zhou & Daniel Freeman). 언론 보도 10/13 (Cointelegraph·IBTimes SG).

## 내용

- 핵심 주장: 소형 오픈 모델이 IoT 기기 간 자기복제("AI 웜")에 "수개월 내(months away)" 도달 가능.
- 현재 상태: ≤30B 파라미터 모델이 개별 복제 단계(스캔·홉·페이로드 전달·활성화)를 이미 수행 가능.
- 종단간 복제: GLM-5.2 (Z.ai, 베이징)가 8개 에뮬레이트 Android 노드에서 5회 중 4회 완전 복제 성공 — Llama3.1-8B를 전파.
- 저가 하드웨어 실험: $55짜리 무명 Android TV 박스 15대에서 Google Gemma (4–26B 변형) ~0.39 tokens/sec 구동. 9B 모델은 NVIDIA Jetson Nano·Apple Silicon Mac 포함 9종 중 8종 하드웨어에서 추론 동작.
- 위협 프레이밍: 중앙 차단점 없음, 느린 확산 (배가 시간 수일), Kimwolf급 봇넷 ≈ 40 H100s, 현재 개선 속도면 2026년 말 임계 도달 예상.
- 명시적 한계: 저자들은 공격이 진행 중이라고 주장하지 않으며, Anthropic 자체 모델이 자기복제 가능하다고도 주장하지 않음.

## 맥락

- [[concepts/ai-worms-self-replication]] — 신규 위키 페이지: 연구 내용·실험 수치·위협 모델 정리.
- [[patterns/agent-safety-runtime]] — 실행 시점 안전 패턴에 IoT 자기복제 벡터 추가. Nemotron 3.5 Bolt 같은 24GB급 로컬 에이전트 모델의 확산이 위협 표면을 넓힘.
- 주의: 임계 도달 시점은 "현재 개선 속도" 가정 하의 추정치. 연구 저자 스스로 진행 중인 공격 아님을 명시.
