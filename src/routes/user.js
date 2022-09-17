import {
 Router
} from "express";
import {
 signupController,
 loginController
} from "../controllers/user.js"
import {
 loginValidation,
 signupValidation
} from "../validation/user-validation.js";


const userRouter = Router();


userRouter.post("/signup", signupValidation, signupController);


userRouter.post("/login", loginValidation, loginController)

export default userRouter;