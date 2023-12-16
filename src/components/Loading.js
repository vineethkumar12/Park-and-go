import React, { useEffect } from 'react';
import './load.css';
import {  useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

export const Loading = () => {
  const navigate = useNavigate();
  const auth=useAuth();
  

 useEffect(() => {
    if (auth.page === "register") {
      
      navigate('/register');
      
     
    }
    if (auth.page === "signin") {
      
      navigate('/signin');
      
     
    }
    
    
   
  }, [auth.page, navigate]);

  return (
    <div className='loadbackgorund'>
      <div className='loading'>
       
      </div>
    </div>
  );
};
