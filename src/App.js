
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import Register  from './components/Register';
import {Signin } from './components/Signin';
import { Home } from './components/Home';
import { Loading } from './components/Loading';
import Mappage from './components/Mappage';
import { OTP } from './components/OTP';
import { useState } from 'react';
import { Mainpage } from './components/Mainpagecomponent/Mainpage';
import { Bookmarkpage } from './components/Mainpagecomponent/Bookmarkpage';
import { Authprovider, useAuth } from './components/auth';



function App() {
  const [page,setpage]=useState("signin");


  
  return (
<div className='App'>
     <Authprovider>
      
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home  page={page} setpage={setpage}/>}/>
      <Route path='register'  exact element={<Register page={page} setpage={setpage}/>}/>
      <Route path='signin' exact  element={<Signin page={page}   setpage={setpage}/>}>
             <Route path='mainpage' exact element={<Mainpage   />}>
                    <Route path='Mappage' exact  element={<Mappage/>}/>
                    <Route path='bookmark' exact  element={<Bookmarkpage/>}/>
              </Route>
      </Route>
      
      <Route path='loading' exact  element={<Loading page={page} setpage={setpage}/>}/>
      
      <Route path='otp' exact  element={<OTP page={page} setpage={setpage}/>}/>
    </Routes>
    </Authprovider>
    </div> 
  );
}

export default App;
