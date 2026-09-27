---
title: "Sarvam AI releases Saaras V4: STT for all 22 Indian languages plus global English"
source_url: "https://bytecorenews.com/sarvam-ai-releases-saaras-v4-a-speech-to-text-model-for-all-22-indian-languages-and-global-english/"
source_type: "vendor-announcement"
authors: ["Sarvam AI"]
published: 2026-09-26
fetched: 2026-09-27
tags: [stt, speech-to-text, indic-languages, voice-agent]
status: raw
---

# Sarvam AI releases Saaras V4: STT for all 22 Indian languages + global English

> Sarvam AI의 Saaras V4 — 22개 인도 공용어 전체 + 글로벌 영어 STT. 벤더 발표 기준 7개 영어 데이터셋 평균 최저 WER, 노이즈 환경에서 Deepgram Nova-3·GPT-4o Transcribe 대비 절반 이하 오류. 단일 모델 5개 출력 모드(transcribe/verbatim/codemix/translit/translate). 독립 재현은 아직 없음.

## 메타

- **Title**: Sarvam AI Releases Saaras v4, a Speech-to-Text Model for All 22 Indian Languages and Global English
- **Source**: ByteCore News (Sarvam AI 발표 인용)
- **Link**: <https://bytecorenews.com/sarvam-ai-releases-saaras-v4-a-speech-to-text-model-for-all-22-indian-languages-and-global-english/>
- **Published**: 2026-09-26

## 한 줄 요약

**"음성은 에이전트의 다음 입력 채널이다 — 22개 언어를 한 모델로 먹는 STT가 그 문을 연다."**

## 핵심 내용

1. **제품**: Saaras V4 — 인도 22개 공용어 전체 + 글로벌 영어를 커버하는 STT 모델.
2. **벤더 수치**: 7개 영어 데이터셋 평균 최저 WER (Open ASR Leaderboard 세트 포함). Indic 결과는 Vistaar 벤치 (WER + LLM-WER).
3. **노이즈**: Kathbath Noisy에서 Deepgram Nova-3 / GPT-4o Transcribe 대비 절반 이하 오류율.
4. **언어 식별**: 오류율 2.9% (상위 10개 Indic) / 5.22% (22개 전체).
5. **5개 모드**: 단일 모델에서 transcribe / verbatim / codemix / translit / translate — 코드믹싱(codemix) 지원이 인도 시장 특화 포인트.
6. **출처 주의**: 전부 벤더 발표 수치, 독립 재현 없음 — confidence **low**.

## 시사점

- 9/25 `[[patterns/agentic-commerce]]`의 Gemini 음성 채널(voice commerce) 스레드와 연결 — 음성 입력 품질이 에이전트 상거래의 병목.
- codemix/translit 모드는 "영어 중심 에이전트"의 다언어 확장 패턴 — 1인 개발자의 글로벌 타겟팅 관점에서 메모.
- STT 자체는 위키의 핵심 축이 아니므로 독립 페이지보다는 agentic-commerce 보강 소재로 ingest.
