import React from "react"
import { withPrefix } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Fade from "../../components/animations/Fade"
import videoMedia from "../../images/ProjectPhotos/robocon25.mp4"
import "../../css/worksiteStyle.scss"

export default function RoboconDetail() {
  return (
    <Layout>
      <SEO title="DD Robocon National Finalist & Dunk Robot — Om Gunjal" />
      <div className="project-detail-page">
        <div className="detail-container">
          <a href={withPrefix("/#featured-grid")} className="back-btn">
            ← Back to Featured Projects
          </a>

          <Fade bottom>
            <div className="detail-header">
              <div className="detail-tag-row">
                <span className="badge">DD Robocon</span>
                <span className="badge">AIR 2 (2023, 2026)</span>
                <span className="badge">AIR 3 (2024)</span>
                <span className="badge">CAN Bus</span>
                <span className="badge">Embedded Systems</span>
              </div>
              <h1>DD Robocon National Finalist & Dunk Robot</h1>
              <h2>Lead Embedded Robotics Architecture, High-Speed Power Drives & Jumping Mechanisms</h2>
            </div>
          </Fade>

          <Fade bottom>
            <div className="detail-media-card">
              <video src={videoMedia} autoPlay muted loop playsInline />
            </div>
          </Fade>

          <div className="detail-body-grid">
            <div className="detail-main-content">
              <Fade bottom>
                <div className="section-block">
                  <h3>Overview</h3>
                  <p>
                    As the Lead Embedded Robotics Engineer for MIT-TECHTEAM (MIT-WPU), I led the full electronics stack, power delivery networks, and actuator firmware for multi-year podium finishes at DD Robocon India, competing against 100+ national universities.
                  </p>
                </div>

                <div className="section-block">
                  <h3>Key Engineering Contributions</h3>
                  <ul>
                    <li><strong>Embedded CAN Bus Network:</strong> Designed deterministic CAN 2.0B communication bus synchronizing multiple brushless BLDC motor controllers and custom optical wheel encoders.</li>
                    <li><strong>Robocon 2025 Jumping Mechanism:</strong> Engineered high-power pneumatic and mechanical release triggers allowing the robot to jump and accurately dunk game pieces into elevated baskets.</li>
                    <li><strong>Custom PCB Design:</strong> Built 4-layer power distribution and microcontroller interface boards in Altium Designer with reverse-polarity protection and TVS diodes.</li>
                  </ul>
                </div>
              </Fade>
            </div>

            <div className="detail-sidebar">
              <div className="spec-card">
                <h4>Competition Summary</h4>
                <div className="spec-item">
                  <span className="label">Team</span>
                  <span className="value">MIT-TECHTEAM</span>
                </div>
                <div className="spec-item">
                  <span className="label">Rankings</span>
                  <span className="value">AIR 2 (2023, 2026), AIR 3 (2024)</span>
                </div>
                <div className="spec-item">
                  <span className="label">Microcontrollers</span>
                  <span className="value">STM32, TM4C123G</span>
                </div>
                <div className="spec-item">
                  <span className="label">Tools</span>
                  <span className="value">Altium, FreeRTOS, C/C++</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}