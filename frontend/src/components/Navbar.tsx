import React, { useEffect, useState } from 'react'
import { CreateUnselected } from './icons/Create'
import { ExploreUnselected } from './icons/Explore'
import { HomeSelected, HomeUnselected } from './icons/Home'
import { MessageUnselected } from './icons/Messages'
import { NotificationsUnselected } from './icons/Notifications'
import { SearchBtnIcon } from './icons/Search'
import { getSubscribedPosts } from '../utils/axios/postAPIs'
import { logoutUser } from '../hooks/logoutUser'
import { Link, useParams } from 'react-router-dom'
import { getProfileUsernameandProfilePic } from '../utils/axios/profileAPIs'
import NewPostModal from './NewPostModal'
import Search from './Search'
import { MenuIcon } from './icons/Menu'
import MoreModal from './MoreModal'



const Navbar = () => {

const [profile, setProfile] = useState({
  userName: '',
  profilePic: '',
})


useEffect(() => {
  getProfileUsernameandProfilePic().then((res) => setProfile(res)).catch(err => console.log(err))
}, [])

const [isOpen, setIsOpen] = useState(false)
const [openSearch, setOpenSearch] = useState(false)
const [openMoreMenu, setOpenMoreMenu] = useState(false)



  return (
<>
    <nav className='h-screen relative z-50 bg-white border-r border-gray-300 sticky top-0 w-[72px] md:w-fit'>
    <h1 className='text-4xl px-12 mt-4 invisible md:visible'>Instaclone</h1>
    <NewPostModal isOpen={isOpen} />
    <div className='text-xl px-4 mx-auto h-full pt-8'>
    <Link to={'/'} className='pl-2 flex gap-4 py-2 my-2 hover:bg-gray-50 hover:rounded-full'> 
    <HomeSelected />
    <h1 className='invisible md:visible'>Home</h1>
    </Link>
    <ul className='pl-2 flex gap-4 py-2 my-2 hover:bg-gray-50 hover:rounded-full hover:cursor-pointer' onClick={() => setOpenSearch(!openSearch)}>
    <SearchBtnIcon />    
    <h1 className='invisible md:visible'>Search</h1>
    </ul>
    <Link to={''} className='pl-2 flex gap-4 py-2 my-2 hover:bg-gray-50 hover:rounded-full'>
    <ExploreUnselected />
    <h1 className='invisible md:visible'>Explore</h1>
    </Link>
    <Link to={'/messages'} className='pl-2 flex gap-4 py-2 my-2 hover:bg-gray-50 hover:rounded-full'>
    <MessageUnselected />
    <h1 className='invisible md:visible'>Messages</h1>
    </Link>
    <ul className='pl-2 flex gap-4 py-2 my-2 hover:bg-gray-50 hover:rounded-full'>
    <NotificationsUnselected />
    <h1 className='invisible md:visible' onClick={() => console.log()}>Notifications</h1>
    </ul>
    <ul className='pl-2 flex gap-4 py-2 my-2 cursor-pointer hover:bg-gray-50 hover:rounded-full' onClick={() => setIsOpen(!isOpen)}>
    <CreateUnselected />
    <h1 className='invisible md:visible'>Create</h1>
    </ul>
    <Link to={`/profile/${profile.userName}`} className='flex gap-4 py-2 my-2 pl-2 hover:bg-gray-50 hover:rounded-full'>
    <img className='w-[32px] h-[32px] rounded-full' src={profile.profilePic}/>
    <h1 className='invisible md:visible'>{profile.userName}</h1>
    </Link>
    <ul className='pl-2 flex gap-4 py-2 mb-auto cursor-pointer hover:bg-gray-50 hover:rounded-full relative' onClick={() => setOpenMoreMenu(!openMoreMenu)}>
    <MoreModal isOpen={openMoreMenu} />
    <MenuIcon />
    <h1 className='invisible md:visible'>More</h1>
    </ul>
    <ul>
      
    </ul>
    {/* <div className='py-24'>
<button type='button' onClick={() => {logout()}}>Logout User</button>
</div> */}
    </div>
  </nav>
  <div className='relative'>
  <Search isOpen={openSearch} />
  </div>
  </>
  )
}



export default Navbar