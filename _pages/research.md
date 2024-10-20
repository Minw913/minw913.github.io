---
layout: archive
title: "9Research"
permalink: /research/
author_profile: true
# sidebar: false  # 关闭侧边栏(没用)
redirect_from:
  - /research
---

<!-- {% include base_path %} -->

<!-- 研究项目标题 -->
## **RE1 Predicting roadside emissions using spatiotemporal neural networks: A case study in London**
<p style="color: #757575; font-size: 16px;">June 20, 2024 – Aug 15, 2024</p>
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
    <p>London's heavy traffic with road emissions significantly impacts air quality, which becomes being a major concern. This study predicts future NO<sub>2</sub> concentrations based on spatiotemporal data around citywide monitoring stations. Key contributions include:</p>

    <ul>
      <li>Compiled a comprehensive spatiotemporal feature set with traffic characteristics (e.g., road conditions, network structure, traffic volume), providing valuable insights for transportation policy.</li>
      <li>Incorporated pollutant dispersion knowledge to build a spatiotemporal dynamic graph of monitoring stations, enhancing accuracy.</li>
      <li>Developed a hybrid model combining Graph Neural Networks and LSTM, capturing complex spatiotemporal dependencies of road emissions.</li>
    </ul>

    <p>Experiments on hourly air pollutant data from London's roadside stations, sourced from the <a href="https://www.londonair.org.uk/london/asp/publicdetails.asp" target="_blank" style="color: #757575;">London Air Quality Network (LAQN)</a>, validate the model. Results show a 12.5% accuracy improvement with the graph attention mechanism and extended forecast horizon to 12 hours using the LSTM encoder-decoder, outperforming baselines, especially in long-term (9-12h) predictions.</p>
  </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<p style="margin-top: 30px; margin-bottom: 0;">4Preprint forthcoming on arXiv. Code available on <a href="https://github.com/your-repo-link" target="_blank"><i class="fab fa-github"></i> GitHub</a>.</p>
<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">






<!-- 研究项目标题 -->
## **RE2 Investigating the impact of London's Ultra Low Emission Zone on electric vehicle adoption**
<p style="color: #757575; font-size: 16px;">May 20, 2024 – June 15, 2024</p>
<!-- 关键词部分 -->
<p><strong>Key words:</strong> road emission prediction, spatiotemporal data modeling, graph attention network</p>

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
    <p>London's heavy traffic with road emissions significantly impacts air quality, which becomes being a major concern. This study predicts future NO<sub>2</sub> concentrations based on spatiotemporal data around citywide monitoring stations. Key contributions include:</p>

    <ul>
      <li>Compiled a comprehensive spatiotemporal feature set with traffic characteristics (e.g., road conditions, network structure, traffic volume), providing valuable insights for transportation policy.</li>
      <li>Incorporated pollutant dispersion knowledge to build a spatiotemporal dynamic graph of monitoring stations, enhancing accuracy.</li>
      <li>Developed a hybrid model combining Graph Neural Networks and LSTM, capturing complex spatiotemporal dependencies of road emissions.</li>
    </ul>

    <p>Experiments on hourly air pollutant data from London's roadside stations, sourced from the <a href="https://www.londonair.org.uk/london/asp/publicdetails.asp" target="_blank" style="color: #757575;">London Air Quality Network (LAQN)</a>, validate the model. Results show a 12.5% accuracy improvement with the graph attention mechanism and extended forecast horizon to 12 hours using the LSTM encoder-decoder, outperforming baselines, especially in long-term (9-12h) predictions.</p>
  </div>
</div>

<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">



<!-- 研究项目标题 -->
## **RE3 Study on multi-scale spatiotemporal impact mechanism in nighttime economy based on explainable deep learning: A case in Nanjing, China**
<p style="color: #757575; font-size: 16px;">Jan 20, 2023 – May 15, 2023</p>
<!-- 关键词部分 -->
<p><strong>Key words:</strong> road emission prediction, spatiotemporal data modeling, graph attention network</p>

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
    <p>London's heavy traffic with road emissions significantly impacts air quality, which becomes being a major concern. This study predicts future NO<sub>2</sub> concentrations based on spatiotemporal data around citywide monitoring stations. Key contributions include:</p>

    <ul>
      <li>Compiled a comprehensive spatiotemporal feature set with traffic characteristics (e.g., road conditions, network structure, traffic volume), providing valuable insights for transportation policy.</li>
      <li>Incorporated pollutant dispersion knowledge to build a spatiotemporal dynamic graph of monitoring stations, enhancing accuracy.</li>
      <li>Developed a hybrid model combining Graph Neural Networks and LSTM, capturing complex spatiotemporal dependencies of road emissions.</li>
    </ul>

    <p>Experiments on hourly air pollutant data from London's roadside stations, sourced from the <a href="https://www.londonair.org.uk/london/asp/publicdetails.asp" target="_blank" style="color: #757575;">London Air Quality Network (LAQN)</a>, validate the model. Results show a 12.5% accuracy improvement with the graph attention mechanism and extended forecast horizon to 12 hours using the LSTM encoder-decoder, outperforming baselines, especially in long-term (9-12h) predictions.</p>
  </div>
</div>

<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">




<!-- 研究项目标题 -->
## **RE4 Spatio-temporal evolution of urban low-carbon competitiveness in the Yangtze River Delta from 2000 to 2020**
<p style="color: #757575; font-size: 16px;">Oct 1, 2021 – Nov 15, 2022</p>
<!-- 关键词部分 -->
<p><strong>Key words:</strong> road emission prediction, spatiotemporal data modeling, graph attention network</p>

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
    <p>London's heavy traffic with road emissions significantly impacts air quality, which becomes being a major concern. This study predicts future NO<sub>2</sub> concentrations based on spatiotemporal data around citywide monitoring stations. Key contributions include:</p>

    <ul>
      <li>Compiled a comprehensive spatiotemporal feature set with traffic characteristics (e.g., road conditions, network structure, traffic volume), providing valuable insights for transportation policy.</li>
      <li>Incorporated pollutant dispersion knowledge to build a spatiotemporal dynamic graph of monitoring stations, enhancing accuracy.</li>
      <li>Developed a hybrid model combining Graph Neural Networks and LSTM, capturing complex spatiotemporal dependencies of road emissions.</li>
    </ul>

    <p>Experiments on hourly air pollutant data from London's roadside stations, sourced from the <a href="https://www.londonair.org.uk/london/asp/publicdetails.asp" target="_blank" style="color: #757575;">London Air Quality Network (LAQN)</a>, validate the model. Results show a 12.5% accuracy improvement with the graph attention mechanism and extended forecast horizon to 12 hours using the LSTM encoder-decoder, outperforming baselines, especially in long-term (9-12h) predictions.</p>
  </div>
</div>

<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">