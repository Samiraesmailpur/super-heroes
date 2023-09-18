const mongoose = require("mongoose");
const { SuperHero } = require("../models/heroes");
const { expect } = require("chai");
const {
  getHeroes,
  getHeroById,
  removeHeroById,
  updateHero,
  createHero,
} = require("../controllers/heroes");
const fs = require("fs/promises");
const path = require("path");

mongoose.Promise = global.Promise;
const DB_HOST =
  "mongodb+srv://samiraesmailpur:a7Mde7hLGHNgzv85@atlascluster.6gdtocj.mongodb.net/superHeroes?retryWrites=true&w=majority";

mongoose.connect(DB_HOST);

mongoose.connection
  .once("open", () => console.log("Connected!"))
  .on("error", (error) => {
    console.warn("Error : ", error);
  });

describe("Controller Tests", () => {
  let testHeroId;

  beforeEach(async () => {
    const newHero = new SuperHero({
      nickname: "Test Hero",
      realName: "Test Real Name",
      images: "Test Image URL",
      originDescription: "Test Origin",
      superpowers: "Test Superpowers",
      catchPhrase: "Test Catch Phrase",
    });
    await newHero.save();
    testHeroId = newHero._id;
  });

  afterEach(async () => {
    await SuperHero.findByIdAndRemove(testHeroId);
  });

  describe("getHeroes", () => {
    it("should return an array of heroes and a total count", async () => {
      const req = {};
      const res = {
        json: (data) => {
          expect(data).to.have.property("totalHeroes");
          expect(data).to.have.property("heroes");
        },
        status: (code) => {
          expect(code).to.equal(200);
          return res;
        },
      };

      await getHeroes(req, res);
    });
  });

  describe("getHeroById", () => {
    it("should return a hero by ID", async () => {
      const req = {
        params: {
          heroId: testHeroId,
        },
      };
      const res = {
        json: (data) => {
          expect(data).to.be.an("object");
        },
        status: (code) => {
          expect(code).to.equal(200);
          return res;
        },
      };

      await getHeroById(req, res);
    });
  });

  describe("updateHero", () => {
    it("should update a hero by ID", async () => {
      const req = {
        params: {
          heroId: testHeroId,
        },
        file: null,
        body: {
          nickname: "Updated Nickname",
          realName: "Updated Real Name",
          images: "Updated images",
          originDescription: "Updated originDescription",
          superpowers: "Updated superpowers",
          catchPhrase: "Updated catchPhrase",
        },
      };
      const res = {
        json: (data) => {
          expect(data).to.be.an("object");
        },
        status: (code) => {
          expect(code).to.equal(200);
          return res;
        },
      };

      await updateHero(req, res);
    });
  });

  describe("removeHeroById", () => {
    it("should remove a hero by ID", async () => {
      const req = {
        params: {
          heroId: testHeroId,
        },
      };
      const res = {
        json: (data) => {
          expect(data).to.have.property("message");
          expect(data.message).to.equal("Hero removed successfully");
        },
        status: (code) => {
          expect(code).to.equal(200);
          return res;
        },
      };

      await removeHeroById(req, res);
    });
  });

  describe("createHero", () => {
    it("should create a new hero", async () => {
      const tempFilePath = path.join(__dirname, "../temp/rekha.png");
      try {
        await fs.access(tempFilePath);
      } catch (error) {
        throw new Error(`File not found at path: ${tempFilePath}`);
      }

      const req = {
        file: {
          path: tempFilePath,
          originalname: "rekha.png",
        },
        body: {
          nickname: "created Nickname",
          realName: "created Real Name",
          originDescription: "created originDescription",
          superpowers: "created superpowers",
          catchPhrase: "created catchPhrase",
        },
      };

      const res = {
        json: (data) => {
          expect(data).to.be.an("object");
        },
        status: (code) => {
          expect(code).to.equal(201);
          return res;
        },
      };

      await createHero(req, res);
    });
  });
});
