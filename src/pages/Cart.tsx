import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
// import DeleteIcon from '@material-ui/icons/Delete';
// import { BsFillTrash3Fill } from "react-icons/bs";
import { Sheet } from "../../shared/interfaces";

const Cart: React.FC = () => {
  const products: Sheet[] = [
    {
      id: 1,
      title: "Test Sheet",
      type: "Test Type",
      subject: "Test Subject",
      level: "Test Level",
      language: "Test Language",
      pdfUrl: "/assets/dummyPDFSNIP.jpg",
      snippedImagePath: "/assets/dummyPDFSNIP.jpg",
      createdDate: new Date(),
      updatedDate: new Date(),
      description:
        "This is a longer description of the product that includes some of the most important information about the product in question.",
      blurb: "Short Blurb",
      price: 4,
    },
    {
      id: 2,
      title: "Test Sheet2",
      type: "Test Type2",
      subject: "Test Subject2",
      level: "Test Level2",
      language: "Test Language2",
      pdfUrl: "/assets/dummyPDFSNIP.jpg",
      snippedImagePath: "/assets/dummyPDFSNIP.jpg",
      createdDate: new Date(),
      updatedDate: new Date(),
      description:
        "This is a longer description of the product that includes some of the most important information about the product in question.",
      blurb: "Short Blurb",
      price: 4,
    },
    {
      id: 3,
      title: "Test Sheet3",
      type: "Test Type3",
      subject: "Test Subject3",
      level: "Test Level3",
      language: "Test Language3",
      pdfUrl: "/assets/dummyPDFSNIP.jpg",
      snippedImagePath: "/assets/dummyPDFSNIP.jpg",
      createdDate: new Date(),
      updatedDate: new Date(),
      description:
        "This is a longer description of the product that includes some of the most important information about the product in question.",
      blurb: "Short Blurb",
      price: 4,
    },
  ];
  const subtotal = products.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
      <Grid container xs={11} md={9}  >
        <Grid item xs={12} md={8}>
          {products.map((product: Sheet, index: number) => (
            <Card key={index} style={{ margin: "1rem" }}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    height="140"
                    image={product.snippedImagePath}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CardContent>
                    <Typography variant="h5">{product.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6">${product.price}</Typography>
                    <Button
                      // startIcon={<BsFillTrash3Fill />}
                      variant="text"
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{ margin: "1rem" }}>
            <CardContent>
              <Typography variant="h5">Order Summary</Typography>
              <Typography variant="body2" color="textSecondary">
                {products.length} Items
              </Typography>
              <Typography variant="h6">Subtotal: ${subtotal}</Typography>
              <Box display="flex" justifyContent="flex-end" marginTop="1rem">
                <Button variant="contained" color="secondary">
                  Check Out
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
};

export default Cart;
