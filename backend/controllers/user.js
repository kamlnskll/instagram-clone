import bcrypt, { hash } from 'bcrypt'
import User from '../models/user.js'
import asyncHandler from 'express-async-handler'
import { generateAccessToken } from '../utils/auth.js'

// Register User

export const registerNewUser = asyncHandler(async (req, res) => {
const {email, fullName, userName, password } = req.body
if(!email || !fullName || !userName || !password) {
    res.status(400)
    throw new Error('All fields need to be filled out.')
}

const checkIfEmailIsTaken = await User.findOne({ email })

const checkIfUserNameIsTaken = await User.findOne({ userName })

if(checkIfEmailIsTaken){
    res.status(400)
    throw new Error('Email is already in use.')
}

if(checkIfUserNameIsTaken){
    res.status(400)
    throw new Error('Username is already in use.')
}

const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

const user = await User.create({
email,
fullName,
userName,
password: hashedPassword,

})

if (user) {
    const token = generateAccessToken(user._id)
    res.status(201).json({
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
        userName: user.userName,
        token
    })
} else {
    res.status(400)
    throw new Error('Invalid user data')
}

res.json({message: 'Registered new user!'})
})

// Login User Function 

export const loginUser = asyncHandler(async (req, res) => {
    const { userName, password } = req.body
    if(!userName || !password) {
        res.status(400)
        throw new Error('All fields need to be filled out.')
    }

    const user = await User.findOne({ userName })
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = generateAccessToken(user._id)
        res.json({
            _id: user._id,
        email: user.email,
        fullName: user.fullName,
        userName: user.userName,
        token
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})



export const getFollowingPosts = asyncHandler(async (req, res, next) => {




})

export const followUser = asyncHandler(async (req, res, next) => {


})

export const unfollowUser = asyncHandler(async (req, res, next) => {

})

export const getUserbyUsername = asyncHandler(async (req, res, next) => {

const user = await User.findOne({userName: req.params.username}).select('userName fullName profilePic followers following followerCount followingCount postCount bio')
   if(user){
        res.status(200).json({
            userName: user.userName,
            fullName: user.fullName,
            profilePic: user.profilePic,
            following: user.following,
            followers: user.followers,
            followingCount: user.followingCount,
            followerCount: user.followerCount,
            post: user.postCount,
            bio: user.bio
        })
    }
    else{
        console.log("No user found with that username")
    }
}

)
