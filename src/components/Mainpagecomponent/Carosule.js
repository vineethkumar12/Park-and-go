import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carosule.css';
import carimg from '../../assets/closureimg1.jpg'
import offer from '../../assets/carosuleoffer.jpg'
import welcomecar from '../../assets/welcomecar.jpg'
import map from '../../assets/map.jpg'

export const Carosule = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 4000, // Decrease this value for faster transitions
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  

  return (
    <div className="carosule">
      
    
      <Slider {...settings}>
      <div>
        <div id="parent">
          <div className="child"> 
            <img className="child" src={welcomecar} alt="Car parked in a scenic location" width="100%" height="450px" style={{  borderTopLeftRadius: '40px' ,borderTopRightRadius: '40px'}} />
          </div>
        </div>
      </div>
      <div>
        <div id="parent">
          <div className="child"> 
            <img src={map} alt="Car parked in a scenic location" width="100%" height="450px" style={{  borderTopLeftRadius: '40px' ,borderTopRightRadius: '40px'}} />
          </div>
        </div>
      </div>
      <div>
        <div id="parent">
          <div className="child"> 
            <img src={offer} alt="Car parked in a scenic location" width="100%" height="450px" style={{  borderTopLeftRadius: '40px' ,borderTopRightRadius: '40px'}} />
          </div>
        </div>
      </div>
      
    </Slider>
    </div>
 
  );
};

