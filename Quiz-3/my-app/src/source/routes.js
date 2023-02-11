import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import About from "./about"
import Home from "./home"
import Nav from "./nav"
import List from "../source/movie/List"
import Form from "../source/movie/Form"
import { MobileContext, MobileProvider } from "../asset/context/context"
const Routes =()=>{
    return (
        <>
        <Router>
            <MobileProvider>
            <Nav/>
            <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/About" exact component={About} /> 
            <Route path="/mobile-list" exact >
                <List/>
            </Route>
            <Route path="/mobile-form" exact >
                <Form/>
            </Route> 
            <Route path="/mobile-form/edit/:Value" exact>
                <Form/>
            </Route>
            <Route path="/search/:value" />  
            </Switch>
            </MobileProvider>
        </Router>
        </>
    )
}
export default Routes