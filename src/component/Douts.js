import React from 'react'

export default function Douts({page}) {
  return (
    <div>{page<=5? <ul className='douts'>
       <li className={page==0?'active':''}></li>
      <li className={page==1?'active':''}></li>
    <li className={page==2?'active':''}></li> 
    <li className={page==3?'active':''}></li>
    <li className={page==4?'active':''}></li> 
    <li className={page==5?'active':''}></li>
    <li className={page==6?'active':''}></li>
    </ul>:''}</div>
  )
}
