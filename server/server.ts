'./sheetsController';
import { Request, Response } from 'express';
const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;
require("dotenv").config();
const sheetsController = require ('./sheetsController');

// parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static and html
app.use(express.static(path.resolve(__dirname, "../src/styles.css")));
app.use(express.static(path.resolve(__dirname, "../src/assets/")));
app.get("/", (req: Request, res: Response) => {
  res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/getSheets", sheetsController.getSheets, (req:Request, res:Response) => {
  return res.status(200).json(res.locals.sheets);
});

// requests to an unknown route
app.use("*", (req: Request, res: Response) =>
  res.status(404).send("The page you are looking for does not exist.")
);

// global error handler
app.use((err: any, req: Request, res: Response, next: any) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred." },
  };
  const errObj = Object.assign({}, defaultErr, err);

  res.status(errObj.status).json(errObj.message);
});

// server listening
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;