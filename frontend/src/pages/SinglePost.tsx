import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import { getPostById } from '../utils/axios/postAPIs'

const SinglePost = () => {

const { postid } = useParams()
const [post, setPost] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
getPostById(postid).then((res: any) => setPost(res)).then(res => setLoading(false))
}, [])

  return (
    <div className='flex'>
        <Navbar />
        <div className='my-auto mx-auto w-1/2 h-2/3'>
        { loading ? <p>Loading</p> :
        <>
        {/* <button onClick={() => console.log(post)}>Test Button For Post Data</button> */}
        <Post isOnFeed={true} post={post} />
        </>
        }
        </div>
        
        
    </div>
  )
}

export default SinglePost