import {Router} from 'express'
import Pokemon from '../models/Pokemon.js'
import Type from '../models/Type.js'
import controller from './controllers.js'

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  const pokes = await controller.getAllPokes();
  if (name) {
    const pokemons = pokes.find(
      (e) => e.name.toLowerCase() === name.toLowerCase()
    );
    pokemons
      ? res.status(200).json(pokemons)
      : res.status(404).send("the pokemon does not exist");
  } else {
    res.status(200).json(pokes);
  }
});

router.get("/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;
  try {
    const poke = await getPokeById(idPokemon);
    return res.status(200).json(poke);
  } catch (error) {
    return res.status(404);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body)
  const {
    id,
    name,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    type,
    image,
  } = req.body;
  if (!name) {
    res.status(400).json({ error: "The pokemon needs a name" });
  }
  if (name.length > 15) {
    res.status(400).json({ error: "The pokemon name is too long" });
  }

  const onePoke = await findPoke(name);

  if (onePoke === undefined) {
    const result = [];
    type.map((e) => result.push(e));

    const newPokemon = await Pokemon.create({
      id,
      name,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      image,
    });

    const resultado = result.map((e) =>
      Type.findOne({
        where: { tipo: e },
      })
    );

    const tiposResueltos = await Promise.all(resultado);

    if (tiposResueltos) {
      const promesa = tiposResueltos.map((e) => newPokemon.addType(e));
      await Promise.all(promesa);
    }

    res.status(200).json(newPokemon);
  } else {
    res.status(400).json({ error: "the pokemon already exists" });
  }
});

export default router;