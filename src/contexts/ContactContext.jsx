import { createContext, useEffect, useState } from "react";

import React from 'react'
import api from "../api/api";
export const ContactContext = createContext();



const ContactContextProvider = ({children}) => {
    const [contacts,setContact]= useState([]);
    // json-server get contact
    const getAllContacts = async()=>{
        try {
            const res = await api.get("/contacts"); 
            console.log(res);  
            setContact(res.data); 
        } catch (error) {
            console.log(error.message);
        }

    }
    // json-server post contact
    const addContact = async(values)=>{
        try {
            const res = await api.post("/contacts",values)
            setContact([...contacts,res.data])
        } catch (error) {
            console.log(error.message);
        }
    }
    // json-server delete contact
    const removeContact = async(id)=>{
        try {
            const res = await api.delete(`/contacts/${id}`)
            const newContact = contacts.filter((contact)=>{return contact.id !== id})
            setContact(newContact)
        } catch (error) {
            console.log(error.message);
        }
    }
    // json-server update contact
    const updateContact = async(values)=>{
        try {
            const res = await api.put(`/contacts/${values.id}`,values)
            const {id} = res.data
            setContact(
                contacts.map((contact)=>{
                   return contact.id === id ? { ...res.data}:contact
                })
            )
            
        } catch (error) {
            console.log(error.message);
        }
    }
    //save contacts
    useEffect(() => {
        getAllContacts();
    },[])
    const ContactData = {
        contacts,
        getAllContacts,
        addContact,
        removeContact,
        updateContact
    }
    return (
       <ContactContext.Provider value={ContactData}>
           {children}
       </ContactContext.Provider>
    )
}

export default ContactContextProvider
