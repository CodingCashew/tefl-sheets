import { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "@vercel/postgres";
import { Request, Response } from "express";
import { EmailController } from "../shared/interfaces";
const { Pool } = require("pg");
require("dotenv").config();

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
  req: VercelRequest,
  res: VercelResponse,
  next: any
) => {
  // const client = await pool.connect();
  const { name, email } = req.body;
  throw new Error("in joinMailingList")
  // const params = [name, email];

  // const queryString = `INSERT INTO mailingList (name, email) VALUES ($1, $2);`;

  try {
    await sql`INSERT INTO mailingList (name, email) VALUES (${name}, ${email});`;
    // await client.query(queryString, params);
    // res.locals.message = "Success";

    // res.status(200).json({res});
    return next();
  } catch (err) {
    next({
      log: `Error in emailController.joinMailingList: ${err}`,
      message: { err: "Error adding email" },
    });
    // } finally {
    //   client.release();
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
    });
  } finally {
    client.release();
  }
};

emailController.storeOrderDetails = async (
  req: Request,
  res: Response,
  next: any
) => {
  const client = await pool.connect();
  const { name, email, items } = req.body;
  const params = [name, email, items];

  const queryString = `INSERT INTO orders (name, email, items) values ($1, $2, $3);`;

  try {
    await client.query(queryString, params);
    res.locals.message = "Success";
    return next();
  } catch (err) {
    next({
      log: `Error in emailController.unsubscribe: ${err}`,
      message: { err: "Error storing order" },
    });
  } finally {
    client.release();
  }
};

module.exports = emailController;
