import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Chatbox from './Chatbox'
import { getMessages } from '../utils/axios/messageAPIs'

type Props = {
  socket: any,
  conversationId: string,
  userId: any
}

const ChatContainer = ({socket, conversationId, userId}: Props) => {



const [chat, setChat] = useState([])
const [message, setMessage] = useState('')
const [loading, setLoading] = useState(true)

const sendMessage = () => {
socket.emit('send_message', {message: message})
setMessage('')
}

useEffect(() => {
  if(conversationId !== '' ){
    getMessages(conversationId).then(res => {
      console.log(res)
      setChat(res)
      setLoading(false)
    })
  }
socket.on("receive_message", (data: any) => {
  // @ts-ignore
setChat([...chat, data])
console.log(data)
})
}, [socket])

  return (
    <div className='border h-full'>
      <button onClick={() => console.log(userId)}>Test user Id</button>
      {loading ? (
        <h1>Loading...</h1>
      ) : chat.map((chat) => {
        return (
          <Chatbox chat={chat} userId={userId}/>
        )
      })}
      <input placeholder='Message...' className='border rounded-full py-2 pl-6 outline-none text-sm w-5/6' value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default ChatContainer