import {
 validationResult
} from "express-validator";
import {
 userDB
} from "../server.js";


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
 userDB.collection("users").insertOne(req.body).then(() => {
  res.json({
   message: "Account created"
  })
 }).catch(() => {
  res.json({
   message: "Failed to create your account"
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
  if (result.password === req.body.password) {
   return res.status(201).json({
    message: "Welcome"
   })
  }
  res.status(420).json({
   message: "password wrong"
  })
 })
}