import React from "react"
import { withPrefix } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Fade from "../../components/animations/Fade"
import videoMedia from "../../images/nvidia/DextSimHandVid.mp4"
import "../../css/worksiteStyle.scss"

export default function DextrahDetail() {
  return (
    <Layout>
      <SEO title="16-DoF Visuomotor Dexterous Manipulation — Om Gunjal" />
      <div className="project-detail-page">
        <div className="detail-container">
          <a href={withPrefix("/#featured-grid")} className="back-btn">
            ← Back to Featured Projects
          </a>

          <Fade bottom>
            <div className="detail-header">
              <div className="detail-tag-row">
                <span className="badge">NVIDIA Isaac Lab</span>
                <span className="badge">Sim-to-Real</span>
                <span className="badge">DAgger Distillation</span>
                <span className="badge">7-DoF xArm7</span>
                <span className="badge">16-DoF Leap Hand</span>
              </div>
              <h1>16-DoF Visuomotor Dexterous Manipulation</h1>
              <h2>Sim-to-Real Policy Transfer with Geometric Fabrics & Teacher-Student Distillation</h2>
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
                  <h3>Project Overview</h3>
                  <p>
                    Conducted at RRC, IIIT Hyderabad under Prof. Dr. Spandan Roy & Soham Patil. The research tackles high-dimensional multi-fingered dexterous manipulation under low-torque hardware constraints using NVIDIA Isaac Lab.
                  </p>
                  <p>
                    By adapting the NVIDIA DextrAH-RGB and Maniwhere visuomotor policy frameworks to physical 7-DoF xArm7 manipulators paired with 16-DoF Leap Hands, we established stable zero-shot transfer capabilities.
                  </p>
                </div>

                <div className="section-block">
                  <h3>Technical Architecture & Methodology</h3>
                  <ul>
                    <li><strong>DAgger Distillation:</strong> Trained state-based oracle teacher policies with privileged environment states, then distilled them into vision-based student policies using RGB observations.</li>
                    <li><strong>5D PCA Action Space:</strong> Mapped high-dimensional finger trajectories into a reduced 5D Principal Component Analysis (PCA) manifold governed by Geometric Fabrics for reactive, collision-free execution.</li>
                    <li><strong>Low-Torque Dynamics:</strong> Fine-tuned URDF/USD inertial definitions and damping coefficients to stay strictly within real-world motor continuous current thresholds.</li>
                  </ul>
                </div>

                <div className="section-block">
                  <h3>Sim-to-Real Outcomes</h3>
                  <p>
                    Achieved consistent grasping, re-orientation, and reactive tracking without motor over-current trip faults, demonstrating robust sim-to-real transfer with zero manual trajectory corrections.
                  </p>
                </div>
              </Fade>
            </div>

            <div className="detail-sidebar">
              <div className="spec-card">
                <h4>System Specs</h4>
                <div className="spec-item">
                  <span className="label">Institution</span>
                  <span className="value">RRC, IIIT Hyderabad</span>
                </div>
                <div className="spec-item">
                  <span className="label">Role</span>
                  <span className="value">Research Intern</span>
                </div>
                <div className="spec-item">
                  <span className="label">Hardware</span>
                  <span className="value">xArm7 + 16-DoF Leap Hand</span>
                </div>
                <div className="spec-item">
                  <span className="label">Frameworks</span>
                  <span className="value">Isaac Lab, PyTorch, ROS 2</span>
                </div>
                <div className="action-links">
                  <a href="https://robotics.iiit.ac.in/" target="_blank" rel="noopener noreferrer" className="external-btn">
                    Visit Lab Page ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}