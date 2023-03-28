import React from 'react'

export default function Form3({formField , fieldHander , heading}) {
  return (
    
    <div>
        <h1>{heading}</h1>
    <input type='password' onChange={fieldHander} name='pass' defaultValue={formField.pass} placeholder='password'/>
    <input type='url' onChange={fieldHander} name='web' defaultValue={formField.web} placeholder='website'/>
  </div>
  )
}
