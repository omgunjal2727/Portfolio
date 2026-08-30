import React from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/memories.scss"

const Memories = () => {
  const { language } = useLanguage();

  return (
    <div className="section memories-full-section" id="memories">
      {/* Centered Section Title */}
      <div className="memories-title-wrapper">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.memories, language)}</h1>
        </Fade>
      </div>

      {/* 100% Full Window Width Art Board Canvas */}
      <div className="artboard-canvas-full">
        <div className="artboard-grid">
          <Fade bottom cascade distance="20px">
            {data.memories.map((photo, index) => (
              <div key={photo.id || index} className={`photo-pin-card tilt-${(index % 5) + 1}`}>
                <div className="photo-wrapper">
                  <img src={photo.mediaSrc} alt="Memory" loading="lazy" />
                </div>
                <div className="photo-caption">
                  <h3>{getText(photo.title, language)}</h3>
                  <span>📍 {photo.location}</span>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Memories