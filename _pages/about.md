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






Hi! I am Tianyu Lin.👋 I am a master student at [Department of Biomedical Engineering](https://www.bme.jhu.edu/), Johns Hopkins University. I am also an research intern at [CCVL](https://ccvl.jhu.edu/) research group, supervised by [Dr. Zongwei Zhou](https://www.zongweiz.com/) and [Prof. Alan Yuille](https://www.cs.jhu.edu/~ayuille/). I graduated from [School of Biomedical Engineering](https://bme.sysu.edu.cn/), Sun Yat-sen University with a bachelor's degree in June, 2024.

My research interest mainly includes medical image analysis and computer vision. I am all into building reliable medical vision intelligence systems. I am also interested in foundational vision models, diffusion models, vision language models, etc.

If you are interested in working with me, please feel free to email me at [tianyulin67@gmail.com](mailto:tianyulin67@gmail.com) :)

<a href='mailto:tianyulin67@gmail.com'><img alt="Static Badge" src="https://img.shields.io/badge/tianyulin67-_?style=for-the-badge&logo=gmail&color=eee"></a>
<a href="https://visitorbadge.io/status?path=https%3A%2F%2Flin-tianyu.github.io%2F"><img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Flin-tianyu.github.io%2F&label=VISITORS&labelColor=%23d9e3f0&countColor=%23697689&labelStyle=upper" /></a>
<a href='https://scholar.google.com/citations?user=eHJYs-IAAAAJ&hl'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=for-the-badge&label=citations"></a>



# News
- *2025.01*: Two papers have been accepted by **ISBI 2025**. One paper has been accepted in **ESWA**.
- *2024.06*: 🥳🎉 One paper has been accepted by **MICCAI 2024** (1st author)!

# Publications & Preprints
<sup>&dagger;</sup>Corresponding author, \* Equal contribution

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/TextoMorph.png' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### Text-driven Tumor Synthesis<br>
<!-- [![Static Badge](https://img.shields.io/badge/_-Paper-red?style=flat-square&logo=googledocs)](https://link.springer.com/chapter/10.1007/978-3-031-72111-3_62)  -->
<font size="2">
Xinran Li, Yi Shuai, Chen Liu, Qi Chen, <b>Tianyu Lin</b>, Pengfei Guo, Dong Yang, Can Zhao, Qilong Wu, Pedro R. A. S. Bassi, Daguang Xu, Kang Wang, Yang Yang, Alan Yuille, Zongwei Zhou<sup>&dagger;</sup>
</font>
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2412.18589)  [![GitHub Repo stars](https://img.shields.io/github/stars/MrGiovanni/TextoMorph?label=Code)](https://github.com/MrGiovanni/TextoMorph) 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/ScaleMAI.jpg' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### ScaleMAI: Accelerating the Development of Trusted Datasets and AI Models<br>
<!-- [![Static Badge](https://img.shields.io/badge/_-Paper-red?style=flat-square&logo=googledocs)](https://link.springer.com/chapter/10.1007/978-3-031-72111-3_62)  -->
<font size="2">
Wenxuan Li, Pedro R. A. S. Bassi, <b>Tianyu Lin</b>, Yu-Cheng Chou, Xinze Zhou, Fabian Isensee, Kang Wang, Qi Chen, Xiaoxi Chen, Yannick Kirchhoff, Maximilian Rouven Rokuss, Saikat Roy, Constantin Ulrich, Klaus Maier-Hein, Yucheng Tang, Kai Ding, Yang Yang, Alan Yuille, Zongwei Zhou<sup>&dagger;</sup>
</font>
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2501.03410)  [![GitHub Repo stars](https://img.shields.io/github/stars/MrGiovanni/ScaleMAI?label=Code)](https://github.com/MrGiovanni/ScaleMAI) 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ESWA</div><img src='images/BCL.png' alt="sym" width="125px"></div></div>
<div class='paper-box-text' markdown="1">
### A priority-guided contrastive network for delineating vascular layers in arterial ultrasound<br>
<font size="2">
Minhua Lu*, <b>Tianyu Lin</b>*, Weiyuan Lin<sup>&dagger;</sup>, Zhaohui Li, Zhifan Gao
</font>
[![Static Badge](https://img.shields.io/badge/_-Paper-red?style=flat-square&logo=googledocs)](https://www.sciencedirect.com/science/article/pii/S0957417425003173)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ISBI 2025</div><img src='images/EMSSD.png' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### EMSSD: Two-Stage Model Enhancing Medical Image Segmentation Based on Stable Diffusion<br>
<!-- [![Static Badge](https://img.shields.io/badge/_-Paper-red?style=flat-square&logo=googledocs)](https://link.springer.com/chapter/10.1007/978-3-031-72111-3_62)  -->
<!-- [![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2501.06692)  [![GitHub Repo stars](https://img.shields.io/github/stars/PRIS-CV/PGP-SAM?label=Code)](https://github.com/PRIS-CV/PGP-SAM) <br> -->
<font size="2">
Ruiyue Chen, Xin Zhang<sup>&dagger;</sup>, <b>Tianyu Lin</b>, Sijin Yu
</font>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ISBI 2025</div><img src='images/PSP-SAM.png' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### PGP-SAM: Prototype-Guided Prompt Learning for Efficient Few-Shot Medical Image Segmentation<br>
<!-- [![Static Badge](https://img.shields.io/badge/_-Paper-red?style=flat-square&logo=googledocs)](https://link.springer.com/chapter/10.1007/978-3-031-72111-3_62)  -->
<font size="2">
Zhonghao Yan, Zijin Yin, <b>Tianyu Lin</b>, Xiangzhu Zeng, Kongming Liang<sup>&dagger;</sup>, Zhanyu Ma
</font>
[![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2501.06692)  [![GitHub Repo stars](https://img.shields.io/github/stars/PRIS-CV/PGP-SAM?label=Code)](https://github.com/PRIS-CV/PGP-SAM) 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MICCAI 2024</div><img src='images/SDSegFramework-v2.jpg' alt="sym" width="175px"></div></div>
<div class='paper-box-text' markdown="1">
### Stable Diffusion Segmentation for Biomedical Images with Single-step Reverse process
<font size="2">
<b>Tianyu Lin</b>, Zhiguang Chen, Zhonghao Yan, Weijiang Yu<sup>&dagger;</sup>, Fudan Zheng<sup>&dagger;</sup>
</font>
[![Static Badge](https://img.shields.io/badge/_-Paper-red?style=flat-square&logo=googledocs)](https://link.springer.com/chapter/10.1007/978-3-031-72111-3_62) [![Static Badge](https://img.shields.io/badge/_-Project_Page-green?style=flat-square&logo=github)](https://lin-tianyu.github.io/Stable-Diffusion-Seg/)  [![Static Badge](https://img.shields.io/badge/_-arxiv-gray?style=flat-square&logo=arxiv)](https://arxiv.org/abs/2406.18361)  [![GitHub Repo stars](https://img.shields.io/github/stars/lin-tianyu/Stable-Diffusion-Seg?label=Code)](https://github.com/lin-tianyu/Stable-Diffusion-Seg) 
</div>
</div>

- `Sensors` An Attention-Based Co-Segmentation Semi-Supervised Method for Nasopharyngeal Carcinoma Segmentation. Chen Y<sup>&dagger;</sup>, Han G<sup>&dagger;</sup>, **Lin T** et al.

# Educations
- *2024.09-2025.05 (Expected)*, Master of Science in Engineering, Biomedical Engineering, Johns Hopkins University.
- *2020.09-2024.06*, Bachelor of Engineering, Biomedical Engineering, Sun Yat-sen University.

# Internships
- *2024.09-Now*, Computational Cognition, Vision, and Learning Research Group, <a href="https://ccvl.jhu.edu/"><img src="../images/ccvl.png" width="50" ></a>, Baltimore, USA.
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
