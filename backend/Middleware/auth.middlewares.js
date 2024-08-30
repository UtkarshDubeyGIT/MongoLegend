const ApiError = require('../utils/ApiError')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const UserActivation = require('../models/UserActivation'); // Add this line to import the UserActivation model

const verifyJwt = async (req,res,next) =>{
    
    try {
        const token = req.cookies?.accesstoken || req.header('Authorization')?.replace("Bearer ","");
    
        if(!token){
            throw new ApiError(401, "Unauthorized request");
        }
    
        const decodedToken = jwt.verify(token,process.env.ACCESS_SECRET_TOKEN);
    
        const user = await UserActivation.findOne(decodedToken?._id).select("-password -refreshToken");
    
        if(!user){
            throw new ApiError(401, "Invalid Access Token");
        }
    
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
}
module.exports = verifyJwt;