import React from 'react'
import io from 'socket.io-client'


const Messages = () => {

const socket = io('http://localhost:8001')

  return (
    <div>Messages</div>
  )
}

export default Messages