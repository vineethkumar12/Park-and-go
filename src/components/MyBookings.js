import React, { useState, useEffect } from "react";
import "./Bookmark.css";

import axios from "axios";

import { Loading1 } from "./Loading1";
import { useNavigate } from "react-router-dom";
import useFetchBookings from "./useFetchBookings";
export const MyBookings = () => {
  const [mybooking, setmybooking] = useState([{}]);
  const [gotdata, setgotdata] = useState("no");
  const navigate = useNavigate();
  const [executed, setExecuted] = useState(false);

  const { bookings, loading, error } = useFetchBookings();
  return loading ? (
    <Loading1 />
  ) : (
    <div className="bookmark">
      <div>
        <h2 className="mybookingstitle">Booking details</h2>
      </div>
      <div className="mybookingsdetails">
        {bookings.map((value, index) => {
          return (
            <div className="b1" key={index}>
              <div>
                <h4>Date : {value.start_time.substring(0, 10)} </h4>
                <h4 style={{ marginTop: "10px" }}>
                  StartTime : {value.start_time.substring(11, 16)}
                </h4>
                <h4 style={{ marginTop: "10px" }}>
                  EndTime : {value.end_time.substring(11, 16)}
                </h4>
              </div>
              <div>
                <h4>Booking Id : {value.booking_id}</h4>
                <h4 style={{ marginTop: "10px" }}>
                  Booking slot : {value.slot_name}
                </h4>
                <h4 style={{ marginTop: "10px" }}>
                  Total Amount : {value.total_amount}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
