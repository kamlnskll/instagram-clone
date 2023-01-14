import { useContext, useEffect, useState } from 'react'
import ChatContainer from '../components/ChatContainer'
import Navbar from '../components/Navbar'
import { io } from 'socket.io-client'
import { userContext } from '../context/auth'
import { getConversations } from '../utils/axios/messageAPIs'
import jwtDecode from 'jwt-decode'
import { checkIfValidToken } from '../utils/verifyToken'
import NewConvoModal from '../components/NewConvoModal'

const Messages = () => {
const socket = io('http://localhost:8000')
const { user } = useContext(userContext)
const [conversations, setConversations] = useState([])
const [conversationId, setConversationId] = useState('')
const [loading, setLoading] = useState(true)
const [userId, setUserId] = useState(null)
const [currentRoom, setCurrentRoom] = useState('')
const [openConvoModal, setOpenConvoModal] = useState(false)


// console.log('decodedId', decoded.id)  

const joinRoom = (conversation: any) => {
  
  if(conversation !== '' && currentRoom !== conversation){
    socket.emit("join_room", conversation)
    setCurrentRoom(conversation)
  } 
  
}

const closeModalFunction = (boolean: any) => {
setOpenConvoModal(boolean)
}

useEffect(() => {

checkIfValidToken()
getConversations().then(res => {
  setConversations(res)
  setLoading(false)
})

console.log(conversations)

if(user){
const decoded: any = jwtDecode(user)
setUserId(decoded.id)
}


}, [])

// useEffect(() => {
// console.log(socket)
// }, [conversationId])


  return (
    <div className='flex'>
      <Navbar />
      <div className='w-full relative'>
      <NewConvoModal isOpen={openConvoModal} userId={userId} modalCloseFunction={closeModalFunction}/>
      <div className='bg-white border w-3/4 mx-auto h-5/6 my-16 rounded-md'>
      <div className='grid grid-cols-5 h-full'>
      <div className='col-span-2 bg-white border-r relative'>
      <div className='pb-8'>
      <h1 className='absolute top-1 right-3 hover:bg-gray-100 px-2 rounded-full text-xl cursor-pointer font-semibold' onClick={() => {
        setOpenConvoModal(!openConvoModal)
        console.log(openConvoModal)
        }}>+</h1>
      </div>
        {loading ? (
          <h1>
            Loading
          </h1>
        ) : conversations.map((convo: any) => {
          return(
            // @ts-ignore
            <div key={convo._id} className='flex hover:bg-gray-50 cursor-pointer px-4' onClick={() => {
              joinRoom(convo._id)
              setConversationId(convo._id)
              }}>
              <img className='w-[40px] h-[40px] rounded-full my-2' src={convo.members.filter((user: any) => user._id !== userId)[0].profilePic}/>
              <h1 className='pl-2 my-2'>{convo.members.filter((user: any) => user._id !== userId)[0].userName}</h1>
            </div>
          )
        })}
      </div>
      <div className='col-span-3 '>
<ChatContainer socket={socket} conversationId={conversationId} userId={userId}/>      
      </div>
      </div>
    </div>
      </div>
      
      </div>
  )
}

export default Messages