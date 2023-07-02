import {Router} from 'express'
import pokemonRoute from './pokemons.js'
import typeRoute from './types.js'
const router = Router()

router.use('/pokemons', pokemonRoute)
router.use('/types',typeRoute)


export default router