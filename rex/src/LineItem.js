import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FcEmptyTrash } from "react-icons/fc";

const LineItem = ({n,handleCheck,deleteCheck}) => {
  return (
<li key={n.id}>
          <div className=' h-8 w-1/3 bg-slate-200 mx-auto my-5 flex justify-around'>     

              <input 
                type="checkbox"
                checked={n.checked}
                onChange={()=> handleCheck(n.id)}
                className=' h-8 w-5  my-auto bg-red-400'
              />

              <h1 onClick={()=> handleCheck(n.id)}
               className='font-semibold text-lg relative mr-16 '
                style={(n.checked)?{textDecoration:'line-through'}:null}>
                
                {n.item}</h1>

              <span className=' my-auto'>
                <FaTrashAlt 
                  role='button'
                  tabIndex="0"
                  className=' text-green-600 '
                  onClick={()=> deleteCheck(n.id)}
                  aria-label={`Delete ${n.item}`}
                  /></span>

              <span className=' my-auto animate-spin delay-75'><FcEmptyTrash
                  role='button'/></span>
            </div> 
        </li>  )
}

export default LineItem