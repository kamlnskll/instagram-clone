import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const EditProfile = () => {

const [menuTab, setMenuTab] = useState('')

  return (
    <div className='flex'>
    <Navbar />
    <div className='mx-auto h-screen'>
    <div className='bg-white h-1/2 my-12 flex'>
    <div className='border-r px-12'>Menu part</div>
    <div className='px-24'>
    Actual body of menu items</div>
    </div>
    </div>
    </div>
  )
}

export default EditProfile