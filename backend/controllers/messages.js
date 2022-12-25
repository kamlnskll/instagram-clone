import Message from "../models/messages";
import io from '../app'

export const sendMessage = async (req, res) => {

const message = new Message({
sender: req.user,
receiver: req.body.receiver,
message: req.body.message
})

try{
const savedMessage = await message.save()
io.emit('Receive Message', savedMessage)
res.send(savedMessage)

} catch(err) {
console.log(err)
    
}

}

export const getMessages = async (req, res) => {

try{
const message = Message.findById(req.params.id)
res.send(message)
} catch (err) {

    console.log(err)
}


}
