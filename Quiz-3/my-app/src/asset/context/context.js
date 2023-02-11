import axios from "axios"
import React, { createContext, useState } from "react"
import { useHistory } from "react-router"

export const MobileContext = createContext()

export const MobileProvider = props => {
    let history = useHistory()
    const [dataMobile, setDataMobile] = useState([])
    const [input, setInput] = useState({
        name:"",
        description:"", 
        category:"", 
        image_url:"", 
        release_year:0,
        size:0, 
        price:0,
        rating:0 , 
        is_android_app:true,
        is_ios_app:true
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    
    const fetchData = async () => {
        let result = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`)
        let data = result.data
        console.log(data)
        setDataMobile(data.map((e, index) => {
            let indexsize = getsize(e.size)
            return {
                no: index+1,
                id: e.id,
                image_url:e.image_url, 
                name:e.name, 
                description:e.description, 
                category:e.category, 
                size:e.size,
                price:e.price, 
                rating:e.rating,
                is_android_app:e.is_android_app,
                is_ios_app:e.is_ios_app,
                release_year:e.release_year,
                indexsize:indexsize
            }
        }))
    }

    const fetchById = async (ID_MOBILE_APPS) => {
        let res = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
        let e = res.data
        setInput({
                id: e.id,
                image_url:e.image_url, 
                name:e.name, 
                description:e.description, 
                category:e.category, 
                size:e.size,
                price:e.price, 
                rating:e.rating,
                platform:e.platform,
                is_android_app:e.is_android_app,
                is_ios_app:e.is_ios_app,
                release_year:e.release_year
        })
        setCurrentId(e.id)
    }

    const Android = (android) =>{
        if(android){
            var platform
            return platform = "Android"
        }else{
            return platform = "not detected"
        }
    }
    const Ios = (ios) =>{
        var platform
        if(ios){
            return platform = "iOS"
        }else{
            return platform = "not detected"
        }
    }

    const getsize = (size) => {
        if(size >= 1000){
            size= size/1000
           return (size+"GB");
        }else{
            return (size+"MB");
        }
    }

    const getprice = (price)=>{
        if(price > 0 ){
            return("Rp. "+price)
        }else{
            return("Free ")
        }
    }

    const functionSubmit = () => {
        axios.post(`http://backendexample.sanbercloud.com/api/mobile-apps`, {
                image_url:input.image_url, 
                name:input.name, 
                description:input.description, 
                category:input.category, 
                size:input.size,
                price:input.price, 
                rating:input.rating,
                platform:input.platform,
                is_android_app:input.is_android_app,
                is_ios_app:input.is_ios_app,
                release_year:input.release_year
        }).then((res) => {
            let e = res.data
            setDataMobile([...dataMobile, {
                id: e.id,
                image_url:e.image_url, 
                name:e.name, 
                description:e.description, 
                category:e.category, 
                size:e.size,
                price:e.price, 
                rating:e.rating,
                platform:e.platform,
                is_android_app:e.is_android_app,
                is_ios_app:e.is_ios_app,
                release_year:e.release_year
            }])
            history.push('/Mobile-list')
        })
    }

    const functionUpdate = (currentId) => {
        axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {
                image_url:input.image_url, 
                name:input.name, 
                description:input.description, 
                category:input.category, 
                size:input.size,
                price:input.price, 
                rating:input.rating,
                platform:input.platform,
                is_android_app:input.is_android_app,
                is_ios_app:input.is_ios_app,
                release_year:input.release_year
        }).then((res) => {
            let newDataMobile = dataMobile.find((e) => e.id === currentId)
            newDataMobile.name = input.name
            newDataMobile.description = input.description
            newDataMobile.category = input.category
            newDataMobile.id=input.id
            newDataMobile.image_url=input.image_url
            newDataMobile.size=input.size
            newDataMobile.price=input.price
            newDataMobile.rating=input.rating
            newDataMobile.is_android_app=input.is_android_app
            newDataMobile.is_ios_app=input.is_ios_app
            newDataMobile.release_year=input.release_year
            setDataMobile([...dataMobile])
            history.push('/mobile-list')
        })
    }

    const functionDelete = (ID_MOBILE_APPS) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
            .then(() => {
                let newDataMobile = dataMobile.filter((res) => { return res.id !== ID_MOBILE_APPS })
                setDataMobile(newDataMobile)
            })
    }

    const functionEdit = (ID_MOBILE_APPS) => {

    }

    const functions = {
        fetchData,
        getsize,
        functionSubmit,
        functionUpdate,
        functionDelete,
        functionEdit,
        fetchById,
        Android,
        Ios,
        getprice

    }

    return (
        <MobileContext.Provider value={{
            dataMobile,
            setDataMobile,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus,
            Android,
            Ios
        }}>
            {props.children}
        </MobileContext.Provider>
    )

}