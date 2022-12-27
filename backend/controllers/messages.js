import Message from "../models/messages.js";
import {io} from '../app.js'

export const sendMessage = async (req, res) => {

const message = new Message(req.body)
try{
const savedMessage = await message.save()
io.emit('receive_message', savedMessage)
res.send(savedMessage)

} catch(err) {
console.log(err)
    
}

}

export const getMessages = async (req, res) => {

try{
const messages = await Message.find({
    conversationId: req.params.conversationId
})
res.status(200).json(messages)
} catch (err) {
res.status(500).json(err)
}

}
