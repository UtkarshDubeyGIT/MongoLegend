const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },
    email : {
        type : String,
        required : [true,"Email is a required field"],
        unique : true,
        trim : true,
        lowercase : true,
    },
    contactNum : {
        type : Number,
        required : [true,"Contact number is a required field"],
        unique : true,
    },
    profilePic : {
        type : String,
    },
    password : {
        type : String,
        required : [true,"Password is a required field"],

    },
    role : {
        type : String,
        enum : ['A','B','C'],
        required : [true,"Role is a required field"],

    },
    refreshToken : {
        type : String,
    },
},
{timestamps : true})

userSchema.pre('save',async(next)=>{
    if(!this.isModified("password")) return next();
    this.password =  await bcrypt.hash(this.password,10);
    return next();
})

// userSchema.methods.isPasswordCorrect(async(password)=>{
//     return await bcrypt.compare(this.password,password)
// })
userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = async function() {
    return await jwt.sign({
        _id: this._id,
        email: this.email,
        userName: this.userName,
        role: this.role,
    },
    process.env.ACCESS_SECRET_TOKEN,
    {
        expiresIn: ACCESS_TOKEN_EXPIRY
    });
};

userSchema.methods.generateRefreshToken = async function() {
    return await jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_SECRET_TOKEN,
    {
        expiresIn: REFRESH_TOKEN_EXPIRY
    });
};

const ACCESS_TOKEN_EXPIRY = 3600; // Set the desired value for access token expiry in seconds
const REFRESH_TOKEN_EXPIRY = 86400; // Set the desired value for refresh token expiry in seconds

module.exports = mongoose.model("User", userSchema);
