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

  <img class="ewo-teaser" src="/images/WeaveTime_Fig1.png" alt="WeaveTime teaser" style="max-width: 960px; width: 100%;">
</div>

## Abstract

TBA.

## Overview

<figure class="ewo-figure">
  <div class="ewo-ph" aria-label="Figure placeholder">
    <img class="ewo-teaser" src="/images/WeaveTime_Fig1.png" alt="WeaveTime figure placeholder" style="max-width: 960px; width: 100%;">
  </div>
  <figcaption class="ewo-caption">Figure 1. Placeholder (replace with the real figure later).</figcaption>
</figure>

## TODO
<ul class="ewo-todo">
  <li>add paper PDF link</li>
  <li>add arXiv link</li>
  <li>add code link</li>
  <li>add abstract and key results</li>
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

