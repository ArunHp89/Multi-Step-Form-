import React from 'react'

export default function Basicdetails({formField , fieldHander ,heading}) {

  return (
 
    <div  >
        <h1>{heading}</h1>
    <input type='text' onChange={fieldHander} name='fname' defaultValue={formField.fname}  placeholder='FirstName'/>
    <input type='text' onChange={fieldHander}  defaultValue={formField.lname} name='lname'   placeholder='Last Name'/>
  </div>
  )
}
