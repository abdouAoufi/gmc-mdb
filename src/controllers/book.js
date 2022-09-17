import {
  validationResult
} from "express-validator";
import {
  bookDB
} from "../server.js";

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
  bookDB.collection("list-books").insertOne(req.body)
  .then(() => {
    res.status(201).json({
      message: "Book created !!"
    })
  }).catch((err) => {
    console.log(err);
    res.status(400).json({
      message: "error database"
    })
  }).finally(() => {
    console.log("END CONNECTION")
  })
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