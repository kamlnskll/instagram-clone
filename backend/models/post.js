import mongoose from "mongoose";
const {ObjectId} = mongoose.SchemaTypes

const postSchema = new mongoose.Schema({

caption: {
    type: String,
},

photo: {
    type: String,
},

comments: [{
    type: String,
    postedBy:{type: ObjectId, ref: "User"},
}],

likes: [{type: ObjectId,
ref: "User"}],

postedBy: [{type: ObjectId,
ref: "User"}]
    
}, {
timestamps: true
})

export default mongoose.model("Post", postSchema)