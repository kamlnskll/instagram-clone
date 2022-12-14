import React from 'react'

type Props = {
isOpen: boolean

}
const CommentForm = ({isOpen}: Props) => {
  return (
    <div className={ isOpen ? `pr-4 pt-4 flex` : `hidden`}>
<textarea className='border border-none bg-gray-50 w-full placeholder:text-sm outline-none text-sm'
placeholder='Add a comment...'/> 
</div>
  )
}

export default CommentForm