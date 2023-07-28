'use strict'
import * as mongo from "./configs/mongoConfig.js"
import mongoose from "mongoose"
import app from "./app.js"
const PORT = process.env.PORT || 3000

try { 
    mongoose.connect(`mongodb+srv://admin:pokemonback123@pokemondata.dcme52o.mongodb.net/`   
)
    console.log("La conexión a la base de datos se realizó correctamente.")
} catch (error) {
    console.log(error.messagge)
}

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
})

