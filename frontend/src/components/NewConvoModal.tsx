import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import { newConversation, createMessage } from '../utils/axios/messageAPIs'

type Props = {

isOpen: boolean,
userId: any,
modalCloseFunction: any

}

const NewConvoModal = ({isOpen, userId, modalCloseFunction}: Props) => {

const [search, setSearch] = useState([])
const [loading, setLoading] = useState(true)
const [user, setUser] = useState({})
const [message, setMessage] = useState('')

const handleSearch = (searchResults: any) => {
        setSearch(searchResults)
        setLoading(false)
        }

const handleSubmit = async () => {
if(user.hasOwnProperty('_id')){
// @ts-ignore
await newConversation(userId, user._id).then(res => {
    console.log(res?.data)
    createMessage(userId, res?.data._id, message).then(res => {
        modalCloseFunction(false)
        setMessage('')
        console.log(res?.data)})})

}

}

  return (
    isOpen ? (
        <div className='w-1/2 h-1/2 bg-white border rounded-md absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='font-semibold text-center pt-4'>Message someone new</h1>
        <div className='px-6 pt-4'>
        <SearchInput onSearch={handleSearch}/>
        </div>
        <div className=''>
        
        {Object.keys(user).length == 0 ? (
            <>
        <h1 className='font-semibold text-center'>Results</h1>
        <div>
        {search.filter((user: any) => user._id != userId).map((user: any) => (

            <>
            <div className='hover:bg-gray-100 py-2 mx-2 my-1 rounded-xl cursor-pointer' onClick={() => setUser(user)}>
            <div className='flex pl-4 gap-5'>
            <img className='w-[24px] h-[24px] my-auto' src={user.profilePic}/>
            <h1 className='text-lg pl-1'>{user.userName}</h1>
            </div>
            </div>
            </>


        ))}
        </div>
        </>
        ) : (

            <div>
            <h1 className='font-semibold text-center'>Type your first message</h1>
    <div className='flex relative'>
      <input placeholder='Message...' className='border rounded-full pl-6 h-[40px] mx-auto outline-none text-md w-5/6 my-auto' value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button type='button' className={message !== '' ? `hover:bg-blue-500 bg-blue-400 px-2 py-1 absolute right-14 top-2 text-xs rounded-xl text-white font-semibold` : `hidden`} onClick={handleSubmit}>Send</button>
      </div>
        </div>

        )}
        
        </div>
        </div>

    ) : (null)
  )
}

export default NewConvoModal