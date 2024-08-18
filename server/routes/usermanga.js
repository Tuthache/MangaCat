const express = require("express");
const router = express.Router();
const usermangaController = require("../controllers/usermanga.js");

router.post("/add", usermangaController.addManga);
router.put("/rate", usermangaController.rateManga);
router.put("/status", usermangaController.updateStatusManga);
router.delete("/remove", usermangaController.removeManga);
router.get("/getUserManga", usermangaController.getAllUserManga);
router.get("/getCompletedManga", usermangaController.getCompletedMangaCount);
router.get("/getPlannedManga", usermangaController.getPlannedMangaCount);
router.get("/getCurrentManga", usermangaController.getCurrentMangaCount);

module.exports = router;
