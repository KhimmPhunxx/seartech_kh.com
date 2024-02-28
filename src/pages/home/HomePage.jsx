import React from 'react'
import HeroSectioPage from '../../components/herosection/HeroSectioPage'
import HomeCategory from '../../components/category_store/Home-Category'
import { IoLaptopOutline } from "react-icons/io5";
import { BsArrowRight, BsMouse3, BsUsbPlug } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Home_laptopPage from '../../mockdata/fetch_data/Home_laptopPage';
import { FaComputer } from 'react-icons/fa6';
import Home_PC_Hardware from '../../mockdata/fetch_data/Home_PC_Hardware';
import Home_AccessoriesPage from '../../mockdata/fetch_data/Home_AccessoriesPage';
import Home_PeripheralsPage from '../../mockdata/fetch_data/Home_PeripheralsPage';
import { RiComputerFill } from 'react-icons/ri';
import Home_PC_SetsPage from '../../mockdata/fetch_data/Home_PC_SetsPage';

function HomePage() {
  return (
    <div className='pb-10'>
        <main className='mt-1'>
          <section>
            <HeroSectioPage />
          </section>
          <section className='mt-10 px-5 lg:px-0'>
            <HomeCategory />
          </section>
          <section className='mt-10 '>
            <div className='flex justify-between border-b pb-2 px-5 md:px-0'>
              <div className=' text-gray-600 flex space-x-3'>
                <IoLaptopOutline className='text-3xl'/> 
                <h1 className='text-xl font-medium'>
                  Laptop
                </h1>
              </div>
              <div>
                  <NavLink to={'/laptop'} className={'flex space-x-2 duration-200 rounded-sm px-2 hover:underline'}>
                    <h1 className='text-xl text-gray-600'>More</h1>
                    <BsArrowRight className='text-2xl mt-[3px]'/> 
                  </NavLink>
              </div>
            </div>
            <div className='mt-5'>
              <Home_laptopPage />
            </div>

          </section>
          <section className='mt-10'>
            <div className='flex justify-between border-b pb-2 px-5 lg:px-0'>
                <div className=' text-gray-600 flex space-x-3'>
                  <FaComputer className='text-3xl'/> 
                  <h1 className='text-xl font-medium'>
                    PC Hardware
                  </h1>
                </div>
                <div>
                    <NavLink to={'/pc_hardware'} className={'flex space-x-2 duration-200 rounded-sm px-2 hover:underline'}>
                      <h1 className='text-xl text-gray-600'>More</h1>
                      <BsArrowRight className='text-2xl mt-[3px]'/> 
                    </NavLink>
                </div>
              </div>
              <div className='mt-5'>
                <Home_PC_Hardware />
              </div>
          </section>

          <section className='mt-10'>
          <div className='flex justify-between border-b pb-2 px-5 lg:px-0'>
                <div className=' text-gray-600 flex space-x-3'>
                  <BsUsbPlug className='text-3xl'/> 
                  <h1 className='text-xl font-medium'>
                     Accessories
                  </h1>
                </div>
                <div>
                    <NavLink to={'/pc_hardware'} className={'flex space-x-2 duration-200 rounded-sm px-2 hover:underline'}>
                      <h1 className='text-xl text-gray-600'>More</h1>
                      <BsArrowRight className='text-2xl mt-[3px]'/> 
                    </NavLink>
                </div>
              </div>
              <div className='mt-5'>
                <Home_AccessoriesPage />
              </div>

          </section>

          <section className='mt-10'>
            <div className='flex justify-between border-b pb-2 px-5 lg:px-0'>
                <div className=' text-gray-600 flex space-x-3'>
                  <BsMouse3 className='text-3xl'/> 
                  <h1 className='text-xl font-medium'>
                    Peripherals
                  </h1>
                </div>
                <div>
                    <NavLink to={'/pc_hardware'} className={`flex space-x-2 duration-200 rounded-sm px-2 hover:underline`}>
                      <h1 className='text-xl text-gray-600'>More</h1>
                      <BsArrowRight className='text-2xl mt-[3px]'/> 
                    </NavLink>
                </div>
              </div>
              <div className='mt-5'>
                <Home_PeripheralsPage />
              </div>
          </section>

          <section className='mt-10'>
            <div className='flex justify-between border-b pb-2 px-5 lg:px-0'>
                <div className=' text-gray-600 flex space-x-3'>
                  <RiComputerFill className='text-3xl'/> 
                  <h1 className='text-xl font-medium'>
                    PC Sets
                  </h1>
                </div>
                <div>
                    <NavLink to={'/pc_hardware'} className={`flex space-x-2 duration-200 rounded-sm px-2 hover:underline`}>
                      <h1 className='text-xl text-gray-600'>More</h1>
                      <BsArrowRight className='text-2xl mt-[3px]'/> 
                    </NavLink>
                </div>
              </div>
              <div className='mt-5'>
                <Home_PC_SetsPage />
              </div>

          </section>

        </main>
        {/* <FooterBar /> */}
    </div>
  )
}

export default HomePage
