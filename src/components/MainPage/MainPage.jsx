import React, { useState } from "react";


import './MainPage.scss'
import AboutUs from "./subcomponents/AboutUs/AboutUs";
import Contact from "./subcomponents/Contact/Contact";
import Footer from "./subcomponents/Footer/Footer"



const MainPage = () => {

  // const [stairsImage, setStairsImage] = useState(rightImageBefore)

  return (
    <main>
      <div className="images-container">
        <div className="main-images-container">
          <div className="image-container left-image-container">
            <div className="left image"></div>
            <h1>Meble ogrodowe</h1>
            <div className="line"></div>
            <p>Poszukujesz dobrej jakości mebli ogrodowych, które przetrwają każde warunki?</p>
          </div>

          <div className="image-container right-image-container">
            <div className="right image"></div>
            <h1>Schody</h1>
            <div className="line"></div>
            <p>Marzą Ci się nowoczesne schody z oświetleniem?</p>

          </div>
        </div>

        <div className="bottom-images-container">
          <div className="image-container bottom-image-container">
            <div className="bottom image"></div>
            <h1>Meble</h1>
            <div className="line"></div>
            <p>Szeroka gama mebli, które upiększą Twój dom</p>

          </div>
        </div>
      </div>
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}

export default MainPage;