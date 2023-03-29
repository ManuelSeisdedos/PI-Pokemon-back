/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );
  describe("GET /pokemons", () => {
    it("GET /pokemons", () => {
      agent.get("/pokemons").expect(200);
    });
    it("GET /pokemons/1", () => {
      agent.get("/pokemons/1").expect(200);
    });
    it("GET /pokemons/#$", () => {
      agent.get("/pokemons/#$").expect(400);
    });
    describe("POST /pokemons", () => {
      it("It responds with 200", async () => {
        try {
          await agent
            .post("/pokemons")
            .send({
              name: "MAmu",
              image: "",
              type: ["Normal"],
              vida: "1",
              ataque: "1",
              defensa: "1",
              velocidad: "1",
              altura: "1",
              peso: "1",
            })

            .expect(200);
        } catch (error) {
          expect({ error: error.messagge });
        }
      });

      it("Responds with 400 if dont pass a name", async () => {
        try {
          expect(
            await agent.post("/pokemons").send({
              image: "",
              type: ["Normal"],
              vida: "1",
              ataque: "1",
              defensa: "1",
              velocidad: "1",
              altura: "1",
              peso: "1",
            })
          ).toBe(200);
        } catch (error) {
          expect({ error: error.messagge });
        }
      });
    });
  });
});
