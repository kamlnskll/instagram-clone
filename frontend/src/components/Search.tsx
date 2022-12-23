import React from 'react'

// type Props = {

// isOpen: boolean,

// }

const isOpen = true
const Search = () => {
  return (
    <div className='absolute sticky top-0 z-50'>
{ isOpen ?  (
    <div className='border-r absolute w-[400px] h-screen bg-white rounded-r-2xl'>
    <div className=''>
        <h1 className='font-semibold text-3xl'>
        Search
        </h1>
        <input placeholder='Search' />
    </div>
    </div>
) : (null)}

    </div>
  )
}

export default Search