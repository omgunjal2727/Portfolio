import React, { useEffect, useState } from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import { Typewriter } from "react-simple-typewriter"
import imgUrl from "../images/OmTrophy.webp"

const Header = () => {
  const { language } = useLanguage();
  const [isLandscape, setIsLandscape] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      setIsIOS(iOS);
      
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
      setIsDesktop(!isMobile);
      
      setIsLandscape(window.innerWidth > window.innerHeight);
      
      const handleResize = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
        setIsDesktop(window.innerWidth >= 1024);
      };

      try {
        window.addEventListener("resize", handleResize);
      } catch (error) {
        console.warn('Error adding resize listener:', error);
      }
      handleResize();
      
      return () => {
        try {
          window.removeEventListener("resize", handleResize);
        } catch (error) {
          console.warn('Error removing resize listener:', error);
        }
      };
    }
  }, []);

  if (isIOS) {
    return (
      <div className="section" id="home">
        <div className="container">
          <div className="header-wrapper ios-device">
            <div 
              className="ios-background" 
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(${imgUrl})`,
              }}
            />
            
            <div className="content-wrapper">
              <Fade bottom>
                <h2>
                  {getText({ en: "Hi, I am", zh: "你好,我是" }, language)} {getText(data.name, language)}{" "}
                </h2>
              </Fade>

              <Fade bottom>
                <div className="heading-wrapper">
                  <h1>
                    {getText({ en: "I am a", zh: "我是一名" }, language)}{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      <Typewriter
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1200}
                        words={language === 'zh' ? 
                          ["机器人工程师", "AI研究员", "仿真开发员", "嵌入式工程师", "PCB设计师", "ROS 2专家"] :
                          ["Robotics Engineer", "AI Researcher", "Simulation Engineer", "Embedded Systems Dev", "PCB Designer", "ROS 2 Developer"]
                        }
                      />
                    </span>
                  </h1>
                </div>
              </Fade>

              <Fade bottom>
                <p>{getText(data.headerParagraph, language)}</p>
              </Fade>

              <Fade bottom>
                <a
                  href="https://www.linkedin.com/in/omgunjal27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  {getText({ en: "CONNECT WITH ME!", zh: "与我联系！" }, language)}
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section" id="home">
      <div className="container">
        <div 
          className={`header-wrapper ${isLandscape ? 'landscape' : 'portrait'} ${isDesktop ? 'desktop' : 'mobile'}`}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
              imgUrl +
              ")",
          }}
        >
          <Fade bottom>
            <h2>
              {getText({ en: "Hi, I am", zh: "你好,我是" }, language)} {getText(data.name, language)}{" "}
            </h2>
          </Fade>

          <Fade bottom>
            <div className="heading-wrapper">
              <h1>
                {getText({ en: "I am a", zh: "我是一名" }, language)}{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1200}
                    words={language === 'zh' ? 
                      ["机器人工程师", "AI研究员", "仿真开发员", "嵌入式工程师", "PCB设计师", "ROS 2专家"] :
                      ["Robotics Engineer", "AI Researcher", "Simulation Engineer", "Embedded Systems Dev", "PCB Designer", "ROS 2 Developer"]
                    }
                  />
                </span>
              </h1>
            </div>
          </Fade>

          <Fade bottom>
            <p>{getText(data.headerParagraph, language)}</p>
          </Fade>

          <Fade bottom>
            <a
              href="https://www.linkedin.com/in/omgunjal27/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              {getText({ en: "CONNECT WITH ME!", zh: "与我联系！" }, language)}
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Header