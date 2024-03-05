import React from 'react'

import category_data from './PC_Hardware.json'
import CPU from './CPU'
import RAM from './RAM'
import banner_01 from './../../assets/images/home_image/banner/banner-01.jpg'

function PC_Hardware_Page() {
  return (
    <main>
        <section className='flex justify-between w-full'>
            <div className='w-[15%] sticky top-16 h-[900px]'>
                <h1 className='text-2xl font-bold text-red-500'>Brand Name</h1>
                {
                    category_data.data_cate_hardware.map((item, index) => {
                        return (
                            <div key={index} className='w-full border-b'>
                            <div className='w-[80%] mx-auto h-20 p-5'>
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
                        <div className='h-8 w-12 border-r pr-2'>
                            <img className='h-full w-full object-cover rounded' src="https://cdn-icons-png.freepik.com/512/4617/4617522.png" alt="" />
                        </div>
                        <h1 className='text-3xl text-gray-100 font-medium'>CPU</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <CPU />
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
                            <div className='h-9 w-12 border-r pr-2'>
                                <img className='h-full w-full object-cover rounded' src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/ram-memory-icon.png" alt="" />
                            </div>
                            <h1 className='text-3xl text-gray-100 font-medium'>RAM</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                       <RAM />
                    </div>
                </div>
                
            </div>
        </section>
    </main>
  )
}

export default PC_Hardware_Page
