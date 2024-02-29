import React from 'react'

import asus_vivobook from './Laptop_Page.json'

function Asus_ViviBook() {
  return (
    <main>
        <div className='grid grid-cols-3 gap-1'>
            {
                asus_vivobook.asus_vivo_book.map((item, index) => {
                    return (
                        <div key={index} className='w-full p-5 border pb-5'>
                            <div className='w-[90%] h-44 mx-auto border-b'>
                                <img src={item.img} alt="" className='w-full h-full object-cover' />
                            </div>
                           <div className='space-y-2 mt-2 '>
                                <h1 className='text-lg text-center font-bold'>{item.name}</h1>
                                <p className='text-2xl text-center text-red-500 font-bold'>${item.price}</p>
                                <h1 className='text-xs text-center'>{item.desc}</h1>
                                <div className='px-3'>
                                    <h1 className='text-xs'>• {item.cpu}</h1>
                                    <h1 className='text-xs'>• {item.ram}</h1>
                                    <h1 className='text-xs'>• {item.storage}</h1>
                                    <h1 className='text-xs'>• {item.graphic}</h1>
                                    <h1 className='text-xs'>• {item.display}</h1>
                                    <h1 className='text-xs'>• {item.keyboard}</h1>
                                    <h1 className='text-xs'>• {item.os}</h1>
                                    <h1 className='text-xs'>• {item.weigh}</h1>
                                    <h1 className='text-xs'>• {item.warranty}</h1>
                                    <h1 className='text-xs'>• {item.warranty2}</h1>
                                </div>
                           </div>
                           <div className='mt-3'>
                             <h1 className='text-red-500 font-bold text-xl'>Free</h1>
                             <div className='px-3'>
                                <h1 className='text-xs'>• {item.free[0]}</h1>
                                <h1 className='text-xs'>• {item.free[1]}</h1>
                                <h1 className='text-xs'>• {item.free[2]}</h1>
                             </div>
                           </div>
                        </div>
                    )
                })
            }
        </div>
    </main>
  )
}

export default Asus_ViviBook
