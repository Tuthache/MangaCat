const connection = require("../config/connection.js");
const bcrypt = require("bcrypt");

async function createUsersTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS user (
      user_id INT PRIMARY KEY AUTO_INCREMENT,
      user_username VARCHAR(45) NOT NULL,
      user_password VARCHAR(45) NOT NULL,
      user_email VARCHAR(100) UNIQUE NOT NULL
    );
  `;
  try {
    await connection.query(createTableQuery);
    console.log("Users table created successfully.");
  } catch (error) {
    throw error;
  }
}

createUsersTable();

async function register(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertQuery = `
      INSERT INTO user (username, email, password) 
      VALUES (?, ?, ?, ?)
    `;

    const values = [username, email, hashedPassword];

    connection.query(insertQuery, values, (error, result) => {
      if (error) {
        console.error("Error during query execution: ", error);
        res
          .status(500)
          .json({ message: "An error occurred while registering user." });
      }

      const user_id = result.insertId;

      res.status(201).json({
        user_id,
        message: "User registered successfully.",
      });

      console.log("New user ID: ", user_id);
    });
  } catch (error) {
    console.error("Error registering user: ", error);
    res
      .status(500)
      .json({ message: "An error occurred while resgistering user." });
  }
}

module.exports = { register };
