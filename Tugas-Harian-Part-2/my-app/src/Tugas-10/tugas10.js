import './css/style.css' ;
import React, { useState, useEffect } from 'react';

const Waktu = () =>{
    const [count , setCount] = useState (100)
    const [display,setDisplay] = useState(true)
    const [time,setTime] = useState('')
    
    useEffect(()=>{
        if (count !== 0 ){
            let result = setInterval(() => {
                setCount(count-1)
                setTime (new Date().toLocaleTimeString())
            }, 1000)
            return () => clearInterval(result)
        }else{
            setDisplay(false);
        }
        
    },[count])

    return(
        <div className="waktu">
        <>
        {display === true ? <>
        <h1 className="teks">Now At : {time}</h1>
        <h4 className="teks2">Countdown : { count } kali</h4>
        </> : null 
        }
        </>
        </div>
    )
}
export default Waktu;

   