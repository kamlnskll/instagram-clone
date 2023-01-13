import React, { useEffect, useState } from 'react'

type Props = {
chat: any,
userId: any,
socket: any,
}

const Chatbox = ({chat, userId, socket}: Props) => {

const [isOwnUser, setIsOwnUser] = useState(false)

useEffect(() => {
if(chat && chat.sender._id == userId){
setIsOwnUser(true)
}
else {
setIsOwnUser(false)
}
}, [chat, userId])

  return (
    <div className='py-2 px-2' key={chat._id}>
    {isOwnUser ? ( 
      <div className='bg-gray-200 rounded-full w-fit px-4 ml-auto'>
    <h1 className='text-center py-3 text-sm'>{chat.message}</h1>
  </div> ) : (
    <div className='ml-auto'>
    <h1 className='text-gray-400 text-xs pl-2 pb-1'>{chat.sender.userName}</h1>
    <div className='flex gap-1'>
    <img src={chat.sender.profilePic} className='mt-auto rounded-full w-[28px] h-[28px]' />
    <div className='bg-white border rounded-full w-fit px-4' key={chat}>
    <h1 className='py-3 text-sm'>{chat.message}</h1>
    </div>
  </div>
  </div>
  )  
    }
  </div>
  )
}

export default Chatbox