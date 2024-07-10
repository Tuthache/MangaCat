const bcrypt = require("bcrypt");

class User {
  constructor(data, connection) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.connection = data.connection;
  }

  async authenticateUser(plainTextPassword) {
    try {
      return await bcrypt.compare(plainTextPassword, this.password);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = User;
