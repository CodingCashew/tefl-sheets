const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
require("dotenv").config();

const sheetsController = require("../server/sheetsController");
const emailController = require("../server/emailController");
console.log("port", PORT);

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/api/getSheets", sheetsController.getSheets, (req, res) => {
  return res.status(200).json(res.locals.sheets);
});

app.get("/api/getSheet/:id", sheetsController.getSheet, (req, res) => {
  return res.status(200).json(res.locals.sheet);
});

app.post("/api/mailingList", emailController.joinMailingList, (req, res) => {
  return res.status(200).json(res);
});

app.post("/api/unsubscribe", emailController.unsubscribe, (req, res) => {
  return res.status(200).json(res.locals.message);
});

app.post(
  "/api/storeOrderDetails",
  emailController.storeOrderDetails,
  (req, res) => {
    return res.status(201).json(res.locals.message);
  }
);

app.use("*", (req, res) =>
  res.status(404).send("The page you are looking for does not exist.")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred." },
  };
  const errObj = Object.assign({}, defaultErr, err);

  res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
