import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import useDisclouse from '../hooks/useDisclouse'
import AddAndupdate from './addAndupdate'

const Contactcard =  ( {contact} ) => {

  const {isOpen, onClose, onOpen} = useDisclouse();

  const deletecontact = async ({id})=>{
        try {
          await deleteDoc(doc(db, 'contacts', id));
        }
        catch(error){
          console.log(error);
        }
  }

  return (
    <div>
      <div className='text-white flex justify-between items-center' key={contact.id}>
          <HiOutlineUserCircle/>
          <h1 className='text-2xl p-4'>{contact.Name}</h1>
          <p className='text-sm'>{contact.Email}</p>
          <RiEditCircleLine onClick={onOpen} className='cursor-pointer'/>
          <IoMdTrash onClick={()=>deletecontact({id: contact.id})} className='cursor-pointer'/>
        </div>
        <AddAndupdate contact isUpdate isOpen={isOpen} onClose={onClose}/>
    </div>
  )
}

export default Contactcard
