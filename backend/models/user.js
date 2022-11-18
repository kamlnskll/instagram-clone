import mongoose from "mongoose";

const { ObjectId } = mongoose.SchemaTypes
const userSchema = new mongoose.Schema({

    fullName: {
    type: String,
    required,
    },

    email: {
        type: String,
        required,
    },

    password: {
        type: String,
        required
    },

    profilePic: {
     type: String,
     default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'
    },

    followers:[{type: ObjectId, ref: 'User'}],

    following: [{type: ObjectId, ref: 'User'}],
    
}, {
    timestamps: true
})


export default mongoose.model("User", userSchema)