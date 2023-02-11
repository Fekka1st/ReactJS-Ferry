import React from "react"
import Logo from '../assets/img/logo.png'
import { Link } from "react-router-dom"

const About = () => {
    return (
        <>
            <div style={{padding: "10px", border: "1px solid #ccc",}}>
                <h1 style={{textAlign:"center"}}>Peserta Jabarcodingcamp-2021 Reactjs</h1>
                <img src={Logo}/>
                <ol>
                    <li><strong style={{width:"100px"}}>Nama:</strong> Ferry Aditya H</li>
                    <li><strong style={{width:"100px"}}>Email:</strong> ferryaditya124@gmail.com</li>
                    <li><strong style={{width:"100px"}}>Sistem Operasi yang digunakan:</strong> Windows 11 Home single Language 64 Bit</li>
                    <li><strong style={{width:"100px"}}>Akun Gitlab:</strong> Fekka1st</li>
                    <li><strong style={{width:"100px"}}>Akun Telegram:</strong> Ferry A.H</li> 
                </ol>
                <br/>
                <strong style={{width:"100px"}}>Tentang : </strong> Web Final Project dari Jabar Coding Camp 2021
                <br/>
                <strong style={{width:"100px"}}></strong> Final projek tidak beres karena kesibukan dikampus , terimakasih untuk jabar coding camp atas ilmu yang telah diberikan sangat bermanfaat
            </div>
            <br />
            <br />
        </>
    )
}

export default About