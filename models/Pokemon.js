import mongoose from 'mongoose'

const pokemonSchema = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId, 
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: String,
    vida: {
        type: mongoose.Number,
        default: Math.floor(Math.random() * 100)
    },
    ataque: {
        type: Number,
        default: Math.floor(Math.random() * 100)
    },
    defensa:{
        type: Number,
        default: Math.floor(Math.random() * 100)
    },
    velocidad: {
        type: Number,
        default: Math.floor(Math.random() * 100)
    },
    altura: {
        type: mongoose.Schema.Types.Decimal128,
        default: Math.random() * 100
    },
    peso: {
        type: mongoose.Schema.Types.Decimal128,
        default: Math.random() * 100
    },
    createdInDb: {
        type: Boolean,
    }
})

const Pokemon = mongoose.model("Pokemon", pokemonSchema)

export default Pokemon