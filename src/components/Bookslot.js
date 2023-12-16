import React, { useState,useEffect } from 'react';
import './Bookslot.css'
import axios from 'axios'
import {  useLocation, useNavigate } from 'react-router-dom';
import tocarpark from '../assets/carparked.png';
import { useAuth } from './auth';
import Swal from 'sweetalert2'
import { Loading1 } from './Loading1';
import useRazorpay from "react-razorpay";
import parkedcar from '../assets/parkedcar.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const  Bookslot = () => {   
  const [Razorpay] = useRazorpay();
    const uselocate=useLocation();

   const navigate=useNavigate();
    const [selectedslotid, setselectedslotid] = useState('');
    const [slotname, setslotname] = useState('');
    
  const data=uselocate.state&&uselocate.state.object;
  
        const auth=useAuth();
         
 
    const [slotsdata, setslotsdata] = useState([{}]);
   // const [paymentdata, setpaymentdata] = useState([{}]);
        
     useEffect(() => {
        axios
          .get(`http://localhost:4000/parking-slots?locationId=${data.data.locid}&startTime="${data.startTime}"&stopTime="${data.endTime}"`)
          .then((response) => {
         
           setslotsdata(response.data.slotData)
           
         
          })
          .catch((error) => {
            console.error('There was a problem with the request:', error);
            window.alert('Invalid credentials');
          });
      }, [data])
        console.log(data)
      const bookslothandler = async () => {
                
        try {
          const response1= await axios.post('http://localhost:4000/book-slot', {
            id: selectedslotid,
            startTime: data.startTime,
            endTime: data.endTime,
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
          });
          const formatTime = (isoTime) => {
            const date = new Date(isoTime);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const period = hours >= 12 ? 'PM' : 'AM';
          
            const formattedHours = hours % 12 || 12; // Convert to 12-hour format
          
            return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
          };
          
         
          
          {     
            const options = {  
                 key:"rzp_test_mmBSpYdXigAv8C",
                amount: parseInt(100*response1.data.totalPrice), // Amount in paise (e.g., 1000 paise = ₹10)
               currency: 'INR', // Currency
               name:'car parking',
               description:"paymec gghvnbj",
             
               // Callback function when payment is successful
               handler: function (response) {

                 // Make an API call to confirm the booking after successful payment
               
                 auth.setpage("loading")
                 navigate('/loading')
                 console.log(response.razorpay_payment_id)
                 axios
                   .post(
                     'http://localhost:4000/payment',
                     {
                       id: response1.data.bookingId,
                       paymentId:response.razorpay_payment_id ,
                      
                     },
                     {
                       headers: {
                         'Content-Type': 'application/json',
                         
                        },
                     }
                   )
                   .then((response2) => {
                   
                     auth.setpage("signin")
                     Swal.fire({
                      title: "Slot Book Successfully !!!",
                      html: `
               <div style="display: flex; justify-content: space-between;">
               <div>
              <p><strong>Booking slot:</strong> ${response2.data.bookingDetails.slot_name}</p>
                <p><strong>Date:</strong> ${response2.data.bookingDetails.start_time.substring(0, 10)}</p>
              </div>
              <div>
               <p><strong>Start Time:</strong> ${formatTime(response2.data.bookingDetails.start_time)}</p>
                <p><strong >End Time:</strong> ${formatTime(response2.data.bookingDetails.end_time)}</p>
              </div>
             </div>
                  `,
                      icon: "success",
                      confirmButtonColor: "#ff8b1f"
                    });
                    
                     navigate('/signin/mainpage')
                   })
                   .catch((error) => {
                     console.error('There was a problem with the request:', error);
                     window.alert('Invalid credentials');
                   });
                   
                  
               } , prefill: {
                 name: "Piyush Garg",
                 email: "youremail@example.com",
                 contact: "9999999999",
               },
               notes: {
                 address: "Razorpay Corporate Office",
               },
               theme: {
                 color: "#3399cc",
               },
           }

           const rzpInstance = new Razorpay(options);

               // Open the Razorpay checkout modal
               rzpInstance.on("payment.failed", function (response) {
                 alert(response.error.code);
                 alert(response.error.description);
                 alert(response.error.source);
                 alert(response.error.step);
                 alert(response.error.reason);
                 alert(response.error.metadata.order_id);
                 alert(response.error.metadata.payment_id);
               });
               rzpInstance.open();


        }
        } catch (error) {
          console.error('There was a problem with the request:', error);
          window.alert("invalid credentials....");
        }
             
        
    }
    const [previousid,setpreviousid]=useState('');
    
    const selectslot = (item) => {
      const element = document.getElementById(item.slot_id);
    
      
      if (!item.is_booked ) {
        
        if (previousid) {
          const previouslySelectedElement = document.getElementById(previousid);
          previouslySelectedElement.style.background = "#ff8b1f"; 
        }
        element.style.background = `url(${tocarpark})`;
        setslotname(item.slot_name)
        setpreviousid(item.slot_id);
        setselectedslotid(item.slot_id);
      }
      else
      {
        toast.error(" !sorry it is already booked", {
          position: 'top-center',
          autoClose: 3000, 
        });
      }
      
    };
    
       
   return !slotsdata.length?<Loading1/>: (
     <div className='bookslotcontainer'>
      
         <div>
        <h2  className='parkingtitle'>{data.data.title}</h2>    
        </div> 
     <div className='book'>
        {slotsdata.map((value, index) => 
        <div  className='b2' id={value.slot_id} style={{background:(value.is_booked)?`url(${parkedcar})`:"#ff8b1f"}} onClick={()=>selectslot(value)} key={index} >{value.slot_name}</div> )
        }
       </div>  
      <div >
         <button  onClick={bookslothandler} className="bookslotbutton1">Pay & Book Slot</button>
       </div>
     
   </div>
   )
};


