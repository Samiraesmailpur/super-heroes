const { SuperHero } = require("../models/heroes");
const { HttpError } = require("../helpers/HttpError");
const fs = require("fs/promises");
const path = require("path");

const baseUrl = "http://localhost:5050/";

const getHeroes = async (req, res) => {
  const heroes = await SuperHero.find();
  const totalHeroes = await SuperHero.countDocuments({});

  if (!heroes) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ totalHeroes, heroes });
};

const getHeroById = async (req, res) => {
  const { heroId } = req.params;
  const hero = await SuperHero.findOne({ _id: heroId });

  if (!hero) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(hero);
};

const removeHeroById = async (req, res) => {
  const { heroId } = req.params;
  const hero = await SuperHero.findOneAndRemove({ _id: heroId });

  if (!hero) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "Hero removed successfully" });
};

const updateHero = async (req, res) => {
  const { heroId } = req.params;
  const imagePath = path.join("public", "images");
  if (req.file) {
    const { path: tempUpload, originalname } = req.file;
    const resultUpload = path.join(imagePath, originalname);
    await fs.rename(tempUpload, resultUpload);
    const fullImageUrl = baseUrl + resultUpload;

    const hero = await SuperHero.findByIdAndUpdate(heroId, {
      ...req.body,
      images: fullImageUrl,
    });

    if (!hero) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(hero);
  } else {
    const hero = await SuperHero.findByIdAndUpdate(heroId, {
      ...req.body,
    });

    if (!hero) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(hero);
  }
};

const createHero = async (req, res) => {
  console.log("asd");
  const imagePath = path.join("public", "images");
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(imagePath, originalname);
  await fs.rename(tempUpload, resultUpload);
  const fullImageUrl = baseUrl + resultUpload;
  const hero = await SuperHero.create({
    ...req.body,
    images: fullImageUrl,
  });

  res.status(201).json(hero);
};

module.exports = {
  getHeroes,
  getHeroById,
  removeHeroById,
  updateHero,
  createHero,
};
