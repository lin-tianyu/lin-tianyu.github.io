---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>






Hi! I am Tianyu Lin.👋 
<!-- I am a research assistant at the [Computational Cognitive Vision Lab (CCVL)](https://ccvl.jhu.edu/) at Johns Hopkins University, where I am fortunate to work with Bloomberg Distinguished Professor [Alan L. Yuille](https://www.cs.jhu.edu/~ayuille/) and Dr. [Zongwei Zhou](https://www.zongweiz.com/). -->
I am currently a research intern at [UII America, Inc.](https://www.uii-ai.com/), working with Dr. [Shanhui Sun](https://sites.google.com/site/shanhuisun), and a research assistant at [Massachusetts General Hospital](https://www.massgeneral.org/), Harvard Medical School, under the supervision of Professor [Xiang Li](https://researchers.mgh.harvard.edu/profile/15451263/xiangli-shaun.github.io). Previously, I was a research assistant in the [Computational Cognition, Vision, and Learning (CCVL)](https://ccvl.jhu.edu/) at Johns Hopkins University, where I was fortunate to work with Bloomberg Distinguished Professor [Alan L. Yuille](https://www.cs.jhu.edu/~ayuille/) and Dr. [Zongwei Zhou](https://www.zongweiz.com/).

I earned my Master’s degree in Biomedical Engineering from the Department of Biomedical Engineering at [Johns Hopkins University](https://www.jhu.edu/) in May 2025, and my Bachelor’s degree from the School of Biomedical Engineering at [Sun Yat-sen University](https://www.sysu.edu.cn/) in June 2024.

My research interest mainly includes medical image analysis and computer vision. I am all into building reliable medical vision intelligence systems. I am also interested in foundational vision models, diffusion models, vision language models, etc. If you are interested in working with me, please feel free to email me at [tianyulin67@gmail.com](mailto:tianyulin67@gmail.com) :)

<a href='mailto:tianyulin67@gmail.com'><img alt="Static Badge" src="https://img.shields.io/badge/tianyulin67-_?style=for-the-badge&logo=gmail&color=eee"></a>
<a href="https://visitorbadge.io/status?path=https%3A%2F%2Flin-tianyu.github.io%2F"><img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Flin-tianyu.github.io%2F&label=VISITORS&labelColor=%23d9e3f0&countColor=%23697689&labelStyle=upper" /></a>
<a href='https://scholar.google.com/citations?user=eHJYs-IAAAAJ&hl'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=for-the-badge&label=citations"></a>



# News
- *2025.06*: Two papers have been accepted by **MICCAI 2025**!
- *2025.01*: Two papers have been accepted by **ISBI 2025**. One paper has been accepted by **ESWA**.
- *2024.06*: 🥳🎉 One paper has been accepted by **MICCAI 2024** (1st author)!

# Publications & Preprints
<sup>&dagger;</sup>Corresponding author, \* Equal contribution
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MICCAI 2025</div><img src='images/LEAF.png' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### LEAF: Latent Diffusion with Efficient Encoder Distillation for Aligned Features in Medical Image Segmentation<br>
<font size="2">
Qilin Huang, <b>Tianyu Lin</b>, Zhiguang Chen, and Fudan Zheng<sup>&dagger;</sup>
</font>
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2507.18214) [![Static Badge](https://img.shields.io/badge/_-Project-green?style=flat-square&logo=github)](https://leafseg.github.io/leaf/) [![GitHub Repo stars](https://img.shields.io/github/stars/Pearisli/LEAF?label=Code)](https://github.com/Pearisli/LEAF) 
</div>
</div>
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MICCAI 2025</div><img src='images/R-Super.png' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### Learning Segmentation from Radiology Reports<br>
<font size="2">
Pedro R. A. S. Bassi, Wenxuan Li, Jieneng Chen, Zheren Zhu, <b>Tianyu Lin</b>, Sergio Decherchi, Andrea Cavalli, Kang Wang, Yang Yang, Alan L. Yuille, Zongwei Zhou<sup>&dagger;</sup>
</font>
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2507.05582) [![GitHub Repo stars](https://img.shields.io/github/stars/MrGiovanni/R-Super?label=Code)](https://github.com/MrGiovanni/R-Super) 
</div>
</div>
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/PanTS.png' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### PanTS: The Pancreatic Tumor Segmentation Dataset<br>
<font size="2">
Wenxuan Li*, Xinze Zhou*, Qi Chen*, <b>Tianyu Lin</b>, Pedro R. A. S. Bassi, Szymon Plotka, Jaroslaw B. Cwikla, Xiaoxi Chen, Chen Ye, Zheren Zhu, Kai Ding, Heng Li, Kang Wang, Yang Yang, Yucheng Tang, Daguang Xu, Alan L. Yuille, Zongwei Zhou<sup>&dagger;</sup>
</font>
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2507.01291) [![GitHub Repo stars](https://img.shields.io/github/stars/MrGiovanni/PanTS?label=Code)](https://github.com/MrGiovanni/PanTS) 
</div>
</div>
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/EyePose.jpg' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### EyePose: Pose-guided Saccadic Eye Movement Video Generation for Deep Learning-Based Neurologic Disease Phenotyping<br>
<font size="2">
<b>Tianyu Lin</b>, Jooyoung Ryu, Puvada Sreevarsha, Rahul Srinivasaragavan, Riya Satavlekar, Susan Kim, Nidhi Soley, Yujie Yan, Ishan Vatsaraj, Carl Harris, Aimon Rahman, Vishal Patel, Joseph Greenstein, Casey Taylor, Kemar E. Green<sup>&dagger;</sup>
</font>
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://www.researchsquare.com/article/rs-6995265/v1) [![Static Badge](https://img.shields.io/badge/_-Dataset-blue?style=flat-square&logo=databricks)](https://archive.data.jhu.edu/dataset.xhtml?persistentId=doi:10.7281/T1KON8NZ)
</div>
</div>
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/CARE.png' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### Are Pixel-Wise Metrics Reliable for Sparse-View Computed Tomography Reconstruction?<br>
<font size="2">
<b>Tianyu Lin</b>, Xinran Li, Chuntung Zhuang, Qi Chen, Yuanhao Cai, Kai Ding, Alan L. Yuille, Zongwei Zhou<sup>&dagger;</sup>
</font>
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2506.02093)  [![GitHub Repo stars](https://img.shields.io/github/stars/MrGiovanni/CARE?label=Code)](https://github.com/MrGiovanni/CARE) 
</div>
</div>
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/PsyCrisisBench.png' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### Evaluating Large Language Models in Crisis Detection: A Real-World Benchmark from Psychological Support Hotlines<br>

<font size="2">
Guifeng Deng, Shuyin Rao, <b>Tianyu Lin</b>, Anlu Dai, Pan Wang, Junyi Xie, Haidong Song, Ke Zhao, Dongwu Xu, Zhengdong Cheng, Tao Li, Haiteng Jiang<sup>&dagger;</sup>
</font>
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2506.01329) 
</div>
</div>
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/TextoMorph.png' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### Text-driven Tumor Synthesis<br>

<font size="2">
Xinran Li, Yi Shuai, Chen Liu, Qi Chen, <b>Tianyu Lin</b>, Pengfei Guo, Dong Yang, Can Zhao, Qilong Wu, Pedro R. A. S. Bassi, Daguang Xu, Kang Wang, Yang Yang, Alan Yuille, Zongwei Zhou<sup>&dagger;</sup>
</font>
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2412.18589)  [![GitHub Repo stars](https://img.shields.io/github/stars/MrGiovanni/TextoMorph?label=Code)](https://github.com/MrGiovanni/TextoMorph) 
</div>
</div>
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/ScaleMAI.jpg' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### ScaleMAI: Accelerating the Development of Trusted Datasets and AI Models<br>

<font size="2">
Wenxuan Li, Pedro R. A. S. Bassi, <b>Tianyu Lin</b>, Yu-Cheng Chou, Xinze Zhou, Fabian Isensee, Kang Wang, Qi Chen, Xiaoxi Chen, Yannick Kirchhoff, Maximilian Rouven Rokuss, Saikat Roy, Constantin Ulrich, Klaus Maier-Hein, Yucheng Tang, Kai Ding, Yang Yang, Alan Yuille, Zongwei Zhou<sup>&dagger;</sup>
</font>****
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2501.03410)  [![GitHub Repo stars](https://img.shields.io/github/stars/MrGiovanni/ScaleMAI?label=Code)](https://github.com/MrGiovanni/ScaleMAI) 
</div>
</div>
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ESWA</div><img src='images/BCL.png' alt="sym" width="125px"></div></div>
<div class='paper-box-text' markdown="1">
### A priority-guided contrastive network for delineating vascular layers in arterial ultrasound<br>
<font size="2">
Minhua Lu*, <b>Tianyu Lin</b>*, Weiyuan Lin<sup>&dagger;</sup>, Zhaohui Li, Zhifan Gao
</font>
[![Static Badge](https://img.shields.io/badge/_-Paper-red?style=flat-square&logo=googledocs)](https://www.sciencedirect.com/science/article/pii/S0957417425003173)
</div>
</div>
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ISBI 2025</div><img src='images/EMSSD.png' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### EMSSD: Two-Stage Model Enhancing Medical Image Segmentation Based on Stable Diffusion<br>
<!-- [![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2501.06692)  [![GitHub Repo stars](https://img.shields.io/github/stars/PRIS-CV/PGP-SAM?label=Code)](https://github.com/PRIS-CV/PGP-SAM) <br> -->
<font size="2">
Ruiyue Chen, Xin Zhang<sup>&dagger;</sup>, <b>Tianyu Lin</b>, Sijin Yu
</font>
[![Static Badge](https://img.shields.io/badge/_-Paper-red?style=flat-square&logo=googledocs)](https://ieeexplore.ieee.org/document/10981045)
</div>
</div>
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ISBI 2025</div><img src='images/PSP-SAM.png' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### PGP-SAM: Prototype-Guided Prompt Learning for Efficient Few-Shot Medical Image Segmentation<br>
<font size="2">
Zhonghao Yan, Zijin Yin, <b>Tianyu Lin</b>, Xiangzhu Zeng, Kongming Liang<sup>&dagger;</sup>, Zhanyu Ma
</font>
[![Static Badge](https://img.shields.io/badge/_-Paper-red?style=flat-square&logo=googledocs)](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10980911) 
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2501.06692)  [![GitHub Repo stars](https://img.shields.io/github/stars/PRIS-CV/PGP-SAM?label=Code)](https://github.com/PRIS-CV/PGP-SAM) 
</div>
</div>
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<!-- this is a divider =--><!-- this is a divider =--><!-- this is a divider =-->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MICCAI 2024</div><img src='images/SDSegFramework-v2.jpg' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### Stable Diffusion Segmentation for Biomedical Images with Single-step Reverse process
<font size="2">
<b>Tianyu Lin</b>, Zhiguang Chen, Zhonghao Yan, Weijiang Yu<sup>&dagger;</sup>, Fudan Zheng<sup>&dagger;</sup>
</font>
[![Static Badge](https://img.shields.io/badge/_-Paper-red?style=flat-square&logo=googledocs)](https://link.springer.com/chapter/10.1007/978-3-031-72111-3_62) [![Static Badge](https://img.shields.io/badge/_-Project-green?style=flat-square&logo=github)](https://lin-tianyu.github.io/Stable-Diffusion-Seg/)  [![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2406.18361)  [![GitHub Repo stars](https://img.shields.io/github/stars/lin-tianyu/Stable-Diffusion-Seg?label=Code)](https://github.com/lin-tianyu/Stable-Diffusion-Seg) 
</div>
</div>

- `Sensors` An Attention-Based Co-Segmentation Semi-Supervised Method for Nasopharyngeal Carcinoma Segmentation. Chen Y<sup>&dagger;</sup>, Han G<sup>&dagger;</sup>, **Lin T** et al.

# Educations
- *2024.09-2025.05*, Master of Science in Engineering, Biomedical Engineering, Johns Hopkins University.
- *2020.09-2024.06*, Bachelor of Engineering, Biomedical Engineering, Sun Yat-sen University.

# Internships
- *2025.07-Now*, UII America Inc., <a href="https://www.uii-ai.com/"><img src="../images/UII.jpeg" width="70" ></a>, Boston, USA.
- *2025.07-Now*, Harvard Medical School and Massachusetts General Hospital, <a href="https://www.massgeneral.org/"><img src="../images/harvard_medical_school_massachusetts_general_hospital_logo.jpeg" width="25" ><img src="../images/MGH.png" width="150" ></a>, Boston, USA.
- *2024.09-2025.07*, Computational Cognition, Vision, and Learning Research Group, <a href="https://ccvl.jhu.edu/"><img src="../images/ccvl.png" width="50" ></a>, Baltimore, USA.
- *2023.07-2023.09*, Medical Imaging Center, <a href="https://www.nmed.org.cn/"><img src="../images/NMed.png"></a>, Shenzhen, China.
- *2022.07-2024.06*, National Supercomputer Center in Guangzhou, <a href="http://www.nscc-gz.cn/"><img src="../images/SYSU-NSCC.png" width="220" ></a>, Guangzhou, China.
- *2021.01-2024.06*, Health Informatics Computing Laboratory, <a href="https://bme.sysu.edu.cn/"><img src="../images/SYSU-BME.png" width="150" ></a>, Shenzhen, China.

# Honors and Awards
- *2024.06*, Outstanding Undergraduate Thesis Award, School of Biomedical Engineering, Sun Yat-sen University.
- *2023.11*, Third-class scholarship for outstanding students, Sun Yat-sen University.
- *2022.12*, Second-class scholarship for outstanding students, Sun Yat-sen University.
- *2022.12*, 3rd Prize, The Mathematical Modeling Competition of Guangdong-Hong Kong-Marco Greater Bay Area.
- *2022.08*, 3rd Prize, National Biomedical Engineering Innovation Design Competition for College Students.
- *2021.11*, Second-class scholarship for outstanding students, Sun Yat-sen University.
