---
layout: default
title: The Mycelium
permalink: /mycelium/
---

<style>
/* --- Styles for The Mycelium Explorer --- */
.mycelium-header {
    text-align: center;
    margin-bottom: 3rem;
}
.mycelium-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}
.mycelium-header p {
    font-size: 1.1rem;
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto;
}

.signal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    perspective: 1000px; /* Enables the 3D flip effect */
}

.signal-card {
    background-color: #f9fafb;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    transform-style: preserve-3d;
    transition: transform 0.7s;
    cursor: pointer;
    min-height: 350px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.signal-card.is-flipped {
    transform: rotateY(180deg);
}

.card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Hides the back of the card until it's flipped */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
}

.card-front h2 {
    font-size: 1.5rem;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
}
.card-front .card-prompt {
    color: var(--text-light);
    font-weight: 500;
}

.card-back {
    transform: rotateY(180deg);
    background: white;
    border-radius: 12px;
    justify-content: flex-start;
    text-align: left;
}

.card-back h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}
.card-back p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
}
.card-back b {
    color: var(--text-color);
}
.card-back a {
    font-weight: 600;
    color: var(--primary-color);
    text-decoration: none;
}
</style>

<div class="mycelium-header">
    <h1>The Mycelium</h1>
    <p>An interactive explorer for the key signals growing at the intersection of consciousness, technology, and innovation. Click a card to flip it.</p>
</div>

<div class="signal-grid">
    <!-- Signal 1: Communication -->
    <div class="signal-card" onclick="this.classList.toggle('is-flipped');">
        <div class="card-face card-front">
            <h2>COMMUNICATION</h2>
            <p class="card-prompt">Fungi are speaking a language of their own.</p>
        </div>
        <div class="card-face card-back">
            <h3>Signal: Fungal Language</h3>
            <p><b>What it is:</b> Research shows fungi transmit electrical signals through mycelial networks in complex patterns that resemble a vocabulary of up to 50 "words."</p>
            <p><b>Why it matters:</b> This opens the door to "myco-computing" and forces us to expand our definitions of "language" and "intelligence" itself.</p>
            <a href="https://www.theguardian.com/science/2022/apr/06/fungi-electrical-impulses-human-language-study" target="_blank">Source: The Guardian</a>
        </div>
    </div>

    <!-- Signal 2: Computation -->
    <div class="signal-card" onclick="this.classList.toggle('is-flipped');">
        <div class="card-face card-front">
            <h2>COMPUTATION</h2>
            <p class="card-prompt">Mycelium is being transformed into living electronics.</p>
        </div>
        <div class="card-face card-back">
            <h3>Signal: Fungal Electronics</h3>
            <p><b>What it is:</b> Scientists are merging mycelium with electronic components to create self-growing and self-repairing circuit boards that can act as biosensors.</p>
            <p><b>Why it matters:</b> This points to a future of "grown" hardware, leading to biodegradable, sustainable, and self-healing computers.</p>
            <a href="https://www.eurekalert.org/news-releases/966504" target="_blank">Source: EurekAlert</a>
        </div>
    </div>

    <!-- Signal 3: Exploration -->
    <div class="signal-card" onclick="this.classList.toggle('is-flipped');">
        <div class="card-face card-front">
            <h2>EXPLORATION</h2>
            <p class="card-prompt">Fungi are being designed for military and space applications.</p>
        </div>
        <div class="card-face card-back">
            <h3>Signal: The Final Frontier</h3>
            <p><b>What it is:</b> DARPA is developing self-healing living materials, while NASA is funding "myco-architecture" to grow habitats on Mars.</p>
            <p><b>Why it matters:</b> This technology could solve humanity's biggest challenges, from sustainable construction on Earth to our future as a multi-planetary species.</p>
            <a href="https://www.nasa.gov/directorates/spacetech/niac/2023/myco-architecture-off-planet/" target="_blank">Source: NASA</a>
        </div>
    </div>
</div>
