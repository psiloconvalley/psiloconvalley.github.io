---
layout: default
title: Articles
permalink: /articles/
---

<h1>Articles</h1>
<p>Deep dives, essays, and analysis that expand on the signals from The Mycelium.</p>

<hr style="margin: 2rem 0;">

{% for post in site.posts %}
  <article class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
  </article>
{% endfor %}
