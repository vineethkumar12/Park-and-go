import React ,{useState,useEffect, useRef}from 'react'
import './OTP.css'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios' 
 


export const OTP = ({page,setpage}) => {
  let currentindex=0;
  const inputref=useRef(null);
  const navigate=useNavigate();
  const uselocate=useLocation();
  const [active,setactive]=useState(0);
const data=uselocate.state&&uselocate.state.object;
 
  let [otp,setotp]=useState({
     
    d1:'',
    d2:'',
    d3:'',
    d4:'',
    d5:'',
    d6:'',
  

  });
  const {d1,d2,d3,d4,d5,d6}=otp
    
  
   
 
  const onChange=(key,e)=>{
    const {value,name}=e.target;
   
 setotp({...otp,[name]:value})
  if(!value){
    setactive(currentindex-1) 
    document.getElementById(key).style.outline="none"
  }
  else
  {setactive(currentindex+1)
    document.getElementById(key).style.outline="3px solid black"
  }
  }   
  const backkey=(e,index)=>{
    currentindex=index;
    
     if(e.key==="Backspace"&& !e.target.value)
     { 
      
      e.preventDefault();
      setactive(currentindex-1)
     }
     
  }
  const submit=async (e)=>{
  
    const digits=parseInt(d1+d2+d3+d4+d5+d6);
    e.preventDefault();
    console.log(digits);
        setpage("loading");
        navigate('/loading')
      data["otp"]=digits;
      
      try {
  
        const response = await axios({
          method: 'POST',
          url: 'http://localhost:4000/verify-otp', 
          data: data,
          headers: {
            'Content-Type': 'application/json', 
          },
        });
  
        console.log('Response from server:', response.data);
         navigate("/signin")
         setpage("register");
      
       
      } catch (error) {
        console.error('Error:', error);
       
      }
  }
  useEffect(()=>{
    inputref.current?.focus();
  },[active])

   if(data)
   return (
    
    <div className='o'>
    <div id='container'>
        <div className='otpname'>
        <h3>OTP Verification
        </h3><br></br>
        <h5> Enter otp code  send to <span style={{color:"orange"}}>{data.data.email}</span><br></br><br></br>
        </h5>
        <h5 className="h61">Enter the code below to confirm your email address
        </h5>
        </div>
        
   <form onSubmit={submit}>
        <div className="otpinput">
           
           {Object.keys(otp).map((key, index) => (
            <input
              type="text" key={key} name={key} value={otp[key]}
              ref={index===active?inputref:null}
              onChange={(e)=>onChange(key,e)}
              onKeyDown={(e)=>backkey(e,index)}
              id={key}
              min="0"
              max="9"
              autoComplete="off"
              maxLength={1}
            />
          ))}
          
           
          
        </div>
        <div >
            <button  type="submit" className="verifybtn">Verify</button>
        </div>
        </form>
    </div>
    { }
    </div>
  
  )
   
}
