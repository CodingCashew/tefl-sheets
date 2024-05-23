import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import {
  PayPalButtons,
  PayPalScriptProvider,
  ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Sheet } from "../../shared/interfaces";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const { sheetsInCart, setSheetsInCart, removeSheet, numOfSheets, subtotal } =
    useShoppingCart();
  const navigate = useNavigate();

  const initialOptions: ReactPayPalScriptOptions = {
    clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID || "",
  };

  const generateArrayOfPdfIds = (sheets: Sheet[]) => {
    const pdfIds = sheets.map((sheet) => sheet.id);
    return pdfIds;
  };

  const createOrder = (data: any, actions: any) => {
    try {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: `${subtotal()}`,
            },
          },
        ],
      });
    } catch (error) {
      console.error("Error creating order: ", error);
      alert(
        "Error creating order. Please try again or reach out using the Contact link below."
      );
    }
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order
      .capture()
      .then((data: any) => {
        if (data.status === "COMPLETED") {
          fetch(`/storeOrderDetails`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: data.payer.name.given_name + " " + data.payer.name.surname,
              email: data.payer.email_address,
              items: generateArrayOfPdfIds(sheetsInCart),
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data === "Success") {
                setSheetsInCart([]);
                navigate("/thank-you");
              }
            })

            .catch((err) => console.log(err));
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <Grid
      container
      justifyContent="center"
      className="MuiGrid-wrap-xs-wrap-reverse"
      style={{ minHeight: "100vh", marginTop: "5rem" }}
    >
      {sheetsInCart.length > 0 && (
        <Grid item xs={12} md={7}>
          <Button
            variant="text"
            size="small"
            href="/sheets"
            style={{ margin: ".5rem" }}
          >
            <BsChevronLeft /> Continue Shopping
          </Button>
          {sheetsInCart.map((sheet: Sheet, index: number) => (
            <Card key={index} style={{ margin: "1rem" }} raised={true}>
              <Grid container style={{ display: "flex", alignItems: "center" }}>
                <Grid item xs={12} lg={4}>
                  <CardMedia
                    component="img"
                    alt={sheet.title}
                    height="140"
                    image={sheet.snippedImagePath}
                  />
                </Grid>
                <Grid item xs={12} lg={8}>
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
                {numOfSheets()} {numOfSheets() > 1 ? "Items" : "Item"}
              </Typography>
              <Typography variant="h6">Subtotal: ${subtotal()}</Typography>
              <Box display="flex" flexWrap="nowrap" marginTop="1rem">
                <PayPalScriptProvider options={initialOptions}>
                  <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                  />
                </PayPalScriptProvider>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )}
      {sheetsInCart.length === 0 && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "3rem" }}
        >
          <Grid item xs={12}>
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
        </Grid>
      )}
    </Grid>
  );
};

export default Cart;
