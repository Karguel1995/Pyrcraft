import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'

import './Navigation.scss';

const Navigation = () => {
  const [isNavigationFixed, setIsNavigationFixed] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 120 ? setIsNavigationFixed(true) : setIsNavigationFixed(false)
  }

  const [isMobileNavigationVisible, setIsMoblieNavigationVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  return (
    <nav id="home">
      <div className="hamburger">
        <i className="fas fa-bars" onClick={() => setIsMoblieNavigationVisible(true)}></i>
        <div className={`${isMobileNavigationVisible ? 'visible-nav' : 'not-visible-nav'}`}>
          <ul className="navigation-contener">
            <Link
              className="navigation-list"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setIsMoblieNavigationVisible(false)}
            >
              <RouterLink to="/">
                Strona główna
              </RouterLink>
            </Link>

            <Link className="navigation-list" to="aboutUs" spy={true} smooth={true} offset={0} duration={500} onClick={() => setIsMoblieNavigationVisible(false)}>
              <RouterLink to="/">
                O nas
              </RouterLink>
            </Link>

            <Link className="navigation-list" to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={() => setIsMoblieNavigationVisible(false)}>
              <RouterLink to="/">
                Kontakt
              </RouterLink>
            </Link>

            <RouterLink className="navigation-list" to="/gallery" onClick={() => setIsMoblieNavigationVisible(false)}>
              Galeria
            </RouterLink>
          </ul>
          <i className="fas fa-times" onClick={() => setIsMoblieNavigationVisible(false)}></i>
        </div>
      </div>
      <div className={`nav-container ${isNavigationFixed ? "fixed" : ""}`}>
        <ul className="navigation-contener">
          <Link className="navigation-list" to="home" spy={true} smooth={true} offset={0} duration={500} >
            <RouterLink className="navigation-list" to="/">
              Strona główna
            </RouterLink>
          </Link>

          <Link className="navigation-list" to="aboutUs" spy={true} smooth={true} offset={0} duration={500}>
            <RouterLink className="navigation-list" to="/">
              O nas
            </RouterLink>
          </Link>

          <Link className="navigation-list" to="contact" spy={true} smooth={true} offset={0} duration={500}>
            <RouterLink className="navigation-list" to="/">
              Kontakt
            </RouterLink>
          </Link>

          <RouterLink className="navigation-list" to="/gallery">
            Galeria
          </RouterLink>
        </ul>

      </div>
    </nav >
  );
}

export default Navigation;