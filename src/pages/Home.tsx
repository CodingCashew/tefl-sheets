import React from "react";
import { Box, Container, Typography, Button } from "@material-ui/core";

const Home: React.FC = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to Our Website!
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          We provide the best service for you.
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
