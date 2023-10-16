import React, { useState ,useEffect} from 'react'
import './sign.css'
import mail from '../assets/mail.png' 
import lock from '../assets/padlock.png' 
import axios from 'axios' 
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
export const Signin = ({setpage}) => {
  const navigate=useNavigate();
   const auth=useAuth();
  const [signin,setSignin]=useState({
    email:'',
    password:'',

  });
 
   
  const onChange=e=>{
    const { name, value } = e.target;
    setSignin({ ...signin, [name]: value });
  }
  const submi=e=>{
    setpage("loading");
    navigate('/loading')
    e.preventDefault();
    console.log(auth.vi)
    axios.post('http://localhost:4000/login',{ email:signin.email,
        
        password: signin.password},  
        
         {
  
        headers:{'Content-Type':'application/json',
      
          }
        }
        
         )
        .then(response => {
          auth.login(signin.email)
        navigate('/')
         setpage("signin");
         
        
        })
        .catch(error => {
          console.error('There was a problem with the request:', error);
          window.alert("invalid credentials");
          setpage("signin");
        });
  
    }
  
  return (
    <div className='backgroundblur'>
        <Outlet/>
      <div className="container">
        <div className="signf">
        <h2 className="signname">Sign In</h2>
        </div>
        <form onSubmit={submi}>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" onChange={onChange} value={signin.email}  name="email" placeholder="Enter your email" />
                <img className="icons"src={mail}  alt="no"/>
            </div><br></br>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={onChange} id="password" value={signin.password} name="password" placeholder="Enter your password" />
                <img className="icons" src={lock}  alt="no"/>
            </div><br></br>
            <div>
            <button  type="submit" className="btn">Sign In</button>
            </div>
        </form>
    </div>
  
    
    </div>
  )
}
