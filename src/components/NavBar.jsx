import React from 'react'
const NavBar = () => {
  return (
    <>
      <div className="main-nav bg-[#ffffff] h-9 w-[90%] max-w-[400px] rounded-2xl mx-auto shadow-md overflow-hidden text-black flex justify-between items-center p-2">
        <div className="logo cursor-pointer">
          <img src='/logo.png' alt="logo" className='w-10 h-10 object-contain'/>
        </div>
        <div className="menu font-bold text-lg hover:text-blue-600 transition-colors cursor-pointer">Menu</div>
      </div>
    </>
  )
}

export default NavBar