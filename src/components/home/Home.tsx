import React from "react";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Typography variant="body1">
        This is a movies application designed to provide an engaging experience
        for movie enthusiasts. On the <strong>Movies</strong> page, you can
        explore a comprehensive list of movies, complete with their titles,
        posters, and brief details. Each movie in the list serves as an entry
        point to its full details.
      </Typography>

      <Typography variant="body1">
        By clicking on a specific movie, you will be navigated to the{" "}
        <strong>Movie Details</strong> page, where you can find in-depth
        information about the selected movie, including its storyline, genre,
        release year, and more. This feature allows users to dive deeper into
        the world of cinema and explore their favorite movies in greater detail.
      </Typography>

      <Typography variant="body1">
        Whether you're searching for a movie to watch or simply browsing through
        options, the application is designed to offer a seamless and
        user-friendly experience. With a clean, modern interface, you’ll find it
        easy to navigate and enjoy discovering new films to watch.
      </Typography>
    </>
  );
};

export default Home;
