import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Sheet } from "../../shared/interfaces";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Cart: React.FC = () => {
  const { sheetsInCart, removeSheet, numOfSheets, subtotal } =
    useShoppingCart();

  // const subtotal = sheets.reduce((acc, curr) => {
  //   return acc + curr.price;
  // }, 0);

  return (
    <Grid
      container
      justifyContent="center"
      xs={12}
      className="MuiGrid-wrap-xs-wrap-reverse"
    >
      {sheetsInCart.length > 0 && (
        <Grid item xs={12} md={7} justifyContent="center">
          {sheetsInCart.map((sheet: Sheet, index: number) => (
            <Card key={index} style={{ margin: "1rem"  }} raised={true}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <CardMedia
                    component="img"
                    alt={sheet.title}
                    height="140"
                    image={sheet.snippedImagePath}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CardContent>
                    <Typography variant="h5">{sheet.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {sheet.description}
                    </Typography>
                    <Typography variant="h6">${sheet.price}</Typography>
                    <Button
                      variant="text"
                      onClick={() => removeSheet(sheet.id)}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Grid>
      )}
      {sheetsInCart.length > 0 && (
        <Grid item xs={12} md={5}>
          <Card style={{ margin: "1rem" }}>
            <CardContent>
              <Typography variant="h5">Order Summary</Typography>
              <Typography variant="body2" color="textSecondary">
                {numOfSheets()} Items
              </Typography>
              <Typography variant="h6">Subtotal: ${subtotal()}</Typography>
              <Box display="flex" flexWrap="nowrap" marginTop="1rem">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginRight: ".5rem" }}
                >
                  Check Out
                </Button>
                <Button variant="text" size="small" href="/sheets">
                  Continue Shopping
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )}
      {sheetsInCart.length === 0 && (
        <Grid
          container
          direction="column"
          xs={12}
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "3rem" }}
        >
          <Typography variant="h4" style={{ marginBottom: "2rem" }}>
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            href="/sheets"
          >
            Add some sheets
            <BsChevronRight />
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Cart;
