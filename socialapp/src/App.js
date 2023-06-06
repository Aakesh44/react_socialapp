import Header from "./Header";
import Nav from "./Nav"
import Home from "./Home"
import NewPost from "./NewPost"
import About from "./About"
import Missing from "./Missing"
import Footer from "./Footer"
import Post from "./Post";
import {Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Pothlayout from "./Pothlayout";
import { useEffect, useState } from "react";
import {format} from "date-fns";
import Postpage from "./Postpage";
import EditPost from "./EditPost"
import api from "./api/postss";
import useAxiosFetch from "./hooks/useAxiosFetch";

import { DataProvider } from "./context/DataContext";


function App() {
  // const [posts,setPosts]=useState([])
  // const [search,setSearch]=useState('')
  // const [searchResult,setSearchResult]=useState([])
  // const [postTitle,setPostTitle]=useState('')
  // const [postBody,setPostBody]=useState('')
  // const [editTitle,setEditTitle]=useState('')
  // const [editBody,setEditBody]=useState('')
  // const navigate=useNavigate()
  // const {data,fetchError,isLoading}=useAxiosFetch("http://localhost:3500/posts")

  // // useEffect(()=>{
 
  // //   const fetchPosts=async()=>{

  // //     try {
  // //       const response=await api.get('/posts');
  // //       setPosts(response.data)
  // //     } catch (err) {
  // //       if (err.response) {
  // //         console.log(err.resonse.data)
  // //         console.log(err.resonse.status)
  // //         console.log(err.resonse.headers)

  // //       } else {
  // //         console.log(`Error:${err.message}`);
  // //       }
  // //     }
  // //   }
  // //   fetchPosts();
    
  // // },[])

  // useEffect(()=>{
  //   setPosts(data);
  // },[data])



  // useEffect(()=>{
  //   const filteredResults=posts.filter((post)=>
  //     ((post.body).toLowerCase()).includes(search.toLowerCase())||
  //     ((post.title).toLowerCase()).includes(search.toLowerCase()));

  //     setSearchResult(filteredResults.reverse());
  // },[posts,search])

  // const handleSubmit=async(e)=>{
  //   e.preventDefault();
  //   const id=posts.length ?posts[posts.length-1].id+1:1;
  //   const datetime=format(new Date(),'MMMM dd, yyyy pp');
  //   const newPost={id,title:postTitle,datetime,body:postBody}
  //   try{
  //     const response=await api.post('/posts',newPost)
  //     const allPosts=[...posts,response.data];
  //     setPosts(allPosts);
  //     setPostTitle('')
  //     setPostBody('')
  //     navigate('/')
  //   }
  //   catch (err) {
  //     if (err.response) {
  //       console.log(err.resonse.data)
  //       console.log(err.resonse.status)
  //       console.log(err.resonse.headers)

  //     } else {
  //       console.log(`Error:${err.message}`);
  //     }
  //   }
  // }

  // const handleDelete=async(e)=>{
  //   try{
  //     await api.delete(`/posts/${e}`)
  //     const postList=posts.filter(n=>n.id !==e)
  //     setPosts(postList)
  //     navigate('/')
  //   }
  //   catch(err){
  //     console.log(`Error : ${err.message}`);
  //   }
  // }

  // const handleEdit=async(e)=>{
    
  //     const datetime=format(new Date(),'MMMM dd,yyyy pp');
  //     const updatedPost={id:e,title:editTitle,datetime,body:editBody}

  //     try{
  //       const response=await api.put(`/posts/${e}`,updatedPost)
  //       setPosts(posts.map(n=>n.id===e ?{...response.data}:n));
  //       setEditTitle('')
  //       setEditBody('')
  //       navigate('/')
  //     }
  //    catch (err) {
  //       console.log(`Error:${err.message}`);
  //   }
  // }
  return (
    <div className="App p-2 flex flex-col">

      <DataProvider>
      <Header 
            title={"Hello social media app name"}
      /> 
       <Nav
            // search={search}
            // setSearch={setSearch}
      />

        <Routes>
            <Route path="/" element={<Home 
            // posts={searchResult} fetchError={fetchError} isLoading={isLoading}
            />}/>
            <Route path="NewPost">
                <Route index
                      element={<NewPost 
                      // handleSubmit={handleSubmit} 
                      // postTitle={postTitle} 
                      // setPostTitle={setPostTitle} 
                      // postBody={postBody} 
                      // setPostBody={setPostBody}
                      />}/>
                <Route path=":id" element={<Postpage
                //  posts={posts} handleDelete={handleDelete}
                 />}/>
              </Route>
            <Route path="/EditPost/:id" element={<EditPost
            //  posts={posts} handleEdit={handleEdit} editBody={editBody} setEditBody={setEditBody} editTitle={editTitle} setEditTitle={setEditTitle}
             />}/>
            <Route path="/About" element={<About/>}/>
            <Route path="*" element={<Missing/>}/>
        </Routes>

        <Footer/>
        </DataProvider>



       {/* <nav>
        <ul className="flex justify-around ">
          <li className=" list-disc "><Link to="/">Home</Link></li>
          <li className=" list-disc "><Link to="/about">About</Link></li>
          <li className=" list-disc "><Link to="/PostPage">PostPage</Link></li>
        </ul>
      </nav> */}
        {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/> 
          {/* <Route path="/PostPage" element={<PostPage/>}/>
          <Route path="/PostPage/:id" element={<Post/>}/>
          <Route path="/PostPage/NewPost" element={<NewPost/>}/>

           {/* <Route path="/PostPage" element={<Pothlayout/>}>
              <Route index element={<PostPage/>}/>
              <Route path=":id" element={<Post/>}/>
              <Route path="NewPost" element={<NewPost/>}/>
          </Route> */}
          {/* <Route path="*" element={<Missing/>}/>  */}
          {/* </Routes>  */} 















      {/* <Home
            posts={searchResult}
      /> */}
      {/* <NewPost/>
        <Postpage/> */}
      {/* <About/> */}
      {/* <Missing/>
      <Footer/>  */}
 

      
    </div>
  );
}

export default App;
