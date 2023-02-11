import axios from "axios"
import Cookies from "js-cookie"
import React, { createContext, useState } from "react"
import { useHistory } from "react-router"


export const GameContext = createContext()

export const GameProvider = props =>{
    const [dataGame,setDataGame]=useState([])
    const [fetchStatus,setFetchStatus]=useState(true)
    let history = useHistory()
    const [searchStatus, setSearchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(null)
    const [input, setInput] = useState({
        genre:"",
        image_url:"",
        multiplayer:true,
        name:"",
        platform:"",
        release:2000,
        singlePlayer:true
    })
    const fetchData = async() =>{
         let result = await axios.get('https://backendexample.sanbersy.com/api/data-game')
         console.log(result)
         let data = result.data
         setDataGame(
            data.map((e)=>{
                let {
                genre,
                id,
                image_url,
                multiplayer,
                name,
                platform,
                release,
                singlePlayer,
                } = e
                return{
                    genre,
                    id,
                    image_url,
                    multiplayer,
                    name,
                    platform,
                    release,
                    singlePlayer,
                }
            })
        )
    }
    const functionDelete = (IdData) => {
        axios.delete(`https://backendexample.sanbersy.com/api/data-game/${IdData}`,{
        headers: {"Authorization" : "Bearer "+Cookies.get('token')}
        })
        .then(() => {
            setFetchStatus(true)
        })
    }

    const functionEdit = (IdData) => {
        axios.get(`https://backendexample.sanbersy.com/api/data-game/${IdData}`)
        .then((result) => {
            let data = result.data
            setDataGame(
                {
                    id:data.id,
                    genre:data.genre,
                    image_url:data.image_url,
                    multiplayer:data.multiplayer,
                    name:data.name,
                    platform:data.platform,
                    release:data.release,
                    singlePlayer:data.singlePlayer
                }

            )

            setCurrentId(data.id)
        })
}

const functionSubmit = () => {
    console.log(input)
    axios.post(`https://backendexample.sanbersy.com/api/data-game`, {
        headers: {"Authorization" : "Bearer "+Cookies.get('token')},
        id:input.id,
        genre:input.genre,
        image_url:input.image_url,
        multiplayer:input.multiplayer,
        name:input.name,
        platform:input.platform,
        release:input.release,
        singlePlayer:input.singlePlayer
    }).then((res) => {
        console.log(res)
        setFetchStatus(true)
        history.push('/gamelist')
    }).catch((e) => {
        console.log(e.response.data.message)
        alert(e.response.data.message)
    })
}

const functionUpdate = (currentId) => {
    axios.put(`https://backendexample.sanbersy.com/api/data-game/${currentId}`,{
        headers: {"Authorization" : "Bearer "+Cookies.get('token')},
        id:input.id,
        genre:input.genre,
        image_url:input.image_url,
        multiplayer:input.multiplayer,
        name:input.name,
        platform:input.platform,
        release:input.release,
        singlePlayer:input.singlePlayer
    }).then((e) => {
        setFetchStatus(true)
        history.push('/gamelist')
    })
}


    let state = {
        fetchStatus,
        setFetchStatus,
        dataGame,
        setDataGame,
        currentId, setCurrentId,
        searchStatus, setSearchStatus,
        dataGame,setDataGame,
        input, setInput
        
    }
    
    let functions = {
        fetchData,
        functionDelete,
        functionEdit,
        functionSubmit,
        functionUpdate
    }

    


   
    return(
        <GameContext.Provider value={{
            functions,
            state
        }}>
            {props.children}
        </GameContext.Provider>
    )
}