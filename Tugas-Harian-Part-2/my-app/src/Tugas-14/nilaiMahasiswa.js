import React from "react"
import { NilaiMahasiswaProvider } from "../Context/nilaiMahasiswaContext"
import NilaiMahasiswaFrom from "./nilaiMahasiswaForm"
import NilaiMahasiswaList from "./nilaiMahasiswaList"

const NilaiMahasiswa = () => {
    return(
        <NilaiMahasiswaProvider>
            <NilaiMahasiswaList/>
            <NilaiMahasiswaFrom/>
        </NilaiMahasiswaProvider>
    )
}

export default NilaiMahasiswa