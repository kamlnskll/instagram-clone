import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getUserbyUsername, followUser, unfollowUser} from '../utils/axios/userAPIs'
import Post from '../components/Post'
import { SettingsIcon } from '../components/icons/Settings'

const Profile = () => {

const { username } = useParams()
const [post, setPost] = useState([])
const [userData, setUserData] = useState({
userName: '',
fullName: '',
profilePic: '',
following: '',
followers: '',
followingCount: 0,
followerCount: 0,
bio: '',
postCount: '',
isThisUserMe: (false),
isFollowingUser: (false)
})

const [followerList, setFollowerList] = useState(false)
const [followingList, setFollowingList] = useState(false)


  useEffect(() => {
getUserbyUsername(username).then((res) => {setUserData(res) 
  setPost(res.posts)
}).catch((err) => console.log(err))}, [username])




  return (
    <div className='h-screen'>
      <div className='flex justify-center gap-[128px] py-16'>
      {/* Img div */}
      <div>
        <img className='w-[128px] h-[128px]' src={userData.profilePic}/>
      </div>
      {/* Username + user data div */}
      <div className=''>
      {/* Line-1 Username, Edit btns */}
      <div className='flex gap-8 pb-6'>
      <h1 className='text-2xl'>{userData.userName}</h1>
      {userData.isThisUserMe ? ( <><button className='border font-semibold px-2 rounded-sm'>Edit profile</button>
      <div>
      <SettingsIcon />
      </div>  </> ) : null }
      {userData.isThisUserMe ? ( null ) : 
      <div> 
      
      {userData.isFollowingUser ? <button className='border font-semibold px-12 rounded-sm text-black bg-white' onClick={() => unfollowUser(username)}>Following</button> : <button className='border font-semibold px-4 rounded-sm text-white bg-blue-500 hover:bg-blue-600' onClick={() => followUser(username)}>Follow</button> }
      
      </div> }
      </div>
      {/* Line-2 Post, follower, following count */}
      <div className='flex gap-8 pb-4'>
        <h1><span className='font-semibold'>{userData.postCount} </span>posts</h1>
        <div className='relative' onClick={() => setFollowerList(!followerList)}><h1><span className='font-semibold'>{userData.followerCount} </span>followers</h1>
        <div className={followerList ? `absolute bg-white` : `absolute invisible null`}>Follower List</div>
        </div>
        <div className='relative' onClick={() => setFollowingList(!followingList)}><h1><span className='font-semibold'>{userData.followingCount} </span>following</h1>
        <div className={followingList ? `absolute bg-white` : `absolute invisible null`}>Following List</div>
        </div>
      </div>
      <div className='pb-2'>
        <h1 className='font-semibold'>{userData.fullName}</h1>
        <h2>{userData.bio}</h2>
      </div>
      
      </div>
      </div>

      
    <div className='grid grid-cols-3'>
      {post.map((posts) => {
        return (
          <Post isOnFeed={false} post={posts}/>
          
      )} )}
    </div>
    </div>
  )
}

export default Profile