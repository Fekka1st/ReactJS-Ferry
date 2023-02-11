import React, { useContext, useEffect, useState } from "react";
import { Card, Divider } from 'antd';
import axios from "axios";
import {Link,useHistory} from "react-router-dom"
import { Appcontext } from "../Context/Appcontext";
const { Meta } = Card;




const Home =()=>{
    
    const {functions} = useContext(Appcontext)
    let {handleText} = functions

    const [dataMovie,setDataMovie]=useState([])
    const [dataGame,setDataGame]=useState([])
    const [fetchStatus,setFetchStatus]=useState(true)
    useEffect(()=>{
        let fetchMovie = async () =>{
            let result = await axios.get('https://backendexample.sanbersy.com/api/data-movie')
            let data = result.data
            console.log(data)

            setDataMovie(
                data.map((e)=>{
                    let {
                    description,
                    duration,
                    image_url,
                    id,
                    genre,
                    rating,
                    review,
                    title,
                    year
                    } = e
                    return{
                    description,
                    duration,
                    image_url,
                    id,
                    genre,
                    rating,
                    review,
                    title,
                    year
                    }
                })
            )

        }
        let fetchGame= async () =>{
            let result = await axios.get('https://backendexample.sanbersy.com/api/data-game')
            let data = result.data
            console.log(result)

            setDataGame(
                data.map((e)=>{
                    let {
                    genre,
                    id,
                    image_url,
                    Multiplayer,
                    name,
                    platform,
                    release,
                    singleplayer,
                    } = e
                    return{
                        genre,
                        id,
                        image_url,
                        Multiplayer,
                        name,
                        platform,
                        release,
                        singleplayer,
                    }
                })
            )
        }
        if(fetchStatus){
            fetchMovie()
            fetchGame()
            setFetchStatus(false)
        }
    },[fetchStatus,setFetchStatus])
    const CardComponent = (props) =>{
      
        return(
            <>
            <Link to={`/${props.dataName}/${props.id}`}>
            <Card
             hoverable
             style={props.dataName === "game" ? { width: 240 ,height:100} : { width: 240 ,height:300}}
             cover={<img alt="example" src={props.img}style={{height:300,objectFit:"cover"}}/>}
         >
                 <Meta title={props.name} description={props.dataName === "game"? props.description: handleText(props.description,150)} />
                 </Card>
            </Link>
          
            </>
        )
    }

    
   

  

    return(
        <>
        <Divider plain><h1 style={{fontSize:"32px"}}>Movie</h1></Divider>
        <div className="container-home">
            {
                dataMovie !== null && (
                    <>
                    
                    {dataMovie.filter((e,index)=>{
                        return index < 3
                    }).map((e,index)=>{
                        return <CardComponent key={index} dataName="movie" id={e.id} img={e.image_url} name={e.title} description={handleText(e.description,50)}/>
                    })}
                    </>
                )
            }
         </div>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <Divider plain><h1 style={{fontSize:"32px"}}>Games</h1></Divider>
        
        <div className="container-home">
            {
                dataGame !== null && (
                    <>
                    
                    {dataGame.filter((e,index)=>{
                        return index < 3
                    }).map((e,index)=>{
                        return <CardComponent key={index} dataName="game" id={e.id} img={e.image_url} name={e.name} description={handleText(e.platform,50)}/>
                    })}
                    </>
                )
            }
         </div>
        </>
    )
}

export default Home