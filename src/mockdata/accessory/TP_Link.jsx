import React from 'react'

import tp_link_data from "./Accessories.json"

function TP_Link() {
  return (
    <div className='grid grid-cols-3 gap-1'>
        {
            tp_link_data.tp_link.map((item, index) => {
                return (
                    <div key={index} className='w-full p-5 border py-10 cursor-pointer'>
                        <div className='w-[90%] h-64 mx-auto border-b'>
                            <img src={item.image} alt="" className='w-full h-full object-cover hover:scale-105 duration-200' />
                        </div>
                        <div className='space-y-2 mt-2 '>
                                <h1 className='text-md text-center text-gray-700 font-[600]'>{item.name}</h1>
                                <h1 className='text-2xl text-red-400 text-center font-bold'>${item.price}.00</h1>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TP_Link
