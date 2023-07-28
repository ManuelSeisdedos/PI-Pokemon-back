'use strict'
import * as mongo from "./configs/mongoConfig.js"
import mongoose from "mongoose"
import app from "./app.js"
const PORT = process.env.PORT || 3000

try { 
    mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@pokemondata.dcme52o.mongodb.net/test`   
)
    console.log("La conexión a la base de datos se realizó correctamente.")
} catch (error) {
    console.log(error.messagge)
}

app.listen(3000, () => {
    console.log(`App listening on PORT ${PORT}`)
})

