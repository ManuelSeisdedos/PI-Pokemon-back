const { Router } = require("express");
const { getTypesPokeApi } = require("./controllers");

const pokemonRoute = require("./pokemons");
const typesRoute = require("./types");
const router = Router();

//getTypesPokeApi();

router.use("/pokemons", pokemonRoute);
router.use("/types", typesRoute);

module.exports = router;
