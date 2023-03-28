
import { useState } from 'react';
import Basicdetails from './Basicdetails';
import ContactInfo from './ContactInfo';
import SocialProfiles from './SocialProfiles';
import Address from './Address';
import Sucess from './Sucess';
import Form3 from './Form3';
import SucessMsg from './Sucess';
function StepForm() {
 const [next , setNext]=useState(false);
  const nextField =()=>{
    setPageSlide(pageSlide + 1);
  }
  const previewField =()=>{
    setPageSlide(pageSlide - 1);
  }
  
  const [pageSlide , setPageSlide]=useState(0);
  const multiStep = ()=>{
  switch(pageSlide){
    case 0:   return <Basicdetails />;
    case 1:   return <ContactInfo />;
    case 2:   return <SocialProfiles />;
    case 3:   return <ContactInfo />;
    case 4:   return <Address />;
    case 5: return <Form3 />;
    case 6: return <SucessMsg />;
    default:      return  <Basicdetails />;
  }
}
  return (

    <>
    <div>
    <div className='sterep-main'>
    <ul className='sterep'>
      <li className={pageSlide>=0?'active':''}>
        <span>1</span>
        Basic Details
      </li>
      <li className={pageSlide>=1?'active':''}>
        <span>2</span> 
        Contact Info
      </li>
      <li className={pageSlide>=2?'active':''}>
        <span>3</span>
        Social Profiles
      </li>
        <li className={pageSlide>=3?'active':''}>
        <span>4</span>
        Contact Info
      </li>
      <li className={pageSlide>=4?'active':''}>
        <span>5</span>
        Address
      </li>
      <li className={pageSlide>=5?'active':''}>
        <span>6</span>
        Personal Info
      </li>
      <li className={pageSlide>=6?'active':''}>
        <span>7</span>
        Finish
      </li>
    </ul>
    </div>
      <form className=''>
      {/* {multiStep()} */}
     <div className={pageSlide==0?'formActive':'hide'} ><Basicdetails /></div>
     <div className={pageSlide==1?'formActive':'hide'}><ContactInfo /></div>
     <div  className={pageSlide==2?'formActive':'hide'}><SocialProfiles /></div>
     <div  className={pageSlide==3?'formActive':'hide'}><ContactInfo /></div>
     <div  className={pageSlide==4?'formActive':'hide'}><Address /></div>
     <div  className={pageSlide==5?'formActive':'hide'}><Form3 /></div>
     <div  className={pageSlide==6?'formActive':'hide'}> <SucessMsg/></div>
    
     <div className='next-pre'>
      <div>  {pageSlide>0 && pageSlide<=5? <div className='button' onClick={previewField} >Preview</div>:''} </div>
      <div>  {pageSlide<=4? <div className='button' onClick={nextField} >Next</div>:''}</div>
      {pageSlide==5?<div> <div onClick={nextField} className='button' >Sumbit</div></div>:''}
    
    </div>
    {pageSlide<=5? <ul className='douts'><li className={pageSlide==1?'active':''}></li>
       <li className={pageSlide==2?'active':''}></li> 
       <li className={pageSlide==3?'active':''}></li>
       <li className={pageSlide==4?'active':''}></li> 
       <li className={pageSlide==5?'active':''}></li>
       <li className={pageSlide==6?'active':''}></li>
       </ul>:''}
      </form>
      </div>
</>
  );
}

export default StepForm;
