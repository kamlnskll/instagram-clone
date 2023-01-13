import { useEffect, useState } from 'react'

import Chatbox from './Chatbox'
import { createMessage, getMessages } from '../utils/axios/messageAPIs'

type Props = {
  socket: any,
  conversationId: string,
  userId: any
}

const ChatContainer = ({socket, conversationId, userId}: Props) => {

const [chat, setChat] = useState([])
const [message, setMessage] = useState('')
const [loading, setLoading] = useState(true)

const sendMessage = async () => {

// e.preventDefault()
if (message !== ''){

const messageData = {
room: conversationId,
sender: userId,
message: message,
time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
}

await socket.emit('send_message', messageData, () => {


  // @ts-ignore
  setChat((oldChat) => [...oldChat, messageData])
  console.log(messageData)
  setMessage('')

})

await createMessage(userId, conversationId, message)

}}

useEffect(() => {

  if(conversationId !== '' ){
    getMessages(conversationId).then(res => {
      setChat(res)
      setLoading(false)
    })
  }

}, [conversationId])

// Receive message duplicates messages on the frontend I believe.
// Commenting out this code removes the duplicatation so it must be something here

useEffect(() => {
socket.on("receive_message", async (data: any) => {
// @ts-ignore
setChat((oldChat) => [...oldChat, data])
})

return () => {
  socket.off("receive_message");
};

}, [socket])

  return (
    <div className='h-full grid grid-rows-7'>
    <div className='row-span-6 overflow-y-scroll'>
      {loading ? (
        <h1></h1>
      ) : chat.map((chat: any) => {
        return (
          <Chatbox chat={chat} userId={userId}/>
        )
      })}
      
    </div>

      <div className={conversationId !== '' ? `flex relative row-span-1` : `hidden`}>
      <input placeholder='Message...' className='border rounded-full pl-6 mx-auto outline-none text-sm w-5/6 h-2/3 my-auto' value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button type='button' className={message !== '' ? `hover:bg-blue-500 bg-blue-400 px-2 py-1 absolute right-14 top-6 text-xs rounded-xl text-white font-semibold` : `hidden`} onClick={sendMessage}>Send</button>
      </div>
      
    
    </div>
  )
}

export default ChatContainer