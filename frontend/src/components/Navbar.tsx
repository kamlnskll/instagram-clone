import React, { useEffect, useState } from 'react'
import { CreateUnselected } from './icons/Create'
import { ExploreUnselected } from './icons/Explore'
import { HomeSelected } from './icons/Home'
import { MessageUnselected } from './icons/Messages'
import { NotificationsUnselected } from './icons/Notifications'
import { SearchBtnIcon } from './icons/Search'
import { getSubscribedPosts } from '../utils/axios/postAPIs'
import { logoutUser } from '../hooks/logoutUser'
import { Link } from 'react-router-dom'
import { getProfileUsernameandProfilePic } from '../utils/axios/profileAPIs'



const Navbar = () => {

const [profile, setProfile] = useState({
  userName: '',
  profilePic: '',
})


useEffect(() => {
  getProfileUsernameandProfilePic().then((res) => setProfile(res)).catch(err => console.log(err))
}, [])


const { logout } = logoutUser()


  return (
    <nav className='h-screen bg-sky-100 w-1/4'>
    <div className='text-xl pl-4 mx-auto h-full pt-8'>
    <Link to={'/'} className='flex gap-4 py-4'> 
    <HomeSelected />
    <h1>Home</h1>
    </Link>
    <ul className='flex gap-4 py-4'>
    <SearchBtnIcon />    
    <h1>Search</h1>
    </ul>
    <Link to={''} className='flex gap-4 py-4'>
    <ExploreUnselected />
    <h1>Explore</h1>
    </Link>
    <Link to={''} className='flex gap-4 py-4'>
    <MessageUnselected />
    <h1>Messages</h1>
    </Link>
    <ul className='flex gap-4 py-4'>
    <NotificationsUnselected />
    <h1>Notifications</h1>
    </ul>
    <ul className='flex gap-4 py-4'>
    <CreateUnselected />
    <h1>Create</h1>
    </ul>
    <Link to={`/profile/${profile.userName}`} className='flex gap-4 py-4'>
    <img className='w-[36px] h-[36px]' src={profile.profilePic}/>
    <h1>{profile.userName}</h1>
    </Link>
    <div className='py-24'>
    {/* <button onClick={() => getSubscribedPosts().then((res) => {
  console.log("michael should be following all 3 peeps", res)})}>TEST BUTTON FOR SUBSCRIBED POSTS</button> */}
<button onClick={() => logout()}>Logout User</button>
</div>
    </div>
  </nav>)
}



export default Navbar