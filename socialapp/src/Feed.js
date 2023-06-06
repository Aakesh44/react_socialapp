import React from 'react'
import Post from './Post'

const Feed = ({posts}) => {
  return (
    <div className=' m-1 border-2 max-h-screen overflow-y-auto'>
        {posts.map(post=>(
            <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}

export default Feed