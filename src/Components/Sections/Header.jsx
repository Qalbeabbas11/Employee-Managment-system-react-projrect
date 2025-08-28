import React from 'react'

const Header = ({ data = {}, handleLogout }) => {
  return (
    <>
      <div className='flex flex-col sm:flex-row items-center justify-between px-5 sm:px-[60px] gap-4 sm:gap-0 text-center sm:text-left'>
        
        <h1 className='text-xl sm:text-2xl font-md'>
          Hi,<br /> 
          <span className='text-2xl sm:text-3xl font-semibold'>{data.name || "User"}</span> 👋 
        </h1>
        
        <button
          className='bg-emerald-600 text-white px-6 sm:px-9 py-3 sm:py-5 rounded-md hover:bg-emerald-800 font-md text-lg sm:text-xl w-full sm:w-auto'
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </>
  )
}

export default Header
