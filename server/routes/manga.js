const express = require("express");
const {
  retrieveManga,
  populateDatabase,
  getAllManga,
} = require("../controllers/manga.js");
const router = express.Router();

router.get("/retrieveManga", retrieveManga);
router.post("/populate", populateDatabase);
router.get("/getAllManga", getAllManga);

module.exports = router;
