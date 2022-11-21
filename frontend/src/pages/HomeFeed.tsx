import React from 'react'
import Navbar from '../components/Navbar'
import Post from '../components/Post'

const HomeFeed = () => {
  return (
      <div className='flex'>
      <Navbar />
      <div>
      <Post isOnFeed={true}/>
      </div>
      </div>
  )

}

export default HomeFeed