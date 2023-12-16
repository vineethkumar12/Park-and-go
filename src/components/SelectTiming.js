import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './timeing.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export const SelectTiming = () => {
  const navigate = useNavigate();
  const uselocate = useLocation();
  const [startTime, setStartTime] = useState(null); // Set to current date/time
  const [endTime, setEndTime] = useState(null); // Set to current date/time

  const handleChangestarttime = (date) => {
    setStartTime(date);
  };

  const handleChangeendtime = (date) => {
    setEndTime(date);
  };

  const data = uselocate.state && uselocate.state.object;

  const navigatetobookslot = () => {
   

    if(startTime !=null && endTime!=null)
    {const timeDifferenceInMilliseconds = Math.abs(endTime - startTime);
    const timeDifferenceInHours = timeDifferenceInMilliseconds / (1000 * 60 * 60);
      
    const newdata = {
      data: data,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
    };
  
    if (timeDifferenceInHours >= 1 && timeDifferenceInHours <= 12) {
      navigate('/signin/mainpage/bookslot', { state: { object: newdata } });
    } else {
      
      toast.error("Invalid time, please select a time in between 1 hour and 12 hours.", {
        position: 'top-center',
        autoClose: 6000,
      });
      
    }
  }
  else{
    toast.error("please select timeings", {
      position: 'top-center',
      autoClose: 2000,
    });
  }
  };

  const CustomToolbar = () => {
    return null; // Return null to exclude the toolbar and footer
  };

  return (
    <div className='bookslotcontainer'>
      <div className='time'>
        <div className="signf">
          <h2 className="timetitle">Select Timings</h2>
        </div>
        <div className='timeinpcontainer'>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Start Time"
              value={startTime}
              onChange={handleChangestarttime}
              ToolbarComponent={CustomToolbar}
            />
            <DateTimePicker
              label="End Time"
              value={endTime}
              onChange={handleChangeendtime}
            />
          </LocalizationProvider>
        </div>
        <div>
          <button onClick={navigatetobookslot} className="savetimebutton">Save</button>
        </div>
      </div>
    </div>
  );
};
