'use strict'
import cors from "cors"
import express from "express"
import morgan from 'morgan'
import routes from './routes/index.js'
const app = express()



app.use(express.json())
app.use(morgan('dev'))

app.use(cors({
   
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
    
}));


app.use('/', routes)

export default app