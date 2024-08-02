const connection = require("../config/connection.js");

class Manga {
  constructor(data) {
    this.manga_id = data.manga_id;
    this.title = data.title;
    this.author_name = data.author_name;
    this.genre = data.genre;
    this.status = data.status;
  }
}

module.exports = Manga;
