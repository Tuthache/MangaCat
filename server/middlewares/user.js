const { body, validationResult } = require("express-validator");

const userRegisterValidator = [
    body("name")
     .notEmpty()
     .withMessage("Username is required")
     .isLength({min: 5, max: 20})
     .withMessage
];
