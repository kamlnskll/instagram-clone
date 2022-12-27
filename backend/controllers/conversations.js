import Conversation from '../models/conversation.js'

// Start new convo with user
export const newConversation = async(req, res) => {

const newConvo = new Conversation({
    members: [req.body.senderId, req.body.receiverId]
})

try {
const savedConvo = await newConvo.save()
res.status(200).json(savedConvo)

} catch(err){
    res.status(500).json(err)
}}


// Get existing convo with user

export const getConversations = async(req, res) => {
try {
    const conversations = await Conversation.find({
        members: { $in: [req.user]}
    }).populate('members')

    res.status(200).json(conversations)
} catch(err){

    res.status(500).json(err)
}


}