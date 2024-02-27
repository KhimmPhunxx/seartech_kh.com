import React from 'react'

import mock_data from './home_cate.json'

function HomeCategory() {
  return (
    <div>
      <div className='flex justify-between py-2 space-x-4'>
      {
        mock_data.data.map((item, index) => {
          return (
            <div key={index} className='h-16 w-44 duration-200 hover:shadow rounded-md cursor-pointer'>
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
