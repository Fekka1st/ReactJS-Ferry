import React, { useContext, useEffect } from "react"
import { useHistory} from "react-router"

import { Table, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';

import { MobileContext } from "../../asset/context/context"


const MobileList = () => {
    let history = useHistory();
    const { input, setInput, dataMobile, functions, fetchStatus, setFetchStatus } = useContext(MobileContext)
    const { fetchData, getsize,  functionDelete, functionEdit,Android,Ios ,getprice} = functions

    useEffect(() => {

        if (fetchStatus === false) {
            fetchData()
            setFetchStatus(true)
        }

    }, [fetchData, fetchStatus, setFetchStatus])



    const handleDelete = (event) => {
        let idMahasiswa = parseInt(event.currentTarget.value)

        functionDelete(idMahasiswa)
    }

    const handleEdit = (event) => {
        let id= parseInt(event.currentTarget.value)
        history.push(`/Mobile-form/edit/${id}`)
        // functionEdit(idMahasiswa)
    }

    const handleCreate = () => {
        history.push('/Mobile-form')
        setInput({
            nama: "",
            course: "",
            score: 0
        })
    }


    const columns = [ 
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'name',
           
          },
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'name',
           
          },
          {
            title: 'Release Year',
            dataIndex: 'release_year',
            key: 'name',
           
          },
          {
            title: 'Size',
            key: 'name',
            render: (e,index)=>(
                <td>
                    {getsize(e.size)}
                </td>
            )
           
          },
          {
            title: 'Price',
            key: 'name',
            render: (e,index)=>(
                <td>
                    {getprice(e.price)}
                </td>
            )
          },
          {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'name',
           
          },    
          {
            title: 'Image',
            render: (e, index) => (
                <>
                <img src={e.image_url}/> 
               </>
            )
           
          },    
          {
            title: 'Platform',
            
            key: 'name',
            render: (e, index) => (
                 <>
                 <td>{ Android(e.is_android_app)}{"\n"}{Ios(e.is_ios_app)}</td>   
                </>
            )
           
          },
          {
            title: 'Action',
            key: 'action',
            render: (res, index) => (
             <div className>
             <Button onClick={handleEdit} value={res.id}><EditOutlined/></Button>
             <Button onClick={handleDelete} value={res.id} style={{ marginLeft: "10px" }}><DeleteOutlined/></Button>
             </div> 
            ), 
        }
        
      ];
      const data = dataMobile


    return (
        <>
         <Button className={"tombol"} type="primary" onClick={handleCreate} >Tambah Data list</Button>
            
            <h1 style={{ textAlign: "center" }}>Mobile Apps list</h1> 
            <Table columns={columns} dataSource={data} className="table"/>
            
            

        </>
    )
}

export default MobileList