import React from 'react'

import map from './../../assets/images/conatct/map.png'
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTelegram, FaTwitter } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";
import { IoMdCall, IoMdMail } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

function ContactPage() {
  return (
   <main>
    <section className='map w-full  border'>
      <div className='w-full h-[500px] ' 
      style={{backgroundImage: `url(${map})`}}
      > </div>
      <div className='max-w-7xl mx-auto z-30 flex justify-between'>
        <div className='w-[48%] z-30 p-20 px-24 space-y-10 bg-blue-500 border-[10px] border-white rounded-tr-[30%]  mt-[-150px]'>
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
        <div className="w-[48%] border bg-gray-200">
          Hello
        </div>
      </div>
    </section>
   </main>
  )
}
export default ContactPage
