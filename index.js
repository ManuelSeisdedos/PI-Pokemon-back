'use strict'
import mongoose from "mongoose"
import app from "./app.js"
const mongoUser = process.env.MONGO_USERNAME
const mongoPass = process.env.MONGO_PASSWORD
const PORT = process.env.PORT

try { 
    mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPass}@pokemondata.dcme52o.mongodb.net/test`   
)
    console.log("La conexión a la base de datos se realizó correctamente.")
} catch (error) {
    console.log(error.messagge)
}

app.listen(3000, () => {
    console.log(`App listening on PORT ${PORT}`)
})

