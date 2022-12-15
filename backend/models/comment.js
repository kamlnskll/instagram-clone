import mongoose from "mongoose";

const {ObjectId} = mongoose.SchemaTypes 

const commentSchema = new mongoose.Schema({
postedBy: {
    type: ObjectId, ref: "User",
},

comment: {
    type: String,
    required: true,
}
})

export default mongoose.model("Comment", commentSchema)