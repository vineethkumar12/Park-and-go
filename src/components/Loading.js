import React, { useEffect } from 'react';
import './load.css';
import {  useNavigate } from 'react-router-dom';

export const Loading = ({ page}) => {
  const navigate = useNavigate();
  
  

 useEffect(() => {
    if (page === "register") {
      
      navigate('/register');
      
     
    }
    if (page === "signin") {
      
      navigate('/signin');
      
     
    }
    
   
  }, [page, navigate]);

  return (
    <div className='loadbackgorund'>
      <div className='loading'>
       
      </div>
    </div>
  );
};
