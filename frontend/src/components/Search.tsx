import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SearchInput from './SearchInput'

type Props = {

isOpen: boolean,

}


const Search = ({isOpen}: Props) => {

const [search, setSearch] = useState([])
const [loading, setLoading] = useState(true)
const navigate = useNavigate()

const handleSearch = (searchResults: any) => {
setSearch(searchResults)
setLoading(false)
}

  return (
    <div className='absolute sticky top-0 z-50'>
{ isOpen ?  (
    <div className='border-r absolute w-[400px] h-screen bg-white rounded-r-2xl'>
    <div className='grid grid-rows-2'>
        <h1 className='font-semibold text-2xl pt-6 pl-6'>
        Search
        </h1>
        <div className='px-6 pt-3 border-b relative'>
        <SearchInput onSearch={handleSearch} />
        </div>
    </div>
    {loading ? (
      null

    ) : search.map((user: any) => (
        <>
        <div key={user._id} className='flex hover:bg-gray-100 cursor-pointer py-4' onClick={() => navigate(`/profile/${user.userName}`)}>
        <div className='pl-8 flex'>
        <img src={user.profilePic} className='w-[32px] h-[32px] rounded-full my-auto'/>
        <div className='pl-6'>
        <h1 className='font-semibold'>{user.userName}</h1>
        <h1 className='text-xs'>{user.fullName}</h1>
        </div>
        <div className='text-xs font-semibold pl-12 gap-1 my-auto grid-rows-2 grid'>
            <h1>{user.followerCount} followers</h1>
            <h1>{user.followingCount} following</h1>
        </div>
        </div>
        </div>
       
        </>
    ))}
    </div>
) : (null)}

    </div>
  )
}

export default Search