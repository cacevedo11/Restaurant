import React from 'react'
import Menu from '../Images/menu.svg';
import Logo from '../Images/Logo.png'

function Nav() {
  return (
    <div className='min-h-[10%] fixed top-0 bg-slate-800 flex px-6 py-6 justify-between items-center w-[100%] z-50'>
            <img className='w-[130px] rounded-full' src={Logo} alt=''/> 
            <img className=' lg:hidden  md:hidden  sm:block' src={Menu} alt=''/>     
    </div>
  )
}

export default Nav

