import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Register from "./components/Register";
import { Signin } from "./components/Signin";
import { Home } from "./components/Home";
import { Loading } from "./components/Loading";
import { Mappage } from "./components/Mappage";
import { OTP } from "./components/OTP";
import { useState } from "react";
import { Mainpage } from "./components/Mainpagecomponent/Mainpage";
import { MyBookings } from "./components/MyBookings";
import { Authprovider, useAuth } from "./components/auth";

import { useJsApiLoader, useLoadScript } from "@react-google-maps/api";
import { Bookslot } from "./components/Bookslot";
import { SelectTiming } from "./components/SelectTiming";
import { Offers } from "./components/Offers";
import { ToastContainer } from "react-toastify";
import logo from ".//assets/logo.png";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  return (
    <div className="App">
      <Authprovider>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="register" exact element={<Register />} />
          <Route path="signin" exact element={<Signin />}>
            <Route path="mainpage" exact element={<Mainpage />}>
              <Route
                path="mappage"
                exact
                element={
                  <Mappage
                    isLoadded={isLoaded}
                    setAuthenticated={setAuthenticated}
                  />
                }
              />

              <Route path="bookslot" exact element={<Bookslot />} />
              <Route path="offers" exact element={<Offers />} />

              <Route path="bookmark" exact element={<MyBookings />} />
              <Route path="time" exact element={<SelectTiming />} />
            </Route>
          </Route>

          <Route path="loading" exact element={<Loading />} />

          <Route path="otp" exact element={<OTP />} />
        </Routes>
      </Authprovider>
    </div>
  );
}

export default App;
