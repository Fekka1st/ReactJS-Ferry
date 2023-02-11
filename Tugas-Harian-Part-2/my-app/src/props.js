import React from "react"

const add = (prop) =>{
    if(prop.type === "checkbox")
    return <label><input type={prop.type}></input>Belajar {prop.label}</label>;
    else
    return  <center><button className={prop.label} type={prop.type}>{prop.label}</button></center>
}

export default add;