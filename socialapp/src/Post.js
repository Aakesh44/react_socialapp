import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = ({post}) => {


  //   const {id}=useParams()
  
  // return (
  //   <div className=' text-4xl'>Post{id}</div>
  // )

  return(

    <article className=' boeder-2 m-2 shadow-md shadow-fuchsia-400 flex flex-col'>
      <Link to={`NewPost/${post.id}`}>
        <h2 className=' text-lg ml-2 font-semibold'>{(post.title).toUpperCase()}</h2> 
        <p className=' text-sm ml-2 my-1'>{post.datetime}</p>
      </Link>
      <p className=' text-md ml-2  my-1'>{(post.body)<=35 ? post.body:`${(post.body).slice(0,35)}... `}</p>
    </article>
  )
}

export default Post