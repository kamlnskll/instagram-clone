import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getUserbyUsername } from '../utils/axios/userAPIs'

const Profile = () => {

const { username } = useParams()
const [userData, setUserData] = useState({
userName: '',
fullName: '',
profilePic: '',
following: '',
followers: '',
followingCount: '',
followerCount: '',
post: '',
bio: '',
})


  useEffect(() => {
getUserbyUsername(username).then((res) => {setUserData(res)
})}, [username])


  return (
    <div>
      <div className='flex border justify-center gap-[128px] h-screen py-16'>
      {/* Img div */}
      <div>
        <img className='w-[128px] h-[128px]' src={userData.profilePic}/>
      </div>
      {/* Username + user data div */}
      <div className=''>
      {/* Line-1 Username, Edit btns */}
      <div className='flex gap-8 pb-6'>
      <h1 className='text-2xl'>{userData.userName}</h1>
      <button className='border font-semibold px-2 rounded-sm'>Edit profile</button>
      <h1>Setting Button</h1>
      </div>
      {/* Line-2 Post, follower, following count */}
      <div className='flex gap-8 pb-4'>
        <h1><span className='font-semibold'>0 </span>posts</h1>
        <h1><span className='font-semibold'>{userData.followerCount} </span>followers</h1>
        <h1><span className='font-semibold'>{userData.followingCount} </span>following</h1>
      </div>
      <div className='pb-2'>
        <h1 className='font-semibold'>{userData.fullName}</h1>
        <h2>{userData.bio}</h2>
      </div>
      
      </div>
      </div>
    </div>
  )
}

export default Profile