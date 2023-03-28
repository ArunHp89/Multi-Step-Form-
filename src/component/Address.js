import React from 'react'

export default function Address({formField , fieldHander}) {
  return (
    <div >
    <h1>Address</h1>
    <input type='text' onChange={fieldHander} name='vill' defaultValue={formField.vill} placeholder='Village'/>
<input type='text' onChange={fieldHander} name='po' defaultValue={formField.po} placeholder='Post Ofiice'/>
<input type='text' onChange={fieldHander} name='city' defaultValue={formField.city} placeholder='City'/>
<input type='text' onChange={fieldHander} name='state' defaultValue={formField.state} placeholder='State'/>

</div>
  )
}
