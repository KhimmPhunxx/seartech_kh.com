import React from 'react'

import data from './laptop.json'

function Fetch_Data_Laptop() {

  return (
    <div className='max-w-full grid md:grid-cols-3'>
        {
            data.data.map((laptop, index) => {
                return (
                    <div key={index} className='border '>
                       <div className='w-96 h-44'>
                            <h1>{laptop.name}</h1>
                            <h1>{laptop.price}</h1>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Fetch_Data_Laptop
