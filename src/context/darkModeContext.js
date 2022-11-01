//1
import { createContext, useEffect, useState } from "react";

//2.Context API
export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    //4.toggle dark mode value
    const toggle = () => {
        setDarkMode(!darkMode)
    }

    //3.
    useEffect( ()=> {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    //5.provider
    return(
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {children}
        </DarkModeContext.Provider>
    )
}