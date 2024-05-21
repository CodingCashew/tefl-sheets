import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import React, { useState } from "react";

const Unsubscribe: React.FC = () => {
  const [unsubscribed, setUnsubscribed] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: any) => {
    const { email } = e.target;
    setEmail(email);
  };

  const unsubscribe = (e: any) => {
    e.preventDefault();
    // if (!email) return;
    fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://www.teflsheets.com"
      }/unsubscribe`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("You have successfully unsubscribed from our mailing list!");
        setEmail("");
        setUnsubscribed(true);
      });
  };

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      style={{
        minHeight: "100vh",
        margin: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!unsubscribed && (
        <Stack spacing={3}>
          <TextField
            fullWidth
            variant="outlined"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            margin="normal"
            color="primary"
            onChange={handleChange}
            required
            style={{ marginTop: "1rem" }}
          ></TextField>

          <Button
            variant="contained"
            color="primary"
            onClick={unsubscribe}
            style={{ minWidth: "10rem" }}
          >
            Unsubscribe
          </Button>
        </Stack>
      )}

      {unsubscribed && (
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{ minHeight: "20vh", padding: "1rem", marginTop: "4rem" }}
        >
          <Typography variant="h4" align="center">
            We're sorry to see you go!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            href="/"
            style={{ marginTop: "1rem" }}
          >
            Home
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Unsubscribe;
