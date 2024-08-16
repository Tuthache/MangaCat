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
    res.status(200).json({ message: "Manga added successfully" });
  } catch (error) {
    console.error("Error adding Manga: ", error);
    res.status(500).json({ message: "Error adding Manga" });
  }
}

async function removeManga(req, res) {
  try {
    const { user_id, manga_id } = req.body;
    await UserManga.removeManga(user_id, manga_id);
    res.status(200).json({ message: "Manga removed successfully" });
  } catch (error) {
    console.error("Error removing manga: ", error);
    res.status(500).json({ message: "Error removing manga" });
  }
}

async function rateManga(req, res) {
  try {
    const { user_id, manga_id, manga_rating } = req.body;
    await UserManga.rateManga(user_id, manga_id, manga_rating);
    res.status(200).json({ message: "Manga rated successfully" });
  } catch (error) {
    console.error("Error rating manga: ", error);
    res.status(500).json({ message: "Error rating Manga" });
  }
}

async function updateStatusManga(req, res) {
  try {
    const { user_id, manga_id, reading_status } = req.body;
    await UserManga.updateStatusManga(user_id, manga_id, reading_status);
    res.status(200).json({ message: "Manga status updated successfully" });
  } catch (error) {
    console.error("Error updating status of Manga: ", error);
    res.status(500).json({ message: "Error updating status of Manga" });
  }
}

async function getAllUserManga(req, res) {
  try {
    const query = `
     SELECT um.user_id, um.manga_id, um.reading_status, um.manga_rating,
            m.title, m.author_name, m.genre, m.status
      FROM usermanga um
      JOIN manga m ON um.manga_id = m.manga_id
      WHERE um.user_id = ?
    `;
    const values = req.query.user_id;
    connection.query(query, values, (error, results) => {
      if (error) {
        res
          .status(500)
          .json({ message: "Error retrieving manga for specified user" });
        console.error("Error retrieving manga for specified user: ", error);
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.error("Error retrieving manga from specified user: ", error);
    res
      .status(500)
      .json({ message: "Error retrieving manga from specified user" });
  }
}

async function getCompletedMangaCount(req, res) {
  try {
    const { user_id } = req.body;
    await UserManga.getCompletedMangaCount(user_id);
    res
      .status(200)
      .json({ message: "Retrieved count of completed manga successfully" });
  } catch (error) {
    console.error("Error retrieving count of completed Manga: ", error);
    res
      .status(500)
      .json({ message: "Error retrieving count of completed Manga" });
  }
}

async function getPlannedMangaCount(req, res) {
  try {
    const { user_id } = req.body;
    await UserManga.getPlannedMangaCount(user_id);
    res
      .status(200)
      .json({ message: "Retrieved count of planned manga successfully" });
  } catch (error) {
    console.error("Error retrieving count of planned Manga: ", error);
    res
      .status(500)
      .json({ message: "Error retrieving count of planned Manga" });
  }
}

async function getCurrentMangaCount(req, res) {
  try {
    const { user_id } = req.body;
    await UserManga.getCurrentMangaCount(user_id);
    res
      .status(200)
      .json({ message: "Retrieved count of current manga successfully" });
  } catch (error) {
    console.error("Error retrieving count of current Manga: ", error);
    res
      .status(500)
      .json({ message: "Error retrieving count of current Manga" });
  }
}

module.exports = {
  addManga,
  removeManga,
  rateManga,
  updateStatusManga,
  getAllUserManga,
  getCompletedMangaCount,
  getPlannedMangaCount,
  getCurrentMangaCount,
};
