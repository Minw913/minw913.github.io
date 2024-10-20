---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
redirect_from:
  - /research
---

<!-- {% include base_path %} -->

<!-- 研究项目标题 -->
### **Predicting Roadside Emissions Using Spatiotemporal Neural Networks: A Case Study in London**
<p style="color: #757575; font-size: 16px;">June 20, 2024 – Aug 15, 2024</p>

<!-- 轮播图部分 -->
<div id="researchCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#researchCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#researchCarousel" data-slide-to="1"></li>
    <li data-target="#researchCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/research_1/img_1.png" class="d-block w-100" alt="Research Image 1">
    </div>
    <div class="carousel-item">
      <img src="/images/research_1/img_2.png" class="d-block w-100" alt="Research Image 2">
    </div>
    <div class="carousel-item">
      <img src="/images/research_1/img_3.png" class="d-block w-100" alt="Research Image 3">
    </div>
  </div>
  <a class="carousel-control-prev" href="#researchCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#researchCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<!-- 摘要部分 -->
<div class="research-summary">
  <p>As one of the world's largest cities, London experiences heavy traffic with road emissions being a key factor affecting air quality, where predicting the spatiotemporal distribution of road emissions is crucial. This study aims to forecast future NO<sub>2</sub> concentrations over a given interval based on spatiotemporal factors collected from monitoring stations across the city. The main contributions are:</p>

  <ul>
    <li>Compiled a comprehensive feature set, categorized into spatial static and temporal features, with the addition of traffic-related characteristics (e.g., road conditions, network structure, traffic volume), providing valuable insights for transportation policy.</li>
    <li>Incorporated pollutant dispersion knowledge to build a spatiotemporal dynamic graph of monitoring stations, enhancing accuracy.</li>
    <li>Developed a hybrid model combining Graph Neural Networks and LSTM, capturing complex spatiotemporal dependencies of road emissions.</li>
  </ul>

  <p>To validate the model's applicability, experiments used a spatiotemporal dataset of hourly air pollutants from roadside stations in London, sourced from the <a href="https://www.londonair.org.uk/london/asp/publicdetails.asp" target="_blank" style="color: #757575;">London Air Quality Network (LAQN)</a>. Results show that the proposed model outperforms existing baselines in prediction accuracy. Specifically, the graph attention mechanism improves accuracy by 12.5% and the encoder-decoder architecture in LSTM extends the forecast horizon to 12 hours, with superior performance in long-term (9-12h) predictions over short-term (1-4h).</p>

  <!-- 关键词部分 -->
  <p><strong>Key words:</strong> Air quality forecasting, spatiotemporal data modeling, Graph attention network</p>

  <!-- 相关链接部分 -->
  <!-- 引入 Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

  <p><strong>Related links:</strong> Preprint forthcoming on arXiv. Code available on <a href="https://github.com/your-repo-link" target="_blank"><i class="fab fa-github"></i> GitHub</a>.</p>

</div>


<!-- Education
======
* Ph.D in Version Control Theory, GitHub University, 2018 (expected)
* M.S. in Jekyll, GitHub University, 2014
* B.S. in GitHub, GitHub University, 2012

Work experience
======
* Spring 2024: Academic Pages Collaborator
  * Github University
  * Duties includes: Updates and improvements to template
  * Supervisor: The Users

* Fall 2015: Research Assistant
  * Github University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub

* Summer 2015: Research Assistant
  * Github University
  * Duties included: Tagging issues
  * Supervisor: Professor Git
  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3 -->

<!-- Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
