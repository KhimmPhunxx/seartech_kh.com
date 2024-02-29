import React, { useEffect } from 'react'
import data from './../mock_data/Home_AccessoriesPage.json'

import { IoMdHeart } from "react-icons/io";
import { FaEye } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'



function Home_AccessoriesPage() {

    const onClickHeart = (e) => {
        e.target.classList.toggle('text-red-500')
    }
    useEffect(() => {
        Aos.init({duration: 900})
    }, [])
  return (
    <div className='grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-8 px-5 lg:px-0'>
        {
            data.data.map((item, index) => {
                return (
                    <div key={index} className='cart-item relative bg-white border p-2 md:py-5 md:p-5 shadow rounded-lg cursor-pointer overflow-hidden' data-aos='fade-up'>
                         <div className='icon-heart absolute top-8 duration-300 space-y-2 z-30 hidden md:block'>
                            <IoMdHeart onClick={onClickHeart} className='text-2xl icon text-gray-500 duration-200' />
                            <FaEye className='text-2xl icon text-gray-500 duration-200' />
                        </div>
                        <div className='mx-auto h-20 md:h-56 lg:h-48 w-[90%] relative'>
                            <div className='h12 lg:h-44 w-full md:h-56 hover:scale-105 mx-auto duration-300 items-center justify-center'>
                                <img className='
                                w-full
                                h-full
                                object-cover
                                ' src={item.images} alt="" />
                            </div>
                           
                        </div>
                       <div className='md:px-5 md:mt-5'>
                            <div className='h-24 md:h-12'>
                                <h1 className='text-[8px] md:text-sm pop text-center'>{item.name}</h1>
                            </div>
                            <h1 className='text-[12px] md:text-2xl text-center font-medium text-green-400'>${item.price}</h1>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home_AccessoriesPage
