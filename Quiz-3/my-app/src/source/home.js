import React, { useContext, useEffect } from "react"
import { useHistory} from "react-router"
import "../App.css"
import { MobileContext } from "../asset/context/context"
import Logo from "../asset/img/logo.png"
const Home =()=>{
    let history = useHistory();
    const { input, setInput, dataMobile, functions, fetchStatus, setFetchStatus } = useContext(MobileContext)
    const { fetchData, getsize,  functionDelete, functionEdit,Android,Ios,getprice } = functions

    useEffect(() => {

        if (fetchStatus === false) {
            fetchData()
            setFetchStatus(true)
        }

    }, [fetchData, fetchStatus, setFetchStatus])

    return(
        <>
      

    <div className="row">
        <div className="section">
            <div className="card">
                <div>
                <h1 style={{ textAlign: "center" }}><strong>Popular Mobile Apps</strong></ h1>
                <br/> <br/>
                     {
                    dataMobile.map((e, index)=>{
                      return(                    
                        <tr key={index}>
                            
                          <h2>Name Game : {e.name}</h2>
                          <h5>Year Release: {e.release_year}</h5>
                          <img src={e.image_url}/>
                          <td></td>
                          <div>
                            <strong>Price: {getprice(e.price)}</strong><br />
                            <strong>rating : {e.rating}</strong><br />
                            <strong>size : {getsize(e.size)}</strong><br />
                            <strong >Platform : { Android(e.is_android_app)}{"\n"}{Ios(e.is_ios_app)}</strong>
                          <br />
                          </div>
                          </tr>
                      )
                    })
                  }
                    {/* <h2>{dataMobile[1].name}</h2>
                    <h5>{dataMobile[1].release_year}</h5>
                   
                    <img src={dataMobile[1].image_url}/>
                    <br />
                    <br />
                    <div>
                        <strong>Price: {dataMobile[1].price}</strong><br />
                        <strong>rating : {dataMobile[1].rating}</strong><br />
                        <strong>size : {dataMobile[1].size}</strong><br />
                        <strong >Platform : {dataMobile[1].is_android_app} {dataMobile[1].is_ios_app}</strong>
                        <br />
                    </div>
                    <p>
                        <strong >Description : {dataMobile[1].description}</strong>
                       
                    </p> */}

                    <hr />
                </div>
            </div>

        </div>
    </div>

    <footer>
        <h5>&copy; Quiz 3 ReactJS Sanbercode</h5>
    </footer>



        </>
    )
}
export default Home
