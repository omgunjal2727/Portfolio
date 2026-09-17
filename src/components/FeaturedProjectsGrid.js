import React from "react"
import { withPrefix } from "gatsby"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/featuredGrid.scss"

const FeaturedProjectsGrid = () => {
  const { language } = useLanguage();

  const handleCardClick = (slug) => {
    if (typeof window !== "undefined") {
      window.location.href = withPrefix(slug);
    }
  };

  return (
    <div className="section" id="featured-grid">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <div className="featured-section-header">
            <span className="section-kicker">SELECTED WORKS</span>
            <h1>{getText(data.sections.featuredGrid, language)}</h1>
          </div>
        </Fade>

        {/* 2-Column Artistic Grid */}
        <div className="featured-two-column-grid">
          <Fade bottom cascade distance="25px">
            {data.featuredProjectsGrid.map((project, index) => {
              const projectNumber = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={project.id}
                  className="artistic-project-card"
                  onClick={() => handleCardClick(project.slug)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(project.slug);
                    }
                  }}
                >
                  {/* Top Meta: Index Number & Sleek Arrow */}
                  <div className="card-top-bar">
                    <span className="card-index">{projectNumber}</span>
                    <span className="card-arrow">↗</span>
                  </div>

                  {/* Visual Artwork / Photo Canvas */}
                  <div className="card-visual-frame">
                    {project.imageSrc ? (
                      <img 
                        src={project.imageSrc} 
                        alt={getText(project.title, language)} 
                        loading="lazy" 
                      />
                    ) : (
                      <div className="schematic-canvas-placeholder">
                        <span className="crosshair top-left">+</span>
                        <span className="crosshair top-right">+</span>
                        <span className="crosshair bottom-left">+</span>
                        <span className="crosshair bottom-right">+</span>
                        <div className="canvas-label">
                          <span className="brand-code">{project.id.toUpperCase()}</span>
                          <span className="brand-sub">PROJECT EXHIBIT // {projectNumber}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Clean Editorial Content */}
                  <div className="card-content-area">
                    <h3 className="project-title">{getText(project.title, language)}</h3>
                    <h4 className="project-subtitle">{getText(project.subtitle, language)}</h4>
                    <p className="project-summary">{getText(project.summary, language)}</p>

                    {/* Minimalist Slash-Separated Tech Stack */}
                    <div className="project-tech-row">
                      {project.tags.map((tag, idx) => (
                        <React.Fragment key={idx}>
                          <span className="tech-name">{tag}</span>
                          {idx < project.tags.length - 1 && <span className="tech-divider">/</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsGrid;