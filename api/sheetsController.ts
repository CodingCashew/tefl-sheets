// const db = require("./SheetsModel.js");
import { Request, Response } from "express";
import { Sheet, SheetsController } from "../shared/interfaces";

const temporarySheets: Sheet[] = [
  {
    id: 1,
    title: "Present Progressive Worksheet",
    type: "Worksheet",
    tags: ["Present Progressive"],
    level: "Low Intermediate",
    languages: ["British English"],
    pdfVersions: ["standard"],
    pdfUrl: "/assets/dummyPDF.jpg",
    snippedImagePath: "/assets/dummyPDFSNIP.jpg",
    createdDate: new Date(),
    updatedDate: new Date(),
    description:
      "This worksheet is designed to help students practice the present progressive tense. It includes a variety of exercises that will help students understand the tense and use it correctly. The worksheet is suitable for low-intermediate students.",
    blurb: "Practice the present progressive with this worksheet.",
    price: 4,
  },
  {
    id: 2,
    title: "Interviewing Vocabulary Exam",
    type: "Exam",
    tags: ["Interviewing Vocabulary", "Business English"],
    level: "Advanced",
    languages: ["American English"],
    pdfVersions: ["standard"],
    pdfUrl: "/assets/dummyPDF.jpg",
    snippedImagePath: "/assets/dummyPDFSNIP.jpg",
    createdDate: new Date(),
    updatedDate: new Date(),
    description:
      "This exam is designed to test students' knowledge of vocabulary related to job interviews. It includes a variety of questions that will challenge students to demonstrate their understanding of the vocabulary. The exam is suitable for advanced students.",
    blurb: "Practice interviewing vocabulary with this exam.",
    price: 5,
  },
  {
    id: 3,
    title: "Fun Time-Telling Adventure Quiz",
    type: "Quiz",
    tags: ["Telling Time"],
    level: "Beginner",
    languages: ["American English"],
    pdfVersions: ["standard"],
    pdfUrl: "/assets/dummyPDF.jpg",
    snippedImagePath: "/assets/dummyPDFSNIP.jpg",
    createdDate: new Date(),
    updatedDate: new Date(),
    description:
      "This quiz is designed to help students practice telling time. It includes a variety of questions that will challenge students to read and understand the time. The quiz is suitable for beginner students.",
    blurb: "Practice telling time with this quiz.",
    price: 3,
  },
];

const hasSearchParam = (sheet: Sheet, searchParams = ""): boolean => {
  const arrayOfKeywords = searchParams.split(" ");
  for (let i = 0; i < arrayOfKeywords.length; i++) {
    for (let j = 0; j < sheet.tags.length; j++) {
      if (
        sheet.tags[j].toLowerCase().includes(arrayOfKeywords[i].toLowerCase())
      ) {
        return true;
      }
    }
  }
  return false;
};

export const sheetsController: SheetsController = {};

sheetsController.getSheets = (req: Request, res: Response, next: any): void => {
  console.log("in getSheets ----------------------->");
  const searchParams = req.query.search as string;
  try {
    // const queryString = `SELECT * FROM sheets;`;

    // db.query(queryString)
    //   .then((data) => {

    const filteredSheets = temporarySheets.filter((sheet) => {
      return hasSearchParam(sheet, searchParams);
    });

    res.locals.sheets = filteredSheets;
    console.log('res.locals: ', res.locals);
    // res.locals.sheets = data.rows;
    return next();
  } catch (err: any) {
    // })
    next({
      log: `Error in sheetsController.getSheets: ${err}`,
      message: { err: "Error getting sheets" },
    });
  }
};

sheetsController.getSheet = (req: Request, res: Response, next: any): void => {
  const id = req.params.id;
  try {
    const sheet = temporarySheets.find((sheet) => sheet.id === Number(id));
    // const queryString = `SELECT * FROM sheets where id=${id};`;

    // db.query(queryString)
    //   .then((data) => {
    res.locals.sheet = sheet;
    // res.locals.sheets = data.rows;
    return next();
  } catch (err: any) {
    // })
    // .catch((err) =>
    next({
      log: `Error in sheetsController.getSheet: ${err}`,
      message: { err: "Error getting sheet" },
    });
    // );
  }
};

module.exports = sheetsController;
