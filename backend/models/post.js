import mongoose from "mongoose";
const {ObjectId} = mongoose.SchemaTypes

const postSchema = new mongoose.Schema({

caption: {
    type: String,
},

photo: {
    type: String,
    required: true
},

comments: [{
    type: ObjectId, ref: "Comment", 
}],

numberOfComments: {
    type: Number,
    default: 0,
    min: 0
},

likes: [{type: ObjectId,
ref: "User"}],

numberOfLikes: {
    type: Number,
    default: 0,
    min: 0
},

postedBy: {type: ObjectId,
ref: "User",
required: true}
    
}, {
timestamps: true
})

export default mongoose.model("Post", postSchema)