import React, { useContext } from "react"
import { ThemeContext } from "../Context/themeContext"

import { Switch } from 'antd';
import "./asset/style.css"

const SwitchTheme = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    const handleChangeTheme = () => {
        setTheme( theme === "dark" ? "light" : "dark" )
    }

    return(
        <>
    <Switch style={{width: "70px",display:"inline-flex", marginTop:"5px"}} checkedChildren="Dark" unCheckedChildren="Light" defaultChecked onClick={handleChangeTheme} />
    <br /> 
  </>
    );
    
}

export default SwitchTheme