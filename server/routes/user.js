const express = require("express");
const { register } = require("../controllers/user.js");
const { userRegisterValidator } = require("../middlewares/user.js");
const connection = require("../config/connection.js");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
});
router.post("/signup", userRegisterValidator, register);

module.exports = router;
