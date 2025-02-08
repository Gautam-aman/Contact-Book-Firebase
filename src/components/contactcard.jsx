import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'

const Contactcard =  ( {contact} ) => {
  return (
    <div>
      <div className='text-white flex justify-between items-center' key={contact.id}>
          <HiOutlineUserCircle/>
          <h1 className='text-2xl p-4'>{contact.Name}</h1>
          <p className='text-sm'>{contact.Email}</p>
          <RiEditCircleLine className='cursor-pointer'/>
          <IoMdTrash className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default Contactcard
