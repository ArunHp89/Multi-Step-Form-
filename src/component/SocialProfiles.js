import React from 'react'

export default function SocialProfiles({formField , fieldHander , heading}) {
  return (
    <div >
    <h1>{heading}</h1>
    <input type='url' onChange={fieldHander} name='fb' defaultValue={formField.fb} placeholder='Facebook'/>
<input type='url' onChange={fieldHander} name='tw' defaultValue={formField.tw} placeholder='Twitter'/>
<input type='url' onChange={fieldHander} name='insta' defaultValue={formField.insta} placeholder='Insta'/>

</div>
  )
}
