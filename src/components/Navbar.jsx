import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const handleClick = () => {
    setShowContact(!showContact);
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    };
  }, [showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-tansparents'>
        <img src={assets.logo} alt="" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          {/*<a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>*/}
          <a href="#Homes" className='cursor-pointer hover:text-gray-400'>Homes For Sale</a>
          <a href="#Reviews" className='cursor-pointer hover:text-gray-400'>Reviews</a>
        </ul>
        <div>
          <button
            className='hidden md:block bg-white px-8 py-2 rounded-full'
            onClick={handleClick}
          >
            Contact Info
          </button>
          {showContact && (
            <div className="absolute mt-2 p-4 bg-gray-100 rounded-lg shadow-lg z-10">
              <p>Email: hector@picon.net</p>
              <p>Phone: (559) 800-8000</p>
              <p>DRE#: 01249686</p>
            </div>
          )}
        </div>
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 ml-50 cursor-pointer' alt=""></img>
        {/* ------------ mobile-menu -------------*/}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-black opacity-82 transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6 filter invert' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block text-white'>Home</a>
            {/*<a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>*/}
            <a onClick={() => setShowMobileMenu(false)} href="#Homes" className='px-4 py-2 rounded-full inline-block text-white'>Homes For Sale</a>
            <a onClick={() => setShowMobileMenu(false)} href="#Reviews" className='px-4 py-2 rounded-full inline-block text-white'>Reviews</a>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar