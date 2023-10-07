import React from 'react'
import './OTP.css'
export const OTP = () => {
  return (
    <div id='container'>
        <div className='otpname'>
        <h3>OTP Verification
        </h3><br></br>
        <h5>We emailed you this six digit code to personal@email.com
        </h5>
        <h5 className="h61">Enter the code below to confirm yout email address
        </h5>
        </div>
        
   <form>
        <div className="otpinput">
           
          <input type='text'  min='0' max='9' autoComplete='off' id="input" maxLength={1} required/>
          <input type='text' min='0' max='9'autoComplete='off'  id="input" maxLength={1} required/>
          <input type='text' min='0' max='9' autoComplete='off' id="input"  maxLength={1} required/>
          <input type='text' min='0' max='9'autoComplete='off' id="input"   maxLength={1} required/>
           <input type='text' min='0' max='9' autoComplete='off' id="input"  maxLength={1} required/>
           <input type='text' min='0' max='9'autoComplete='off'  id="input" maxLength={1} required/>

        </div>
        <div >
            <button  type="submit" className="verifybtn">Verify</button>
        </div>
        </form>
    </div>
  )
}
