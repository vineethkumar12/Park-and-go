import React, { useState } from 'react'
import './sign.css'
import mail from '../assets/mail.png' 
import lock from '../assets/padlock.png'  
export const Signin = () => {
  const [signin,setSignin]=useState({
    email:'',
    password:'',

  });
  const onChange=e=>{
    const { name, value } = e.target;
    setSignin({ ...signin, [name]: value });
  }
  const submi=e=>{
    e.preventDefault();
    console.log(signin)
  
    }
  
  return (
    <div>
     
      <div className="container">
        <div className="signf">
        <h2 className="signname">Sign In</h2>
        </div>
        <form onSubmit={submi}>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" onChange={onChange} value={signin.email} name="email" placeholder="Enter your email" />
                <img src={mail}  alt="no"/>
            </div><br></br>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={onChange} id="password" value={signin.password} name="password" placeholder="Enter your password" />
                <img src={lock}  alt="no"/>
            </div><br></br>
            <div>
            <button  type="submit" className="btn">Log In</button>
            </div>
        </form>
    </div>
  
     
    </div>
  )
}
