---
layout: archive
title: "5Research"
permalink: /research/
author_profile: true
redirect_from:
  - /research
---

{% include base_path %}

## **Overview**
<p>
Compared to research, these projects were more comprehensive efforts completed through team collaboration. In most of these projects, I served as the team leader, managing the overall project framework and solving technical challenges. Below is a chronological list of these projects.
</p>

<!-- 研究项目标题 -->
<h2 class="toggle-header" style="cursor: pointer;">
  <span class="toggle-icon">▶</span><strong> RE1 Predicting roadside emissions using spatiotemporal neural networks: A case study in London</strong>
</h2>
<p style="color: #757575; font-size: 16px;">June 20, 2024 – Aug 15, 2024</p>
<div class="toggle-content" style="display: none;">
  <!-- 关键词部分 -->
  <p><strong>Key words:</strong> road emission prediction, spatiotemporal modeling, graph attention network</p>

  <!-- 父容器 -->
  <div class="content-wrapper" style="display: flex; max-height: 400px; align-items: flex-start;">
    <div id="researchCarousel" class="carousel slide" data-ride="carousel" style="flex-basis: 50%; max-height: 400px">
      <ol class="carousel-indicators">
        <li data-target="#researchCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#researchCarousel" data-slide-to="1"></li>
        <li data-target="#researchCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/research_1/img_1.png" class="d-block mx-auto" alt="Research Image 1">
          <div class="carousel-caption d-none d-md-block">
            <h5>The air pollutant monitoring stations in London</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/research_1/img_2.png" class="d-block mx-auto" alt="Research Image 2">
          <div class="carousel-caption d-none d-md-block">
            <h5>The time series of NO2 concentration at stations</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/research_1/img_3.png" class="d-block mx-auto" alt="Research Image 3" style="margin-top: 50px;">
          <!--  style="object-fit: contain; width: 100%; height: auto;" -->
          <div class="carousel-caption d-none d-md-block">
            <h5>Monitoring station graphs with different distance thresholds</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/research_1/img_4.png" class="d-block mx-auto" alt="Research Image 4" style="margin-top: 50px;">
          <!--  style="object-fit: contain; width: 100%; height: auto;" -->
          <div class="carousel-caption d-none d-md-block">
            <h5>Performance metrics in terms of time granularities</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/research_1/img_5.png" class="d-block mx-auto" alt="Research Image 5" style="margin-top: 50px;">
          <!--  style="object-fit: contain; width: 100%; height: auto;" -->
          <div class="carousel-caption d-none d-md-block">
            <h5>Emission prediction fit curves and the actual time series</h5>
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
    </div>
    <!-- 摘要部分 -->
    <div class="research-summary" style="flex-basis: 50%; max-height: 400px; overflow-y: auto; padding: 10px; margin-left: 20px;">
      <p>London's heavy traffic with road emissions significantly impacts air quality, which becomes being a major concern. This study predicts future NO<sub>2</sub> concentrations based on spatiotemporal data around citywide monitoring stations.</p>
      <p><strong>Key contributions</strong></p>
      <ul>
        <li>Compiled a comprehensive spatiotemporal feature set with traffic characteristics (e.g., road conditions, network structure, traffic volume), providing valuable insights for transportation policy.</li>
        <li>Incorporated pollutant dispersion knowledge to build a spatiotemporal dynamic graph of monitoring stations, enhancing accuracy.</li>
        <li>Developed a hybrid model combining Graph Neural Networks and LSTM, capturing complex spatiotemporal dependencies of road emissions.</li>
      </ul>

      <p>Experiments on hourly air pollutant data from London's roadside stations, sourced from the <a href="https://www.londonair.org.uk/london/asp/publicdetails.asp" target="_blank" style="color: #757575;">London Air Quality Network (LAQN)</a>, validate the model. Results show a 12.5% accuracy improvement with the graph attention mechanism and extended forecast horizon to 12 hours using the LSTM encoder-decoder, outperforming baselines, especially in long-term (9-12h) predictions.</p>
    </div>
  </div>
</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<p style="margin-top: 30px; margin-bottom: 0;">Preprint forthcoming on arXiv. Code available on <a href="https://github.com/your-repo-link" target="_blank"><i class="fab fa-github"></i> GitHub</a>.</p>
<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">




<!-- 研究项目标题 -->
<h2 class="toggle-header" style="cursor: pointer;">
  <span class="toggle-icon">▶</span><strong> RE2 Investigating the impact of London's Ultra Low Emission Zone on electric vehicle adoption</strong>
</h2>
<p style="color: #757575; font-size: 16px;">May 20, 2024 – June 15, 2024</p>
<div class="toggle-content" style="display: none;">
<!-- 关键词部分 -->
  <p><strong>Keywords:</strong> road emission prediction, spatiotemporal data modeling, graph attention network</p>

  <!-- 父容器 -->
  <div class="content-wrapper" style="display: flex; max-height: 400px; align-items: flex-start;">
    <div id="researchCarousel" class="carousel slide" data-ride="carousel" style="flex-basis: 50%; max-height: 400px">
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
            <h5>The time series of NO2 concentration at stations</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/research_1/img_3.png" class="d-block mx-auto" alt="Research Image 3" style="margin-top: 50px;">
          <!--  style="object-fit: contain; width: 100%; height: auto;" -->
          <div class="carousel-caption d-none d-md-block">
            <h5>Monitoring station graphs with different distance thresholds</h5>
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
    </div>
    <!-- 摘要部分 -->
    <div class="research-summary" style="flex-basis: 50%; max-height: 400px; overflow-y: auto; padding: 10px; margin-left: 20px;">
      <p>London's heavy traffic with road emissions significantly impacts air quality, which becomes being a major concern. This study predicts future NO<sub>2</sub> concentrations based on spatiotemporal data around citywide monitoring stations.</p>
      <p><strong>Key contributions</strong></p>
      <ul>
        <li>Compiled a comprehensive spatiotemporal feature set with traffic characteristics additionally providing valuable insights for transportation policy.</li>
        <li>Incorporated pollutant dispersion knowledge to build a spatiotemporal dynamic graph of monitoring stations, enhancing accuracy.</li>
        <li>Developed a hybrid model combining Graph Neural Networks and LSTM, capturing complex spatiotemporal dependencies of road emissions.</li>
      </ul>

      <p>Experiments on hourly air pollutant data from London's roadside stations, sourced from the <a href="https://www.londonair.org.uk/london/asp/publicdetails.asp" target="_blank" style="color: #757575;">London Air Quality Network (LAQN)</a>, validate the model. Results show a 12.5% accuracy improvement with the graph attention mechanism and extended forecast horizon to 12 hours using the LSTM encoder-decoder, outperforming baselines, especially in long-term (9-12h) predictions.</p>
    </div>
  </div>
  <p style="margin-top: 35px; margin-bottom: 0;"><strong>Honor:</strong> Distinction in course <a href="https://www.lse.ac.uk/resources/calendar2023-2024/courseGuides/GY/2023_GY460.htm"> GY460 Techniques of Spatial Economic Analysis</a></p>
</div>
<!-- 分隔线 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<p>
  <a href="/files/research_2/Sample_of_work_EN.pdf" target="_blank">
    <i class="fas fa-file-pdf"></i> Sample of Work
  </a>
<p style="margin-top: 30px; margin-bottom: 0;"></p>
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">



<!-- 研究项目标题 -->
<!-- <h2 class="toggle-header" style="cursor: pointer;">
  <span class="toggle-icon">▶</span><strong> RE3 Study on multi-scale spatiotemporal impact mechanism in nighttime economy: A case in Nanjing, China</strong>
</h2>
<p style="color: #757575; font-size: 16px;">Jan 20, 2023 – May 15, 2023</p>


<h2 class="toggle-header" style="cursor: pointer;">
  <span class="toggle-icon">▶</span><strong> RE4 Spatio-temporal evolution of urban low-carbon competitiveness in the Yangtze River Delta from 2000 to 2020</strong>
</h2>
<p style="color: #757575; font-size: 16px;">Oct 01, 2021 – Nov 15, 2022</p>
<div class="toggle-content" style="display: none;">
  <!-- <p style="color: #757575; font-size: 16px;">June 20, 2024 – Aug 15, 2022</p> -->
  <!-- 关键词部分 -->
  <p><strong>Keywords:</strong> Yangtze river delta; low-carbon competitiveness; grey correlation TOPSIS; exploratory spatiotemporal data analysis</p>

  <!-- 父容器 -->
  <div class="content-wrapper" style="display: flex; max-height: 400px; align-items: flex-start;">
    <div id="researchCarouse2" class="carousel slide" data-ride="carousel" style="flex-basis: 50%; max-height: 400px">
      <ol class="carousel-indicators">
        <li data-target="#researchCarouse2" data-slide-to="0" class="active"></li>
        <li data-target="#researchCarouse2" data-slide-to="1"></li>
        <li data-target="#researchCarouse2" data-slide-to="2"></li>
        <li data-target="#researchCarouse2" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/research_4/img_1.png" class="d-block mx-auto" alt="Research Image 1"
          style="margin-top: 20px;">
          <div class="carousel-caption d-none d-md-block">
            <h5 >Research framework</h5>
          </div>
          <!-- 放大按钮 -->
          <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        </div>
        <!-- 放大按钮 -->
        <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        <div class="carousel-item">
          <div class="d-block w-100" style="height: 500px;">
            <img src="/images/research_4/img_3.png" class="d-block mx-auto" alt="Research Image 1"
            style="margin-top: 20px;">
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5 style="font-size: 12px;">Spatiotemporal evolution of urban low-carbon competitiveness</h5>
          </div>
           <!-- 放大按钮 -->
          <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        </div>
        <div class="carousel-item">
          <div class="d-block w-100" style="height: 500px;">
            <img src="/images/research_4/img_4.png" class="d-block mx-auto" alt="Research Image 1"
            style="margin-top: 20px;">
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>Spatiotemporal evolution types of low-carbon competitiveness</h5>
          </div>
           <!-- 放大按钮 -->
          <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        </div>
        <div class="carousel-item">
          <div class="d-block w-100" style="height: 500px;">
            <img src="/images/research_4/img_5.png" class="d-block mx-auto" alt="Research Image 1"
            style="margin-top: 20px;">
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>Impact mechanism of urban low-carbon competitiveness</h5>
          </div>
           <!-- 放大按钮 -->
          <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        </div>
      </div>
      <!-- Controls -->
      <a class="carousel-control-prev" href="#researchCarouse2" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#researchCarouse2" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- 轮播图放大模态框 HTML -->
    <!-- <div id="imageModal" class="modal">
      <span class="close" onclick="closeModal()">&times;</span>
      <img class="modal-content" id="modalImg">
    </div> -->
    <!-- 摘要部分 -->
    <div class="research-summary" style="flex-basis: 50%; max-height: 400px; overflow-y: auto; padding: 10px; margin-left: 20px;">
      <p>To achieve carbon peaking and carbon neutrality goals, it is necessary to recognize the spatiotemporal evolution patterns of urban low-carbon competitiveness at a regional scale. This study focuses on the low-carbon competitiveness of 41 cities in the Yangtze River Delta from 2000 to 2020.</p>
      <p><strong>Key contributions</strong></p>
      <ul>
        <li>Developed a comprehensive index system for evaluating urban low-carbon competitiveness, consisting of three dimensions: carbon emissions, socio-economic factors, and low-carbon technologies and policies.</li>

        <li>Analyzed the time-series evolution of low-carbon competitiveness using the TOPSIS grey relational analysis method and identified spatial patterns with LISA time path and space-time transition models.</li>

        <li>Classified the 41 cities into 7 spatiotemporal evolution types to reveal different spatial characteristics of low-carbon competitiveness.</li>
      </ul>

      <p>The study shows significant changes in low-carbon competitiveness in the Yangtze River Delta over 20 years, with Shanghai ranking highest and Anhui Province lowest. The spatial correlation of carbon emissions varied greatly, while socio-economic factors were weaker. 81.1% of cities exhibited path dependence in their spatiotemporal evolution.</p>
    </div>
  </div>
<!-- </div> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <p style="margin-top: 35px; margin-bottom: 0;"><strong>Honor:</strong> Excellent Reporting Award in the 3rd National Symposium on Regional Ecology; Accepted by the journal <i>Geographical Research</i>.</p>
</div>
<!-- 引入 Font Awesome 的 CDN，用于加载 PDF 图标 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<p>Sample of Work &nbsp;(
  <a href="/files/research_4/Sample_of_work_ZH.pdf" target="_blank">
    <i class="fas fa-file-pdf"></i> ZH
  </a>
  &nbsp;&nbsp; 
  <a href="/files/research_4/Sample_of_work_EN.pdf" target="_blank">
    <i class="fas fa-file-pdf"></i> EN
  </a>)
</p>
<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">