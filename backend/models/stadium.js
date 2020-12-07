// import mongoose module
const mongoose = require('mongoose');

const stadiumSchema = mongoose.Schema(
    {
        name:String,
        country:String,
        capacity:String
    }
);
const stadium = mongoose.model('Stadium', stadiumSchema );

module.exports = stadium;