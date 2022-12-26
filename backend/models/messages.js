import mongoose from "mongoose";

const {ObjectId} = mongoose.SchemaTypes 

const messageSchema = new mongoose.Schema({

sender: {
type: ObjectId, ref: "User", required: true
},

conversationId: {
type: ObjectId, ref: "Conversations", required: true
},

message: {
    type: String,
    required: true
},

timestamp: {
type: Date,
default: Date.now

}

})

export default mongoose.model("Message", messageSchema)