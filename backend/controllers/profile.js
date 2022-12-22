import User from "../models/user.js";
import asyncHandler from "express-async-handler";

// This file is used to fetch/manipulate the data of the user who is LOGGED IN. this includes loading their profile pic, changing data like bio etc.
// Easier way to of managing the distinction between the logged in users profile and other users (at least that is what I think when making this file)

export const getUsernameofLoggedInUser = asyncHandler (async (req, res) => {
    try{
    const findUser = await User.findById(req.user).select('userName profilePic _id')
    // 'following', 'posts')
    res.status(200).json(findUser)

    } catch(err) { throw err }

})

export const getProfileDataForEditPage = asyncHandler(async (req, res) => {

try {
const findUserData = await User.findById(req.user).select('profilePic userName fullName bio website')
res.status(200).json(findUserData)

} catch (err) {
    throw err
}


})

export const postUpdatedProfileDataforEditPage = asyncHandler (async (req, res) => {

try {

const { fullName, userName, bio, website } = req.body

const updatedData = {
    fullName,
    userName,
    bio,
    website
}

const updatedUserData = await User.findByIdAndUpdate(req.user, updatedData, {new: true})
return res.json(updatedUserData)

} catch (err){
    throw err
}

})
