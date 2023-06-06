import React from 'react'

const Footer = ({length}) => {

const year=new Date();
  return (
    // <footer className='underline text-red-900 font-serif mt-72'>
    //   copyright &copy; {year.getFullYear()}  </footer>

    <footer  className=' text-red-900 font-serif mt-72 text-center'>
      {length} List{length===1?" item":" items"}</footer>
  )
}

export default Footer