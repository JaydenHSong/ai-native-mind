---
title: "Safe Tool Calling and Sandboxing: sheath first, knife later"
category: patterns
tags: [tool-use, mcp, sandboxing, security, curriculum, hitl, trust-calibration, progressive-autonomy, checkpoint-rollback, stateful-sandbox]
created: 2026-04-12
updated: 2026-05-23
sources:
  - "raw/notes/2026-04-12-practice-curriculum.md"
  - "raw/articles/2026-05-21-progressive-autonomy-trust-calibration-tool-use.md"
  - "raw/articles/2026-05-23-deltabox-millisecond-sandbox-checkpoint-rollback.md"
related:
  - "[[concepts/tool-use]]"
  - "[[concepts/mcp]]"
  - "[[concepts/harness-engineering]]"
status: active
confidence: high
---

# Safe Tool Calling and Sandboxing

## Start here

**One line**: instead of giving AI one dangerous free-form command, give it **tools that only expose allowed actions**, run those tools inside an **isolated sandbox**, and put **human approval** in front of irreversible operations.

| Defense | Core idea |
|---|---|
| **Schema** | split and restrict permissions |
| **Sandbox** | isolate execution so failure does not damage the real system |
| **HITL** | require human confirmation before consequential actions |

## One-line description

A pattern for permission control and isolation that prevents accidents when an agent executes external tools such as files, networks, and terminals.

## The problem: “the fear of `rm -rf /`”

- **Accidental deletion**: “Delete unused files” becomes `rm -rf` over the whole project.
- **SSRF**: a malicious instruction tricks the agent into opening internal admin pages and leaking credentials.
- **Runaway spending**: a hallucinating agent loops and spins up cloud resources indefinitely.

## Three layers of defense

### 1) Make the tool itself safe
Do not hand the agent a maximally dangerous tool in the first place.

- **Bad tool**: `run_bash_command(cmd: string)` — can do anything.
- **Safer tool**: `delete_file_in_temp_dir(filename: string)` — can delete only within a temp directory.

This is also the core philosophy of [[concepts/mcp]]: the agent acts only through predefined protocol surfaces.

### 2) Sandboxing
Even if the agent escapes the intended path, it should still be trapped inside a disposable room.

- **Docker container**: the agent writes code and runs commands only inside a container.
- **Cloud sandbox**: infra like E2B or Replit provides isolated execution environments for AI workflows.

### 3) Human in the loop (HITL)
Irreversible or high-impact actions should require an approval button.

Examples:
- deleting a database table
- deploying to production
- triggering payment-related actions

## Applied example: a safe code-fixing agent

1. The user asks: “Fix this bug.”
2. The agent uses `edit_file`, but the tool is restricted to files under `src/`.
3. To run tests or commands, execution happens inside a sandboxed container, not on the real machine.
4. Before pushing or deploying the final result, the workflow asks for human approval.

## 2026-05-21 update — HITL can be a learned trust gateway, not just a static approval button

[Progressive Autonomy as Preference Learning](https://arxiv.org/abs/2605.19151) upgrades the third defense layer. Instead of treating approval as one uniform switch, it asks:

> **Which actions should run automatically, which should always be blocked, and which should be escalated to a human?**

### Think in three zones: allow / block / ask

- **allow** — safe to execute autonomously
- **block** — always denied
- **ask** — requires human approval

So HITL is not one generic brake. It is a problem of designing the **autonomy boundary**.

### Approval logs become training data for risk tolerance

The paper frames the policy gateway as a learner over human **approve / deny** feedback:
1. start with a wide `ask` zone
2. move repeatedly safe actions into `allow`
3. move repeatedly rejected actions into `block`

That turns approval from a pure bottleneck into data for **progressive autonomy**.

### Immediate operating rules to add

1. **Keep permission restriction** — a learned gateway does not replace schemas or sandboxing.
2. **Log approvals** — progressive autonomy needs reasons and outcomes, not just binary clicks.
3. **Escalate only uncertain actions** — asking for every action is safe but does not scale.

So the original three-layer defense is now better read as **permission / isolation / learned approval boundary**.

## 2026-05-23 update — DeltaBox: a sandbox is both a safety primitive and a branchable runtime

[DeltaBox](https://arxiv.org/abs/2605.22781) deepens the meaning of “sandbox.” Up to now, the sandbox was mostly described as an isolated room that protects the real system. That is correct, but long-horizon agents need one more property.

> **A sandbox should be a safe room and also an execution substrate that can rewind and branch quickly.**

### Why the new view matters

For test-time search, branch exploration, RL-style loops, or multi-attempt coding agents, the agent may need to:
- try path A
- roll back to the previous state on failure
- fork into path B
- run several branches in parallel

If every checkpoint clones the full filesystem and process state, rollback latency can eat the search budget.

### DeltaBox core idea

The paper exploits the fact that consecutive checkpoints are usually very similar.

- **DeltaFS** — manages the filesystem with copy-on-write layers
- **DeltaCR** — stores process state as incremental dumps

Rollback becomes closer to a **fast layer switch / template fork** than a heavy restore operation.

### Why this matters for this page

The original three defense layers were:
1. permission restriction
2. isolation
3. human approval

With DeltaBox, layer 2 now contains two sub-questions:
- **Can we isolate execution safely?**
- **Can we reset quickly and explore multiple branches efficiently?**

So the sandbox is both a **security primitive** and an **agent throughput primitive**.

### Quantitative signal worth remembering

- checkpoint: **14 ms**
- rollback: **5 ms**

The meaning is not just performance bragging. Under the same wall-clock budget, faster reset means **more branches can be tried**.

### Practical translation

1. When evaluating sandboxes, check not only isolation but also **reset latency**.
2. If parallel fan-out in a long-horizon coding agent feels slow, suspect **environment rollback cost** before blaming the model.
3. Safe tool-use infrastructure includes not only prompts and policy, but also **state reset / checkpoint / rollback design**.

## Chapter Clear guide

- **Chapter**: Chapter 5 (Safety Dungeon)
- **Quest**: map your tool-use flow onto the three defense layers: permission / isolation / HITL
- **Clear condition**: explain which layer blocks one risky action
- **Reward artifact**: Safe Tool Calling Checklist v1
- **Next quest**: [[patterns/owasp-llm-typescript-mitigations]] → [[concepts/llm-evaluation]]
