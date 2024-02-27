import React from 'react'
import HeroSectioPage from '../../components/herosection/HeroSectioPage'
import HomeCategory from '../../components/category_store/Home-Category'
import { IoLaptopOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

import { NavLink } from 'react-router-dom';
import Home_laptopPage from '../../mockdata/fetch_data/Home_laptopPage';
import { FaComputer } from 'react-icons/fa6';
import Home_PC_Hardware from '../../mockdata/fetch_data/Home_PC_Hardware';
import FooterBar from '../../components/layout/footer';

function HomePage() {
  return (
    <div>
        <main className='mt-1'>
          <section>
            <HeroSectioPage />
          </section>
          <section className='mt-10'>
            <HomeCategory />
          </section>
          <section className='mt-10 '>
            <div className='flex justify-between border-b pb-2'>
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
            <div className='flex justify-between border-b pb-2'>
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
        </main>
        {/* <FooterBar /> */}
    </div>
  )
}

export default HomePage
