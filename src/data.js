// Skills Icons
import clangIcon from "./images/skillsIcon/C_lang.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.svg"
import SolidworksIcon from "./images/skillsIcon/CAD.svg"
import codeIcon from "./images/skillsIcon/code.svg"
import isaacsIcon from "./images/skillsIcon/isaacsim.png"
import airplaneIcon from "./images/skillsIcon/airplane.svg"

// Social Icons
import githubIcon from "./images/contactIcon/github.jpeg"
import linkedinIcon from "./images/contactIcon/linkedin.png"

// Company / Institution logos
import TeslaIcon from "./images/company/MTTlogo.jpeg"
import NVIDIAIcon from "./images/company/RRClogo.jpeg"
import EcobeeIcon from "./images/company/olespace.jpeg"

// Work Photos / Videos
import TeslaImg from "./images/workPhotos/TeslaWork_v2.mp4"
import IsaacSim from "./images/workPhotos/isaac_quadruped.mp4"
import Khazanah from "./images/workPhotos/khazanah.mp4"

// School / Lab logos
import WaterlooLogo from "./images/school/MITlogo.png"
import AirLabLogo from "./images/school/RRClogo.jpeg"
import WaterlooImg from "./images/school/MTTlab.jpeg"
import AirLabImg from "./images/school/RCClab.jpeg"

// Helper function for multi-language text resolution
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
      en: "Om Sanjay Gunjal — Robotics & AI Portfolio",
      zh: "欧姆·桑杰·甘杰尔作品集"
    },
    resumeTitle: {
      en: "Resume",
      zh: "简历"
    },
    description: {
      en: "Personal portfolio of Om Sanjay Gunjal — Robotics & AI Engineer specializing in GPU simulation, sim-to-real transfer, dexterous manipulation, and embedded hardware.",
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
    about: { en: "About", zh: "关于" },
    featured: { en: "Featured Projects", zh: "精选项目" },
    achievements: { en: "Achievements", zh: "成就项目" },
    education: { en: "Education", zh: "教育" },
    experience: { en: "Experience", zh: "经历" },
    memories: { en: "Memories", zh: "相册" },
    contact: { en: "Contact", zh: "联系" },
    resume: { en: "Resume", zh: "简历" }
  },

  sections: {
    about: { en: "About Me", zh: "关于我" },
    featuredProjects: { en: "Featured Projects", zh: "精选项目" },
    achievements: { en: "Achievements & Projects", zh: "成就与项目" },
    education: { en: "Education", zh: "教育背景" },
    experience: { en: "Work & Research Experience", zh: "工作与研究经历" },
    memories: { en: "Collection of Memories", zh: "精彩瞬间集锦" },
    skills: { en: "Technical Skills", zh: "专业技能" },
    contact: { en: "Get In Touch", zh: "联系我" }
  },

  buttons: {
    explore: { en: "Explore", zh: "了解更多" },
    readMore: { en: "Read More", zh: "了解更多" },
    close: { en: "Close", zh: "关闭" }
  },

  footer: {
    madeBy: { en: "Designed & Built by", zh: "设计与开发：" }
  },

  contactEmail: "omgunjalmtt@gmail.com",

  // 1. FEATURED PROJECTS CAROUSEL (Top 5 Projects)
  featuredCarouselItems: [
    {
      media: "gr1ImitationVideo",
      type: 'video',
      title: {
        en: "16-DoF Visuomotor Dexterous Manipulation in Isaac Lab",
        zh: "Isaac Lab 中的 16自由度灵巧手视觉运动操作策略"
      },
      subtitle: {
        en: "NVIDIA DextrAH-RGB & Maniwhere Policy Adaptation",
        zh: "NVIDIA DextrAH-RGB 与 Maniwhere 策略适配"
      },
      description: {
        en: "Adapted visuomotor policies for a 7-DoF xArm7 paired with a 16-DoF Leap Hand. Applied DAgger teacher-student distillation mapping oracle states to a 5D PCA action space via Geometric Fabrics.",
        zh: "在 7自由度 xArm7 与 16自由度 Leap 手掌上成功部署视觉运动策略，通过 Geometric Fabrics 结合 DAgger 师生策略蒸馏完成极低延迟的灵巧抓取操作。"
      }
    },
    {
      media: "capstoneVideo",
      type: 'video',
      title: {
        en: "DD Robocon National Podium & Jump-Dunk Autonomous Robots",
        zh: "DD Robocon 全国领奖台与跳跃扣篮机器人"
      },
      subtitle: {
        en: "AIR 2 (2023, 2026), AIR 3 (2024), Dunk Robot (2025)",
        zh: "全国第2名 (2023, 2026) | 全国第3名 (2024) | 扣篮机器人 (2025)"
      },
      description: {
        en: "Led embedded architecture, custom PCB design, CAN bus motor drivers, and firmware for multi-year Robocon podium wins among 100+ national engineering teams. Built a high-torque jump-and-dunk robot.",
        zh: "主导 MIT-TECHTEAM 战队电子架构、PCB 板级设计与双电机 CAN 驱动固件，连续多年带领战队斩获全国亚军与季军。"
      }
    },
    {
      media: "h1FlipGif",
      type: 'video',
      title: {
        en: "Geometric Fabrics & Reactive Path Planning",
        zh: "Geometric Fabrics 反应式无碰撞轨迹规划"
      },
      subtitle: {
        en: "Low-Latency Real-Time Target Tracking",
        zh: "低延迟实时目标追踪"
      },
      description: {
        en: "Integrated Geometric Fabrics to maintain smooth, collision-free obstacle avoidance within reduced action spaces during dynamic robot manipulation.",
        zh: "整合 Geometric Fabrics 微分几何避障算法，在降维动作空间中动态维持高保真无碰撞平滑轨迹。"
      }
    },
    {
      media: "urLousdVideo",
      type: 'video',
      title: {
        en: "ROS 2 & Isaac Sim Co-Simulation Pipeline",
        zh: "ROS 2 与 Isaac Sim 联合仿真管线"
      },
      subtitle: {
        en: "Synthetic Perception & USD Asset Optimization",
        zh: "合成感知与 USD 资产优化"
      },
      description: {
        en: "Constructed hardware-in-the-loop co-simulation frameworks bridging ROS 2 Nav2/MoveIt nodes with NVIDIA Isaac Sim synthetic sensor generation.",
        zh: "构建硬件在环 (HIL) 联合仿真管线，打通 ROS 2 控制节点与 NVIDIA Isaac Sim 的合成感知传感器数据流。"
      }
    },
    {
      media: "h1TrainVideo",
      type: 'video',
      title: {
        en: "Automatic Domain Randomization (ADR)",
        zh: "自动领域随机化 (ADR) 虚实迁移"
      },
      subtitle: {
        en: "Overcoming Real-World Low-Torque Constraints",
        zh: "克服真实硬件低扭矩物理约束"
      },
      description: {
        en: "Tuned Isaac Lab ADR pipelines to randomize friction, mass, and joint damping, enabling direct zero-shot policy deployment to physical robotic hardware.",
        zh: "在 Isaac Lab 中深度优化 ADR 领域随机化算法，随机化摩擦力、质量分布与关节阻尼，实现零样本 (Zero-Shot) 虚实迁移。"
      }
    }
  ],

  // 2. ACHIEVEMENTS & OTHER PROJECTS (Grid View)
  achievementsGrid: [
    {
      id: 0,
      title: "IndiaSkills Autonomous Mobile Robotics West Regionals",
      subtitle: "Gold Medallist hosted by NSDC | Vision Target Acquisition Arena",
      imageSrc: "urLousdVideo",
      projectLink: null,
      type: "GOLD MEDAL"
    },
     {
      id: 1,
      title: "FPL AI-Powered Squad Optimizer",
      subtitle: "XGBoost, Gemini NLP Analysis & PuLP Integer Linear Programming",
      imageSrc: "webappImg",
      projectLink: "https://github.com/omgunjal2727",
      type: "AI / ML"
    },
    
    {
      id: 2,
      title: "DD Robocon National Podium Finishes",
      subtitle: "AIR 2 (2023, 2026) | AIR 3 (2024) | AIR 4 (2025)",
      imageSrc: "hriLabGif",
      projectLink: null,
      type: "PODIUM"
    },
    {
      id: 3,
      title: "Multimodal Receptionist Robot System [Patent]",
      subtitle: "ROS 2 LiDAR SLAM, IMU Fusion, Face ID & LLM Dialogue System",
      imageSrc: "destrahVideo",
      projectLink: null,
      type: "PATENT"
    },
    
   
    {
      id: 4,
      title: "eYantra Agricultural Vacuum Harvester",
      subtitle: "Vigyan Ashram Field Research & Autonomous Prototype",
      imageSrc: "h1TrainVideo",
      projectLink: null,
      type: "EYANTRA"
    }
  ],

  // 3. EDUCATION
  education: [
    {
      title: {
        en: "RRC, IIIT Hyderabad",
        zh: "IIIT Hyderabad 机器人研究中心 (RRC)"
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
        }
      ],
    },
    {
      title: {
        en: "MIT World Peace University - Pune",
        zh: "麻省理工世界和平大学 (MIT-WPU) - 浦那"
      },
      para: {
        en: "B.Tech in Computer Science Engineering (Specialization in AI & Data Science)",
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

  // 4. WORK & RESEARCH EXPERIENCE
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

  // 5. COLLECTION OF MEMORIES (New Photo Gallery)
  memories: [
    {
      id: 1,
      title: { en: "DD Robocon National Final", zh: "DD Robocon 全国总决赛" },
      location: "New Delhi, India",
      mediaSrc: AirLabImg,
      type: "image",
      size: "large"
    },
    {
      id: 2,
      title: { en: "IndiaSkills Gold Medallist Podium", zh: "IndiaSkills 颁奖台" },
      location: "Pune, India",
      mediaSrc: WaterlooImg,
      type: "image",
      size: "medium"
    },
    {
      id: 3,
      title: { en: "IIIT Hyderabad Robotics Lab Setup", zh: "IIIT Hyderabad 实验室测试" },
      location: "Hyderabad, India",
      mediaSrc: AirLabLogo,
      type: "image",
      size: "medium"
    },
    {
      id: 4,
      title: { en: "Autonomous Robot Field Testing", zh: "自主机器人户外测试" },
      location: "Vigyan Ashram",
      mediaSrc: TeslaIcon,
      type: "image",
      size: "tall"
    },
    {
      id: 5,
      title: { en: "MIT-TECHTEAM Workshop", zh: "MIT-TECHTEAM 战队车间" },
      location: "MIT-WPU Pune",
      mediaSrc: EcobeeIcon,
      type: "image",
      size: "medium"
    }
  ],

  aboutParaOne: {
    en: "I am a Robotics & AI Engineer with expertise in GPU-accelerated simulation (NVIDIA Isaac Lab & Isaac Sim), sim-to-real transfer, reinforcement learning, and embedded robotics systems. I am passionate about scaling robot intelligence to complex real-world tasks through policy distillation and multi-modal representation learning.",
    zh: "我是一名专注于 GPU 加速仿真 (NVIDIA Isaac Lab & Isaac Sim)、虚实迁移、强化学习和嵌入式机器人系统的机器人与 AI 工程师。"
  },
  aboutParaTwo: {
    en: "Currently, I am a Research Intern at RRC, IIIT Hyderabad, advised by Prof. Dr. Spandan Roy & Soham Patil, where I focus on visuomotor policy transfer for 7-DoF arms paired with 16-DoF dexterous hands. Simultaneously, I serve as Embedded Robotics Engineer at MIT-TECHTEAM, leading competitive robot electronics.",
    zh: "目前我在 IIIT Hyderabad 机器人研究中心 (RRC) 担任研究实习生，受 Spandan Roy 教授与 Soham Patil 指导。同时在 MIT-TECHTEAM 担任嵌入式工程师队长。"
  },
  aboutParaThree: {
    en: "Outside of research, I love competing in national robotics challenges like DD Robocon and IndiaSkills, designing custom PCBs, and building AI-driven domain solvers.",
    zh: "在研究之外，我积极参加 DD Robocon 和 IndiaSkills 等全国机器人大赛，设计定制 PCB，并开发基于 AI 的求解器工具。"
  },

  skills: [
    { img: isaacsIcon, para: "NVIDIA Isaac Lab, Isaac Sim, Sim-to-Real, PPO, DAgger" },
    { img: rosIcon, para: "ROS 2, Gazebo, LiDAR SLAM, Geometric Fabrics" },
    { img: openCVIcon, para: "PyTorch, View Invariance, ResNet, LSTMs, Contrastive Learning" },
    { img: RPIIcon, para: "STM32, TM4C, AVR MCUs, CAN, SPI, I2C, UART, PWM" },
    { img: SolidworksIcon, para: "Altium Designer, EagleCAD, Motor Drives, PCB Design" },
    { img: clangIcon, para: "C, C++, Embedded Firmware, Linux Kernel" },
    { img: codeIcon, para: "Python, Git, PuLP, XGBoost, Linux Tools" },
    { img: airplaneIcon, para: "Autonomous Ground Vehicles, Hardware Debugging" }
  ],

  contactSubHeading: {
    en: "Let's build intelligent robotic systems together!",
    zh: "让我们一起打造下一代智能机器人系统！"
  },

  social: [
    { img: githubIcon, url: "https://github.com/omgunjal2727" },
    { img: linkedinIcon, url: "https://www.linkedin.com/in/omgunjal27/" }
  ]
};

export default siteData;