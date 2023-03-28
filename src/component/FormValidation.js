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
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();

export default function FormValidation() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
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
      web:'',
      hobbies:''
    })
    const [checked , setChecked]=useState(false)
    // ckeckedType()
    
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
      case 0:   return <Basicdetails heading={'Basic Details'} fieldHander={fieldHander} formField={formField} />;
      case 1:   return <ContactInfo heading={'Contact Info '} formField={formField} fieldHander={fieldHander} />;
      case 2:   return <SocialProfiles heading={'Social Profiles'} formField={formField} fieldHander={fieldHander} />;
      case 3:   return <Hobbies heading={'Hobbies'} setChecked={setChecked} checked={checked} formField={formField} fieldHander={fieldHander} />;
      case 4:   return <Address heading={'Address'} formField={formField} fieldHander={fieldHander}/>;
      case 5: return <Form3 heading={'Personal Info'} formField={formField} fieldHander={fieldHander} />;
      case 6: return <SucessMsg  formField={formField}/>;
      default:      return  <Basicdetails formField={formField} fieldHander={fieldHander}/>;
    }
  }
const stepValue = '';
  const steperHandler = ()=>{
setPage(page + 1 )
  }
  return (
    <div className='step-container'>
    <div className='step-form'>
<Steper steperHandler={steperHandler} setPage={setPage} page={page}/>
      <form>
      {multiStep()}
     
    
     <div className='next-pre'>
      <div>  {page>0 && page<=5? <div className='button' onClick={previewField} >Preview</div>:''} </div>
      <div>  {page<=4? <div className='button' onClick={nextField} >Next</div>:''}</div>
      {page==5?<div> <div onClick={nextField} className='button' >Sumbit</div></div>:''}
    
     </div>
     <Douts page={page} />
      </form>
  
    </div>
  
  </div>
  )
}
