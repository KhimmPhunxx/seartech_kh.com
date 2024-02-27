import React, { useEffect } from 'react'
import data from './../mock_data/Home_laptopPage.json'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { IoMdHeart } from "react-icons/io";
import { FaEye } from "react-icons/fa";

function Home_laptopPage() {

    useEffect(() => {
        Aos.init({duration: 900})
    }, [])

    // click iocn heart change color to red
    const onClickHeart = (e) => {
        e.target.classList.toggle('text-red-500')
    }
  return (
    <div className='grid grid-cols-4 gap-8'>
        {
            data.data.map((item, index) => {
                return (
                    <div key={index} className='cart-item relative border py-5 p-5 shadow rounded-lg cursor-pointer overflow-hidden' data-aos='fade-up'>
                         <div className='icon-heart absolute top-8 duration-300 space-y-2'>
                            <IoMdHeart onClick={onClickHeart} className='text-2xl icon text-gray-500 duration-200' />
                            <FaEye className='text-2xl icon text-gray-500 duration-200' />
                        </div>
                        <div className='mx-auto w-[92%] relative'>
                            <div className='h-44 hover:scale-105 duration-300'>
                                <img className='
                                w-full
                                h-full
                                object-cover
                                ' src={item.image} alt="" />
                            </div>
                           
                        </div>
                       <div className='px-5 mt-5'>
                            <div className='h-12'>
                                <h1 className='text-sm text-center'>{item.name}</h1>
                            </div>
                            <h1 className='text-2xl text-center font-medium text-green-400'>${item.price}</h1>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home_laptopPage
