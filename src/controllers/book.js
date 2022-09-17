import {
  validationResult
} from "express-validator";

export const createBook = (req, res, _next) => {
  const resultValidation = validationResult(req);
  if (!resultValidation.isEmpty()) {
    console.log(resultValidation.array());
    return res.status(422).json({
      message: "error validation",
      validation: {
        [resultValidation.array()[0].param]: resultValidation.array()[0].msg
      }
    });
  }
  res.json({
    message: "not implemented!"
  });
};

export const readBook = (req, res, _next) => {
  res.json({
    message: "not implemented!"
  });
};

export const updateBook = (req, res, _next) => {
  res.json({
    message: "not implemented"
  });
};

export const deleteBook = (req, res, _next) => {
  res.json({
    message: "not implemented"
  });
};