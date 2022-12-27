import React from 'react'

type Props = {
chat: any,
isOwnUser: boolean
}

const Chatbox = ({chat, isOwnUser}: Props) => {
  return (
    <div className='py-2 px-2 border'>
    {isOwnUser ? ( 
      <div className='bg-red-400 text-right' key={chat}>
    <h1 className='font-semibold'>{chat.message}</h1>
  </div> ) : (
    <div className='bg-blue-400 text-left' key={chat}>
    <h1 className='font-semibold'>{chat.message}</h1>
  </div>
  )  
    }
  </div>
  )
}

export default Chatbox