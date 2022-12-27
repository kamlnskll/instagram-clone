import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL
const messageURL = process.env.REACT_APP_BACKEND_MESSAGES_URL
const conversationURL = process.env.REACT_APP_BACKEND_CONVERSATIONS_URL

export const getConversations = async () => {

try{
    const conversations = await axios.get(`${baseURL}${conversationURL}/:userId/getconversations`)
    return conversations.data

} catch(err){


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