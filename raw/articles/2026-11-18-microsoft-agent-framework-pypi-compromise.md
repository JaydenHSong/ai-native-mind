---
title: "Microsoft Agent Framework PyPI 침해 — 악성 1.26.1·1.26.2가 클라우드 자격증명 탈취 (11-17)"
source_url: "https://socket.dev/blog/agent-framework-pypi-package-compromised-with-credential-stealer"
source_type: "news"
authors: ["Socket Research Team"]
published: 2026-11-17
fetched: 2026-11-18
tags: [microsoft, agent-framework, pypi, supply-chain, security, credentials]
status: raw
---

# Microsoft Agent Framework PyPI 침해 — 악성 1.26.1·1.26.2가 클라우드 자격증명 탈취 (11-17)

> Microsoft의 공식 AI 에이전트 프레임워크 Python 패키지 `agent-framework`의 악성 버전 1.26.1(20:35 UTC)과 1.26.2(21:08 UTC)가 11월 17일 PyPI에 업로드됐다. 두 버전 모두 Python 시작 훅(`.pth`)으로 Azure·GitHub Actions OIDC 토큰과 각종 자격증명을 수집해 webhook.site로 유출했고, 약 1시간 만인 21:30 UTC경 제거됐다. 에이전트 프레임워크 자체가 공급망 공격의 표적이 된 첫 대형 사례다.

## 내용

- **타임라인(UTC)**: 2026-11-17 20:35 악성 1.26.1 업로드, 21:08 1.26.2 업로드, ~21:30 두 버전 모두 PyPI에서 제거. 노출 창은 약 45~55분. Socket Research Team이 최초 분석했고, Aikido·Chainguard·Endor Labs·OX Security·SafeDep·StepSecurity·Wiz 등 8개 보안 업체가 수 시간 내 플래그.
- **동작 방식**: 설치 시 site-packages에 `.pth` 파일(`agent_framework_meta.pth` / `af_runtime_diag.pth`)을 심는다. Python은 인터프리터 시작 때마다 `.pth`의 import 지시문을 실행하므로, `agent-framework`를 import하지 않아도 파이썬이 뜨면 스틸러가 돈다. 수집 후 분리 세션으로 포크해 백그라운드 실행.
- **탈취 대상**: 자격증명 관련 환경변수(TOKEN·SECRET·PASSWORD·KEY·AZURE·AWS·GITHUB·OPENAI·HF_·FOUNDRY 등), Azure CLI·.npmrc·pip.conf·.netrc·.git-credentials·Docker·Hugging Face·.env 등 자격증명 파일, Azure DevOps OIDC 토큰, Azure 관리 ID 토큰·인스턴스 메타데이터, 1.26.2에서는 GitHub Actions OIDC 토큰 추가. 수집 결과는 압축·Base64 인코딩해 webhook.site 엔드포인트로 POST.
- **피해 규모**: 유출 엔드포인트가 무료 티어라 Wiz가 확인한 바로는 최대 50건의 요청만 저장·분석됨. 실제 설치·피해자 수는 미공개. 패키지는 주간 약 4.1만 다운로드(Wiz 기준), 월간 약 19만 다운로드 수준.
- **근원(미확정→업데이트)**: 1.26.1은 wheel만 있고 정상 릴리스와 달리 sdist가 없으며, GitHub에 해당 태그·릴리스가 없음. Wiz의 11월 18일 14:00 UTC 업데이트에 따르면 공격자가 Microsoft ESRP(Engineering System Release Pipeline)용 클라이언트 인증서·개인키를 탈취한 것으로 보이며, 공격 도구 자체가 "Cairn"이라는 오픈소스 AI 침투 테스트 프레임워크임을 드러냈다. Microsoft는 11월 18일 현재 공식 근원 분석(postmortem)을 아직 내놓지 않았다.
- **대응**: 최근 안전 버전은 1.26.0. 해당 시간대(11-17 20:35~21:30 UTC)에 설치·업데이트한 환경은 자격증명 유출을 가정하고 로테이션해야 하며, 환경을 닦기보다 깨끗한 환경에서 복원하는 것이 권고됨. GitHub 저장소 microsoft/agent-framework와 microsoft/onnxruntime이 11월 18일 404를 반환했다는 관찰도 있으나, PyPI 사건과의 연관성은 미확인.
- **전례**: 올해 초 또 다른 Microsoft Python 패키지 durabletask도 PyPI 토큰 탈취로 침해된 바 있음.

## 맥락

- [[concepts/google-threat-tracker-exploit-agent]] — 패치·공개가 곧 공격으로 이어지는 현실과 같은 날의 공급망 공격
- [[concepts/anthropic-anvil-automated-red-teaming]] — 에이전트가 클라우드 자격증명을 들고 다닌다는 전제 하의 위협 모델
- [[concepts/tool-use]] — `pip install` 신뢰 가정과 에이전트 프레임워크의 공격 표면
