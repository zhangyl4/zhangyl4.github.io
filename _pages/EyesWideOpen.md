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
    <a class="btn btn--primary" href="" target="_blank" rel="noopener">Paper</a>
    <a class="btn" href="" target="_blank" rel="noopener">Code</a>
    <a class="btn" href="#bibtex">Cite</a>
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

## Resources

- Paper: (coming soon)
- Code: (coming soon)

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

