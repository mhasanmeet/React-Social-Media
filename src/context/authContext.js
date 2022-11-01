//1
import { createContext, useEffect, useState } from "react";

//2.Context API
export const AuthContext = createContext()

//3.
export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    //5.login function
    const login = () => {
        //demo user
        setCurrentUser({
            id: 1, 
            name: "John Doe", 
            profilePic: "https://source.unsplash.com/WNoLnJo7tS8"
        })
    }

    //4.
    useEffect( ()=> {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [ currentUser])

    //6.provider
    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}