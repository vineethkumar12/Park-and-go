import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carosule.css';
import seamlessresrvation from '../../assets/seamlessreservation1.png'
import offer from '../../assets/spetialoffer.png'
import safety from '../../assets/safety1.png'
import family from '../../assets/family1.png'
import easlyfind from '../../assets/easilyfind1.png'
import effortless from '../../assets/effortless1.png'
import  affordable from '../../assets/afforadable1.png'
import welcomecar from '../../assets/welcomecar3.png'

export const Carosule = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 3000, 
    slidesToScroll: 1,
  };
  

  return (
    <div className="carosule">
      
    
      <Slider {...settings}>
      <div>
        <div id="parent">
          <div className="child"> 
            <img className="child" src={welcomecar} alt="Car parked in a scenic location" width="100%" height="380px" style={{  borderTopLeftRadius: '40px' ,borderTopRightRadius: '40px'}} />
          </div>
        </div>
      </div>
      <div>
      <div id="parent">
          <div className="child"> 
            <img className="child" src={seamlessresrvation} alt="Car parked in a scenic location" width="100%" height="380px" style={{  borderTopLeftRadius: '40px' ,borderTopRightRadius: '40px'}} />
          </div>
        </div>
      </div>
      <div>
      <div id="parent">
          <div className="child"> 
            <img className="child" src={family} alt="Car parked in a scenic location" width="100%" height="380px" style={{  borderTopLeftRadius: '40px' ,borderTopRightRadius: '40px'}} />
          </div>
        </div>
      </div>
      <div>
      <div id="parent">
          <div className="child"> 
            <img className="child" src={safety} alt="Car parked in a scenic location" width="100%" height="380px" style={{  borderTopLeftRadius: '40px' ,borderTopRightRadius: '40px'}} />
          </div>
        </div>
      </div>
      <div>
      <div id="parent">
          <div className="child"> 
            <img className="child" src={affordable} alt="Car parked in a scenic location" width="100%" height="380px" style={{  borderTopLeftRadius: '40px' ,borderTopRightRadius: '40px'}} />
          </div>
        </div>
      </div>
      <div>
        <div id="parent">
          <div className="child"> 
            <img src={easlyfind} alt="Car parked in a scenic location" width="100%" height="380px" style={{  borderTopLeftRadius: '40px' ,borderTopRightRadius: '40px'}} />
          </div>
        </div>
      </div>
      <div>
        <div id="parent">
          <div className="child"> 
            <img src={effortless} alt="Car parked in a scenic location" width="100%" height="380px" style={{  borderTopLeftRadius: '40px' ,borderTopRightRadius: '40px'}} />
          </div>
        </div>
      </div>
      <div>
        <div id="parent">
          <div className="child"> 
            <img src={offer} alt="Car parked in a scenic location" width="100%" height="380px" style={{  borderTopLeftRadius: '40px' ,borderTopRightRadius: '40px'}} />
          </div>
        </div>
      </div>
      
    </Slider>
    </div>
 
  );
};

