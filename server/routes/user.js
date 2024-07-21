const express = require("express");
const { register } = require("../controllers/user.js");
const { userRegisterValidator } = require("../middlewares/user.js");
const connection = require("../config/connection.js");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and Password are required" });
  }

  try {
    const query = "SELECT * FROM user WHERE email = ?";
    connection.query(query, [email], async (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Internal Sever Error" });
      }

      if (result.length == 0) {
        return res
          .status(401)
          .json({ Login: false, error: "Invalid email or password" });
      }

      const user = result[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res
          .status(401)
          .json({ Login: false, error: "Invalid email or password" });
      }

      return res.status(200).json({
        Login: true,
        message: "Login Successful",
      });
    });
  } catch (error) {
    console.error("Error during login: ", error);
    return res.status(500).json({ error: "Intenal server error" });
  }
});

router.post("/signup", userRegisterValidator, register);

module.exports = router;
