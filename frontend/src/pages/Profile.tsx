import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserbyUsername, followUser, unfollowUser} from '../utils/axios/userAPIs'
import Post from '../components/Post'
import { SettingsIcon } from '../components/icons/Settings'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

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
website: '',
postCount: '',
isThisUserMe: (false),
isFollowingUser: (false)
})

const [followerList, setFollowerList] = useState(false)
const [followingList, setFollowingList] = useState(false)
const [followers, setFollowers] = useState([])
const [following, setFollowing] = useState([])
const [loading, setLoading] = useState(true)
const navigate = useNavigate()


  useEffect(() => {
getUserbyUsername(username).then((res) => {setUserData(res) 
  setPost(res.posts)
  setFollowers(res.followers)
  setFollowing(res.following)
  setLoading(false)
}).catch((err) => console.log(err))}, [username])




  return (
    <div className='flex'>
      <Navbar />
    <div className='h-screen pl-12'>
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
      {userData.isThisUserMe ? ( <><button className='bg-gray-200 hover:bg-gray-300 font-semibold px-2 rounded-sm' onClick={() => navigate('/accounts/edit')}>Edit profile</button>
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
        <div className='relative cursor-pointer' onClick={() => {setFollowerList(!followerList); setFollowingList(false)}}><h1><span className='font-semibold'>{userData.followerCount} </span>followers</h1>
        <div className={followerList ? `absolute bg-white rounded-lg border border-gray-100 w-64` : `absolute invisible null`}>
          {loading ? (
            <p>Loading...</p>
          ) : followers.map((follower: any) => { 
            return (
            <>
          <div className='flex justify-between hover:bg-gray-50'>
          <Link key={follower._id} to={`/profile/${follower.userName}`} className='py-1'>
          <div className='flex gap-4'>
          <div className='my-auto'>
          <img className='w-[24px] h-[24px] rounded-full ml-4' src={follower.profilePic}/>
          </div>
          <div>
          <h1 className='text-sm font-semibold'>{follower.userName}</h1>
          <h1 className='text-xs text-gray-400'>{follower.fullName}</h1>
          </div>
          </div>
          </Link>
          {/* {userData.isThisUserMe ? ( null ) : 
      <div className='my-auto mx-auto'> 
      {userData.isFollowingUser ? <button className='border font-semibold rounded-sm text-xs px-2 py-1 text-black bg-white' onClick={() => unfollowUser(username)}>Following</button> : <button className='border font-semibold px-2 py-1 text-xs rounded-sm text-white bg-blue-500 hover:bg-blue-600' onClick={() => followUser(username)}>Follow</button> }
      </div> } */}
          </div>
          </>
          )
          })}
        </div>
        </div>
        <div className='relative cursor-pointer' onClick={() => {setFollowingList(!followingList); setFollowerList(false)}}><h1><span className='font-semibold'>{userData.followingCount} </span>following</h1>
        <div className={followingList ? `absolute bg-white rounded-lg border border-gray-100 w-64` : `absolute invisible null`}>
        {loading ? (
            <p>Loading...</p>
          ) : following.map((following: any) => { 
            return (
            <>
          <div className='flex justify-between hover:bg-gray-50'>
          <Link key={following._id} to={`/profile/${following.userName}`} className='py-1 '>
          <div className='flex gap-4'>
          <div className='my-auto'>
          <img className='w-[24px] h-[24px] rounded-full ml-4' src={following.profilePic}/>
          </div>
          <div>
          <h1 className='font-semibold text-sm'>{following.userName}</h1>
          <h1 className='text-xs text-gray-400'>{following.fullName}</h1>
          </div>
          </div>
          </Link>
          {/* {userData.isThisUserMe ? ( null ) : 
      <div className='my-auto mx-auto'> 
      {userData.isFollowingUser ? <button className='border font-semibold rounded-sm text-xs px-2 py-1 text-black bg-white' onClick={() => unfollowUser(username)}>Following</button> : <button className='border font-semibold px-2 py-1 text-xs rounded-sm text-white bg-blue-500 hover:bg-blue-600' onClick={() => followUser(username)}>Follow</button> }
      </div> } */}
          </div>
          </>
          )
          })}
          
          </div>
        </div>
      </div>
      <div className='pb-2'>
        <h1 className='font-semibold'>{userData.fullName}</h1>
        <h2 className='text-sm'>{userData.bio}</h2>
        <a href={`${userData.website}`} target='_blank' className='text-sm text-blue-900 cursor-pointer'>{userData.website}</a>
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
    </div>
  )
}

export default Profile