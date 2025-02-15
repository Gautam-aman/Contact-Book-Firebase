import React, { useState } from "react";
import Model from "./model";
//import { Field, Formik } from "formik";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndupdate = ({ onClose, isOpen, contact , isUpdate}) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const addContact = async ({Name, Email}) => {
    console.log("before try");
    try {
      console.log("on addcontact");
      const contactsRef = collection(db, 'contacts');
      await addDoc(contactsRef, {Name, Email});
    } catch(error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id )=>{ 
    try{
      const contactRef = doc(db, 'contacts', id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact updated successfully");
    }
    catch(error){
      console.log(error);
      toast.error("Contact updated failed");  
    }
  }

  return (
    <div>
      <Model onClose={onClose} isOpen={isOpen}>
        <form onSubmit={({Name,Email})=>{
         //   console.log("submitted")
         isUpdate ? updateContact(contact, contact.id) : addContact({Name,Email})
           // addContact({name,email})
           // console.log("submitted by me")
            }}>
          <label className="text-black flex flex-col p-4 m-3">
            Enter Name:
            <input className="h-10 border-2 border-gray-300 text-black rounded-md p-2 "
              type="text"
              name = "Name"
              value={name}
              onChange={(e) => {
                console.log(e.target.value);
                setname(e.target.value)}}
            />
          </label>
          <label className="text-black flex flex-col p-4 m-3">
            Enter Email:
            <input className="h-10 border-2 border-gray-300 text-black rounded-md p-2 "
              type="text"
              name="Email"
              value={email}
              onChange={(e) => {
                console.log(e.target.value);
                setemail(e.target.value)}}
            />
          </label>
          <input  className="text-black cursor-pointer bg-blue-500 p-5 mt-4 rounded-md w-40 ml-50" type="submit" />
        </form>
      </Model>
    </div>
  );
};

export default AddAndupdate;
