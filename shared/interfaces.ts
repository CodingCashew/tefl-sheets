import { Request, Response } from "express";

export interface SheetsController {
  getSheets?: (req: Request, res: Response, next: any) => void;
}

export interface Sheet {
  id: number;
  title: string;
  type: string;
  subject: string;
  level: string;
  language: string;
  pdfUrl: string;
  snippedImagePath: string;
  createdDate: Date;
  updatedDate: Date;
  description: string;
  blurb: string;
  price: number;
}