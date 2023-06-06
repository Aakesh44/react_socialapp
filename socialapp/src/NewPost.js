import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const NewPost = () => {

  const {handleSubmit,postTitle,setPostTitle,postBody,setPostBody}=useContext(DataContext)
  return (
    <main className=' bg-amber-200 mt-2'>
        <h2 className=' text-center text-xl'>New Post</h2>
        <form onSubmit={handleSubmit} className=' flex flex-col'>
          <label htmlFor="postTitle">Title:</label>
          <input 
            type="text"
            id='postTitle'
            className=' outline-1 outline mx-16 h-7 w-1/2'
            required
            value={postTitle}
            onChange={e=>setPostTitle(e.target.value)} />

          <label htmlFor="postBody">Post:</label>
          <textarea 
            type="text"
            id='postBody'
            className=' outline-1 outline mx-16 w-1/2'
            required
            value={postBody}
            onChange={e=>setPostBody(e.target.value)} />

            <button type="submit" className=' mt-3 border-2 border-amber-700 w-24 mx-auto'>Post pannu</button>
        </form>
    </main>
  )
}

export default NewPost