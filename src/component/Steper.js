import React from 'react'

export default function Steper({page , steperHandler , setPage}) {
  return (
    <div className='sterep-main'>
    <ul className='sterep'>
      <li onClick={()=>setPage(0)} className={`${page>=0?'active':''} ${page==0?'current':''}` }>
      {page<=0?<span> 1</span>:<span>✓</span>}
        Basic Details
      </li>
      <li onClick={()=>setPage(1)} className={`${page>=1?'active':''} ${page==1?'current':''}` }>
      {page<=1?<span> 2</span>:<span>✓</span>}
        Contact Info
      </li>
      <li onClick={()=>setPage(2)} className={`${page>=2?'active':''} ${page==2?'current':''}` }>
      {page<=2?<span > 3</span>:<span>✓</span>}
        Social Profiles
      </li>
        <li onClick={()=>setPage(3)} className={`${page>=3?'active':''} ${page==3?'current':''}` }>
        {page<=3?<span> 4</span>:<span>✓</span>}
        Hobbies
      </li>
      <li onClick={()=>setPage(4)} className={`${page>=4?'active':''} ${page==4?'current':''}` }>
      {page<=4?<span> 5</span>:<span>✓</span>}
        Address
      </li>
      <li onClick={()=>setPage(5)} className={`${page>=5?'active':''} ${page==5?'current':''}` }>
      {page<=5?<span> 6</span>:<span>✓</span>}
        Personal Info
      </li>
      <li onClick={()=>setPage(6)} className={`${page>=6?'active':''} ${page==6?'current':''}` }>
      {page<=6?<span> 7</span>:<span>✓</span>}
        Finish
      </li>
    </ul>
    </div>
  )
}
