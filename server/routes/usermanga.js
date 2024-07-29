const express = require("express");
const router = express.Router();
const usermangaController = require("../controllers/usermanga.js");
const connection = require("../config/connection.js");

router.post("/add");
router.put("/rate");
router.delete("/remove");
