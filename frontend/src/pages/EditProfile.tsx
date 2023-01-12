import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { getProfileDataToEdit, submitProfileDataEdit } from '../utils/axios/profileAPIs'
import { checkIfValidToken } from '../utils/verifyToken'

const EditProfile = () => {

useEffect(() => {
  checkIfValidToken()
}, [])

const [menuTab, setMenuTab] = useState('')

const [profileData, setProfileData] = useState({
  fullName: '',
  userName: '',
  website: '',
  bio: '',
})

const [characterCount, setCharacterCount] = useState(0) 

useEffect(() => {
getProfileDataToEdit().then((res: any) => {
  setProfileData(res)
  setCharacterCount(res.bio.length)
})
}, [])

const handleChange = (event: any) => {
  const { name, value } = event.target;
  setProfileData({
    ...profileData,
    [name]: value,
  });
  if (name === 'bio'){
    setCharacterCount(value.length)
  }
}


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
      <input name='fullName' className='border w-full rounded-sm py-1 px-2' value={profileData.fullName} onChange={handleChange} />
      <h2 className='text-xs text-gray-500'>Help people discover your account by using the name you're know by: either your full name, nickname, or business name.</h2>
      </div>
    </div>
    <div className='grid grid-cols-4 pt-6 px-8 w-full'>
    <h1 className='font-semibold col-span-1'>Username</h1>
    <div className='col-span-3'>
      <input name='userName' className='border w-full rounded-sm py-1 px-2' value={profileData.userName} onChange={handleChange}/>
      <h2 className='text-xs text-gray-500'>In most cases, you'll be able to change your username back within 14 days. Since this is a clone project, this statement is false.</h2>
      </div>
    </div>
    <div className='grid grid-cols-4 pt-6 w-full px-8'>
    <h1 className='font-semibold mr-8 col-span-1'>Website</h1>
    <div className='col-span-3'>
      <input name='website' className='border w-full rounded-sm py-1 px-2' value={profileData.website} onChange={handleChange}/>
      <h2 className='text-xs text-gray-500'>Enter your website.</h2>
      </div>
    </div>
    <div className='grid grid-cols-4 w-full pt-6 px-8'>
    <h1 className='font-semibold cols-span-1'>Bio</h1>
    <div className='col-span-3'>
      <textarea name='bio' className='border w-full rounded-sm py-1 px-2' value={profileData.bio} onChange={handleChange}/>
      <h2 className='text-xs text-gray-500'>{characterCount}/150</h2>
      </div>
    </div>
    <button type='button' className='absolute bottom-16 right-1/2 font-semibold text-white py-1 hover:bg-blue-500 bg-blue-400 rounded-md px-4' onClick={() => submitProfileDataEdit(profileData.fullName, profileData.userName, profileData.website, profileData.bio).then(res => console.log(res)).catch(err => console.log(err))}>Submit</button>
    </> : null}
    </div>
    </div>
    </div>
    </div>
  )
}

export default EditProfile