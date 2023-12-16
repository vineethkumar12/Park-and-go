import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth';

export const Home = () => {
  const auth=useAuth();
  const navigate=useNavigate();
  /*useEffect(()=>{
  
    if(auth.user)
  navigate('/signin/mainpage')
  },[navigate])*/
  
  return (
    <div>home</div>
  )
}