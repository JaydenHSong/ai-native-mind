---
title: "Lava — 수출통제 대상 B300 32개를 중국텔레콤 연관 엔드포인트에서 추적"
category: concepts
tags: [lava, b300, export-control, dcgm-exporter, cve-2026-47483, china, gpu-smuggling, telemetry-exposure]
created: 2026-10-23
updated: 2026-10-23
sources:
  - "raw/articles/2026-10-23-lava-b300-export-control-trace.md"
related:
  - "[[concepts/china-ai-export-controls]]"
  - "[[concepts/nvidia-kazakhstan-sovereign-ai]]"
  - "[[concepts/dhs-deepseek-federal-register-ban]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: high
---

# Lava — 수출통제 대상 B300 32개를 중국텔레콤 연관 엔드포인트에서 추적

## 쉽게 읽기

**비유**: GPU에는 "건강검진 리포트"를 인터넷에 내보내는 기능(DCGM Exporter)이 있다. 어떤 서버들은 이 리포트를 비밀번호 없이 공개해 뒀다. 보안업체 Lava가 그 공개 리포트를 뒤져보니, 중국에 팔면 안 되는 최신 칩 B300 32개가 중국텔레콤 지역 IP에서 "여기 있어요"라고 손들고 있었다. 세관이 아니라 "열린 창문"이 밀수를 잡은 셈.

| 용어 | 풀이 |
|------|------|
| **DCGM Exporter** | NVIDIA GPU 모니터링 지표를 Prometheus 형식으로 노출하는 도구 |
| **수출통제 (export control)** | 미국이 중국 등에 대한 첨단 AI 칩 판매를 금지하는 규제 |
| **IP 지리위치** | IP 주소에 배정된 지역 정보 — 물리적 위치와 다를 수 있음 |
| **CVE-2026-47483** | DCGM Exporter의 고위험 취약점 (CVSS 8.2), 인증 없이 원격 모니터링 충돌 가능 |

## 한줄 정의

2026-10-22 이스라엘 보안업체 Lava 발표 — 인터넷 노출된 인증 없는 DCGM Exporter 엔드포인트를 통해 미국 수출통제 대상 NVIDIA B300 32개가 중국텔레콤 연관 IP에서 가시적. Lava 자체도 "위반 입증 아님" 단서. NVIDIA는 "무시할 수준"이라 축소.

## 핵심 내용

- **발견**: Blackwell Ultra B300 32대 (중국 수출 금지). 인증 없는 DCGM Exporter 경유, 중국텔레콤 연관 IP로 지리 배정.
- **단서**: IP 지리위치 ≠ 물리적 위치 (프록시/VPN 가능). "위반 입증 아님". 보고서는 중국텔레콤 "네트워크"에 특정 연결하지 않음 — 초기 오보 주의.
- **광범위 노출**: 10-09 조사 — ~2,100개 노출 호스트, 12,000+ GPU ($100M+ 추정), ~300개 조직.
- **취약점**: CVE-2026-47483 (CVSS 8.2) — 인증 없이 원격에서 GPU 모니터링 충돌.
- **맥락**: 2025년 3개월간 ~$10B 밀수 보도, 2026-08 대만 B300 불법수출 9명 기소, Supermicro 직원 해고 사건.
- **NVIDIA 반응**: "최근 법원 사례에서 0.5% 미만의 무시할 수준", "밀수는 무의미(nonfactor)".

## 왜 중요한가 (1인 개발자 관점)

1. **컴퓨팅 거버넌스의 현실 점검**: 수출통제는 법전(중국 AI 수출통제 초안)이 아니라 집행면에서 뚫린다. "원격측정 노출이 세관 압수를 대신한다" — 인프라 보안의 새 감시 채널.
2. **DCGM 노출의 실무 교훈**: GPU 모니터링 엔드포인트를 인터넷에 인증 없이 여는 건 자기 칩의 위치를 전 세계에 방송하는 것. 온프렘·클라우드 GPU 운영 시 Exporter 바인딩 주소 점검은 기본.
3. **같은 날의 대비**: 카자흐스탄 45,000대 "합법 허가" vs 중국 32대 "의혹 추적" — 칩 할당의 합법/불법 루트가 같은 날 뉴스가 되는 구조를 한 페이지 쌍으로 기록.

## 한계 (명시)

- Lava 자체 단서: 위반 입증 아님, IP 지리위치의 한계, 중국텔레콤 네트워크 특정 연결 아님 — "32개 B300이 중국에 있다"는 단정은 불가. confidence high는 "발표 사실"에 대한 것.
- The Information 원보도는 유료 — 2차 보도들의 인용에 의존.
- NVIDIA의 "0.5% 미만" 주장은 회사 입장 — 독립 검증 없음.