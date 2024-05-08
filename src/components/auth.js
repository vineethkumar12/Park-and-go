import React, { useContext, useState } from "react";
import { createContext } from "react";

const Authcontext = createContext(null);
export const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);

  const login = (token) => {
    setuser(token);

    localStorage.setItem("token", token);
  };
  const logout = () => {
    setuser(null);
    localStorage.removeItem("token");
  };
  return (
    <Authcontext.Provider value={{ user, login, logout }}>
      {children}
    </Authcontext.Provider>
  );
};
export const useAuth = () => {
  return useContext(Authcontext);
};
