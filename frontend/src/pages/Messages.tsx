import React from 'react'
import io from 'socket.io-client'
import ChatContainer from '../components/ChatContainer'
import Navbar from '../components/Navbar'


const Messages = () => {

const socket = io('http://localhost:8001')

  return (
    <div className='flex'>
      <Navbar />
      <div className='w-full'>
      <div className='bg-white border w-3/4 mx-auto h-5/6 my-16 rounded-md'>
        <h1 className=''>CHAT CONTAINER</h1>
    </div>
      </div>
      
      </div>
  )
}

export default Messages