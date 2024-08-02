const UserManga = require("../models/usermanga.js");
const connection = require("../config/connection.js");

async function createUserMangaTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS usermanga (
      user_id int NOT NULL,
      manga_id int NOT NULL,
      reading_status varchar(45) DEFAULT NULL,
      manga_rating tinyint DEFAULT NULL,
      PRIMARY KEY (user_id,manga_id),
      KEY manga_id_idx (manga_id),
      CONSTRAINT manga_id FOREIGN KEY (manga_id) REFERENCES manga (manga_id),
      CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES user (user_id),
      CONSTRAINT usermanga_chk_1 CHECK ((manga_rating between 0 and 10))
    )
  `;

  try {
    await connection.query(query);
    console.log("usermanga table created successfully");
  } catch (error) {
    throw error;
  }
}

createUserMangaTable();

async function addManga(req, res) {
  try {
    const { user_id, manga_id, reading_status, manga_rating } = req.body;
    await UserManga.addManga(user_id, manga_id, reading_status, manga_rating);
  } catch (error) {
    console.error("Error adding Manga: ", error);
    res.status(500).json({ message: "Error adding Manga" });
  }
}

async function removeManga(req, res) {
  try {
    const { user_id, manga_id } = req.body;
    await UserManga.removeManga(user_id, manga_id);
  } catch (error) {
    console.error("Error removing manga: ", error);
    res.status(500).json({ message: "Error removing manga" });
  }
}

async function rateManga(req, res) {
  try {
    const { user_id, manga_id, manga_rating } = req.body;
    await UserManga.rateManga(user_id, manga_id, manga_rating);
  } catch (error) {
    console.error("Error rating manga: ", error);
    res.status(500).json({ message: "Error rating Manga" });
  }
}

async function updateStatusManga(req, res) {
  try {
    const { user_id, manga_id, reading_status } = req.body;
    await UserManga.updateStatusManga(user_id, manga_id, reading_status);
  } catch (error) {
    console.error("Error updating status of Manga: ", error);
    res.status(500).json({ message: "Error updating status of Manga" });
  }
}

module.exports = {
  addManga,
  removeManga,
  rateManga,
  updateStatusManga,
};
