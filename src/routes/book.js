import {
  Router
} from "express";
import {
  createBook,
  deleteBook,
  readBook,
  updateBook,
} from "../controllers/book.js";
import {
  createValidation as createAndUpdateValidation,
  deleteValidation
} from "../validation/book-validator.js";

const bookRouter = Router();

bookRouter.get("/get-book", readBook);

bookRouter.post("/create-book", createAndUpdateValidation, createBook);

bookRouter.post("/update-book", createAndUpdateValidation , updateBook);

bookRouter.post("/delete-book", deleteValidation, deleteBook);

export default bookRouter;