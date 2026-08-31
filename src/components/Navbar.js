import React from "react"
import { withPrefix } from "gatsby"
import LanguageToggle from "./LanguageToggle"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"

const Navbar = () => {
  const { language } = useLanguage();
  
  // Smooth scroll directly on homepage, or redirect cleanly if on /resume page
  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      const isResumePage = window.location.pathname.includes('/resume');
      
      if (isResumePage) {
        // Return to homepage with pathPrefix and section anchor
        window.location.href = withPrefix(`/?lang=${language}#${sectionId}`);
      } else {
        // Smooth scroll directly to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = sectionId;
        }
      }
    }
  };

  const handleResumeClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = withPrefix(`/resume?lang=${language}`);
    }
  };

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <div className="left-nav">
          <button onClick={handleResumeClick} type="button" className="btn">
            {getText(data.nav.resume, language)}
          </button>
        </div>
        
        <div className="center-nav">
          <div className="links-wrapper">
            <button onClick={() => scrollToSection('home')} type="button">
              {getText(data.nav.home, language)}
            </button>
            <button onClick={() => scrollToSection('featured-projects')} type="button">
              {getText(data.nav.featured, language)}
            </button>
            <button onClick={() => scrollToSection('achievements')} type="button">
              {getText(data.nav.achievements, language)}
            </button>
            <button onClick={() => scrollToSection('memories')} type="button">
              {getText(data.nav.memories, language)}
            </button>
            <button onClick={() => scrollToSection('contact')} type="button">
              {getText(data.nav.contact, language)}
            </button>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar