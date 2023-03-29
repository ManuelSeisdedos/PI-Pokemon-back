const { Router } = require("express");
const { Type } = require("../db");
const { getTypesPokeApi } = require("./controllers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res, next) => {
  const types = await getTypesPokeApi();

  return res.status(200).json(types);
});

module.exports = router;
