import React from 'react'
import { useState } from 'react';
import Basicdetails from './Basicdetails';
import ContactInfo from './ContactInfo';
import SocialProfiles from './SocialProfiles';
import Address from './Address';
import Form3 from './Form3';
import SucessMsg from './Sucess';
import Hobbies from './Hobbies';
import Steper from './Steper';
import Douts from './Douts';

export default function Home() {
    const [next , setNext]=useState(false);
    const nextField =()=>{
      setPage(page + 1);
   
    }
    const previewField =()=>{
      setPage(page - 1);
    
    }
    const [formField , setFormField]=useState({
      fname:'',
      lname:'',
      number:'',
      email:'',
      fb:'',
      tw:'',
      insta:'',
      vill:'',
      po:'',
      city:'',
      state:'',
      pass:'',
      web:''
    })
    const fieldHander = (e)=>{
      const {name , value} =e.target;

      setFormField(()=>{
        return{
        ...formField,
        [name]:value
      };
      })
    }
    const [page , setPage]=useState(0);
    const multiStep = ()=>{
    switch(page){
      case 0:   return <Basicdetails fieldHander={fieldHander} formField={formField} />;
      case 1:   return <ContactInfo formField={formField} fieldHander={fieldHander} />;
      case 2:   return <SocialProfiles formField={formField} fieldHander={fieldHander} />;
      case 3:   return <Hobbies formField={formField} fieldHander={fieldHander} />;
      case 4:   return <Address formField={formField} fieldHander={fieldHander}/>;
      case 5: return <Form3 formField={formField} fieldHander={fieldHander} />;
      case 6: return <SucessMsg formField={formField}/>;
      default:      return  <Basicdetails formField={formField} fieldHander={fieldHander}/>;
    }
  }
  return (
    <div className='step-container'>
    <div className='step-form'>
<Steper page={page}/>
      <form>
      {multiStep()}
     
    
     <div className='next-pre'>
      <div>  {page>0 && page<=5? <div className='button' onClick={previewField} >Preview</div>:''} </div>
      <div>  {page<=4? <div className='button' onClick={nextField} >Next</div>:''}</div>
      {page==5?<div> <input type='submit' onClick={nextField} className='button'/ ></div>:''}
    
     </div>
     <Douts page={page} />
      </form>
  
    </div>
  
  </div>
  )
}
