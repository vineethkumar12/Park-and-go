import React from "react";
import "./menupage.css";
import { Tilt } from "react-tilt";
import offer from "./discount1.png";

import { useNavigate } from "react-router-dom";

export const Menupage = ({ changefun }) => {
  const navigate = useNavigate();

  const navigatetobookmarkpage = () => {
    changefun("star");
  };

  const navigatetobookslot = () => {
    navigate("/signin/mainpage/mappage");
    changefun("off");
  };

  return (
    <div className="menupagecontainer">
      <div className="menupage">
        <div className="icons1">
          <Tilt options={{ max: 40 }}>
            <div className="firstrowicons" onClick={navigatetobookslot}>
              {" "}
              <i className="fa-solid fa-map-location-dot fa-2xl"></i>Book slot
            </div>
          </Tilt>
          <Tilt options={{ max: 40 }}>
            <div className="firstrowicons" onClick={navigatetobookmarkpage}>
              <i className="fa-regular fa-calendar-check fa-2xl"></i>My Bookings
            </div>
          </Tilt>
          <Tilt options={{ max: 40 }}>
            <div
              className="firstrowicons"
              onClick={() => navigate("/signin/mainpage/offers")}
            >
              <i>
                <img className="offer" src={offer} alt="no" />
              </i>{" "}
              <center style={{ marginTop: "-20px" }}>Offers</center>
            </div>
          </Tilt>
        </div>
        <div className="icons2">
          <Tilt options={{ max: 40 }}>
            {" "}
            <div className="secondrowicons">
              <i className="fa-solid fa-address-card fa-2xl"></i> Buy{" "}
              <center style={{ marginTop: "-20px" }}>Membership</center>
            </div>
          </Tilt>
          <Tilt options={{ max: 40 }}>
            {" "}
            <div className="secondrowicons">
              <i className="fa-solid fa-wallet fa-2xl"></i>Recharge{" "}
              <center style={{ marginTop: "-20px" }}>Wallet</center>
            </div>
          </Tilt>
          <Tilt options={{ max: 40 }}>
            {" "}
            <div className="secondrowicons">
              <i className="fa-solid fa-file-invoice-dollar fa-2xl"></i>Bill
              Payment
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};
