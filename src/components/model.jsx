import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { createPortal } from 'react-dom'
import { doc } from 'firebase/firestore'
const Model = ({onClose , isOpen, children}) => {
  return createPortal(
    <> 
    {isOpen && (
    
    <div>
    <div className= ' m-auto -my-40 text-white min-h-[400px] max-w-[40%] relative z-50 bg-white rounded p-4'>

<div className='flex justify-end'>
    < AiOutlineClose className='text-black text-2xl cursor-pointer' onClick={onClose}/>
</div>

{children}

</div>

<div onClick={onClose} className='h-screen backdrop-blur w-screen absolute top-0 z-40'/>

    </div>
    
   ) }
   
    </>
 ,document.getElementById('model-root') )
}

export default Model