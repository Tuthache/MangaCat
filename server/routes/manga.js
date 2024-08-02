const express = require("express");
const { retrieveManga, populateDatabase } = require("../controllers/manga.js");
const router = express.Router();

router.get("/retrieveManga", retrieveManga);
router.post("/populate", populateDatabase);

module.exports = router;
