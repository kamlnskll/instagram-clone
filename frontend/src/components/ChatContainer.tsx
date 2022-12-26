import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Chatbox from './Chatbox'

type Props = {
  socket: any,
}

const ChatContainer = ({socket}: Props) => {

const [chat, setChat] = useState([])
const [message, setMessage] = useState('')

const sendMessage = () => {
socket.emit('send_message', {message: message})
setMessage('')
}

useEffect(() => {
socket.on("receive_message", (data: any) => {
  // @ts-ignore
setChat([...chat, data])
console.log(data)
})
}, [socket])

  return (
    <div className='border h-full'>
    <h1 className=''>Chat Container
      {chat.map((chat) => {
        return (
          <Chatbox chat={chat}/>
        )
      })}
      <input placeholder='Message...' className='border rounded-full py-2 pl-6 outline-none text-sm w-5/6' value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
    </h1>
    </div>
  )
}

export default ChatContainer