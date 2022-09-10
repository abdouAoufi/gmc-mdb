import express from "express";
import { INFO } from "./utils/utils.js";

const app = express();

//! important
app.use(express.json());

app.listen(INFO.PORT, () => {
  console.log("SERVER STARTED AT ", INFO.PORT);
});
