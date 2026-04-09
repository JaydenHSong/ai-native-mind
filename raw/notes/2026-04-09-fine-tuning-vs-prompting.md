# Fine-tuning vs Prompting 리서치 (2026-04-09)

## 출처
- https://www.gauraw.com/fine-tuning-llm-lora-dpo-guide-2026/
- https://moveo.ai/blog/fine-tuning-rag-or-prompt-engineering
- https://umesh-malik.com/blog/rag-vs-fine-tuning-llms-2026
- https://nexla.com/ai-infrastructure/prompt-engineering-vs-fine-tuning/

## 핵심 원칙
> "Start with prompting. Fine-tune only when prompting hits a ceiling."

> "Most people reach for fine-tuning too early."

대부분 fine-tuning이 "필요하다"고 생각한 케이스는 실제로 **더 나은 프롬프트**로 해결 가능.

## 언제 Prompting만 써도 되나

### 이럴 때 prompting으로 충분
- 일반적인 작업 (분류, 추출, 요약)
- 도메인 데이터가 적음
- 빠른 반복이 필요
- GPU 리소스 없음
- 행동이 아니라 지식 부족이 문제

### 2026년 프롬프팅은 강력함
- Few-shot examples
- Chain-of-thought
- Structured system prompts
- Self-consistency
- ReAct reasoning
- 대부분의 경우 fine-tuning보다 더 나은 결과

## 언제 Fine-tuning이 필요한가

### 이럴 때만 fine-tune
- **일관된 스타일/톤**이 필요
- **도메인 특화 추론** (의료, 법률, 금융)
- **특정 커뮤니케이션 패턴**
- **Prompting의 한계에 도달**
- 대용량 학습 데이터 보유

### 핵심 질문
"문제가 **행동**(behavior)인가, **지식**(knowledge)인가?"
- 지식 부족 → RAG 사용
- 행동 문제 → Fine-tuning

## 경제학 (Fine-tuning의 매력)
대규모 프로덕션에서:
- Fine-tuned 소형 모델 < 대형 API 모델 (비용)
- Fine-tuning으로 프롬프트 짧아짐 → 토큰 감소
- 스케일에서 수치가 역전되는 시점 존재

## 2026 하이브리드 패턴 (Best Practice)
```
Retrieval (RAG)    → 사실 (Facts)
Fine-tuning        → 스타일, 정책, 의사결정 행동
Prompting          → 작업 지시, 맥락
```

세 가지를 조합하여 사용.

## 결정 트리

```
Q1: 결과가 만족스러운가?
  Yes → Prompting 유지

Q2: 지식/사실 부족인가?
  Yes → RAG 추가
  No → Q3

Q3: 행동/스타일 문제인가?
  Yes → Q4
  No → 프롬프트 개선

Q4: 1000+ 품질 예시 있는가?
  No → 예시부터 수집
  Yes → Q5

Q5: 스케일이 충분한가?
  Yes → Fine-tuning 고려
  No → 프롬프트 + Few-shot
```

## Fine-tuning 종류
- **Full fine-tuning**: 모든 파라미터 업데이트 (비쌈)
- **LoRA**: 저순위 어댑터만 학습 (효율적)
- **QLoRA**: 양자화 + LoRA (가장 저렴)
- **DPO**: 선호 데이터 기반 학습

## 1인 개발자에게
**거의 대부분 Fine-tuning 불필요.**
- Prompting + RAG + 좋은 CLAUDE.md로 해결 가능
- Fine-tuning은 수요가 검증되고 스케일이 있을 때
- 시간 투자 대비 효과 낮음 (초기 단계)
