import React from "react";

import './MainPage.scss'
import AboutUs from "./subcomponents/AboutUs/AboutUs";
import Contact from "./subcomponents/Contact/Contact";

import mainPhoto from '../../../images/mainPhotos/furnitures.jpg'
import rightImage from '../../../images/mainPhotos/stairs.jpg'
import bottomImage from '../../../images/mainPhotos/furnitures2.jpg'

const MainPage = () => {
  return (
    <main>
      <div className="home-page">
        <h1>Pyrcrafts - Pracownia stolarska</h1>
        <div className="main-images-container">
          <img src={mainPhoto} className="mainImage" />
          <img src={rightImage} className="rightImage" />
        </div>
        <div className="bottom-image-container">
          <img src={bottomImage} className="bottomImage" />
        </div>
      </div>
      <AboutUs />
      <Contact />
    </main>
  );
}

export default MainPage;