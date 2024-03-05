import React from 'react'

import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaFacebook,FaInstagram, FaTelegram, FaTwitter} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function TopBar() {
  return (
    <div className='flex justify-between max-w-7xl mx-auto'>
      <div className='space-x-3 flex'>
        <NavLink to={'callTo:099808088'} className='flex text-gray-800 text-xs md:text-lg '><IoMdCall className=' md:text-xl mr-2 mt-[2px] text-gray-700 '/> 099808088</NavLink>
        <NavLink to={'mailto: Kimseagoodboy@gmail.com'} className='flex text-gray-800 text-xs md:text-lg '><IoMdMail className=' md:text-xl mr-2 mt-[2px] text-gray-700 '/> Kimseagoodboy@gmail.com</NavLink>
      </div>
      <div className='flex md:space-x-3'>
            <NavLink to='https://www.facebook.com/profile.php?id=61556792725526&mibextid=hu50Ix' target='_blank'> <FaFacebook className='text-sm md:text-xl mr-2 mt-[2px] text-gray-900 '/></NavLink>
            <NavLink to=''> <FaInstagram className='text-sm md:text-xl mr-2 mt-[2px] text-gray-900 '/></NavLink>
            <NavLink to='@kimkimkim'> <FaTelegram className='text-sm md:text-xl mr-2 mt-[2px] text-gray-900 '/></NavLink>
            <NavLink to=''> <FaTwitter className='text-sm md:text-xl mr-2 mt-[2px] text-gray-900 '/></NavLink>
      </div>
    </div>
  )
}

export default TopBar
