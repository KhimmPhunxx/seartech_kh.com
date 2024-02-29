import React from 'react'
import { NavLink } from 'react-router-dom'

import { IoMdLaptop } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { BsFillUsbPlugFill } from "react-icons/bs";
import { FaKeyboard } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";

function NavigationBar() {
  return (
    <div className=''>
       <div className='max-w-7xl mx-10 md:mx-auto bg-gray-200 flex justify-between rounded'>
       {/* <NavLink to='' className={({isActive})=> isActive ? 'menubar_active font-[400] text-[#615EAB] text-[16px] relative px-2' : "pop menubar hover:text-[#615EAB] font-[400] text-gray-700 text-[16px] relative px-2 dark:text-white"} >Home</NavLink> */}
            <div className='w-[20%]'>
                <NavLink className={({isActive})=> isActive ? "flex pop p-2 md:p-4 w-full bg-[#E9AFAF] rounded justify-center text-[5px] md:text-xl font-medium": "flex p-2 md:p-4 rounded justify-center text-[5px] md:text-xl font-medium" } to='/laptop'> <IoMdLaptop className='text-2xl mt-1/2 mr-2 hidden md:block' /> Laptop</NavLink>
            </div>
            <div className='w-[20%]'>
                <NavLink className={({isActive})=> isActive ? "flex p-2 md:p-4 bg-[#E9AFAF]  rounded justify-center text-[5px] md:text-xl font-medium" : "flex p-2 md:p-4 rounded justify-center text-[5px] md:text-xl font-medium" } to='/pc_hardware'> <FaComputer className='text-2xl mt-1/2 mr-2 hidden md:block' /> PC Hardware</NavLink>
            </div>
            <div className='w-[20%]'>
                <NavLink className={({isActive})=> isActive ? "flex p-2 md:p-4 bg-[#E9AFAF] rounded justify-center text-[5px] md:text-xl font-medium" : "flex p-2 md:p-4 rounded justify-center text-[5px] md:text-xl font-medium" } to='/accessory'> <BsFillUsbPlugFill className='text-2xl mt-1/2 mr-2 hidden md:block' /> Accessories</NavLink>
            </div>
            <div className='w-[20%]'>
                <NavLink className={({isActive})=> isActive ? "flex p-2 md:p-4 bg-[#E9AFAF] rounded justify-center text-[5px] md:text-xl font-medium" : "flex p-2 md:p-4 rounded justify-center text-[5px] md:text-xl font-medium" } to='/peripherals'> <FaKeyboard className='text-2xl mt-1/2 mr-2 hidden md:block' /> Peripherals</NavLink>
            </div>
            <div className='w-[20%]'>
                <NavLink className={({isActive})=> isActive ? "flex p-2 md:p-4 bg-[#E9AFAF] rounded justify-center text-[5px] md:text-xl font-medium" : "flex p-2 md:p-4 rounded justify-center text-[5px] md:text-xl font-medium" } to='/pc_set'> <RiComputerFill className='text-2xl mt-1/2 mr-2 hidden md:block' /> PC Sets</NavLink>
            </div>

            <div className='w-[20%]'>
                <NavLink className={({isActive})=> isActive ? "flex p-2 md:p-4 bg-[#E9AFAF] rounded justify-center text-[5px] md:text-xl font-medium" : "flex p-2 md:p-4 rounded justify-center text-[5px] md:text-xl font-medium" } to='/pc_set'> <MdShoppingCart className='text-2xl mt-1/2 mr-2 hidden md:block' /> Second Hand</NavLink>
            </div>
       </div>
    </div>
  )
}

export default NavigationBar

