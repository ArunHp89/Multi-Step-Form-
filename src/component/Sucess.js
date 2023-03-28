import React from 'react'

export default function SucessMsg({formField}) {
  return (
    <div>
      
   
     
      {formField.fname!=='' || formField.lname!=='' || formField.number!=='' || formField.email!=='' ||
      formField.fb !=='' || formField.tw!=='' || formField.insta!=='' || formField.vill!=='' || formField.po!=='' || formField.city!=='' ||
      formField.state!=='' || formField.pass!=='' || formField.hobbies!=='' || formField.web!==''?(<>
       <div className='sucess'>Thank you for getting in touch!</div>
      <p><strong>Your Sumbit Data</strong></p>
      {formField.fname==''?'': <p><strong>First Name</strong> : {formField.fname}</p>}
      {formField.lname==''?'': <p><strong>Last Name </strong>: {formField.lname}</p>}
      {formField.number==''?'':   <p><strong>Phone number</strong> : {formField.number}</p>}
      {formField.email==''?'': <p><strong>Email</strong> : {formField.email}</p>}
      {formField.fb==''?'': <p><strong>Facebook</strong> : {formField.fb}</p>}
      {formField.tw==''?'':   <p><strong>Twitter</strong> : {formField.tw}</p>}
     {formField.insta==''?'':  <p><strong>Instagram</strong> : {formField.insta}</p>}
     {formField.vill==''?'':   <p><strong>Village</strong> : {formField.vill}</p>}
     {formField.po==''?'':  <p><strong>Post Office</strong> : {formField.po}</p>}
     {formField.city==''?'':  <p><strong>City</strong> : {formField.city}</p>}
     {formField.state==''?'':  <p><strong>State</strong> : {formField.state}</p>}
     {formField.pass==''?'': <p><strong>Password</strong> : {formField.pass}</p>}
     {formField.web==''?'':  <p><strong>Website</strong> : {formField.web}</p>}
     {formField.Hobbies==''?'':   <p><strong>Hobbies:</strong> {formField.hobbies}</p>}
     </>)
    : <div className='sucess error'>Please Enter Your Data</div>}
    </div>
  )
}
