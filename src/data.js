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

// Company / Lab Logos
import mttLogo from "./images/company/MTTlogo.jpeg"
import rrcLogo from "./images/company/RRClogo.jpeg"
import oleeSpaceLogo from "./images/company/olespace.jpeg"

// Project Videos / Photos
import mttRobotVideo from "./images/workPhotos/TeslaWork_v2.mp4"
import isaacQuadrupedVideo from "./images/workPhotos/isaac_quadruped.mp4"
import oleeSpaceVideo from "./images/workPhotos/khazanah.mp4"
import mttLabImg from "./images/school/MTTlab.jpeg"
import rrcLabImg from "./images/school/RCClab.jpeg"

// Helper function that safely resolves English strings across all components
export const getText = (text) => {
  if (typeof text === 'string') return text;
  if (text && typeof text === 'object') return text.en || Object.values(text)[0] || '';
  return text || '';
};

const siteData = {
  seo: {
    title: "Om Sanjay Gunjal — Robotics & AI Portfolio",
    resumeTitle: "Resume",
    description: "Personal portfolio of Om Sanjay Gunjal — Robotics & AI Engineer specializing in GPU simulation, sim-to-real transfer, dexterous manipulation, and embedded hardware."
  },

  name: "Om Sanjay Gunjal",

  headerParagraph: "I am a Robotics & AI Engineer passionate about GPU-accelerated simulation, sim-to-real policy transfer, dexterous manipulation, autonomous navigation, and embedded hardware design.",

  nav: {
    home: "Home",
    featured: "Featured",
    achievements: "Achievements",
    experience: "Experience",
    memories: "Memories",
    about: "About",
    contact: "Contact",
    resume: "Resume"
  },

  sections: {
    featuredGrid: "Featured Projects",
    featuredProjects: "Simulation & Dynamics Reel",
    achievements: "Achievements & Other Projects",
    experience: "Work & Research Experience",
    memories: "Collection of Memories",
    skills: "Technical Skills",
    about: "About Me",
    contact: "Get In Touch"
  },

  buttons: {
    explore: "Explore",
    readMore: "Read More",
    viewDetails: "Case Study →",
    close: "Close"
  },

  footer: {
    madeBy: "Made by"
  },

  contactEmail: "omgunjalmtt@gmail.com",

  // 1. FEATURED PROJECTS GRID
  featuredProjectsGrid: [
    {
      id: "dextrah",
      slug: "/work/dextrah",
      mediaKey: "dextSimHandVid",
      isVideo: true,
      title: "16-DoF Visuomotor Dexterous Manipulation",
      subtitle: "Sim-to-Real Transfer on 7-DoF xArm7 & Leap Hand",
      summary: "Adapted NVIDIA DextrAH-RGB & Maniwhere policies using DAgger distillation and Geometric Fabrics in Isaac Lab.",
      tags: ["Isaac Lab", "Sim-to-Real", "DAgger", "PyTorch", "xArm7"]
    },
    {
      id: "robocon",
      slug: "/work/robocon",
      mediaKey: "roboconVideo",
      isVideo: true,
      title: "DD Robocon National Finalist & Dunk Robot",
      subtitle: "AIR 2 (2023, 2026) | AIR 3 (2024) | AIR 4 (2025)",
      summary: "Engineered full electronics stack, multi-layer CAN-bus PCBs, and dynamic jumping mechanisms for competitive robots.",
      tags: ["CAN Bus", "STM32", "Altium Designer", "C++", "Robotics Hardware"]
    },
    {
      id: "geometric-fabrics",
      slug: "/work/geometric-fabrics",
      mediaKey: "h1FlipVideo",
      isVideo: true,
      title: "Geometric Fabrics & Reactive Planning",
      subtitle: "Collision-Free Reactive Manipulation in 5D PCA Space",
      summary: "Differential geometric acceleration controllers executing reactive real-time trajectory adaptation around obstacles.",
      tags: ["Geometric Fabrics", "Optimization", "Motion Planning", "Kinematics"]
    },
    {
      id: "ros2-isaac",
      slug: "/work/ros2-isaac",
      mediaKey: "ros2IsaacVideo",
      isVideo: true,
      title: "ROS 2 & Isaac Sim Co-Simulation Pipeline",
      subtitle: "Hardware-in-the-Loop Synthetic Sensor Validation",
      summary: "Integrated high-fidelity USD assets, Nav2 controllers, and synthetic RGB-D/LiDAR streams for real-time validation.",
      tags: ["ROS 2", "Isaac Sim", "USD", "LiDAR SLAM", "Nav2"]
    },
    {
      id: "adr-sim2real",
      slug: "/work/adr-sim2real",
      mediaKey: "adrTrainVideo",
      isVideo: true,
      title: "Automatic Domain Randomization (ADR)",
      subtitle: "Zero-Shot Sim-to-Real Transfer Under Torque Limits",
      summary: "Curriculum-based dynamic parameter randomization (friction, mass, joint damping) preventing real-world policy failure.",
      tags: ["Reinforcement Learning", "ADR", "Isaac Lab", "Sim-to-Real"]
    }
  ],

  // 2. FEATURED CAROUSEL REEL
  featuredCarouselItems: [
    {
      media: "dextSimHandVid",
      type: 'video',
      title: "16-DoF Visuomotor Dexterous Manipulation in Isaac Lab",
      subtitle: "NVIDIA DextrAH-RGB & Maniwhere Policy Adaptation",
      description: "Adapted visuomotor policies for a 7-DoF xArm7 paired with a 16-DoF Leap Hand. Applied DAgger teacher-student distillation mapping oracle states to a 5D PCA action space via Geometric Fabrics."
    },
    {
      media: "roboconVideo",
      type: 'video',
      title: "DD Robocon National Podium & Jump-Dunk Autonomous Robots",
      subtitle: "AIR 2 (2023, 2026), AIR 3 (2024), Dunk Robot (2025)",
      description: "Led embedded architecture, custom PCB design, CAN bus motor drivers, and firmware for multi-year Robocon podium wins among 100+ national engineering teams. Built a high-torque jump-and-dunk robot."
    },
    {
      media: "h1FlipVideo",
      type: 'video',
      title: "Geometric Fabrics & Reactive Path Planning",
      subtitle: "Low-Latency Real-Time Target Tracking",
      description: "Integrated Geometric Fabrics to maintain smooth, collision-free obstacle avoidance within reduced action spaces during dynamic robot manipulation."
    },
    {
      media: "ros2IsaacVideo",
      type: 'video',
      title: "ROS 2 & Isaac Sim Co-Simulation Pipeline",
      subtitle: "Synthetic Perception & USD Asset Optimization",
      description: "Constructed hardware-in-the-loop co-simulation frameworks bridging ROS 2 Nav2/MoveIt nodes with NVIDIA Isaac Sim synthetic sensor generation."
    },
    {
      media: "adrTrainVideo",
      type: 'video',
      title: "Automatic Domain Randomization (ADR)",
      subtitle: "Overcoming Real-World Low-Torque Constraints",
      description: "Tuned Isaac Lab ADR pipelines to randomize friction, mass, and joint damping, enabling direct zero-shot policy deployment to physical robotic hardware."
    }
  ],

  // 3. ACHIEVEMENTS & OTHER PROJECTS
  achievementsGrid: [
    {
      id: 0,
      title: "IndiaSkills Autonomous Mobile Robotics West Regionals",
      subtitle: "Gold Medallist hosted by NSDC | Vision Target Acquisition Arena",
      imageSrc: "indiaSkillsImg",
      projectLink: null,
      type: "GOLD MEDAL"
    },
    {
      id: 1,
      title: "FPL AI-Powered Squad Optimizer",
      subtitle: "XGBoost, Gemini NLP Analysis & PuLP Integer Linear Programming",
      imageSrc: "fplProjectImg",
      projectLink: null,
      type: "AI / ML"
    },
    {
      id: 2,
      title: "DD Robocon National Podium Finishes",
      subtitle: "AIR 2 (2023, 2026) | AIR 3 (2024) | AIR 4 (2025)",
      imageSrc: "robocon24Img",
      projectLink: null,
      type: "PODIUM"
    },
    {
      id: 3,
      title: "Multimodal Receptionist Robot System [Patent]",
      subtitle: "ROS 2 LiDAR SLAM, IMU Fusion, Face ID & LLM Dialogue System",
      imageSrc: "patentImg",
      projectLink: null,
      type: "PATENT"
    },
    {
      id: 4,
      title: "eYantra Agricultural Vacuum Harvester",
      subtitle: "Vigyan Ashram Field Research & Autonomous Prototype",
      imageSrc: "adrTrainVideo",
      projectLink: null,
      type: "EYANTRA"
    }
  ],

  // 4. WORK & RESEARCH EXPERIENCE
  projects: [
    {
      title: "RRC, IIIT Hyderabad",
      position: "Research Intern — IIIT Hyderabad",
      para: "Sim-to-Real transfer, DAgger teacher-student distillation, and view-invariant representation learning on xArm7 and 16-DoF Leap Hand.",
      imageSrc: rrcLogo,
      url: "https://robotics.iiit.ac.in/",
      date: "01/2026 - Present",
      description: [
        "Adapted NVIDIA DextrAH-RGB and Maniwhere visuomotor policies for 7-DoF xArm7 paired with a 16-DoF Leap Hand in simulation and real-world setups",
        "Implemented DAgger policy distillation mapping oracle states to a reduced 5D PCA action space via Geometric Fabrics for collision-free dexterous manipulation",
        "Engineered Isaac Lab simulation pipelines, tuning Automatic Domain Randomization (ADR) and optimizing URDF/USD assets for hardware torque limits"
      ],
      workImg: isaacQuadrupedVideo,
    },
    {
      title: "MIT-TECHTEAM, MIT-WPU",
      position: "Embedded Robotics Engineer — MIT-WPU",
      para: "Specialized in complete robotic systems: firmware debugging, sensor interfacing, and multi-layer PCB design.",
      imageSrc: mttLogo,
      url: "https://mitwpu.edu.in/",
      date: "09/2022 - 07/2026",
      description: [
        "Specialized in complete robotic systems including debugging, embedded software development, CAN/SPI/I2C/UART sensor interfacing, and PCB designing",
        "Managed and implemented Agile methodologies across multidisciplinary student robotics teams",
        "Mentored recruits in embedded systems, lab safety, motor drive architectures, and PCB layout practices"
      ],
      workImg: mttRobotVideo,
    },
    {
      title: "OLEE SPACE, PUNE",
      position: "Robotics Intern — OLEE SPACE",
      para: "Contributed to robotics software and hardware setups for building an autonomous all-terrain vehicle.",
      imageSrc: oleeSpaceLogo,
      url: "https://oleespace.com/",
      date: "11/2025 - 12/2025",
      description: [
        "Contributed to initial software and hardware architecture setups for building an autonomous all-terrain vehicle",
        "Configured motor controller communication buses and sensor integration for outdoor mobility testing"
      ],
      workImg: oleeSpaceVideo,
    }
  ],

  // 5. COLLECTION OF MEMORIES
  memories: [
    {
      id: 1,
      title: "DD Robocon National Final",
      location: "New Delhi, India",
      mediaSrc: rrcLabImg
    },
    {
      id: 2,
      title: "IndiaSkills Gold Medallist Podium",
      location: "Pune, India",
      mediaSrc: mttLabImg
    },
    {
      id: 3,
      title: "IIIT Hyderabad Robotics Lab Setup",
      location: "Hyderabad, India",
      mediaSrc: rrcLogo
    },
    {
      id: 4,
      title: "Autonomous Robot Field Testing",
      location: "Vigyan Ashram",
      mediaSrc: mttLogo
    },
    {
      id: 5,
      title: "MIT-TECHTEAM Workshop",
      location: "MIT-WPU Pune",
      mediaSrc: oleeSpaceLogo
    }
  ],

  aboutParaOne: "I am a Robotics & AI Engineer with expertise in GPU-accelerated simulation (NVIDIA Isaac Lab & Isaac Sim), sim-to-real transfer, reinforcement learning, and embedded robotics systems. I am passionate about scaling robot intelligence to complex real-world tasks through policy distillation and multi-modal representation learning.",
  
  aboutParaTwo: "Currently, I am a Research Intern at RRC, IIIT Hyderabad, advised by Prof. Dr. Spandan Roy & Soham Patil, where I focus on visuomotor policy transfer for 7-DoF arms paired with 16-DoF dexterous hands. Simultaneously, I serve as Embedded Robotics Engineer at MIT-TECHTEAM, leading competitive robot electronics.",
  
  aboutParaThree: "Outside of research, I love competing in national robotics challenges like DD Robocon and IndiaSkills, designing custom PCBs, and building AI-driven domain solvers.",

  skills: [
    { img: isaacsIcon, title: "Isaac Lab", para: "NVIDIA Isaac Lab, Isaac Sim, Sim-to-Real, PPO, DAgger" },
    { img: rosIcon, title: "ROS 2", para: "ROS 2, Gazebo, LiDAR SLAM, Geometric Fabrics" },
    { img: openCVIcon, title: "PyTorch", para: "PyTorch, View Invariance, ResNet, LSTMs, Contrastive Learning" },
    { img: RPIIcon, title: "Embedded", para: "STM32, TM4C, AVR MCUs, CAN, SPI, I2C, UART, PWM" },
    { img: SolidworksIcon, title: "Hardware", para: "Altium Designer, EagleCAD, Motor Drives, PCB Design" },
    { img: clangIcon, title: "C / C++", para: "C, C++, Embedded Firmware, Real-Time Linux" },
    { img: codeIcon, title: "Python & Tools", para: "Python, Git, PuLP, XGBoost, Linux Kernel" },
    { img: airplaneIcon, title: "Field Robotics", para: "Autonomous Ground Vehicles, Hardware Debugging" }
  ],

  contactSubHeading: "Let's build intelligent robotic systems together!",

  social: [
    { img: githubIcon, url: "https://github.com/omgunjal2727" },
    { img: linkedinIcon, url: "https://www.linkedin.com/in/omgunjal27/" }
  ]
};

export default siteData;