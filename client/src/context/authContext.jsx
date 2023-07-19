import { createContext, useEffect, useState} from "react";
import axios from 'axios'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    //get current user from local storage if there have not any then null 
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    //login function
    const login = async (inputs) =>{

        // send login credentials request to db
        const res = await axios.post('http://localhost:7000/api/auth/login', inputs, {
            withCredentials: true,
        })

        // authenticate current user with requested credentials
        setCurrentUser(res.data)

        /*
        //static user data
        setCurrentUser({
            id: 1,
            name: "Mahmudul Hasan",
            profilePic: "https://source.unsplash.com/iEEBWgY_6lA",
            coverPic: "https://source.unsplash.com/2FdIvx7sy3U"
        })
        */
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
