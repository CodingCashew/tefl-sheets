import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";

const ThankYou: React.FC = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "3rem" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Thank You!
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Your order is complete.
      </Typography>
      <Typography variant="body1" align="center">
        We've sent an email to your registered email address with the PDF you
        ordered attached. Please check your email.
      </Typography>
      <div style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
        <Button variant="contained" color="secondary" size="medium" href="/">
          Home
        </Button>
      </div>
    </Container>
  );
};

export default ThankYou;
