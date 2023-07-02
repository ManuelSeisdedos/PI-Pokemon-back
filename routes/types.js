import Router from 'express'
import Type from '../models/Type.js'
import controllers  from './controllers.js';

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res, next) => {
  const types = await controllers.getTypesPokeApi();

  return res.status(200).json(types);
});

export default router;
