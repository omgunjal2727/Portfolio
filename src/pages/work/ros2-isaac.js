import React from "react"
import { withPrefix } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Fade from "../../components/animations/Fade"
import videoMedia from "../../images/publications/ur_lousd.mp4"
import "../../css/worksiteStyle.scss"

export default function Ros2IsaacDetail() {
  return (
    <Layout>
      <SEO title="ROS 2 & Isaac Sim Co-Simulation — Om Gunjal" />
      <div className="project-detail-page">
        <div className="detail-container">
          <a href={withPrefix("/#featured-grid")} className="back-btn">
            ← Back to Featured Projects
          </a>

          <Fade bottom>
            <div className="detail-header">
              <div className="detail-tag-row">
                <span className="badge">ROS 2 Humble</span>
                <span className="badge">NVIDIA Isaac Sim</span>
                <span className="badge">USD Assets</span>
                <span className="badge">Nav2 & MoveIt</span>
              </div>
              <h1>ROS 2 & Isaac Sim Co-Simulation Pipeline</h1>
              <h2>Bridging High-Fidelity Physics Simulation with Production ROS 2 Controllers</h2>
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
                  <h3>Pipeline Architecture</h3>
                  <p>
                    Established a real-time ROS 2 co-simulation pipeline interfacing Omniverse Isaac Sim with native ROS 2 packages via CycloneDDS. Synthetic LiDAR point clouds, IMU messages, and joint telemetry were channeled directly into Nav2 and MoveIt 2.
                  </p>
                </div>
              </Fade>
            </div>

            <div className="detail-sidebar">
              <div className="spec-card">
                <h4>Pipeline Details</h4>
                <div className="spec-item">
                  <span className="label">Middleware</span>
                  <span className="value">ROS 2 / CycloneDDS</span>
                </div>
                <div className="spec-item">
                  <span className="label">Sensors</span>
                  <span className="value">Synthetic 3D LiDAR, Stereo RGB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}