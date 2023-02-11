import "../App.css"
import Logo from "../asset/img/logo.png"
// import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { MobileContext } from "../asset/context/context"
import { useHistory} from "react-router"
import React, { useContext, useEffect } from "react"
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';






const Nav =()=>{
    let history = useHistory();
    const { input, setInput, dataMobile, functions, fetchStatus, setFetchStatus } = useContext(MobileContext)
    const { fetchData, getsize,  functionDelete, functionEdit,Android,Ios ,getprice} = functions

    useEffect(() => {

        if (fetchStatus === false) {
            fetchData()
            setFetchStatus(true)
        }

    }, [fetchData, fetchStatus, setFetchStatus])
    const cari = (event) => {
        let id= parseInt(event.currentTarget.value)
        history.push(`/search/${id}`)
        // functionEdit(idMahasiswa)
    }
    const data = dataMobile
    return (
        <>
          <div className="topnav">
                <a href="">
                    <img src={Logo} width="100" />
                </a>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Mobile-list">Mobile List</Link>
                </li>
                <li>
                <Link to="/About">About</Link>
                </li>
                <form>
                <input type="id"  /> 
                <input type="button" value="Cari"/>
                {/* {data.map((e) => {
                    return(
                        <>
                   
                    <Button onClick={cari} value={e.id}>Cari</Button>
                    
                    </>
                    )
                }
                )
            } */}
                </form>
                
                   
                   
                
            </div>
        </>
    )
}
export default Nav