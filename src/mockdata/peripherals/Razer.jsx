import React from 'react'

import razer_data from './Peripherals.json'

function Razer() {
  return (
    <div className='grid grid-cols-3 gap-1'>
        {
            razer_data.razer.map((item, index) => {
                return (
                    <div key={index} className='w-full border cursor-pointer p-5'>
                        <div className='w-[84%] h-64 mx-auto border-b p-8'>
                            <img src={item.image} alt="" className='w-full h-full  mx-auto object-cover hover:scale-105 duration-200' />
                        </div>
                        <div className='space-y-2 mt-3'>
                                <h1 className='text-sm text-center text-gray-700 font-[400]'>{item.name}</h1>
                                <h1 className='text-2xl text-red-400 text-center font-semibold'>${item.price}.00</h1>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Razer
