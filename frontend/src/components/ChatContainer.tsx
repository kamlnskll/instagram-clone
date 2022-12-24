import React from 'react'
import io from 'socket.io-client'

const ChatContainer = () => {

const socket = io('http://localhost:8001')




  return (
    <div className='border h-full'>
    <h1 className=''>Chat Container
      <input placeholder='Message...'className='border rounded-full py-2 pl-6 outline-none text-sm w-5/6'/>
    </h1>
    </div>
  )
}

export default ChatContainer