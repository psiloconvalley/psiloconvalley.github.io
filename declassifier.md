Let's fix that right now. The issue is likely how the browser handles the `contenteditable` div when you press Enter.

**The Fix: Use a standard, reliable `<input>` field.**

This is more robust across all browsers. I have updated `declassifier.md` to replace the `contenteditable` div with a proper `<input type="text">`.

### Step 1: Replace `declassifier.md` Again

Please delete the contents of `declassifier.md` and paste this updated version.

The key changes are:

1.  **HTML:** Changed `<div contenteditable="true" ...>` to `<input type="text" ...>`.
2.  **JS:** Changed `terminalInput.innerText` to `terminalInput.value`.
3.  **CSS:** Minor tweaks to make the input field look right in the terminal.

```markdown
---
layout: wide
title: Declassifier
permalink: /declassifier/
---

<!--
  DECLASSIFIER: Terminal + Research Briefings (V2 - Fixed Input)
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
    align-items: center;
    margin-top: 1rem;
  }
  .terminal-prompt-line label {
    color: #4dabf7;
    margin-right: 0.5rem;
    flex-shrink: 0;
    font-weight: bold;
  }

  /* THE FIX: Styles for the standard <input> */
  .terminal-input {
    flex: 1;
    background: transparent;
    border: none;
    color: #fff;
    outline: none;
    font-family: inherit;
    font-size: 0.95rem;
    padding: 0;
    width: 100%;
  }
  .terminal-input::placeholder {
    color: #666;
    opacity: 1;
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

      <!-- THE FIX: Using a standard input field -->
      <div class="terminal-prompt-line">
        <label for="queryInput">></label>
        <input
          type="text"
          id="queryInput"
          class="terminal-input"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          placeholder="Type a topic (e.g., microdosing) and press Enter..."
        >
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
      <p>Clinical trials demonstrate that psilocybin-assisted therapy produces rapid and enduring antidepressant effects. One or two high-dose sessions can lead to remission lasting months by facilitating profound psychological shifts and "rewiring" rigid thought patterns.</p>
    </div>
    <div class="report-section connection">
      <h3>2. The Psiloconvalley Signal</h3>
      <p>This research shifts the paradigm from "managing symptoms" to "treating root causes." It signals a future where mental health care is precise, short-term, and curative.</p>
    </div>
  </div>

  <!-- Report 2: Neuroplasticity -->
  <div class="report-content" id="report-neuroplasticity">
    <h2 class="report-title">Briefing: Psilocybin & Neuroplasticity</h2>
    <div class="report-section">
      <h3>1. Executive Summary</h3>
      <p>Psilocybin acts as a catalyst for <b>neuroplasticity</b>—the brain's ability to reorganize itself by forming new neural connections. This may explain the "reset" feeling and long-term benefits.</p>
    </div>
    <div class="report-section connection">
      <h3>2. The Psiloconvalley Signal</h3>
      <p>If the brain is hardware, psilocybin is an update patch. The ability to intentionally promote adaptation is the ultimate biohack.</p>
    </div>
  </div>

   <!-- Report 3: Mycelium Materials -->
   <div class="report-content" id="report-materials">
    <h2 class="report-title">Briefing: Mycelium as Sustainable Technology</h2>
    <div class="report-section">
      <h3>1. Executive Summary</h3>
      <p>Mycelium is being harnessed to "grow" industrial materials. By feeding agricultural waste to mushroom strains, companies create biodegradable alternatives to plastic foam and leather.</p>
    </div>
    <div class="report-section connection">
      <h3>2. The Psiloconvalley Signal</h3>
      <p>This demonstrates how biological intelligence can replace extractive industrial processes, merging "tech" with the wisdom of natural systems.</p>
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
        reportButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const targetReportId = this.getAttribute('data-report');
        showReport(targetReportId);
      });
    });

    // --- 2. Handle Terminal Queries (Simulated) ---
    function processQuery() {
      // THE FIX: Use .value for input elements
      const query = terminalInput.value.trim().toLowerCase();

      if (!query) return;

      // 1. Echo the query
      appendTerminalLine(`> ${query}`);
      appendTerminalLine("> Processing request...");

      // 2. Clear the input field
      terminalInput.value = '';

      // 3. Match query to a report (Simulated AI)
      setTimeout(() => {
        let matchedReport = null;

        if (query.includes('depress') || query.includes('trd') || query.includes('mental')) {
          matchedReport = 'report-depression';
        } else if (query.includes('neuro') || query.includes('plasticity') || query.includes('brain')) {
          matchedReport = 'report-neuroplasticity';
        } else if (query.includes('mycelium') || query.includes('material') || query.includes('sustainable')) {
          matchedReport = 'report-materials';
        }

        if (matchedReport) {
          appendTerminalLine("> MATCH FOUND. Loading briefing...");
          activateReportAndScroll(matchedReport);
        } else {
          appendTerminalLine(`> No match for "${query}". Try "neuroplasticity".`);
        }

      }, 800);
    }

    // --- Helper Functions ---
    function appendTerminalLine(text) {
      const line = document.createElement('div');
      line.className = 'terminal-line';
      line.textContent = text;
      terminalOutput.appendChild(line);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function showReport(reportId) {
        reportContents.forEach(content => content.classList.remove('visible'));
        const targetReport = document.getElementById(reportId);
        if (targetReport) {
          targetReport.classList.add('visible');
        }
    }

    function activateReportAndScroll(reportId) {
      // Sync the button state
      const button = document.querySelector(`.report-btn[data-report="${reportId}"]`);
      if (button) {
        reportButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      }
      // Show the report
      showReport(reportId);
      // Scroll to it
      document.getElementById('reportContainer').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // --- Event Listeners ---
    runBtn.addEventListener('click', processQuery);

    terminalInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        processQuery();
      }
    });

    // Focus the input on load
    terminalInput.focus();
  });
</script>
```

### Step 2: Test

Save the file, let Jekyll refresh, and try typing `depression` and hitting Enter. It should work perfectly now.
