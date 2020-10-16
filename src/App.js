import React, { useState } from "react";
import "./App.css";
import "./components/Movie_card"
import Movie_card from "./components/Movie_card";
import data from "./data.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import Add_movie from "./components/Add_movies";

const App = () => {


  return (
    <div className="App">
      <div>
        <Add_movie data={data} />
      </div>
      <div id="movies__list">
        {data.map((movie) => {
          return <Movie_card key={movie.id} name={movie.title} image={movie.image} description={movie.description} />
        })}

      </div>
    </div>
  );
}

export default App;
