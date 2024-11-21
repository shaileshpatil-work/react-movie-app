import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchmovies, moviesSelector } from "../../store/slices/moviesSlice";
import Grid from "@mui/material/Grid2";
import MovieCard from "../movieCard/MovieCard";
import { CircularProgress } from "@mui/material";

const Movies = () => {
  const dispatch = useAppDispatch();
  const { movies, isLoading } = useAppSelector(moviesSelector);

  useEffect(() => {
    dispatch(fetchmovies());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CircularProgress color="success" />
      ) : (
        <Grid sx={{ flexGrow: 1, marginTop: "20px", marginX: "24px" }}>
          <Grid container spacing={2}>
            {movies.map((movie) => {
              return <MovieCard movie={movie} />;
            })}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Movies;
