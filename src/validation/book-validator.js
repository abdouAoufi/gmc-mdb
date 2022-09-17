import { body } from "express-validator";

export const createValidation = [
  body("title").isString().isLength({ min: 3, max: 20 }),
  body("author").isString().isLength({ min: 2, max: 25 }),
  body("releaseDate").isDate(),
  body("numOfPage").isNumeric(),
  body("IBAN").isString().isLength({ min: 5 }).optional(),
];
