import React from 'react'

import map from './../../assets/images/conatct/map.png'
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTelegram, FaTwitter } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";
import { IoMdCall, IoMdMail } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

function ContactPage() {
  return (
   <main className='pb-5'>
    <section className='map w-full'>
      <div className='w-full h-[500px] ' 
      style={{backgroundImage: `url(${map})`}}
      > </div>
      <div className='max-w-7xl mx-auto z-30 flex justify-between'>
        <div className='w-[48%] z-30 p-20 px-32 space-y-16 bg-blue-600 border-[10px] border-white rounded-tr-[30%]  mt-[-150px]'>
            <div className=' space-y-4'> 
              <h1 className='text-2xl text-white flex border-b pb-2 font-[400]'> 
                <FaMapMarkerAlt className='mr-4 text-3xl'  />  Our Store
              </h1>
              <p className='text-xl text-gray-300'>Phnom Penh, Cambodia</p>
            </div>
            <div className=' space-y-4'> 
              <h1 className='text-2xl text-white flex border-b pb-2 font-[400]'> 
                <CiStopwatch className='mr-4 text-3xl'  />  Hour of Operation
              </h1>
              <p className='text-xl text-gray-300'>Monday - Saturday : 8 AM - 6 PM Sunday : Close</p>
            </div>

            <div className=' space-y-4'> 
              <h1 className='text-2xl text-white flex border-b pb-2 font-[400]'> 
                <IoMdCall className='mr-4 text-3xl'  />  Hour of Operation
              </h1>
              <p className='text-xl text-gray-300'>014 417 125 | 097 339 985</p>
            </div>

            <div className=' space-y-4'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
              <h1 className='text-2xl text-white flex border-b pb-2 font-[400]'> 
                <IoMdMail className='mr-4 text-3xl'  />  Hour of Operation
              </h1>
              <NavLink to={'mailto:Kimseagoodboy@gmail.com'} className='text-xl text-gray-300'>Kimseagoodboy@gmail.com</NavLink>
            </div>
            <div className='flex space-x-5'> 
              <NavLink >
                 <FaTelegram className='text-3xl text-white' />
              </NavLink>
              <NavLink target='_blank' to={'https://www.facebook.com/profile.php?id=61556792725526&mibextid=hu50Ix'}>
                 <FaFacebook className='text-3xl text-white' />
              </NavLink>
              <NavLink >
                <FaInstagram className='text-3xl text-white' />
              </NavLink>
              <NavLink >
                <FaTwitter className='text-3xl text-white' />
              </NavLink>
            </div>
        </div>
        <div className="w-[48%] pt-10">
          <div className='w-full h-full'>
            <h1 className='text-4xl font-bold text-gray-600 border-b border-gray-400 pb-2'>Leave us a Message</h1>
            <div className='mt-10'>
              <form action="" className='space-y-8'>
                <div className='flex space-x-4'>
                  <input type="text" placeholder='Full Name' className='w-[48%] py-5 p-3 border border-gray-400 rounded-md' />
                  <input type="text" placeholder='Your Email' className='w-[48%] py-5 p-3 border border-gray-400 rounded-md' />
                </div>
                <div>
                  <textarea name="" id="" cols="30" rows="13" placeholder='Message' className='w-full p-2 border border-gray-400 rounded-md'></textarea>
                </div>
                <div>
                  <button className='w-full p-5 bg-blue-600 text-white rounded-md'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
   </main>
  )
}
export default ContactPage
