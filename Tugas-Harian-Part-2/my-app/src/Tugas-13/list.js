import React, { useContext, useEffect } from "react"
import { NilaiMahasiswaContext } from "./Context/mhsContext"

const NilaiMahasiswaList = () => {

    const { dataMahasiswa, functions, fetchStatus, setFetchStatus } = useContext(NilaiMahasiswaContext)
    const { fetchData, getScore, functionDelete, functionEdit } = functions

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

        functionEdit(idMahasiswa)
    }

    return (
        <>
            <br />
            <h1 style={{ textAlign: "center" }}>Daftar Nilai Mahasiswa</h1>
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