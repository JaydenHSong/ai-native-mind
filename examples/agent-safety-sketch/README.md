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
