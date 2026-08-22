import React, { useState, useRef, useEffect } from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import { getText } from "../data"
import "../styles/publications.scss"

// Import media assets (Preserving existing imports/paths)
import hriLabGif from "../images/publications/robocon24.jpeg"
import destrahVideo from "../images/publications/destrah.mp4"
import urLousdVideo from "../images/publications/IndiaSkills1.jpeg"
import h1SilVideo from "../images/publications/h1_sil.mp4"
import h1TrainVideo from "../images/nvidia/h1_Train.mp4"
import dextrousHandImage from "../images/nvidia/maniware2.mp4"

const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

const Publications = () => {
  const { language } = useLanguage();
  const [videoErrors, setVideoErrors] = useState({});
  const videoRefs = useRef([]);

  useEffect(() => {
    try {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target;
            try {
              forceVideoPlay(video);
            } catch (error) {
              console.warn('Error forcing video play:', error);
            }
          }
        });
      }, {
        threshold: 0.5
      });

      videoRefs.current.forEach(video => {
        if (video) {
          try {
            observer.observe(video);
          } catch (error) {
            console.warn('Error observing video:', error);
          }
        }
      });

      return () => {
        try {
          observer.disconnect();
        } catch (error) {
          console.warn('Error disconnecting observer:', error);
        }
      };
    } catch (error) {
      console.warn('Error setting up intersection observer:', error);
    }
  }, []);

  const handleVideoError = (publicationId) => {
    setVideoErrors(prev => ({ ...prev, [publicationId]: true }));
  };

  const forceVideoPlay = (videoElement) => {
    if (videoElement) {
      videoElement.muted = true;
      videoElement.loop = true;
      
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setTimeout(() => {
            videoElement.play().catch(e => console.log('Manual play failed:', e));
          }, 100);
        });
      }
    }
  };

  const canPlayVideo = (publication) => {
    return !videoErrors[publication.id];
  };
  
  // Research & Top Achievements mapped to Om's resume
  const publicationsData = [
    {
      id: 0,
      title: "Multimodal Receptionist Robot System [Patent]",
      subtitle: "ROS 2 Autonomous Assistant with LiDAR SLAM, IMU Fusion & LLM Dialogue Interface",
      imageSrc: destrahVideo,
      projectLink: null,
      type: "PATENT",
      upcoming: false
    },
    {
      id: 1,
      title: "DD Robocon National Finalist & Multi-Year Podium Winner",
      subtitle: "AIR 2 (2023, 2026) | AIR 3 (2024) | Jump-and-Dunk Robot (2025)",
      imageSrc: hriLabGif,
      projectLink: null,
      type: "ROBOCON",
      upcoming: false
    },
    {
      id: 2,
      title: "IndiaSkills Autonomous Mobile Robotics West Regionals",
      subtitle: "Gold Medallist hosted by NSDC | Vision-Based Target Acquisition Arena",
      imageSrc: urLousdVideo,
      projectLink: null,
      type: "GOLD MEDAL",
      upcoming: false
    },
    {
      id: 3,
      title: "Visuomotor Policy Sim-to-Real Transfer for 16-DoF Dexterous Manipulation",
      subtitle: "RRC, IIIT Hyderabad Research | xArm7 & Leap Hand with DAgger Distillation",
      imageSrc: dextrousHandImage,
      projectLink: "https://robotics.iiit.ac.in/",
      type: "RESEARCH",
      upcoming: false
    },
    {
      id: 4,
      title: "Uncalibrated Monocular RGB View-Invariant Representation Learning",
      subtitle: "RRC, IIIT Hyderabad | Multi-View Contrastive & 3D Spatial Objectives",
      imageSrc: h1SilVideo,
      projectLink: "https://robotics.iiit.ac.in/",
      type: "RESEARCH",
      upcoming: false
    },
    {
      id: 5,
      title: "eYantra Innovation Premier League — Vacuum Agricultural Harvester",
      subtitle: "Vigyan Ashram Field Research & Autonomous Prototype",
      imageSrc: h1TrainVideo,
      projectLink: null,
      type: "PROJECT",
      upcoming: false
    }
  ];

  return (
    <div className="section" id="publications">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText({ en: "Achievements & Research", zh: "成就与研究" }, language)}</h1>
        </Fade>
        <div className="publications-wrapper">
          <div className="grid">
            <Fade bottom distance="20px">
              {publicationsData.map((publication, index) => (
                <div key={index} className="publication-card">
                  <div 
                    className="background-media"
                    style={{
                      backgroundImage: !isVideoFile(publication.imageSrc)
                        ? `linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(240, 248, 255, 0.5) 70%, rgba(240, 248, 255, 0.9) 85%, rgba(240, 248, 255, 1.0) 100%), url(${publication.imageSrc})`
                        : 'none'
                    }}
                  >
                    {isVideoFile(publication.imageSrc) && canPlayVideo(publication) && (
                      <video
                        ref={el => {
                          try {
                            videoRefs.current[publication.id] = el;
                          } catch (error) {
                            console.warn(`Error setting video ref:`, error);
                          }
                        }}
                        className="background-video"
                        src={publication.imageSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        loading="lazy"
                        controls={false}
                        disablePictureInPicture
                        onError={() => handleVideoError(publication.id)}
                      />
                    )}
                  </div>
                  <div className="content">
                    <div className="publication-type" data-type={publication.type}>{publication.type}</div>
                    <h3 className="header">{publication.title}</h3>
                    <h4 className="subtitle">{publication.subtitle}</h4>
                    {publication.projectLink ? (
                      <button 
                        onClick={() => {
                          window.open(publication.projectLink, "_blank");
                        }}
                        type="button" 
                        className="btn"
                      > 
                        {getText({ en: "View Details", zh: "查看详情" }, language)}
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-upcoming"
                        disabled
                      >
                        {getText({ en: "Award / Project", zh: "荣誉项目" }, language)}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications