import React from 'react'
import mock_data from './home_cate.json'

function HomeCategory() {
  return (
    <div className=''>
      <div className='flex relative flex-wrap justify-between cate gap-10'>
      {
        mock_data.data.map((item, index) => {
          return (
            <div key={index} className='h-12 w-[140px] inline-block duration-200 hover:shadow rounded-md cursor-pointer'>
              <img 
              className='
              w-[90%]
              h-full
              mx-auto
              object-cover
              ' src={item.image} />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default HomeCategory
