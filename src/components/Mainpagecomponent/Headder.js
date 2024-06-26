import React, { useState, useEffect } from "react";
import "./Headder.css";
import { useNavigate } from "react-router-dom";
import staricon from "../../assets/icons8-star-40.png";
import homeicon from "../../assets/icons8-home-40.png";
import { useAuth } from "../auth";
export const Headder = ({ changefun }) => {
  const navigate = useNavigate();
  const auth = useAuth();

  const signout = () => {
    localStorage.removeItem("token");

    navigate("/signin");
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bannercontainer">
      {windowWidth >= 1000 ? (
        <div className="parkandgosymbol">
          <i className="fa-solid fa-car-side fa-2xl"></i>
          <h2>▀▄▀▄▀▄ 🄿 & 🄶 ▄▀▄▀▄▀</h2>
          <i className="fa-solid fa-person-walking fa-2xl"></i>
        </div>
      ) : (
        <div className="parkandgosymbol">
          <span>
            <i className="fa-solid fa-car-side fa-2xl"></i>
          </span>
          <i className="fa-solid fa-square-parking"></i>
        </div>
      )}

      <div className="text-names">
        <h3>Park & Go</h3>
        <h5>No Tension, No Worries: We've Got Your Parking</h5>
      </div>
      <div className="bannerbtn">
        <abbr title="Home">
          <img
            alt="np"
            id="home"
            src={homeicon}
            onClick={() => changefun("home")}
          />{" "}
        </abbr>
        <abbr title="My Bookings">
          <img
            id="star"
            src={staricon}
            onClick={() => changefun("star")}
            alt="no"
          />
        </abbr>
        <i
          onClick={signout}
          className="fa-sharp fa-solid fa-arrow-right-from-bracket fa-2xl"
        ></i>
      </div>
    </div>
  );
};
