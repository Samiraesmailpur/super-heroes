const express = require("express");
const ctrl = require("../../controllers/heroes");
const upload = require("../../uploadConfig");

const router = express.Router();

router.get("/", ctrl.getHeroes);
router.get("/:heroId", ctrl.getHeroById);
router.delete("/:heroId", ctrl.removeHeroById);
router.patch("/:heroId", upload.single("images"), ctrl.updateHero);
router.post("/", upload.single("images"), ctrl.createHero);

module.exports = router;
