import React from "react"
import { MovieProvider } from "../../asset/context/context"
import From from "./Form"
import List from "./List"

const Movie = () => {
    return(
        <MovieProvider>
            <List/>
            <From/>
        </MovieProvider>
    )
}
export default Movie