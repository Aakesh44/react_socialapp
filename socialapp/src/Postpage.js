import React, { useContext } from 'react'
import { useParams,Link } from 'react-router-dom';
import Missing from './Missing';
import DataContext from './context/DataContext';

const Postpage = () => {

    const {posts,handleDelete}=useContext(DataContext)

    const {id}=useParams();
    const post=posts.find(post=>(post.id).toString()===id);

    return(
        <main>
            <article>
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p>{post.datetime}</p>
                        <p>{post.body}</p>
                       <Link to={`/EditPost/${post.id}`} ><button className=' border-2 border-black mx-3'>Edit Post</button> </Link>
                        <button 
                            onClick={()=>handleDelete(post.id)}
                            className=' border-2 border-black'>Delete Post</button>
                    </>
                }
                {!post &&
                    <>
                        <p>incorrect bro</p>
                        <Missing/>
                    </>
                }
            </article>
        </main>
    )
}

export default Postpage