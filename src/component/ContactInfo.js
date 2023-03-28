import React from 'react'

export default function ContactInfo({formField , fieldHander , heading}) {
  return (
    <div >
         <h1>{heading}</h1>
         <input type='number'  onChange={fieldHander} name='number' defaultValue={formField.number} placeholder='Phone Number'/>
    <input type='email'  onChange={fieldHander} name='email' defaultValue={formField.email} placeholder='Email'/>
    
  </div>
  )
}
