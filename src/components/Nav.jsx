import React  from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

 

  


  return (
    <div className='w-full'>
      <div className="nav mb-5 flex w-full px-[1.5vw]  items-center justify-between">
        
          <i className="ri-gamepad-line text-2xl sm:text-3xl md:text-[2.2vw]  text-[#00d4ff] transition-colors "></i>
        {/* <Link to={'/Tic'}>
        </Link> */}

        <h1
          className="text-xl sm:text-2xl md:text-[2vw] text-[#00d4ff] transition-colors "
          
        >
          Tic Tac Toe
        </h1>
      </div>
    </div>
  )
}

export default Nav
