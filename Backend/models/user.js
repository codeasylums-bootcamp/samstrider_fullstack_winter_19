const mongoose = require('mongoose');
const constants = require('../constants');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    name : String,
    phone : String,
    email :{
        type:String,
        unique:true
    },
    password : {
        type:String,
        required:true,
    },
    linkedin : {
        type:String,
        unique:true
    },
    profession : String,
});

UserSchema.methods.generateJwtToken = (_id) => {
    const token = jwt.sign(
        {_id: _id}, 
        constants.JWT_SECRET
);    
    return token;
}

const UserModel = mongoose.model('user', UserSchema);   
module.exports = UserModel;
