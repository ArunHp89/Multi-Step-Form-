import React from 'react'

export default function Hobbies({formField , fieldHander , heading  , checked}) {
  return (
    <div>
<h1>{heading}</h1>
<div className='hobbies-row'>
        <div className='hobbies'>
            <label>Cricket</label>
            <input onChange={fieldHander} type="radio" name="hobbies" value='Cricket' />  
        </div>
        <div className='hobbies'>
            <label> Watch Tv </label>
            <input onChange={fieldHander} type="radio" name="hobbies" value='Watch Tv' /> 
        </div>
        <div className='hobbies'>
            <label>Play Game</label>
            <input onChange={fieldHander} type="radio" name="hobbies" value='Play Game' />
        </div>
        <div className='hobbies'>
            <label> Internet Surfing</label>
            <input onChange={fieldHander} type="radio" value='Internet Surfing' name="hobbies" />  
        </div>
       
        </div>
      

    </div>
  )
}
