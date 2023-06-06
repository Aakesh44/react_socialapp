import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const Nav = () => {

  const {search,setSearch}=useContext(DataContext)
  return (
    <nav className=' bg-amber-200 flex flex-row justify-around'>
      <form onSubmit={(e)=>e.preventDefault()} className=' my-auto'>

        <label htmlFor="search">Search Posts</label>
        <input 
          type="text"
          id='search'
          className=' outline mx-3 outline-1 my- auto'
          value={search}
          onChange={(e)=>setSearch(e.target.value)} />

      </form>
      <ul className=''>
        <li className=' list-disc underline'><Link to="/">Home</Link></li>
        <li className=' list-disc underline'><Link to="/NewPost">post</Link></li>
        <li className=' list-disc underline'><Link to="/About">about</Link></li>
      </ul>
    </nav>
  )
}

export default Nav