import React from 'react'
import './menupage.css'
import { Tilt } from 'react-tilt'
import offer from './discount1.png';
import { Bookmarkpage } from '../Bookmarkpage';
import { Outlet, useNavigate } from 'react-router-dom';



export const Menupage = () => {
  const navigate=useNavigate();
  

  return (
          
    <div className='menupagecontainer'>
     
      <div className='menupage'>
           <div className="icons1">
                     <Tilt options={{max:40}}><div className='firstrowicons' onClick={()=>navigate('/signin/mainpage/mappage')}>  <i class="fa-solid fa-map-location-dot fa-2xl"></i>Book slot</div></Tilt>
                     <Tilt options={{max:40}}><div className='firstrowicons'><i class="fa-regular fa-calendar-check fa-2xl"></i>My Bookings</div></Tilt>
                     <Tilt options={{max:40}}><div className='firstrowicons'><i><img className="offer" src={offer} alt="no"/></i>  <center style={{marginTop:"-20px"}}>Offers</center></div></Tilt>
           </div>
            <div  className="icons2">
                     <Tilt options={{max:40}}> <div className='secondrowicons'  ><i class="fa-solid fa-address-card fa-2xl"></i> Buy <center style={{marginTop:"-20px"}}>Membership</center></div></Tilt>
                     <Tilt options={{max:40}}> <div className='secondrowicons'><i class="fa-solid fa-wallet fa-2xl"></i>Recharge <center style={{marginTop:"-20px"}}>Wallet</center></div></Tilt>
                     <Tilt options={{max:40}}>  <div className='secondrowicons'><i class="fa-solid fa-file-invoice-dollar fa-2xl"></i>Bill Payment</div></Tilt>
           </div>
      </div>
      <Outlet/>
    </div>
  
  )
}


