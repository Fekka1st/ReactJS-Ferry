import { useParams } from "react-router";
import React, { useContext, useEffect ,useState} from "react"
import {history} from "react-router-dom"
import { GameContext } from "../Context/GameContext";
import { Form, Input, InputNumber, Button } from 'antd';
import axios from "axios";

const GameForm = () =>{
    let {value}=useParams()
  //   // let history=useHistory()
    
    
  //   const[input,setInput]=useState({
  //     genre:"",
  //     image_url:"",
  //     multiplayer:true,
  //     name:"",
  //     platform:"",
  //     release:2000,
  //     singlePlayer:true
  // })
  //   useEffect(()=>{
  //       if(value!==undefined){
  //           axios.get(`https://backendexample.sanbersy.com/api/data-game/${value}`)
  //           .then((e)=>{
  //               let data=e.data
  //               let{
  //                 genre,
  //                 id,
  //                 image_url,
  //                 Multiplayer,
  //                 name,
  //                 platform,
  //                 release,
  //                 singleplayer,
  //             } = data
  //               setInput(
  //                       genre,
  //                       id,
  //                       image_url,
  //                       Multiplayer,
  //                       name,
  //                       platform,
  //                       release,
  //                       singleplayer,
                    
                    
  //               )
  //           })
  //       }
  //   })
  //   console.log(value)
  //   const onFinish = (values) => {
  //       console.log(values);
  //     };

  const { dataGame, setDataGame, fetchStatus, setFetchStatus, currentId, setCurrentId, input, setInput, functions} = useContext(GameContext)
    
  const { handleChange, functionSubmit, functionUpdate, functionEdit } = functions

  useEffect(() => {
      if(value !== undefined){
          functionEdit(value)
      }
  },[])

  const handleSubmit = (e) => {
      e.preventDefault()
      if (currentId === null) {
         functionSubmit()
      }else{
         functionUpdate(currentId)
      }
      setInput({
        genre:"",
        image_url:"",
        multiplayer:true,
        name:"",
        platform:"",
        release:2000,
        singlePlayer:true
      })
      setCurrentId(null)
  }
     
      
      

    return(
    <>
    <h1 style={{textAlign:"center"}}>FORM Game</h1>
    <div className="form">
                <form method="post" onSubmit={handleSubmit}>
                    <label >Name</label>
                    <input onChange={handleChange} required className="input-form" type="text" value={input.name} name="name"  />
                    <label >Genre</label>
                    <input onChange={handleChange} required className="input-form" type="text"  name="genre" value={input.genre} />
                    <label >Platform</label>
                    <input onChange={handleChange} required className="input-form" type="text"  name="platform" value={input.platform} />
                    <label >release</label>
                    <textarea onChange={handleChange} required className="input-form" type="number"  name="release" min={2007} max={2021} value={input.release} />
                    <label >img url</label>
                    <input onChange={handleChange} required className="input-form" type="text"  name="image_url" value={input.image_url} />
                    <label style={{ display: "block", width: "150px" }}>
                        <b>SinglePlayer :</b>
                        <input style={{ display: "inline-block" }} onChange={handleChange} type="checkbox"  name="singlePlayer" checked={input.singlePlayer} />
                    </label>
                    <label style={{ display: "block", width: "150px" }}>
                        <b>Multiplayer :</b>
                        <input style={{ display: "inline-block" }} onChange={handleChange} type="checkbox"  name="multiplayer" checked={input.multiplayer} />
                    </label>
                    <br />
                    <input className="input-submit" type="submit" value="Submit" />
                </form>
            </div>

    </>    
    )
}
export default GameForm