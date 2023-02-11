import { Typography} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Gamedetail =()=>{
    let {Id}=useParams()
    const [dataGame,setDataGame]=useState([])
    const { Title, Paragraph, Text, Link } = Typography;
    useEffect(()=>{
        if(Id !== undefined){

        let fetchGameById = async () =>{
            let result = await axios.get(`https://backendexample.sanbersy.com/api/data-game/${Id}`)
            let data = result.data
            let{
                genre,
                id,
                image_url,
                Multiplayer,
                name,
                platform,
                release,
                singleplayer,
            } = data
            console.log(data)
            setDataGame({
                genre,
                id,
                image_url,
                Multiplayer,
                name,
                platform,
                release,
                singleplayer,
            }
            )
        }
        fetchGameById()
    }

    },[])
    console.log(Gamedetail)

    
    return(
        <>
        <div className="container-detail">
            <img src={dataGame.image_url} alt="example" className="img-detail"/>
            <div style={{border:"1px solid black"}}>
            <Typography>
            <Title>{dataGame.name}</Title>
            <Paragraph style={{width:"100%"}}>{dataGame.platform}</Paragraph>
            </Typography>
            </div>
        </div>
        </>
    )
} 

export default Gamedetail