import React, { useRef } from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/achievements.scss"

// Clean Media Imports
import patentImg from "../images/publications/patentt.jpeg"
import robocon24Img from "../images/publications/robocon24.jpeg"
import indiaSkillsImg from "../images/publications/IndiaSkills1.jpeg"
import adrTrainVideo from "../images/nvidia/h1_Train.mp4"
import fplProjectImg from "../images/publications/fpl.jpg"

const isVideoFile = (url) => {
  if (!url) return false;
  return ['.mp4', '.webm', '.mov'].some(ext => url.toLowerCase().endsWith(ext));
};

const AchievementsGrid = () => {
  const { language } = useLanguage();
  const videoRefs = useRef([]);

  const mediaMap = {
    indiaSkillsImg,
    patentImg,
    robocon24Img,
    adrTrainVideo,
    fplProjectImg
  };

  return (
    <div className="section" id="achievements">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.achievements, language)}</h1>
        </Fade>
        <div className="achievements-wrapper">
          <div className="grid">
            <Fade bottom distance="20px">
              {data.achievementsGrid.map((item, index) => {
                const mediaSrc = mediaMap[item.imageSrc] || patentImg;
                const isVid = isVideoFile(mediaSrc);

                return (
                  <div key={index} className="achievement-card">
                    <div 
                      className="background-media"
                      style={{
                        backgroundImage: !isVid ? `url(${mediaSrc})` : 'none'
                      }}
                    >
                      {isVid && (
                        <video
                          ref={el => videoRefs.current[item.id] = el}
                          className="background-video"
                          src={mediaSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      )}
                    </div>
                    
                    <div className="content">
                      <div className="achievement-type" data-type={item.type}>{item.type}</div>
                      <h3 className="header">{item.title}</h3>
                      <h4 className="subtitle">{item.subtitle}</h4>
                      {item.projectLink ? (
                        <button 
                          onClick={() => window.open(item.projectLink, "_blank")}
                          type="button" 
                          className="btn"
                        > 
                          {getText({ en: "View Details", zh: "查看详情" }, language)}
                        </button>
                      ) : (
                        <button type="button" className="btn btn-upcoming" disabled>
                          {getText({ en: "Award / Project", zh: "荣誉项目" }, language)}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AchievementsGrid