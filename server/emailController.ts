// const db = require("./EmailModel.js");
import { Request, Response } from "express";
import { EmailController } from "../shared/interfaces";


export const emailController: EmailController = {};

emailController.joinMailingList = (req: Request, res: Response, next: any): void => {
  const {name, email} = req.body;
  console.log('name, email: ', name, email);

  // const queryString = `SELECT * FROM email;`;

  // db.query(queryString)
  //   .then((data) => {

  // const filteredEmail = temporaryEmail.filter((sheet) => {
  //   return hasSearchParam(sheet, searchParams);
  // });

  res.locals.message = "Success";
  // res.locals.email = data.rows;
  return next();
  // })
  // .catch((err) =>
  //   next({
  //     log: `Error in emailController.getEmail: ${err}`,
  //     message: { err: "Error getting email" },
  //   })
  // );
};
emailController.unsubscribe = (req: Request, res: Response, next: any): void => {
  const {email} = req.body;
console.log('email: ', email);
  // const queryString = `SELECT * FROM email;`;

  // db.query(queryString)
  //   .then((data) => {


  res.locals.message = "Success";
  // res.locals.email = data.rows;
  return next();
  // })
  // .catch((err) =>
  //   next({
  //     log: `Error in emailController.getEmail: ${err}`,
  //     message: { err: "Error getting email" },
  //   })
  // );
};


module.exports = emailController;
