import jwtDecode from 'jwt-decode'
import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import NewPostModal from '../components/NewPostModal'
import Post from '../components/Post'
import { getAllPosts } from '../utils/axios/postAPIs'

const HomeFeed = () => {
const [post, setPost] = useState([])

const checkIfValidToken = async () => {
  const userToken: any = localStorage.getItem('token')
  const decodedToken = await jwtDecode(userToken)
  console.log(decodedToken)
  // @ts-ignore
  if(decodedToken !== null && decodedToken.iat < decodedToken.exp){
    localStorage.removeItem('token')
  } else {
    
  }
}


useEffect(() => {
getAllPosts().then((res) => {setPost(res)
console.log(res)})
// console.log(res)})
}, [])


  return (
      <div className='flex'>
      <Navbar />
      <div className='mx-auto'>
      {post.map((eachPost) => {
        return (
      <div className='pt-4 pb-6'>
      <Post isOnFeed={true} post={eachPost}/>
      </div>
      )})}
      </div>
      </div>
  )

}

export default HomeFeed