import {React,useState} from 'react'
import './mainpage.css'
import { Headder } from './Headder'
import { Menupage } from './Menupagecomponent/Menupage'
import { Carosule } from './Carosule'
import { useAuth } from '../auth'
import { Outlet, useNavigate } from 'react-router-dom'



export const Mainpage = () => {

 const navigate=useNavigate();
 const [change,setchange]=useState("home");
 const changefun = (value) => {

  if (value === 'home') {
    navigate("/signin/mainpage")
    document.getElementById(value).style.filter = 'invert(1)';
  
    document.getElementById('star').style.filter = "none";
  }

  if (value === 'star') {
    navigate("/signin/mainpage/bookmark")
    document.getElementById(value).style.filter = 'invert(1)';
    
    document.getElementById("home").style.filter = 'none';
   
  }
  if (value === 'off') {
   
    document.getElementById("star").style.filter = 'opacity(50%)';
    
    document.getElementById("home").style.filter = 'opacity(50%)';
   
  }
  

  setchange(value);
}; 

 
  if(localStorage.getItem('token'))
  return (
    <div className='mainpage'>
      
       <Headder changefun={changefun}/>
    
       <Carosule/>
        <Menupage changefun={changefun} /> 
        <Outlet/>
    
        
    </div>
  )
}
