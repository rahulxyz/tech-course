const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    bigUrl : {
            type: String,
            required: true,
            unique: true
    },
    smallUrl :{
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("url", urlSchema);