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
      <div className='grid grid-cols-3'>
      <div className='col-span-1 bg-blue-200'>
        <h1>List of people you are messaging...</h1>
      </div>
      <div className='col-span-2 bg-red-200'>
<ChatContainer />      
      </div>
      </div>
        {/* <h1 className=''>CHAT CONTAINER</h1> */}
    </div>
      </div>
      
      </div>
  )
}

export default Messages