# Security policy

This repository is a **personal knowledge wiki** (Markdown, Obsidian-oriented). It must not contain production credentials, API keys, private keys, or personal secrets.

## Supported versions

Security maintenance applies to the **default branch** (`main`) as published on GitHub.

## Reporting a vulnerability

If you believe you found a **security issue caused by this repository’s contents** (for example, accidentally committed credentials, or unsafe defaults that affect users who clone this repo):

1. **Do not** open a public issue with exploit details.
2. Use [GitHub Security Advisories](https://github.com/JaydenHSong/ai-native-mind/security/advisories/new) to report privately, or contact the repository owner through a non-public channel if you already have one.

Include: what you found, where (file path or commit), and suggested impact. We aim to acknowledge within a few days (no SLA; personal project).

## What we do in-repo

- **`.gitignore`**: blocks common secret filenames, `.env*`, keys, and `node_modules/`.
- **`.gitleaks.toml`**: extends default Gitleaks rules with small allowlists for documented `${{ secrets.* }}` / `process.env.*` *patterns* in examples (not real secrets).
- **GitHub Actions**: Gitleaks on push/PR; dependency review on pull requests; Dependabot for npm and Actions.

## Contributor expectations

- Never commit **real** API keys, tokens, passwords, or `.env` files with live values.
- Prefer placeholders and `secrets.*` / `process.env.*` **names only** in documentation and workflow examples.

---

# 보안 정책 (한국어 요약)

이 저장소는 **개인 위키**이며, **실제 API 키·토큰·비밀키·비밀번호**를 커밋하지 않습니다.

**취약점 제보**: 공개 이슈 대신 [GitHub Security Advisories](https://github.com/JaydenHSong/ai-native-mind/security/advisories/new) 로 비공개 제보를 부탁합니다.

**저장소 내 조치**: `.gitignore`, Gitleaks 워크플로, Dependabot, PR 시 의존성 검토를 둡니다.
