const mongoose = require('mongoose')

const URLSchema = new mongoose.Schema({
    urlCode:{ 
        type: String
    },
    longUrl: { 
        type: String
    },
    shortUrl: { 
        type: String
    },
    date: {
        type: String,
        default: Date.now()
    }
})

// create a model from schema and export it
module.exports = mongoose.model('Url', URLSchema)