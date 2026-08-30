import React, { useState, useEffect, useRef } from "react"
import Fade from "./animations/Fade"
import { Carousel } from "react-bootstrap"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/NVIDIA.scss"

// Media Imports
import gr1ImitationVideo from "./../images/nvidia/DextSimHandVid.mp4"
import h1FlipGif from "./../images/nvidia/h1_Flip.mp4"
import h1TrainVideo from "./../images/nvidia/h1_Train.mp4"
import urLousdVideo from "./../images/publications/dextraa.mp4"
import capstoneVideo from "./../images/ProjectPhotos/robocon25.mp4"

const NVIDIA = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef({});
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const mediaMap = {
    gr1ImitationVideo,
    capstoneVideo,
    h1FlipGif,
    urLousdVideo,
    h1TrainVideo
  };

  const carouselItems = data.featuredCarouselItems.map(item => ({
    ...item,
    media: mediaMap[item.media] || mediaMap.gr1ImitationVideo,
    title: getText(item.title, language),
    subtitle: getText(item.subtitle, language),
    description: getText(item.description, language)
  }));

  const handleCarouselSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    const currentVideo = videoRefs.current[selectedIndex];
    if (currentVideo && currentVideo.tagName === 'VIDEO') {
      currentVideo.play().catch(() => {});
    }
  };

  return (
    <div className="section" id="featured-projects">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.featuredProjects, language)}</h1>
        </Fade>
        
        <div className="nvidia-section">
          <div className="carousel-container">
            <Carousel 
              className="nvidia-carousel"
              activeIndex={activeIndex}
              onSelect={handleCarouselSelect}
              interval={4000}
              touch={true}
              indicators={!isMobile}
              controls={true}
              slide={true}
              wrap={true}
              variant="dark"
            >
              {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  <video
                    ref={el => videoRefs.current[index] = el}
                    className="d-block w-100"
                    src={item.media}
                    autoPlay={index === 0}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>{item.title}</h3>
                    <p style={{ fontWeight: "600", marginBottom: "4px" }}>{item.subtitle}</p>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NVIDIA