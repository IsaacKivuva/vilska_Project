import React, { useEffect, useState } from "react";
import "./App.css"

function Movies(){

    const [movieList, setMovieList]= useState([])

    const getMovie = (()=>
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=4a4c53c2b44a6c9f597dee90e67f9d99")
            .then(r => r.json())
            .then(data => setMovieList(data.results))
    )

    useEffect(()=> {
        getMovie()
    },[])

    console.log(movieList)

    return(
        <div>
            {movieList.map((movie)=>(
                <img  className="movieCards" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movieimg"/>
            ))}
        </div>
    )
}

export default Movies