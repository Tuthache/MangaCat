const connection = require("../config/connection.js");

class Usermanga {
  constructor(data) {
    this.user_id = data.user_id;
    this.manga_id = data.manga_id;
    this.reading_status = data.reading_status;
    this.manga_rating = data.manga_rating;
  }

  static async addManga(user_id, manga_id, reading_status, manga_rating) {
    const query =
      "INSERT IGNORE INTO usermanga (user_id, manga_id, reading_status, manga_rating) VALUES (?, ?, ?, ?)";
    const values = [user_id, manga_id, reading_status, manga_rating];

    try {
      await connection.query(query, values);
      return { message: "Manga added to user list successfully" };
    } catch (error) {
      console.error("Error adding manga into usermanga table");
      throw error;
    }
  }

  static async removeManga(user_id, manga_id) {
    const query = "DELETE FROM usermanga WHERE user_id = ? AND manga_id = ?";
    const values = [user_id, manga_id];

    try {
      await connection.query(query, values);
      return { message: "Manga deleted from user list successfully" };
    } catch (error) {
      console.error("Error deleting entry from usermanga table");
      throw error;
    }
  }

  static async rateManga(user_id, manga_id, manga_rating) {
    const query =
      "UPDATE usermanga SET manga_rating = ? where user_id = ? AND manga_id = ?";
    const values = [user_id, manga_id, manga_rating];

    try {
      await connection.query(query, values);
      return { message: "Updated Manga rating successfully" };
    } catch (error) {
      console.error(
        "Error while updating rating of manga from usermanga table"
      );
      throw error;
    }
  }

  static async updateStatusManga(user_id, manga_id, reading_status) {
    const query =
      "UPDATE usermanga SET reading_status = ? WHERE user_id = ? AND manga_id = ?";
    const values = [user_id, manga_id, reading_status];

    try {
      await connection.query(query, values);
      return { message: "Updated Manga status successfully" };
    } catch (error) {
      console.error("Error updating status of manga from usermanga table");
      throw error;
    }
  }
}
