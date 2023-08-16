import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export const Home = ({ SetShowHome }) => {
  const myStyle = {
    backgroundImage: "url(/mcdonalds.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  };
  return (
    <Container
      component="main"
      sx={{ width: "100%", height: "100%" }}
      style={myStyle}
    >
      <Typography mb={4} sx={{ fontSize: 50, fontWeight: "bold" }}>
        Queuing Model of McDonald's
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        width
        onClick={() => SetShowHome(false)}
      >
        Open Project
      </Button>
    </Container>
  );
};
