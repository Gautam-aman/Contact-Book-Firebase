import React, { useState } from "react";
import Model from "./model";
//import { Field, Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndupdate = ({ onClose, isOpen, contact , isUpdate}) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const addContact = async ({name, email}) => {
    console.log("before try");
    try {
      console.log("on addcontact");
      const contactsRef = collection(db, 'contacts');
      await addDoc(contactsRef, {name, email});
    } catch(error) {
      console.log(error);
    }
  };

  

  return (
    <div>
      <Model onClose={onClose} isOpen={isOpen}>
        <form onSubmit={({name,email})=>{
            console.log("submitted")
            addContact({name,email})
            console.log("submitted by me")
            }}>
          <label className="text-black flex flex-col p-4 m-3">
            Enter Name:
            <input className="h-10 border-2 border-gray-300 text-black rounded-md p-2 "
              type="text"
              name = "name"
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
              name="email"
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
