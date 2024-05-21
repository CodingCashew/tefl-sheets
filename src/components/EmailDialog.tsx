import {
  Button,
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

type EmailDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const initialValues = {
  name: "",
  email: "",
};

const EmailDialog: React.FC<EmailDialogProps> = ({ open, setOpen }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const joinMailingList = (e: any) => {
    e.preventDefault();
    // console.log('node.env', process.node.env);
    fetch(`${process.env.REACT_APP_API_URL}/mailingList`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "Success") {
          alert("You have successfully joined our mailing list!");
          setValues({
            name: "",
            email: "",
          });
          setOpen(false);
        }
      })

      .catch((err) => console.log(err));
  };
  return (
    <Dialog onClose={handleClose} open={open} style={{ maxWidth: "100%" }}>
      <DialogTitle style={{ color: primary }}>
        Get our FREE Conversation Questions Sheet
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        style={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      ></IconButton>
      <form onSubmit={joinMailingList}>
        <Grid container direction="column" style={{ padding: "1rem" }}>
          <Typography>
            Join our community focused on educating and engaging learners
            through meaningful practice and receive our Conversation Questions
            Sheet ABSOLUTELY FREE!
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Name"
            name="name"
            value={values.name}
            color="primary"
            onChange={handleChange}
            required
            style={{ marginTop: "1rem" }}
          ></TextField>
          <TextField
            fullWidth
            variant="outlined"
            type="email"
            placeholder="Email Address"
            name="email"
            value={values.email}
            margin="normal"
            color="primary"
            onChange={handleChange}
            required
            style={{ marginTop: "1rem" }}
          ></TextField>
          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: "1rem" }}
            color="secondary"
          >
            Join <BsChevronRight />
          </Button>
        </Grid>
      </form>
    </Dialog>
  );
};

export default EmailDialog;
