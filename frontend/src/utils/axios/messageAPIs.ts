import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL
const messageURL = process.env.REACT_APP_BACKEND_MESSAGES_URL
const conversationURL = process.env.REACT_APP_BACKEND_CONVERSATIONS_URL

export const getConversations = async () => {

try{
    const conversations = await axios.get(`${baseURL}${conversationURL}/:userId/getconversations`)
    return conversations.data

} catch(err){
    console.log(err)
}

}

export const newConversation = async (sender: any, receiver: any) => {

    const conversationData = {
    senderId: sender,
    receiverId: receiver
    }

    try{
        const newConversation = await axios.post(`${baseURL}${conversationURL}/newconversation`, conversationData)
        return newConversation
    
    } catch(err){
    console.log(err)

    }
    
    }


export const getMessages = async (conversationId: any) => {

    try{
        const messages = await axios.get(`${baseURL}${messageURL}/${conversationId}`)
        return messages.data

    } catch(err){

        console.log(err)
    }
}

export const createMessage = async (sender: any, conversationId: any, message: string) => {

    const messageData = {
        sender: sender,
        conversationId: conversationId,
        message: message
    }

    try{
   const message = await axios.post(`${baseURL}${messageURL}/sendmessage`, messageData)
   return message

} catch(err){
console.log(err)
}

}

