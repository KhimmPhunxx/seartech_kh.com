import React from 'react'

import category_data from './Laptop_category.json'
import Asus_ViviBook from './Asus_ViviBook'
import Asus_ZenBook from './Asus_ZenBook'

import banner_01 from './../../assets/images/home_image/banner/banner-01.jpg'

function Laptop_Page() {
  return (
    <main>
        <section className='flex justify-between w-full'>
            <div className='w-[20%] sticky top-16 h-[1200px]'>
                <h1 className='text-2xl font-bold text-red-500'>Brand Name</h1>
                {
                    category_data.laptop_category.map((item, index) => {
                        return (
                            <div key={index} className='w-full border-b'>
                              <div className='w-[60%] mx-auto h-20 p-5'>
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
                        <div className='w-full l bg-gradient-to-r flex space-x-4 from-gray-600 to-gray-0 rounded-lg overflow-hidden p-5'>
                        <div className='h-full w-32 border-r pr-2'>
                            <img className='h-full w-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png" alt="" />
                        </div>
                        <h1 className='text-3xl text-gray-100 font-medium'>ASUS</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                    <Asus_ViviBook />
                    
                    </div>
                </div>
                <div>
                    <div 
                    className='
                    w-full border rounded-lg
                    bg-cover bg-center bg-no-repeat
                    '
                    style={{backgroundImage: `url('${banner_01}')`}}
                    >
                        <div className='w-full l bg-gradient-to-r flex space-x-4 from-gray-600 to-gray-0 rounded-lg overflow-hidden p-5'>
                        <div className='h-full w-32 border-r pr-2'>
                            <img className='h-full w-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png" alt="" />
                        </div>
                        <h1 className='text-3xl text-gray-100 font-medium'>ASUS ZenBook</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                    <Asus_ZenBook />
                    
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Laptop_Page
