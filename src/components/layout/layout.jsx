import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoText from './logo'
import TopBar from './top-bar'
import ButtonAction from './button-action'
import NavigationBar from './navigation-bar'
import FooterBar from './footer'
import ScrollToTop from 'react-scroll-to-top'

function Layout() {
  return (
    <>
        <ScrollToTop 
            smooth 
            style={{backgroundColor: '#615EAB', width: '40px', height: '40px', borderRadius: '50%', boxShadow: '2px 2px 10px 2px rgba(255,255,255,0.5)', fontSize: '10px', color: '#ffff' , padding: '10px'}}
            top={200}
            color='#ffff'
            height='20px'
            width='20px'
         />
        <header className='z-50'>
            <nav className='bg-gray-100 p-3 w-full'>
                <TopBar />
            </nav>
        </header>
        <nav className='bg-white border-b md:border-0 mx-auto px-10 md:px-0 p-1 md:p-3 w-full top-0'>
            <section className='mx-auto max-w-7xl flex justify-between'>
                <LogoText />  
                <ButtonAction />
            </section>
        </nav>
        <nav className='sticky top-0 z-50'>
            <NavigationBar />
        </nav>
        <main className='max-w-7xl mx-auto'>
            <Outlet />
        </main>
        <footer>
            <FooterBar />
        </footer>

    </>
  )
}

export default Layout
