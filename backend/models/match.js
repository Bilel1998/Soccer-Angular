// import mongoose module
const mongoose = require('mongoose');

const matchSchema = mongoose.Schema(
    {
        teamOne:String,
        scoreOne:String,
        teamTwo:String,
        scoreTwo:String,
        image:String
    }
);
const match = mongoose.model('Match', matchSchema );

module.exports = match;