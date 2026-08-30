import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../data"

// Components
import Header from "../components/Header"
import About from "../components/about"
import NVIDIA from "../components/NVIDIA"           // Featured Projects Carousel
import Publications from "../components/Publications" // Achievements & Other Projects Grid
import Work from "../components/Work"                // Work & Research Experience
import Memories from "../components/Memories"        // Memories Photo Grid
import Skills from "../components/skills"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title={data.seo.title} description={data.seo.description} />
    
    {/* 1. Hero / Header */}
    <Header />
    
    {/* 2. About Me */}
    <About />
    
    {/* 3. Featured Projects Carousel */}
    <NVIDIA />
    
    {/* 4. Achievements & Other Projects Grid */}
    <Publications />
    
    {/* 5. Work & Research Experience */}
    <Work />
    
    {/* 6. Collection of Memories */}
    <Memories />
    
    {/* 7. Technical Skills */}
    <Skills />
    
    {/* 8. Contact / Footer */}
    <Footer />
  </Layout>
)

export default IndexPage