import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const Authcontext =createContext(null)
export const  Authprovider= ({children}) => {
  const [user,setuser]=useState(false)
const vi="vi";
        const login=user=>{

            setuser(true)
        }
        const logout=()=>{
            setuser(false)
        }
  return (
        <Authcontext.Provider value={{user,login,logout,vi}}>
            {children}
        </Authcontext.Provider>
  )
}
export const  useAuth= () => {
    return useContext(Authcontext)
}
