import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const Authcontext =createContext(null)
export const  Authprovider= ({children}) => {
  const [user,setuser]=useState(false)
  const [page,setpage]=useState("signin");
 
        
        const login=token=>{
       
            setuser(true)
            
            localStorage.setItem('token',token)
        }
        const logout=()=>{
            setuser(false)
            localStorage.removeItem('token')
        }
  return (
        <Authcontext.Provider value={{user,login,logout,page,setpage}}>
            {children}
        </Authcontext.Provider>
  )
}
export const  useAuth= () => {
    return useContext(Authcontext)
}
