const mongoose = require('mongoose')

const shortURLSchema = new mongoose.Schema({

    originalURL:{
        type:"String",
        required:true
    },
    shortURL:{
        type:"String",
        required:true
    }

});

model.exports = mongoose.model("urlModel",shortURLSchema);