import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css"

import './AboutUs.scss'

import experience from '../../../../../images/skills/experience.png'
import quality from '../../../../../images/skills/quality.png'
import services from '../../../../../images/skills/services.png'

const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      mirror: true
    });
  }, []);
  return (
    <div className="about-us-page">
      <div className="advantages">
        <h2 data-aos="slide-right">Dlaczego warto wybrać akurat nas?</h2>
        <div className="advantages-list">
          <div >
            <p>Doświadczenie</p>
            <img data-aos="zoom-in" src={experience} />
          </div>
          <div >
            <p>Sprawdzone materiały</p>
            <img data-aos="zoom-in" data-aos-delay="500" src={quality} />
          </div>
          <div >
            <p>Szeroki wachlarz usług</p>
            <img data-aos="zoom-in" data-aos-delay="1000" src={services} />
          </div>
        </div>
      </div>
      <div className="about-us-container">
        <div className='about-us-container-left'>
          <h2>O nas</h2>
          <p data-aos="fade-up">Jesteśmy dumni z tego, że zapewniamy wysokiej jakości, a jednocześnie wydajną i skuteczną obsługę każdemu z naszych klientów, wykorzystując naszą zaawansowaną wiedzę, umiejętności i doświadczenie, aby upewnić się, że każda praca jest wykonywana w najlepszym możliwym standardzie oraz w przystępnych cenach.</p>
        </div>
        <div className='about-us-container-right'>
          <h2>Nasze usługi</h2>
          <ul>
            <li data-aos="fade-left"><i className="far fa-check-square"></i> Meble</li>
            <li data-aos="fade-left"><i className="far fa-check-square"></i> Schody</li>
            <li data-aos="fade-left"><i className="far fa-check-square"></i> Drzwi</li>
            <li data-aos="fade-left"><i className="far fa-check-square"></i> Okna</li>
            <li data-aos="fade-left"><i className="far fa-check-square"></i> Meble ogrodowe</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;