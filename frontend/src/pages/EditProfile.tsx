import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const EditProfile = () => {

const [menuTab, setMenuTab] = useState('')

const [profileData, setProfileData] = useState({
  fullName: '',
  userName: '',
  website: '',
  bio: '',
})


  return (
    <div className='flex'>
    <Navbar />
    <div className='mx-auto h-screen w-2/3'>
    <div className='border bg-white h-2/3 my-12 flex'>
    <div className='text-center w-1/4'>
    <h1 className='hover:border-l-2 hover:border-gray-700 hover:font-semibold hover:bg-gray-50 py-2' onClick={() => setMenuTab('editprofile')}>Edit Profile</h1>
    </div>
    <div className='border-l w-full relative'>
    {menuTab == 'editprofile' ? <>
    <div className='grid grid-cols-4 pt-6 w-full px-8 gap-4'>
    <h1 className='col-span-1 font-semibold'>Name</h1>
    <div className='col-span-3'>
      <input className='border w-full rounded-sm py-1 px-2'/>
      <h2 className='text-xs text-gray-500'>Help people discover your account by using the name you're know by: either your full name, nickname, or business name.</h2>
      </div>
    </div>
    <div className='grid grid-cols-4 pt-6 px-8 w-full'>
    <h1 className='font-semibold col-span-1'>Username</h1>
    <div className='col-span-3'>
      <input className='border w-full rounded-sm py-1 px-2'/>
      <h2 className='text-xs text-gray-500'>In most cases, you'll be able to change your username back within 14 days. Since this is a clone project, this statement is false.</h2>
      </div>
    </div>
    <div className='grid grid-cols-4 pt-6 w-full px-8'>
    <h1 className='font-semibold mr-8 col-span-1'>Website</h1>
    <div className='col-span-3'>
      <input className='border w-full rounded-sm py-1 px-2'/>
      <h2 className='text-xs text-gray-500'>Enter your website.</h2>
      </div>
    </div>
    <div className='grid grid-cols-4 w-full pt-6 px-8'>
    <h1 className='font-semibold cols-span-1'>Bio</h1>
    <div className='col-span-3'>
      <textarea className='border w-full rounded-sm py-1 px-2'/>
      <h2 className='text-xs text-gray-500'>Character count here</h2>
      </div>
    </div>
    <button className='absolute bottom-16 right-1/2 font-semibold text-white py-1 hover:bg-blue-500 bg-blue-400 rounded-md px-4'>Submit</button>
    </> : null}
    
    </div>
    </div>
    </div>
    </div>
  )
}

export default EditProfile