import React from "react"
import { NilaiMahasiswaProvider } from "../Context/nilaiMahasiswaContext"
import From from "./form"
import List from "./list"

const NilaiMahasiswa = () => {
    return(
        <NilaiMahasiswaProvider>
            <List/>
            <From/>
        </NilaiMahasiswaProvider>
    )
}

export default NilaiMahasiswa