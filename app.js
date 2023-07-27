'use strict'
import cors from "cors"
import express from "express"
import morgan from 'morgan'
import routes from './routes/index.js'
const app = express()



app.use(express.json())
app.use(morgan('dev'))

app.use((req,res,next) => {
    req.header("Acces-Control-Allow-Origin","*");
    req.header("Access-Control-Allow-Credentials", "true");
    req.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


app.use('/', routes)

export default app