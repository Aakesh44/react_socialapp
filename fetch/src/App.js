import { useEffect, useState } from "react";
import Contant from "./Contant";
import Header from "./Header";


function App() {

  const API_URL="https://jsonplaceholder.typicode.com/";

  const [action,setAction]=useState('users')
  console.log(action);
  // const check='post'

  const [apiItems,setApiItems]=useState([]);

  const [fetchError,setFetchError]=useState(null)

  useEffect(()=>{
  const fetchItems=async()=>{
        try{
        const response=await fetch(`${API_URL}${action}`);
        if(!response.ok)throw Error("data not recived")
        console.log(response);
        const listItems=await response.json();
        setApiItems(listItems)
        console.log(listItems);
        setFetchError(null)
        }catch(err){
          setFetchError(err.message)
        }finally{

        }
  } ;


    // userButton()

  // fetchItems("https://jsonplaceholder.typicode.com/users");

  setTimeout(()=>{(async()=>await fetchItems())()},0)

},[action])
//[n]=> ithula iruka state change ana ithu re run agum empty ah vita namma reload panumpothu tha run agum

const userButton=()=>{
  // fetchItems("https://jsonplaceholder.typicode.com/users");
    setAction('users')
}
const postButton=()=>{
  // fetchItems("https://jsonplaceholder.typicode.com/posts")
  setAction('posts')
}
const commentButton=()=>{
  // fetchItems("https://jsonplaceholder.typicode.com/comments")
  setAction('comments')
}


  return (
    <div>
      <Header/>
      <Contant
        apiItems={apiItems}
        action={action}
        setAction={setAction}
        // dofetch={dofetch}
        // fetchItems={fetchItems}
        // selectAction={selectAction}
        userButton={userButton}
        postButton={postButton}
        commentButton={commentButton}
      />
    </div>
  );
}

export default App;


