import {
 validationResult
} from "express-validator";
import {
 userDB
} from "../server.js";
import bcrypt from "bcryptjs"


export const signupController = (req, res, next) => {
 const resultValidation = validationResult(req);
 if (!resultValidation.isEmpty()) {
  return res.status(422).json({
   message: "error validation",
   validation: {
    [resultValidation.array()[0].param]: resultValidation.array()[0].msg
   }
  });
 }
 const user = req.body;
 bcrypt.hash(user.password, 12, (err, hashedValue) => {
  user.password = hashedValue;
  userDB.collection("users").insertOne(user).then(() => {
   res.json({
    message: "Account created"
   })
  }).catch(() => {
   res.json({
    message: "Failed to create your account"
   })
  })
 })

}


export const loginController = (req, res, next) => {
 const resultValidation = validationResult(req);
 if (!resultValidation.isEmpty()) {
  return res.status(422).json({
   message: "error validation",
   validation: {
    [resultValidation.array()[0].param]: resultValidation.array()[0].msg
   }
  });
 }
 userDB.collection("users").findOne({
  username: req.body.username
 }).then(result => {
  if (!result) {
   return res.status(404).json({
    message: "User not found"
   })
  }
  bcrypt.compare(req.body.password, result.password).then(result => {
   if (result === true) {
    return res.status(201).json({
     message: "Welcome"
    })
   }
   res.status(420).json({
    message: "password wrong"
   })
  })
 })
}