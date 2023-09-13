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
    <div className="container">
        <div className="cards">
            {movieList.map((movie)=>(
                <span>
                    <img  className="movieCards" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movieimg"/>
                    <h5>{movie.title}</h5>
                    

                </span>
            ))}
            
        </div>
    </div>
    )
}

export default Movies