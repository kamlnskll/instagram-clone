import React from 'react'

type Props = {
chat: any,
userId: any
}

const Chatbox = ({chat, userId}: Props) => {
const isOwnUser = chat.sender == userId

  return (
    <div className='py-2 px-2'>
    {isOwnUser ? ( 
      <div className='bg-blue-400 text-right' key={chat}>
    <h1 className='font-semibold'>{chat.message}</h1>
  </div> ) : (
    <div className='bg-red-400 text-left' key={chat}>
    <h1 className='font-semibold'>{chat.message}</h1>
  </div>
  )  
    }
  </div>
  )
}

export default Chatbox