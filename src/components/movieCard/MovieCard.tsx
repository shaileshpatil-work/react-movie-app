import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { IMovie } from "../../models/movie";
import { Link } from "react-router-dom";

interface IProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: IProps) => {
  return (
    <Grid size={4} key={movie.imdbID}>
      <Card>
        <CardMedia height="140" image={movie.Poster} component={"img"} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.Title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {movie.Type}
          </Typography>
          <Box mt={2}>
            <Button
              component={Link}
              size="small"
              to={`/movies/${movie.imdbID}`}
            >
              MORE DETAILS
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MovieCard;
