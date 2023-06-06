import { createContext,useState,useEffect, children } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import api from "../api/postss";
import {format} from "date-fns";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext=createContext({})

export const DataProvider=({children})=>{
    const [posts,setPosts]=useState([])
    const [search,setSearch]=useState('')
    const [searchResult,setSearchResult]=useState([])
    const [postTitle,setPostTitle]=useState('')
    const [postBody,setPostBody]=useState('')
    const [editTitle,setEditTitle]=useState('')
    const [editBody,setEditBody]=useState('')
    const navigate=useNavigate()
    const {data,fetchError,isLoading}=useAxiosFetch("http://localhost:3500/posts")
  
    // useEffect(()=>{
   
    //   const fetchPosts=async()=>{
  
    //     try {
    //       const response=await api.get('/posts');
    //       setPosts(response.data)
    //     } catch (err) {
    //       if (err.response) {
    //         console.log(err.resonse.data)
    //         console.log(err.resonse.status)
    //         console.log(err.resonse.headers)
  
    //       } else {
    //         console.log(`Error:${err.message}`);
    //       }
    //     }
    //   }
    //   fetchPosts();
      
    // },[])
  
    useEffect(()=>{
      setPosts(data);
    },[data])
  
  
  
    useEffect(()=>{
      const filteredResults=posts.filter((post)=>
        ((post.body).toLowerCase()).includes(search.toLowerCase())||
        ((post.title).toLowerCase()).includes(search.toLowerCase()));
  
        setSearchResult(filteredResults.reverse());
    },[posts,search])
  
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const id=posts.length ?posts[posts.length-1].id+1:1;
      const datetime=format(new Date(),'MMMM dd, yyyy pp');
      const newPost={id,title:postTitle,datetime,body:postBody}
      try{
        const response=await api.post('/posts',newPost)
        const allPosts=[...posts,response.data];
        setPosts(allPosts);
        setPostTitle('')
        setPostBody('')
        navigate('/')
      }
      catch (err) {
        if (err.response) {
          console.log(err.resonse.data)
          console.log(err.resonse.status)
          console.log(err.resonse.headers)
  
        } else {
          console.log(`Error:${err.message}`);
        }
      }
    }
  
    const handleDelete=async(e)=>{
      try{
        await api.delete(`/posts/${e}`)
        const postList=posts.filter(n=>n.id !==e)
        setPosts(postList)
        navigate('/')
      }
      catch(err){
        console.log(`Error : ${err.message}`);
      }
    }
  
    const handleEdit=async(e)=>{
      
        const datetime=format(new Date(),'MMMM dd,yyyy pp');
        const updatedPost={id:e,title:editTitle,datetime,body:editBody}
  
        try{
          const response=await api.put(`/posts/${e}`,updatedPost)
          setPosts(posts.map(n=>n.id===e ?{...response.data}:n));
          setEditTitle('')
          setEditBody('')
          navigate('/')
        }
       catch (err) {
          console.log(`Error:${err.message}`);
      }
    }
    return(
        <DataContext.Provider value={{

            search,setSearch,
            searchResult,fetchError,isLoading,
            handleSubmit,postTitle,setPostTitle,postBody,setPostBody,
            posts,handleDelete,
            handleEdit,editBody,setEditBody,editTitle,setEditTitle
             
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext