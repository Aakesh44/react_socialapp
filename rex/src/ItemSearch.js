import React from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";


const ItemSearch = ({search,setSearch}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
    <div className=' h-10 w-screen flex justify-between mt-6'>
        <label 
            htmlFor="search" 
            className=' mr-2 my-auto '>
                Search pandra</label>
        <input 
            type="text" 
            id='search'
            placeholder='Search pandra' 
            role='searchbox'
            className=' w-1/2 outline-none placeholder-stone-950'

            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            
            
        />
        <button 
            type="submit"
            aria-label='add Item'>
            <AiOutlineFileSearch 
                className=' h-10 w-10 mr-6'/>

        </button>
    </div>
</form>
  )
}

export default ItemSearch