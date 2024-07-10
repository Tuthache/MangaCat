const connection = require("../config/connection.js");

class Manga {
  constructor(data) {
    this.manga_id = data.manga_id;
    this.name = data.name;
    this.author_id = data.author_id;
  }
}
