import axios from "axios"
import React, { createContext, useState } from "react"
import { useHistory } from "react-router"

export const NilaiMahasiswaContext = createContext()

export const NilaiMahasiswaProvider = props => {
    let history = useHistory()
    const [dataMahasiswa, setDataMahasiswa] = useState([])
    const [input, setInput] = useState({
        nama: "",
        course: "",
        score: 0
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)


    const fetchData = async () => {
        let result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
        let data = result.data
        console.log(data)
        setDataMahasiswa(data.map((e, index) => {
            let indexScore = getScore(e.score)
            return {
                no: index+1,
                id: e.id,
                name: e.name,
                score: e.score,
                course: e.course,
                indexScore : indexScore
            }
        }))
    }

    const fetchById = async (idMahasiswa) => {
        let res = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
        let data = res.data
        setInput({
            id: data.id,
            nama: data.name,
            course: data.course,
            score: data.score
        })
        setCurrentId(data.id)
    }

    const getScore = (score) => {
        if (score >= 80) {
            return "A"
        } else if (score >= 70 && score < 80) {
            return "B"
        } else if (score >= 60 && score < 70) {
            return "C"
        } else if (score >= 50 && score < 60) {
            return "D"
        } else {
            return "E"
        }
    }

    const functionSubmit = () => {
        axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {
            name: input.nama,
            course: input.course,
            score: input.score,
        }).then((res) => {
            let data = res.data
            setDataMahasiswa([...dataMahasiswa, {
                id: data.id,
                name: data.name,
                score: data.score,
                course: data.course
            }])
            history.push('/tugas15')
        })
    }

    const functionUpdate = (currentId) => {
        axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {
            name: input.nama,
            course: input.course,
            score: input.score,
        }).then((res) => {
            let newDataMahasiswa = dataMahasiswa.find((e) => e.id === currentId)
            newDataMahasiswa.name = input.nama
            newDataMahasiswa.course = input.course
            newDataMahasiswa.score = input.score
            setDataMahasiswa([...dataMahasiswa])
            history.push('/tugas15')
        })
    }

    const functionDelete = (idMahasiswa) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
            .then(() => {
                let newDataMahasiswa = dataMahasiswa.filter((res) => { return res.id !== idMahasiswa })
                setDataMahasiswa(newDataMahasiswa)
            })
    }

    const functionEdit = (idMahasiswa) => {

    }

    const functions = {
        fetchData,
        getScore,
        functionSubmit,
        functionUpdate,
        functionDelete,
        functionEdit,
        fetchById
    }

    return (
        <NilaiMahasiswaContext.Provider value={{
            dataMahasiswa,
            setDataMahasiswa,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </NilaiMahasiswaContext.Provider>
    )

}