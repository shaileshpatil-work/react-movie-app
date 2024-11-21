import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchmovieDetails,
  moviesSelector,
} from "../../store/slices/moviesSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movieDetails, isLoading } = useAppSelector(moviesSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchmovieDetails(id));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <CircularProgress color="success" />
      ) : (
        <Box sx={{ flexGrow: 1, marginTop: "20px", marginX: "24px" }}>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography variant="h4">
                Movie Title: {movieDetails?.Title}
              </Typography>
              <Typography variant="h5">
                Release year: {movieDetails?.Year}
              </Typography>
              <Button onClick={() => navigate(-1)}>Go Back</Button>
            </Grid>
            <Grid size={4}>
              <Box src={movieDetails?.Poster} component="img" />
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default MovieDetails;
