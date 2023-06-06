// import logo from './logo.svg';
// import './App.css';

import Contant from "./Contant";
import Footer from "./Footer";
import Header from "./Header";
import './App.css';
import { useState } from 'react';
import AddItem from "./AddItem";
import ItemSearch from "./ItemSearch";
import Project from "./Project";
import ColorChange from "./ColorChange";
import { useEffect } from "react";
import { MdFrontLoader } from "react-icons/md";
import ApiRequest from "./ApiRequest";





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <h1>aakesh</h1>
//       </header>
//     </div>
//   );
// }

// export default App;


// function App() {

//   function Change() {
//     const name=["hii","vanakam","welcome"];
//     let int =Math.floor(Math.random()*3);

//     return name[int]
//   }
 
//   return(

//     <div>
//         hello
//         <p>changing word {Change()} </p>
//         <p>{[8,8]}</p>
//     </div>
//   );
  
// }

// export default App;

function App() {

  const API_URL="http://localhost:3500/items";

  const [items,setItems]=useState( 
    [
      // {id:1,
      // checked:true,
      // item:"practice first"},

      // {id:2,
      // checked:true,
      // item:"practice mid"},

      // {id:3,
      // checked:false,
      // item:"practice last"}
    ]

    // ipo useEffect use panna pothu
    // JSON.parse(localStorage.getItem("prac_list")) itha use pannuvom apo oru vela local storage la intha file delete agiruchuna app crash agirum atha prevrnd panna 
      // JSON.parse(localStorage.getItem("prac_list")) || [] ipdi kudukanum that way epdium antha file la oru empty arr irukum file delete agathu

  )
// ethathu error iruntha atha usestate use panni oru variable la store panni show or ethathu pannikalam
const [fetchError,setFetchError]=useState(null)
const [isLoading,setIsLoading]=useState(true)

// app adikadi load aguratha prevend panna like,ipo oru thadava ethathu enter pannum pothum load agum..apo big data va ithula potu vachuta oru time crct ah load agi thevapadum ppothy eduthukalam
  useEffect(()=>{
    // console.log("use effect panniruken - Rendering");
    // console.log("load time");
    // JSON.parse(localStorage.getItem("prac_list"))
    // ithla namma json ah kudukum pothu app fast ah irukum
  // },[items])

// api use panna porom

  const fetchItems=async()=>{
    try {

      const response=await fetch(API_URL);
      if (!response.ok) throw Error("data not recived")
      console.log(response);
      const listItems=await response.json();
      console.log(listItems);
      console.log(items);
      setItems(listItems)
      setFetchError(null)
    } catch (error) {
      // console.log(error.stack);
      setFetchError(error.message)
    } finally{
      setIsLoading(false) 
    }
  }
  // (async()=>await fetchItems())()

  // ithu namma delay pannirukom..incase server ethathu slow ah iruntha load aga itha kudukalam
  setTimeout(() => {
    (async()=>await fetchItems())()
  },1000);
},[])

  const [newItem,setNewItem]=useState('')
  const [search,setSearch]=useState('')

  const addItem=async(aitem)=>{
    const id=items.length ? items[items.length-1].id+1:1
    const addNewItem={id,checked:false,item:aitem}
    // console.log("aitem :",aitem);

    const listItem=[...items,addNewItem]
    setItems(listItem)
    // localStorage.setItem("prac_list",JSON.stringify(listItem))

    const postOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addNewItem)
    }

    const result=await ApiRequest(API_URL,postOptions)
    if(result) setFetchError(result)
  }

  const handleSubmit=(e)=>{
      e.preventDefault()
      console.log("check submit");

      if (!newItem) return
      console.log(newItem);
      addItem(newItem)
      // oruka type panni enter panna aprm empty ah iruka type pandra place
      setNewItem('')
  }

  const handleCheck=async(idn)=>{
          console.log(`id: ${idn}`);
          console.log("loop");

          const listitems=items.map((m)=>

          // m.id===idn?{checked:!m.checked}:m)
          // ipdi kudtha antha arr la checked ah mattum update panni methi key ellam vitu
          //show pannum..apo neraya error varum so keela iruka mari tha pannanum
          m.id===idn?{...m,checked:!m.checked}:m)

          //ipdi pannum pothu ...m vantthu antha arr ah vachutu alter panni kudukanum

          setItems(listitems)

    //local storage use

    // localStorage.setItem("prac_list",JSON.stringify(listitems))

        const myItem=listitems.filter(n=>n.id===idn)

        const updateOptions={
          method:'PATCH',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({checked:myItem[0].checked})
        }
        const reqUrl=`${API_URL}/${idn}`
        const result=await ApiRequest(reqUrl,updateOptions)
        if(result) setFetchError(result)

          
  }

  // const deleteCheck=(did)=>{

  //   const iteminlist=items.map((m)=>
  //   m.id===did ?{item:"click panniya😘"}:m)

  //   setItems(iteminlist)
  // }

  const deleteCheck=async(did)=>{
    const listitems=items.filter((m)=>
    m.id!==did)

    // console.log(did.id);

    setItems(listitems)

    // localStorage.setItem("prac_list",JSON.stringify(listitems))
    const deleteOptions={method:'DELETE'}

    const reqUrl=`${API_URL}/${did}`
    const result=await ApiRequest(reqUrl,deleteOptions)
    if(result) setFetchError(result)

  }


  const toggleColor=()=>{
    // preventDefault()

    // console.log("its working");   
    // console.log(colors.filter(n=>(n.clr).includes(clrSearch)));
    // const styles = {color: 'red'};
    // setTextcolor('red');
    // if (count%2===0) {
    //   count++
    //   console.log("even");
    // }
    // else{
    //   count++ 
    //   console.log("odd")}
    // // count?(!count):count
    // console.log(count);
    // // console.log("y");

    // textColor==="black"?setTextcolor('white'):setTextcolor('black')
  }
  // const toggleStyle={color:'red'}
  // let count=1;
  const [textColor,setTextColor]=useState(true);

  const [clrSearch,setClrSearch]=useState('')

  // let display='';
  // (clrSearch.length)?display='none':display='display';

  const [colors,setColors]=useState([

    {id:1,
      clr:'red',
      hex:"#FF0000"},
    {id:2,
      clr:'orange',
      hex:"#FFB700"},
    {id:3,
      clr:'violet',
      hex:"#A900FF"},
    {id:4,
      clr:'black',
      hex:"#000000"},
    {id:5,
      clr:'white',
      hex:"#FFFFFF"},
    {id:6,
      clr:'lightpink',
      hex:"#F47EDE"},
    {id:7,
      clr:'green',
      hex:"38CA2A"},
    {id:8,
      clr:'yellow',
      hex:"FFF93D"},
    {id:9,
      clr:'blue',
      hex:"000577"},
  ])





  return(
    <div className="App  min-h-max w-full bg-amber-100">
      <Header title="To do list panna porom"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <ItemSearch
          search={search}
          setSearch={setSearch}
      />
      <main>
        {isLoading && <p className=" text-2xl font-semibold text-center my-5">Loading Items <MdFrontLoader className=" animate-spin mx-auto mt-2 text-cyan-600"/></p> }
{/* fetcherror la ethathu iruntha intha msg ah user ku show pandrathu */}
        {fetchError && <p className=" text-2xl font-semibold text-center my-5">{`Error:${fetchError}`}</p>}

       {!isLoading && !fetchError &&
        <Contant 
            items ={items.filter(n=>((n.item).toLowerCase()).includes(search.toLowerCase()))}
            // setItems={setItems}
            handleCheck={handleCheck}
            deleteCheck={deleteCheck}
          />
       }
      </main>

      <Project/>
      <ColorChange
          toggleColor={toggleColor}
          textColor={textColor}
          setTextColor={setTextColor}
          // toggleStyle={toggleStyle}
          // colors={colors}
          setColors={setColors}
          // display={display}
          
          colors =
          // {clrSearch.length===3?colors.filter(n=>(n.clr).includes(clrSearch)):colors[4]}
            // {colors.length===1?colors.filter(n=>((n.clr).toLowerCase()).includes(clrSearch.toLowerCase())):colors[5]}
           {colors.filter(n=>((n.clr).toLowerCase()).includes(clrSearch.trim().toLowerCase()))}

          clrsearch={clrSearch.trim()}
          setClrSearch={setClrSearch}
          
      />

      <Footer 
        length={items.length}
      />
    </div>

  )
}

export default App;


// import React, { useState, useEffect } from 'react';
// import Contant from "./Contant";
// import Footer from "./Footer";
// import Header from "./Header";
// import AddItem from "./AddItem";
// import ItemSearch from "./ItemSearch";
// import Project from "./Project";
// import ColorChange from "./ColorChange";
// import { MdFrontLoader } from "react-icons/md";

// function App() {
//   const API_URL = "http://localhost:3500/items";

//   const [items, setItems] = useState([
//             {id:1,
//             checked:true,
//             item:"practice first"},
      
//             {id:2,
//             checked:true,
//             item:"practice mid"},
      
//             {id:3,
//             checked:false,
//             item:"practice last"}
//   ]);
//   const [fetchError, setFetchError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [newItem, setNewItem] = useState('');
//   const [search, setSearch] = useState('');
//   const [textColor, setTextColor] = useState(true);
//   const [clrSearch, setClrSearch] = useState('');
//   const [colors, setColors] = useState([
//     { id: 1, clr: 'red', hex: "#FF0000" },
//     { id: 2, clr: 'orange', hex: "#FFB700" },
//     { id: 3, clr: 'violet', hex: "#A900FF" },
//     { id: 4, clr: 'black', hex: "#000000" },
//     { id: 5, clr: 'white', hex: "#FFFFFF" },
//     { id: 6, clr: 'lightpink', hex: "#F47EDE" },
//     { id: 7, clr: 'green', hex: "38CA2A" },
//     { id: 8, clr: 'yellow', hex: "FFF93D" },
//     { id: 9, clr: 'blue', hex: "000577" }
//   ]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) throw Error("Data not received");
//         const listItems = await response.json();
//         console.log(response);
//         console.log(listItems);
//         console.log(items);
//         setItems(listItems);
//         setFetchError(null);
//       } catch (error) {
//         setFetchError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchItems();
//   }, []);

//   const addItem = (aitem) => {
//     const id = items.length ? items[items.length - 1].id + 1 : 1;
//     const addNewItem = { id, checked: false, item: aitem };
//     const listItem = [...items, addNewItem];
//     setItems(listItem);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!newItem) return;

//     addItem(newItem);
//     setNewItem('');
//   };

//   const handleCheck = (idn) => {
//     const listitems = items.map((m) =>
//       m.id === idn ? { ...m, checked: !m.checked } : m
//     );
//     setItems(listitems);
//   };

//   const deleteCheck = (did) => {
//     const listitems = items.filter((m) => m.id !== did);
//     setItems(listitems);
//   };

//   const toggleColor = () => {
//     setTextColor((prevColor) => !prevColor);
//   };



// return (
//   <div className="App min-h-max w-full bg-amber-100">
//     <Header title="To-do List" />
//     <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
//     <ItemSearch search={search} setSearch={setSearch} />
//     <main>
//       {isLoading && (
//         <p className="text-2xl font-semibold text-center my-5">
//           Loading Items <MdFrontLoader className="animate-spin mx-auto mt-2 text-cyan-600" />
//         </p>
//       )}
//       {fetchError && (
//         <p className="text-2xl font-semibold text-center my-5">{`Error: ${fetchError}`}</p>
//       )}
//       {!isLoading && !fetchError && (
//         <Contant
//           items={items.filter((n) => n.item.toLowerCase().includes(search.toLowerCase()))}
//           handleCheck={handleCheck}
//           deleteCheck={deleteCheck}
//         />
//       )}
//     </main>
//     <Project />
//     <ColorChange
//       toggleColor={toggleColor}
//       textColor={textColor}
//       setTextColor={setTextColor}
//       colors={colors.filter((n) => n.clr.toLowerCase().includes(clrSearch.trim().toLowerCase()))}
//       clrsearch={clrSearch.trim()}
//       setClrSearch={setClrSearch}
//     />
//     <Footer length={items.length} />
//   </div>
// );
//       }
// export default App;


// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [fetchError, setFetchError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3500/items');
//       setItems(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       setFetchError(error.message);
//       setIsLoading(false);
//     }
//   };

//   // Rest of your component code...

//   return (
//     <div className="App min-h-max w-full bg-amber-100">
//       {/* Your component JSX */}
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3500/items');
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       } 
//     };

//     fetchData();
//   }, []);
//   console.log(data.map((n)=>n.item));
//   return (
//     <div>
//       <h1>Data:</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.item.toLowerCase()}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
