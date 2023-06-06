import React, { useState } from 'react'

const clr=["red","orange","violet","black","white","lightpink","green","yellow","blue",]
const hex=["#FF0000","#FFB700","#A900FF","#000000","#FFFFFF","#F47EDE","#38CA24","#FFF93D","#0005FF"]



const ColorChange = ({toggleColor,textColor,setTextColor,colors,SetColors,clrSearch,setClrSearch,display}) => {

  // const styles = {color: 'red'};
  return (
    <main className=' m-6 bg-white w-1/1 rounded-sm pb-96'>

        <h1 className=' font-semibold text-3xl font-sans text-center'>
            Color Change
        </h1>


{(colors.length)===1?colors.map((n)=>(<li key={n.id}className=' list-none'>

        <div 
        className=' w-2/5 h-24 mt-5 mx-auto rounded-lg border-2 flex flex-col shadow-2xl lg:p-20 border-slate-400 2xl:w-1/6 2xl:h-56 xl:h-60 md:h-56'

        style={{backgroundColor:n.clr}}

        // {...(colors.length)===1?
        //   colors.map((n)=>(<li key={n.id}className=' list-none'>{n.clr}</li>)):null}
        >
                
                <div 
                  className='toggletxt text-center my-auto font-medium text-xl'
                  style={{color:textColor?"#000":"#FFF"}}
                  >
                    {n.clr}
                  {/* {(colors.length)===1?
                    colors.map((n)=>(<li key={n.id}className=' list-none'>{n.clr}</li>)):null} */}
                  



                {/* <h2>{colors.clr}</h2> */}

                {/* {colors.filter(n=>((n.clr)).includes(clrSearch))}?<h1>
                  {colors.clr}</h1> */}

                  
                    {/* {colors.clr} */}
                  

                  </div>
                <h1 
                  className='toggletxt text-center my-auto font-medium text-xl'
                  style={{color:textColor?"#000":"#FFF"}}
                  >
                    {n.hex}
                   {/* {(colors.length)===1?
                    colors.map((n)=>(<li key={n.id}className=' list-none'>{n.hex}</li>)):null}  */}
               </h1>
</div></li>)):
          <div 
          className=' w-2/5 h-24 mt-5 mx-auto rounded-lg border-2 flex flex-col lg:p-20 border-slate-400 2xl:w-1/6 2xl:h-56 xl:h-60 md:h-56'
          // style={{backgroundColor:n.clr}}
          >
          </div>
}



        <div className=' mt-3 flex flex-col mx-auto'>

            <input 
            type="text"
            name="" 
            id="clrentry" 
            placeholder='Add color'
            autoFocus
            className=' w-2/5 py-2 rounded-md border-2 border-slate-400 outline-none mx-auto text-center'           
            value={clrSearch}
            onChange={(e)=>setClrSearch(e.target.value)} />

            <button 
            className=' w-2/5 py-2 mt-2 mb-4 rounded-md border-2        border-slate-400 outline-none mx-auto font-medium text-lg'
            onClick={()=>setTextColor(!textColor)}
            >
                Toggle color
            </button>
        </div>

    </main>
  )


}

// ColorChange.defaultprops={
  
// }

export default ColorChange