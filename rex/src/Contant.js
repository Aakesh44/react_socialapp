 import React from 'react';
//  import { useState } from 'react';
//  import { FaTrashAlt } from "react-icons/fa";
//  import { FcEmptyTrash } from "react-icons/fc";
import ItemsList from './ItemsList';

const Contant = ({items,handleCheck,deleteCheck}) => {


    // events and Use state hook
    
    // function Change() {
    // const name=["hii","vanakam","welcome"];
    // let int =Math.floor(Math.random()*3);
    // let result=name[int]

    // return result
    // }

  //   const [count,setCount]=useState(4);

  //   function increment() {
  //     // setCount(count +1) 
  //     // ipdi pannalam but 2 or more times pannum pothu ore oru thadavatha increment agum 2 or more times increse agathu so athukaka tha ath fun ah potu pannirukom that way 2 or more times pannum pothu athu combined agi varum 1st output 2 ku 2 odathhu 3.so on..
  //     setCount((precount)=> {return precount+1})
  //   }
  //   function decrement() {
  //     setCount((precount)=>{return precount-1})
  //   }
  //   const [newtxt,setName]=useState("namaste");
  //   function Changingname() {
  //     const name=["hii","vanakam","welcome"];
  //     let int =Math.floor(Math.random()*3);
  //     let result=name[int]
  
  //     setName( result)
  //     }

  //   const handleClick=()=>{

  //     let a=Change()
  //     console.log(a);
  //     console.log("hiiiiiiii");
  //   }
  //   const handleClick2=(name)=>{

  //     console.log(`welcome Mr.${name}`);
  //   }

  //   const handleClick3=(event)=>{

  //     console.log(event.target);

  //   }

  //   const handleClick4=(name)=>{


  //     console.log(`dble click panniya🥲 Mr.${name}`);
  //   }

  // return (
  //   <div className='bg-red-600'>
      
  //     <p>lets change name automatically {Change()}</p>

  //     {/* number increment */}
    
  //     <button onClick={decrement} className=' h-4 w-6 bg-white flex mx-auto mt-2'>
  //     <h1 className=' mx-auto -mt-1  h-2'>-</h1></button>
  //     <span>{count}</span>
  //     <button onClick={increment} className=' h-4 w-6 bg-white flex mx-auto mb-2'>
  //       <h1 className=' mx-auto -mt-1  h-2'>+</h1></button>

  //     <button onClick={Changingname} className=' h-6 border-neutral-300 border-2 bg-slate-500 shadow-3xl'><h1 className=' text-center'>change pannu</h1></button>

  //     <p>lets change name click by this button {newtxt}</p>


  //     <button onClick={handleClick} className='m-2'> click me 1</button>
  //       {/* ithula verum fun() nu potta event load agum pothe nadakum.namma click panna nadakathu..atha prevent panna tha annonymous fun use pannirukom pok ah da  */}
  //     <button onClick={() => handleClick2('aakesh')} className=' m-4'> click me 2</button>

  //     <button onClick={(event)=> handleClick3(event)} className='m-2'> click me 3</button>

  //     <button onDoubleClick={()=> handleClick4('aakesh')} className='m-2'> click me 4</button>



    // </div>
  // )

  // list and keys

  // const [items,setItems]=useState(
  //   [
  //     {id:1,
  //     checked:true,
  //     item:"practice first"},

  //     {id:2,
  //     checked:true,
  //     item:"practice mid"},

  //     {id:3,
  //     checked:false,
  //     item:"practice last"}
  //   ]
  // )

  // const handleCheck=(idn)=>{
  //         console.log(`id: ${idn}`);

  //         const listitems=items.map((m)=>

  //         // m.id===idn?{checked:!m.checked}:m)
  //         // ipdi kudtha antha arr la checked ah mattum update panni methi key ellam vitu
  //         //show pannum..apo neraya error varum so keela iruka mari tha pannanum
  //         m.id===idn?{...m,checked:!m.checked}:m)

  //         //ipdi pannum pothu ...m vantthu antha arr ah vachutu alter panni kudukanum

  //         setItems(listitems)

  //   //local storage use

  //   localStorage.setItem("prac_list",JSON.stringify(listitems))
          
  // }

  // // const deleteCheck=(did)=>{

  // //   const iteminlist=items.map((m)=>
  // //   m.id===did ?{item:"click panniya😘"}:m)

  // //   setItems(iteminlist)
  // // }

  // const deleteCheck=(did)=>{
  //   const listitems=items.filter((m)=>
  //   m.id!==did)

  //   setItems(listitems)

  //   localStorage.setItem("prac_list",JSON.stringify(listitems))

  // }

  return(
    <> 
      {(items.length)?(

        <ItemsList 
        items ={items}
        // setItems={setItems}
        handleCheck={handleCheck}
        deleteCheck={deleteCheck}
        />
//       <ul>
      
//           {items.map((n)=>(
// //            ovoru list kum diff ana id kudukurathu best uh..for avoiding collapse
//               <li key={n.id}>
//                 <div className=' h-8 w-72 bg-slate-200 mx-auto my-5 flex justify-around'>     

//                     <input 
//                       type="checkbox"
//                       checked={n.checked}
//                       onChange={()=> handleCheck(n.id)}
//                       className=' h-8 w-5  my-auto bg-red-400'
//                     />

//                     <h1 onClick={()=> handleCheck(n.id)}
//                      className='font-semibold text-lg relative mr-16 '
//                       style={(n.checked)?{textDecoration:'line-through'}:null}>
                      
//                       {n.item}</h1>

//                     <span className=' my-auto'>
//                       <FaTrashAlt 
//                         role='button'
//                         tabIndex="0"
//                         className=' text-green-600 '
//                         onClick={()=> deleteCheck(n.id)}
//                         /></span>

//                     <span className=' my-auto animate-spin delay-75'><FcEmptyTrash
//                         role='button'/></span>
//                   </div> 
//               </li>
//           ))}
        
//       </ul>
      ):<p className=' text-2xl font-semibold my-7 capitalize text-pink-900'>your list is empty</p>
    }

      <h4>k</h4><input type="checkbox" />
      
    </>
  )
}

export default Contant