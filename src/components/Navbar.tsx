import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import Badge from "@mui/material/Badge";
import { BsCart3, BsFileEarmarkTextFill } from "react-icons/bs";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar: React.FC = () => {
  const { numOfSheets } = useShoppingCart();
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
              <Badge badgeContent={numOfSheets()} color='success'>
                <BsCart3 size="1.5em" />
              </Badge>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
