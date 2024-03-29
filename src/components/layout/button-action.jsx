import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineMenu } from "react-icons/hi";

import { Drawer } from 'antd';
import { NavLink } from 'react-router-dom';

function ButtonAction() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='flex space-x-2'>
      <button 
      onClick={()=> navigate("./contact")} 
      className='md:py-1 px-1 md:px-3 rounded-md bg-red-500 text-xs md:text-lg hover:bg-red-600 font-medium text-gray-100 duration-200 '>Conact</button>
      <button onClick={showDrawer} className='hover:bg-gray-100 duration-300 px-2 rounded hidden'>
        <HiOutlineMenu className='text-2xl text-gray-700' />
      </button>
      <Drawer title="SearTechKH" onClose={onClose} open={open}>
        <div className='flex flex-col space-y-3'>
          <NavLink to='/' className='text-xl font-medium text-gray-700 '>Home</NavLink>
          <NavLink to='/laptop' className='text-xl font-medium text-gray-700 '>Laptop</NavLink>
          <NavLink to='/pc_hardware' className='text-xl font-medium text-gray-700 '>PC Hardware</NavLink>
          <NavLink to='/accessory' className='text-xl font-medium text-gray-700 '>Accessories</NavLink>
          <NavLink to='/peripherals' className='text-xl font-medium text-gray-700 '>Peripherals</NavLink>
          <NavLink to='/pc_set' className='text-xl font-medium text-gray-700 '>PC Sets</NavLink>
        </div>
      </Drawer>
    </div>
  )
}

export default ButtonAction
