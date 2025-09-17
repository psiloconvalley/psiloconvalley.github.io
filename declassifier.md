---
layout: wide
title: Declassifier
permalink: /declassifier/
---

<!--
  DECLASSIFIER: Terminal + Research Briefings
  This page is self-contained. To upgrade to real AI, replace the runQuery() function.
-->

<style>
  /* --- Terminal & Container Styles --- */
  .declassifier-terminal-container {
    max-width: 850px;
    margin: 2rem auto 4rem auto;
    font-family: 'Courier New', Monaco, monospace;
  }
  .declassifier-terminal {
    background: #1a1a1a;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
  .terminal-header {
    background: #333;
    padding: 0.5rem 1rem;
    color: #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
  }
  .terminal-controls {
    display: flex;
    gap: 0.4rem;
  }
  .control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .control.close { background: #ff5f57; }
  .control.minimize { background: #ffbd2e; }
  .control.maximize { background: #28ca42; }

  /* Terminal Body & Interaction */
  .terminal-body {
    padding: 1.5rem;
    background: #222;
    color: #e0e0e0;
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
  .terminal-output {
    margin-bottom: 1rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  .terminal-line {
    margin-bottom: 0.5rem;
    opacity: 0;
    animation: fadeIn 0.3s forwards;
  }
  @keyframes fadeIn { to { opacity: 1; } }

  .terminal-prompt-line {
    display: flex;
    align-items: flex-start;
    margin-top: 1rem;
  }
  .terminal-prompt-line span {
    color: #4dabf7;
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
  .terminal-input {
    flex: 1;
    background: transparent;
    border: none;
    color: #fff;
    outline: none;
    font-family: inherit;
    font-size: 0.95rem;
    min-height: 1.5em;
  }
  .terminal-input:empty:before {
    content: "Type a topic (e.g., microdosing) and press Enter...";
    color: #666;
  }

  .declassify-btn {
    display: block;
    margin: 1rem auto;
    padding: 0.75rem 2rem;
    background: #4dabf7;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    cursor: pointer;
    transition: background 0.2s;
  }
  .declassify-btn:hover {
    background: #3a8bc7;
  }

  /* --- Report/Briefing Styles --- */
  .available-reports-container {
    max-width: 850px;
    margin: 2rem auto;
  }
  .report-buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }
  .report-btn {
    padding: 0.5rem 1rem;
    background: #eee;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .report-btn:hover {
    background: #e0e0e0;
  }
  .report-btn.active {
    background: #4dabf7;
    color: white;
    border-color: #4dabf7;
  }

  .report-container {
    max-width: 850px;
    margin: 0 auto 4rem auto;
  }
  .report-content {
    display: none;
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  .report-content.visible {
    display: block;
  }

  .report-title {
    color: #222;
    margin-top: 0;
    border-bottom: 2px solid #4dabf7;
    padding-bottom: 0.5rem;
  }
  .report-section {
    margin-bottom: 2rem;
  }
  .report-section h3 {
    color: #4dabf7;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }
  .report-section p, .report-section ul {
    line-height: 1.7;
    color: #444;
  }
  .report-section ul {
    padding-left: 1.2rem;
  }
  .report-section li {
    margin-bottom: 0.5rem;
  }

  .connection {
    background: #eef7ff;
    padding: 1rem;
    border-left: 4px solid #4dabf7;
  }
</style>

<!-- Hero Section -->
<div class="declassifier-hero">
  <div class="container narrow">
    <h1>Psilocybin Declassifier</h1>
    <p class="about-subtitle">Access structured briefings on the science of psilocybin, neuroplasticity, and fungal innovation.</p>
  </div>
</div>

<!-- Terminal Interface -->
<div class="declassifier-terminal-container">
  <div class="declassifier-terminal">
    <div class="terminal-header">
      <span>PSILOCYBIN_TERMINAL.EXE</span>
      <div class="terminal-controls">
        <span class="control close"></span>
        <span class="control minimize"></span>
        <span class="control maximize"></span>
      </div>
    </div>
    <div class="terminal-body">
      <div class="terminal-output" id="terminalOutput">
        <div class="terminal-line">> SYSTEM INITIALIZED.</div>
        <div class="terminal-line">> Welcome to the Research Declassifier.</div>
      </div>
      <div class="terminal-prompt-line">
        <span>></span>
        <div class="terminal-input" contenteditable="true" id="queryInput"></div>
      </div>
    </div>
  </div>
  <button class="declassify-btn" id="declassifyBtn">Run Query</button>
</div>

<!-- Quick Access Reports -->
<div class="available-reports-container">
  <div class="container narrow">
    <h3>Featured Briefings</h3>
    <div class="report-buttons">
      <button class="report-btn active" data-report="report-depression">Depression</button>
      <button class="report-btn" data-report="report-neuroplasticity">Neuroplasticity</button>
      <button class="report-btn" data-report="report-materials">Mycelium Tech</button>
    </div>
  </div>
</div>

<!-- Report Content Area -->
<div class="report-container" id="reportContainer">

  <!-- Report 1: Depression -->
  <div class="report-content visible" id="report-depression">
    <h2 class="report-title">Briefing: Psilocybin for Treatment-Resistant Depression (TRD)</h2>

    <div class="report-section">
      <h3>1. Executive Summary</h3>
      <p>Clinical trials demonstrate that psilocybin-assisted therapy produces rapid and enduring antidepressant effects. In contrast to daily SSRIs, one or two high-dose sessions can lead to remission lasting months by facilitating profound psychological shifts and "rewiring" rigid thought patterns.</p>
    </div>

    <div class="report-section">
      <h3>2. Key Evidence</h3>
      <ul>
        <li><b>New England Journal of Medicine (2022):</b> COMPASS Pathways Phase IIb trial found a single 25mg dose significantly reduced depression scores at 3 weeks compared to placebo.</li>
        <li><b>JAMA Psychiatry (2020):</b> NYU/Hopkins study showed psilocybin rapidly reduced depression and anxiety in cancer patients, with effects sustained for over 4 years in follow-ups.</li>
      </ul>
    </div>

    <div class="report-section connection">
      <h3>3. The Psiloconvalley Signal</h3>
      <p>This research shifts the paradigm from "managing symptoms" to "treating root causes." It signals a future where mental health care is precise, short-term, and curative, driven by insights into brain plasticity.</p>
    </div>
  </div>

  <!-- Report 2: Neuroplasticity -->
  <div class="report-content" id="report-neuroplasticity">
    <h2 class="report-title">Briefing: Psilocybin & Neuroplasticity</h2>

    <div class="report-section">
      <h3>1. Executive Summary</h3>
      <p>Psilocybin acts as a catalyst for <b>neuroplasticity</b>—the brain's ability to reorganize itself by forming new neural connections. This effect may explain the "reset" feeling and long-term benefits reported by users.</p>
    </div>

    <div class="report-section">
      <h3>2. Key Evidence</h3>
      <ul>
        <li><b>Cell Reports (2018) - "The Psychedelics as Plasticity Promoters" (Ly et al.):</b> Showed that psilocybin and other psychedelics increase dendritic spine density (new connections between neurons) in the prefrontal cortex of mice within 24 hours.</li>
        <li><b>Human Brain Mapping (2022):</b> Scans show increased global connectivity and a temporary "loosening" of rigid brain networks under psilocybin.</li>
      </ul>
    </div>

    <div class="report-section connection">
      <h3>3. The Psiloconvalley Signal</h3>
      <p>If the brain is hardware, psilocybin is an update patch. The ability to intentionally promote learning and adaptation is the ultimate biohack, with implications for learning, creativity, and recovery from injury.</p>
    </div>
  </div>

  <!-- Report 3: Mycelium Materials -->
  <div class="report-content" id="report-materials">
    <h2 class="report-title">Briefing: Mycelium as Sustainable Technology</h2>

    <div class="report-section">
      <h3>1. Executive Summary</h3>
      <p>Mycelium (the root structure of fungi) is being harnessed to "grow" industrial materials. By feeding agricultural waste to mushroom strains, companies create biodegradable alternatives to plastic foam, leather, and building materials.</p>
    </div>

    <div class="report-section">
      <h3>2. Key Applications</h3>
      <ul>
        <li><b>Ecovative Design:</b> Produces "MycoComposite" packaging (used by Dell and IKEA) that is home-compostable.</li>
        <li><b>MycoWorks:</b> Creates "Reishi," a premium, sustainable leather alternative adopted by luxury brands like Hermès.</li>
        <li><b>Construction:</b> Mycelium bricks are naturally fire-retardant and insulating.</li>
      </ul>
    </div>

    <div class="report-section connection">
      <h3>3. The Psiloconvalley Signal</h3>
      <p>This is decentralized, circular manufacturing. It demonstrates how biological intelligence can replace extractive industrial processes, merging "tech" with the wisdom of natural systems.</p>
    </div>
  </div>

</div>

<!-- JavaScript for Interactivity -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const terminalInput = document.getElementById('queryInput');
    const terminalOutput = document.getElementById('terminalOutput');
    const runBtn = document.getElementById('declassifyBtn');
    const reportButtons = document.querySelectorAll('.report-btn');
    const reportContents = document.querySelectorAll('.report-content');

    // --- 1. Handle Report Switching (Buttons) ---
    reportButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Deactivate all buttons, activate the clicked one
        reportButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Hide all reports, show the matching one
        const targetReportId = this.getAttribute('data-report');
        
