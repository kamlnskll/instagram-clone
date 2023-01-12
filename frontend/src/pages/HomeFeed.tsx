import jwtDecode from 'jwt-decode'
import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import NewPostModal from '../components/NewPostModal'
import Post from '../components/Post'
import { getAllPosts } from '../utils/axios/postAPIs'

const HomeFeed = () => {
const [post, setPost] = useState([])

const checkIfValidToken = () => {
  const userToken: any = localStorage.getItem('token')
  const { exp }: any = jwtDecode(userToken)
  // @ts-ignore
  if(exp && userToken && Date.now() >= exp * 1000){
    localStorage.removeItem('token')
    window.location.reload()
  } else {
    return
  }
}


useEffect(() => {
checkIfValidToken()
getAllPosts().then((res) => {setPost(res)
console.log(res)})
console.log(Date.now())
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