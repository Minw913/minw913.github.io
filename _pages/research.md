---
layout: archive
title: "3Research"
permalink: /research/
author_profile: true
redirect_from:
  - /research
---

{% include base_path %}

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
<p style="margin-top: 30px; margin-bottom: 0;">Preprint forthcoming on arXiv. Code available on <a href="https://github.com/your-repo-link" target="_blank"><i class="fab fa-github"></i> GitHub</a>.</p>
<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">






<!-- 研究项目标题 -->
## **RE2 Investigating the impact of London's Ultra Low Emission Zone on electric vehicle adoption**
<p style="color: #757575; font-size: 16px;">May 20, 2024 – June 15, 2024</p>
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
    <p>London's heavy traffic with road emissions significantly impacts air quality, which becomes being a major concern. This study predicts future NO<sub>2</sub> concentrations based on spatiotemporal data around citywide monitoring stations. Key contributions include:</p>

    <ul>
      <li>Compiled a comprehensive spatiotemporal feature set with traffic characteristics additionally providing valuable insights for transportation policy.</li>
      <li>Incorporated pollutant dispersion knowledge to build a spatiotemporal dynamic graph of monitoring stations, enhancing accuracy.</li>
      <li>Developed a hybrid model combining Graph Neural Networks and LSTM, capturing complex spatiotemporal dependencies of road emissions.</li>
    </ul>

    <p>Experiments on hourly air pollutant data from London's roadside stations, sourced from the <a href="https://www.londonair.org.uk/london/asp/publicdetails.asp" target="_blank" style="color: #757575;">London Air Quality Network (LAQN)</a>, validate the model. Results show a 12.5% accuracy improvement with the graph attention mechanism and extended forecast horizon to 12 hours using the LSTM encoder-decoder, outperforming baselines, especially in long-term (9-12h) predictions.</p>
  </div>
</div>

<!-- 分隔线 -->
<p style="margin-top: 30px; margin-bottom: 0;"></p>
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">



<!-- 研究项目标题 -->
## **RE3 Study on multi-scale spatiotemporal impact mechanism in nighttime economy based on explainable deep learning: A case in Nanjing, China**
<p style="color: #757575; font-size: 16px;">Jan 20, 2023 – May 15, 2023</p>
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




<h2 class="toggle-header" style="cursor: pointer;">
  <span class="toggle-icon">▶</span><strong> RE3 Spatio-temporal evolution of urban low-carbon competitiveness in the Yangtze River Delta from 2000 to 2020</strong>
</h2>
<p style="color: #757575; font-size: 16px;">Oct 01, 2021 – Nov 15, 2022</p>
<div class="toggle-content" style="display: none;">
  <!-- <p style="color: #757575; font-size: 16px;">June 20, 2024 – Aug 15, 2022</p> -->
  <!-- 关键词部分 -->
  <p><strong>Keywords:</strong> Yangtze river delta; Low-carbon competitiveness; Spatial-temporal evolution; Exploratory spatiotemporal data analysis</p>

  <!-- 父容器 -->
  <div class="content-wrapper" style="display: flex; max-height: 400px; align-items: flex-start;">
    <div id="researchCarouse2" class="carousel slide" data-ride="carousel" style="flex-basis: 50%; max-height: 400px">
      <ol class="carousel-indicators">
        <li data-target="#researchCarouse2" data-slide-to="0" class="active"></li>
        <li data-target="#researchCarouse2" data-slide-to="1"></li>
        <li data-target="#researchCarouse2" data-slide-to="2"></li>
        <li data-target="#researchCarouse2" data-slide-to="3"></li>
        <li data-target="#researchCarouse2" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/project_2/img_1.png" class="d-block mx-auto" alt="Research Image 1"
          style="margin-top: 70px;">
          <div class="carousel-caption d-none d-md-block">
            <h5>Project framework and workflow</h5>
          </div>
          <!-- 放大按钮 -->
          <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        </div>
        <div class="carousel-item">
          <div class="d-block w-100" style="height: 500px;">
            <img src="/images/project_2/img_2.png" class="d-block mx-auto" alt="Research Image 1"
            style="margin-top: 70px;">
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>Spatiotemporal SWB extracted by ChatGPT and BERT</h5>
          </div>
        </div>
        <!-- 放大按钮 -->
        <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        <div class="carousel-item">
          <div class="d-block w-100" style="height: 500px;">
            <img src="/images/project_2/img_3.png" class="d-block mx-auto" alt="Research Image 1"
            style="margin-top: 70px;">
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>Resilience stage division by Regression Discontinuity Design</h5>
          </div>
           <!-- 放大按钮 -->
          <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        </div>
        <div class="carousel-item">
          <div class="d-block w-100" style="height: 500px;">
            <img src="/images/project_2/img_4.png" class="d-block mx-auto" alt="Research Image 1"
            style="margin-top: 70px;">
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>The Global Spatiotemporal impact of SWB using SHAP</h5>
          </div>
           <!-- 放大按钮 -->
          <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        </div>
        <div class="carousel-item">
          <div class="d-block w-100" style="height: 500px;">
            <img src="/images/project_2/img_5.png" class="d-block mx-auto" alt="Research Image 1"
            style="margin-top: 70px;">
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>Associations between Socio-Environmental Dynamics and SWB</h5>
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
      <p>During the COVID-19 pandemic, urban residents' subjective well-being (SWB) was at risk, but few studies examined its relationship with neighborhood-level socio-economic and built-environment factors. This study bridges that gap by analyzing over one million geo-tagged social media posts from Shanghai. The main contributions are:</p>

      <ul>
        <li>Utilized the ChatGPT API to analyze social media sentiment indices, combined with BerTopic to extract high-frequency topics, revealing the spatiotemporal dynamics of urban emotions during public disturbances.</li>

        <li>Used Regression Discontinuity Design (RDD) to divide the COVID-19 outbreak in Shanghai into six SWB stages, analyzing key events' impact on public sentiment before, during, and after the pandemic.</li>

        <li>Applied a Fully Connected Neural Network (FCNN) model to examine the relationship between sentiment scores and socio-economic as well as built-environment factors at the neighborhood level, with the SHAP framework used to explain the model.</li>
      </ul>

      <p>The study found that green and blue spaces boost psychological resilience, while higher road density, attraction accessibility, and healthcare services reduce the link between sentiment, income, and aging. These insights inform urban planning and policy-making to enhance residents' resilience.</p>
    </div>
  </div>
<!-- </div> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<p style="margin-top: 35px; margin-bottom: 0;"><strong>Honor:</strong> <a href="http://wupen.org/competitions/68?type\=vote">The First Prize in the 7th Chengyuan Cup</a>; <a href="https://www.isocui.org/icui2023/">Best Presentation Award in GSCS & ICUI 2023</a>; submitted to the journal <i>Computers, Environment and Urban Systems</i>.</p>
</div>
<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">