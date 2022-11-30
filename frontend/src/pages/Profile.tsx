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
    
      <div>
      <img src={userData.profilePic}/>
      <h1>{userData.fullName}</h1>
      </div>

   

    </div>
  )
}

export default Profile