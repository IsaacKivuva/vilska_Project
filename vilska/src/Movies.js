import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";

function Movies() {
    const [searchQuery, setSearchQuery] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const apiUrl = searchQuery
      ? `https://api.themoviedb.org/3/search/movie?api_key=4a4c53c2b44a6c9f597dee90e67f9d99&query=${searchQuery}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=4a4c53c2b44a6c9f597dee90e67f9d99`;

    fetch(apiUrl)
      .then((r) => r.json())
      .then((data) => setMovieList(data.results));
  }, [searchQuery]);

  console.log(movieList);

  return (
    <div>
        <SearchBar onSearch={setSearchQuery}/>
      <div className="cards">
        {movieList.map((movie) => (
         <span>
          <img
            className="movieCards"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="movieimg"
            key={movie.id}
          />
          <h4 className="movieTitle">{movie.title}</h4>
         </span>  
        ))}
      </div>
    </div>
  );
}

export default Movies;
