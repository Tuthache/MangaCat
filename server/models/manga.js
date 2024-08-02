const connection = require("../config/connection.js");

class Manga {
  constructor(data) {
    this.manga_id = data.manga_id;
    this.title = data.title;
    this.author_name = data.author_name;
    this.genre = data.genre;
    this.status = data.status;
  }

  static async create(data) {
    const query = `
      INSERT INTO manga (manga_id, title, author_name, genre, status)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [
      data.manga_id,
      data.title,
      data.author_name,
      data.genre,
      data.status,
    ];

    try {
      await connection.query(query, values);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Manga;
