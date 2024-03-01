import React from 'react'
import './App.css'
import Layout from './components/layout/layout'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import LaptopPage from './pages/laptop/LaptopPage'
import PC_Hardware from './pages/pc_hardware/PC_Hardware'
import ContactPage from './pages/contact/ContactPage'
import Accessory from './pages/Accessories/Accessory';
import Peripherals from './pages/peripherals/Peripherals'
import PC_Sets from './pages/pc_sets/PC_Sets'
import Second_Hand_Page from './pages/secondhand/Second_Hand_Page'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route path='' element={<HomePage/>} />
          <Route path='laptop' element={<LaptopPage/>} />
          <Route path='pc_hardware' element={<PC_Hardware/>} />
          <Route path='accessory' element={<Accessory/>} />
          <Route path='peripherals' element={<Peripherals/>} />
          <Route path='pc_set' element={<PC_Sets/>} />
          <Route path='second_hand' element={<Second_Hand_Page/>} />


          <Route path='contact' element={<ContactPage/>} />
  
        </Route>
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
