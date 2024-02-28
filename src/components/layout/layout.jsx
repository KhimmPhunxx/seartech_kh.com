import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoText from './logo'
import TopBar from './top-bar'
import ButtonAction from './button-action'
import NavigationBar from './navigation-bar'
import FooterBar from './footer'

function Layout() {
  return (
    <>
        <header className='z-50'>
            <nav className='bg-gray-100 dark:bg-gray-900 p-3 w-full'>
                <TopBar />
            </nav>
        </header>
        <nav className='bg-white z-40 border-b md:border-0 mx-auto dark:bg-gray-800 p-3 w-full sticky lg:static top-0'>
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
