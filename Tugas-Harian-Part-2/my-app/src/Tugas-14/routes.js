import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { NilaiMahasiswaProvider } from "../Context/nilaiMahasiswaContext"
import Tugas10 from "../Tugas-10/tugas10"
import Tugas11 from "../Tugas-11/tugas11"
import Tugas12 from "../Tugas-12/tugas12"
import Tugas13 from "../Tugas-13/tugas13"
import Tugas9 from "../Tugas-9/tugas9"
import Nav from "./nav"


import NilaiMahasiswaFrom from "./nilaiMahasiswaForm"
import NilaiMahasiswaList from "./nilaiMahasiswaList"

import List from "../Tugas-15/list"
import Form from "../Tugas-15/form"

import { ThemeProvider } from "../Context/themeContext.js"
import { Alert } from 'antd';

const Routes = () => {
    return (
        <>
            <Router>
                <NilaiMahasiswaProvider>
                    <ThemeProvider>
                        <Nav />

                        
                        <Switch>
                            <Route path="/" exact component={Tugas9} />
                            <Route path="/tugas10" exact component={Tugas10} />
                            <Route path="/tugas11" exact component={Tugas11} />
                            <Route path="/tugas12" exact component={Tugas12} />
                            <Route path="/tugas13" exact component={Tugas13} />

                            <Route path="/tugas14" exact  >
                                <NilaiMahasiswaList />
                            </Route>
                            <Route path="/tugas14/create">
                                <NilaiMahasiswaFrom/>
                            </Route>
                            <Route path="/tugas14/edit/:Value">
                                <NilaiMahasiswaFrom/>
                            </Route>

                            <Route path="/tugas15" exact  >
                                <List/>
                            </Route>
                            <Route path="/tugas15/create">
                                <Form/>
                            </Route>
                            <Route path="/tugas15/edit/:Value">
                                <Form/>
                            </Route>

                            

  

                        </Switch>
                    </ThemeProvider>
                </NilaiMahasiswaProvider>
            </Router>
        </>
    )
}

export default Routes