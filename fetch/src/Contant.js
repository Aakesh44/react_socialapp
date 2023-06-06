import React from 'react'

const Contant = ({apiItems,action,setAction,selectAction,userButton,postButton,commentButton}) => {
  return (
    <main>
        <div
        className='w-full h-10 border-2 border-black flex mx-1'>

            <div className=' w-1/3  h-full p-1 text-center'>
                <button 
                    className='h-full bg-amber-400 w-full'
                    onClick={()=>userButton()}
                    style={{backgroundColor:action==='users'?'green':null}}>
                   <h1 className=' font-semibold'> USERS</h1>
                </button>
            </div>

            <div className=' w-1/3  h-full p-1 text-center'>
                <button className='h-full bg-amber-400 w-full '
                    onClick={()=>postButton()}
                    style={{backgroundColor:action==='posts'?'green':null}}>
                <h1 className=' font-semibold'>POST </h1>
                </button>
            </div>

            <div className=' w-1/3  h-full p-1 text-center'>
                <button className='h-full bg-amber-400 w-full '
                    onClick={()=>commentButton()}
                    style={{backgroundColor:action==='comments'?'green':null}}>
                <h1 className=' font-semibold'> COMMENTS</h1>
                </button>
            </div>

        </div>

        {(action==='users')?(

        <section className=' min-w-full min-h-screen my-3 mx-1 border-2 border-black'>

            {apiItems.map((n)=>(
                // <div key={n.id} className=' list-none flex flex-wrap'>
                //     <p className=' font-bold'>{n.id}</p>
                //     <p className='mx-2'>name:{n.name}</p>
                //      <p className='mx-2'>username:{n.username}</p>
                //     <p className='mx-2'>email:{n.email}</p>
                //     {n.address &&
                //         <p className='mx-2'>address:{`{ street:${n.address.street} suite:${n.address.suite} city:${n.address.city} zipcode:${n.address.zipcode}  }`}</p>
                //     }
                //     {n.geo &&
                //         <p className='mx-2 flex'>geo:{`{ lat:${n.address.geo.lat} lng:${n.address.geo.lng}  }`}</p>
                //     }

                        
                    
                //     <p className='mx-2'>phone:{n.phone}</p>
                //     <p className='mx-2'>website:{n.website}</p>
                //     {n.company &&
                //         <p className='mx-2'>company:
                //                 {`{name:${n.company.name} catchPhrase:${n.company.catchPhrase} company:${n.company.bs}}`}</p>
                //     }
                // </div>
                JSON.stringify(n)
            ))}



        </section>

        ):(action==='posts')?(
            <section className=' min-w-full min-h-screen my-3 mx-1 border-2 border-black'>

            {apiItems.map((n)=>(
                <div key={n.id} className=' list-none flex flex-wrap'>
                    <p className=''>userId:{n.userId}</p>
                    <p className='ml-1'>id:{n.id}</p>
                    <p className='mx-2'>title:{n.title}</p>
                     <p className='mx-2'>body:{n.body}</p>
                </div>
            ))}



        </section>
        ):(action==='comments')?(
            <section className=' min-w-full min-h-screen my-3 mx-1 border-2 border-black'>

            {apiItems.map((n)=>(
                <div key={n.id} className=' list-none flex flex-wrap'>
                    <p className=''>{`{ postId:${n.postId} id:${n.id} name:${n.name} body:${n.body} email:${n.email} }`}</p>
                    {/* <p className='ml-1'> id:{n.id}</p>
                    <p className='mx-2'>name:{n.name}</p>
                     <p className='mx-2'>body:{n.body}</p>
                    <p className='mx-2'>email:{n.email}</p> */}


                </div>
            ))}



        </section>
        )
        
        :<h1>bye</h1>}

    </main>
    // <ul>
    //     {apiItems.map(n=>(
    //         JSON.stringify(n)
    //     ))}
    // </ul>
  )
}

export default Contant