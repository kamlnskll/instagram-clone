import bcrypt, { hash } from 'bcrypt'
import User from '../models/user.js'
import asyncHandler from 'express-async-handler'

// Register User

export const registerNewUser = asyncHandler(async (req, res) => {
const {email, fullName, userName, password } = req.body
if(!email || !fullName || !userName || !password) {
    res.status(400)
    throw new Error('All fields need to be filled out.')
}

const checkIfEmailIsTaken = await User.findOne({email})

const checkIfUserNameIsTaken = await User.findOne({userName})

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


})

// Login User

export const loginUser = asyncHandler(async (req, res) => {})

// 