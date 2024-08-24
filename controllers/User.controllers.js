const User = require('../models/User.models.js');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/AsyncHandler.js')

const generateAccessAndRefreshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const signupUser = asyncHandler( async (req, res) => {
    const {username, email, contactNum, password, role} = req.body;

    //check1
    if([username, email, contactNum, password, role].some(fields => (fields?.trim() === ""))){
        throw new ApiError(400, "fields cannot be empty")
    }

    //check if user already exists
    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(existingUser){
        throw new ApiError(409, "User already exists")
    }

    //saving profile pic
    const profilePic = req.file?.path;

    if(!profilePic){
        throw new ApiError(400, "proifile picture required")
    }

    const user = await User.create({
        username,
        email,
        contactNum,
        password,
        role,
        profilePic
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )


})

const loginUser = asyncHandler( async (req, res) => {
    //get data from frontend
    const {email, password} = req.body;

    //check1
    if(!email || !password){
        throw new ApiError(400, "email and password both should be provided");
    }

    //find the user from db
    const user = await User.findOne({
        email
    })

    if(!user){
        throw new ApiError(404, "user not found")
    }

    const passwordIsCorrect = user.isPasswordCorrecr(password);

    if(!passwordIsCorrect){
        throw new ApiError(401, "Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id);

    const loggedinUser = await User.findOne({email}).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )
})

module.exports = {signupUser, loginUser}