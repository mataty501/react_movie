import React, { useState } from "react";
import "./App.css";
import "./components/Movie_card"
import Movie_card from "./components/Movie_card";
import data from "./data.json"
//import 'bootstrap/dist/css/bootstrap.min.css';
import Add_movie from "./components/Add_movies";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState(data);
  const [filterMovies, setFilterMovies] = useState();

  const handleFiltre = (filtre) => {
    const filtredMovies = filtre ? movies.filter((elem) => {
      return elem.title.toLowerCase().startsWith(filtre.toLowerCase())
    }) : movies;
    setFilterMovies(filtredMovies)
  }
  return (
    <div className="App">
      <div>
        <Add_movie setData={setMovies} />
      </div>
      <div>
        <Filter data={handleFiltre} />
      </div>
      <div id="movies__list">
        {
          filterMovies ?
            filterMovies.map((movie) => {
              return <Movie_card key={movie.id} name={movie.title} image={movie.image} description={movie.description} />
            })
            :
            movies.map((movie) => {
              return <Movie_card key={movie.id} name={movie.title} image={movie.image} description={movie.description} />
            })
        }

      </div>
    </div>
  );
}

export default App;
