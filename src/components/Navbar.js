import React from "react"
import LanguageToggle from "./LanguageToggle"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"

const Navbar = () => {
  const { language, getLanguageUrl } = useLanguage();
  let resumelink = getLanguageUrl(language, "/resume");
  
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <div className="left-nav">
          <button 
            onClick={() => window.location.href = resumelink} 
            type="button" className="btn">
            {getText(data.nav.resume, language)}
          </button>
        </div>
        
        <div className="center-nav">
          <div className="links-wrapper">
            <button onClick={() => window.location.href = getLanguageUrl(language, '/') + '#home'} type="button">
              {getText(data.nav.home, language)}
            </button>
            <button onClick={() => window.location.href = getLanguageUrl(language, '/') + '#featured-projects'} type="button">
              {getText(data.nav.featured, language)}
            </button>
            <button onClick={() => window.location.href = getLanguageUrl(language, '/') + '#achievements'} type="button">
              {getText(data.nav.achievements, language)}
            </button>
            <button onClick={() => window.location.href = getLanguageUrl(language, '/') + '#memories'} type="button">
              {getText(data.nav.memories, language)}
            </button>
            <button onClick={() => window.location.href = getLanguageUrl(language, '/') + '#contact'} type="button">
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