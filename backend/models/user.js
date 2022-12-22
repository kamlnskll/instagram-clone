import mongoose from "mongoose";

const { ObjectId } = mongoose.SchemaTypes
const userSchema = new mongoose.Schema({

    fullName: {
    type: String,
    required: true,
    },

    email: {
        type: String,
        required: true,
    },

    userName: {
type: String,
required: true,

    },

    bio: {
        type: String,
        maxLength: 150,
    },

    website: {
        type: String,
    },

    password: {
        type: String,
        required: true,
    },

    profilePic: {
     type: String,
     default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'
    },

    followers:[{type: ObjectId, ref: 'User'}],

    following: [{type: ObjectId, ref: 'User'}],

    followerCount: {
        type: Number,
        default: 0,
        min: 0
    },

    followingCount: {
        type: Number,
        default: 0,
        min: 0
    },

    posts: [{
        type: ObjectId,
        ref: "Post",
    }],

    postCount: {
        type: Number,
        default: 0,
        min: 0
    },

    bio: {type: String},
    
}, {
    timestamps: true
})


export default mongoose.model("User", userSchema)