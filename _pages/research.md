---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
sidebar: false  # 关闭侧边栏
redirect_from:
  - /research
---

<!-- {% include base_path %} -->

<!-- 研究项目标题 -->
## **Predicting Roadside Emissions Using Spatiotemporal Neural Networks: A Case Study in London**
<p style="color: #757575; font-size: 16px;">June 20, 2024 – Aug 15, 2024</p>
<!-- 关键词部分 -->
<p><strong>Key words:</strong> Air quality forecasting, spatiotemporal data modeling, Graph attention network</p>

<!-- 父容器 -->
<div class="content-wrapper" style="display: flex; align-items: flex-start; width: 500px;">
  <div id="researchCarousel" class="carousel slide" data-ride="carousel" style="flex-basis: 50%; background-color: black;">
    <ol class="carousel-indicators">
      <li data-target="#researchCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#researchCarousel" data-slide-to="1"></li>
      <li data-target="#researchCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/images/research_1/img_1.png" class="d-block mx-auto" alt="Research Image 1">
        <div class="carousel-caption d-none d-md-block">
          <h5>The distribution of Monitoring stations in London</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/images/research_1/img_2.png" class="d-block mx-auto" alt="Research Image 2">
        <div class="carousel-caption d-none d-md-block">
          <h5>The time series of NO2 concentration at stations during study period</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/images/research_1/img_3.png" class="d-block mx-auto" alt="Research Image 3">
        <!--  style="object-fit: contain; width: 100%; height: auto;" -->
        <div class="carousel-caption d-none d-md-block">
          <h5>Station Graphs with different 𝜆</h5>
        </div>
      </div>
    </div>
    <!-- Controls -->
    <a class="carousel-control-prev" href="#researchCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#researchCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  <!-- </div> -->

  <!-- Pause Button -->
    <button class="carousel-control-pause" id="carouselPauseButton" onclick="toggleCarouselPause()">Pause</button>

  <!-- 相关链接部分，放置在轮播图的下方 -->
    <div class="related-links" style="margin-top: 15px;">
      <p>Preprint forthcoming on arXiv. Code available on 
        <a href="https://github.com/your-repo-link" target="_blank">
          <i class="fab fa-github"></i> GitHub
        </a>.
      </p>
    </div>
  </div>

  <!-- 摘要部分 -->
  <div class="research-summary" style="flex-basis: 50%; overflow-y: auto; padding: 10px;">
    <p>As one of the world's largest cities, London experiences heavy traffic with road emissions being a key factor affecting air quality, where predicting the spatiotemporal distribution of road emissions is crucial. This study aims to forecast future NO<sub>2</sub> concentrations over a given interval based on spatiotemporal factors collected from monitoring stations across the city. The main contributions are:</p>

    <ul>
      <li>Compiled a comprehensive feature set, categorized into spatial static and temporal features, with the addition of traffic-related characteristics (e.g., road conditions, network structure, traffic volume), providing valuable insights for transportation policy.</li>
      <li>Incorporated pollutant dispersion knowledge to build a spatiotemporal dynamic graph of monitoring stations, enhancing accuracy.</li>
      <li>Developed a hybrid model combining Graph Neural Networks and LSTM, capturing complex spatiotemporal dependencies of road emissions.</li>
    </ul>

    <p>To validate the model's applicability, experiments used a spatiotemporal dataset of hourly air pollutants from roadside stations in London, sourced from the <a href="https://www.londonair.org.uk/london/asp/publicdetails.asp" target="_blank" style="color: #757575;">London Air Quality Network (LAQN)</a>. Results show that the proposed model outperforms existing baselines in prediction accuracy. Specifically, the graph attention mechanism improves accuracy by 12.5% and the encoder-decoder architecture in LSTM extends the forecast horizon to 12 hours, with superior performance in long-term (9-12h) predictions over short-term (1-4h).</p>
  </div>
</div>

<!-- 相关链接部分 -->
<!-- 引入 Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<!-- <p style="margin-top: 30px;">Preprint forthcoming on arXiv. Code available on <a href="https://github.com/your-repo-link" target="_blank"><i class="fab fa-github"></i> GitHub</a>.</p> -->
<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 0px; margin-bottom: 0px;">