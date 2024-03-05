import React from 'react'

import category_data from './Category.json'
import Razer from './Razer'
import banner_01 from './../../assets/images/home_image/banner/banner-01.jpg'
import Corsair from './Corsair'

function Peripherals_Page() {
  return (
    <main className='mt-8'>
        <section className='flex justify-between w-full'>
            <div className='w-[15%] sticky top-16 h-[900px]'>
                <h1 className='text-2xl font-bold text-red-500'>Brand Name</h1>
                {
                    category_data.cate.map((item, index) => {
                        return (
                            <div key={index} className='w-full border-b'>
                                <div className='w-[90%] mx-auto h-20 p-5'>
                                    <img src={item.image} alt="" 
                                    className='
                                        w-full
                                        h-full
                                        object-cover
                                        cursor-pointer
                                    ' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-[78%] ml-[2%]'>
                <div className='pb-5'>
                    <div 
                    className='
                    w-full border rounded-lg
                    bg-cover bg-center bg-no-repeat
                    '
                    style={{backgroundImage: `url('${banner_01}')`}}
                    >
                        <div className='w-full bg-gradient-to-r flex space-x-4 from-gray-600 to-gray-0 rounded-lg overflow-hidden p-5'>
                        <div className='h-8 w-24 border-r pr-2'>
                            <img className='h-full w-full object-cover rounded' src="https://tkcustomcomputer.com/assets/uploads/brands/f5cd6f347cf02020566755e1cfbbc500.png" alt="" />
                        </div>
                        <h1 className='text-3xl text-gray-100 font-medium'>RAZER</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                      <Razer />
                    </div>
                </div>

                <div className='pb-5'>
                    <div 
                    className='
                    w-full border rounded-lg
                    bg-cover bg-center bg-no-repeat
                    '
                    style={{backgroundImage: `url('${banner_01}')`}}
                    >
                        <div className='w-full bg-gradient-to-r flex space-x-4 from-gray-600 to-gray-0 rounded-lg overflow-hidden p-5'>
                            <div className='h-9 w-28 border-r pr-2'>
                                <img className='h-full w-full object-cover rounded' src="https://tkcustomcomputer.com/assets/uploads/brands/2207eb81e4bc87d3ba31a1ce672dcb91.png" alt="" />
                            </div>
                            <h1 className='text-3xl text-gray-100 font-medium'>CORSAIR</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                    <Corsair />
                    </div>
                </div>
                
            </div>
        </section>
    </main>
  )
}

export default Peripherals_Page
