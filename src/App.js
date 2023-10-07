
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import Register  from './components/Register';
import {Signin } from './components/Signin';
import { Home } from './components/Home';
import { Loading } from './components/Loading';
import Mappage from './components/Mappage';
import { OTP } from './components/OTP';



function App() {
  return (

    <div className="App">
     
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='register'  exact element={<Register/>}/>
      <Route path='signin' exact  element={<Signin/>}/>
      <Route path='loading' exact  element={<Loading/>}/>
      <Route path='Mappage' exact  element={<Mappage/>}/>
      <Route path='otp' exact  element={<OTP/>}/>
    </Routes>
    </div>
  );
}

export default App;
