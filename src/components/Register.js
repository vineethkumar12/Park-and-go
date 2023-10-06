
import React, { useState } from 'react'
import './sign.css'
import mail from '../assets/mail.png' 
import lock from '../assets/padlock.png'
import user from '../assets/user.png' 

const Register = () => {
    const [register,setRegister]=useState({
        username:'',
        email:'',
        password:'',
    
      });
  const {email,username,password}=register;
      const onChange=e=>{
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });
      }
      const submit=e=>{
        e.preventDefault();
        console.log(register)
       

        setRegister({username:'',email:'',password:''})
      
        }
  return (
    <div>  
       
       <div className="container">
        
    <h2 className="signname">Register</h2>
    <form onSubmit={submit}>
        <div className="form-group">
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username"onChange={onChange} value={username}placeholder="Enter your username" />
            </div>
            <div>
            <img src={user}  alt="no"/>
            </div>
        </div><br></br>
        <div className="form-group">
                <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" onChange={onChange} name="email"value={email} placeholder="Enter your email" />
                </div>
                <img src={mail}  alt="no"/>
            </div><br></br>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"onChange={onChange} value={password} placeholder="Enter your password" />
            <img src={lock}  alt="no"/>
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