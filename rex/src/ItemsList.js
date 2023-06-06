import React from 'react'
// import { FaTrashAlt } from "react-icons/fa";
// import { FcEmptyTrash } from "react-icons/fc";
import LineItem from './LineItem';

const ItemsList = ({items,handleCheck,deleteCheck}) => {
  return (

    <ul>
      
    {items.map((n)=>(
                    
                    <LineItem

                    n ={n}
                    key={n.id}
                    // setItems={setItems}
                    handleCheck={handleCheck}
                    deleteCheck={deleteCheck}
                    />
                    
                    

        // <li key={n.id}>
        //   <div className=' h-8 w-72 bg-slate-200 mx-auto my-5 flex justify-around'>     

        //       <input 
        //         type="checkbox"
        //         checked={n.checked}
        //         onChange={()=> handleCheck(n.id)}
        //         className=' h-8 w-5  my-auto bg-red-400'
        //       />

        //       <h1 onClick={()=> handleCheck(n.id)}
        //        className='font-semibold text-lg relative mr-16 '
        //         style={(n.checked)?{textDecoration:'line-through'}:null}>
                
        //         {n.item}</h1>

        //       <span className=' my-auto'>
        //         <FaTrashAlt 
        //           role='button'
        //           tabIndex="0"
        //           className=' text-green-600 '
        //           onClick={()=> deleteCheck(n.id)}
        //           /></span>

        //       <span className=' my-auto animate-spin delay-75'><FcEmptyTrash
        //           role='button'/></span>
        //     </div> 
        // </li>
    ))}
  
</ul>
  )
}

export default ItemsList