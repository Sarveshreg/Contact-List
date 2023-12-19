import React from 'react'

function ContactRow({id,name,email,phone,setSelectedContactId}) {
  return (
    <tr onClick={()=>{
        console.log("use clicked",id);
        setSelectedContactId(id);
    }}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
    </tr>
  )
}

export default ContactRow