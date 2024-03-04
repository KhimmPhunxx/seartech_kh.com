import React from 'react'

import ram_data from './Category.json'
import { NavLink } from 'react-router-dom'

function RAM() {
  return (
    <div className='grid grid-cols-3 gap-1'>
        {
            ram_data.ram.map((item, index) => {
                return (
                    <div key={index} className='w-full p-5 border py-10 cursor-pointer'>
                        <div className='w-[90%] h-44 mx-auto border-b'>
                            <img src={item.image} alt="" className='w-full h-full object-cover hover:scale-105 duration-200' />
                        </div>
                        <div className='space-y-4 mt-2 '>
                                <h1 className='text-lg text-center font-bold'>{item.name}</h1>
                                <div className='px-3 space-y-1'>
                                    <h1 className='text-xs'>• {item.spec1} = <NavLink className={'text-lg text-red-500 font-bold'}> ${item.price1}</NavLink> </h1> 
                                    <h1 className='text-xs'>• {item.spec2} = <NavLink className={'text-lg text-red-500 font-bold'}> ${item.price2}</NavLink> </h1>
                                    <h1 className='text-xs'>• {item.spec3} = <NavLink className={'text-lg text-red-500 font-bold'}> ${item.price3}</NavLink> </h1>
                                </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default RAM
