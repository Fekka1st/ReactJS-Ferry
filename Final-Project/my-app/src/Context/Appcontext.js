import axios from "axios"
import React, { createContext, useState } from "react"



export const Appcontext = createContext()

export const AppProvider = props =>{

    const handleText = (text,num) =>{
        if(text===null){
            return " "
        }else {
            return text.slice(text,num)+"..."
        }
    }
    
    let functions = {
        handleText
    }

   
    return(
        <Appcontext.Provider value={{
            functions
        }}>
            {props.children}
        </Appcontext.Provider>
    )
}