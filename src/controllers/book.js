import { validationResult } from "express-validator";

export const createBook = (req, res, _next) => {
  const resultValidation = validationResult(req);
  if (!resultValidation.isEmpty()) {
    console.log(resultValidation.array());
    return res.json({ message: "error validation" });
  }
  res.json({ message: "not implemented!" });
};

export const readBook = (req, res, _next) => {
  res.json({ message: "not implemented!" });
};

export const updateBook = (req, res, _next) => {
  res.json({ message: "not implemented" });
};

export const deleteBook = (req, res, _next) => {
  res.json({ message: "not implemented" });
};
B