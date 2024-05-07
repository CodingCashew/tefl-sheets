import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import { BsCart3, BsFileEarmarkTextFill } from "react-icons/bs";

const Contact: React.FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <BsFileEarmarkTextFill />
            </IconButton>
          </Link>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              TEFL Sheets
            </Link>
          </Typography>
          <Button color="inherit">
            <Link
              href="/sheets"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Sheets
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              href="/cart"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <BsCart3 size="1.2em" />
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Contact;
