---
layout: archive
title: "1Projects"
permalink: /projects/
author_profile: true
redirect_from:
  - /projects
---

<!-- 在这里添加引入 JavaScript 文件 -->
<!-- <script src="/assets/js//scripts.js"></script> -->
{% include base_path %}

<style>
  .two-column {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .two-column > div {
    flex-basis: 49.5%; /* 每一栏占父容器的48%宽度 */
    margin: 20px 0px 10px 0px !important; /* 调整外边距 */
    /* padding: 20px 15px 10px 15px !important; 依次为上、右、下、左的内边距 */
    background-color: rgba(0, 0, 0, 0.75); /* 背景色，可根据需求调整 */
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  ul {
    list-style-type: disc; /* 使用圆点作为列表项的标记 */
    margin-left: 5px; /* 调整列表项的左边距 */
  }

  /* toggle时鼠标悬停的样式 */
  #toggle-header {
      cursor: pointer;
      font-weight: bold;
      display: flex;
      align-items: center;
  }

  #toggle-icon {
      margin-right: 8px;
      /* 使得图标在展开/收起时有一个平滑的过渡效果 */
      transition: transform 0.3s ease; 
  }

  #toggle-content {
      display: block; /* 默认展开 */
  }
</style>

<!-- {% include base_path %} -->
## **Overview**
<p>
Compared to research, these projects were more comprehensive efforts completed through team collaboration. In most of these projects, I served as the team leader, managing the overall project framework and solving technical challenges. Below is a chronological list of these projects.
</p>

<h2 class="toggle-header" style="cursor: pointer;">
  <span class="toggle-icon">▶</span><strong>PJ0 Current Work at Spatial Pleasure</strong>
</h2>
<div class="toggle-content" style="display: none;">
  <p style="color: #757575; font-size: 16px;">Sep 02, 2024 – Present</p>
  <p style="margin-top: 10px; margin-bottom: 0;">
  I work remotely at 0.6 FTE per month as a data scientist. My main responsibilities include processing and integrating traffic data, developing traffic simulation models and optimization systems.<br>
  In many ways, the work here is more akin to research, as my supervisor has a strong background in mathematical statistics and the projects frequently involve exploratory methods. I look forward to collaborating with the company's lab to publish the outcomes of our projects if the opportunity arises.<br>
  Currently, I am primarily responsible for two projects:
  </p>
  <div class="two-column">
    <div style="padding-top: 0px; padding-left: 20px; padding-right: 20px; ">
      <h3>1 Origin-Destination Estimation in Sapporo</h3>
      <p>We use the four-step model of trip generation, trip distribution, mode choice and route assignment to predict traffic demand and identify key factors and patterns, offering insights on public transit capacity allocation.</p>

      <ul>
        <li>How can we fully leverage GTFS, IC card, and socioeconomic data to achieve spatiotemporal clustering of OD trips and provide more granular demand analysis for transportation planning?</li>
        <li>How can environmental factors (e.g., carbon emissions, noise pollution) be considered into the model to optimize the sustainability of public transportation?</li>
        <li>How can machine learning algorithms be utilized to perform data-driven modeling without predefined assumptions, enhancing the model's flexibility?</li>
        <li>......</li>
      </ul>
    </div>

    <div style="padding-top: 0px; padding-left: 20px; padding-right: 20px; ">
      <h3>2 Multi-Agent Transport Simulation in Tyoko</h3>
      <p>The four-step model relies on aggregated data, limiting its ability to reflect individual travel decisions while agent-based models can compensate for this.</p>

      <ul>
        <li>How can we incorporate new travel modes (e.g., autonomous driving, shared mobility) into the traffic simulation?</li>
        <li>How can we model heterogeneity in agent behavior (e.g., income and age) by differentiating parameters in utility functions?</li>
        <li>How can we integrate the influence of behavioral psychology on the rational agent, such as acceptability of autonomous vehicles? </li>
        <li>......</li>
      </ul>
    </div>
  </div>
  <!-- 分隔线 -->
  <hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">
</div>

<!-- {% include base_path %} -->
<h2 class="toggle-header" style="cursor: pointer;">
  <span class="toggle-icon">▶</span><strong>PJ1 Optimizing electric vehicle charging station pacement using reinforcement learning</strong>
</h2>
<div class="toggle-content" style="display: none;">
  <p style="color: #757575; font-size: 16px;">June 20, 2024 – Aug 15, 2024</p>
  <!-- 关键词部分 -->
  <p>This course project was completed in collaboration with two classmates from the Department of Statistics and earned high distinction (96/100).<br>
  <strong>Key words:</strong> electric vehicle charging station, location selection, reinforcement learning, road network</p>

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
           <!-- 放大按钮 -->
          <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100" style="height: 500px;">
            <iframe src="/files/project_1/mesh_data_without_legend.html" width="100%" height="100%" style="border:none;"></iframe>
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>The time series of NO2 concentration at stations</h5>
          </div>
           <!-- 放大按钮 -->
          <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button>
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
           <!-- 放大按钮 -->
          <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button>
        </div>
        <div class="carousel-item">
          <img src="/images/research_1/img_5.png" class="d-block mx-auto" alt="Research Image 5" style="margin-top: 50px;">
          <!--  style="object-fit: contain; width: 100%; height: auto;" -->
          <div class="carousel-caption d-none d-md-block">
            <h5>Emission prediction fit curves and the actual time series</h5>
          </div>
           <!-- 放大按钮 -->
          <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button>
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
    <!-- 模态框 HTML -->
    <div id="imageModal" class="modal">
      <span class="close" onclick="closeModal()">&times;</span>
      <img class="modal-content" id="modalImg">
    </div>
    <!-- 摘要部分 -->
    <div class="research-summary" style="flex-basis: 50%; max-height: 400px; overflow-y: auto; padding: 10px; margin-left: 20px;">
      <p>Optimizing electric vehicle charging station placement is key to implementing zero-emission policies in central London. Using <a href="https://openchargemap.org/site" target="_blank" style="color: #757575;">open charge map data</a>, the study framed the problem as a reinforcement learning task, where the agent learns to take optimal actions by adjusting its strategy based on feedback. This results in a deployment that balances coverage benefits and time costs within budget constraints, maximizing overall utility. The components of the RL problem are as follows:</p>

      <ul>
        <li><strong>State</strong>: The current spatial layout of charging stations and charger configuration.</li>
        <li><strong>Action</strong>: Adding new charging stations, increasing the capacity of existing stations, or relocating stations.</li>
        <li><strong>Reward</strong>: The difference in total utility before and after each layout modification.</li>
      </ul>

      <p>As a result, reinforcement learning algorithms show significant improvements over traditional methods, with the DQN-based layout performing best across metrics. Each algorithm offers unique strengths: DQN minimizes travel time in high-demand areas, A2C improves overall service balance, and PPO enhances charging efficiency at existing stations.</p>
    </div>
  </div>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <p style="margin-top: 30px; margin-bottom: 0;">Preprint forthcoming on arXiv. Code available on <a href="https://github.com/your-repo-link" target="_blank"><i class="fab fa-github"></i> GitHub</a>.</p>
</div>
<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">


<!-- {% include base_path %} -->
<!-- 研究项目标题 -->
## **PJ1 Optimizing electric vehicle charging station pacement using reinforcement learning**
<p style="color: #757575; font-size: 16px;">April 01, 2024 – May 15, 2024</p>
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
        <img src="/images/img_1.png" class="d-block mx-auto" alt="Research Image 1">
        <div class="carousel-caption d-none d-md-block">
          <h5>The air pollutant monitoring stations in London</h5>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-block w-100" style="height: 500px;">
          <iframe src="/files/project_1/mesh_data_without_legend.html" width="100%" height="100%" style="border:none;"></iframe>
        </div>
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
