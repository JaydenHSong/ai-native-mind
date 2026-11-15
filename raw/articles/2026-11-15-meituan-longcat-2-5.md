---
title: "Meituan LongCat-2.5 가중치 공개 — Nvidia GPU 없이 만든 1.6조 파라미터 에이전트 모델 (11-15)"
source_url: "https://the-decoder.com/meituan-releases-a-1-6-trillion-parameter-agent-model-that-never-touched-an-nvidia-gpu/"
source_type: "news"
authors: ["The Decoder"]
published: 2026-11-15
fetched: 2026-11-15
tags: [meituan, longcat, open-weights, huawei, agents, china]
status: raw
---

# Meituan LongCat-2.5 가중치 공개 — Nvidia GPU 없이 만든 1.6조 파라미터 에이전트 모델 (11-15)

> Meituan의 LongCat 팀이 1.6조 파라미터 에이전트 모델 LongCat-2.5의 가중치를 MIT 라이선스로 공개했다. 11-02 공개 후 11-10 가중치 배포. 회사 설명으로는 중국 하드웨어만으로 학습했고, 자가 호스팅 가이드는 Huawei Ascend 가속기를 겨냥한다. Nvidia GPU 안내는 없다.

## 내용

- **모델**: 네이티브 멀티모달 MoE(전문가 혼합) 모델. 전체 1.6조 파라미터 중 토큰당 약 480억 개만 활성화된다. 전작 LongCat-2.0에 이미지 이해를 더했고, 긴 다단계 코딩·사무 작업을 자율적으로 처리하는 에이전트용으로 강화 학습했다.
- **공개**: Hugging Face에서 가중치를 MIT 라이선스로 배포한다(상업 이용·수정·재배포 가능, 상표·특허 권한은 제외). BF16 체크포인트 약 3.56TB, 4비트 압축판 약 1.34TB. 채팅은 longcat.ai에서 체험할 수 있다.
- **성능 주장**: Meituan 자체 측정 기준 Terminal Bench v2.1 88.4점, Claude Opus 5의 89.1점에 근접한다. 단 회사 스스로 "indicative only"(참고용)라고 밝혔고, 독립 기관의 검증 결과는 아직 없다.
- **하드웨어**: 전문가 가중치·활성화를 4비트 정밀도로 양자화하는데, 중국 칩이 이를 네이티브로 처리한다고 설명한다. 자가 호스팅 가이드의 샘플 구성은 Huawei Ascend Atlas A2 가속기 194개(이미지 처리 2개·프롬프트 섭취 64개·응답 생성 128개)다. Nvidia GPU 안내는 없다. 전작 LongCat-2.0은 5만 개 이상의 중국 AI 칩 클러스터에서 학습했다고 회사가 밝혔다.
- **가격**: 출시 한정 프로모션 API 가격은 100만 토큰당 입력 약 €0.27·출력 약 €1.07 수준이다.
- **주의**: "Nvidia 없이 학습했다"는 회사 주장이고, 회사 자체 게시물은 학습 칩의 벤더를 명시하지 않는다("국내"·"중국산 가속기" 표현). Huawei라는 이름은 배포 가이드에서 나온다. 가중치는 공개됐지만 학습 데이터·전체 파이프라인은 공개되지 않았다.

## 맥락

- [[concepts/blackwell-fingerprints-chinese-models]] — 같은 날 Unemployment Labs 보고서, 중국 4개 랩의 최신 모델이 Blackwell 지문을 보인다는 정반대 방향 (2026-11-12)
- [[concepts/moonshot-kimi-k31-pro]] — Kimi K3.1 Pro, 중국 오픈웨이트 에이전트 모델의 또 다른 축 (2026-10-24)
- [[concepts/minimax-m3-1-flash]] — MiniMax M3.1 Flash, 태스크당 $0.22의 저가 에이전트 모델 (2026-10-20)