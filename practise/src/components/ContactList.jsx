import React from 'react';
import { useState,useEffect } from 'react';
import ContactRow from './ContactRow';


function ContactList({setSelectedContactId}) {
    let [contacts,setContacts]=useState([]);
    
    useEffect(()=>{
        async function fetchContacts(){
            try{
                let response=await fetch("https://jsonplaceholder.typicode.com/users"); 
                let data=await response.json();
                setContacts(data);
            }
            catch(e){
                console.error(e);
            }
        }
        fetchContacts()
    },[])
    return (
    <div>
        <div>
            <table>
                <thead>
                    <tr>
                    <th colSpan="3">Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td><strong>Email</strong></td>
                        <td><strong>Phone</strong></td>
                    </tr>
                    {contacts.map((c)=>{
                        return <ContactRow key={c.id} id={c.id} name={c.name} email={c.email} phone={c.phone} setSelectedContactId={setSelectedContactId}  />
                    })}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default ContactList