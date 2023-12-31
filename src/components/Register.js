
import React, {useEffect, useState } from 'react'
import './sign.css'
import mail from '../assets/mail.png' 
import lock from '../assets/padlock.png'
import user from '../assets/user.png' 
import mob from '../assets/smartphone.png' 
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './auth'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {   

   const navigate=useNavigate();
   const auth=useAuth();
  
    let [register,setRegister]=useState({
     
        email:'',
        username:'',
        mobile:'',
        password:'',
      
    
      });
      
  const {email,username,password,mobile}=register;
       
  const onChange=e=>{
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });
      }
  const submit= async  (e)=>{
        e.preventDefault();
        auth.setpage('loading')
       navigate('/loading')
      
        axios.post('http://localhost:4000/signup',{ email: register.email,
        username: register.username,
        mobile: parseInt(register.mobile, 10),
        password: register.password},  
        
         {
  
        headers:{'Content-Type':'application/json',
      
          }
        }
        
         )
        .then(response => {
          auth.setpage('register')
           
    
          navigate('/otp',{state:{object:response.data}})
         
        })
        .catch(error => {
          toast.error('Invalid credentials', {
            position: 'top-center',
            autoClose: 3000, 
          });
          auth.setpage('register')
          console.error('There was a problem with the request:', error);
        });
       
      
        setRegister({username:'',email:'',password:'',mobile:''})
         
    } 
       

  return (
    <div className='backgroundblur'>  
       
       <div className="container">
        
    <h2 className="signname">Register</h2>
    <form onSubmit={submit}>
        <div className="form-group">
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" className="inp"  name="username"onChange={onChange} value={username}placeholder="Enter your username" />
            </div>
            <div>
            <img className="icons" src={user}  alt="no"/>
            </div>
        </div><br></br>
        <div className="form-group">
                <div>
                <label htmlFor="email">Email:</label>
                <input type="text" className="inp" onChange={onChange} name="email"value={email} placeholder="Enter your email" />
                </div>
                <img className="icons" src={mail}  alt="no"/>
            </div><br></br>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="inp" name="password"onChange={onChange} value={password} placeholder="Enter your password" />
            <img className="icons" src={lock}  alt="no"/>
        </div><br></br>
        <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input type='tel' className="inp"   maxLength="10" name="mobile"onChange={onChange} value={mobile} placeholder="Enter your number" />
            <img className="icons" src={mob}  alt="no"/>
        </div><br></br>
        <div>
        <button type="submit" className="btn">Register</button>
        </div>
    </form>
</div>
 </div>
  )
}

export default Register;