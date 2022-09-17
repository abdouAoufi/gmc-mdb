import express from "express";
import {
  INFO
} from "./utils/utils.js";
import bookRouter from "./routes/book.js";
import notFoundRouter from "./routes/404.js";
import dbClient from "./utils/database.js";
import userRouter from "./routes/user.js";

const app = express();

//! important
app.use(express.json());

app.use(bookRouter);
app.use(userRouter)
app.use(notFoundRouter);

const launchWebServer = () => {
  app.listen(INFO.PORT, () => {
    console.log("SERVER STARTED AT ", INFO.PORT);
  });
}


export const bookDB = dbClient.db("books"); 
export const userDB = dbClient.db("users"); 

dbClient.connect()
  .then(() => {
    console.log("MONGODB CONNECTED")
    launchWebServer();
  })
  .catch(() => console.log("ERROR CONNECTING WITH MONGODB"))