import React, { useContext } from "react"
import { NilaiMahasiswaContext } from "./Context/mhsContext"

const NilaiMahasiswaFrom = () => {
    const {input, setInput, currentId, setCurrentId, functions } = useContext(NilaiMahasiswaContext)
    const { functionSubmit, functionUpdate,  } = functions

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
            nama: "",
            course: "",
            score: 0
        })
        setCurrentId(-1)
    }

    return (
        <>
            <h1 style={{textAlign: "center"}}>Form Nilai Mahasiswa</h1>
            <form method="post" id="jarak" onSubmit={handleSubmit}>
            <label id="bold">Nama</label>
            <input required type="text" name="nama" value={input.nama} onChange={handleChange}/>
 
            <label id="bold">Mata Kuliah</label>
            <input required type="text" name="course" value={input.course} onChange={handleChange}/>
 
            <label id="bold">Nilai</label>
            <input required type="number" name="score" min="0" max="100" value={input.score} onChange={handleChange}/>

             <input type="submit" value="Submit"/>
             </form>
        </>
    )
}

export default NilaiMahasiswaFrom