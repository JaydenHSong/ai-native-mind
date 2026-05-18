# Agent safety sketch (TypeScript)

`ai-native-mind` 위키의 [[patterns/owasp-llm-typescript-mitigations]] 를 **실행 코드**로 옮길 때의 최소 스케치. 이 디렉터리에는 `node_modules`를 커밋하지 않는다.

## 준비

기존 Next.js(App Router) 프로젝트가 있다면 그 안 `app/api/.../route.ts`에 아래를 맞춰 붙이면 된다. 독립 실행 시:

```bash
mkdir -p /tmp/agent-safety-sketch && cd /tmp/agent-safety-sketch
npm init -y
npm install ai zod @ai-sdk/openai
```

환경 변수: `OPENAI_API_KEY` (또는 사용 중인 provider 키).

## 스케치: 구조화 출력 + 좁은 도구 + 스텝 상한

`stopWhen`·`maxSteps`·`inputSchema`는 **LLM06 / LLM10** 완화에 직접 해당한다. `Output.object`+Zod는 **LLM01·05**에 가깝다.

```typescript
import { generateText, Output, tool, stepCountIs } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { z } from "zod";

const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });

const result = await generateText({
  model: openai("gpt-4o-mini"),
  stopWhen: stepCountIs(5),
  tools: {
    lookupPrice: tool({
      description: "Return a fake price for a SKU (demo only)",
      inputSchema: z.object({
        sku: z.string().max(32).regex(/^[A-Z0-9-]+$/),
      }),
      execute: async ({ sku }) => ({ sku, usd: 9.99 }),
    }),
  },
  output: Output.object({
    schema: z.object({
      recommendation: z.string().max(500),
      confidence: z.enum(["low", "medium", "high"]),
    }),
  }),
  prompt:
    "Pick a SKU like ABC-123, call lookupPrice once, then answer with recommendation + confidence.",
});

// result.output 은 Zod 검증을 통과한 객체
console.log(result.output);
```

## 실패를 한 번 의도적으로 내보기

- `inputSchema`의 `regex`를 위반하는 SKU를 모델이 내게 하면 **도구 호출이 거절**되는지 로그를 본다.  
- `stopWhen: stepCountIs(1)` 로 바꾸면 도구+구조화 출력 단계가 부족해 **NoObjectGeneratedError** 또는 중단이 나는지 확인한다.

## 다음 단계

- Route 핸들러에 **rate limit** (예: `@upstash/ratelimit`) 추가 → LLM10.  
- MCP를 붙일 경우 [MCP Authorization](https://modelcontextprotocol.io/docs/tutorials/security/authorization) 확인.

## Dual LLM 패턴 sketch — `dual-llm.ts` (2026-05-01 추가)

위키 [[concepts/agent-supply-chain-security]] 의 **Tier 3 untrusted를 architectural로 격리**하는 sketch. Simon Willison 2023 dual LLM + DeepMind 2025 CaMeL의 핵심 아이디어를 TS·AI SDK로 압축.

```bash
# 같은 환경에서
npx tsx dual-llm.ts
```

**시나리오**: 고객 이메일(untrusted, prompt injection 심긴)이 들어오면 **escalate / auto-reply** 결정. 이메일 본문에 `[SYSTEM OVERRIDE]`가 있어도:

- **Q-LLM**(도구 0)이 본문을 받아 **strict Zod schema**(topic / sentiment / is_warranty_question / word_count)로만 출력
- **P-LLM**(도구 사용 가능)은 **그 4개 필드만 보고** escalate vs auto-reply 결정
- 본문 자체는 P-LLM에 도달하지 않음 → injection 경로 자체 차단

코드는 [`dual-llm.ts`](./dual-llm.ts).

### 실패를 한 번 의도적으로 내보기

- Q-LLM 호출에서 `tools: {...}` 추가 → 도구 사용 가능해지면서 P/Q 분리 의미 소실 (안티패턴)
- Q-LLM의 schema 필드 중 자유 텍스트 `topic` 길이 제한을 풀고 P-LLM 프롬프트에 그대로 붙여 넣어 보기 → 본문 텍스트가 P-LLM 결정에 영향 주는지 관찰 (CaMeL은 이걸 capability 메타데이터로 막음)

### 한계

본 sketch는 **최소 패턴** — CaMeL의 capability·information flow integrity는 구현하지 않는다. 본격 production은 [DeepMind CaMeL — arXiv 2503.18813](https://arxiv.org/abs/2503.18813) 또는 PromptArmor (ICLR 2026) 같은 detection 층과 결합.
