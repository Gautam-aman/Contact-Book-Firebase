import React, { useEffect } from 'react'
import {FiSearch} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'
import { collection , getDoc} from 'firebase/firestore'
import {HiOutlineUserCircle} from 'react-icons/hi2'
import {RiEditCircleLine} from 'react-icons/ri'
import {IoMdTrash} from 'react-icons/io'

import { useState} from 'react'
import { db } from '../config/firebase'
//import { useEffect } from 'react'
const Input = () => {

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const getcontact = async ()=>{
            try{
                const contactref   = collection(db, 'contacts');
                const contactsnap = await getDoc(contactref);
                console.log(contactsnap);
                const contactlist = contactsnap.docs.map((doc)=>{
                    return {
                        id: doc.id,
                    ...doc.data()
                    }
                });
                console.log(contactlist);
                setContacts(contactlist);
                return contactlist;
            } 
            catch(error){
                console.log(error);
            }
        };
        getcontact();
    },[])

  return (
    <div>
        <div className='flex justify-center items-center'>
        <FiSearch className='m-2 text-cyan-50 text-2xl'/>
        <div className='bg-white h-[40px] w-[500px] rounded-full flex justify-center items-center'>
            <input className='bg-white h-[40px] w-[450px] hover:outline-none rounded-full flex justify-center items-center' type='text'/>
        </div>
        <AiFillPlusCircle className='m-2 text-cyan-50 text-5xl cursor-pointer'/>
    </div>
    <div>
         {contacts.map((contact)=>(
            <div key={contact.id}>
                <HiOutlineUserCircle/>
                <h1 className='text-white'>{contact.name}</h1>
                <h1 className='text-white'>{contact.email}</h1>
                <RiEditCircleLine/>
                <IoMdTrash/>
            </div>
         ))}
    </div>
    </div>
  )
}

export default Input