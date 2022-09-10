import { Router } from "express";
import {
  createBook,
  deleteBook,
  readBook,
  updateBook,
} from "../controllers/book.js";

const bookRouter = Router();

bookRouter.get("/get-book", readBook);

bookRouter.post("/create-book", createBook);

bookRouter.post("/update-book", updateBook);

bookRouter.post("/delete-book", deleteBook);

export default bookRouter;
