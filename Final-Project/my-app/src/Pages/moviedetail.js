import { Typography,Paragraph,Title,Text } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ClockCircleOutlined } from '@ant-design/icons';

const MovieDetail =()=>{
    let {Id}=useParams()
    const [dataMovie,setDataMovie] = useState([])
    const { Title, Paragraph, Text, Link } = Typography;
    useEffect(()=>{
        if(Id !== undefined){

        
        let fetchMovieById = async () =>{
            let result = await axios.get(`https://backendexample.sanbersy.com/api/data-movie/${Id}`)
            let data = result.data
            let{
                    description,
                    duration,
                    image_url,
                    id,
                    genre,
                    rating,
                    review,
                    title,
                    year,
            } = data
            console.log(data)
            setDataMovie({
                    description,
                    duration,
                    image_url,
                    id,
                    genre,
                    rating,
                    review,
                    title,
                    year,
            }
            )
        }
        fetchMovieById()
    }

    },[])
    console.log(dataMovie)

    
    return(
        <>
        <div className="container-detail">
            <img src={dataMovie.image_url} alt="example" className="img-detail"/>
            <div style={{border:"1px solid black"}}>
            <Typography>
            <Title>{dataMovie.title}</Title>
            <small><ClockCircleOutlined />{dataMovie.duration}Hour</small>
            <Paragraph style={{width:"100%"}}>{dataMovie.description}</Paragraph>
            </Typography>
            </div>
        </div>
        </>
    )
} 

export default MovieDetail