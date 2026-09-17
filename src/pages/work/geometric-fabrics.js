import React from "react"
import { withPrefix } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Fade from "../../components/animations/Fade"
import videoMedia from "../../images/nvidia/h1_Flip.mp4"
import "../../css/worksiteStyle.scss"

export default function GeometricFabricsDetail() {
  return (
    <Layout>
      <SEO title="Geometric Fabrics & Reactive Planning — Om Gunjal" />
      <div className="project-detail-page">
        <div className="detail-container">
          <a href={withPrefix("/#featured-grid")} className="back-btn">
            ← Back to Featured Projects
          </a>

          <Fade bottom>
            <div className="detail-header">
              <div className="detail-tag-row">
                <span className="badge">Geometric Fabrics</span>
                <span className="badge">Differential Geometry</span>
                <span className="badge">Reactive Collision Avoidance</span>
                <span className="badge">Motion Planning</span>
              </div>
              <h1>Geometric Fabrics & Reactive Path Planning</h1>
              <h2>Collision-Free High-Frequency Reactive Tracking in Reduced Action Spaces</h2>
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
                  <h3>Mathematical Foundations</h3>
                  <p>
                    Geometric Fabrics define robotic motion policies as geometric second-order differential equations that combine behavioral energy fields with geometric forcing. This yields collision-free trajectories that react smoothly in real-time.
                  </p>
                </div>

                <div className="section-block">
                  <h3>Highlights</h3>
                  <ul>
                    <li>Integrated reactive collision fields across complex obstacle geometries without global re-planning overhead.</li>
                    <li>Guaranteed continuous, bounded acceleration profiles ideal for fragile manipulators and real hardware execution.</li>
                  </ul>
                </div>
              </Fade>
            </div>

            <div className="detail-sidebar">
              <div className="spec-card">
                <h4>Key Details</h4>
                <div className="spec-item">
                  <span className="label">Core Domain</span>
                  <span className="value">Riemannian Motion Policies</span>
                </div>
                <div className="spec-item">
                  <span className="label">Control Rate</span>
                  <span className="value">500 Hz Real-Time Execution</span>
                </div>
                <div className="spec-item">
                  <span className="label">Implementation</span>
                  <span className="value">Python, C++, Isaac Lab</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}