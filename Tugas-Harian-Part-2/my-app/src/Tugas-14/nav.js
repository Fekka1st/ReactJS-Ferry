import React, { useContext } from "react"
import { Link } from "react-router-dom"
import "./nav.css"
import { ThemeContext } from "../Context/themeContext"
import SwitchTheme from "../Tugas-15/swtichTheme"

const Nav = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    console.log(theme)
    const ColorTheme = theme === "dark" ? "dark-nav" : "light-nav"

    return(
        <>
            <nav className={ColorTheme} >
                <li>
                    <Link to="/">Tugas9</Link>
                </li>
                <li>
                    <Link to="/tugas10">Tugas10</Link>
                </li>
                <li>
                    <Link to="/tugas11">Tugas11</Link>
                </li>
                <li>
                    <Link to="/tugas12">Tugas12</Link>
                </li>
                <li>
                    <Link to="/tugas13">Tugas13</Link>
                </li>
                <li>
                    <Link to="/tugas14">Tugas14</Link>
                </li>
                <li>
                    <Link to="/tugas15">Tugas15</Link>
                </li>
                <li className="switch">
                    <SwitchTheme />
                </li>
            </nav>
            
            
            
        </>
    )
}

export default Nav