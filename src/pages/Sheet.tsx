import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import React from 'react';
import { useParams } from "react-router-dom";
import { Sheet as SheetType } from "../../shared/interfaces";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Sheet: React.FC = () => {
  const { sheetId } = useParams<{ sheetId: string }>();
  const [sheet, setSheet] = useState({} as SheetType);
  const { addSheet } = useShoppingCart();

  useEffect(() => {
    fetch(`/getSheet/${sheetId}`)
      .then((response) => response.json())
      .then((data) => setSheet(data))
      .catch((error) => console.error("Error:", error));
  }, [sheetId]);

  return (
    <Grid container spacing={3} xs={11} md={12} style={{ margin: "1rem", marginTop: "5rem"}}>
      <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
        <img alt={sheet.title} width="100%" src={sheet.snippedImagePath} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">{sheet.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary">
          {sheet.description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">${sheet.price}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" size="large" onClick={() => addSheet(sheet)}>
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default Sheet;
