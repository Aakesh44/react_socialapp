import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'

const Home = () => {

  const {searchResult,fetchError,isLoading}=useContext(DataContext)
  return (
    // <main className=" min-h-fit">
    //     {posts.length?(
    //       <Feed posts={posts}/>
    //     ):(
    //       <p>
    //         No posts to display
    //       </p>
    //     )}
    // </main>
    <main>
      {isLoading &&<p>Loading Posts ...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResult.length? <Feed posts={searchResult}/>:
            <p>No posts To display !</p>)}
    </main>
  )
}

export default Home