---
title: "Eyes Wide Open"
permalink: /publications/eyes-wide-open/
layout: blank
author_profile: false
---

<style>
/* Eyes Wide Open page-only styles */
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
.ewo-ph { display: flex; align-items: center; justify-content: center; width: 100%; aspect-ratio: 16 / 9; border: 2px dashed #cbd5e1; background: linear-gradient(135deg,#f8fafc,#eef2f7); color: #64748b; border-radius: 8px; padding: 8px; text-align: center; font-size: 14px; }
.ewo-small { aspect-ratio: 4 / 3; }
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

## Overview

High-level intuition, data engine, and training details will be summarized here.

## Framework

<figure class="ewo-figure">
  <!-- Replace the placeholder below with an <img> tag when ready -->
  <div class="ewo-ph" aria-label="Framework placeholder">
    Drop framework figure here. Suggested path: /images/EyesWideOpen_framework.png
  </div>
  <figcaption class="ewo-caption">Figure 1. Framework overview. Replace the box above with your image.</figcaption>
  
</figure>

## Results

<div class="ewo-grid">
  <figure class="ewo-figure">
    <div class="ewo-ph ewo-small" aria-label="Quantitative results placeholder">
      Quantitative results (tables/plots). e.g., /images/EyesWideOpen_results_table.png
    </div>
    <figcaption class="ewo-caption">Quantitative results on streaming benchmarks.</figcaption>
  </figure>

  <figure class="ewo-figure">
    <div class="ewo-ph ewo-small" aria-label="Qualitative results placeholder">
      Qualitative examples. e.g., /images/EyesWideOpen_results_qual.png
    </div>
    <figcaption class="ewo-caption">Qualitative examples and visualizations.</figcaption>
  </figure>
</div>


## BibTeX

<span id="bibtex"></span>

```bibtex
@inproceedings{zhang2025eyeswideopen,
  title     = {Eyes Wide Open: Ego Proactive Video-LLM for Streaming Video},
  author    = {Zhang, Yulin and Shi, Cheng and Wang, Yang and Yang, Sibei},
  booktitle = {NeurIPS},
  year      = {2025}
}
```

