import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput'

type Props = {

isOpen: boolean,
userId: any,

}

const NewConvoModal = ({isOpen, userId}: Props) => {

const [search, setSearch] = useState([])
const [loading, setLoading] = useState(true)
const [user, setUser] = useState({})

const handleSearch = (searchResults: any) => {
        setSearch(searchResults)
        setLoading(false)
        }

useEffect(() => {
console.log(search)

}, [handleSearch])

  return (
    isOpen ? (
        <div className='w-1/2 h-1/2 bg-white border rounded-md absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='font-semibold text-center pt-4'>Message someone new</h1>
        <div className='px-6 pt-4'>
        <SearchInput onSearch={handleSearch}/>
        </div>
        <div>
        <h1 className='font-semibold text-center'>Results</h1>
        {search.filter((user: any) => user._id != userId).map((user: any) => (

            <>
            <div className='hover:bg-gray-100 py-2 mx-2 my-1 rounded-xl cursor-pointer'>
            <div className='flex pl-4 gap-5'>
            <img className='w-[24px] h-[24px] my-auto' src={user.profilePic}/>
            <h1 className='text-lg pl-1'>{user.userName}</h1>
            </div>
            </div>
            </>


        ))}
        </div>
        </div>

    ) : (null)
  )
}

export default NewConvoModal