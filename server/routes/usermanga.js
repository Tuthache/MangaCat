const express = require("express");
const router = express.Router();
const usermangaController = require("../controllers/usermanga.js");
const connection = require("../config/connection.js");

router.post("/add", usermangaController.addManga);
router.put("/rate", usermangaController.rateManga);
router.put("/status", usermangaController.updateStatusManga);
router.delete("/remove", usermangaController.removeManga);
