import React from 'react'
import { CreateUnselected } from './icons/Create'
import { ExploreUnselected } from './icons/Explore'
import { HomeSelected } from './icons/Home'
import { MessageUnselected } from './icons/Messages'
import { NotificationsUnselected } from './icons/Notifications'
import { SearchBtnIcon } from './icons/Search'
import { getSubscribedPosts } from '../utils/axios/postAPIs'
import { logoutUser } from '../hooks/logoutUser'

const menuItems: any =[

  {name: "Home",
  icon: <HomeSelected />},
  
  {name: "Search",
  icon: <SearchBtnIcon />},
  
  {name: "Explore",
  icon: <ExploreUnselected />},
  
  {name: "Messages",
  icon: <MessageUnselected />},
  
  {name: "Notifications",
  icon: <NotificationsUnselected />},
  
  {name: "Create",
  icon: <CreateUnselected />},
  
  {name: "Profile",
  icon: "Profile Pic"},
  
  ]


const Navbar = () => {


const { logout } = logoutUser()


  return (
    <div className='h-screen bg-sky-100 w-1/4'>
<button onClick={() => getSubscribedPosts().then((res) => {
  console.log("michael should be following all 3 peeps", res)})}>TEST BUTTON FOR SUBSCRIBED POSTS</button>

<button onClick={() => logout()}>Logout User</button>

      {menuItems.map((item: any) => { 
        return (
          <div className='flex gap-8 pl-4 bg-red-100 w-full'>
        <h1>{item.icon}</h1>
        <h1>{item.name}</h1>
        </div>

      )})}
      </div>)
}

export default Navbar