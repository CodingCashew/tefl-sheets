import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact: React.FC = () => {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yllui2c",
        "template_er60uhs",
        e.target,
        "QienPfDBNCjDSmqKi"
      )
      .then((response: any) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message Submitted");
        setValues({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err: any) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <Container>
      <Box
        //  component="form"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <div >
          <Grid
            container
            direction="column"
            spacing={3}
            style={{ margin: ".5rem", marginTop: "1rem" }}
          >
            <Grid item xs={11} md={7}>
              <Typography variant="h5" color="primary">
                Have any inquiries, feedback, or suggestions?
              </Typography>
            </Grid>
            <Grid item xs={11} md={7}>
              <Typography variant="h6">
                We would love to hear from you.
              </Typography>
            </Grid>
            <Grid item xs={11} md={7}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Name"
                name="name"
                value={values.name}
                color="primary"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={11} md={7}>
              <TextField
                fullWidth
                variant="outlined"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                margin="normal"
                color="primary"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={11} md={7}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Message"
                name="message"
                value={values.message}
                color="primary"
                multiline
                minRows={5}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit" color="secondary" onClick={sendEmail}>
                Submit Message <BsChevronRight />
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
};

export default Contact;
