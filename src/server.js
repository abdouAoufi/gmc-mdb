import express from "express";
import { INFO } from "./utils/utils.js";
import bookRouter from "./routes/book.js";
import notFoundRouter from "./routes/404.js";

const app = express();

//! important
app.use(express.json());

app.use(bookRouter);

app.use(notFoundRouter)

app.listen(INFO.PORT, () => {
  console.log("SERVER STARTED AT ", INFO.PORT);
});
