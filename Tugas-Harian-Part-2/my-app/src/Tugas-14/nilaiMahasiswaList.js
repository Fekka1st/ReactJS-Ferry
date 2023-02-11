import React, { useContext, useEffect } from "react"
import { useHistory} from "react-router"
import { NilaiMahasiswaContext } from "../Context/nilaiMahasiswaContext"

const NilaiMahasiswaList = () => {
    let history = useHistory()


    const { input, setInput, dataMahasiswa, functions, fetchStatus, setFetchStatus } = useContext(NilaiMahasiswaContext)
    const { fetchData, getScore,  functionDelete, functionEdit } = functions

    useEffect(() => {

        if (fetchStatus === false) {
            fetchData()
            setFetchStatus(true)
        }

    }, [fetchData, fetchStatus, setFetchStatus])



    const handleDelete = (event) => {
        let idMahasiswa = parseInt(event.target.value)

        functionDelete(idMahasiswa)
    }

    const handleEdit = (event) => {
        let idMahasiswa = parseInt(event.target.value)
        history.push(`/tugas14/edit/${idMahasiswa}`)
        // functionEdit(idMahasiswa)
    }

    const handleCreate = () => {
        history.push('/tugas14/create')
        setInput({
            nama: "",
            course: "",
            score: 0
        })
    }

    return (
        <>
            <br />
            <h1 style={{ textAlign: "center" }}>Daftar Nilai Mahasiswa</h1>
            <button onClick={handleCreate} style={{marginLeft:"320px", padding:"5px", marginTop:"10px"}}>Tambah Data Nilai Mahasiswa</button>
            <table id="customers">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Mata Kuliah</th>
                        <th>Nilai</th>
                        <th>Index Nilai</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {dataMahasiswa !== null && (
                        <>
                            {dataMahasiswa.map((e, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{e.name}</td>
                                        <td>{e.course}</td>
                                        <td>{e.score}</td>
                                        <td>{getScore(e.score)}</td>
                                        <td>
                                            <button onClick={handleEdit} value={e.id}>edit</button>
                                            <button onClick={handleDelete} value={e.id} style={{ marginLeft: "10px" }}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </>
                    )}
                </tbody>
            </table>
            <br />
            <br />
            

        </>
    )
}

export default NilaiMahasiswaList