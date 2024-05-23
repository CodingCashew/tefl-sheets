import { v4 as uuidv4 } from "uuid";
import { PaymentController } from "../shared/interfaces";
// const db = require("./SheetsModel.js");
import { Request, Response } from "express";
const fetch = require("node-fetch");

export const paymentController: PaymentController = {};

const requestId = uuidv4();

paymentController.pay = async (
  req: Request,
  res: Response,
  next: any
): Promise<void> => {
  throw new Error("in pay");
  const { orderID } = req.body;
  try {
    const response = await fetch(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          "PayPal-Request-Id": requestId,
          "Content-Type": "application/json",
          Authorization: `Basic ${process.env.REACT_APP_PAYPAL_CLIENT_ID}:${process.env.REACT_APP_PAYPAL_CLIENT_SECRET}`,
        },
      }
    );

    if (response.status !== 201) {
      throw new Error("Payment failed");
    }

    res.json({ response });
    res.locals.response = response;
    return next();
  } catch (error: any) {
    res.status(500).json({ error: error });
  }
};

module.exports = paymentController;
