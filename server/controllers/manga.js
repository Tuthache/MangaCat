const Manga = require("../models/manga.js");
const connection = require("../config/connection.js");
const { fetchMangaData } = require("../services/retrieveManga.js");

async function createMangaTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS manga (
        manga_id int NOT NULL AUTO_INCREMENT,
        title varchar(255) NOT NULL,
        author_name varchar(255) DEFAULT NULL,
        genre varchar(255) DEFAULT NULL,
        status varchar(45) DEFAULT NULL,
        PRIMARY KEY (manga_id)
    )
  `;
  try {
    await connection.query(query);
    console.log("Created manga table successfully");
  } catch (error) {
    throw error;
  }
}

createMangaTable();

async function retrieveManga(req, res) {
  try {
    const manga = await Manga.findAll();
    res.json(manga);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving manga" });
  }
}

async function populateDatabase(req, res) {
  try {
    const mangaData = await fetchMangaData();

    //console.log("Fetched manga data: ", mangaData);

    const mangaPromises = mangaData.map((manga) => {
      const manga_id = manga.id;
      const title = manga.title.romaji;
      const author = manga.staff.nodes.map((node) => node.name.full).join(", ");
      const genre = manga.genres.join(", ");
      const status = manga.status;

      return Manga.create({ manga_id, title, author, genre, status });
    });

    await Promise.all(mangaPromises);
    res.status(200).json({ message: "Database populated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error during database population" });
    console.error("Error during populating database: ", error);
  }
}

async function getAllManga(req, res) {
  try {
    const query = `
      SELECT * FROM manga
    `;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(500).json({
          message:
            "Error retrieving manga needed to be displayed for manga list",
        });
        console.error("Error retrieving manga for manga list, ", error);
      } else {
        res.json(results); // Send only the result rows as JSON
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving manga needed to be displayed for manga list",
    });
    console.error("Error retrieving manga for manga list, ", error);
  }
}

module.exports = {
  retrieveManga,
  populateDatabase,
  getAllManga,
};
