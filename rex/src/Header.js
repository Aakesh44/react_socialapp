import React from 'react'
//props and prop drilling
const Header = (props) => {
  return (
    <h1 className='text-4xl text-emerald-950 font-semibold text-center'>
      {props.title}</h1> 
  )
}
Header.defaultProps={
  title:"default title"
}
export default Header