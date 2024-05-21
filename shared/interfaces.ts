import { Request, Response } from "express";
import { ReactNode } from "react";

export interface SheetsController {
  getSheets?: (req: Request, res: Response, next: any) => void;
  getSheet?: (req: Request, res: Response, next: any) => void;
}
export interface EmailController {
  joinMailingList?: (req: Request, res: Response, next: any) => void;
  unsubscribe?: (req: Request, res: Response, next: any) => void;
  storeOrderDetails?: (req: Request, res: Response, next: any) => void;
}
export interface PaymentController {
  pay?: (req: Request, res: Response, next: any) => void;
}

export interface Sheet {
  id: number;
  title: string;
  type: string;
  tags: string[];
  level: string;
  languages: string[];
  pdfVersions: string[];
  pdfUrl: string;
  snippedImagePath: string;
  createdDate: Date;
  updatedDate: Date;
  description: string;
  blurb: string;
  price: number;
}

export type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type ShoppingCartContextType = {
  sheetsInCart: Sheet[];
  setSheetsInCart: (sheets: Sheet[]) => void;
  addSheet: (courseInfo: Sheet) => void;
  removeSheet: (id: number) => void;
  resetCart: () => void;
  numOfSheets: () => number;
  subtotal: () => number;
};
