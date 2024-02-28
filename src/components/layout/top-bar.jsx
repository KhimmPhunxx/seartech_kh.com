import React from 'react'

import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaFacebook,FaInstagram, FaTelegram, FaTwitter} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function TopBar() {
  return (
    <div className='flex justify-between max-w-7xl mx-auto'>
      <div className='space-x-3 hidden md:flex'>
        <p className='flex text-gray-800 dark:text-white'><IoMdCall className='text-xl mr-2 mt-[2px] text-gray-700 dark:text-white'/> 097948234</p>
        <p className='flex text-gray-800 dark:text-white'><IoMdMail className='text-xl mr-2 mt-[2px] text-gray-700 dark:text-white'/> example@gmail.com</p>
      </div>
      <div className='flex space-x-3'>
            <NavLink to=''> <FaFacebook className='text-xl mr-2 mt-[2px] text-gray-900 dark:text-white'/></NavLink>
            <NavLink to=''> <FaInstagram className='text-xl mr-2 mt-[2px] text-gray-900 dark:text-white'/></NavLink>
            <NavLink to=''> <FaTelegram className='text-xl mr-2 mt-[2px] text-gray-900 dark:text-white'/></NavLink>
            <NavLink to=''> <FaTwitter className='text-xl mr-2 mt-[2px] text-gray-900 dark:text-white'/></NavLink>
      </div>
    </div>
  )
}

export default TopBar
