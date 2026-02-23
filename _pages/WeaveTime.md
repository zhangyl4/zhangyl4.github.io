---
title: "WeaveTime"
permalink: /publications/weavetime/
layout: blank
author_profile: false
---

<style>
/* WeaveTime page-only styles (adapted from Eyes Wide Open) */
.page__content { text-align: left; }
.page__content .ewo-hero { text-align: center; }
.page__content p { line-height: 1.75; }
.page__content h2 { margin-top: 24px; }
.ewo-hero { padding: 8px 0 16px; }
.ewo-title { margin: 0; font-size: 32px; line-height: 1.2; }
@media (min-width: 768px) { .ewo-title { font-size: 40px; } }
.ewo-meta { color: #6b7280; margin-top: 8px; }
.ewo-cta { margin-top: 12px; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.ewo-teaser { margin-top: 12px; border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,.08); }

/* Fancy CTA buttons */
.ewo-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border-radius: 9999px; font-weight: 600; text-decoration: none; border: 1px solid transparent; color: #fff; box-shadow: 0 6px 14px rgba(0,0,0,.08); transition: transform .12s ease, box-shadow .12s ease; }
.ewo-btn svg { width: 18px; height: 18px; }
.ewo-btn--paper { background: linear-gradient(135deg,#7c3aed,#2563eb); }
.ewo-btn--paper:hover { transform: translateY(-1px); box-shadow: 0 10px 18px rgba(99,102,241,.28); }
.ewo-btn--arxiv { background: linear-gradient(135deg,#ef4444,#b91c1c); }
.ewo-btn--arxiv:hover { transform: translateY(-1px); box-shadow: 0 10px 18px rgba(239,68,68,.28); }
.ewo-btn--code { background: linear-gradient(135deg,#111827,#374151); }
.ewo-btn--code:hover { transform: translateY(-1px); box-shadow: 0 10px 18px rgba(31,41,55,.32); }
.ewo-btn--disabled { opacity: .55; pointer-events: none; filter: grayscale(.15); }

.ewo-section { text-align: left; margin-top: 24px; }
.ewo-section h2 { margin-bottom: 8px; }

.ewo-figure { margin: 16px 0; }
.ewo-caption { color: #6b7280; font-size: 14px; margin-top: 6px; }

.ewo-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 800px) { .ewo-grid { grid-template-columns: 1fr 1fr; } }

/* Image placeholders for easy later replacement */
.ewo-ph { display: flex; align-items: center; justify-content: center; width: 100%; aspect-ratio: 16 / 9; border: 2px dashed #cbd5e1; background: linear-gradient(135deg,#f8fafc,#eef2f7); color: #64748b; border-radius: 8px; padding: 8px; text-align: center; font-size: 14px; overflow: hidden; }
.ewo-ph:has(img) { border: 0; background: none; padding: 0; aspect-ratio: auto; }
.ewo-ph > img { width: 100%; height: auto; display: block; border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,.08); }
.ewo-small { aspect-ratio: 4 / 3; }

/* Checklist styling */
.ewo-todo { list-style: none; padding: 0; margin: 8px 0 0 0; display: grid; gap: 8px; }
.ewo-todo li { display: flex; gap: 10px; align-items: flex-start; background: linear-gradient(180deg,#f8fafc,#f1f5f9); border: 1px solid #e5e7eb; border-radius: 8px; padding: 8px 12px; }
.ewo-todo li::before { content: "×"; color:rgb(161, 21, 49); font-weight: 700; line-height: 1.2; margin-top: 2px; }
.ewo-todo li.completed { background: linear-gradient(180deg,#f0fdf4,#dcfce7); border-color: #86efac; }
.ewo-todo li.completed::before { content: "✓"; color: #16a34a; }
</style>

<div class="ewo-hero" align="center">
  <h1 class="ewo-title">WeaveTime: Stream from Earlier Frames into Emergent Memory in VideoLLMs</h1>

  <div class="ewo-meta">
    Yulin Zhang, Cheng Shi, Sibei Yang<br>
    CVPR 2026
  </div>

  <p class="ewo-cta">
    <a class="ewo-btn ewo-btn--paper ewo-btn--disabled" href="#" aria-disabled="true" tabindex="-1" aria-label="Paper PDF (TBA)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
      <span>Paper (TBA)</span>
    </a>
    <a class="ewo-btn ewo-btn--arxiv ewo-btn--disabled" href="#" aria-disabled="true" tabindex="-1" aria-label="arXiv preprint (TBA)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M20 22H6.5A2.5 2.5 0 0 1 4 19.5V5.5A2.5 2.5 0 0 1 6.5 3H20v19z"/></svg>
      <span>arXiv (TBA)</span>
    </a>
    <a class="ewo-btn ewo-btn--code ewo-btn--disabled" href="#" aria-disabled="true" tabindex="-1" aria-label="Code repository (TBA)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
      <span>Code (TBA)</span>
    </a>
  </p>

  <img class="ewo-teaser" src="/images/weavetime.png" alt="WeaveTime teaser" style="max-width: 960px; width: 100%;">
</div>

## Abstract

Streaming video is fundamentally time-causal: frames arrive sequentially, the “present” is seen once, the “past” accumulates into memory, and the “future” is unavailable. However, current Video-LLMs are often **time-agnostic**, treating videos as an unordered bag of evidence. This leads to two failures in streaming: **Temporal Order Ambiguity** (attending to semantically similar but temporally mismatched evidence) and **Past–Current Focus Blindness** (indiscriminate use of ever-growing memory).

We propose **WeaveTime**, a simple and model-agnostic framework that *first teaches order and then uses order*: (1) **SOPE** (Streaming Order Perception Enhancement) trains order-aware representations via a lightweight **Temporal Reconstruction** objective, and (2) **PCDF-Cache** (Past–Current Dynamic Focus Cache) performs **uncertainty-triggered, coarse-to-fine temporal retrieval**, expanding history only when needed. Plugged into strong backbones (e.g., Qwen2-VL-7B and LLaVA-OV-7B) without architectural changes, WeaveTime improves streaming performance while keeping latency/memory stable.

## Overview

<div class="ewo-grid">
  <figure class="ewo-figure">
    <div class="ewo-ph" aria-label="WeaveTime overview figure">
      <img class="ewo-teaser" src="/images/WeaveTime_Fig1.png" alt="WeaveTime overview" style="max-width: 960px; width: 100%;">
    </div>
    <figcaption class="ewo-caption">Figure 1. Overview of WeaveTime (illustration).</figcaption>
  </figure>

  <figure class="ewo-figure">
    <div class="ewo-ph" aria-label="Failure modes figure">
      <img class="ewo-teaser" src="/images/WeaveTime_Fig2.png" alt="Two failure modes" style="max-width: 960px; width: 100%;">
    </div>
    <figcaption class="ewo-caption">Figure 2. Two failure modes in streaming caused by time-agnosticism (illustration).</figcaption>
  </figure>
</div>

## Motivation: Why Time-Agnosticism Hurts Streaming

In offline video QA, a model can freely attend over the entire clip. In streaming, it cannot: the future is hidden, and the past grows without bound. If a Video-LLM does not explicitly model temporal order, two issues show up frequently:

- **Temporal Order Ambiguity**: it uses evidence from the *wrong time* (semantically similar frames but mismatched order).
- **Past–Current Focus Blindness**: it either over-relies on past memory (even when the answer is in the current frame) or fixates on the present (even when historical context is required).

## Method

WeaveTime follows a simple recipe:

### 1) SOPE: Streaming Order Perception Enhancement (Temporal Reconstruction)

We add a lightweight **Temporal Reconstruction (TR)** objective to instill *order-aware representations* with minimal fine-tuning. In practice, this can be implemented as an “order reasoning” sub-question that is appended before the original QA query, so the LLM can reuse intermediate computations.

### 2) PCDF-Cache: Past–Current Dynamic Focus Cache

After order perception is established, PCDF-Cache enforces a **“look now, recall if needed”** principle:

- Use only the **current** context when the model is confident.
- When uncertainty increases (e.g., higher entropy), trigger **coarse-to-fine retrieval** to expand and narrow the temporal search over the past.

This yields efficient context expansion aligned to the query’s needs instead of rescanning the full history every step.

## Contributions (from the paper)

1. Diagnose **Time-Agnosticism** in current Video-LLMs and show that disrupting temporal order leads to limited degradation, suggesting reliance on spatiotemporal shortcuts rather than causal reasoning.
2. Propose **WeaveTime**, a Video-LLM-agnostic, plug-and-play framework for streaming VQA that does not require specialized streaming data.
3. Introduce **SOPE** via a lightweight **Temporal Reconstruction** auxiliary task to instill order-aware representations with minimal fine-tuning.
4. Design **PCDF-Cache**, an uncertainty-aware, coarse-to-fine temporal retrieval mechanism for selective and efficient use of history under time-causal constraints.
5. Demonstrate consistent gains across representative streaming benchmarks (e.g., **OVO-Bench** and **Streaming-Bench**) on strong backbones (e.g., **Qwen2-VL** and **LLaVA-OV**).

## Experiments (from the paper)

WeaveTime is designed to be **plug-and-play**: it can be added on top of existing Video-LLM backbones (e.g., Qwen2-VL-7B and LLaVA-OV-7B) without architectural changes, and is evaluated on representative streaming benchmarks including **OVO-Bench** and **Streaming-Bench**.

## TODO
<ul class="ewo-todo">
  <li class="completed">add abstract</li>
  <li class="completed">add method overview</li>
  <li>add paper PDF link</li>
  <li>add arXiv link</li>
  <li>add code link</li>
</ul>

## BibTeX

```bibtex
@inproceedings{zhang2026weavetime,
  title     = {WeaveTime: Stream from Earlier Frames into Emergent Memory in VideoLLMs},
  author    = {Zhang, Yulin and Shi, Cheng and Yang, Sibei},
  booktitle = {CVPR},
  year      = {2026}
}
```
