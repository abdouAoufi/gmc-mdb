import {
 body
} from "express-validator";


export const signupValidation = [
 body("username").isString().isLength({
  min: 6,
  max: 20
 }),
 body("email").isEmail(),
 body("password").isString().isStrongPassword(),
 body("dob").isDate()
]


export const loginValidation = [
 body("username").isString().isLength({
  min: 6,
  max: 20
 }),
 body("password").isString().isLength({
  min: 8
 })
]