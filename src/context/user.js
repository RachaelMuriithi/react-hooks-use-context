import { useState } from "react";
import React from "react";


// creates a context object
const UserContext = React.createContext();

// create a context provider

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const value = {
    user,
    setUser,
  }
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };