import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const EditPost = () => {

  const {posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle}=useContext(DataContext)

  const {id}=useParams();
  const post=posts.find(n=>(n.id).toString()===id)

  useEffect(()=>{
    if(post){
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  },[post,setEditTitle,setEditBody])

  return (
    <main>
      {editTitle &&
        <>
          <h2 className=' text-center text-2xl'>EditPost</h2>
          <form onSubmit={(e)=>e.preventDefault()} className='mt-10 flex'>
            <label htmlFor="postTitle" className=' text-lg mr-4 my-auto'>Title:</label>
            <input 
              type="text"
              id="postTitle" required
              className=' outline-1 outline  h-7 w-1/4 my-auto'
              value={editTitle}
              onChange={(e)=>setEditTitle(e.target.value)} />
            <label htmlFor="postBody" className=' my-auto ml-8 mr-4'>Post:</label>
            <textarea 
              id="postBody"
              required
              className=' outline outline-1 min-h-fit w-1/4 my-auto'
              value={editBody}
              onChange={(e)=>setEditBody(e.target.value)}>
            </textarea>
            <button type='submt' className=' ml-9 border boder-1 h-8 my-auto' onClick={()=>handleEdit(post.id)}>Submit</button>
          </form>
        </>
      }
      {!editTitle &&
        <>
          <h2>Post not found for edit case</h2>
          <p><Link to='/'/>Visit home page</p>
        </>
      }
    </main>
  )
}

export default EditPost