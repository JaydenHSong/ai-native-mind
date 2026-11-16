---
title: "Alibaba Qwen4-Max 정식 출시 — 2.4조 MoE 플래그십, DeepSWE 75.7점 주장 (11-16)"
source_url: "https://cellcog.ai/blog/qwen-4-release-date/"
source_type: "news"
authors: ["CellCog"]
published: 2026-11-16
fetched: 2026-11-16
tags: [qwen4-max, alibaba, flagship-model, moe, coding-benchmark, api-pricing]
status: raw
---

# Alibaba Qwen4-Max 정식 출시 — 2.4조 MoE 플래그십, DeepSWE 75.7점 주장 (11-16)

> Alibaba의 Qwen 팀이 11-16 Qwen4 패밀리 플래그십 Qwen4-Max를 퍼블릭 API로 정식 출시했다. 11-11 Token Plan 전용 프리뷰에서 닷새 만의 전환이다. 스파스 MoE 총 2.4조 파라미터(토큰당 활성 71B), 네이티브 비전, 1M 토큰 컨텍스트, 가격은 전작 대비 약 25% 인하됐다. 코딩 벤치에서 Claude Opus 5.5를 앞섰다는 주장은 Alibaba 자체 수치라 독립 검증이 필요하다.

## 내용

- **출시**: 11-11 Token Plan 전용 프리뷰(`qwen4-max-preview`, 11-25 종료 예정) 후 11-16 퍼블릭 API 정식 출시. 모델 ID `qwen4-max`, QwenCloud·Qwen Studio·QwenWork·Qoder에서 이용 가능. OpenAI·Anthropic 프로토콜 호환 API 제공.
- **구조**: 스파스 MoE, 총 2.4조 파라미터·토큰당 약 71B 활성화, 네이티브 비전(이미지·비디오 입력), 1M 토큰 컨텍스트. 328B 규모의 N-gram 임베딩 파라미터 추가 보도도 있다.
- **가격**: 입력 $1.50 / 출력 $4.50 per 1M 토큰, 캐시 입력 $0.075. 전작 Qwen3.8-Max($2/$6) 대비 약 25% 인하. Alibaba 자체 평가 기준 작업당 평균 비용 $1.67(전작 $4.43 대비 약 62% 감소), 고추론 모드 토큰 사용량 약 35~50% 감소 주장.
- **벤치**: DeepSWE v1.1 코딩 벤치 75.7점 — Claude Opus 5.5(74.2), Kimi K3.1(75.5)을 앞섰다고 주장. Artificial Analysis Intelligence Index 43점(전작 대비 +9, Kimi K3.1 Pro 46점보다 3점 낮음). Work360 52.69점(전작 47.74). 모두 Alibaba 자체 평가·발표 수치로, Reuters는 독립 검증 데이터가 부족하다고 지적했다.
- **공개 여부**: 플래그십 자체는 API 전용·가중치 비공개 유지. 소형 Qwen4 모델만 향후 오픈웨이트 예정이며 날짜·규모·라이선스는 미정.
- **주의**: 파라미터 수 2.4조는 Qwen 공식 발표·보도 기준이며, QwenCloud 문서에는 파라미터 수가 기재돼 있지 않다.

## 맥락

- [[concepts/moonshot-kimi-k31-pro]] — Kimi K3.1 Pro와 코딩 벤치·가격 경쟁, 중국 플래그십 모델의 맞대결 (2026-10-24)
- [[concepts/deepseek-v41-flash-1017]] — 중국 저가·오픈 모델 축, Qwen4-Max의 가격 인하와 같은 흐름 (2026-10-18)
- [[concepts/gemini-4-hydrogen]] — 실행형 코딩 에이전트 모델, 코딩 벤치가 곧 에이전트 성능 지표가 되는 시대 (2026-11-12)
- [[concepts/claude-fable-5-2-mythos-5-2]] — 비교 대상 Claude Opus 5.5가 속한 Claude 5.2 세대 (2026-11-09)
