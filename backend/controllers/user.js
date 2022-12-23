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

const user = await User.findOne({userName: req.params.username}).select('_id followers following followerCount followingCount')
const selectedUserId = user._id

if(selectedUserId == req.user){
    console.log('You cannot follow yourself')
}

if(user.followers.includes(req.user)){
 console.log('You are already following this account')
}

else {
    
try{

await User.findOneAndUpdate({_id: selectedUserId}, { $push: {followers: req.user}, $inc: { followerCount: 1}}, {new: true})
await User.findOneAndUpdate({_id: req.user}, { $push: {following: user._id}, $inc: {followingCount: 1}}, {new: true}).then(console.log('User Followed'))
return res
} catch (err){
        console.log(err)
}

}




})

export const unfollowUser = asyncHandler(async (req, res, next) => {

const user = await User.findOne({userName: req.params.username}).select('_id followers')
const selectedUserId = user._id
    
    if(selectedUserId == req.user){
        console.log('You cannot unfollow yourself')
    }
    
    if(!user.followers.includes(req.user)){
     console.log('You are already not following this account')
    }
    
    else {
        
    try{
    
    await User.findByIdAndUpdate(selectedUserId, { $pull: {followers: req.user}, $inc: {followerCount: -1}}, {new: true})
    await User.findByIdAndUpdate(req.user, { $pull: {following: user._id}, $inc: {followingCount: -1}}, {new: true}).then(console.log('User unfollowed'))
    return res
} catch (err ){
            console.log(err)
    }
    
    }

})

export const getUserbyUsername = asyncHandler(async (req, res, next) => {

const user = await User.findOne({userName: req.params.username}).select('_id website userName fullName profilePic followers following followerCount followingCount postCount bio posts').populate("posts following followers")
const userFollowerIds = await User.findOne({userName: req.params.username}).select('followers')

   if(user){
        res.status(200).json({
            userId: user._id,
            userName: user.userName,
            fullName: user.fullName,
            profilePic: user.profilePic,
            following: user.following,
            followers: user.followers,
            followingCount: user.followingCount,
            followerCount: user.followerCount,
            postCount: user.postCount,
            bio: user.bio,
            website: user.website,
            posts: user.posts,
            isThisUserMe: await req.user == user._id,
            isFollowingUser: userFollowerIds.followers.includes(req.user)
        })        
    }
    else{
        console.log("No user found with that username")
    }
}

)

export const searchUsers = asyncHandler(async (req, res) => {

try{
    const searchTerm = req.body.searchTerm

// Search collection for a match

if(req.body.searchTerm !== '' || null){
    const searchResults = await User.find({
        $or: [
            { fullName: { $regex: searchTerm, $options: 'i'}},
            { userName: { $regex: searchTerm, $options: 'i'}}
        ]}).exec()
        
        res.send(searchResults)}
} catch(err){
    console.log(err)
}

})
