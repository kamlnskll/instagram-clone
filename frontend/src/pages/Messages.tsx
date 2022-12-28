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
      <div className='grid grid-cols-3 h-full'>
      <div className='col-span-1 bg-white'>
        {loading ? (
          <h1>
            Loading
          </h1>
        ) : conversations.map((convo: any) => {
          return(
            <div key={convo._id} className='flex border hover:bg-gray-100' onClick={() => setConversationId(convo._id)}>
              <img className='w-[24px] h-[24px]' src={convo.members[0].profilePic}/>
              <h1>{convo.members[0].userName}</h1>
            </div>
          )
        })}
      </div>
      <div className='col-span-2 bg-red-200'>
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