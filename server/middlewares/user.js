const { body, validationResult } = require("express-validator");

const userRegisterValidator = [
  body("name")
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 5, max: 20 })
    .withMessage("Username must be within 5 to 20 characters"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isLength({ min: 5, max: 40 })
    .withMessage("Email must be within 5 to 40 characters"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 5, max: 20 })
    .withMessage("Password must be within 5 to 20 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const firstError = errors.array()[0].msg;
    }
    next();
  },
];
module.exports = { userRegisterValidator };
