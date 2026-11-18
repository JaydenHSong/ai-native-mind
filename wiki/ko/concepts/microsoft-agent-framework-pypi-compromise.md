---
title: "Microsoft Agent Framework PyPI 침해 — 악성 1.26.1·1.26.2가 클라우드 자격증명 탈취"
category: concepts
tags: [microsoft, agent-framework, pypi, supply-chain, security, credentials]
created: 2026-11-18
updated: 2026-11-18
sources:
  - "raw/articles/2026-11-18-microsoft-agent-framework-pypi-compromise.md"
related:
  - "[[concepts/litellm-pypi-supply-chain-compromise]]"
  - "[[concepts/google-threat-tracker-exploit-agent]]"
  - "[[concepts/anthropic-anvil-automated-red-teaming]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/cairn-norforge-ai-agent-hacking-spree]]"
status: draft
confidence: medium
---

# Microsoft Agent Framework PyPI 침해 — 악성 1.26.1·1.26.2가 클라우드 자격증명 탈취

## 쉽게 읽기

**비유**: 프로그래머들이 코드를 내려받는 창고(PyPI)에, Microsoft의 공식 AI 도구인 척하는 가짜 물건이 올라왔다. 이걸 설치하면, 프로그램을 실행하지 않아도 컴퓨터가 켜질 때마다 몰래 비밀번호·토큰을 훔쳐 밖으로 보냈다. 약 1시간 만에 치워졌지만, 그 시간에 설치한 사람은 비밀번호를 다 바꿔야 한다. 에이전트 도구가 공격의 표적이 된 첫 대형 사례다.

| 용어 | 풀이 |
|------|------|
| **PyPI** | Python 프로그래머들이 라이브러리(코드 부품)를 내려받는 공식 창고 |
| **.pth 파일** | Python이 시작될 때 자동으로 실행되는 설정 파일 — 악용하면 설치만으로 코드가 돈다 |
| **OIDC 토큰** | 클라우드(Azure·GitHub 등)에 "나는 누구"라고 증명하는 일회용 열쇠 |
| **자격증명** | 비밀번호·API 키·토큰 등, 본인임을 증명하는 모든 비밀 정보 |
| **공급망 공격** | 소프트웨어를 만드는·나르는 길목(창고·배포 파이프라인)을 노리는 공격 |

## 한줄 정의

Microsoft의 공식 AI 에이전트 프레임워크 Python 패키지 `agent-framework`의 악성 버전 **1.26.1**(20:35 UTC)과 **1.26.2**(21:08 UTC)가 11월 17일 PyPI에 업로드됐다. 두 버전 모두 Python 시작 훅(`.pth`)으로 Azure·GitHub Actions OIDC 토큰과 각종 자격증명을 수집해 webhook.site로 유출했고, 약 1시간 만인 21:30 UTC경 제거됐다. **에이전트 프레임워크 자체가 공급망 공격의 표적이 된 첫 대형 사례**다.

## 핵심 내용

- **타임라인(UTC)**: 2026-11-17 20:35 악성 1.26.1 업로드, 21:08 1.26.2 업로드, ~21:30 두 버전 모두 PyPI에서 제거. 노출 창은 약 45~55분. Socket Research Team이 최초 분석했고, Aikido·Chainguard·Endor Labs·OX Security·SafeDep·StepSecurity·Wiz 등 8개 보안 업체가 수 시간 내 플래그.
- **동작 방식**: 설치 시 site-packages에 `.pth` 파일(`agent_framework_meta.pth` / `af_runtime_diag.pth`)을 심는다. Python은 인터프리터 시작 때마다 `.pth`의 import 지시문을 실행하므로, `agent-framework`를 import하지 않아도 파이썬이 뜨면 스틸러가 돈다. 수집 후 분리 세션으로 포크해 백그라운드 실행.
- **탈취 대상**: 자격증명 관련 환경변수(TOKEN·SECRET·PASSWORD·KEY·AZURE·AWS·GITHUB·OPENAI·HF_·FOUNDRY 등), Azure CLI·.npmrc·pip.conf·.netrc·.git-credentials·Docker·Hugging Face·.env 등 자격증명 파일, Azure DevOps OIDC 토큰, Azure 관리 ID 토큰·인스턴스 메타데이터, 1.26.2에서는 GitHub Actions OIDC 토큰 추가. 수집 결과는 압축·Base64 인코딩해 webhook.site 엔드포인트로 POST.
- **피해 규모**: 유출 엔드포인트가 무료 티어라 Wiz가 확인한 바로는 최대 50건의 요청만 저장·분석됨. 실제 설치·피해자 수는 미공개. 패키지는 주간 약 4.1만 다운로드(Wiz 기준), 월간 약 19만 다운로드 수준.
- **근원(미확정→업데이트)**: 1.26.1은 wheel만 있고 정상 릴리스와 달리 sdist가 없으며, GitHub에 해당 태그·릴리스가 없음. Wiz의 11월 18일 14:00 UTC 업데이트에 따르면 공격자가 Microsoft ESRP(Engineering System Release Pipeline)용 클라이언트 인증서·개인키를 탈취한 것으로 보이며, 공격 도구 자체가 "Cairn"이라는 오픈소스 AI 침투 테스트 프레임워크임을 드러냈다. Microsoft는 11월 18일 현재 공식 근원 분석(postmortem)을 아직 내놓지 않았다.
- **대응**: 최근 안전 버전은 1.26.0. 해당 시간대(11-17 20:35~21:30 UTC)에 설치·업데이트한 환경은 자격증명 유출을 가정하고 로테이션해야 하며, 환경을 닦기보다 깨끗한 환경에서 복원하는 것이 권고됨. GitHub 저장소 microsoft/agent-framework와 microsoft/onnxruntime이 11월 18일 404를 반환했다는 관찰도 있으나, PyPI 사건과의 연관성은 미확인.
- **전례**: 올해 초 또 다른 Microsoft Python 패키지 durabletask도 PyPI 토큰 탈취로 침해된 바 있음.

## 왜 중요한가 (1인 개발자 관점)

1. **`.pth`는 import 없이 돈다**: 보통 악성 코드는 "그 라이브러리를 쓸 때" 발동한다. 이번 건은 파이썬이 뜨기만 하면 돈다 — 설치한 환경의 모든 파이썬 실행이 노출된다. [[concepts/agent-supply-chain-security]]의 신뢰 모델에서 "설치" 자체가 실행이라는 점을 다시 확인시켜 준다.
2. **에이전트 프레임워크가 표적이 됐다**: [[concepts/litellm-pypi-supply-chain-compromise]](10-22, 같은 .pth 수법)의 다음 장이자, 에이전트 프레임워크 자체가 노려진 첫 대형 사례다. 에이전트는 클라우드 자격증명을 들고 다니므로([[concepts/anthropic-anvil-automated-red-teaming]]의 위협 모델), 탈취 가치가 일반 라이브러리보다 크다.
3. **같은 날의 공격 자동화와 짝을 이룬다**: 전날 [[concepts/google-threat-tracker-exploit-agent]]가 보고한 패치→익스플로잇 자동화와 이번 공급망 침해는 "공격이 자동화되고, 배포 길목이 뚫린다"는 같은 흐름의 두 갈래다.
4. **근원의 아이러니**: 공격 도구 자체가 "Cairn"이라는 오픈소스 AI 침투 테스트 프레임워크라 드러났다 — [[concepts/cairn-norforge-ai-agent-hacking-spree]]의 Cairn 캠페인(10-20)과 같은 도구 계열이다. AI 침투 테스트 도구가 AI 에이전트 프레임워크를 노리는 데 쓰였다.
5. **실무 대응**: 11-17 20:35~21:30 UTC에 `agent-framework`를 설치·업데이트했다면 자격증명 유출을 가정하고 로테이션하고, 환경을 닦지 말고 깨끗한 환경에서 복원할 것. 안전 버전은 1.26.0.

## 한계 (명시)

- 실제 설치·피해자 수는 미공개. 유출 엔드포인트의 무료 티어 때문에 Wiz가 확인한 요청은 최대 50건에 불과 — "피해가 50건"이라는 뜻이 아니다.
- 근원(ESRP 클라이언트 인증서·개인키 탈취)은 Wiz의 11월 18일 업데이트 기준 "보이는" 수준이며, Microsoft의 공식 postmortem은 아직 없다.
- GitHub 저장소 404 관찰과 PyPI 사건의 연관성은 미확인.
- confidence는 medium — Socket 최초 분석 + 8개 보안 업체 교차 플래그 + Wiz 업데이트이나, 피해 규모·근원은 미확정.

## 관련 개념

- [[concepts/litellm-pypi-supply-chain-compromise]] — LiteLLM 1.107.0 PyPI 공급망 침해, 같은 .pth 지속 실행 백도어 수법 (2026-10-22)
- [[concepts/google-threat-tracker-exploit-agent]] — 패치·공개가 곧 공격으로 이어지는 현실과 같은 날의 공급망 공격 (2026-11-16)
- [[concepts/anthropic-anvil-automated-red-teaming]] — 에이전트가 클라우드 자격증명을 들고 다닌다는 전제 하의 위협 모델 (2026-11-12)
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델 + dual-LLM/CaMeL + Tier 등급
- [[concepts/cairn-norforge-ai-agent-hacking-spree]] — Cairn 해킹 캠페인, 공격 도구 자체가 Cairn AI 침투 테스트 프레임워크 (2026-10-20)

## 참고 소스

- [Microsoft Agent Framework PyPI 침해 — 악성 1.26.1·1.26.2가 클라우드 자격증명 탈취 (Socket Research Team, 11-17)](raw/articles/2026-11-18-microsoft-agent-framework-pypi-compromise.md)
