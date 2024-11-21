import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Movies from "./components/movies/Movies";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/movieDetails/MovieDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default App;
