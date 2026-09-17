import React from "react"
import { withPrefix } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Fade from "../../components/animations/Fade"
import videoMedia from "../../images/nvidia/h1_Train.mp4"
import "../../css/worksiteStyle.scss"

export default function AdrSim2RealDetail() {
  return (
    <Layout>
      <SEO title="Automatic Domain Randomization (ADR) — Om Gunjal" />
      <div className="project-detail-page">
        <div className="detail-container">
          <a href={withPrefix("/#featured-grid")} className="back-btn">
            ← Back to Featured Projects
          </a>

          <Fade bottom>
            <div className="detail-header">
              <div className="detail-tag-row">
                <span className="badge">Reinforcement Learning</span>
                <span className="badge">ADR</span>
                <span className="badge">Physics Simulation</span>
                <span className="badge">Torque Constraints</span>
              </div>
              <h1>Automatic Domain Randomization (ADR)</h1>
              <h2>Zero-Shot Policy Deployment Under Hardware Torque Limitations</h2>
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
                  <h3>Methodology</h3>
                  <p>
                    Implemented Automatic Domain Randomization (ADR) within NVIDIA Isaac Lab to automatically scale physical disturbance bounds (link friction, mass distribution, damping, sensor noise) as the reinforcement learning agent improves performance.
                  </p>
                </div>
              </Fade>
            </div>

            <div className="detail-sidebar">
              <div className="spec-card">
                <h4>Training Details</h4>
                <div className="spec-item">
                  <span className="label">Simulation</span>
                  <span className="value">NVIDIA Isaac Lab (GPU Vectorized)</span>
                </div>
                <div className="spec-item">
                  <span className="label">Algorithm</span>
                  <span className="value">PPO with ADR Curriculum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}