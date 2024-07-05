import React from 'react';
import '../Styles/Hero.css'; // Assuming you have a CSS file for hero styles



const Hero = () => {
  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="hero-image-section">
          <div className="slider">
            <div className="slides">
              <div className="slide">
                <img src="http://amh.com.pk/Images/header01.jpg" alt="Image 1" className="slider-img" />
              </div>
              <div className="slide">
                <img src="http://amh.com.pk/Images/header02.jpg" alt="Image 2" className="slider-img" />
              </div>
              <div className="slide">
                <img src="http://amh.com.pk/Images/header03.jpg" alt="Image 3" className="slider-img" />
              </div>
              <div className="slide">
                <img src="http://amh.com.pk/Images/header04.jpg" alt="Image 4" className="slider-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
