---
layout: archive
title: "Projects"
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
    margin: 10px 20px 10px 0px !important; /* 调整上、右、下、左外边距 */
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

## **Overview**
<p>
These projects were comprehensive team efforts, where I was often the team leader.They mainly focus on urban transportation and environmental issues, employing methods such as multi-agent systems, deep learning and reinforcement learning to achieve prediction, simulation and optimization, providing insights for urban planning and policy.
</p>

<h2 class="toggle-header" style="cursor: pointer;">
  <span class="toggle-icon">▶</span><strong> Current work at Spatial Pleasure</strong>
</h2>
<p style="color: #757575; font-size: 16px;">Sep 02, 2024 – Present</p>
<div class="toggle-content" style="display: none;">
  <p style="margin-top: 10px; margin-bottom: 10px;">
  I work remotely at 0.6 FTE per month as a data scientist with main tasks regarding processing and integrating traffic data, developing traffic simulation models and optimization systems.<br>
  In many ways, the work here is more akin to research, as the projects require strong knowledge of mathematical statistics and involve exploratory methods. I look forward to collaborating with the company's lab to publish the outcomes of our projects if the opportunity arises.<br>
  Currently, I am primarily responsible for two projects:
  </p>
  <div class="two-column">
    <!-- 注意间距是调整padding-top: 10px -->
    <div style="padding-top: 10px; padding-left: 20px; padding-right: 20px; ">
      <h3 style="margin-top: 15px;">1 Origin-Destination Estimation in Sapporo</h3>
      <p>We use the four-step model of trip generation, trip distribution, mode choice and route assignment to predict traffic demand and identify key factors, offering insights on public transit capacity allocation.</p>

      <ul>
        <li>Leverage GTFS, IC card, and socioeconomic data to perform spatiotemporal clustering of O-D trips</li>
        <li>Incorporate environmental factors (e.g., carbon emissions, noise pollution) into the model to enhance the sustainability of public transportation</li>
        <li>Utilize machine learning algorithms to perform data-driven modeling without predefined assumptions and</li>
        <li>......</li>
      </ul>
    </div>

    <div style="padding-top: 10px; padding-left: 20px; padding-right: 20px; ">
      <h3 style="margin-top: 15px;">2 Multi-Agent Transport Simulation in Tyoko</h3>
      <p>The four-step model relies on aggregated data, limiting its ability to reflect individual travel decisions while agent-based models can compensate for this.</p>

      <ul>
        <li>Introduce new transport modes (e.g., autonomous driving, shared mobility) into the traffic simulation</li>
        <li>Model heterogeneity in agent behavior (e.g., income and age) by differentiating utility functions</li>
        <li>Integrate the influence of behavioral psychology on the rational agent (e.g., acceptability of autonomous vehicles) </li>
        <li>......</li>
      </ul>
    </div>
  </div>
</div>
<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">

<!-- {% include base_path %} -->
<h2 class="toggle-header" style="cursor: pointer;">
  <span class="toggle-icon">▶</span><strong> Optimizing electric vehicle charging station placement using reinforcement learning</strong>
</h2>
<p style="color: #757575; font-size: 16px;">June 20, 2024 – Aug 15, 2024</p>
<div class="toggle-content" style="display: none;">
  <!-- 关键词部分 -->
  <p><strong>Keywords:</strong> electric vehicle charging station, location selection, reinforcement learning, spatial optimization</p>

  <!-- 父容器 -->
  <div class="content-wrapper" style="display: flex; max-height: 400px; align-items: flex-start;">
    <div id="projectCarousel_1" class ="carousel slide" data-ride="carousel" style="flex-basis: 50%; max-height: 400px">
      <ol class="carousel-indicators">
        <li data-target="#projectCarousel_1" data-slide-to="0" class="active"></li>
        <li data-target="#projectCarousel_1" data-slide-to="1"></li>
        <li data-target="#projectCarousel_1" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/project_1/Framework.png" class="d-block mx-auto" alt="Project Image 1"
          style="margin-top: 100px;">
          <div class="carousel-caption d-none d-md-block">
            <h5>Project framework</h5>
          </div>
          <!-- 放大按钮 -->
          <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        </div>
        <div class="carousel-item">
          <iframe src="/files/project_1/graph.html" width="100%" height="100%" style="border:none;margin-top: 30px;" ></iframe>
          <div class="carousel-caption d-none d-md-block">
            <h5>Iterative optimization of utility by different RL algorithms</h5>
          </div>
           <!-- 放大按钮 -->
          <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        </div>
        <div class="carousel-item">
          <div class="d-block w-100" style="height: 500px;">
            <iframe src="/files/project_1/map.html" width="100%" height="100%" style="border:none;"></iframe>
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>The optimal charging station placement by DQN algorithm</h5>
          </div>
           <!-- 放大按钮 -->
          <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        </div>
      </div>
      <!-- Controls -->
      <a class="carousel-control-prev" href="#projectCarousel_1" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#projectCarousel_1" role="button" data-slide="next">
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
      <p>Optimizing electric vehicle charging station placement is key to implementing zero-emission policies in central London. Using <a href="https://openchargemap.org/site" target="_blank" style="color: #757575;">open charge map data</a>, the study framed the problem as a reinforcement learning task, where the agent learns to take optimal actions by adjusting its strategy based on feedback. This results in a deployment that balances coverage benefits and time costs within budget constraints, maximizing overall utility.</p>
      <p><strong>Components of the RL problem</strong></p>
      <ul>
        <li><strong>State</strong>: The current spatial layout of charging stations and charger configuration.</li>
        <li><strong>Action</strong>: Adding new charging stations, increasing the capacity of existing stations, or relocating stations.</li>
        <li><strong>Reward</strong>: The difference in total utility before and after each layout modification.</li>
        <li><strong>Algorithms</strong>: Deep Q-learning Network (DQN), Advantage Actor-Critic (A2C) and Proximal Policy Optimization (PPO).</li>
      </ul>

      <p>As a result, reinforcement learning algorithms show significant improvements over traditional methods, with the DQN-based layout performing best across metrics. Each algorithm offers unique strengths: DQN minimizes travel time in high-demand areas, A2C improves overall service balance, and PPO enhances charging efficiency at existing stations.</p>
    </div>
  </div>
  <p style="margin-top: 35px; margin-bottom: 0;"><strong>Honor:</strong> High distinction (96/100) in course <a href="https://www.lse.ac.uk/resources/calendar2023-2024/courseGuides/ST/2023_ST455.htm"> ST455 Reinforcement Learning </a></p>
</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<p style="margin-top: 0px; margin-bottom: 0;">Preprint forthcoming on arXiv. <a href="/files/project_1/notebook.html" target="_blank">Notebook</a>. Code available on <a href="https://github.com/Minw913/ReinEV-Charging-Station-Optimization" target="_blank"><i class="fab fa-github"></i> GitHub</a>.</p>

<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">


<h2 class="toggle-header" style="cursor: pointer;">
  <span class="toggle-icon">▶</span><strong> Disentangling associations between socio-environmental dynamics and subjective well-being during and after COVID-19</strong>
</h2>
<p style="color: #757575; font-size: 16px;">Feb 01, 2023 – Aug 25, 2023</p>
<div class="toggle-content" style="display: none;">
  <!-- 关键词部分 -->
  <p><strong>Keywords:</strong> subjective well-being, neighborhood resilience, COVID-19, explainable machine learning, social media data</p>

  <!-- 父容器 -->
  <div class="content-wrapper" style="display: flex; max-height: 400px; align-items: flex-start;">
    <div id="projectCarousel_2" class = "carousel slide" data-ride="carousel" style="flex-basis: 50%; max-height: 400px">
      <ol class="carousel-indicators">
        <li data-target="#projectCarousel_2" data-slide-to="0" class="active"></li>
        <li data-target="#projectCarousel_2" data-slide-to="1"></li>
        <li data-target="#projectCarousel_2" data-slide-to="2"></li>
        <li data-target="#projectCarousel_2" data-slide-to="3"></li>
        <li data-target="#projectCarousel_2" data-slide-to="4"></li>
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
            <h5 style="font-size: 14px;">Resilience stage division by Regression Discontinuity Design</h5>
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
            <h5 style="font-size: 14px;">Associations between Socio-Environmental Dynamics and SWB</h5>
          </div>
           <!-- 放大按钮 -->
          <!-- <button class="enlarge-btn" onclick="openModal('/images/research_1/img_1.png')">🔍</button> -->
        </div>
      </div>
      <!-- Controls -->
      <a class="carousel-control-prev" href="#projectCarousel_2" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#projectCarousel_2" role="button" data-slide="next">
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
      <p>During the COVID-19 pandemic, urban residents' subjective well-being (SWB) was at risk, but few studies examined its relationship with neighborhood-level socio-economic and built-environment factors. This study bridges that gap by analyzing over one million geo-tagged social media posts from Shanghai.</p>
      <p><strong>Key contributions</strong></p>
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
<p style="margin-top: 35px; margin-bottom: 0;"><strong>Honor:</strong> <a href="http://wupen.org/competitions/68?type=work&entry=14153">The First Prize in the 7th Chengyuan Cup</a>; Best Presentation Award in <a href="https://www.isocui.org/icui2023/">GSCS & ICUI 2023</a>; Submitted to the journal <i>Computers, Environment and Urban Systems</i>.</p>
</div>
<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">


<h2 class="toggle-header" style="cursor: pointer;">
  <span class="toggle-icon">▶</span><strong> NoiseLoc: campus noise monitoring and traceability system</strong>
</h2>
<p style="color: #757575; font-size: 16px;">June 01, 2021 – Nov 17, 2022</p>
<div class="toggle-content" style="display: none;">
  <!-- 关键词部分 -->
  <p><strong>Keywords:</strong> noise traceability, sound classification and intensity prediction, interactive web app</p>

  <!-- 父容器 -->
  <div class="content-wrapper" style="display: flex; max-height: 400px; align-items: flex-start;">
    <div id="video-container" style="flex-basis: 50%; max-height: 400px;">
      <!-- 添加MP4视频 -->
      <video class="d-block mx-auto" controls style="margin-top: 50px; width: 100%; max-height: 400px;">
        <source src="/files/project_3/demo_video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <!-- 摘要部分 -->
    <div class="research-summary" style="flex-basis: 50%; max-height: 400px; overflow-y: auto; padding: 10px; margin-left: 20px;">
      <p>Campus noise affects students and staff, and the noise tracing system provides precise analysis and decision-making support. This project uses GIS technology to create a multi-dimensional noise map, incorporating user feedback to identify noise sources. The interactive website features noise info, scenario distribution, event simulation, and source tracking.</p>
      <p><strong>Key technologies</strong></p>
      <ul>
        <li>Employ a geometric acoustic ray tracing method to simulate noise propagation, accounting for reflection, diffraction, and atmospheric absorption, enabling accurate noise propagation calculations across different sources.</li>

        <li>Applied VGGish model and CNN network based on Short-Time Fourier Transform and mel-spectrogram features to classify and measure campus noise intensity.</li>

        <li>Developed the jarcpy module to replace ArcPy, combining shapely to re-implement functions like shape conversion, data statistics, distance calculation, and topology, improving compatibility and computational speed significantly in the Python3 environment.</li>
      </ul>
    </div>
  </div>
<!-- </div> -->
  <p style="margin-top: 35px; margin-bottom: 0;"><strong>Honor:</strong> The Grand Prize in the 1st 'Sky Cup' National College Students Spatial Information Technology Competition </p>
</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<p style="margin-top: 0px; margin-bottom: 0;"><a href="http://public.dupetrc.qiyi.us:31382/app_noise_loc/home" target="_blank"><i class="fas fa-globe"></i> Web App</a></p>
<!-- 分隔线 -->
<hr style="border: none; height: 0.5px; background-color: #757575; margin-top: 10px; margin-bottom: 10px;">