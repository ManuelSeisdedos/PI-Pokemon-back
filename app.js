'use strict'
import cors from "cors"
import express from "express"
import morgan from 'morgan'
import routes from './routes/index.js'
const app = express()



app.use(express.json())
app.use(morgan('dev'))

/*app.use(cors({
    origin: "https://pi-pokemon-umber.vercel.app"
}));*/


app.use('/', routes)

export default app