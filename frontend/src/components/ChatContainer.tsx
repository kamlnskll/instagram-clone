import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
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

const sendMessage = async (e: any) => {
e.preventDefault()
// @ts-ignore
await createMessage(userId, conversationId, message).then((res: any) => setChat([...chat, res.data]))
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
    <div className='h-full grid grid-rows-7'>
    <div className='row-span-6 overflow-y-scroll'>
      {loading ? (
        <h1></h1>
      ) : chat.map((chat) => {
        return (
          <Chatbox chat={chat} userId={userId}/>
        )
      })}
      
    </div>

      <div className={conversationId !== '' ? `flex relative row-span-1` : `hidden`}>
      <input placeholder='Message...' className='border rounded-full pl-6 mx-auto outline-none text-sm w-5/6 h-2/3 my-auto' value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button className={message !== '' ? `hover:bg-blue-500 bg-blue-400 px-2 py-1 absolute right-14 top-6 text-xs rounded-xl text-white font-semibold` : `hidden`} onClick={sendMessage}>Send</button>
      </div>
      
    
    </div>
  )
}

export default ChatContainer