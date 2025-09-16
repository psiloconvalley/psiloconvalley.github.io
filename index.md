---
layout: default
---

<div class="hero-section">
  <div id="mycelium-visual"></div>
  <div class="hero-content">
  <h1>TESTING 123</h1>
    <p class="hero-subtitle">Exploring the intersection of consciousness, technology, and innovation.</p>
  </div>
</div>

## Recent Articles

{% for post in site.posts limit:5 %}
<article class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
</article>
{% endfor %}

---

## About Psiloconvalley

Psiloconvalley is a platform dedicated to exploring how expanded consciousness, creativity, and innovation intersect in our rapidly evolving world. We examine the role of psychedelics in technological development, the importance of mental flexibility in problem-solving, and the future of human potential.
