import React from 'react'
import { BiCommentAdd } from "react-icons/bi"
import { useRef } from 'react'


const AddItem = ({newItem,setNewItem,handleSubmit}) => {

const inputRef=useRef()
// its for change the status to normal like,auto focus panna keela paru purium
  return (

    <form onSubmit={handleSubmit}>
        <div className=' h-10 w-screen flex justify-between mt-6'>
            <label 
                htmlFor="addItem" 
                className=' mr-2 my-auto '>
                    Add pandra</label>
            <input 
                autoFocus
                ref={inputRef}
                type="text" 
                id='addItem'
                placeholder='Add pandra' 
                className=' w-1/2 outline-none placeholder-stone-950'
                required
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}
            />
            <button 
                type="submit"
                aria-label='add Item'
                onClick={()=>inputRef.current.focus()}>
                <BiCommentAdd 
                    className=' h-10 w-10 mr-6 '/>

            </button>
        </div>
    </form>
  )
}

export default AddItem