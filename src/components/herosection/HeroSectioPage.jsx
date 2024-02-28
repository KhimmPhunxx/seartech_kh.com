import React from 'react'

function HeroSectioPage() {
  return (
    <div className='w-full z-1 h-56 md:h-[550px] bg-gray-500 bg-repeat  bg-cover bg-center bg-opacity-50 relative z-0' 
    style={{
        backgroundImage: `url('https://images.macrumors.com/t/Ci-v_jSTl4F09W0SVVeABBaeqRk=/1600x0/article-new/2020/10/macbook-pro-13-inch-banner.jpeg')`,
    }}
    >
      <div className='
        p-10
        md:p-32 
        w-full
        h-full
        space-y-4
        md:space-y-6
        bg-gradient-to-r from-gray-600 to-gray-0
      '>
        <h1 className='text-2xl lg:text-6xl font-semibold text-gray-100'>Welcome to the SearTechkh computer shop</h1>
        <p className='text-gray-300 md:text-2xl'>All products are guaranteed by the company.</p>
      </div>
    </div>
  )
}

export default HeroSectioPage
