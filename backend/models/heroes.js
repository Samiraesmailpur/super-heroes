const { model, Schema } = require("mongoose");

const superHeroSchema = Schema({
  nickname: {
    type: String,
    required: [true, "nickname is required"],
  },
  realName: {
    type: String,
    required: [true, "realName is required"],
  },
  images: {
    type: String,
    required: [true, "image is required"],
  },
  originDescription: {
    type: String,
    required: true,
  },
  superpowers: {
    type: String,
    required: true,
  },
  catchPhrase: {
    type: String,
    required: true,
  },
});

const SuperHero = model("superheroes", superHeroSchema);

module.exports = {
  SuperHero,
};
