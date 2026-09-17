import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import data from "../data"

// Components with Intuitive Names
import Header from "../components/Header"
import FeaturedProjectsGrid from "../components/FeaturedProjectsGrid"
import FeaturedCarousel from "../components/FeaturedCarousel"
import AchievementsGrid from "../components/AchievementsGrid"
import Experience from "../components/Experience"
import Memories from "../components/Memories"
import Skills from "../components/skills"
import About from "../components/about"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Seo title={data.seo.title} description={data.seo.description} />
    
    {/* 1. Hero / Header */}
    <Header />

    {/* 2. Featured Projects Grid */}
    <FeaturedProjectsGrid />
    
    {/* 3. Featured Simulation & Dynamics Reel */}
    <FeaturedCarousel />
    
    {/* 4. Achievements & Other Projects */}
    <AchievementsGrid />
    
    {/* 5. Work & Research Experience */}
    <Experience />
    
    {/* 6. Collection of Memories Art Board */}
    <Memories />
    
    {/* 7. Technical Skills */}
    <Skills />

    {/* 8. About Me (Directly above Footer) */}
    <About />
    
    {/* 9. Contact / Footer */}
    <Footer />
  </Layout>
)

export default IndexPage