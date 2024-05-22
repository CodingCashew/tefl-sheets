import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Sheet } from "../../shared/interfaces";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Sheets: React.FC = () => {
  const [sheets, setSheets] = useState([] as Sheet[]);
  const { addSheet } = useShoppingCart();
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    fetch(`/getSheets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response: any) => response.json())
      .then((data: any) => setSheets(data))
      .catch((error: any) => console.log("Error:", error));
  }, []);

  const searchSheets = () => {
    if (!searchParams) return;

    fetch(`/getSheets?search=${searchParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setSheets(data))
      .catch((error) => console.log("Error:", error));
  };

  return (
    <div style={{ margin: "2rem", minHeight: "100vh", marginTop: "5rem" }}>
      <h1>Fuck this piece of shit what the hell is it fucking doing? 304? Fuck you why the hell is this not working. It has been modified you piece of shit. Jävlar förbannat piiiiinche chingadera este sitio que no funcciona vete al infierno hijo de puta </h1>
      {/* <Grid
        container
        justifyContent="center"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        <Grid item xs={12} sm={9} md={6}>
          <Paper
            style={{
              padding: "2px 4px",
              display: "flex",
            }}
          >
            <InputBase
              style={{ marginLeft: 1, flex: 1 }}
              placeholder="Search Sheets"
              inputProps={{ "aria-label": "search sheets" }}
              value={searchParams}
              onChange={(e) => setSearchParams(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchSheets();
                }
              }}
            />
            <IconButton
              type="button"
              style={{ padding: "10px" }}
              aria-label="search"
              onClick={() => {
                searchSheets();
              }}
            >
              <BsSearch />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <div className="d-flex flex-wrap justify-content-center">
        {sheets.map((sheet, index) => (
          <Card
            style={{ minWidth: 300, maxWidth: 345, margin: "1rem" }}
            key={index}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="PDF sheet"
                height="140"
                image={sheet.snippedImagePath}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ minHeight: "70px" }}
                >
                  {sheet.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ minHeight: "40px" }}
                >
                  {sheet.blurb}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              style={{
                marginLeft: "1rem",
                marginBottom: "1rem",
              }}
              onClick={() => addSheet(sheet)}
            >
              Add to Cart
            </Button>
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              href={`/sheets/${sheet.id}`}
              style={{
                marginLeft: "1rem",
                marginBottom: "1rem",
              }}
            >
              Details
            </Button>
          </Card>
        ))}
      </div> */}
    </div>
  );
};

export default Sheets;
