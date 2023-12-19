import React from 'react';
import { useState,useEffect } from 'react';
export default function SelectedContact({selectedContactId,setSelectedContactId}) {
    let [contact,setContact]=useState(null);
    console.log("contact",contact);
    useEffect(()=>{
        async function fetchContact(){
            try{
                let response=await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`); 
                let data=await response.json();
                setContact(data);
            }
            catch(e){
                console.error(e);
            }
        }
        fetchContact()
    },[])
    if(contact){
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th colSpan="2">{contact.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>id: {contact.id}</tr>
                <tr>Name: {contact.name}</tr>
                <tr>Username: {contact.username}</tr>
                <tr>email: {contact.email}</tr>
                <tr>City: {contact.address.city}</tr>
                <tr>Company: {contact.company.name}</tr>
            </tbody>
        </table>
        <button onClick={()=>{
                    setSelectedContactId(null)
                }}>Go Back!</button>
    </>
   )
  }
}
