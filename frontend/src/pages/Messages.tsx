import React, { useContext, useEffect, useState } from 'react'
import ChatContainer from '../components/ChatContainer'
import Navbar from '../components/Navbar'
import {io } from 'socket.io-client'
import { userContext } from '../context/auth'
import { getConversations } from '../utils/axios/messageAPIs'
import jwtDecode from 'jwt-decode'

const Messages = () => {
const socket = io('http://localhost:8000')
const { user } = useContext(userContext)
const [conversations, setConversations] = useState([])
const [conversationId, setConversationId] = useState('')
const [loading, setLoading] = useState(true)
const [userId, setUserId] = useState(null)


// console.log('decodedId', decoded.id)  

useEffect(() => {

getConversations().then(res => {
  setConversations(res)
  setLoading(false)
})

if(user){
const decoded: any = jwtDecode(user)
setUserId(decoded.id)
}
// console.log('userId from context', userId)


}, []) 

  return (
    <div className='flex'>
      <Navbar />
      <div className='w-full'>
      <div className='bg-white border w-3/4 mx-auto h-5/6 my-16 rounded-md'>
      <div className='grid grid-cols-5 h-full'>
      <div className='col-span-2 bg-white pt-5 border-r'>
        {loading ? (
          <h1>
            Loading
          </h1>
        ) : conversations.map((convo: any) => {
          return(
            <div key={convo._id} className='flex hover:bg-gray-50 cursor-pointer px-4' onClick={() => setConversationId(convo._id)}>
              <img className='w-[40px] h-[40px] rounded-full my-2' src={convo.members[0].profilePic}/>
              <h1 className='pl-2 my-2'>{convo.members[0].userName}</h1>
            </div>
          )
        })}
      </div>
      <div className='col-span-3'>
<ChatContainer socket={socket} conversationId={conversationId} userId={userId}/>      
      </div>
      </div>
        {/* <h1 className=''>CHAT CONTAINER</h1> */}
    </div>
      </div>
      
      </div>
  )
}

export default Messages