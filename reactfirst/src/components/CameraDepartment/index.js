
import React, { useState } from 'react'
import Header from '../Header';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import { faAngleDown, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Camera from '../images/Camera.png'






export default function CameraDepartment() {
    const [showChild, setshowChild] = useState(false)
  return (
    <div className='text-center'>
    <div className="text-white" onClick={()=>{
        setshowChild(!showChild)
    }}>{<Button/>}</div>
  { showChild && <div><Lasvegas/><UnitB/></div>}
    </div>
  )
}


export function Lasvegas() {
    const [showcam, setcam]=useState(false)  
  return (
    <div className=''>
   <div className='text-center ml-6'><FontAwesomeIcon className='mr-96 -mb-10 text-white border-solid border-hexa-50 border-2 ' icon={faAngleDown }></FontAwesomeIcon>
    <div className="hover:bg-gray-500 border-solid m-auto w-80 h-12 bg-hexa-50  mt-2 font-bold text-slate-400 rounded-sm" type="button"  onClick={()=>{
        setcam(!showcam)
    }}>{<button className=' mt-2'>Las Vegas</button>}</div>
  { showcam && <div className=' pl-6'> <div className='hover:bg-gray-500 border-solid w-72 w h-12 bg-hexa-50 font-bold text-slate-400 rounded-sm mx-auto '><img className='h-8 w-8 mt-4 -mb-5' src="../images/Camera.png"></img><button className=''>Cam ASony A7S</button></div></div>}    
</div>
</div>



  )
}


export function UnitB(){
    const [showcam, setcam] = useState(false)
    return(
      <div>
        <div className='text-center ml-6'><FontAwesomeIcon className='mr-96 -mb-10 text-white border-solid border-hexa-50 border-2' icon={faAngleDown}></FontAwesomeIcon>
                <div className="mt-2 hover:bg-gray-500 border-solid m-auto w-80 h-12 bg-hexa-50 font-bold text-slate-400 rounded-sm " type="button" onClick={()=>{
        setcam(!showcam)
        
    }}>{<button className='text-center w-auto mt-2 ' >Unit B Miami</button>}</div>
  { showcam &&  <div className='pl-6'>
    <div className='text-center hover:bg-gray-500 border-solid w-72 h-12 bg-hexa-50 font-bold text-slate-400 rounded-sm mt-6 mx-auto'><button className='mt-2'>Cam A</button></div>
    <div className=' hover:bg-gray-500 border-solid w-72 h-12 bg-hexa-50 font-bold text-slate-400 rounded-sm mt-2 mx-auto'><button className='mt-2'>Cam B</button></div>  
    <div className='hover:bg-gray-500 border-solid w-72 h-12 bg-hexa-50 font-bold text-slate-400 rounded-sm mt-2 mx-auto'><button className='mt-2'>Sound Device 888</button></div>
    
    </div>} 
     </div>  
     </div>


            )
    }