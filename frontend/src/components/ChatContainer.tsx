import { useEffect, useState } from 'react'

import Chatbox from './Chatbox'
import { createMessage, getMessages } from '../utils/axios/messageAPIs'

type Props = {
  socket: any,
  conversationId: string,
  userId: any
}

const ChatContainer = ({socket, conversationId, userId}: Props) => {

const [chat, setChat] = useState([])
const [message, setMessage] = useState('')
const [loading, setLoading] = useState(true)

const sendMessage = async () => {

// e.preventDefault()
if (message !== ''){

const messageData = {
room: conversationId,
sender: userId,
message: message,
time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
}

await socket.emit('send_message', messageData, () => {


  // @ts-ignore
  setChat((oldChat) => [...oldChat, messageData])

})

await createMessage(userId, conversationId, message).then(res => console.log("Res from create message", res))

setMessage('')

}}

useEffect(() => {

  if(conversationId !== '' ){
    getMessages(conversationId).then(res => {
      setChat(res)
      setLoading(false)
      // console.log(chat)
    })
  }

setMessage('')

}, [conversationId])





useEffect(() => {
socket.on("receive_message", async (data: any) => {

if(data.conversationId === conversationId){
  // @ts-ignore
  setChat((oldChat) => [...oldChat, data])
}
})

return () => {
  socket.off("receive_message");
};

}, [socket])

  return (
    <div className='h-full grid grid-rows-7'>
    <div className='row-span-6 overflow-y-scroll'>
      {loading ? (
        <h1></h1>
      ) : chat.map((chats: any) => {
        return (
          <Chatbox key={chats._id} chat={chats} userId={userId} chatLength={chat.length}/>
        )
      })}
      
    </div>

      <div className={conversationId !== '' ? `flex relative row-span-1` : `hidden`}>
      <input placeholder='Message...' className='border rounded-full pl-6 mx-auto outline-none text-sm w-5/6 h-2/3 my-auto' value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button type='button' className={message !== '' ? `hover:bg-blue-500 bg-blue-400 px-2 py-1 absolute right-14 top-6 text-xs rounded-xl text-white font-semibold` : `hidden`} onClick={sendMessage}>Send</button>
      </div>
      
    
    </div>
  )
}

export default ChatContainer