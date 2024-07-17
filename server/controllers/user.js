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
