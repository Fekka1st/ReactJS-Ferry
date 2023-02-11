import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom"
import Layoutcomp from '../Layout/Layoutcomp'
import Login from '../Pages/login'
import Home from '../Pages/home'
import Cookies from "js-cookie"
import Register from '../Pages/register'
import Changepass from "../Pages/changepassword"
import About from "../Pages/about"
import MovieDetail from "../Pages/moviedetail"
import Gamedetail from "../Pages/gamedetail"
import Gamelist from "../Pages/gamelist"
import GameForm from "../Pages/gameform"
import { GameProvider } from "../Context/GameContext"
import MovieList from "../Pages/movielist"
import MovieForm from "../Pages/movieform"




const Routes =()=>{

    const RouteLogin = ({...props}) => {

        if(Cookies.get('token') === undefined){
           return  <Route {...props}/>
        }else if(Cookies.get('token') !== undefined){
            return <Redirect to="/" />
        }

    }

    const RouteChange = ({...props})=>{

        if(Cookies.get('token') === undefined){
            return  <Redirect to="/login" />
         }else if(Cookies.get('token') !== undefined){
             return  <Route {...props}/>
         }

    }
        return(
            <>
            <Router>
            <GameProvider>
   
            <Switch>
                
                <Route path="/" exact>
                    <Layoutcomp content={<Home/>}/>
                </Route>

                <RouteLogin path="/login" exact>
                <Layoutcomp content={<Login/>}/>
                </RouteLogin>

                <RouteLogin path="/register" exact>
                <Layoutcomp content={<Register/>}/>
                </RouteLogin>

                <RouteChange path="/change-pasword" exact>
                <Layoutcomp content={<Changepass/>}/>
                </RouteChange>

                <RouteChange path="/about" exact>
                <Layoutcomp content={<About/>}/>
                </RouteChange>

                
                <Route path="/game/:Id" exact>
                <Layoutcomp content={<Gamedetail/>}/>    
                </Route>

                <Route path="/gamelist" exact>
                <Layoutcomp content={<Gamelist/>}/>    
                </Route>

                <Route path="/gamelist/form/" exact>
                <Layoutcomp content={<GameForm/>}/>    
                </Route>

                <Route path="/gamelist/form/:value" exact>
                <Layoutcomp content={<GameForm/>}/>    
                </Route>
                
                {/* <RouteLogin path="/gamelist/form/:value" exact>
                <Layoutcomp content={<GameForm/>}/>    
                </RouteLogin> */}

                <Route path="/movie/:Id" exact>
                <Layoutcomp content={<MovieDetail/>}/>    
                </Route>

                <Route path="/movielist" exact>
                <Layoutcomp content={<MovieList/>}/>    
                </Route>

                <Route path="/movielist/form" exact>
                <Layoutcomp content={<MovieForm/>}/>    
                </Route>

                <Route path="/movielist/form/:value" exact>
                <Layoutcomp content={<MovieForm/>}/>    
                </Route>

                {/* <RouteLogin path="/movie/form" exact>
                <Layoutcomp content={<MovieForm/>}/>    
                </RouteLogin> */}
                

                
                
                </Switch>
     
            </GameProvider>

            </Router>
            </>
        )


}
export default Routes