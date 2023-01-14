import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

type Props = {
chat: any,
userId: any,
chatLength: number,
key: any,
}

const Chatbox = ({chat, userId, chatLength, key}: Props) => {

const [isOwnUser, setIsOwnUser] = useState(false)
const navigate = useNavigate()


// Right now, the chat.sender ID is received first and compares to the UserID but the chat.sender._id is not received so everything else is not filled
// So the chat is on the correct side but I need to wait for the sender field to be populated.

useEffect(() => {
  if(chat && chat.sender._id === userId){
    setIsOwnUser(true)
    }
    else {
    setIsOwnUser(false)
    }
// console.log(chat)
}, [chatLength])

  return (
    <div className='py-2 px-2'>
    {isOwnUser ? ( 
      <div className='bg-gray-200 rounded-full w-fit px-4 ml-auto' key={key}>
    <h1 className='text-center py-3 text-sm'>{chat.message}</h1>
  </div> ) : (
    <div className='ml-auto' key={key}>
    <h1 className='text-gray-400 text-xs pl-2 pb-1 cursor-pointer' onClick={() => navigate(`/profile/${chat.sender.userName}`)}>{chat.sender.userName}</h1>
    <div className='flex gap-1'>
    <img src={chat.sender.profilePic} className='mt-auto rounded-full w-[28px] h-[28px] cursor-pointer' onClick={() => navigate(`/profile/${chat.sender.userName}`)}/>
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