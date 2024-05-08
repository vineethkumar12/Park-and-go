import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useFetchBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    let ignore = false;

    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/my-bookings`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (!ignore) {
          setBookings(response.data.bookings);
          setLoading(false);
        }
      } catch (error) {
        console.error("There was a problem with the request:", error);
        if (!ignore) {
          setError(error);
          navigate("/signin/mainpage");
          window.alert("invalid");
        }
      }
    };

    fetchBookings();

    return () => {
      ignore = true;
    };
  }, []);

  return { bookings, loading, error };
};

export default useFetchBookings;
