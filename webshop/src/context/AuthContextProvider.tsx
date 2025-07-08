import { ReactNode, useState } from "react"
import { AuthContext } from "./AuthContext";


export const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") == "123");

  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}