// import mongoose module
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        email:String,
        password:String,
        cPassword:String
    }
);
const user = mongoose.model('User', userSchema );

module.exports = user;