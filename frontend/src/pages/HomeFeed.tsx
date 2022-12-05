import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import NewPostModal from '../components/NewPostModal'
import Post from '../components/Post'
import { getAllPosts } from '../utils/axios/postAPIs'

const HomeFeed = () => {
const [post, setPost] = useState([])

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
      <Post isOnFeed={true} post={eachPost}/>
      )})}
      </div>
      </div>
  )

}

export default HomeFeed