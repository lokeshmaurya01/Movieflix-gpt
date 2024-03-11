import React from 'react'
import logo from '../utils/images/MOVIE.png'
const Header = () => {
  return (
    <div className='bg-gradient-to-b from-black z-50 '>
        <img className='absolute scale-70 ml-10 z-50 my-4' src={logo} alt="" />
    </div>
  )
}

export default Header