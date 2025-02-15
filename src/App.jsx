//import React from 'react'
import Navbar from './components/navbar'
//import Input from './components/input'
import React, { useEffect } from 'react'
import {FiSearch} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'
import { collection , getDoc} from 'firebase/firestore'
import {HiOutlineUserCircle} from 'react-icons/hi2'
import {RiEditCircleLine} from 'react-icons/ri'
import {IoMdTrash} from 'react-icons/io'
import { useState} from 'react'
import { db } from './config/firebase'
import {  onSnapshot } from "firebase/firestore";
import Contactcard from './components/contactcard'
import { Searchheader } from './components/searchheader'
import Model from './components/model'
import AddAndupdate from './components/addAndupdate'
import useDisclouse from './hooks/useDisclouse'

const App = () => {
  const [contacts, setContacts] = useState([]);

  const {isOpen, onClose, onOpen} = useDisclouse();

  const filtercontact =(e)=>{
    const search = e.target.value;
    const contactref = collection(db, 'contacts');
    onSnapshot(contactref, (snapshot)=>{
      const contactLists = snapshot.docs.map((doc)=>{
        return {
          id : doc.id, 
          ...doc.data()
        }
      })
      const filteredContacts = contactLists.filter((contact)=>
        contact.Name.toLowerCase().includes(search.toLowerCase())
      );
      setContacts(filteredContacts);
    })

    
    
    return filtercontact;
  }
  

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contacts');
        //console.log(contactsRef);

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          //console.log(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <>
    <div>
      <Navbar/>
      <div className='w-[900px] ml-66 flex flex-col justify-center items-center ' >
        <div className=''>
        <Searchheader onOpen={onOpen} filtercontact={filtercontact}/>
        </div>
       
      <div className='w-[500px]'>
      <div >
        {contacts.map((contact)=>{
          console.log(contact);
        return  <Contactcard key={contact.id} contact={contact}/>
        })}
      </div>
        
      </div>
   
     
   
    </div>
    </div>
    <AddAndupdate onClose={onClose} isOpen={isOpen}/>
    </>
  )
}
 
export default App