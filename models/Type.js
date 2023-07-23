'use strict'

import mongoose from "mongoose"

const typeSchema = new mongoose.Schema({
    
    id: String,
    tipo: {
        type: String,
        required: true
    }
})

const Type = mongoose.model("Type", typeSchema)

export default Type