import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

type Props = {
  socket: any,
}

const ChatContainer = ({socket}: Props) => {

const [message, setMessage] = useState('')

const sendMessage = () => {
socket.emit('send_message', {message: message})
setMessage('')
}

useEffect(() => {
socket.on("receive_message", (data: any) => {
alert(data.message)
})
}, [socket])

  return (
    <div className='border h-full'>
    <h1 className=''>Chat Container

      <input placeholder='Message...' className='border rounded-full py-2 pl-6 outline-none text-sm w-5/6' value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
    </h1>
    </div>
  )
}

export default ChatContainer