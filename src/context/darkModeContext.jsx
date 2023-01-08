import { createContext, useEffect, useState} from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) =>{
    //get current mode from local storage if there have not any then mode will be false or default
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)

    //toggle
    const toggle = () =>{
        setDarkMode(!darkMode)
    }

    //set theme as dark mode in local storage
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    //return the functions
    return(
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {/* Apply to all children components */}
            {children}
        </DarkModeContext.Provider>
    )
}
