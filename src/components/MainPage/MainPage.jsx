import React, { useEffect, useState } from "react";

import './MainPage.scss'
import AboutUs from "./subcomponents/AboutUs/AboutUs";
import Contact from "./subcomponents/Contact/Contact";

import mainPhoto from '../../../images/mainPhotos/gardenfurniture.jpg'
import rightImageBefore from '../../../images/mainPhotos/stairsBefore.jpg'
import rightImageAfter from '../../../images/mainPhotos/stairsAfter.jpg'
import bottomImage from '../../../images/mainPhotos/furnitures2.jpg'



const MainPage = () => {

  const [stairsImage, setStairsImage] = useState(rightImageBefore)

  return (
    <main>
      {/* <h1>Pyrcrafts - Pracownia stolarska</h1> */}
      <div className="images-container">
        <div className="main-images-container">
          <div className="image-container">
            <h1>Meble ogrodowe</h1>
            <div className="line"></div>
            <img src={mainPhoto} className="left-image" />
            <p>Poszukujesz dobrej jakości mebli ogrodowych, które przetrwają każde warunki?</p>
          </div>

          <div
            className="image-container"
            onMouseOver={() => { setStairsImage(rightImageAfter) }}
            onMouseOut={() => { setStairsImage(rightImageBefore) }}
          >
            <h1>Schody</h1>
            <div className="line"></div>
            <img
              src={stairsImage}
              className="right-image" />
            <p>Marzą Ci się nowoczesne schody z oświetleniem?</p>
          </div>
        </div>

        <div className="image-container">
          <h1>Meble</h1>
          <img src={bottomImage} className="bottomImage" />
        </div>
      </div>
      <AboutUs />
      <Contact />
    </main>
  );
}

export default MainPage;