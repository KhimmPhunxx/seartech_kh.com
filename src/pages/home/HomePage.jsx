import React from 'react'
import HeroSectioPage from '../../components/herosection/HeroSectioPage'
import HomeCategory from '../../components/category_store/Home-Category'

function HomePage() {
  return (
    <div className='h-[1000px]'>
        <main className='mt-1'>
          <section>
            <HeroSectioPage />
          </section>
          <section className='mt-5'>
            <HomeCategory />
          </section>
        </main>
    </div>
  )
}

export default HomePage
