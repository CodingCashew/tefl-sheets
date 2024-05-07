import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Sheet } from "../../shared/interfaces";

const Sheets: React.FC = () => {
  const [sheets, setSheets] = useState([] as Sheet[]);

  useEffect(() => {
    fetch("/getSheets")
      .then((response) => response.json())
      .then((data) => setSheets(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div style={{margin: "2rem"}}>
    <div className="d-flex flex-wrap justify-content-center" >
      {sheets.map((sheet, index) => (
        <Card style={{ minWidth: 300, maxWidth: 345, margin: "1rem" }} key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="PDF sheet"
              height="140"
              image={sheet.snippedImagePath}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Card title
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            href="/cart"
            style={{
              margin: "1rem",
            }}
          >
            Add to Cart
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            href={`/sheets/${sheet.id}`}
            style={{
              margin: ".5rem",
            }}
          >
            Details
          </Button>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default Sheets;
