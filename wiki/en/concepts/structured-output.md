---
title: "Structured Output"
category: concepts
tags: [structured-output, json-mode, function-calling, schema]
created: 2026-04-09
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-09-structured-output.md"
related:
  - "[[concepts/tool-use]]"
  - "[[concepts/harness-engineering]]"
status: active
confidence: high
---

# Structured Output

## Easy Read

**Analogy**: Instead of asking the AI to "say whatever it wants," you give it a **rigid form and instruct it only to fill in the blank fields**. By locking in field names and types (e.g., number-only fields, choosing one option from a pre-defined list), downstream applications can parse the result **reliably and safely** without throwing exceptions.

| Term | Explanation |
|------|------|
| **Schema** | A **blueprint** specifying allowed field names, data types, and required statuses |
| **JSON Mode** | A weaker mode ensuring "it is valid JSON syntax," but offering zero guarantees that the exact field names will match your schema |
| **Structured Outputs** | A strict constraint forcing the model output to **perfectly match** the provided blueprint |

## One-Line Definition

A technology that forces an LLM to generate outputs that perfectly match a specified target schema (typically JSON Schema). **An absolute prerequisite for 2026 production-grade LLM applications**.

## Why It Is Vital

- **Zero Parsing Failures**: Eradicates regex-based JSON extraction hacks once and for all.
- **Type Safety**: Maps directly to compile-time types (TypeScript, Pydantic, etc.).
- **Downstream Reliability**: Ensures downstream systems receive deterministic data shapes.
- **Simplifies Error Handling**: Eliminates custom recovery logic for malformed JSON.

## The 3 Architectural Approaches

### 1. JSON Mode (Legacy)
- Guarantees the output is valid JSON syntax.
- Does *not* guarantee compliance with a specific schema.
- **Deprecate immediately**—superseded by Structured Outputs.

### 2. Function Calling / [[concepts/tool-use|Tool Use]]
- Forces schema constraints by defining structural tools.
- Anthropic/Claude's primary mechanism.
- Leverages tool definitions to extract structured data shapes.

### 3. Structured Outputs (Recommended Standard)
- **Guarantees 100% schema compliance**.
- Pure type-safe outputs.
- Established as the 2026 industry default.

## Usage Matrix

| Functional Objective | Recommended Mechanism |
|------|---------|
| AI **selects and executes** an external capability | Function Calling |
| Output **format is fixed and deterministic** | Structured Outputs |
| Structured data extraction or classification | Structured Outputs |
| Navigating multi-step tool routing | Function Calling |

## Provider Implementations

### OpenAI
```python
from pydantic import BaseModel

class Person(BaseModel):
    name: str
    age: int
    email: str

response = client.chat.completions.parse(
    model="gpt-5",
    messages=[...],
    response_format=Person
)
person = response.choices[0].message.parsed
```

### Anthropic Claude
Traditionally tool-based. With the 2026 Structured Outputs additions, it natively enforces strict JSON schemas directly.

## Real-World Examples

### Structured Data Extraction
```python
class Invoice(BaseModel):
    invoice_number: str
    date: date
    total: float
    items: list[LineItem]

# Extracts robust invoice objects from raw emails/receipts
```

### Classification & Routing
```python
class Classification(BaseModel):
    category: Literal["bug", "feature", "question"]
    priority: Literal["low", "medium", "high"]
    summary: str
```

### Complex Hierarchical Trees
Supports deeply nested models, lists, and strict validation structures. Utilizes full Pydantic type validation features.

## Best Practices

1. **Leverage Strict Enums**: Use `Literal` and `enum` types to prune loose options.
2. **Write Verbose Descriptions**: Use Pydantic's `Field(description="...")` to guide the model's semantic assignment.
3. **Explicitly Mark Optionality**: Differentiate clearly between required fields and optional ones.
4. **Use Nested Models**: Break complex data trees into nested sub-models to preserve clean structural logic.
5. **Add post-schema Business Validation**: Passing a schema check does not guarantee business logic correctness; maintain a computational validation layer directly after parsing.

## Positioning in [[concepts/harness-engineering|Harness Engineering]]

Structured Output functions as a core **Guardrail** within the Harness. It guarantees system stability by forcing models to communicate inside strict, predefined programmatic contracts.

## References

- [Structured Output Curation Research Notes](raw/notes/2026-04-09-structured-output.md)
- [Guide to Structured Outputs & Function Calling (Agenta)](https://agenta.ai/blog/the-guide-to-structured-outputs-and-function-calling-with-llms)
- [Function Calling vs. Structured Outputs vs. JSON Mode (Vellum)](https://vellum.ai/blog/when-should-i-use-function-calling-structured-outputs-or-json-mode)
