---
title: "OpenAI Brings ChatGPT Enterprise to AWS Marketplace — Payable Against Cloud Commitments (Nov 9)"
category: concepts
tags: [openai, chatgpt-enterprise, aws, marketplace, distribution]
created: 2026-11-10
updated: 2026-11-10
sources:
  - "raw/articles/2026-11-10-openai-chatgpt-enterprise-aws-marketplace.md"
related:
  - "[[concepts/openai-enterprise-discounts-anthropic]]"
  - "[[concepts/openai-servicenow-enterprise-workflows]]"
  - "[[concepts/anthropic-claude-enterprise-security-hooks]]"
status: draft
confidence: high
---

# OpenAI Brings ChatGPT Enterprise to AWS Marketplace — Payable Against Cloud Commitments (Nov 9)

## Start here

**Analogy**: the way software is sold has changed. Until now you bought it directly from OpenAI's shop; now you can also buy it from the AWS supermarket shelf. The product is identical — only the receipt lands on the AWS ledger. A company that already has an annual AWS contract can pay for ChatGPT out of that commitment.

| Term | Meaning |
|------|------|
| **AWS Marketplace** | The store where third-party software is bought and sold on AWS, billed on the same AWS invoice |
| **EDP / PPA** | AWS Enterprise Discount Program and Private Pricing Agreement — discount contracts based on annual usage commitments |
| **Private offer** | A sales model with no public price — each customer gets an individual quote and contract |

## One-line definition

On 2026-11-09, OpenAI launched ChatGPT Enterprise on AWS Marketplace. Companies can now buy it through their existing AWS purchasing and billing relationship, and eligible spending can count toward AWS commitments (EDP/PPA). It is a change in procurement and billing, not in features.

## Key facts

- **What it is**: ChatGPT Enterprise can be discovered, bought and managed on AWS Marketplace. The bundle combines Chat, ChatGPT Work, Codex and dots; eligible customers can also access ChatGPT for Healthcare and ChatGPT for Financial Services. There is no public price — it is sold through private offers (custom quotes).
- **Commitment drawdown**: eligible spending can count toward AWS Enterprise Discount Program (EDP) or Private Pricing Agreement (PPA) commitments, but it depends on the customer's AWS agreement and is not automatic. Matt Yanchyshyn, vice president of AWS Marketplace and Partner Services, said customers can "buy it through their AWS account, govern it alongside the rest of their software spend, and move from evaluation to rollout faster."
- **Same product**: OpenAI says Marketplace buyers receive the same models, features and functionality as direct buyers, with new features arriving at the same time. AWS handles purchasing and billing; OpenAI continues to manage the product experience.
- **Data caveat**: buying through the Marketplace does not guarantee that all customer data stays on AWS infrastructure. OpenAI is the data processor and uses subprocessors including AWS. Inference residency for Marketplace workspaces can be selected only in the United States. Data residency and inference residency are separate controls.
- **Bedrock is different**: OpenAI models on Amazon Bedrock are for developers building agents and apps; ChatGPT Enterprise is for teams' daily work. The two routes complement each other. The background: a multi-year $38B OpenAI–AWS compute agreement in November 2025, and a limited preview of OpenAI models on Bedrock, Codex on AWS and Bedrock Managed Agents on April 28, 2026.

## Why it matters (solo-developer view)

1. **The buying barrier for enterprise AI drops**: procurement, legal and security reviews can ride on the AWS contract, so large-company adoption moves faster. For a solo developer or startup the direct change is small, but faster customer adoption of ChatGPT Enterprise means more demand for integrations and workflows.
2. **Distribution is a competitive edge**: in the enterprise market, how a product is bought matters as much as how it performs. Anthropic also sells Claude through AWS, Google Cloud and Microsoft, so cloud marketplaces are becoming the main battleground for both sides.
3. **Data residency needs a separate check**: "bought on AWS" does not mean data stays on AWS. Customers with regulatory or security requirements should confirm inference residency (US only) and the data-processor terms before signing.

## Limitations (stated)

- There is no public price; the actual cost is only known through a private offer. Commitment drawdown depends on the customer's contract and is not automatic.
- Inference residency for Marketplace workspaces is US-only, a constraint in non-US regulatory environments.
- This is a procurement change with no feature changes, so it has no effect on model or agent capability itself.

## Related concepts

- [[concepts/openai-enterprise-discounts-anthropic]] — OpenAI's 20–40% discount push, enterprise price competition
- [[concepts/openai-servicenow-enterprise-workflows]] — OpenAI and ServiceNow expand, enterprise workflow integration
- [[concepts/anthropic-claude-enterprise-security-hooks]] — Claude Enterprise inference hooks GA and security center beta

## Sources

- [OpenAI ChatGPT Enterprise on AWS Marketplace source](raw/articles/2026-11-10-openai-chatgpt-enterprise-aws-marketplace.md)
