import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { Link } from "react-router-dom";

const Header = () => {
  const pages = [
    { pageName: "Home", route: "/" },
    { pageName: "Movies", route: "/movies" },
  ];
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Toolbar disableGutters>
          <TheaterComedyIcon sx={{ marginRight: "2px" }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={"/"}
            sx={{ color: "white", display: "block", textDecoration: "none" }}
          >
            MOVIE APP
          </Typography>
        </Toolbar>
        <Box sx={{ display: "flex" }}>
          {pages.map((page) => {
            return (
              <Button
                key={page.pageName}
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to={page.route}
              >
                {page.pageName}
              </Button>
            );
          })}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
