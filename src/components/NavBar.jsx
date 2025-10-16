import React from 'react'
const NavBar = () => {
  return (
    <>
      <div className="main-nav bg-[#ffffff] w-[90%] max-w-[400px] rounded-2xl mx-auto shadow-md overflow-hidden text-black flex justify-between items-center p-2">
        <div className="logo">
          <img src='/logo.png' alt="logo" className='w-10 h-10 object-contain'/>
        </div>
        <div className="menu font-bold text-lg hover:text-gray-600 transition-colors">Menu</div>
      </div>
    </>
  )
}

export default NavBar