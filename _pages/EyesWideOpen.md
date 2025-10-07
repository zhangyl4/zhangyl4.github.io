---
title: "Eyes Wide Open"
permalink: /publications/eyes-wide-open/
layout: blank
author_profile: false
---

<style>
/* Eyes Wide Open page-only styles */
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
</style>

<div class="ewo-hero" align="center">
  <h1 class="ewo-title">Eyes Wide Open: Ego Proactive Video-LLM for Streaming Video</h1>

  <div class="ewo-meta">
    Yulin Zhang, Cheng Shi, Yang Wang, Sibei Yang<br>
    NeurIPS 2025 · <span class='show_paper_citations' data=''></span>
  </div>

  <p class="ewo-cta">
    <a class="ewo-btn ewo-btn--paper" href="" target="_blank" rel="noopener" aria-label="Paper PDF">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
      <span>Paper</span>
    </a>
    <a class="ewo-btn ewo-btn--arxiv" href="" target="_blank" rel="noopener" aria-label="arXiv preprint">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M20 22H6.5A2.5 2.5 0 0 1 4 19.5V5.5A2.5 2.5 0 0 1 6.5 3H20v19z"/></svg>
      <span>arXiv</span>
    </a>
    <a class="ewo-btn ewo-btn--code" href="" target="_blank" rel="noopener" aria-label="Code repository">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
      <span>Code</span>
    </a>
  </p>

  <img class="ewo-teaser" src="/images/EyeWO.png" alt="Eyes Wide Open teaser" style="max-width: 960px; width: 100%;">
</div>

## Abstract

Envision an AI capable of functioning in human-like settings, moving beyond mere observation to actively understand, anticipate, and proactively respond to unfolding events. Towards this vision, we focus on the innovative task where, <em>given ego‑streaming video input, an assistant proactively answers diverse, evolving questions at the opportune moment, while maintaining synchronized perception and reasoning.</em> This task embodies three key properties: (1) Proactive Coherence, (2) Just‑in‑Time Responsiveness, and (3) Synchronized Efficiency.
To evaluate and address these properties, we first introduce ESTP‑Bench (Ego Streaming Proactive Benchmark) alongside the ESTP‑F1 metric—a novel framework designed for their rigorous assessment. Secondly, we propose a comprehensive technical pipeline to enable models to tackle this challenging task. This pipeline comprises: (1) a data engine, (2) a multi‑stage training strategy, and (3) a proactive dynamic compression technique. Our proposed model effectively addresses these critical properties while outperforming multiple baselines across diverse online and offline benchmarks.

## The Challenge: From Passive Observer to Proactive Assistant
Imagine an AI assistant that not just sees your world, but proactively thinks and helps when needed. Current video models are mostly passive observers, struggling with three core challenges in streaming video:

1.  Proactive Coherence: How to understand context and answer questions that depend on future events? 

2.  Just-in-Time Responsiveness: How to respond precisely when evidence is sufficient—not too early, not too late? 

3.  Synchronized Efficiency: How to generate answers without missing new visual information, keeping perception and reasoning perfectly aligned?

<figure class="ewo-figure">
  <!-- Replace the placeholder below with an <img> tag when ready -->
  <div class="ewo-ph" aria-label="Framework placeholder">
   <img class="ewo-teaser" src="/images/eyewo5.png" alt="Eyes Wide Open teaser" style="max-width: 960px; width: 100%;">
  </div>
  <figcaption class="ewo-caption">Figure 1. Table.</figcaption>
  
</figure>


## Framework
To overcome these challenges, we developed 

VideoLLM-EyeWO, a complete technical pipeline featuring three key innovations:

1. Data Engine: Automatically generates large-scale, diverse, and multi-turn proactive QA data to fuel model training.

2. Multi-Stage Training Strategy: Progressively teaches the model to master response timing ("when to answer") and accuracy ("how to answer"), ultimately achieving coherent, multi-turn dialogue.

3. Proactive Dynamic Compression: Intelligently adjusts the information compression rate based on response likelihood, enabling efficient and synchronized perception and reasoning.

<figure class="ewo-figure">
  <!-- Replace the placeholder below with an <img> tag when ready -->
  <div class="ewo-ph" aria-label="Framework placeholder">
    <img class="ewo-teaser" src="/images/eyewo2.png" alt="Eyes Wide Open teaser" style="max-width: 960px; width: 100%;">
  </div>
  <figcaption class="ewo-caption">Figure Framework overview. </figcaption>
  
</figure>

## Results

<div class="ewo-grid">
  <figure class="ewo-figure">
    <div class="ewo-ph ewo-small" aria-label="Quantitative results placeholder">
      <img class="ewo-teaser" src="/images/eyewo3.png" alt="Eyes Wide Open teaser" style="max-width: 960px; width: 100%;">
    </div>
    <figcaption class="ewo-caption">ESTP result.</figcaption>
  </figure>

  <figure class="ewo-figure">
    <div class="ewo-ph ewo-small" aria-label="Qualitative results placeholder">
      <img class="ewo-teaser" src="/images/eyewo4.png" alt="Eyes Wide Open teaser" style="max-width: 960px; width: 100%;">
    </div>
    <figcaption class="ewo-caption">Evalutation of VideoLLM-EyeWO.</figcaption>
  </figure>
</div>


## TODO
<ul class="ewo-todo">
  <li>public in arxiv</li>
  <li>release full paper</li>
  <li>release code in VideoLLM-EyeWO</li>
  <li>release ESTP-Bench and ESTP-IT</li>
  <li>release ESTP-Bench v2</li>
  <li>public LiveCC-EyeWO result</li>
  <li>release code in LiveCC-EyeWO</li>
  
</ul>


## BibTeX

<span id="bibtex"></span>
<!-- 
```bibtex
@inproceedings{zhang2025eyeswideopen,
  title     = {Eyes Wide Open: Ego Proactive Video-LLM for Streaming Video},
  author    = {Zhang, Yulin and Shi, Cheng and Wang, Yang and Yang, Sibei},
  booktitle = {NeurIPS},
  year      = {2025}
}
``` -->

