import React, { useContext, useEffect } from "react"
import { useHistory} from "react-router"
import { NilaiMahasiswaContext } from "../Context/nilaiMahasiswaContext"
import { Table,Button } from 'antd'; 
import { DeleteOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import "./asset/style.css"
import { message } from 'antd';


const NilaiMahasiswaList = () => {
    let history = useHistory()


    const { setInput, dataMahasiswa, functions, fetchStatus, setFetchStatus } = useContext(NilaiMahasiswaContext)
    const { fetchData,  functionDelete } = functions

    useEffect(() => {

        if (fetchStatus === false) {
            fetchData()
            setFetchStatus(true)
        }

    }, [fetchData, fetchStatus, setFetchStatus])


    const success = (pesan) => {
        message.success("Data berhasil "+pesan);
      };

    const handleDelete = (event) => {
        let idMahasiswa = parseInt(event.currentTarget.value)
        console.log(idMahasiswa)
        functionDelete(idMahasiswa)
        success("dihapus")
    }

    const handleEdit = (event) => {
        let idMahasiswa = parseInt(event.currentTarget.value)
        history.push(`/tugas15/edit/${idMahasiswa}`)
        // functionEdit(idMahasiswa)
    }

    

    const handleCreate = () => {
        history.push('/tugas15/create')
        
        setInput({
            nama: "",
            course: "",
            score: 0
        })
       
        
    }
    

    const columns = [
        {
          title: 'Nama',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
            title: 'Mata Kuliah',
            dataIndex: 'course',
            key: 'name',
           
          },
          {
            title: 'Score',
            dataIndex: 'score',
            key: 'name',
           
          },
          {
            title: 'Index score',
            dataIndex: 'indexScore',
            key: 'name',
           
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
      const data = dataMahasiswa

    return (
        <>           
            <Button className={"tombol"} type="primary" onClick={handleCreate} >Tambah Data Nilai Mahasiswa</Button>
            
            <h1 style={{ textAlign: "center" }}>Daftar Nilai Mahasiswa</h1> 
            <Table columns={columns} dataSource={data} className="table"/>
            

        </>
    )
}

export default NilaiMahasiswaList