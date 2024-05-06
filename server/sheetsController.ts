// const db = require("./SheetsModel.js");
import { Request, Response } from "express";

interface Sheet {
  id: number;
  title: string;
  type: string;
  subject: string;
  level: string;
  language: string;
  pdfUrl: string;
  createdDate: Date;
  updatedDate: Date;
}

const temporarySheet1: Sheet = {
  id: 1,
  title: "Test Sheet",
  type: "Test Type",
  subject: "Test Subject",
  level: "Test Level",
  language: "Test Language",
  pdfUrl: "Test URL",
  createdDate: new Date(),
  updatedDate: new Date(),
};

const temporarySheet2: Sheet = {
  id: 1,
  title: "Test Sheet",
  type: "Test Type",
  subject: "Test Subject",
  level: "Test Level",
  language: "Test Language",
  pdfUrl: "Test URL",
  createdDate: new Date(),
  updatedDate: new Date(),
};

interface SheetsController {
  getSheets?: (req: Request, res: Response, next: any) => void;
}

export const sheetsController: SheetsController = {};

sheetsController.getSheets = (req: Request, res: Response, next: any): void => {
  // const queryString = `SELECT * FROM sheets;`;

  // db.query(queryString)
  //   .then((data) => {
  res.locals.sheets = [temporarySheet1, temporarySheet2];
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
