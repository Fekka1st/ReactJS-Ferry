import React, { createContext } from "react"
import { useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = props => {

    const [ theme, setTheme ] = useState("dark")

    return(
        <ThemeContext.Provider value={{
            theme, 
            setTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}