import { Router } from "express";
import { notFound } from "../controllers/404.js";

const notFoundRouter = Router();

notFoundRouter.use("*", notFound);

export default notFoundRouter;
