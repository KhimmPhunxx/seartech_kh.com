import React from 'react'

import mock_data from './home_cate.json'

function HomeCategory() {
  return (
    <div>
      <div className='flex flex-wrap justify-between py-2'>
      {
        mock_data.data.map((item, index) => {
          return (
            <div key={index} className='h-12 w-32 duration-200 hover:shadow rounded-md cursor-pointer'>
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
