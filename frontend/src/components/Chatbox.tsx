import React from 'react'

type Props = {
chat: any
}

const Chatbox = ({chat}: Props) => {
  return (
    <div className='bg-blue-400 w-1/4' key={chat}>
      <h1 className='text-right font-semibold'>{chat.message}</h1>
    </div>
  )
}

export default Chatbox