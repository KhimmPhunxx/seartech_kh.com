import React from 'react'
import { NavLink } from 'react-router-dom';

function LogoText() {
  return (
    <div>
      <h1 className='text-sm md:text-2xl font-bold text-gray-800 dark:text-gray-100'>
        <NavLink to='/'>SearTechKh</NavLink>
      </h1>
    </div>
  )
}

export default LogoText
