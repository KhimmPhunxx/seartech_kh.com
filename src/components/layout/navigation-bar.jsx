import React from 'react'
import { NavLink } from 'react-router-dom'

import { IoMdLaptop } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { BsFillUsbPlugFill } from "react-icons/bs";
import { FaKeyboard } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

function NavigationBar() {
  return (
    <div>
       <div className='max-w-7xl mx-auto bg-gray-200 dark:text-gray-100 dark:bg-gray-900 dark:border dark:border-gray-900 flex justify-between rounded border'>
       {/* <NavLink to='' className={({isActive})=> isActive ? 'pop menubar_active font-[400] text-[#615EAB] text-[16px] relative px-2' : "pop menubar hover:text-[#615EAB] font-[400] text-gray-700 text-[16px] relative px-2 dark:text-white"} >Home</NavLink> */}
            <div className='w-[20%]'>
                <NavLink className={({isActive})=> isActive ? "flex p-4 w-full border border-red-500 rounded justify-center text-xl font-medium": "flex p-4 w-full rounded justify-center text-xl font-medium " } to='/laptop'> <IoMdLaptop className='text-2xl mt-1/2 mr-2' /> Laptop</NavLink>
            </div>
            <div className='w-[20%]'>
                <NavLink className={({isActive})=> isActive ? "flex p-4 border border-red-500  rounded justify-center text-xl font-medium": "flex p-4 rounded justify-center text-xl font-medium" } to='/pc_hardware'> <FaComputer className='text-2xl mt-1/2 mr-2' /> PC Hardware</NavLink>
            </div>
            <div className='w-[20%]'>
                <NavLink className={({isActive})=> isActive ? "flex p-4 border border-red-500 rounded justify-center text-xl font-medium": "flex p-4 rounded justify-center text-xl font-medium" } to='/accessory'> <BsFillUsbPlugFill className='text-2xl mt-1/2 mr-2' /> Accessories</NavLink>
            </div>
            <div className='w-[20%]'>
                <NavLink className={({isActive})=> isActive ? "flex p-4 border border-red-500  rounded justify-center text-xl font-medium": "flex p-4 rounded justify-center text-xl font-medium" } to='/peripherals'> <FaKeyboard className='text-2xl mt-1/2 mr-2' /> Peripherals</NavLink>
            </div>
            <div className='w-[20%]'>
                <NavLink className={({isActive})=> isActive ? "flex p-4 border border-red-500  rounded justify-center text-xl font-medium": "flex p-4 rounded justify-center text-xl font-medium" } to='/pc_set'> <RiComputerFill className='text-2xl mt-1/2 mr-2' /> PC Sets</NavLink>
            </div>
       </div>
    </div>
  )
}

export default NavigationBar
