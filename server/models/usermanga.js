const connection = require("../config/connection.js");

class Usermanga {
  constructor(data) {
    this.user_id = data.user_id;
    this.manga_id = data.manga_id;
    this.reading_status = data.reading_status;
  }

  static async addManga(user_id, manga_id, status) {}

  static async removeManga(user_id, manga_id) {}

  static async rateManga(user_id, manga_id, status) {}
}
