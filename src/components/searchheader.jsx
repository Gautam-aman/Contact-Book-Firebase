import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

export const Searchheader = () => {
  return (
    <div>
    <div className='flex justify-center items-center'>
    <FiSearch className='m-2 text-cyan-50 text-2xl'/>
    <div className='bg-white h-[40px] w-[500px] rounded-full flex justify-center items-center'>
        <input className='bg-white h-[40px] w-[450px] hover:outline-none rounded-full flex justify-center items-center' type='text'/>
    </div>
    <AiFillPlusCircle className='m-2 text-cyan-50 text-5xl cursor-pointer'/>
      </div>
      </div>
  )
}
