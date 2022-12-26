import React, { useState } from 'react'
import Header from '../Header';
import Button from '../Button';




export default function Accordion() {
    const [showChild, setshowChild] = useState(false)
  return (
    <div className='text-center mx-96'>
    <div className="text-white" onClick={()=>{
        setshowChild(!showChild)
    }}>{}</div>
  { showChild &&  <div>1</div>}
    </div>
  );
}
