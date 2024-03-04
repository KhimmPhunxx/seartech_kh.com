import React from 'react'

import category_data from './access_category.json'
import TP_Link from './TP_Link'
import Adata from './Adata'

function Accessories_Page() {
  return (
    <main className='mt-8'>
        <section className='flex justify-between w-full'>
            <div className='w-[15%] sticky top-16 h-[900px]'>
                <h1 className='text-2xl font-bold text-red-500'>Brand Name</h1>
                {
                    category_data.category.map((item, index) => {
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
                    style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0355/8296/7943/files/asus-vivobook-promo.jpg?v=1646992927')`}}
                    >
                        <div className='w-full bg-gradient-to-r flex space-x-4 from-gray-600 to-gray-0 rounded-lg overflow-hidden p-5'>
                        <div className='h-8 w-24 border-r pr-2'>
                            <img className='h-full w-full object-cover rounded' src="https://upload.wikimedia.org/wikipedia/commons/9/94/TPLINK_Logo_2.png" alt="" />
                        </div>
                        <h1 className='text-3xl text-gray-100 font-medium'>TP-Link</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <TP_Link />
                    </div>
                </div>

                <div className='pb-5'>
                    <div 
                    className='
                    w-full border rounded-lg
                    bg-cover bg-center bg-no-repeat
                    '
                    style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0355/8296/7943/files/asus-vivobook-promo.jpg?v=1646992927')`}}
                    >
                        <div className='w-full bg-gradient-to-r flex space-x-4 from-gray-600 to-gray-0 rounded-lg overflow-hidden p-5'>
                            <div className='h-9 w-28 border-r pr-2'>
                                <img className='h-full w-full object-cover rounded' src="https://logos-world.net/wp-content/uploads/2022/03/ADATA-Logo.png" alt="" />
                            </div>
                            <h1 className='text-3xl text-gray-100 font-medium'>ADATA</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                       <Adata />
                    </div>
                </div>
                
            </div>
        </section>
    </main>
  )
}

export default Accessories_Page
