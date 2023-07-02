import * as dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3000
const MONGO_USER = process.env.MONGO_USERNAME
const MONGO_PASS = process.env.MONGO_PASSWORD


export { PORT, MONGO_USER, MONGO_PASS }
