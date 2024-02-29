import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'
import { IoCall, IoLocation, IoMail } from 'react-icons/io5'
import { NavLink } from 'react-router-dom';

function FooterBar() {
  return (
    <footer className=' -full bg-black py-5'>  
      <section className='max-w-7xl mx-auto h-full py-6 border-b px-5'>
          <h1 className='text-2xl font-bold text-gray-100  '>SearTechKh</h1>
          <div className='grid md:grid-cols-3 w-full h-full mt-3 space-y-6 md:space-y-0'>
            <div className='h-full space-y-2'>
                <h1 className='text-lg text-gray-200'>Conatct</h1>
                <div className='space-y-1'>
                    <NavLink className='text-gray-400 hover:text-gray-100 flex space-x-2'><IoMail className='mt-1'/> <p>example@gmail.com </p></NavLink>
                    <NavLink className='text-gray-400 hover:text-gray-100 flex space-x-2'><IoCall className='mt-1'/> <p>014 417 125 </p></NavLink>
                    <NavLink className='text-gray-400 hover:text-gray-100 flex space-x-2'><IoLocation className='mt-1'/> <p>Cambodia, Phnom Penh </p></NavLink>
                </div>
                <div className='flex space-x-4'>
                  <NavLink to={'/'} className='text-gray-400 hover:text-gray-100'><FaTelegram className='text-3xl' /></NavLink>
                  <NavLink to={'/'} className='text-gray-400 hover:text-gray-100'><FaFacebook className='text-3xl' /></NavLink>
                  <NavLink to={'/'} className='text-gray-400 hover:text-gray-100'><FaInstagram className='text-3xl' /></NavLink>
                </div>
            </div>
            <div className='h-full space-y-2'>
                <h1 className='text-lg text-gray-200'>Quick Links</h1>
                <div className='space-y-1'>
                    <NavLink className='text-gray-400 hover:text-gray-100 duration-200 flex space-x-2'>Laptop</NavLink>
                    <NavLink className='text-gray-400 hover:text-gray-100 duration-200 flex space-x-2'>PC Hardware</NavLink>
                    <NavLink className='text-gray-400 hover:text-gray-100 duration-200 flex space-x-2'>Peripherals</NavLink>
                    <NavLink className='text-gray-400 hover:text-gray-100 duration-200 flex space-x-2'>Accessories</NavLink>
                    <NavLink className='text-gray-400 hover:text-gray-100 duration-200 flex space-x-2'>PC Sets</NavLink>
                </div>
            </div>
            <div className='md:h-full space-y-2'>
                <h1 className='text-lg text-gray-200'>Address</h1>
                <div className='space-y-1 border h-[85%] rounded'>
                <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15634.503276332223!2d104.88123049685834!3d11.578659485936653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2z4Z6f4Z624Z6A4Z6b4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6b4Z-Q4Z6Z4Z6X4Z684Z6Y4Z634Z6T4Z-S4Z6R4Z6X4Z-S4Z6T4Z-G4Z6W4Z-B4Z6J!5e0!3m2!1skm!2skh!4v1709106693199!5m2!1skm!2skh"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
          </div>
      </section>
      <h1 className='text-gray-400 text-sm text-center mt-3'>Copyright @ 2024 Computer Shop - All Rights Reserved.</h1>
    </footer>
  )
}

export default FooterBar
