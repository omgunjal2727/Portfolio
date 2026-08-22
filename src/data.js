// TODO: Replace images with Om's photos in the future
// Skills Icons
import clangIcon from "./images/skillsIcon/C_lang.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.svg"
import SolidworksIcon from "./images/skillsIcon/CAD.svg"
import codeIcon from "./images/skillsIcon/code.svg"
import isaacsIcon from "./images/skillsIcon/isaacsim.png"
import airplaneIcon from "./images/skillsIcon/airplane.svg"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"


// Company icons (Preserved image structure)
import TeslaIcon from "./images/company/MTTlogo.jpeg"
import NVIDIAIcon from "./images/company/RRClogo.jpeg"
import EcobeeIcon from "./images/company/olespace.jpeg"

// Work Photos / Videos (Preserved media assets)
import TeslaImg from "./images/workPhotos/TeslaWork_v2.mp4"
import IsaacSim from "./images/workPhotos/isaac_quadruped.mp4"
import Khazanah from "./images/workPhotos/khazanah.mp4"

// School images (Preserved image structure)
import WaterlooLogo from "./images/school/MITlogo.png"
import AirLabLogo from "./images/school/RRClogo.jpeg"
import WaterlooImg from "./images/school/MTTlab.jpeg"
import AirLabImg from "./images/school/RCClab.jpeg"

// Helper function for getting text in current language
export const getText = (textObj, language = 'en') => {
  if (typeof textObj === 'string') return textObj;
  if (textObj && typeof textObj === 'object') {
    return textObj[language] || textObj.en || textObj.zh || Object.values(textObj)[0] || '';
  }
  return textObj || '';
};

const siteData = {

  seo: {
    title: {
      en: "Om Sanjay Gunjal Portfolio",
      zh: "欧姆·桑杰·甘杰尔作品集"
    },
    resumeTitle: {
      en: "Resume",
      zh: "简历"
    },
    description: {
      en: "Personal portfolio of Om Sanjay Gunjal — Robotics & AI Engineer specializing in simulation, sim-to-real transfer, dexterous manipulation, and embedded systems.",
      zh: "欧姆·桑杰·甘杰尔的作品集 — 专注于机器人仿真、虚实迁移、灵巧操作和嵌入式系统的机器人与人工智能工程师。"
    }
  },

  name: {
    en: "Om Sanjay Gunjal",
    zh: "欧姆·桑杰·甘杰尔"
  },
 
  headerParagraph: {
    en: "I am a Robotics & AI Engineer passionate about GPU-accelerated simulation, sim-to-real policy transfer, dexterous manipulation, autonomous navigation, and embedded hardware design.",
    zh: "我是一名机器人与人工智能工程师，致力于GPU加速仿真、虚实迁移控制策略、灵巧操作、自主导航以及嵌入式硬件设计。"
  },

  nav: {
    home: { en: "Home", zh: "首页" },
    work: { en: "Experience", zh: "工作经历" },
    projects: { en: "Projects", zh: "项目" },
    contact: { en: "Contact", zh: "联系" },
    resume: { en: "Resume", zh: "简历" }
  },

  sections: {
    about: { en: "About", zh: "关于我" },
    nvidia: { en: "Simulation & Research", zh: "仿真与研究" },
    publications: { en: "Achievements & Research", zh: "成就与研究" },
    education: { en: "Education", zh: "学历" },
    internships: { en: "Work & Research Experience", zh: "经历" },
    projects: { en: "Featured Projects", zh: "精选项目" },
    skills: { en: "Technical Skills", zh: "专业技能" },
    contact: { en: "Contact", zh: "联系我" }
  },

  buttons: {
    explore: { en: "Explore", zh: "了解更多" },
    readMore: { en: "Read More", zh: "了解更多" },
    close: { en: "Close", zh: "关闭" }
  },

  footer: {
    madeBy: { en: "Made by", zh: "作者" }
  },

  contactEmail: "omgunjalmtt@gmail.com",

  education: [
    {
      title: {
        en: "RRC, IIIT Hyderabad",
        zh: "印度国际信息技术研究所 (IIIT Hyderabad) - RRC"
      },
      para: {
        en: "Research Intern (Advised by Prof. Dr. Spandan Roy & Soham Patil)",
        zh: "研究实习生 (指导老师：Spandan Roy 教授与 Soham Patil)"
      },
      imageSrc: AirLabLogo,
      workImg: AirLabImg,
      url: "https://robotics.iiit.ac.in/",
      description: [
        {
          en: "Spearheaded adaptation and sim-to-real transfer of NVIDIA DextrAH-RGB & Maniwhere visuomotor policies for 7-DoF xArm7 paired with a 16-DoF Leap Hand",
          zh: "主导将 NVIDIA DextrAH-RGB 与 Maniwhere 视觉运动策略部署并虚实迁移至配有 16自由度 Leap 手掌的 7自由度 xArm7 机械臂"
        },
        {
          en: "Implemented DAgger teacher-student policy distillation mapping oracle states to a 5D PCA action space via Geometric Fabrics for reactive manipulation",
          zh: "实现了 DAgger 师生策略蒸馏，通过 Geometric Fabrics 将 Oracle 状态映射到 5维 PCA 动作空间，实现无碰撞灵巧操作"
        },
        {
          en: "Engineered simulation pipelines in NVIDIA Isaac Lab, tuning Automatic Domain Randomization (ADR) and USD assets for low-torque constraints",
          zh: "在 NVIDIA Isaac Lab 中构建仿真管线，调优自动领域随机化 (ADR) 与 USD 资产以克服低扭矩硬件约束"
        },
        {
          en: "Designed view-invariant representation learning framework using joint multi-view contrastive and 3D spatial objectives for monocular RGB manipulation",
          zh: "设计并实现了基于联合多视角对比与 3D 空间目标的视角不变性表示学习框架，用于未标定的单目 RGB 灵巧操作"
        }
      ],
    },
    {
      title: {
        en: "MIT World Peace University - Pune",
        zh: "麻省理工世界和平大学 (MIT-WPU) - 浦那"
      },
      para: {
        en: "B.Tech in Computer Science Engineering (Specialization in AI and Data Science)",
        zh: "计算机科学工程工学学士 (人工智能与数据科学专业)"
      },
      imageSrc: WaterlooLogo,
      workImg: WaterlooImg,
      url: "https://mitwpu.edu.in/",
      description: [
        {
          en: "Graduating July 2026, specialized in Artificial Intelligence, Computer Vision, Robotics, and Embedded Systems",
          zh: "将于 2026 年 7 月毕业，主修人工智能、计算机视觉、机器人学和嵌入式系统"
        },
        {
          en: "Lead Embedded Robotics Engineer at MIT-TECHTEAM, managing complete hardware, PCB design, and firmware architectures",
          zh: "担任 MIT-TECHTEAM 嵌入式机器人工程师队长，主导硬件架构、PCB 设计和固件开发"
        },
        {
          en: "Multiple DD Robocon National Finalist & Gold Medallist at IndiaSkills Autonomous Mobile Robotics West Regionals",
          zh: "多次获得 DD Robocon 全国决赛入围奖，并在 IndiaSkills 自主移动机器人西部区域赛中斩获金牌"
        }
      ],
    }
  ],

  projects: [
    {
      title: {
        en: "RRC, IIIT Hyderabad",
        zh: "IIIT Hyderabad 机器人研究中心"
      }, 
      position: {
        en: "Research Intern — IIIT Hyderabad",
        zh: "研究实习生 — IIIT Hyderabad"
      },
      para: {
        en: "Sim-to-Real transfer, DAgger teacher-student distillation, and view-invariant representation learning on xArm7 and 16-DoF Leap Hand.",
        zh: "在 7自由度 xArm7 与 16自由度 Leap 手掌上研究虚实迁移、DAgger 师生策略蒸馏和视角不变性表示学习。"
      },      
      imageSrc: NVIDIAIcon,
      url: "https://robotics.iiit.ac.in/",
      date: "01/2026 - Present",
      description: [
        {
          en: 'Adapted NVIDIA DextrAH-RGB and Maniwhere visuomotor policies for 7-DoF xArm7 paired with a 16-DoF Leap Hand in simulation and real-world setups',
          zh: '在仿真与实机环境中，将 NVIDIA DextrAH-RGB 和 Maniwhere 视觉运动策略适配至配有 16自由度 Leap 手掌的 7自由度 xArm7 机械臂'
        },
        {
          en: 'Implemented DAgger policy distillation mapping oracle states to a reduced 5D PCA action space via Geometric Fabrics for collision-free dexterous manipulation',
          zh: '实现 DAgger 策略蒸馏，通过 Geometric Fabrics 将 Oracle 状态映射到 5维 PCA 动作空间，实现反应式无碰撞灵巧操作'
        },
        {
          en: 'Engineered Isaac Lab simulation pipelines, tuning Automatic Domain Randomization (ADR) and optimizing URDF/USD assets for hardware torque limits',
          zh: '构建 NVIDIA Isaac Lab 仿真管线，精细调优自动领域随机化 (ADR)，并优化 URDF/USD 资产以应对硬件扭矩限制'
        },
        {
          en: 'Developed view-invariant representation learning using joint multi-view contrastive and 3D spatial objectives to resolve RGB camera extrinsic shifts',
          zh: '针对相机外参偏移导致的 RGB 策略退化，开发基于联合多视角对比与 3D 空间目标的视角不变性表示学习框架'
        }
      ],
      workImg: IsaacSim,
    },
    {
      title: {
        en: "MIT-TECHTEAM, MIT-WPU",
        zh: "MIT-TECHTEAM 机器人战队"
      }, 
      position: {
        en: "Embedded Robotics Engineer — MIT-WPU",
        zh: "嵌入式机器人工程师 — MIT-WPU"
      },
      para: {
        en: "Specialized in complete robotic systems: firmware debugging, sensor interfacing, and multi-layer PCB design.",
        zh: "专注于完整机器人系统：固件调试、传感器接口开发以及多层 PCB 电路板设计。"
      },
      imageSrc: TeslaIcon,
      url: "https://mitwpu.edu.in/",
      date: "09/2022 - 07/2026",
      description: [
        {
          en: "Specialized in complete robotic systems including debugging, embedded software development, CAN/SPI/I2C/UART sensor interfacing, and PCB designing",
          zh: "专注于完整机器人系统的开发，包括固件调试、嵌入式软件、CAN/SPI/I2C/UART 传感器总线通信及 PCB 电路设计"
        },
        {
          en: "Managed and implemented Agile methodologies across multidisciplinary student robotics teams",
          zh: "在跨学科学生机器人战队中推行并管理 Agile 敏捷开发流程"
        },
        {
          en: "Mentored recruits in embedded systems, lab safety, motor drive architectures, and PCB layout practices",
          zh: "指导新队员掌握嵌入式系统、实验室开发规范、电机驱动架构及 PCB 布局技巧"
        }
      ],
      workImg: TeslaImg,
    },
    {
      title: {
        en: "OLEE SPACE, PUNE",
        zh: "OLEE SPACE, 浦那"
      }, 
      position: {
        en: "Robotics Intern — OLEE SPACE",
        zh: "机器人实习生 — OLEE SPACE"
      },
      para: {
        en: "Contributed to robotics software and hardware setups for building an autonomous all-terrain vehicle.",
        zh: "参与全地形自主导航车辆的软硬件底层开发与搭建。"
      },
      imageSrc: EcobeeIcon,
      url: "https://oleespace.com/",
      date: "11/2025 - 12/2025",
      description: [
        {
          en: "Contributed to initial software and hardware architecture setups for building an autonomous all-terrain vehicle",
          zh: "参与自主全地形越野车项目的系统软硬件底层架构搭建"
        },
        {
          en: "Configured motor controller communication buses and sensor integration for outdoor mobility testing",
          zh: "配置电机控制器总线通信及传感器集成，支持户外移动性能测试"
        }
      ],
      workImg: Khazanah,
    }
  ],

  aboutParaOne: {
    en: "I am a Robotics & AI Engineer with expertise in GPU-accelerated simulation (NVIDIA Isaac Lab & Isaac Sim), sim-to-real transfer, reinforcement learning, and embedded robotics systems. I am passionate about scaling robot intelligence to complex real-world tasks through policy distillation and multi-modal representation learning.",
    zh: "我是一名专注于 GPU 加速仿真 (NVIDIA Isaac Lab & Isaac Sim)、虚实迁移、强化学习和嵌入式机器人系统的机器人与 AI 工程师。我热衷于通过策略蒸馏与多模态表示学习，提升机器人解决复杂真实任务的能力。"
  },
  aboutParaTwo: {
    en: "Currently, I am a Research Intern at RRC, IIIT Hyderabad, advised by Prof. Dr. Spandan Roy & Soham Patil, where I focus on visuomotor policy transfer for 7-DoF arms paired with 16-DoF dexterous hands. Simultaneously, I serve as Embedded Robotics Engineer at MIT-TECHTEAM, leading competitive robot electronics.",
    zh: "目前我在 IIIT Hyderabad 机器人研究中心 (RRC) 担任研究实习生，受 Spandan Roy 教授与 Soham Patil 指导，研究 7自由度机械臂与 16自由度灵巧手掌的视觉运动策略迁移。同时，我在 MIT-TECHTEAM 担任嵌入式工程师队长，主导机器人电子系统开发。"
  },
  aboutParaThree: {
    en: "Outside of research, I love competing in national robotics challenges like DD Robocon and IndiaSkills, designing custom PCBs, and building AI-driven domain solvers.",
    zh: "在研究之外，我积极参加 DD Robocon 和 IndiaSkills 等全国机器人大赛，设计定制 PCB，并开发基于 AI 的求解器工具。"
  },

  nvidiaTime: {
    en: "2022 to Present",
    zh: "2022年至今"
  },

  nvidiaExperience: [
    {
      en: "At IIIT Hyderabad (RRC) and MIT-WPU, my research centers on bridging the sim-to-real gap using NVIDIA Isaac Lab and Isaac Sim. I build scalable physics simulation environments for 7-DoF manipulators and 16-DoF dexterous hands, implementing teacher-student policy distillation (DAgger), Geometric Fabrics, and Automatic Domain Randomization (ADR) to achieve robust real-world transfer under hardware constraints.",
      zh: "在 IIIT Hyderabad (RRC) 与 MIT-WPU，我的研究聚焦于利用 NVIDIA Isaac Lab 和 Isaac Sim 缩小虚实差距。我为 7自由度机械臂和 16自由度灵巧手构建高保真物理仿真环境，并应用 DAgger 师生策略蒸馏、Geometric Fabrics 及自动领域随机化 (ADR)，在有限硬件条件下实现稳健的实机迁移。"
    }
  ],

  nvidiaCarouselItems: [
    {
      media: "gr1ImitationVideo",
      type: 'video',
      title: {
        en: "16-DoF Dexterous Manipulation Policy in Isaac Lab",
        zh: "Isaac Lab 中的 16自由度灵巧手操作策略"
      },
      description: {
        en: "Demonstrating visuomotor control and policy distillation for 16-DoF Leap Hand on xArm7.",
        zh: "展示 7自由度 xArm7 与 16自由度 Leap 手掌的视觉运动控制与策略蒸馏。"
      }
    },
    {
      media: "h1FlipGif",
      type: 'video',
      title: {
        en: "Geometric Fabrics & Collision-Free Planning",
        zh: "Geometric Fabrics 与无碰撞轨迹规划"
      },
      description: {
        en: "Reactive target tracking in reduced 5D PCA action space.",
        zh: "在降维 5D PCA 动作空间中实现反应式目标追踪。"
      }
    },
    {
      media: "h1TrainVideo",
      type: 'video',
      title: {
        en: "Automatic Domain Randomization (ADR)",
        zh: "自动领域随机化 (ADR) 训练"
      },
      description: {
        en: "Domain randomization in Isaac Lab to handle low-torque joint constraints.",
        zh: "在 Isaac Lab 中进行领域随机化，克服硬件低扭矩约束。"
      }
    },
    {
      media: "urLousdVideo",
      type: 'video',
      title: {
        en: "ROS 2 & Isaac Sim Co-Simulation Pipeline",
        zh: "ROS 2 与 Isaac Sim 联合仿真管线"
      },
      description: {
        en: "USD optimization and synthetic perception testing for ROS 2 controllers.",
        zh: "用于 ROS 2 控制器的 USD 建模优化与合成感知测试。"
      }
    }
  ],

  projectsCarouselItems: [
    {
      media: "capstoneVideo",
      type: 'video',
      title: {
        en: "DD Robocon National Finalist & Award Winning Robots",
        zh: "DD Robocon 全国决赛入围与获奖机器人"
      },
      subtitle: {
        en: "AIR 2 (2023, 2026), AIR 3 (2024), Dunk Robot (2025)",
        zh: "全国第2名 (2023, 2026), 全国第3名 (2024), 扣篮机器人 (2025)"
      },
      description: {
        en: "Led electronics architecture, embedded firmware, motor driver interfaces, and mechanical prototyping among 100+ national engineering teams. Built a jump-and-dunk robot for Robocon 2025.",
        zh: "在 100 多支全国工程团队中担任电子架构师、固件开发员及机械原型设计师。在 2025 年开发了具备跳跃扣篮功能的机器人。"
      },
      buttons: []
    },
    {
      media: "watoImage",
      type: 'image',
      title: {
        en: "Multimodal Receptionist Robot System [Patent]",
        zh: "多模态接待机器人系统 [已申请专利]"
      },
      subtitle: {
        en: "ROS 2 LiDAR SLAM, IMU Fusion, Face Recognition & LLM Conversational Interface",
        zh: "基于 ROS 2 LiDAR SLAM、IMU 融合、人脸识别与 LLM 语音交互"
      },
      description: {
        en: "Designed a ROS 2 autonomous assistant robot featuring LiDAR SLAM navigation, wheel encoder fusion, face identification, and an LLM-powered dialogue system for indoor guidance.",
        zh: "设计并开发了一款基于 ROS 2 的自主服务机器人，集成激光雷达 SLAM 导航、编码器数据融合、人脸识别以及基于 LLM 的智能语音导览对话系统。"
      },
      buttons: []
    },
    {
      media: "airplaneImage",
      type: 'image',
      title: {
        en: "IndiaSkills Autonomous Mobile Robotics — West Regionals Winner",
        zh: "IndiaSkills 自主移动机器人大赛 — 西部赛区冠军"
      },
      subtitle: {
        en: "Gold Medallist hosted by NSDC",
        zh: "NSDC 举办比赛金牌获得者"
      },
      description: {
        en: "Executed fully autonomous vision-based target acquisition, object detection, and hardware debugging inside a 3m x 3m interactive arena environment.",
        zh: "在 3m x 3m 竞赛场地内完成了基于计算机视觉的自主目标识别、抓取以及硬件现场调试。"
      },
      buttons: []
    },
    {
      media: "mte380Img",
      type: 'image',
      title: {
        en: "eYantra Agricultural Vacuum Harvester Prototype",
        zh: "eYantra 农业真空采摘机器人原型"
      },
      subtitle: {
        en: "eYantra Innovation Premier League",
        zh: "eYantra 创新超级联赛项目"
      },
      description: {
        en: "Conducted field research at Vigyan Ashram, Pabal to design a vacuum-assisted harvesting mechanism reducing manual labor for small-scale farmers.",
        zh: "在 Vigyan Ashram 进行实地调研，设计出真空辅助果实采摘机器人原型，为小农户减少劳动力负担。"
      },
      buttons: []
    },
    {
      media: "webappImg",
      type: 'image',
      title: {
        en: "FPL AI-Powered Team Optimizer",
        zh: "基于 AI 的 FPL 梦幻英超阵容优化器"
      },
      subtitle: {
        en: "XGBoost, Gemini API NLP, and PuLP Linear Programming",
        zh: "融合 XGBoost、Gemini API NLP 提取与 PuLP 线性规划"
      },
      description: {
        en: "Built a automated Fantasy Premier League squad optimization engine combining web scraping, XGBoost machine learning, sports article NLP analysis, and integer linear programming.",
        zh: "开发了梦幻英超阵容自动优化引擎，融合网页数据抓取、XGBoost 预测、基于 Gemini 的新闻 NLP 分析和 PuLP 线性规划。"
      },
      buttons: []
    }
  ],

  skills: [
    {
      img: isaacsIcon,
      para: "NVIDIA Isaac Lab, Isaac Sim, Sim-to-Real, PPO, DAgger"
    },
    {
      img: rosIcon,
      para: "ROS 2, Gazebo, LiDAR SLAM, Geometric Fabrics"
    },
    {
      img: openCVIcon,
      para: "PyTorch, View Invariance, ResNet, LSTMs, Contrastive Learning"
    },
    {
      img: RPIIcon,
      para: "STM32, TM4C, AVR MCUs, CAN, SPI, I2C, UART, PWM"
    },
    {
      img: SolidworksIcon,
      para: "Altium Designer, EagleCAD, Motor Drives, PCB Design"
    },
    {
      img: clangIcon,
      para: "C, C++, Embedded Firmware, Linux Kernel"
    },
    {
      img: codeIcon,
      para: "Python, Git, PuLP, XGBoost, Linux Tools"
    },
    {
      img: airplaneIcon,
      para: "Autonomous Ground Vehicles, Hardware Debugging"
    }
  ],

  contactSubHeading: {
    en: "Let's build intelligent robotic systems together!",
    zh: "让我们一起打造下一代智能机器人系统！"
  },

  social: [
    { 
      img: githubIcon, 
      url: "https://github.com/omgunjal2727"
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/omgunjal27/",
    }
  ]
};

export default siteData;