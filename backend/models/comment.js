import mongoose from "mongoose";

const {ObjectId} = mongoose.SchemaTypes 

const commentSchema = new mongoose.Schema({
user: {
    type: ObjectId, ref: "User",
},

comment: {
    type: String,
    required: true,
}
})