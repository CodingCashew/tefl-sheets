import { Request, Response } from "express";
import { EmailController } from "../shared/interfaces";
const { Pool } = require('pg');
require('dotenv').config();

export const emailController: EmailController = {};

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});


emailController.joinMailingList = async (
  req: Request,
  res: Response,
  next: any
) => {
  const client = await pool.connect();
  const { name, email } = req.body;

  const params = [name, email];

  const queryString = `INSERT INTO mailingList (name, email) VALUES ($1, $2);`;

  try {
    await client.query(queryString, params);
    res.locals.message = "Success";
    return next();
  } catch (err) {
    next({
      log: `Error in emailController.joinMailingList: ${err}`,
      message: { err: "Error adding email" },
    })
  } finally {
    client.release();
  }
};

emailController.unsubscribe = async (
  req: Request,
  res: Response,
  next: any
) => {
  const client = await pool.connect();
  const { email } = req.body;

  const queryString = `DELETE FROM mailingList where email=${email};`;

  try {
    await client.query(queryString);
    res.locals.message = "Success";
    return next();
  } catch (err) {
    next({
      log: `Error in emailController.unsubscribe: ${err}`,
      message: { err: "Error unsubscribing" },
    })
  } finally {
    client.release();
  }
};

emailController.sendOrderEmail = async (
  req: Request,
  res: Response,
  next: any
) => {
  const client = await pool.connect();
  const { email, name, items } = req.body;
  console.log('items --->', items);
  console.log("email, name: ", email, name);
  const params = [
    email,
    name,
    items,
  ]

  const queryString = `INSERT INTO mailingList (name, email, items) VALUES ($1, $2, $3);`;

  try {
    await client.query(queryString, params);
    res.locals.message = "Success";
    return next();
  } catch (err) {
    next({
      log: `Error in emailController.unsubscribe: ${err}`,
      message: { err: "Error sending order email" },
    })
  } finally {
    client.release();
  }
};

module.exports = emailController;
