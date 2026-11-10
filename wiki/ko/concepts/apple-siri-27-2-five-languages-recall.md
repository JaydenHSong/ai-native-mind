---
title: "Apple 27.2 — Siri AI, 5개 언어 추가와 대화 회상"
category: concepts
tags: [apple, siri-ai, ios-27-2, macos-27-2, memory, languages]
created: 2026-10-27
updated: 2026-10-27
sources:
  - "raw/articles/2026-10-27-apple-siri-27-2-five-languages-recall.md"
related:
  - "[[concepts/apple-intelligence-china-launch]]"
  - "[[tools/gemini-agent-work]]"
  - "[[concepts/ai-memory-systems]]"
status: draft
confidence: high
---

# Apple 27.2 — Siri AI, 5개 언어 추가와 대화 회상

## 쉽게 읽기

**비유**: 지금까지 Siri는 매번 처음 만나는 점원 같았다 — 물어볼 때마다 다시 설명해야 했다. 27.2부터는 지난 대화를 기억하는 단골 점원이 된다. 대신 기억하려면 내 메시지 사진·캘린더 참석자·음성메시지까지 들여다봐야 한다. 그래서 Apple은 "이 앱은 보지 마라"는 Excluded Apps 차단 스위치도 함께 내놨다.

| 용어 | 풀이 |
|------|------|
| **대화 회상** | 이전 대화 맥락을 유지해 과거 내용을 다시 묻고 이어가는 기능 |
| **개인 맥락** | 답변에 활용하는 사용자의 메시지·캘린더·음성메시지 등 개인 데이터 |
| **Excluded Apps** | Siri·검색·제안의 접근을 앱 단위로 차단하는 설정 |
| **SynthID** | Google의 AI 생성 이미지 식별 워터마크 기술 |

## 한줄 정의

2026-10-26 Apple 27.2 일괄 업데이트 — Siri AI에 대화 회상·개인 맥락 확대·5개 언어 추가, iPhone 16 이후 및 iPhone 15 Pro/Max 대상.

## 핵심 내용

- **대화 회상**: 이전 대화의 유용한 맥락을 유지해 지난주 추천 식당처럼 과거 내용을 다시 물을 수 있다. 일회성 질의응답에서 연속 대화형 비서로 성격이 바뀐다.
- **개인 맥락 확대**: Messages 첨부 사진, Calendar 초대 참석자, 음성메시지, Safari 기록·읽기 목록 개선 결과까지 답변 근거로 활용. 반대 방향 통제 장치로 Excluded Apps 설정이 신설돼 특정 앱 접근을 끌 수 있다.
- **기타**: 응답 중 일부만 선택해 복사하는 세분 텍스트 선택, watchOS 27.2의 더 빠른 응답, Messages 맥락 제안, Photos SynthID 워터마크, Apple TV 프로필, iPhone Duo의 Apple Pencil 지원과 Edge Light.
- **언어·지역**: 영어 외 프랑스어·일본어·한국어·포르투갈어·스페인어 5개 추가. Siri AI는 EU와 중국 본토에서는 여전히 제공되지 않는다.
- **기기 범위**: Siri AI 기능은 iPhone 16 전 모델과 iPhone 15 Pro·Pro Max에서 제공. 그 외 기기는 비-Siri 변경사항만 받는다. 예고됐던 Health 앱 리디자인은 최종 빌드에서 제외돼 후속 릴리스로 연기됐다.

## 왜 중요한가 (1인 개발자 관점)

1. **기억이 제품이다**: 비서의 경쟁력이 모델 성능이 아니라 "얼마나 나를 기억하는가"로 이동 — 메모리 설계가 곧 제품 설계다.
2. **개인정보와 통제의 쌍**: 맥락 확대와 Excluded Apps가 같은 업데이트에 들어왔다 — 접근을 넓힐수록 차단 스위치도 함께 팔아야 한다는 Apple식 해법.
3. **한국어 사용자에게 직접적**: 5개 신규 언어에 한국어가 포함됐다 — 한국어로 쓰는 사용자에게 이번 업데이트는 추상적 뉴스가 아니라 당장 체감되는 변화다.

## 한계 (명시)

- Siri AI는 EU·중국 본토 미제공이며, 기기 제한으로 구형 iPhone은 기능 대상이 아니다.
- 대화 회상의 보존 기간·삭제 방식 등 세부 정책은 릴리스 노트에서 명확히 공개되지 않았다.
- Health 리디자인 연기처럼, 예고 기능이 최종 빌드에서 빠질 수 있다.
