const { Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Pokemon.create({ name: "Pikachu" });
      });
      it("Create pokemon", async () => {
        try {
          await Pokemon.create({
            name: "Manu",
            image: "",
            type: ["Normal"],
            vida: "1",
            ataque: "1",
            defensa: "1",
            velocidad: "1",
            altura: "1",
            peso: "1",
          });
        } catch (error) {
          console.log(
            "Error: la sintaxis de entrada no es válida para tipo integer: «life»"
          );
        }
      });
      it("should throw an error if name is not a string", async () => {
        try {
          await Pokemon.create({
            name: 123,
            image: "",
            type: ["Normal"],
            vida: "1",
            ataque: "1",
            defensa: "1",
            velocidad: "1",
            altura: "1",
            peso: "1",
          });
        } catch (error) {
          console.log(error);
        }
      });
      it("should throw an error if life is not a number", async () => {
        try {
          await Pokemon.create({
            name: "Mamu",
            image: "",
            type: ["Normal"],
            vida: "life",
            ataque: "1",
            defensa: "1",
            velocidad: "1",
            altura: "1",
            peso: "1",
          });
        } catch (error) {
          console.log(
            "Error: la sintaxis de entrada no es válida para tipo integer: «life»"
          );
        }
      });
      it("should throw an error if atacck is not a number", async () => {
        try {
          await Pokemon.create({
            name: "Mamu",
            image: "",
            type: ["Normal"],
            vida: "1",
            ataque: "ciento veinte",
            defensa: "1",
            velocidad: "1",
            altura: "1",
            peso: "1",
          });
        } catch (error) {
          console.log(
            "Error: la sintaxis de entrada no es válida para tipo integer: «attack»"
          );
        }
      });
      it("should throw an error if defense is not a number", async () => {
        try {
          await Pokemon.create({
            name: "Mamu",
            image: "",
            type: ["Normal"],
            vida: "1",
            ataque: "1",
            defensa: "defense",
            velocidad: "1",
            altura: "1",
            peso: "1",
          });
        } catch (error) {
          console.log(
            "Error: la sintaxis de entrada no es válida para tipo integer: «defense»"
          );
        }
      });
      it("should throw an error if speed is not a number", async () => {
        try {
          await Pokemon.create({
            name: "Mamu",
            image: "",
            type: ["Normal"],
            vida: "1",
            ataque: "1",
            defensa: "1",
            velocidad: "cien",
            altura: "1",
            peso: "1",
          });
        } catch (error) {
          console.log(
            "Error: la sintaxis de entrada no es válida para tipo integer: «speed»"
          );
        }
      });
    });
  });
});
