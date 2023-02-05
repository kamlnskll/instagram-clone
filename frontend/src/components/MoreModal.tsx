import React from 'react'

type Props = {
    isOpen: boolean,
}

const MoreModal = ({isOpen}: Props) => {
  return (
    <div>
    { isOpen ? (
        <div className='w-full h-full bg-red-400 absolute top-12'>
        <h1>More Menu is Open</h1>
        </div>
    ) : (
        null
    )}


    </div>
  )
}

export default MoreModal