import React from 'react'

type Props = {

isOpen: boolean,

}

const Search = ({isOpen}: Props) => {
  return (
    <div className='absolute sticky top-0 z-50'>
{ isOpen ?  (
    <div className='border-r absolute w-[400px] h-screen bg-white rounded-r-2xl'>
    <div className='grid grid-rows-2'>
        <h1 className='font-semibold text-2xl pt-6 pl-6'>
        Search
        </h1>
        <div className='px-6 pt-3 border-b relative'>
        <input placeholder='Search' className='w-full py-2 mb-6 pl-4 outline-none bg-gray-200 border-none rounded-lg' />
        <h1 className='absolute top-6 right-8 text-white bg-gray-300 border rounded-full px-1 text-xs cursor-pointer'>X</h1>
        </div>
    </div>
    </div>
) : (null)}

    </div>
  )
}

export default Search