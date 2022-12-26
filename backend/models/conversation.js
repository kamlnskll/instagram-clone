import mongoose from "mongoose";

const {ObjectId} = mongoose.SchemaTypes 

const conversationSchema = new mongoose.Schema({

members: {
type: Array,
},

}, {timestamps: true})

export default mongoose.model("Conversation", conversationSchema)