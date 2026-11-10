---
title: "WIRED, 400개 위장 AI 앱의 딥페이크 네트워크 폭로 — Apple, 19개 앱 삭제 (AppleInsider, 11-02)"
source_url: "https://appleinsider.com/articles/26/11/02/hundreds-of-ai-apps-were-part-of-a-network-hiding-sexually-abusive-deepfake-tools"
source_type: "news"
authors: ["AppleInsider"]
published: 2026-11-02
fetched: 2026-11-03
tags: [deepfake, app-store, wired, ai-forensics, content-moderation]
status: raw
---

# WIRED, 400개 위장 AI 앱의 딥페이크 네트워크 폭로 — Apple, 19개 앱 삭제 (AppleInsider, 11-02)

> WIRED의 11-02 조사에 따르면 400개가 넘는 앱·웹 도메인 네트워크가 반려동물 사진·어학·운동 코치 같은 평범한 AI 도구로 위장해 심사를 통과한 뒤, 서버 스위치로 성적·폭력적 딥페이크 생성 도구를 숨겨 제공했다. Apple은 WIRED의 제보 뒤 19개 앱을 삭제했다. (WIRED·AI Forensics·AppleInsider·9to5Mac 기반)

## 내용

- **네트워크 규모**: 400개 이상 앱과 약 500개 연결 도메인. 유럽 비영리 AI Forensics와 Infoblox의 연구가 기반이다. 앱들은 2025년 말부터 등장했고, 전성기에는 주당 약 30개 앱·웹사이트 쌍이 새로 등록됐다. 2026-09에는 Google Play에서 관련 앱 27개가 35만 회 이상 다운로드된 것으로 파악됐다.
- **위장 수법**: 표면은 반려동물 사진 합성(Viefur)·어학 교사·AI 운동 코치. 설치 후 앱이 서버에 접속하면 서버가 보여줄 버전을 결정했다. 메타 광고를 타고 들어오거나 위치·언어·기기 식별자 등 조건에 따라 숨겨진 화면이 열렸다. 숨겨진 템플릿은 실존 인물의 사진을 성적 이미지·영상으로 바꾸는 것과 성폭력·흉기 위협 묘사를 포함했다. 유료 크레딧(Viefur는 130코인 $4)으로 결제하는 구조였다.
- **플랫폼 대응**: Apple은 WIRED 제보 뒤 Viefur 포함 19개 앱을 삭제했다. 대변인 Adam Dema는 심사 당시에는 규칙을 지켰고, 이후 개발자가 웹사이트 콘텐츠를 교체했다고 설명했다. Meta는 관련 광고 계정 11,600개·페이지 15,000개에 조치하고 209개 앱의 광고를 차단했다고 밝혔다. 연구자들은 운영 주체로 홍콩 등록 KeLing Technology Limited를 지목했고, 회사는 답변하지 않았다.
- **심사 구조의 한계**: 제출 시점의 앱만 심사하는 방식으로는 심사 이후 서버에서 바뀌는 콘텐츠를 막을 수 없다는 점이 확인됐다. Apple은 10-16 앱 심사 가이드라인을 개정해 AI 생성 비동의 성적 이미지 방지(1.2)와 심사 시 기능 은폐 금지(2.5.19)를 명문화한 바 있다. 다만 이 개정이 이번 네트워크에 대한 대응인지는 확인되지 않았다.
- **미확인 부분**: Apple은 삭제된 앱 전체 목록과 다운로드 수를 공개하지 않았다. Google의 삭제 규모·입장도 확인된 바 없다. EU의 누디파이어 앱 금지 조치는 12-02 발효 예정으로 별개 일정이다.

## 맥락

- [[concepts/ai-text-watermarking]] — OpenAI textGrain, EU AI Act 대응 텍스트 워터마킹
- [[concepts/bellingcat-ai-super-pacs-midterms]] — 같은 날의 플랫폼 거버넌스·규제 논쟁
