# Cost Simulator — Managed vs Self-host

위키 [[patterns/agent-mvp-stack-2026]] · [[comparisons/managed-vs-deep-agents]] · [[comparisons/agent-platforms-for-solo-dev]] 의 인터랙티브 위젯.

## 무엇을 하는가

슬라이더로 **트래픽 (T) · 세션 시간 (S) · 모델 · 토큰량 · 인프라비 (F) · MRR** 을 만지면 **Claude Managed Agents** vs **Self-host (Deep Agents Deploy)** 의 월 비용을 실시간 비교. 변곡점·MRR 대비 비용 비율도 같이 보여 줌.

## 어떻게 보나

- **Obsidian**: 이 폴더의 `index.html`을 외부 브라우저에서 열기 (Obsidian 자체에 iframe HTML viewer는 기본 비활성)
- **로컬 브라우저**: `examples/cost-simulator/index.html`을 더블클릭 또는 `file://`로 열기
- **간단 서버**: `cd examples/cost-simulator && python3 -m http.server 8000` → http://localhost:8000

## 핵심 수식

```
Managed Agents 월 비용  = Token_cost + (T × 30 × S/60) × $0.08
Self-host 월 비용       = Token_cost + F (고정)

변곡점:  T × S = 25 × F
```

자세한 모델: [Managed vs Self-host 변곡점 raw](../../raw/articles/2026-05-01-managed-vs-selfhost-breakeven.md).

## 가정·한계

- Prompt caching (-90%) · Batch API (-50%)는 미반영 — 적용 시 Managed·Self-host 둘 다 같은 비율로 절감
- Output:Input 비율은 Claude 일관 5x
- Self-host F는 평균 — 트래픽 폭증 시 elastic 비용은 별도
- Managed Agents `outcome-driven mode` (research preview) 추가 비용은 미반영
- 가격은 2026-05 기준. 6개월 단위 갱신 권장.

## 데이터 출처

- [Claude API 공식 가격](https://platform.claude.com/docs/en/about-claude/pricing)
- [BenchLM 2026-05 가격 정리](https://benchlm.ai/blog/posts/claude-api-pricing)
- [Modal vs Daytona 비교 (Northflank)](https://northflank.com/blog/daytona-vs-modal)
- [AI Code Sandbox Benchmark 2026 (Superagent)](https://www.superagent.sh/blog/ai-code-sandbox-benchmark-2026)

## 향후 확장 아이디어

- Prompt caching 토글 추가
- Batch API 토글
- Advisor strategy (메인 모델 + 비싼 advisor 호출 비율) 시뮬
- 모델 비교 (Claude vs GPT vs Gemini)
- 트래픽 변동 시나리오 (peak/off-peak)
