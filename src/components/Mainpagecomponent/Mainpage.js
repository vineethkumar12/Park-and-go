import {React} from 'react'
import './mainpage.css'
import { Headder } from './Headder'
import { Menupage } from './Menupagecomponent/Menupage'
import { Carosule } from './Carosule'
import { useAuth } from '../auth'



export const Mainpage = ({signinpage,setsigninpage}) => {
 const auth=useAuth();

 
   //if(auth.user)
  return (
    <div className='mainpage'>
       <Headder setsigninpage={setsigninpage}/>
    
       <Carosule/>
        <Menupage /> 
        
    
        
    </div>
  )
}
