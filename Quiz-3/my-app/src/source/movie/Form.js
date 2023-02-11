import React, { useContext, useEffect } from "react"
import { useParams } from "react-router"
import '../../App.css';
import { MobileContext } from "../../asset/context/context"
import { Alert } from 'antd';

const MobileFrom = () => {
    const {input, setInput, currentId, setCurrentId, functions } = useContext(MobileContext)
    const { functionSubmit, functionUpdate,fetchById  } = functions
    let {Value} = useParams()

    useEffect(() => {
        if( Value !== undefined ){
            fetchById(Value)
        }
    },[])


    const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({ ...input, [name]: typeOfValue })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)

        if (currentId === -1) {
            functionSubmit()
        } else {
            functionUpdate(currentId)
        }

        setInput({
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
        setCurrentId(-1)
    }

    // const on =()=>{
    //         if(is_ios_app)
    // }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Form Daftar Nilai Mahasiswa</h1>
            <br />
            <form method="post" onSubmit={handleSubmit} style={{ width: "50%", border: "1px solid #aaa", margin: "auto",paddingTop:"20px" , padding: "200px", marginBottom: "20px" ,height:"50%"}}>
                <strong style={{ width: "300px", display: "inline-block" }}>Nama : </strong>
                <input style={{ float: "right" }} onChange={handleChange} value={input.name} name="name" type="text" required />
                <br />
                <br />
                <strong style={{ width: "300px", display: "inline-block" }}>Category : </strong>
                <input style={{ float: "right" }} onChange={handleChange} value={input.category} name="category" type="text" required />
                <br/>
                <strong style={{ width: "300px", display: "inline-block" }}>Description : </strong>
                <textarea style={{ float: "right", width:"100%",height:"20%" }} onChange={handleChange} value={input.description} name="description" type="text" required ></textarea>
                <br />
                <br />
                <strong style={{ width: "300px", display: "inline-block" }}>Release Year : </strong>
                <input style={{ float: "right" ,width:"100%"}} onChange={handleChange} value={input.release_year} name="release_year" type="number" required min={0}  />
                <br />
                <br />
                <strong style={{ width: "300px", display: "inline-block" }}>Size : </strong>
                <input style={{ float: "right" ,width:"100%"}} onChange={handleChange} value={input.size} name="size" type="number" required min={0}  />
                <br />
                <br />
                <strong style={{ width: "300px", display: "inline-block" }}>Rating : </strong>
                <input style={{ float: "right" ,width:"100%"}} onChange={handleChange} value={input.rating} name="rating" type="number" required min={0}  />
                <br />
                <br />
                <strong style={{ width: "300px", display: "inline-block" }}>Price : </strong>
                <input style={{ float: "right" ,width:"100%"}} onChange={handleChange} value={input.price} name="price" type="number" required min={0}  />
                <br />
                <br />
                <strong style={{ width: "300px", display: "inline-block" }}>Image url : </strong>
                <input style={{ float: "right" }} onChange={handleChange} value={input.image_url} name="image_url" type="text" required />
                <br />
                <br />
                <strong style={{ display: "inline-block" }}>Android : </strong>
                <input style={{width:"5%"}} onChange={handleChange} value={input.is_android_app} name="is_andorid_app" type="checkbox" />
                <strong style={{ display: "inline-block" }}>iOS : </strong>
                <input style={{width:"5%"}} onChange={handleChange} value={input.is_ios_app} name="is_ios_app" type="checkbox" />

                

                <input style={{ float: "right" }} type="submit" />
            </form>
            
        </>
    )
}

export default MobileFrom