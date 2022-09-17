import express from "express";
import {
  INFO
} from "./utils/utils.js";
import bookRouter from "./routes/book.js";
import notFoundRouter from "./routes/404.js";
import dbClient from "./utils/database.js";

const app = express();

//! important
app.use(express.json());

app.use(bookRouter);
app.use(notFoundRouter);

const launchWebServer = () => {
  app.listen(INFO.PORT, () => {
    console.log("SERVER STARTED AT ", INFO.PORT);
  });
}

dbClient.connect()
  .then(() => {
    console.log("MONGODB CONNECTED")
    launchWebServer();
  })
  .catch(() => console.log("ERROR CONNECTING WITH MONGODB"))