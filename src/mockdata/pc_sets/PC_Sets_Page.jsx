import React from 'react'

import category_ from './category.json'
import banner_01 from './../../assets/images/home_image/banner/banner-01.jpg'
import Lenovo from './Lenovo'
import { NavLink } from 'react-router-dom'
import Dell from './Dell'


function PC_Sets_Page() {
  return (
    <main className='mt-8'>
        <section className='flex justify-between w-full'>
            <div className='w-[15%] sticky top-16 h-[900px]'>
                <h1 className='text-2xl font-bold text-red-500'>Brand Name</h1>
                {
                    category_.cate.map((item, index) => {
                        return (
                            <div  key={index} className='w-full border-b'>
                                <NavLink to={item.link}>
                                <div className='w-[98%] mx-auto h-[80px] p-5'>
                                    <img src={item.image} alt="" 
                                    className='
                                        w-full
                                        h-full
                                        object-cover
                                        cursor-pointer
                                    ' />
                                </div>
                                </NavLink>
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
                            <img className='h-full w-full object-cover rounded' src="https://tkcustomcomputer.com/assets/uploads/brands/77cd1a7c285872fc3f0780dd4120275e.png" alt="" />
                        </div>
                        <h1 className='text-3xl text-gray-100 font-medium'>Lenovo</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                      <Lenovo />
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
                                <img className='h-full w-full object-cover rounded' src="https://tkcustomcomputer.com/assets/uploads/brands/318644a0f2f45f1fc4bc39acfc2572ab.png" alt="" />
                            </div>
                            <h1 className='text-3xl text-gray-100 font-medium'>DELL</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <Dell />
                    </div>
                </div>
                
            </div>
        </section>
    </main>
  )
}

export default PC_Sets_Page
