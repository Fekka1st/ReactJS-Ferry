
import React, { useContext, useEffect } from "react"
import { useHistory} from "react-router"
import { MobileContext } from "../asset/context/context"




const Serch =()=>{
    let history = useHistory();
    const { input, setInput, dataMobile, functions, fetchStatus, setFetchStatus } = useContext(MobileContext)
    const { fetchData, getsize,  functionDelete, functionEdit,Android,Ios ,getprice} = functions

    useEffect(() => {

        if (fetchStatus === false) {
            fetchData()
            setFetchStatus(true)
        }

    }, [fetchData, fetchStatus, setFetchStatus])

    return(
        <>
        </>
    )
}

export default Serch