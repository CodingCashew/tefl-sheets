// const db = require("./SheetsModel.js");
import { Request, Response } from "express";
import { Sheet, SheetsController } from "../shared/interfaces";

const temporarySheets: Sheet[] = [
  {
    id: 1,
    title: "Test Sheet",
    type: "Test Type",
    subject: "Test Subject",
    level: "Test Level",
    language: "Test Language",
    pdfUrl: "/assets/dummyPDF.jpg",
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
    pdfUrl: "/assets/dummyPDF.jpg",
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
    pdfUrl: "/assets/dummyPDF.jpg",
    snippedImagePath: "/assets/dummyPDFSNIP.jpg",
    createdDate: new Date(),
    updatedDate: new Date(),
    description:
      "This is a longer description of the product that includes some of the most important information about the product in question.",
    blurb: "Short Blurb",
    price: 4,
  },
];

export const sheetsController: SheetsController = {};

sheetsController.getSheets = (req: Request, res: Response, next: any): void => {
  // const queryString = `SELECT * FROM sheets;`;

  // db.query(queryString)
  //   .then((data) => {
  res.locals.sheets = temporarySheets;
  // res.locals.sheets = data.rows;
  return next();
  // })
  // .catch((err) =>
  //   next({
  //     log: `Error in sheetsController.getSheets: ${err}`,
  //     message: { err: "Error getting sheets" },
  //   })
  // );
};

module.exports = sheetsController;
