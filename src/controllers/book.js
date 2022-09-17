import {
  validationResult
} from "express-validator";
import {
  bookDB
} from "../server.js";
import dbClient from "../utils/database.js";

const BOOK_DB_NAME = "list-books"

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
  bookDB.collection(BOOK_DB_NAME).insertOne(req.body)
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
  bookDB.collection(BOOK_DB_NAME).find().toArray().then((result) => {
    res.json({
      books: result
    })
  }).catch(err => {
    res.json({
      message: "error data base"
    })
  })
};

export const updateBook = (req, res, _next) => {
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
  bookDB.collection(BOOK_DB_NAME).findOneAndUpdate({
    title: req.body.title
  }, {
    $set: req.body
  }).then(result => {
    if (result.value) {
      res.json({
        message: "book updated successfully"
      })
    } else {
      res.json({
        message: "this book does not exist"
      })
    }
  })
};

export const deleteBook = (req, res, _next) => {
  const resultValidation = validationResult(req);
  if (!resultValidation.isEmpty()) {
    return res.status(422).json({
      message: "error title",
      validation: {
        [resultValidation.array()[0].param]: resultValidation.array()[0].msg
      }
    });
  }
  bookDB.collection(BOOK_DB_NAME).findOneAndDelete({
    title: req.body.title
  }).then(result => {
    if (result.value) {
      res.json({
        message: "Book deleted"
      })
    } else {
      res.json({
        message: "Sorry this book does not exist"
      })
    }
  })
};