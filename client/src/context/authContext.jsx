import { createContext, useEffect, useState} from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    //get current user from local storage if there have not any then null 
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    //login function
    const login = () =>{

        //static user data
        setCurrentUser({
            id: 1,
            name: "Mahmudul Hasan",
            profilePic: "https://source.unsplash.com/iEEBWgY_6lA",
            coverPic: "https://source.unsplash.com/2FdIvx7sy3U"
        })
    }

    //set user as current user in local storage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    //return the functions
    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {/* Apply to all children components */}
            {children}
        </AuthContext.Provider>
    )
}
