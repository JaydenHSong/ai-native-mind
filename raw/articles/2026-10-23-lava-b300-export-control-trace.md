---
title: "Lava — 수출통제 대상 B300 32개를 중국텔레콤 연관 엔드포인트에서 추적"
source_url: "https://techdefused.com/a/zBu2mdf/security-firm-finds-banned-nvidia-chips-on-china-telecom-network"
source_type: "news"
authors: ["The Information", "TechDefused", "CryptoBriefing", "AI Weekly", "TokenPost"]
published: 2026-10-22
fetched: 2026-10-23
tags: [lava, b300, export-control, dcgm-exporter, cve-2026-47483, china, gpu-smuggling, telemetry-exposure]
status: raw
---

# Lava — 수출통제 대상 B300 32개를 중국텔레콤 연관 엔드포인트에서 추적

> 이스라엘 보안업체 Lava가 10-22 미국 수출통제 대상인 NVIDIA Blackwell Ultra B300 32개가 인터넷에 노출된 인증 없는 DCGM Exporter 모니터링 엔드포인트를 통해, 중국텔레콤에 지리 배정된 IP와 연관되어 가시적이었다고 발표. Lava 자체도 "위반을 입증하지 않는다"고 단서 (IP 지리위치 ≠ 물리적 위치). 10-09 광범위 조사에서는 전 세계 ~2,100개 노출 호스트·12,000+ GPU·300개 조직, 같은 도구에서 CVE-2026-47483(CVSS 8.2, 원격 모니터링 충돌 가능). NVIDIA는 "무시할 수준의 전용"이라 축소. (The Information 원보도·TechDefused·CryptoBriefing·AI Weekly·TokenPost 교차)

## 내용

- **발견**: Blackwell Ultra B300 32대 — 중국 수출 금지 품목. 인증 없는 DCGM Exporter 엔드포인트 경유, 중국텔레콤 연관 IP로 지리 배정.
- **단서 (Lava 자체)**: IP 지리위치는 물리적 위치와 다를 수 있음 (프록시/VPN 가능). 발견이 수출통제 위반을 입증하지는 않음. 보고서는 해당 칩을 중국텔레콤 "네트워크"에 특정 연결하지 않음.
- **광범위 노출**: 10-09 조사 — ~2,100개 노출 DCGM Exporter 호스트, 12,000+ GPU (H100/H200/B300/RTX 4090/5090, $100M+ 규모 하드웨어 추정), ~300개 조직.
- **취약점**: CVE-2026-47483, CVSS 8.2 — 같은 모니터링 도구의 고위험 결함, 인증 없이 원격에서 GPU 모니터링 충돌 가능.
- **맥락**: 2025년 중국으로 3개월간 ~$10B 규모 NVIDIA AI 칩 밀수 보도, 2026-08 대만에서 B300 불법 수출로 9명 기소, Supermicro는 Flying Tiget Tech 연루 밀수 조사 후 직원 해고.
- **NVIDIA 반응**: "최근 법원 사례에서 0.5% 미만의 무시할 수준" — "밀수는 무의미한 수준(nonfactor)".

## 맥락

- [[concepts/china-ai-export-controls]] — 중국 AI 수출통제 초안 (2026-10-17) — 통제의 설계와 집행 현실의 괴리.
- [[concepts/nvidia-kazakhstan-sovereign-ai]] — NVIDIA × 카자흐스탄 소버린 AI (2026-10-23) — 수출 허가(카자흐스탄)와 유출 의혹(중국)의 같은 날 대비.
- [[concepts/dhs-deepseek-federal-register-ban]] — DHS 딥시크 연방 금지 공식화 (2026-10-21) — 미국 AI 공급망 차단 정책의 한 축.
- [[concepts/agent-supply-chain-security]] — 에이전트 공급망 보안 — 보안되지 않은 원격측정이 노출하는 인프라 공급망.
