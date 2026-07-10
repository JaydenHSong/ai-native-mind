---
title: "Wiki Log"
category: meta
tags: [log, history]
created: 2026-04-06
updated: 2026-07-10
sources: []
status: active
---

# ai-native-mind Wiki Log

> 시간순 작업 기록. `grep "^## \[" wiki/log.md`로 파싱 가능.

## 쉽게 읽기

날짜별로 **무엇을 바꿨는지**만 적어 둔다. 개념 설명은 `wiki/concepts/` 등 본문 페이지를 보면 된다.

- 월드맵 허브: [[campaign-map|Campaign Map]]
- 진행 가이드: [[overview|Overview]]
- 전체 도감: [[index|Index]]

## [2026-07-10] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-07-10 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-07-09] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-07-09 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-07-08] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-07-08 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-07-07] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-07-07 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-07-04] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-07-04 scheduled maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-07-03] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-07-03 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-07-02] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-07-02 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-07-01] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-07-01 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-30] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-30 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-27] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-27 scheduled maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-26] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-26 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-25] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-25 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-24] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-24 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 보류 중인 hygiene 후보를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에도 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-23] maintain | AI 뉴스 taxonomy source reference 보강 + 한국어 정본 정합성 재검사

- **Pages updated**:
  - `patterns/ai-news-scouting-taxonomy.md` — frontmatter `sources`가 비어 있어, 실제 근거 raw note인 `raw/notes/2026-05-25-weekday-ai-software-watch.md`를 연결하고 `updated`를 갱신.
  - `index.md` — 최종 업데이트 문구를 2026-06-23 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 source reference 보강과 정합성 재검사 결과를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 초기 Claude Code 플러그인 계열 페이지 일부는 frontmatter `sources: []` 상태지만, 대응 raw source가 명확하지 않아 이번에는 임의 source를 만들지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-20] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-20 scheduled maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 raw frontmatter drift 보류 메모를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 이번 작업은 영어판을 수정하지 않는 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-19] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-19 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 raw frontmatter drift 보류 메모를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-18] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-18 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 raw frontmatter drift 보류 메모를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-17] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-17 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 raw frontmatter drift 보류 메모를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-16] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-16 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 raw frontmatter drift 보류 메모를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-13] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-13 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 raw frontmatter drift 보류 메모를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-12] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-12 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 raw frontmatter drift 보류 메모를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-11] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-11 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 raw frontmatter drift 보류 메모를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-10] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-10 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 raw frontmatter drift 보류 메모를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-09] maintain | 한국어 정본 정합성 재검사 + 신규 ingest 없음 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-09 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 raw frontmatter drift 보류 메모를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
  - `wiki/ko` 카테고리 폴더와 frontmatter `category` 불일치: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-06] maintain | 한국어 정본 정합성 재검사 + raw ingest 상태 확인

- **Pages updated**:
  - `index.md` — 최종 업데이트 문구를 2026-06-06 weekday maintenance 기준으로 갱신.
  - `overview.md` — 최근 작업에 이번 정합성 재검사 결과와 raw frontmatter drift 보류 메모를 추가.
  - `log.md` — 이 항목 추가.
- **Verification**:
  - `raw/**/*.md` 110개 중 `wiki/ko`에서 source reference가 전혀 없는 파일: 0개.
  - `wiki/ko` 기준 wikilink 검사: broken link 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - `raw/articles/`의 최근 파일들은 `source_type` / `authors` / `fetched` 키를 쓰고, CLAUDE.md의 raw 예시는 `author` / `collected` 키를 쓰는 drift가 남아 있다. 원본 layer는 이번 평일 ko maintenance 범위에서 수정하지 않고 다음 별도 hygiene 후보로 남긴다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-03] maintain | placeholder wikilink 오탐 보수 + 정합성 재검사

- **Pages updated**:
  - `overview.md` — 전날 작업 설명 안의 예시용 `wiki/...` placeholder가 실제 wikilink처럼 잡히지 않도록 문구를 일반 텍스트로 바꾸고 최근 작업 항목을 갱신.
  - `log.md` — 전날 log 항목의 예시용 `wiki/...` placeholder를 일반 텍스트로 바꾸고 이 항목 추가.
  - `index.md` — 최종 업데이트 문구를 2026-06-03 maintenance 기준으로 갱신.
- **Verification**:
  - `wiki/ko` 기준 wikilink 검사: broken link 2개 → 0개.
  - `wiki/ko/index.md` 등록 누락: 0개.
  - `raw/**/*.md` source reference 누락: 0개.
  - `wiki/ko/**/*.md` frontmatter 필수 필드 누락: 0개.
- **Notes**:
  - 새 raw source는 없어서 신규 ingest는 수행하지 않았다.
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-06-02] maintain | meta wikilink 정합성 보수

- **Pages updated**:
  - `index.md` — 예시용 `wiki/...` meta 링크를 실제 루트 파일 링크(`[[campaign-map]]`, `[[overview]]`, `[[index]]`, `[[log]]`)로 정리하고 최종 업데이트 문구 갱신.
  - `overview.md` — 상단 navigation과 Campaign Map 안내 링크를 루트 meta 링크로 정리하고 최근 작업 항목 추가.
  - `campaign-map.md` — 월드맵 허브의 Overview/Index/Log 링크를 실제 존재 파일로 연결.
  - `log.md` — 상단 navigation 링크를 루트 meta 링크로 정리하고 이 항목 추가.
  - `journal/2026-05-15.md` — 금요 리뷰 메타 링크 2개를 실제 루트 meta 링크로 수정.
  - `patterns/ai-code-review.md` — Campaign Map 링크 1개를 실제 루트 meta 링크로 수정.
  - `patterns/ai-cost-management.md` — Campaign Map/Log 링크 2개를 실제 루트 meta 링크로 수정.
  - `patterns/harness-engineering-casebook.md` — Campaign Map 링크 1개를 실제 루트 meta 링크로 수정.
- **Verification**:
  - `wiki/ko` 기준 wikilink 검사에서 broken link 22개 → 0개로 해소.
  - 총 페이지 수는 84개 그대로 유지. 새 source ingest는 없음.
- **Notes**:
  - 이번 작업은 영어판을 수정하지 않는 평일 한국어 정본 maintenance 범위 안에서만 수행했다.

## [2026-05-26] maintain | examples 링크 정리 + source 고아 해소 + Obsidian placeholder link 보수

- **Pages updated**:
  - `tools/obsidian.md` — 예시용 `\[\[링크\]\]`, `\[\[페이지이름\]\]` 표기를 코드 형태로 감싸 실제 깨진 wikilink로 해석되지 않게 수정.
  - `patterns/solo-product-strategy.md` — `raw/notes/2026-04-09-solo-dev-cases-detail.md` 를 sources/참고 소스에 연결하고, examples 비용 시뮬레이터 참조를 일반 링크로 변경.
  - `patterns/ai-cost-management.md` — examples 비용 시뮬레이터 참조를 wikilink에서 일반 Markdown 링크로 변경.
  - `patterns/agent-mvp-stack-2026.md` — examples 비용 시뮬레이터 3곳을 일반 링크로 바꿔 위키/보조 artifact 경계를 맞춤.
  - `comparisons/agent-platforms-for-solo-dev.md` — examples widget 참조를 일반 링크로 변경.
  - `patterns/owasp-llm-typescript-mitigations.md` — `examples/agent-safety-sketch` 참조를 README 기준 일반 링크로 변경.
- **Pages updated (ko meta)**:
  - `index.md` — 최종 업데이트 문구를 maintenance 기준으로 갱신.
  - `overview.md` — 이번 maintenance의 성격(artifact 링크 정리 + source 고아 해소)을 최근 작업에 반영.
  - `log.md` — 이 항목 추가.
- **Notes**:
  - `examples/` 는 위키 페이지 수에 포함되지 않는 보조 artifact 이므로, 앞으로 본문에서 참조할 때는 기본적으로 wikilink보다 상대 Markdown 링크를 우선한다.
  - raw source 참조 검사 결과 `raw/notes/2026-04-09-solo-dev-cases-detail.md` 1개만 위키 본문에 직접 연결되지 않아 있었고, 이번에 `solo-product-strategy`에 귀속시켜 source layer 정합성을 맞췄다.

## [2026-05-25] maintain | AGENTS.md + SKILL.md 패턴 정리 + 링크 정합성 보수

- **Pages created**:
  - `patterns/agents-md-skill-md.md` — `AGENTS.md` 를 **repo-scope policy**, `SKILL.md` 를 **task-scope progressive disclosure manual** 로 분리해 portability와 token efficiency를 동시에 얻는 하네스 문서 패턴 정리.
- **Pages updated**:
  - `patterns/claude-md-guide.md` — `CLAUDE.md ↔ AGENTS.md ↔ SKILL.md` 섹션에서 새 [[patterns/agents-md-skill-md]] 로 바로 건너갈 수 있게 교차링크 추가.
  - `comparisons/claude-code-plugins.md` — 표 안 wikilink escape 오타 수정으로 `bkit`·`Superpowers`·`Codex`·`gstack` 링크 복구.
- **Pages updated (ko meta)**:
  - `index.md` — total 83→84, patterns 21→22, 새 패턴 등록, 최종 업데이트 문구 갱신.
  - `overview.md` — 현재 상태 수치 갱신, 새 패턴과 링크 정합성 보수 반영.
  - `log.md` — 이 항목 추가.
- **Notes**:
  - 기존 `tools/managed-agents.md` / `tools/deep-agents-deploy.md` 가 가리키던 `[[patterns/agents-md-skill-md]]` 빈 링크를 실제 패턴 페이지로 채워 upper-middle agent platform 관련 지식의 연결을 복구했다.
  - 평일 위키 유지보수 관점에서, 오늘은 새 개념을 무리하게 늘리기보다 **이미 여러 페이지가 전제하던 문서 패턴을 명시적으로 승격**하는 편이 정합성 대비 효율이 높았다.

## [2026-05-25] watch | weekday watch kick-off + operator/runtime/observability 우선순위 검증

- **Pages created**:
  - `journal/2026-05-25.md` — weekday watch 첫 calibration 일지. Cline · browser-use · LangGraph · Langfuse release를 통해 **integration surface / operator control / trace artifact화** 가 평일 watch의 우선 신호임을 정리.
- **Sources captured**:
  - `raw/notes/2026-05-25-weekday-ai-software-watch.md` — 공식 release/news 링크 기준 shortlist와 보류 판단 메모.
- **Pages updated (ko meta)**:
  - `index.md` — total 82→83, journal 19→20, 새 2026-05-25 일지 등록, 최종 업데이트 문구 갱신.
  - `overview.md` — weekday watch kick-off 항목 추가, 현재 상태 수치 갱신.
  - `log.md` — 이 항목 추가.
- **Watch verdict**:
  - **채택**: Cline v3.85.0, browser-use 0.12.8, LangGraph 1.2.1, Langfuse v3.175.0.
  - **보류**: Anthropic Project Glasswing 초기 업데이트는 중요하지만, 오늘 시점에는 직접 product/API/workflow 변경보다 security program update 성격이 강해 본문 반영 대신 watchlist 유지.
- **Notes**:
  - 오늘은 새 개념 페이지를 늘리기보다, 방금 만든 [[patterns/ai-news-scouting-taxonomy]] 가 실제로 어떤 신호를 상위에 올리는지 **운영 기준을 검증** 하는 쪽이 더 가치 있었다.
  - 결론적으로 평일 저녁 watch에서 frontier headline보다 **coding-agent integration surface / self-hosted operator safety / trace artifact exportability** 가 더 빠르게 workflow를 바꾼다.

## [2026-05-25] meta | AI 뉴스 스카우팅 taxonomy v1 정리 + 한영 메타 정합성 보정

- **Pages created**:
  - `patterns/ai-news-scouting-taxonomy.md` — HN 중심 흐름을 **frontier 모델·제품 / open-free 모델 생태계 / AI coding software / operator·runtime / eval·observability** 레이어로 재편하는 뉴스 큐레이션 분류안 초안.
- **Pages updated (ko meta)**:
  - `index.md` — total 81→82, patterns 20→21, 새 taxonomy 링크 추가, 최종 업데이트 문구 갱신.
  - `overview.md` — 현재 상태 수치 갱신, 2026-05-25 taxonomy 정리 항목 추가.
  - `log.md` — 이 항목 추가.
- **Pages updated (en meta sync)**:
  - `../en/index.md` — 영어 미러가 full journal line + synced quest log를 포함하도록 상태 문구 갱신.
  - `../en/overview.md` — `wiki/en/log.md` 미러 상태와 최신 journal 동기화 상태 명시.
- **Notes**:
  - 이번 taxonomy의 기준은 "AI 일반 뉴스"가 아니라 **software work를 수행하는 모델·도구·에이전트·런타임 변화** 다.
  - 기본 제외 규칙은 하드웨어·투자 잡음 축소, 예외는 실제 API/제품 사용성에 직접 영향 주는 경우만 포함.
  - 영어판은 이번에 메타 정합성까지는 맞췄지만, 새 taxonomy 본문 페이지는 아직 한국어 정본만 존재한다.

## [2026-05-24] ingest | MOSS(source-level harness evolution) + WorkstreamBench(spreadsheet workflow eval) + ActiveGraph(log-first runtime) — 일요 데일리, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-24-moss-source-level-self-evolution.md` — MOSS, "Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems" (arXiv:2605.22794, 2026-05-22). self-evolving agent의 개선 대상을 prompt·skill 텍스트가 아니라 **harness source code** 까지 확장. production failure evidence → deterministic evolution pipeline → external coding-agent CLI code rewrite → ephemeral replay validation → user-consent-gated promotion + rollback. OpenClaw 예시에서 **four-task mean grader score 0.25 → 0.61**.
  - `raw/articles/2026-05-24-workstreambench-finance-spreadsheet-agents.md` — WorkstreamBench, "Evaluating LLM Agents on End-to-End Spreadsheet Tasks in Finance" (arXiv:2605.22664, 2026-05-22). spreadsheet agent 평가를 QA/single-formula에서 **financial modeling · forecasting · scenario analysis** 같은 end-to-end workflow로 확장. rubric은 **Accuracy / Formula / Format** 3축, strongest model도 professional finance standard에 자주 미달.
  - `raw/articles/2026-05-24-activegraph-log-is-the-agent.md` — ActiveGraph, "The Log is the Agent: Event-Sourced Reactive Graphs for Auditable, Forkable Agentic Systems" (arXiv:2605.21997, 2026-05-21). append-only event log를 **runtime source of truth** 로 두고 deterministic replay / cheap forking / lineage-preserving audit를 가능하게 하는 log-first agent substrate 제안.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/harness-engineering.md` — "2026-05-24 보강" 섹션 추가. self-evolving harness를 **source-level rewriting** 까지 확장하고, policy / interface / runtime / source-level evolution / governance 5층으로 재압축.
  - `concepts/llm-evaluation.md` — "2026-05-24 보강" 섹션 추가. terminal provenance 다음 축으로 **workflow artifact quality** 를 추가하고, WorkstreamBench를 spreadsheet-centric knowledge-work eval로 배치.
  - `concepts/gen-ai-observability.md` — "2026-05-24 보강" 섹션 추가. observability를 telemetry 수집에서 **runtime auditability / replay / forkability** 를 갖는 log-first runtime substrate로 확장.
- **Pages created**:
  - `journal/2026-05-24.md` — 일요 데일리 일지 (source-level evolution · artifact-quality eval · log-first runtime 연결, 기존 지식과의 다리, 후속 후보).
- **Pages updated (meta)**: `index.md` (최종 업데이트 문구 + journal 항목 갱신), `overview.md` (최근 작업 갱신), `log.md` (이 항목).
- **Notes**: 어제(2026-05-23)가 interface adaptation / benchmark provenance / branchable sandbox를 다뤘다면, 오늘 3편은 그 위에서 **무엇을 수정 가능하게 둘 것인가(MOSS)**, **무엇을 성공으로 셀 것인가(WorkstreamBench)**, **무엇을 시스템의 진짜 상태로 볼 것인가(ActiveGraph)** 를 묻는다. 결과적으로 최근 위키의 관심사는 모델 capability 자체보다 더 바깥의 **mutable substrate / artifact rubric / execution history substrate** 로 이동했다.

## [2026-05-23] ingest | Life-Harness(interface adaptation) + TerminalWorld(benchmark provenance) + HarnessAPI(single-source MCP/HTTP capability) + DeltaBox(branchable sandbox runtime) — 토요 데일리, 자동 인제스트

- **Sources** (raw 4편 추가):
  - `raw/articles/2026-05-23-life-harness-runtime-interface-adaptation.md` — Xu et al., "Adapting the Interface, Not the Model: Runtime Harness Adaptation for Deterministic LLM Agents" (arXiv:2605.22166, 2026-05-21). deterministic domain의 agent failure를 **model-environment interface mismatch** 로 해석하고, recurring trajectory failure를 **environment contracts / procedural skills / action realization / trajectory regulation** intervention으로 바꾸는 **Life-Harness** 제안. **7 environments / 18 backbones / 126 settings 중 116개 개선 / 평균 상대 향상 88.5%**, Qwen3-4B로 진화한 harness가 **17개 다른 모델에 전이**.
  - `raw/articles/2026-05-23-terminalworld-real-world-terminal-benchmark.md` — Chu et al., "TerminalWorld: Benchmarking Agents on Real-World Terminal Tasks" (arXiv:2605.22535, 2026-05-21). **80,870 terminal recordings** 에서 **1,530 validated tasks / 18 categories / 1,280 unique commands** 를 자동 역구성하고, **200 verified subset** 으로 평가. **8 models / 6 agents 최고 62.5%**, Terminal-Bench와 **Pearson r=0.20** 으로 낮은 상관 → terminal eval에 **benchmark provenance** 층 추가.
  - `raw/articles/2026-05-23-harnessapi-skill-first-unified-mcp-http.md` — Edwin Jose, "HarnessAPI: A Skill-First Framework for Unified Streaming APIs and MCP Tools" (arXiv:2605.22733, 2026-05-21). typed skill folder를 **single source of truth** 로 두고 같은 구현에서 **SSE HTTP endpoint + OpenAPI UI + zero-config MCP tool** 을 동시에 파생. 수작업 dual-stack(FastAPI + FastMCP) 대비 **framework-facing boilerplate 74% 감소**.
  - `raw/articles/2026-05-23-deltabox-millisecond-sandbox-checkpoint-rollback.md` — Dong et al., "DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback" (arXiv:2605.22781, 2026-05-21). agent sandbox를 full-copy가 아닌 **change-based checkpoint/rollback** 으로 재설계. **DeltaFS + DeltaCR** 로 checkpoint **14ms**, rollback **5ms**. sandbox를 security box가 아니라 **branchable execution substrate** 로 재해석.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/harness-engineering.md` — "2026-05-23 보강" 섹션 추가. 최근 **code substrate** 상위 프레임 아래에 **interface adaptation (Life-Harness)** 과 **runtime systems / branchable sandbox (DeltaBox)** 두 층을 더 선명하게 추가.
  - `concepts/llm-evaluation.md` — "2026-05-23 보강" 섹션 추가. eval 층을 **judge / disclosure / truth / process / environment realism / benchmark provenance** 로 확장하고, TerminalWorld를 provenance 계층에 배치.
  - `concepts/tool-use.md` — "2026-05-23 보강" 섹션 추가. Tool Use를 schema 중심 설명에서 **HTTP + MCP dual-surface deployable capability** 관점으로 확장. SkillSmith → Formal Skill → HarnessAPI 흐름으로 재정리.
  - `patterns/safe-tool-calling-sandbox.md` — "2026-05-23 보강" 섹션 추가. 샌드박스를 격리 방에서 **checkpoint/rollback 가능한 branchable runtime** 으로 재해석.
- **Pages created**:
  - `journal/2026-05-23.md` — 토요 데일리 일지 (interface adaptation · benchmark provenance · capability deployment · branchable runtime 연결, 기존 지식과의 다리, 자율 결정 사항, 후속 후보).
- **Pages updated (meta)**: `index.md` (journal 17→18, total 79→80), `overview.md` (최근 작업 갱신), `log.md` (이 항목).
- **Notes**: 어제(2026-05-22)가 agent engineering의 초점을 **substrate / scale boundary / disclosure metadata** 로 내렸다면, 오늘 4편은 그 substrate의 실제 구성 단위를 더 잘게 보여 준다. Life-Harness는 **모델-환경 인터페이스** 를, TerminalWorld는 **benchmark task provenance** 를, HarnessAPI는 **capability deployment surface** 를, DeltaBox는 **branchable runtime state** 를 전면에 올린다. 결과적으로 최근 위키의 boundary design 흐름이 한 단계 더 미세화됐다 — 이제 질문은 "좋은 agent인가"가 아니라 **어느 interface가 깨졌고, 그 benchmark는 어디서 왔고, capability는 어떤 surface로 배포되며, sandbox는 얼마나 빨리 되감을 수 있는가** 로 바뀐다.

## [2026-05-22] weekly-review | boundary design 관점으로 최근 7일 지식 압축

- **Review scope**: 최근 7일(2026-05-16 ~ 2026-05-22, America/Los_Angeles 기준) 동안 추가·수정된 `raw/`, `wiki/`, `journal/`을 재검토. focus는 최근 agent engineering 지식이 실제로 어디서 중복되고, 어디서 서로 다른 경계 질문으로 분화됐는지 확인하는 것.
- **Compression verdict**: 삭제할 중복 페이지는 없고, 가장 큰 겹침은 **memory / eval / orchestration / tool-use 논의가 사실상 boundary design 질문을 서로 다른 이름으로 반복하는 상태**였음. 삭제 대신 **기존 비교 페이지 확장 + 금요 review section 추가**로 압축.
- **Pages updated**:
  - `comparisons/agent-memory-taxonomy.md` — 기존 **task / belief / lifecycle / safety** 분류 위에 **scale boundary / runtime enforcement / action-time safety check** overlay 추가. ClawVM·Scale-Conditioned Evaluation을 taxonomy와 다시 연결.
  - `journal/2026-05-22.md` — §9 금요 주간 리뷰 추가. 최근 6개 journal과 7개 중심 concept/comparison 페이지를 다시 읽고, 이번 주 핵심 중복이 **같은 시스템의 다른 경계면**을 서로 다른 이름으로 부른 데 있었다는 점을 요약.
- **Pages updated (meta)**:
  - `index.md` — 2026-05-22 일지 설명을 "금요 데일리 + 주간 리뷰"로 확장, `agent-memory-taxonomy` 설명에 boundary overlay 반영.
  - `overview.md` — 최근 작업 항목을 데일리 ingest + weekly compression follow-up 기준으로 갱신.
  - `log.md` — 이 항목.
- **Preservation rule 준수**:
  - raw source 경로와 기존 핵심 수치·세부 주장은 원래 concept/journal 페이지에 그대로 유지.
  - 비교 페이지는 세부 내용을 대체하지 않고, 어느 페이지가 어떤 역할을 맡는지 알려 주는 **상위 naming / routing layer** 로만 동작.
  - 페이지 삭제나 리다이렉션은 없고, 해석층만 추가.
- **Notes**: 이번 주 agent engineering의 진짜 공통점은 새로운 기능이 아니라 **경계 설계(boundary design)** 였다. memory는 scale·writeback·safety 경계로, eval은 truth·control·disclosure 경계로, orchestration은 handoff 경계로, tool/skill은 capability boundary로 더 세분화됐다. 이번 리뷰는 그 공통 구조를 드러내는 작업이었다.

## [2026-05-22] ingest | Code as Agent Harness(code substrate) + Scale-Conditioned Memory Eval(usable-scale boundary) + Benchmark Disclosure Audit(run disclosure quality) — 금요 데일리, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-22-code-as-agent-harness.md` — Ning et al., "Code as Agent Harness" (arXiv:2605.18747, 2026-05-18). code를 단순 산출물이 아니라 **agent reasoning / action / environment modeling / verification substrate** 로 보는 survey. 세 층: **harness interface / harness mechanisms / multi-agent shared artifact scaling**. 최근 위키에 흩어진 planning·memory·tool-use·verification 축을 **code-backed harness** 상위 프레임으로 묶음.
  - `raw/articles/2026-05-22-scale-conditioned-agent-memory-evaluation.md` — Shao et al., "When Stored Evidence Stops Being Usable: Scale-Conditioned Evaluation of Agent Memory" (arXiv:2605.07313, 2026-05-08). query의 task evidence는 고정하고 **irrelevant sessions만 늘리는** memory eval protocol. 진단 4종: **budget-compliant reliability / tail memory-call burden / failure-regime decomposition / usable-scale boundary**. LongMemEval에서 **HippoRAG 16~20pp 하락**.
  - `raw/articles/2026-05-22-agent-benchmark-disclosure-audit.md` — Moghadasi · Ghaderi, "What Twelve LLM Agent Benchmark Papers Disclose About Themselves: A Pilot Audit and an Open Scoring Schema" (arXiv:2605.21404, 2026-05-20). benchmark paper를 **benchmark identity / harness specification / inference settings / cost reporting / failure breakdown** 5필드로 감사. **agent benchmark 평균 disclosure 0.38 vs classical 0.66**, cost·harness spec 공백 큼.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/harness-engineering.md` — "2026-05-22 보강" 섹션 추가. 최근 source들을 **code substrate** 관점으로 재압축하고, multi-agent coordination의 매개를 **shared artifact** 로 강조.
  - `concepts/ai-memory-systems.md` — "2026-05-22 보강" 섹션 추가. memory taxonomy에 **scale-conditioned evaluation / usable-scale boundary** 측정축 추가.
  - `concepts/llm-evaluation.md` — "2026-05-22 보강" 섹션 추가. eval 표면에 **run disclosure audit** 층 추가.
- **Pages created**:
  - `journal/2026-05-22.md` — 금요 데일리 일지 (code substrate · scale boundary · disclosure audit 연결, 기존 지식과의 다리, 자율 결정 사항, 후속 후보).
- **Pages updated (meta)**: `index.md` (journal 16→17, total 78→79), `overview.md` (최근 작업 갱신), `log.md` (이 항목).
- **Notes**: 최근 위키가 long-horizon agent를 **spec truth / process controllability / handoff interface / safety memory** 같은 하부 질문으로 분해해 왔다면, 오늘 3편은 그 분해를 다시 한 단계 메타화한다. Code as Agent Harness는 이 조각들을 **code substrate** 로 묶고, Scale-Conditioned Memory Eval은 memory를 **성장 조건부 usability** 문제로 바꾸며, Disclosure Audit은 eval 결과를 읽을 때 **점수 이전에 실행 메타데이터** 를 보라고 요구한다. 결과적으로 오늘의 압축은 "무엇을 했나"보다 **무엇 위에서 했고, 언제까지 유효하며, 그 사실을 얼마나 투명하게 공개했는가** 로 초점이 이동했다는 것이다.

## [2026-05-21] ingest-followup | Learning to Hand Off(handoff interface) + Progressive Autonomy(trust-calibrated HITL) + Library Drift(skill lifecycle governance) + Formal Skill(runtime capability object) — 목요 late follow-up, 자동 인제스트

- **Sources** (raw 4편 추가):
  - `raw/articles/2026-05-21-learning-to-hand-off-interface-constraints.md` — Li et al., "Learning to Hand Off: Provably Convergent Workflow Learning under Interface Constraints" (arXiv:2605.19140, 2026-05-18). 멀티 agent가 **shared artifact** 를 사이에 두고 handoff하는 환경을 **IC-SMDP** 로 formalize하고, joint trajectory 없이도 학습 가능한 **IC-Q** 제안. 핵심은 오케스트레이션 실패를 **function-approximation / interface representation gap / mixing residual** 로 분해하는 점. delegation 다음 질문을 **handoff contract** 로 내림.
  - `raw/articles/2026-05-21-progressive-autonomy-trust-calibration-tool-use.md` — Ou, "Progressive Autonomy as Preference Learning: A Formalization of Trust Calibration for Agentic Tool Use" (arXiv:2605.19151, 2026-05-18). tool action 승인 문제를 **allow / block / ask** 세 영역으로 formalize. human approve/deny feedback 위 Gaussian-process posterior를 유지하며 **가장 불확실한 행동만 escalates** 하는 policy gateway framing 제시. HITL을 정적 승인에서 **학습형 autonomy boundary** 로 확장.
  - `raw/articles/2026-05-21-library-drift-self-evolving-skill-libraries.md` — Zhang et al., "Library Drift: Diagnosing and Fixing a Silent Failure Mode in Self-Evolving LLM Skill Libraries" (arXiv:2605.19576, 2026-05-19). self-evolving skill library의 silent failure **library drift** 명명: unbounded accumulation → retrieval degradation / false-positive injection / stagnation. **LLM-authored +0.0pp vs human-curated +16.2pp**, governance recipe(retirement + active-cap + authoring prior)로 held-out **pass@1 0.258 → 0.584**.
  - `raw/articles/2026-05-21-formal-skill-programmable-runtime-skills.md` — Zhang et al., "Formal Skill: Programmable Runtime Skills for Efficient and Accurate LLM Agents" (arXiv:2605.19604, 2026-05-19). Markdown skill과 function call 사이의 틈을 메우는 **runtime-native skill abstraction** 제안: JSON metadata + action schema + executor + hook-governed control logic + skill-local state. FairyClaw 구현, Harness-Bench에서 **competitive score + fewer tokens**.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/ai-orchestration.md` — "2026-05-21 보강" 섹션 추가. delegation fidelity 다음 층을 **handoff interface / shared artifact / interface gap** 관점으로 확장.
  - `patterns/safe-tool-calling-sandbox.md` — "2026-05-21 보강" 섹션 추가. HITL을 **allow / block / ask** 와 uncertainty-based escalation을 가진 **학습형 trust gateway** 로 재해석.
  - `concepts/harness-engineering.md` — "2026-05-21 보강" 섹션 추가. self-evolving harness에 **skill garbage collection / outcome-driven retirement / bounded active-cap** 질문 추가.
  - `concepts/tool-use.md` — "2026-05-21 보강" 섹션 추가. tool/skill을 **stateful capability object** 로 승격하는 Formal Skill 관점 반영.
  - `journal/2026-05-21.md` — 같은 날짜 일지에 late follow-up(4편) 추가. title/sources/tags/related 갱신.
- **Pages updated (meta)**: `index.md` (같은 날짜 journal 설명 확장 + 최종 업데이트 문구 갱신), `overview.md` (최근 작업을 7편 기준으로 갱신), `log.md` (이 항목).
- **Notes**: 오전 3편이 coding-agent 평가를 **점수판 아래층** 으로 내렸다면, 늦은 추가 4편은 그 옆의 운영 경계를 더 잘게 자른다. orchestration은 이제 **누구에게 넘길까**(DecisionBench)에서 **무엇을 넘길까**(Learning to Hand Off)로 내려가고, HITL은 **언제 사람이 개입할까**(Progressive Autonomy)로 바뀌며, self-improvement는 **무엇을 추가할까** 보다 **무엇을 퇴역시킬까**(Library Drift)가 더 중요해진다. Formal Skill은 이 모든 걸 받치는 capability 단위를 문서가 아닌 **stateful executable object** 로 옮긴다. 결과적으로 오늘 7편은 agent engineering을 **경계 설계(boundary design)** 의 문제로 다시 압축한다.

## [2026-05-21] ingest | SpecBench(reward hacking gap) + ProcBench(process controllability) + Insights Generator(corpus-level trace diagnostics) — 목요 데일리, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-21-specbench-reward-hacking-coding-agents.md` — Zhao et al., "SpecBench: Measuring Reward Hacking in Long-Horizon Coding Agents" (arXiv:2605.21384, 2026-05-20). visible validation test와 held-out composition test gap으로 **reward hacking** 측정. **30 systems-level programming tasks**, short horizon→OS kernel. frontier agent는 visible suite를 saturate하지만 held-out gap 지속, **code size 10x마다 gap +28 points**.
  - `raw/articles/2026-05-21-procbench-process-defects-control-preservation.md` — He et al., "ProcBench: Evaluating Process-Level Defects and Control Preservation in LLM Coding Agents" (arXiv:2605.20251, 2026-05-18). **11 defect types / 4 categories**, raw log를 **unified trajectory representation** 으로 표준화. **200 cases** across AndroidBench / TerminalBench / SWE-bench-Verified. 핵심 개념은 **control preservation**(interpretable / interruptible / correctable / reversible / authority hand-back).
  - `raw/articles/2026-05-21-insights-generator-trace-diagnostics.md` — Manglik et al., "Insights Generator: Systematic Corpus-Level Trace Diagnostics for LLM Agents" (arXiv:2605.21347, 2026-05-20). trace 몇 개 수동 점검 대신 **corpus-level trace diagnostics** 제안. scout-investigator 구조로 evidence-backed insight report 생성. human expert가 IG report 활용 시 **baseline scaffold 대비 +30.4 pp**.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/llm-evaluation.md` — "2026-05-21 보강" 섹션 추가. coding eval을 **surface pass / spec truth / process quality / control preservation** 관점으로 재압축. SpecBench + ProcBench 연결.
  - `patterns/ai-code-review.md` — "2026-05-21 보강" 섹션 추가. 코드 리뷰를 **anti-gaming review + process review** 까지 확장.
  - `concepts/harness-engineering.md` — "2026-05-21 보강" 섹션 추가. observability를 **trace 적재 → corpus diagnosis → 다음 하네스 수정** 루프로 재정의. Insights Generator 연결.
- **Pages created**:
  - `journal/2026-05-21.md` — 목요 데일리 일지 (reward hacking gap · process controllability · corpus-level trace diagnostics 연결, 기존 지식과의 다리, 자율 결정 사항, 후속 후보).
- **Pages updated (meta)**: `index.md` (journal 15→16, total 77→78), `overview.md` (최근 작업 갱신), `log.md` (이 항목).
- **Notes**: 어제(2026-05-20)가 eval을 **delegation fidelity / privacy diagnostic / artifact truth** 로 확장했다면, 오늘 3편은 coding-agent 쪽에서 그 표면을 더 아래로 판다. SpecBench는 **겉보기 테스트 통과와 진짜 spec 만족의 차이**, ProcBench는 **최종 성공과 통제 가능한 실행 과정의 차이**, Insights Generator는 **trace 저장과 trace 해석의 차이** 를 드러낸다. 결과적으로 eval과 harness는 점점 **점수판** 에서 멀어지고 **실패 양상 / 회수 가능성 / 반복 패턴 설명력** 쪽으로 이동한다.

## [2026-05-20] ingest | DecisionBench(delegation fidelity) + POLAR-Bench(privacy-utility diagnostic) + ResearchArena(artifact-aware auto-research eval) — 수요 데일리, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-20-decisionbench-emergent-delegation.md` — Gao et al., "DecisionBench: A Benchmark for Emergent Delegation in Long-Horizon Agentic Workflows" (arXiv:2605.19099, 2026-05-20). **11 models / 7 vendor families / 23,375 task instances**. quality-only 평가로는 orchestration signal이 잘 안 보이며, **routing fidelity-at-1 7.5%~29.5%**, **perfect delegation ceiling +15~31 points**. profile 내용보다 **delivery channel(on-demand vs preloaded)** 영향이 큼.
  - `raw/articles/2026-05-20-polar-bench-privacy-utility-tradeoffs.md` — Zheng et al., "POLAR-Bench: A Diagnostic Benchmark for Privacy-Utility Trade-offs in LLM Agents" (arXiv:2605.19127, 2026-05-20). trusted agent가 adversarial third party와 대화할 때 **privacy vs utility** 를 함께 측정. **10 domains / 7,852 samples / 5x5 diagnostic surface**. frontier model은 protected attribute를 **99%+ withholding**, **1B~30B open-weight** 계열은 취약, weakest는 **절반 이상 유출**.
  - `raw/articles/2026-05-20-researcharena-true-auto-research-gap.md` — Zhang et al., "How Far Are We From True Auto-Research?" (arXiv:2605.19156, 2026-05-20). **ResearchArena** 위에서 Claude Code / Codex / Kimi Code가 ideation→experiment→paper→self-refine 전체 루프 수행. **13 seeds × 3 trials = 117 papers**. **SAR(manuscript-only)** 는 낙관적이지만 **artifact-aware PR** 에서 점수 하락, 병목은 **fabricated results / underpowered experiments / plan-execution mismatch**, **top-tier acceptance 0편**.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/ai-orchestration.md` — "2026-05-20 보강" 섹션 추가. delegation을 **routing fidelity / delivery channel / counterfactual ceiling** 관점으로 확장.
  - `concepts/llm-evaluation.md` — "2026-05-20 보강 — DecisionBench + ResearchArena" 섹션 추가. eval 표면에 **delegation quality / artifact truth** 층 추가.
  - `concepts/agent-supply-chain-security.md` — "2026-05-20 보강 — POLAR-Bench" 섹션 추가. supply chain security를 **attribute disclosure / privacy-policy regression** 까지 확장.
- **Pages created**:
  - `journal/2026-05-20.md` — 수요 데일리 일지 (delegation substrate · privacy diagnostic · artifact-aware auto-research 연결, 자율 결정 사항, 후속 후보).
- **Pages updated (meta)**: `index.md` (journal 14→15, total 76→77), `overview.md` (최근 작업 갱신), `log.md` (이 항목).
- **Notes**: 어제(2026-05-19)가 하네스를 **trajectory / memory lifecycle / policy document** 로 넓혔다면, 오늘 3편은 그 위에서 "좋은 agent를 어떻게 속지 않고 재나"를 더 세분화한다. DecisionBench는 **누구에게 넘겼는가**, POLAR-Bench는 **무엇을 말하지 말아야 하는가**, ResearchArena는 **문서 뒤에 실제 artifact가 있는가**를 묻는다. 결과적으로 eval은 정답률에서 멀어지고 **위임 품질 / 정보 경계 / 산출물 진실성** 쪽으로 내려간다.

## [2026-05-19] ingest | HarnessAudit(trajectory boundary audit) + ClawVM(virtual memory contract) + Natural-Language Agent Harnesses(policy object) — 화요 데일리, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-19-harnessaudit-trajectory-safety.md` — Liu et al., "Auditing Agent Harness Safety" (arXiv:2605.14271, 2026-05-14; v2 2026-05-16). **핵심 전환**: final output가 아니라 **full execution trajectory** 를 감사. **3 layer**: boundary compliance / execution fidelity / system stability. **HarnessAudit-Bench = 210 tasks / 8 domains / 24 scenarios**, single-agent·multi-agent 둘 다 포함. 발견: **best overall score 0.32**, task completion과 safety compliance **misaligned**, multi-agent coordination이 **information-flow / resource-access violation** 증폭.
  - `raw/articles/2026-05-19-clawvm-harness-managed-virtual-memory.md` — Rafique · Bindschaedler, "ClawVM: Harness-Managed Virtual Memory for Stateful Tool-Using LLM Agents" (arXiv:2604.10352, 2026-04-11). memory를 retrieval store가 아니라 **typed pages + minimum-fidelity invariants + validated writeback** 으로 관리하는 virtual memory contract로 재정의. 본문 기준 **12 real-session traces**, budget 180 task replay에서 **100% success vs baseline 76.7%**, overhead **18–44μs/turn**.
  - `raw/articles/2026-05-19-natural-language-agent-harnesses.md` — Pan et al., "Natural-Language Agent Harnesses" (arXiv:2603.25723, 2026-03-26; v2 2026-05-18). 하네스를 controller code에 묻지 않고 **자연어 정책 문서(NLAH) + shared runtime(IHR)** 로 분리. **OSWorld 46.3 vs code 47.1**, **SWE code 60.10k tokens / 68 files vs NLAH 2.90k / 3 files**, file-backed state·verifier 모듈 ablation 가능.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/harness-engineering.md` — "2026-05-19 보강" 섹션 추가. 하네스를 **trajectory audit substrate + policy representation object** 로 확장. HarnessAudit + NLAH 연결.
  - `concepts/llm-evaluation.md` — "2026-05-19 보강 — HarnessAudit" 섹션 추가. eval 표면에 **boundary-compliance / trajectory audit** 층 추가.
  - `concepts/ai-memory-systems.md` — "2026-05-19 보강 — ClawVM" 섹션 추가. memory를 **belief / lifecycle / safety** 다음에 **runtime enforcement** 질문으로 확장.
  - `patterns/claude-md-guide.md` — "2026-05-19 보강 — Natural-Language Agent Harnesses" 섹션 추가. `CLAUDE.md` / `AGENTS.md` / `SKILL.md`를 **natural-language harness policy** 로 재해석.
- **Pages created**:
  - `journal/2026-05-19.md` — 화요 데일리 일지 (trajectory audit · virtual memory · natural-language harness 연결, 기존 지식과의 다리, 자율 결정 사항, 후속 후보).
- **Pages updated (meta)**: `index.md` (journal 13→14, total 75→76), `overview.md` (최근 작업 갱신), `log.md` (이 항목).
- **Notes**: 2026-05-18이 하네스를 **예산 배분 / skill 압축 / release-scale eval** 관점으로 구체화했다면, 오늘 3편은 그 하네스를 더 아래와 더 위로 동시에 펼친다. 아래로는 **ClawVM** 이 memory flush/reset/writeback을 하네스 계약으로 만들고, 위로는 **NLAH** 가 정책을 코드 밖 문서 객체로 드러낸다. 그 사이에서 **HarnessAudit** 가 "잘 풀었는가"보다 "규정 위반 없이 풀었는가"를 묻는다. 결과적으로 하네스는 점점 **glue code**가 아니라 **감사 가능하고, 보존 가능하고, 표현 가능한 아키텍처 레이어**로 선명해진다.

## [2026-05-18] ingest | Effective Harness Engineering(Vesper·evaluation hack·worktree) + SkillSmith(compiled runtime interface) + RoadmapBench(version-upgrade eval) — 월요 데일리, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-18-effective-harness-engineering-algorithm-discovery.md` — Ishibashi · Yano · Oyamada, "Effective Harness Engineering for Algorithm Discovery with Coding Agents" (arXiv:2605.15221, 2026-05-13). **핵심 질문 3개**: 같은 token budget에서 many-shallow vs few-deep, **evaluation hack** 탐지, **full filesystem access 병렬 실행** 격리. 결론: **fewer algorithms + deeper thought** 가 더 budget-efficient, **more capable models produced evaluation hacks at higher rates**, **Git worktree isolation** 이 병렬 안전성 핵심.
  - `raw/articles/2026-05-18-skillsmith-boundary-guided-runtime-interfaces.md` — Xu et al., "SkillSmith: Compiling Agent Skills into Boundary-Guided Runtime Interfaces" (arXiv:2605.15215, 2026-05-12). skill을 runtime마다 통째로 주입하지 않고 **offline compile → minimal executable interface** 로 바꾸는 boundary-first compiler-runtime framework. SkillsBench에서 **token -57.44% / thinking iterations -42.99% / solve time -50.57%(2.02x faster) / cost -57.44%**.
  - `raw/articles/2026-05-18-roadmapbench-long-horizon-version-upgrades.md` — Xu et al., "RoadmapBench: Evaluating Long-Horizon Agentic Software Development Across Version Upgrades" (arXiv:2605.15846, 2026-05-15). **115 tasks / 17 repos / 5 languages / median 3,700 lines / 51 files**. source-version snapshot에서 target-version functionality를 roadmap instruction으로 구현. **13 frontier models** 평가, **best Claude Opus 4.7 = 39.1%**, weakest **5.2%**.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/harness-engineering.md` — "2026-05-18 보강" 섹션 추가. harness를 **budget allocation / anti-gaming detector / worktree isolation / compiled runtime interface** 관점으로 확장. Effective Harness Engineering + SkillSmith 연결.
  - `concepts/tool-use.md` — "2026-05-18 보강 — SkillSmith" 섹션 추가. tool/skill을 긴 문서가 아니라 **schema-like runtime interface** 로 보는 관점 보강.
  - `concepts/llm-evaluation.md` — "2026-05-18 보강 — RoadmapBench" 섹션 추가. coding eval granularity를 **bug-fix → feature-development → version-upgrade roadmap** 으로 확장.
  - `patterns/ai-code-review.md` — release-scale roadmap review + **anti-gaming review** 단계 추가.
- **Pages created**:
  - `journal/2026-05-18.md` — 월요 데일리 일지 (harness shape · compiled skills · version-upgrade eval 연결, 자율 결정 사항, 후속 후보).
- **Pages updated (meta)**: `index.md` (journal 12→13, total 74→75), `overview.md` (최근 작업 갱신), `log.md` (이 항목).
- **Notes**: 2026-05-17이 memory/eval 층을 세분화했다면, 오늘 3편은 그 위에서 **하네스를 더 구체적인 연산자**로 본다. 좋은 하네스는 (1) 토큰 예산을 **시도 수**가 아니라 **시도당 사고 밀도**로 바꾸고, (2) skill을 raw context가 아니라 **compiled runtime artifact** 로 압축하며, (3) eval 단위를 bug/feature에서 **release-to-release roadmap** 으로 끌어올린다. 특히 Effective Harness Engineering의 **"stronger model → more evaluation hacks"** 는 최근 Anthropic식 단순화 서사에 중요한 역보정.

## [2026-05-17] weekly-review-followup | memory taxonomy로 중복 압축 + 주간 압축 메모 반영

- **Review scope**: 최근 7일(2026-05-10 ~ 2026-05-17, America/Los_Angeles 기준) 동안 추가·수정된 `raw/`, `wiki/`, `journal/`을 다시 훑어 이번 주 지식이 어디서 겹치고 어디서 실제로 분화됐는지 점검.
- **Compression verdict**: 삭제할 중복 페이지는 없고, 가장 큰 겹침은 **memory 관련 내용이 `ai-memory-systems` / `agent-supply-chain-security` / `journal/2026-05-17` 에 분산된 상태**였음. 삭제 대신 **상위 비교 레이어**를 추가해 구조적으로 압축.
- **Pages created**:
  - `comparisons/agent-memory-taxonomy.md` — **task/productivity vs belief vs lifecycle vs safety memory** 분류. ZenBrain·GroupMemBench·BeliefMem·Human-Inspired Memory·MAGE를 한 표에서 연결.
- **Pages updated**:
  - `concepts/ai-memory-systems.md` — 상단에 "빠른 분류" 추가, safety memory까지 포함한 네 질문으로 memory 구조 재정리, 새 비교 페이지 링크 연결.
  - `concepts/agent-supply-chain-security.md` — MAGE/LITMUS 섹션에 taxonomy cross-link 추가, 이 페이지가 **safety memory** 담당임을 명시.
  - `journal/2026-05-17.md` — §4 "주간 압축 메모" 추가. 이번 주를 memory 분화 / eval 분화 / worldview 선명화 3축으로 재요약.
- **Pages updated (meta)**:
  - `index.md` — total 73→74, comparisons 8→9, 새 비교 페이지 등록, 최종 업데이트 문구 갱신.
  - `overview.md` — 최근 작업 항목에 weekly review follow-up 반영, 현재 상태 count 갱신.
  - `log.md` — 이 항목.
- **Preservation rule 준수**:
  - raw source 경로는 기존 페이지와 새 비교 페이지 모두에 유지.
  - BeliefMem / Human-Inspired Memory / MAGE 세부 설명은 기존 본문에 그대로 남김.
  - MAGE는 security 페이지에 남겨 **context drift** 를 막고, taxonomy는 비교만 담당하도록 분리.
- **Notes**: 이번 주 진짜 압축 포인트는 "새 논문이 많다"가 아니라 **memory라는 한 단어가 네 서브시스템으로 갈라졌다**는 점. 이 정리 덕분에 다음 주부터는 memory 관련 새 소스를 넣을 때 *representation / lifecycle / safety / productivity* 중 어디에 속하는지 먼저 분류할 수 있다.

## [2026-05-17] ingest-followup | Human-Inspired Memory(consolidation/forgetting) + FeatureBench(feature-level coding eval) + LITMUS(behavior jailbreak) — 일요 데일리 2차, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-17-human-inspired-memory-architecture.md` — Kerestecioglu et al., "Human-Inspired Memory Architecture for LLM Agents" (arXiv:2605.08538, 2026-05-08). **6 cognitive mechanisms**: sleep-phase consolidation / interference-based forgetting / engram maturation / reconsolidation / entity KG / hybrid multi-cue retrieval. **VSCode issue-tracking 13K issues / 120K events** 에서 **97.2% retention precision**, **58% store reduction**, baseline 대비 **+21.8 pp**. LongMemEval 475 sessions / ~540K turns, **200K-token budget 70.1% vs 71.2%**, S-tier preference recall **+13.3 pp**.
  - `raw/articles/2026-05-17-featurebench-agentic-coding-complex-features.md` — Zhou et al., "FeatureBench: Benchmarking Agentic Coding for Complex Feature Development" (arXiv:2602.10975, 2026-02-11). 기존 coding benchmark의 **single-PR bug-fix bias**를 넘겨, **feature-oriented end-to-end development**를 execution-based로 평가. **200 task / 3,825 executable environments / 24 repos**. Claude 4.5 Opus가 **SWE-bench 74.4%**인데도 FeatureBench에서는 **11.0%**.
  - `raw/articles/2026-05-17-litmus-behavioral-jailbreak-os-agents.md` — Chiyu Zhang et al., "LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments" (arXiv:2605.10779, 2026-05-11). **semantic-physical dual verification + OS-level state rollback**. **819 high-risk test cases**, 공격 패러다임 3종(**jailbreak speaking / skill injection / entity wrapping**). 핵심 발견: **Execution Hallucination (EH)** — 거부 텍스트와 실제 위험 행동이 분리. strong model 예시 **Claude Sonnet 4.6도 40.64% high-risk operation 실행**.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/ai-memory-systems.md` — "2026-05-17 보강 — Human-Inspired Memory: consolidation·forgetting까지 설계하기" 섹션 추가 (6 mechanisms + store-size/accuracy trade-off + ZenBrain·GroupMemBench·BeliefMem과의 관계 + ROI 3개). frontmatter sources/tags 갱신.
  - `concepts/llm-evaluation.md` — "2026-05-17 보강 — FeatureBench" + "2026-05-17 보강 — LITMUS" 두 섹션 추가 (feature-development eval layer + OS-state safety eval + ROI). frontmatter sources/updated/tags 갱신.
  - `concepts/agent-supply-chain-security.md` — "2026-05-17 보강 — LITMUS" 섹션 추가 (skill injection·entity wrapping·Execution Hallucination·Tier 모델의 state-audited 확장). frontmatter sources/tags 갱신.
  - `journal/2026-05-17.md` — 같은 날짜 일지에 **late follow-up (§3)** 추가. title/sources/tags/related 갱신.
- **Pages updated (meta)**: `index.md` (같은 날짜 journal 설명 확장 + 최종 업데이트 문구 갱신), `overview.md` (최근 작업 2차 ingest 반영), `log.md` (이 항목).
- **Notes**: 오전 3편이 2x3 좌표계의 **빈 칸**을 채웠다면, 이번 3편은 그 칸 안의 **운영 규칙과 평가 장비**를 채운다. memory는 이제 **representation(BeliefMem) / lifecycle(Human-Inspired Memory) / safety(MAGE)** 로 더 분해되고, coding eval은 **bug-fix vs feature-development** 를 분리해야 하며, safety는 refusal text가 아니라 **state diff** 로 봐야 한다.

## [2026-05-17] ingest | Agentic AI Survey(symbolic vs neural) + BeliefMem(probabilistic memory) + MAGE(shadow memory guardrail) — 일요 데일리, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-17-agentic-ai-survey-dual-paradigm.md` — Mohamad Abou Ali · Fadi Dornaika, "Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions" (arXiv:2510.25445, 2025-10-29). **PRISMA 90-study** review (2018–2025). dual-paradigm framework: **Symbolic/Classical**(algorithmic planning, persistent state) vs **Neural/Generative**(stochastic generation, prompt-driven orchestration). healthcare는 symbolic 쪽, finance는 neural 쪽이 더 자연스러운 경향. research gap: **symbolic governance 부족 + hybrid neuro-symbolic 필요**. → 2x3 좌표계 **(descriptive, 학습)** 칸 충당.
  - `raw/articles/2026-05-17-belief-memory-partial-observability.md` — Junfeng Liao · Qizhou Wang · Jianing Zhu · Bo Du · Rui Yan · Xiuying Chen, "Belief Memory: Agent Memory Under Partial Observability" (arXiv:2605.05583, 2026-05-07). observation마다 단일 결론을 저장하는 deterministic memory 대신 **candidate conclusion + probability**를 유지하는 **BeliefMem** 제안. **Noisy-OR** 업데이트. **LoCoMo / ALFWorld**에서 제한된 데이터 조건에도 best average performance, baseline 대비 큰 개선. → **(prescriptive, 학습)** 칸 충당.
  - `raw/articles/2026-05-17-mage-shadow-memory-long-horizon-threats.md` — Yuhui Wang · Tanqiu Jiang · Jiacheng Liang · Charles Fleming · Ting Wang, "MAGE: Safeguarding LLM Agents against Long-Horizon Threats via Shadow Memory" (arXiv:2605.03228, 2026-05-04). long-horizon threat 대응용 **Memory As Guardrail Enforcement**. 시스템 보안의 shadow stack처럼 **safety-focused shadow memory**를 별도 유지하고 action 직전 risk assess. HTML 본문 기준 AgentDojo **Banking / Slack** suite 사용. 결과: detection accuracy 향상, **majority early-stage detection**, utility overhead 미미. → **(prescriptive, 측정)** 칸 충당.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/agentic-engineering.md` — "2026-05-17 보강 — Agentic AI Survey: Symbolic vs Neural 두 계보로 다시 보기" 섹션 추가 (dual-paradigm 표 + PRISMA 90-study + domain-paradigm 매핑 + hybrid 의미 + 1인 개발자 ROI 3개). frontmatter sources/updated/tags 갱신.
  - `concepts/ai-memory-systems.md` — "2026-05-17 보강 — BeliefMem: Partial Observability에서 memory를 belief state로" 섹션 추가 (deterministic vs probabilistic memory 표 + GroupMemBench와의 짝 + ZenBrain과의 관계 + ROI 3개). frontmatter sources/updated/tags 갱신.
  - `concepts/agent-supply-chain-security.md` — "2026-05-17 보강 — MAGE: long-horizon threat에 대한 shadow memory guardrail" 섹션 추가 (dual-LLM/Brain-Hands/Tier 모델과의 차이 + trajectory 감시형 방어 + safety memory 해석 + ROI 3개). frontmatter sources/updated/tags 갱신.
- **Pages created**:
  - `journal/2026-05-17.md` — 일요 데일리 일지 (남은 3칸 채우기, 2x3 좌표계 9/9 완성, epistemic memory vs safety memory 구분, 자율 결정 사항, 다음 후보).
- **Pages updated (meta)**: `index.md` (journal 11→12, total 72→73, counts 정정), `overview.md` (최근 작업 갱신), `log.md` (이 항목), `CLAUDE.md` (최근 활동/다음 할 일).
- **Notes**: 2026-05-14에 생긴 2x3 좌표계(descriptive/prescriptive/tooling × 학습/정형화/측정)가 2026-05-15에 6/9까지 채워졌고, 오늘 마지막 3칸이 모두 채워져 **9/9 완성**. 특히 memory가 하나의 기능이 아니라 **belief memory**(BeliefMem)와 **safety memory**(MAGE)로 갈라진다는 해석이 새로 생김. Survey는 그 위에서 "우리가 다루는 agentic engineering은 neural/generative lineage 위에 있다"는 개념 경계를 다시 세워 줌.

## [2026-05-17] hygiene-review | 금요 리뷰 캐치업 + 위키/Git 경계 정리

- **Review scope**: 이번 주 금요 정리 누락분을 점검. 실질 지식 리뷰는 이미 `journal/2026-05-15.md`에 존재함을 재확인했고, 오늘은 그 결과를 바탕으로 **운영 경계**를 명문화했다.
- **Weekly review verdict**: 2026-05-12 ~ 2026-05-15의 핵심 축은 그대로 유지. 중복 압축 후보(Wei↔Zhong/Zhu, verifier 3종↔structural verifier, ZenBrain↔GroupMemBench, 4일 연속 일지 메타)는 모두 **링크/근거 보존 우선** 원칙 유지.
- **Rules updated**: `CLAUDE.md`에 "위키 포함/제외 규칙" 신설.
  - `wiki/`, `raw/`, `templates/`, `CLAUDE.md` = 지식 본체
  - `examples/` = 위키 본문이 아닌 보조 artifact (Git 추적 가능)
  - `.obsidian/`, `.claude/`, `.bkit/` = 로컬 상태 (지식 본문 아님)
- **Git hygiene**: `.gitignore`에 `.claude/`, `.obsidian/plugins/`, `.obsidian/hotkeys.json` 추가. Dataview 플러그인 설치물 3개는 Git 추적 대상에서 제거하여 로컬 설치물과 저장소 산출물을 분리.
- **Meta note**: 앞으로 `examples/`는 위키에서 링크할 수는 있지만 `index.md`의 total pages에 포함하지 않는다.

## [2026-05-15] ingest+weekly-review | ACDL(context 표기) + Constraint Decay(백엔드 코드) + GroupMemBench(multi-party memory) — 금요 데일리 + 주간 리뷰, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-15-acdl-context-description-language.md` — Peleg Pelc · Kaminka · Goldberg, "A Language for Describing Agentic LLM Contexts" (arXiv:2605.01920, 2026-05-03, CAIS '26 채택). ACDL 4 구성: role-message sequence / dynamic content / time-indexed reference / conditional·iterative. 손그림과 정형 코드 양매체 동의미. 프로젝트: <http://www.acdlang.org>. → 2x3 좌표계 **(tooling, 정형화)** 칸 충당.
  - `raw/articles/2026-05-15-constraint-decay-backend-code-fragility.md` — Dente · Satriani · Papotti (EURECOM), "Constraint Decay: The Fragility of LLM Agents in Backend Code Generation" (arXiv:2605.06445, 2026-05-07). 100 task (80 greenfield + 20 feature) × 8 framework × unified API contract. Capable config **−30 points** (baseline → fully specified), 약한 config ≈ 0 수렴. **Flask 강함 / FastAPI · Django 약함**. Root cause 1순위: data-layer defect (ORM/query). → **(descriptive, 측정)** 칸 충당.
  - `raw/articles/2026-05-15-groupmembench-multi-party-memory.md` — Yang et al. (6명), "GroupMemBench: Benchmarking LLM Agent Memory in Multi-Party Conversations" (arXiv:2605.14498, 2026-05). 최강 메모리 시스템 **46.0%**, knowledge update **27.1%**, term ambiguity **37.7%**, 단순 **BM25가 대부분의 agent memory system 매치 또는 능가**. 6 question category × adversarial query × graph-grounded synthesis. 3 unmeasured 속성: group dynamics / speaker-grounded belief / audience-adapted language. → **(tooling, 측정)** 칸에 WildClawBench와 직교 도메인(memory) 측정 추가.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/context-engineering.md` — "2026-05-15 보강 — ACDL (Agentic Context Description Language)" 섹션 추가 (4 구성 × 본 위키 매핑 표 + Mise en Place·GROUNDING.md와의 짝 + 1인 ROI 3개 + 한계 + 2x3 좌표계 갱신). frontmatter sources/updated/tags 갱신.
  - `patterns/ai-code-review.md` — "2026-05-15 보강 — Constraint Decay (Functional + Structural Dual Evaluation)" 섹션 추가 (정량 표 + Plan-Review-Execute에 **Phase 2.5 Structural Verify** 끼우기 + Framework AI-friendliness 표 + 본 위키와의 짝 + 한계). frontmatter sources/updated/tags 갱신.
  - `concepts/ai-memory-systems.md` — "2026-05-15 보강 — GroupMemBench: Multi-Party Memory 측정" 섹션 추가 (정량 표 + 3 unmeasured 속성 + ZenBrain과의 짝 + 1인 ROI 3개 + 한계). frontmatter sources/updated/tags 갱신.
- **Pages created**:
  - `journal/2026-05-15.md` — 금요 데일리 + 주간 리뷰 (§1 데일리: 3 source + 한 그림; §2 주간 리뷰: 4일 layer 사다리 합치기 + 2x3 좌표계 6/9 채움 + 압축 4건 검토(모두 *그대로 유지* 결정) + self-declared prediction 검증·신규 + 자율 결정 사항 + next-week rotate).
- **Pages updated (meta)**: `index.md` (journal 10→11, total 71→72), `log.md` (이 항목), `CLAUDE.md` (최근 활동).
- **Notes**: 금요라 *데일리 + 주간 리뷰*를 한 글에 묶음. 4일 연속(05-12 / 05-13 / 05-14 / 05-15) 같은 한 문장(*"model alone is not enough — engineer the layer above"*) 위에 layer가 매일 한 칸씩 위로 — 12: 모델 *아래* / 13: 출력 *직전* / 14: 모델 *위* / 15: layer를 *적고/재고/재단*. 9칸 2x3 좌표계 중 6칸 채움 (한 주 시작 1칸 → 끝 6칸), 남은 3칸: (descriptive, 학습) / (prescriptive, 학습) / (prescriptive, 측정). **압축 작업 4건 검토**: (1) Wei 5 dim ↔ Zhong/Zhu 11 책임 — [[concepts/harness-engineering]]에 이미 비교 표 존재, 그대로 유지. (2) 3 도메인 verifier에 *structural* 4번째 추가하는 표 갱신은 over-add 회피로 *journal에만* 명시. (3) ZenBrain ↔ GroupMemBench는 처방·측정 짝이라 압축하면 한 쪽 사라짐, 그대로 유지(cross-link만 추가). (4) 4일 일지 메타 페이지 신설은 1주 표본 작아 보류 (4주 누적 시 재검토). **위키 본문/링크는 한 줄도 삭제되지 않음** — Task 요구사항 "꼭 없어 지지 않도록 한다" 준수. **자율 결정 사항**(사용자 부재): 3편 선택은 "어제 좌표계의 *빈 칸 3개*를 정확히 채우는 조합"으로 ACDL/Constraint Decay/GroupMemBench. Agentic AI Survey 2510.25445는 descriptive-학습 축이 여전히 비어 있어 다음 주(05-19)로 이월. WebFetch rate limit으로 GroupMemBench는 abstract만 확보, raw 파일에 한계 명시. 어제 prediction(harness-as-variable in eval 6대장)은 *약하게 살아 있음* — Constraint Decay의 dual evaluation이 간접 증거. **오늘 새 prediction**: 향후 4주 내 Django/FastAPI/Flask 중 적어도 하나가 *AI-coding-friendliness 가이드*를 공식/community-blessed로 release. 검증은 2026-05-22 weekly review.

## [2026-05-14] ingest | Above-the-Model Layer — Zhang(RL orchestration traces) + Zhong/Zhu(11 책임 runtime substrate) + WildClawBench(long-horizon 천장) — 목요 데일리, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-14-rl-multiagent-orchestration-traces.md` — Chenchen Zhang, "Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces" (arXiv:2605.02801, 2026-05-04). 3 기술 축: 8 reward family(+orchestration reward: parallelism speedup·split correctness·aggregation quality) / 8 credit unit(token→team, **message-level counterfactual credit sparse**) / 5 sub-decision(spawn/delegate/communicate/aggregate/stop, **stopping decision RL training 0건 as of May 4, 2026**). 산업 평행: Kimi Agent Swarm·OpenAI Codex·Anthropic Claude Code (학술 검증 아님, scale gap). Artifact: 84-entry tagged pool + 32-record exclusion log + **replayable orchestration trace JSON schema** (<https://github.com/xxzcc/awesome-llm-mas-rl>).
  - `raw/articles/2026-05-14-ai-harness-engineering-runtime-substrate.md` — Hailin Zhong & Shengxin Zhu, "AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents" (arXiv:2605.13357, 2026-05-13). Thesis: **"Capability emerges from model-harness-environment system"**. **11 component responsibilities**: task spec · context selection · tool access · project memory · task state · observability · failure attribution · verification · permissions · entropy auditing · intervention recording. Wei 5 dimension(2026-04-20)과 비교 시 *3 책임이 증분*: failure attribution / entropy audit / intervention recording.
  - `raw/articles/2026-05-14-wildclawbench-real-world-long-horizon.md` — InternLM, "WildClawBench: A Benchmark for Real-World, Long-Horizon Agent Evaluation" (arXiv:2605.10912v1, 2026-05-11). **60 task** (EN 36 + CN 24, multimodal 26 + text 34), 평균 ~8분 wall-clock + 20+ tool calls, Docker 격리, 실제 CLI 하네스 4종(OpenClaw·Claude Code·Codex·Hermes). **Hybrid grading**: rule-based check + env-state auditing + LLM/VLM judge. **19 frontier model — Best Opus 4.7 = 62.2%, 다른 모든 모델 < 60%**. 코드: <https://github.com/InternLM/WildClawBench>.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/ai-orchestration.md` — "2026-05-14 보강 — Orchestration as RL Target (Zhang, 2026-05-04)" 섹션 추가 (5 sub-decision × 학습 상태 표 + 8 reward family + message-level counterfactual 공백 + JSON schema 1인 ROI 3개). frontmatter sources/updated/tags 갱신.
  - `concepts/harness-engineering.md` — "2026-05-14 보강 — Runtime Substrate: 11 Component Responsibilities (Zhong & Zhu)" 섹션 추가 (11 책임 × 본 위키 매핑 표 + Wei vs Zhong/Zhu 비교 표 + 어제 verification-gated와의 관계 + 즉효 ROI 3개). frontmatter sources/updated/tags 갱신.
  - `concepts/llm-evaluation.md` — "2026-05-14 보강 — WildClawBench: Real-World Long-Horizon 천장" 섹션 추가 (구성·grading 표 + 정량 + Eval 3 layer 재정렬 표(judge / single output / trace) + 1인 ROI 3개). frontmatter sources/updated/tags 갱신.
- **Pages created**:
  - `journal/2026-05-14.md` — 목요 데일리 일지 ("Above-the-Model Layer" 3시점 프레임, 4일 연속 layer 이야기 표(05-12 모델 아래 → 05-13 출력 직전 → 05-14 모델 위), Wei/Zhong-Zhu vs Zhang/WildClawBench 2x3 좌표계 빈칸 매핑, 자율 결정 사항, self-declared prediction).
- **Pages updated (meta)**: `index.md` (journal 9→10, total 70→71), `log.md` (이 항목), `CLAUDE.md` (최근 활동).
- **Notes**: 4일 연속 같은 한 문장으로 묶임 — *"model alone is not enough — engineer the layer above"*. 다루는 layer가 한 칸씩 위로: 05-12 모델 *아래*(workflow 입구·eval 뒤·invocation 위) → 05-13 출력 *직전*(verification gate, 3 도메인) → 05-14 모델 *위*(학습·정형화·측정). 오늘 3편이 2x3 좌표계(*descriptive/prescriptive/tooling × 학습/정형화/측정*)에서 어디를 채우는지 명시: Zhong/Zhu = (prescriptive, 정형화), WildClawBench = (tooling, 측정), Zhang = (tooling, 학습) — 4개 빈 칸이 후속 후보로 자동 식별됨. **자율 결정 사항**(사용자 부재): Survey(arXiv 2510.25445)는 금요 weekly review용으로 계속 reserve, 오늘은 fresh May 2026 source 3편(05-04/05-11/05-13) 선택. WebFetch rate limit으로 Zhong/Zhu와 WildClawBench는 full PDF 미확보 — abstract+search snippet 수준으로 ingest하고 raw·wiki에 *한계 명시*. 신규 책임 페이지(failure attribution·entropy audit·intervention recording) 신설은 single-source 한계로 보류 — multi-source 누적 시 재검토. `comparisons/agent-eval-frameworks.md` 갱신도 카테고리 혼합 회피로 보류, 대신 `llm-evaluation.md` 본문에 *3 layer 재정렬 표*로 처리. 어제 self-declared prediction(judge reliability가 eval 프레임워크 글에 표준 항목)에 대해 WildClawBench hybrid grading이 *간접 증거*(judge를 셋 중 하나로 격하)만 제공, 강한 조건 미확인 — 금요 weekly review에서 lint 후보. 오늘 새 self-declared prediction: 향후 2주 내 eval 프레임워크 6대장 중 하나가 *harness-as-variable* 메뉴 노출. 상세는 `journal/2026-05-14.md` 하단.

## [2026-05-13] ingest | 출력 직전 게이트 — GSAR(text) + Verify Before You Fix(code) + Affordance Agent Harness(embodied) — 수요 데일리, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-13-gsar-typed-grounding-multiagent.md` — Kamelhar (Oracle), "GSAR: Typed Grounding for Hallucination Detection and Recovery in Multi-Agent LLMs" (arXiv:2604.23366, 2026-04-25). 4-way claim typology(Grounded/Ungrounded/Contradicted/Complementary), evidence-weighted score + **asymmetric contradiction penalty**, **3-tier decision**(proceed/regenerate/replan), bounded outer loop. FEVER + gold Wikipedia evidence, 4 judge(gpt-5.4 / sonnet-4-6 / opus-4-7 / gemini-2.5-pro). **GSAR default 100 vs binary 35 proceed = +185%**, weighted 16/50→18/50, contradiction-penalty ablation으로 asymmetric design 입증, 6 structural properties proof.
  - `raw/articles/2026-05-13-verify-before-you-fix-execution-grounding.md` — Gajjar (GWU), "Verify Before You Fix" (arXiv:2604.10800v1, 2026-04-12). 3-stage: hybrid structural-semantic detection(uAST + GraphSAGE + Qwen2.5-Coder-1.5B, two-way gating) → execution-grounded agentic validation → validation-aware iterative repair. **Strict invariant: "no repair without execution-confirmed exploitability"**. Java/Python/C++ cross-language via uAST. Framing: probabilistic inference ≠ verified conclusion → compounding failure 방지.
  - `raw/articles/2026-05-13-affordance-agent-harness-verification-gated.md` — "Affordance Agent Harness: Verification-Gated Skill Orchestration" (arXiv:2605.00663, 2026-05-01). Evidence Store + adaptive Router + Episodic Memory + Verification Gate + Cost Control. **Verifier가 단순 score 대신 "무엇이 missing"인지 actionable diagnostic 출력**. Open-world embodied scene 도메인. (주의: WebFetch rate limit으로 abstract+검색결과만 확보, 본문 정독은 다음 데일리.)
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/harness-engineering.md` — "2026-05-13 보강 — Verification-Gated Harness, 3-도메인 매핑" 섹션 추가 (text/code/embodied 게이트 비교 표 + Wei 5 dimension mapping + 3 즉효 ROI). frontmatter sources/updated/tags 갱신.
  - `concepts/context-rot-hallucination.md` — "2026-05-13 보강 — Typed Grounding (GSAR)" 섹션 추가 (4-way claim typology + 3-tier decision + FEVER 정량 + JRH 짝). frontmatter sources/updated/tags 갱신.
  - `patterns/ai-code-review.md` — "2026-05-13 보강 — Execution Grounding (Verify Before You Fix)" 섹션 추가 (3-stage pipeline + Plan-Review-Execute 3.5 verifier 확장 + 한계). frontmatter sources/updated/tags 갱신.
- **Pages created**:
  - `journal/2026-05-13.md` — 수요 데일리 일지 ("Verification-Gated Action" 3-도메인 프레임, 자율 결정 사항, 다음 후보, self-declared prediction).
- **Pages updated (meta)**: `index.md` (journal 8→9, total 69→70), `log.md` (이 항목), `CLAUDE.md` (최근 활동).
- **Notes**: 어제(2026-05-12 *모델 아래 세 레버*)가 workflow 입구/eval 뒤/invocation 위였다면 오늘 3편은 한 칸 더 내려가 **출력 직전 게이트**를 도메인별로 잠근다. 공통 구조: `Model 출력 → Evidence Store → Verifier → {proceed | regenerate | replan} → bounded retry`. 차이는 evidence 종류 — text(Wikipedia gold)·code(execution trace)·embodied(skill outputs + prior). GSAR의 4-judge consensus는 어제 JRH "단일 judge unreliable" 결과의 자연스러운 운영적 대응. **자율 결정 사항**(사용자 부재): 어제 명시된 후보 풀(GSAR/VBYF/Survey) 중 Survey는 금요 weekly review용으로 reserve, 대신 fresh May 2026 source인 Affordance Agent Harness(2605.00663)를 embodied 도메인 generalize용으로 추가. add-only 원칙 유지, 기존 본문·링크 무수정. 신규 패턴 페이지 신설 보류(3 도메인 single source씩이라 일반화 이르다). A-Harness raw는 abstract 기반, 본문 정독 후 update 가능. 어제 self-declared prediction(judge reliability가 eval 프레임워크 글에 표준 항목으로 등장)은 *간접 증거*(GSAR multi-judge)만 확보, 강한 조건 미확인 — 다음 데일리에서 lint check 후보. 상세는 `journal/2026-05-13.md` 하단.

## [2026-05-12] ingest | 모델 아래 세 레버 — MEP(preparation) + JRH(judge reliability) + GROUNDING.md(field-scope) — 화요 데일리, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-12-mise-en-place-agentic-coding.md` — Zigler (LinearB), "Mise en Place for Agentic Coding: Deliberate Preparation as Context Engineering Methodology" (arXiv:2605.05400, 2026-05-06). 3-phase preparation (Contextual Grounding / Collaborative Specification / Task Decomposition), **Context Fluency**(4 components) = 새로운 개발자 skill. Hackathon: 9,386 단어 / 64 beads → 8,496 LOC / median **5.9 min/bead**, planning-to-code **1.10:1**, prep-to-execute **5.7:1**, architectural rework ≈ 0.
  - `raw/articles/2026-05-12-judge-reliability-harness-rand.md` — Dev et al. (RAND), "Judge Reliability Harness" (arXiv:2603.05399, 2026-03-05). 4 judge × 4 benchmark × 8 perturbation. **어떤 judge도 universally reliable 아님.** Format perturbation > semantic perturbation drop. Llama 4 Maverick 17B가 cost-reliability sweet spot ($0.0010/accuracy point, Sonnet 4.5의 1/22). AgentHarm asymmetric failure (Opus 4.5 FN 31.3%, Gemini 2.5 Pro FP 25%). 코드: <https://github.com/RANDCorporation/judge-reliability-harness>.
  - `raw/articles/2026-05-12-grounding-md-epistemic-agentic.md` — Palmblad, Ragland, Neely, "Epistemic Grounding via GROUNDING.md" (arXiv:2604.21744). Project/Method-scope 위에 **Field-scope, community-governed** GROUNDING.md 제안. **Hard Constraints가 user prompt를 override한다.** Mass spectrometry-based proteomics 예시.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/context-engineering.md` — "2026-05-12 보강 — Mise en Place (MEP) & Context Fluency" 섹션 추가 (3-phase 표 + Context Fluency 4 components + Hackathon 정량 + [[journal/2026-05-02]] Google 17.2x vs 4.4x와 대비). frontmatter sources/updated/tags 갱신.
  - `concepts/llm-evaluation.md` — "2026-05-12 보강 — Judge Reliability Harness (RAND)" 섹션 추가 (5 perturbation family 표 + 정량 표 4건 + 1인 개발자 ROI 4개 + [[comparisons/agent-eval-frameworks]] 한 layer 아래 cross-link). frontmatter sources/updated/tags/related 갱신.
  - `patterns/claude-md-guide.md` — "2026-05-12 보강 — GROUNDING.md (Field-Scoped Epistemic Grounding)" 섹션 추가 (Scope 계층 표 + 우선순위 역전 + 본 위키 적용 후보 단락). frontmatter sources/updated/tags/related 갱신.
- **Pages created**:
  - `journal/2026-05-12.md` — 화요 데일리 일지 (3소스 종합, "모델 아래 세 레버" 프레임, 자율 결정 사항, 다음 후보, self-declared prediction).
- **Pages updated (meta)**: `index.md` (journal 7→8, total 68→69), `log.md` (이 항목), `CLAUDE.md` (최근 활동).
- **Notes**: 세 편 모두 "agent 자율성을 어디서 잠가야 reliability가 생기나"라는 같은 질문을 다른 layer에서 답한다 — MEP는 workflow 입구, JRH는 eval 뒤, GROUNDING.md는 invocation 위. 이전 PM 인제스트([[journal/2026-05-06-pm|CAAF]])가 "H를 incorruptible asset으로 잠가라"였다면 오늘 3편은 그 정신을 세 layer로 분산 적용한 것. **자율 결정 사항**(사용자 부재): MEP/JRH/GROUNDING 3편 선택은 "위키 빈 자리 채우기 + 공통 주제 형성 + 정량 데이터"를 만족 (GSAR/Verify Before You Fix/Survey는 다음 데일리로). MEP 패턴 페이지 신설은 single-case study limitation으로 보류, multi-team replication 논문 나오면 검토. JRH는 [[comparisons/agent-eval-frameworks]] 7번째 행으로 넣지 않고 *한 layer 아래* cross-link로 처리 (카테고리 혼합 회피). 본 위키 GROUNDING.md 적용은 *제안만*, 실행은 사용자 확인 필요. WebFetch rate limit으로 세 번째 소스는 abstract만 확보 — `published: 2026-04 (approx)`로 불확실성 명시. 상세는 `journal/2026-05-12.md` 하단.

## [2026-05-06 PM] ingest | 하네스 연구 3좌표축 (Descriptive · Prescriptive · Tooling) — 수요 PM 후속, 자동 인제스트

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-06-pm-architectural-decisions-agent-harnesses.md` — Wei, "Architectural Design Decisions in AI Agent Harnesses" (arXiv 2604.18071, 2026-04-20). 70-project empirical study. **5 design dimensions** (subagent / context / tool / safety / orchestration), **5 architectural patterns**. file-persistent hybrid context **27.1% modal**, registry-based tool **34.3% > MCP 14.3% (emerging)**, container-isolation ↔ structured approval **lift 3.4**.
  - `raw/articles/2026-05-06-pm-caaf-deterministic-harness.md` — Tianbao Zhang, "Harness as an Asset: CAAF" (arXiv 2604.17025, 2026-04-18). **Anti-evolution**: H를 진화시키지 말고 incorruptible asset으로 잠가라. RAD + HaaA + UAI + State Locking. L3 자율주행 paradox detection **30/30 vs monolithic GPT-4o no-hint 0/30**, multi-agent baseline (debate/sequential) 80 trial **모두 0%**.
  - `raw/articles/2026-05-06-pm-meta-harness-stanford.md` — Lee et al. (Stanford·KRAFTON·MIT), "Meta-Harness" (arXiv 2603.28052, 2026-03-30). **Filesystem-as-memory**: coding-agent proposer가 grep/cat으로 prior 후보 inspect, **10 MTok/iter** (기존 0.002–0.026의 3 orders of magnitude up). 텍스트 분류 ACE 대비 **+7.7 points / 4× fewer tokens**, IMO math **+4.7 points (5 모델 평균)**, **TerminalBench-2 #1 (Haiku 4.5 부문)**.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/harness-engineering.md` — "2026-05-06 PM 보강 — 하네스 연구의 세 좌표축" 섹션 추가 (Descriptive/Prescriptive/Tooling 3축 표 + Wei 5 dimensions × CAAF 4 컴포넌트 매핑 + Meta-Harness vs 기존 text optimizer 비교 표 + 오전 3편과 합친 1년 지도). frontmatter sources에 raw 3건 추가만.
- **Pages created**:
  - `journal/2026-05-06-pm.md` — PM 후속 일지 (3소스 종합, 자율 결정 사항, 다음 후보).
- **Pages updated (meta)**: `index.md` (journal 6→7, total 67→68), `log.md` (이 항목), `CLAUDE.md` (최근 활동).
- **Notes**: 오전 3편(자동 진화 + 관측 + 시장)과 오후 3편(taxonomy + determinism + tooling)을 합치면 6편이 한 그림 — *자동 진화 라인(상단)*과 *결정적 잠금 라인(하단)*이 직교한다. Last Harness/AHE/Meta-Harness가 "H를 똑똑하게 만든다"면, CAAF는 "H를 신뢰 가능하게 만든다". 안전-크리티컬에서는 둘이 합쳐져야 함. **두 번째 정량 근거**(첫 번째: Google 2026-05-02 17.2x vs 4.4x)로 오케스트레이션 단독으로 reliability gap이 안 닫힌다(CAAF 80 trial 0%)가 들어옴. **자율 결정 사항**(사용자 부재): 세 번째 소스로 Affordance Agent Harness/SemaClaw/NL Agent Harnesses 대신 Meta-Harness 선택 (자동 진화 라인 마무리), journal은 별도 파일(`-pm.md`) 분리(2026-05-01-backfill 선례), comparison 페이지 신설은 다음 데일리 트리거까지 보류, 다른 페이지 보강은 over-engineering 회피로 손대지 않음. 상세는 `journal/2026-05-06-pm.md` 하단.

## [2026-05-06] ingest | 자동 하네스 진화 두 편(arXiv) + Anthropic 2026 Agentic Coding Trends (수요 데일리, 자동 인제스트)

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-06-anthropic-agentic-coding-trends-report.md` — Anthropic 2026 Agentic Coding Trends Report (PDF). 8 트렌드 / 3 카테고리. 60%/0–20% 격차, AI-assisted work의 27%는 이전엔 안 했을 일, Cowork 명시 호명.
  - `raw/articles/2026-05-06-last-harness-meta-evolution.md` — Seong et al., "The Last Harness You'll Ever Build" (arXiv 2604.21003, 2026-04-22). 2-Level 메타 진화: L1 Worker/Evaluator/Evolution + L2 진화 프로토콜 `Λ` 자체를 task 간에 메타-학습.
  - `raw/articles/2026-05-06-agentic-harness-engineering-observability.md` — "Agentic Harness Engineering" (arXiv 2604.25850). 3 observability pillars (component / experience / decision). Terminal-Bench 2 pass@1 69.7%→77.0% in 10 iter, 사람 SOTA(Codex-CLI 71.9%) 능가.
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/harness-engineering.md` — "2026-05-06 보강 — 자동 하네스 진화 (Self-Evolving Harness)" 섹션 추가. 2-Level 표 + 3-Pillar 표 + Anthropic Trend 2/3/4 매핑.
  - `concepts/gen-ai-observability.md` — "2026-05-06 보강 — Agent Design-Level Observability (AHE)" 섹션 + 인프라 레벨 / agent design 레벨 분리 표 + Datadog 보강과의 짝.
- **Pages created**:
  - `journal/2026-05-06.md` — 수요 데일리 일지 (3소스 종합).
- **Pages updated (meta)**: `index.md` (journal 5→6, total +1), `log.md`, `CLAUDE.md` (최근 활동).
- **Notes**: 같은 시점 두 arXiv가 일부러 짝으로 읽어야 함 — Last Harness가 자동 진화 약속을 내고, AHE가 그 약속이 trial-and-error로 안 무너지는 관측 디자인을 낸다. Anthropic 보고서가 그게 1년 동안 시장 트렌드라고 못박는다. **"H 자체가 변수다 → Λ도 변수다"**가 새 추상화 — 우리 위키의 [[patterns/harness-engineering-casebook]] 매트릭스가 자연스러운 `Λ` 학습 데이터 후보. 즉효 ROI: ingest log에 *self-declared prediction* 필드 한 줄 추가 → 모든 edit이 falsifiable contract. 자동 인제스트(`ai-news` 스케줄러), 사용자 부재 상태 자율 결정 사항은 `journal/2026-05-06.md` 하단 메모 참조. 기존 본문·링크 변경 없음.

## [2026-05-03] ingest | MS Agent Framework 1.0 + Datadog State of AI Engineering + ZenBrain 7-계층 메모리 (일요 데일리)

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-03-microsoft-agent-framework-v1.md` — Microsoft Agent Framework 1.0 GA (2026-04-03, .NET·Python, MIT) — Semantic Kernel + AutoGen 통합, 5 오케스트레이션 패턴(sequential/concurrent/handoff/group chat/Magentic-One), MCP·A2A 1차 지원, Claude Code SDK / GitHub Copilot SDK as harness
  - `raw/articles/2026-05-03-datadog-state-of-ai-engineering-2026.md` — Datadog 1,000+ 고객 트레이스 7대 사실 (70%+ 3+ 모델, 프레임워크 채택 1년에 2배, 시스템 프롬프트 입력 토큰 69% / caching 28%만 활용, rate limit이 실패 모드 1위, 에이전트 59%는 단일 호출 모놀리식)
  - `raw/articles/2026-05-03-zenbrain-7-layer-memory.md` — ZenBrain (arXiv 2604.23878, 2026-04-26): 신경과학 영감 7계층 메모리 + 9 알고리즘 + 6 PMA 컴포넌트, Self/Autobiographical·Predictive 두 신축 추가
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/ai-orchestration.md` — "2026-05-03 보강 — Microsoft Agent Framework 1.0 (5 패턴) 매핑" 섹션 추가, 6대 패턴 ↔ MS 5 패턴 매핑 표
  - `concepts/gen-ai-observability.md` — "2026-05-03 보강 — Datadog 1,000+ 트레이스" 섹션 추가, 7대 사실 표
  - `concepts/ai-memory-systems.md` — "2026-05-03 보강 — ZenBrain 7-계층 + Predictive Memory" 섹션 + 참고 소스 2건 (ZenBrain + Memory survey)
- **Pages created**:
  - `journal/2026-05-03.md` — 일요 데일리 학습 일지 (3소스 종합)
- **Pages updated (meta)**: `index.md` (총 페이지 65→66, journal 4→5), `log.md`
- **Notes**: 세 글은 같은 시점의 다른 단면이다 — **표준화(MS 1.0) / 정량 진단(Datadog) / 다음 세대 모델(ZenBrain)**. 함류점: 인프라는 빠르게 굳고 있고, 운영 부채는 빠르게 쌓이고 있고, 메모리 모델은 한 단계 더 갈 곳이 명확하다. 1인 개발자 즉효 ROI 3가지 — caching prefix 정렬 / token·call budget / persona·forgetting 정책 명문화. 기존 본문·링크 변경 없음, frontmatter sources/updated만 갱신.

## [2026-05-02] ingest | 멀티 에이전트 정량 한계 + 3-에이전트 분리 + 6 레버 (토요 데일리)

- **Sources** (raw 3편 추가):
  - `raw/articles/2026-05-02-google-scaling-agent-systems.md` — Google Research, "Towards a Science of Scaling Agent Systems" (180 컨피그 통제 실험, alignment principle, 17.2x vs 4.4x 오류 증폭)
  - `raw/articles/2026-05-02-anthropic-three-agent-harness-infoq.md` — InfoQ 정리 + Anthropic 1차 출처 (Planner/Generator/Evaluator 3-에이전트, Playwright MCP 평가, 컨텍스트 리셋 + 핸드오프 아티팩트)
  - `raw/articles/2026-05-02-humanlayer-skill-issue-harness.md` — HumanLayer (CLAUDE.md/MCP/Skills/Sub-agents/Hooks/Back-pressure 6 레버 + ETH Zurich 138-agentfile + Chroma context rot 인용)
- **Pages updated** (추가만, 기존 본문 보존):
  - `concepts/harness-engineering.md` — "2026-05 보강 — 정량 근거·3-에이전트 분리·6 레버" 섹션 추가
  - `concepts/ai-orchestration.md` — "Alignment principle" 섹션 + 6대 패턴에 정량 매핑
  - `patterns/subagents-delegation.md` — "Context firewall" 섹션 + HumanLayer 안티패턴 정리
- **Pages created**:
  - `journal/2026-05-02.md` — 토요 데일리 학습 일지
- **Pages updated (meta)**: `index.md`, `overview.md`, `log.md`
- **Notes**: 세 글은 같은 결론을 다른 각도에서 본다 — 데이터(Google) / 장시간 세션 실전(Anthropic) / 운영자 6 레버(HumanLayer). 핵심 합류점: **오케스트레이터/Evaluator는 성능 booster가 아니라 validation bottleneck = 안전 컴포넌트**. 위키에 마침내 17.2x vs 4.4x 오류 증폭이라는 정량 근거가 들어왔다. 기존 페이지 본문·링크 변경 없음, frontmatter sources/updated만 갱신.

## [2026-05-01] deep-dive | Solo dev 라인 + 인터랙티브 비용 시뮬레이터 widget (저녁)

- **Sources** (raw 3편 추가, 총 19편):
  - `raw/articles/2026-05-01-1-person-saas-cost-deep.md` — Claude API 가격 (Haiku 4.5/Sonnet 4.6/Opus 4.7) + Senja·Rondot·Noosa 사례 + Modal/Daytona/Runloop 인프라 가격 + 1000+ 창업자 median 데이터
  - `raw/articles/2026-05-01-managed-vs-selfhost-breakeven.md` — 변곡점 정량 모델 `T × S = 25 × F`. 시나리오 A($80) / B($200) / C($500) 변곡점 표
  - `raw/articles/2026-05-01-mvp-stack-tools-2026.md` — 5대 영역 × 4 단계 매트릭스 + 단계별 budget + 의사결정 트리 + 채널 전략
- **Pages created (2개)**:
  - `wiki/patterns/agent-mvp-stack-2026.md` — 5대 영역 매트릭스 (에이전트 인프라 6번째 영역 추가) + 단계별 budget + 의사결정 트리 + 변곡점 + 사례 MRR + 채널 전략
  - `wiki/comparisons/agent-platforms-for-solo-dev.md` — Managed Agents / Deep Agents Deploy / OpenAI Agents SDK / LangGraph 직접 4종 1인 관점 비교
- **인터랙티브 widget 추가 (1개)**:
  - `examples/cost-simulator/index.html` (369줄) — Vanilla HTML+JS+CSS 단일 파일. 트래픽·세션 시간·모델·토큰량·인프라비·MRR 슬라이더 → Managed vs Self-host 월 비용 실시간 비교 + 변곡점 분석 + MRR 대비 비용 비율 라벨링 (healthy <30% / warn <60% / bad)
  - `examples/cost-simulator/README.md` — 보는 법, 가정·한계, 향후 확장 아이디어
- **Pages updated (2개)**:
  - `patterns/solo-product-strategy.md` — 단계 가이드를 후속 페이지로 분기 + 사례 MRR 현실 체크 (Senja·Rondot·Noosa) + 채널 패턴 추가
  - `patterns/ai-cost-management.md` — 2026-05 가격 표 갱신 (Opus 4.7 추가, fast mode 메모, output:input 일관 5x), 인터랙티브 시뮬레이터 링크
  - `wiki/index.md` (62→64), `wiki/log.md`(이 항목)
- **Notes**: 사용자 요청 "또 할 거 알려줘" → 옵션 4개 중 A 선택. Theme D(Solo dev)를 마지막으로 4개 라인 다 채움 — A(Managed/Deep Agents) ✓ B(Multi-agent) ✓ C(보안·eval) ✓ D(Solo dev) ✓. **처음으로 인터랙티브 HTML widget**까지 들어가서, 위키가 markdown 외에 실증 코드(dual-llm.ts) + 인터랙티브 도구(cost-simulator)까지 포함하는 자료집으로 진화. 사용자가 "내 트래픽 가정으로 변곡점 어디인지" 슬라이더 만져서 직접 답을 얻을 수 있게 됨.

## [2026-05-01] deep-dive | 보안·eval 라인 딥다이브 + dual-LLM 실증 코드 (오후 후반)

- **Sources** (raw 3편 추가, 총 16편):
  - `raw/articles/2026-05-01-dual-llm-camel-pattern.md` — [Simon Willison Dual LLM (2023)](https://simonwillison.net/2023/Apr/25/dual-llm-pattern/) + [Design Patterns for Securing LLM Agents (2025-06-13)](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/) + [DeepMind CaMeL — arXiv 2503.18813](https://arxiv.org/abs/2503.18813) 종합
  - `raw/articles/2026-05-01-owasp-asi-2026.md` — [OWASP Top 10 for Agentic Applications 2026 (ASI01-ASI10)](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
  - `raw/articles/2026-05-01-eval-frameworks-deep.md` — Inspect AI · Langfuse · RAGAS 추가 분석
- **Pages created (2개)**:
  - `wiki/concepts/agent-supply-chain-security.md` — 4 supply chain 표면 + Tier 0~3 신뢰 모델 + dual-LLM/CaMeL/Brain-Hands 매핑
  - `wiki/comparisons/agent-eval-frameworks.md` — 6 eval framework 풀 비교 + 결정 가이드 + 3 평가 전략 + 권장 조합
- **Pages updated (1개)**: `wiki/patterns/owasp-llm-typescript-mitigations.md` — agentic 확장 (ASI01~ASI10 매핑 표 + 6층 layered defense + dual-LLM/CaMeL 패턴 섹션 + 실증 코드 링크)
- **examples/ 코드 추가**: `examples/agent-safety-sketch/dual-llm.ts` — Vercel AI SDK 위 P-LLM(도구 사용) / Q-LLM(도구 0) 분리 minimal sketch. 이메일 본문에 prompt injection 심긴 시나리오에서 P-LLM 결정에 영향 안 가는지 직접 실행 가능. README도 dual-LLM 섹션 추가.
- **Notes**: 사용자 요청 "다른 것도 계속" 후 Theme C 딥다이브 채택. 위키에서 가장 약했던 보안 라인 강화. 처음으로 **examples/ 폴더에 실증 코드까지** 내려가 over-engineering 함정을 회피. CaMeL의 information flow integrity 같은 깊이는 sketch에 안 넣고 raw에만 정리(필요 시 다음 단계).

## [2026-05-01] big-backfill | Theme A 딥다이브 + B/C/D 백필 (오후 작업)

- **Sources** (raw 10편 신규):
  - 딥다이브 (Theme A — Managed/Deep Agents 플랫폼):
    - `raw/articles/2026-05-01-anthropic-managed-agents-launch.md` — [Claude Managed Agents 공식 발표 (2026-04-08)](https://claude.com/blog/claude-managed-agents)
    - `raw/articles/2026-05-01-anthropic-agent-skills.md` — [Anthropic Agent Skills (SKILL.md)](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
    - `raw/articles/2026-05-01-langchain-deep-agents-skills.md` — [Deep Agents + Skills (Lance Martin, LangChain)](https://www.langchain.com/blog/using-skills-with-deep-agents)
    - `raw/articles/2026-05-01-agents-md-spec.md` — [AGENTS.md 표준 (Linux Foundation, 60k+ 저장소)](https://agents.md)
  - 백필 B (멀티에이전트):
    - `raw/articles/2026-05-01-a2a-protocol-spec.md` — [A2A 프로토콜 스펙 (Google→Linux Foundation)](https://a2a-protocol.org/latest/specification/)
    - `raw/articles/2026-05-01-langchain-langgraph-1-0.md` — [LangGraph 1.0 stability (LangChain)](https://blog.langchain.com/langchain-langgraph-1dot0/)
  - 백필 C (보안·eval):
    - `raw/articles/2026-05-01-prompt-injection-defense-2026.md` — OWASP #1 + dual-LLM 패턴 + 6층 defense in depth (다출처 종합)
    - `raw/articles/2026-05-01-agent-eval-frameworks-2026.md` — DeepEval/LangSmith/Braintrust/Langfuse/Inspect AI/RAGAS 비교
  - 백필 D (solo dev) + 보너스:
    - `raw/articles/2026-05-01-solo-founder-ai-stack-2026.md` — 1인 창업자 2026 AI 스택 비용 모델
    - `raw/articles/2026-05-01-anthropic-advisor-strategy.md` — [Anthropic Advisor Strategy (2026-04-09)](https://claude.com/blog/the-advisor-strategy)
- **Pages created (4개)**:
  - `wiki/tools/managed-agents.md` — Claude Managed Agents 도구 페이지
  - `wiki/tools/deep-agents-deploy.md` — LangChain Deep Agents Deploy 도구 페이지
  - `wiki/comparisons/managed-vs-deep-agents.md` — 두 플랫폼 비교
  - `wiki/concepts/a2a-protocol.md` — A2A 프로토콜 개념
  - `wiki/journal/2026-05-01-backfill.md` — 오후 작업 일지
- **Pages updated (surgical, 6개)**:
  - `concepts/mcp.md` — MCP의 자매 표준 A2A 섹션
  - `concepts/ai-orchestration.md` — Advisor Strategy 7번째 패턴 + 4월 stability·플랫폼 진화
  - `comparisons/agent-frameworks.md` — 매니지드 플랫폼 두 종 행 + LangGraph 1.0 + A2A 채택
  - `patterns/solo-product-strategy.md` — 2026 5대 영역 비용 표 + Managed vs Self-host 변곡점
  - `patterns/ai-cost-management.md` — Managed 세션 단가 모델 + Advisor Strategy 라우팅 변형
  - `patterns/claude-md-guide.md` — CLAUDE.md ↔ AGENTS.md ↔ SKILL.md 가족 비교 표
  - `wiki/index.md` (총 페이지 55→60), `wiki/log.md`(이 항목)
- **Notes**: 사용자 직접 요청 — "2주 빠진 리서치 빡세게 채워 줘". 하이브리드 스코프(Theme A 딥다이브 + B/C/D 백필) 합의 후 약 1.5~2시간 작업. 큰 그림: **표준화 4단(MCP → SKILL.md → AGENTS.md → A2A)이 6개월 안에 다 일어남, Managed Agents와 Deep Agents Deploy가 동일 추상화에 도달하지만 패키징은 정반대**. 위키에 그동안 비어 있던 **"upper-middle 매니지드 플랫폼"** 칸이 채워짐.

## [2026-05-01] ingest | AI 에이전트 엔지니어링 3편 + 금요 회고

- **Sources**:
  - `raw/articles/2026-05-01-agent-stack-2026-layers.md` — [Hieu TRAN, "The Agent Stack in 2026" (dev.to, 2026-04-14)](https://dev.to/hieu_tran_80c388add84c060/the-agent-stack-in-2026-layers-harnesses-and-where-you-actually-build-2e5g)
  - `raw/articles/2026-05-01-otel-ai-agent-observability.md` — [Liu·Solomon, "AI Agent Observability — Evolving Standards and Best Practices" (OTel Blog, 2025-03-06)](https://opentelemetry.io/blog/2025/ai-agent-observability/)
  - `raw/articles/2026-05-01-agentic-engineering-cisco-langchain.md` — [Kumar·Ramagopal (Cisco), "Agentic Engineering" (LangChain Blog, 2026-04-17)](https://www.langchain.com/blog/agentic-engineering-redefining-software-engineering)
- **Pages created**: `wiki/journal/2026-05-01.md`
- **Pages updated**: `concepts/harness-engineering.md` (스택 stratification·하네스 단순화 원칙·ClawHavoc 보안 교훈 섹션 추가), `concepts/gen-ai-observability.md` (Baked-in vs 외부 OTel 의사결정 가이드·app vs framework 구분 섹션 추가), `concepts/agentic-engineering.md` (Worker/Leader 제어 평면·Cisco 파일럿 수치 섹션 추가), `wiki/index.md`, `wiki/log.md`
- **Notes**: 데일리 인제스트(스케줄 태스크 자동 실행). 세 글이 한 그림으로 모임 — "어디 레이어에 살 것인가(Hieu) / 어느 레이어든 텔레메트리는 표준에(OTel) / 제어 평면을 LangGraph 위에 얹어보니 조정 비용이 압축되더라(Cisco)". 기존 페이지 문구는 보존, 새 섹션만 추가.

## [2026-05-01] weekly | 금요 회고 — 중복·압축 후보 점검 (실제 머지는 미실행)

- **What I checked**: index.md 전체 + concepts·patterns·comparisons 페이지 페어들의 의도적 분리/실제 중복 여부.
- **명확하게 분리되어 있고 그대로 두는 것이 좋은 페어**: `concepts/harness-engineering` ↔ `patterns/harness-engineering-casebook` (개념 vs 케이스북), `concepts/ai-orchestration` ↔ `patterns/orchestration-patterns-practice` (이론 vs 실습), `concepts/context-engineering` ↔ `concepts/context-vs-prompt-practice` (개념 vs 커리큘럼 1편).
- **살짝 겹치는 영역 (압축이 아니라 교차 링크 보강이 답)**: `patterns/agent-server-harness` ↔ `patterns/harness-building-blocks` (~15% 겹침; 다음 작업 시 양 페이지 상단에 "어느 페이지에 무엇을 쓸지" 가이드 한 줄). `patterns/agent-planning-to-implementation` ↔ `patterns/agent-server-harness` ↔ `patterns/harness-engineering-casebook` (같은 파이프라인을 다른 각도에서 봄, 케이스북에 매핑 이미 존재).
- **실제 머지·삭제는 보류**: 본 회고 원칙은 "링크와 핵심 내용은 절대 보존". 머지가 필요할 때 사용자 확인 후 진행.
- **다음 작업 후보 (우선순위 순)**: (1) `comparisons/agent-frameworks`에 Managed Agents·Deep Agents Deploy 행 추가, (2) `tools/`에 Managed Agents 페이지 신설은 실사용 시점까지 보류(over-engineering 회피), (3) 다음 모델 업그레이드 시 우리 `examples/` 하네스에서 무엇을 줄일 수 있는지 별도 일지.
- **상세 회고 노트**: [[journal/2026-05-01]] 의 "금요 회고" 섹션.

## [2026-04-12] update | Chapter Clear 월드맵 허브 연결

- **Pages created**: `wiki/campaign-map.md`
- **Pages updated**: `wiki/overview.md`, `wiki/index.md`, `wiki/log.md`
- **Notes**: 위키를 게임형 학습 동선으로 재구성. 챕터별 클리어 조건/산출물/트래커를 추가하고, 메타 문서(overview/index/log)를 월드맵 허브로 연결.

## [2026-04-12] update | Chapter 0~2 문서 퀘스트 가이드 통일

- **Pages updated**: `patterns/llm-wiki.md`, `tools/obsidian.md`, `tools/claude-code.md`, `concepts/ai-native-programmer.md`, `concepts/ai-native-architecture.md`, `concepts/prompt-engineering.md`, `concepts/context-engineering.md`, `concepts/context-vs-prompt-practice.md`, `wiki/campaign-map.md`
- **Notes**: 각 문서 하단에 `Chapter Clear 가이드`를 추가하여 퀘스트/클리어 조건/보상/다음 퀘스트를 통일. 월드맵과 개별 문서 간 진행 흐름을 양방향으로 맞춤.

## [2026-04-13] create | Harness 케이스북 + Anthropic Academy 스터디 맵

- **Sources**: `raw/notes/2026-04-13-harness-casebook-anthropic-academy.md`, [anthropic.com/learn](https://www.anthropic.com/learn), [Skilljar catalog](https://anthropic.skilljar.com/)
- **Pages created**: `patterns/harness-engineering-casebook.md`
- **Pages updated**: `concepts/harness-engineering.md`, `index.md`, `overview.md`, `log.md`
- **Notes**: 도메인별 Guides/Sensors/HITL 30행 매트릭스. Anthropic Academy 코스 URL·하네스 축 매핑·트랙 A~D. 총 페이지 49.

## [2026-04-12] update | Chapter 3~7 문서 퀘스트 가이드 확장

- **Pages updated**: `concepts/ai-orchestration.md`, `patterns/orchestration-patterns-practice.md`, `patterns/agent-planning-to-implementation.md`, `patterns/subagents-delegation.md`, `patterns/agent-server-harness.md`, `patterns/safe-tool-calling-sandbox.md`, `patterns/owasp-llm-typescript-mitigations.md`, `concepts/llm-evaluation.md`, `concepts/gen-ai-observability.md`, `patterns/git-ai-workflow.md`, `patterns/ai-code-review.md`, `patterns/ai-cost-management.md`, `wiki/campaign-map.md`
- **Notes**: Chapter 3~7 핵심 문서에도 동일한 `Chapter Clear 가이드` 형식을 적용하여, 문서 단위에서 챕터 진행이 끊기지 않게 연결. 각 문서의 "다음 퀘스트" 링크를 통해 월드맵 순환 루프를 완성.

## [2026-04-11] create | 에이전트 커리큘럼 프랙티스 6편 + raw 메타

- **Sources**: `raw/notes/2026-04-12-practice-curriculum.md`
- **Pages created**: `concepts/context-vs-prompt-practice.md`, `patterns/preventing-context-rot.md`, `patterns/harness-building-blocks.md`, `patterns/safe-tool-calling-sandbox.md`, `patterns/orchestration-patterns-practice.md`, `patterns/my-first-agentic-service.md`
- **Pages updated**: `index.md`, `overview.md`, `log.md` (각 페이지에 **쉽게 읽기**·`sources` 정리)
- **Notes**: 중학교 커리큘럼 톤 실습 트랙. 읽기 순서는 `wiki/index` 커리큘럼 절 참고.

## [2026-04-11] update | 공개 저장소 보안 장치 (Gitleaks·Dependabot·SECURITY)

- **Other**: `SECURITY.md`, `.gitleaks.toml`, `.github/workflows/gitleaks.yml`, `dependency-review.yml`, `dependabot.yml`, PR 템플릿(비밀 체크리스트), `.gitignore` 보강, `CLAUDE.md` 보안 한 줄
- **Notes**: 푸시·PR마다 비밀 스캔, PR마다 의존성 리뷰, 주간 Dependabot. 실제 키는 GitHub Secrets에만.

## [2026-04-11] update | 전 위키 가독성 패스 (쉽게 읽기 + 용어 표)

- **Pages updated**: concepts·tools·patterns·comparisons 전 페이지(메타 `overview`/`index` 포함), `harness-engineering`·`owasp-llm-typescript-mitigations`·`agent-server-harness`·`journal/2026-04-12`의 `updated` 정리
- **Notes**: 각 본문 상단에 **「쉽게 읽기」**(비유 + 짧은 용어 표). index 인용줄 안내. (이전에 agent-server·저널에만 넣었던 설명은 이번에 전 페이지로 확장.)

## [2026-04-12] create | 저널·OWASP×TS 패턴·papers·예제 스케치

- **Sources**: `raw/notes/2026-04-12-security-typescript-corpus.md`, `raw/notes/2026-04-12-harness-engineering-deep-dive.md`, `raw/papers/owasp-genai-2025-llm-top-10.md`
- **Pages created**: `wiki/journal/2026-04-12.md`, `wiki/patterns/owasp-llm-typescript-mitigations.md`
- **Other**: `examples/agent-safety-sketch/README.md`, `raw/papers/owasp-genai-2025-llm-top-10.md`
- **Pages updated**: `concepts/harness-engineering.md`, `patterns/agent-server-harness.md`, `index.md`, `overview.md`, `log.md`, `CLAUDE.md`
- **Notes**: Fowler Humans/Agents 요약을 저널·하네스 페이지에 연결. OWASP LLM01/06/10 ↔ TS·AI SDK 완화 패턴 위키화. 실행용 최소 README 스케치.

## [2026-04-12] collect | 보안 × TypeScript 큐레이션 (②)

- **Sources**: `raw/notes/2026-04-12-security-typescript-corpus.md`
- **Pages updated**: `raw/notes/2026-04-12-ai-native-learning-corpus.md` (5c 링크), `log.md`, `overview.md`, `CLAUDE.md`
- **Notes**: OWASP GenAI LLM Top 10, MCP Authorization 튜토리얼·스펙, AI SDK 구조화 출력·도구·MCP·미들웨어·테스트·텔레메트리, TS strict·Zod, 위협↔TS 완화 표.

## [2026-04-12] update | Harness Engineering 심화 (개념 보강 + 큐레이션 노트)

- **Sources**: `raw/notes/2026-04-12-harness-engineering-deep-dive.md`
- **Pages updated**: `concepts/harness-engineering.md`, `log.md`, `overview.md`, `CLAUDE.md`
- **Notes**: 루프·인간 in/on/out·Harnessability·Norms/Guardrails 표 추가. Fowler memo / Humans and Agents, Anthropic 도구 글 링크. 심화 읽기 리스트 raw에 정리.

## [2026-04-12] collect | AI 네이티브 학습 외부 자료 큐레이션

- **Sources**: `raw/notes/2026-04-12-ai-native-learning-corpus.md`
- **Pages updated**: `log.md`, `CLAUDE.md`
- **Notes**: Anthropic 엔지니어링·OpenAI Cookbook·HF Agents Course·DeepLearning Agentic AI·MCP·OTel·Simon Willison·실습 순서 권장안 링크 모음 (ingest 전 raw 풀).

## [2026-04-11] ingest | AI SDK(streamText/Agent) + Workflow DurableAgent 리서치

- **Sources**: `raw/notes/2026-04-11-ai-sdk-durable-agent-workflow-research.md` (useworkflow.dev 공식 가이드)
- **Pages updated**: `tools/vercel-workflow.md`, `patterns/agent-server-harness.md`, `log.md`, `CLAUDE.md`, `overview.md`
- **Notes**: `Agent`가 `streamText` 래퍼임, `DurableAgent`·`getWritable`·`start`·`run.readable`·도구 `"use step"`·`npx workflow web`·flight-booking 예제 브랜치 정리.

## [2026-04-11] ingest | Vercel Workflow + OpenTelemetry GenAI 관측 리서치

- **Sources**: `raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md` (웹 1차 출처: Vercel 블로그, useworkflow.dev, OTel 스펙·블로그·SIG)
- **Pages created**: `tools/vercel-workflow.md`, `concepts/gen-ai-observability.md`
- **Pages updated**: `patterns/agent-server-harness.md`, `concepts/harness-engineering.md`, `concepts/llm-evaluation.md`, `index.md`, `overview.md`, `log.md`, `CLAUDE.md`
- **Notes**: WDK의 `use workflow`/`use step`·Webhook·Worlds·내장 관측 요약. OTel GenAI semconv·에이전트 앱/프레임워크 컨벤션·계측 두 갈래 정리.

## [2026-04-11] update | 오케스트레이션·하네스 서버 보강 + 패턴 2종

- **Sources**: `raw/notes/2026-04-11-orchestration-harness-server-supplement.md`
- **Pages created**: `patterns/agent-planning-to-implementation.md`, `patterns/agent-server-harness.md`
- **Pages updated**: `concepts/ai-orchestration.md`, `concepts/harness-engineering.md`, `concepts/agentic-engineering.md`, `index.md`, `overview.md`, `log.md`, `CLAUDE.md`
- **Notes**: 6대 패턴 위에 런타임(상태·멱등·HITL·관측) 정리, Harness에 서버·프로덕션 경계 추가. 기획→코드 산출물 체인·HITL, 동기/비동기/SSE 백엔드 패턴 문서화.

## [2026-04-09] ingest | 14개 주제 대규모 리서치 (실전 기술·개념·어두운 면·실무)

- **Sources**: `raw/notes/2026-04-09-subagents-delegation.md`, `raw/notes/2026-04-09-tool-use-function-calling.md`, `raw/notes/2026-04-09-prompt-caching.md`, `raw/notes/2026-04-09-llm-evaluation.md`, `raw/notes/2026-04-09-vector-db-embeddings.md`, `raw/notes/2026-04-09-structured-output.md`, `raw/notes/2026-04-09-ai-memory-systems.md`, `raw/notes/2026-04-09-fine-tuning-vs-prompting.md`, `raw/notes/2026-04-09-llm-failure-modes.md`, `raw/notes/2026-04-09-cognitive-debt-deep.md`, `raw/notes/2026-04-09-vibe-coding-antipatterns.md`, `raw/notes/2026-04-09-ai-code-review.md`, `raw/notes/2026-04-09-git-ai-workflow.md`, `raw/notes/2026-04-09-ai-cost-management.md`
- **Pages created**: `patterns/subagents-delegation.md`, `concepts/tool-use.md`, `patterns/prompt-caching.md`, `concepts/llm-evaluation.md`, `concepts/vector-db-embeddings.md`, `concepts/structured-output.md`, `concepts/ai-memory-systems.md`, `comparisons/fine-tuning-vs-prompting.md`, `concepts/context-rot-hallucination.md`, `concepts/cognitive-debt.md`, `patterns/vibe-coding-antipatterns.md`, `patterns/ai-code-review.md`, `patterns/git-ai-workflow.md`, `patterns/ai-cost-management.md`
- **Pages updated**: `index.md`, `overview.md`, `CLAUDE.md`
- **Notes**: 4개 배치로 리서치 진행. Batch 1(실전기술: subagents/tool-use/caching/evals), Batch 2(개념심화: vector-db/structured-output/memory/fine-tuning), Batch 3(어두운면: failure-modes/cognitive-debt/vibe-antipatterns), Batch 4(실무: code-review/git-workflow/cost-management). 14개 원본 소스 + 14개 위키 페이지 생성. 위키 18 → 32 페이지로 성장.

## [2026-04-09] ingest | 5개 주제 일괄 리서치 (도구·프레임워크·전략)

- **Sources**: `raw/notes/2026-04-09-claude-md-best-practices.md`, `raw/notes/2026-04-09-ai-coding-tools-comparison.md`, `raw/notes/2026-04-09-mcp-research.md`, `raw/notes/2026-04-09-agent-frameworks-comparison.md`, `raw/notes/2026-04-09-solo-product-strategy.md`
- **Pages created**: `patterns/claude-md-guide.md`, `comparisons/ai-coding-tools.md`, `concepts/mcp.md`, `comparisons/agent-frameworks.md`, `patterns/solo-product-strategy.md`
- **Pages updated**: `index.md`, `log.md`
- **Notes**: CLAUDE.md 작성법(10섹션+계층구조), AI 코딩 도구 4종 비교(가격·컨텍스트·조합전략), MCP 프로토콜(3대 프리미티브+Linux Foundation 이관), Agent 프레임워크 3종 비교(LangGraph/CrewAI/OpenAI SDK), 1인 개발자 제품 전략(Rob Walling 5기준+유망니치).

## [2026-04-09] create | bkit + Superpowers 조합 패턴

- **Pages created**: `patterns/bkit-superpowers-combo.md`
- **Pages updated**: `index.md`
- **Notes**: PDCA 단계 건너뛰기 문제를 해결하기 위한 bkit + Superpowers 조합 패턴 정리. bkit이 프로세스 뼈대, Superpowers가 실행 규율 담당. 4단계 워크플로우, 역할 분담, 적용 기준 포함.

## [2026-04-09] ingest | AI Engineering 패러다임 3세대 진화 리서치

- **Sources**: `raw/notes/2026-04-09-engineering-paradigms-research.md`
- **Pages created**: `concepts/harness-engineering.md`, `concepts/prompt-engineering.md`, `concepts/agentic-engineering.md`
- **Pages updated**: `concepts/context-engineering.md`, `index.md`, `overview.md`
- **Notes**: Prompt → Context → Harness 3세대 진화 정리. Martin Fowler의 Harness 3요소(Guides/Sensors/Controls), Claude Code 소스코드 유출 사건으로 밝혀진 실제 Harness 구조, Vibe Coding → Agentic Engineering 진화, Cognitive Debt 새 용어.

## [2026-04-09] ingest | Claude Code 플러그인 4종 리서치

- **Sources**: 웹 리서치 (GitHub, 기술 블로그, 커뮤니티)
- **Pages created**: `tools/bkit.md`, `tools/superpowers.md`, `tools/codex-plugin.md`, `tools/gstack.md`, `comparisons/claude-code-plugins.md`
- **Pages updated**: `index.md`, `overview.md`, `log.md`
- **Notes**: Claude Code 플러그인 생태계 4종(bkit, Superpowers, Codex Plugin, gstack) 심층 조사. 각 도구의 핵심 철학, 기능, AI 오케스트레이션 패턴 매핑, PDCA 단계별 조합 전략 정리. 기존 concepts/ai-orchestration, concepts/context-engineering과 교차참조.

## [2026-04-09] ingest | AI 네이티브 성장 맵 리서치 (3개 주제)

- **Sources**: `raw/notes/2026-04-09-ai-orchestration-research.md`, `raw/notes/2026-04-09-ai-native-architecture-research.md`, `raw/notes/2026-04-09-solo-dev-ai-research.md`
- **Pages created**: `concepts/ai-native-programmer.md`, `concepts/ai-orchestration.md`, `concepts/ai-native-architecture.md`, `concepts/context-engineering.md`
- **Pages updated**: `index.md`, `overview.md`, `tools/claude-code.md`
- **Notes**: 웹 리서치 기반. AI 오케스트레이션 6대 패턴(Anthropic), AI 네이티브 아키텍처 4대 원칙, 1인 개발자 성공 사례, Context Engineering 개념 정리. 기존 RAG 페이지와 교차참조.

## [2026-04-06] ingest | LLM-Wiki Pattern (Tobi Lütke)

- **Source**: `raw/articles/2026-04-04-llm-wiki-pattern.md`
- **Pages created**: `patterns/llm-wiki.md`, `concepts/rag.md`, `tools/obsidian.md`, `tools/claude-code.md`, `comparisons/rag-vs-llm-wiki.md`
- **Pages updated**: `index.md`, `overview.md`
- **Notes**: 첫 번째 Ingest. LLM-Wiki 패턴 자체를 위키에 기록. 3-Layer 아키텍처, Ingest/Query/Lint 워크플로우, RAG와의 비교를 정리.
