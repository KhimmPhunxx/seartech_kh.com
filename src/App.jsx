import React from 'react'
import './App.css'
import Layout from './components/layout/layout'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import LaptopPage from './pages/laptop/LaptopPage'
import PC_Hardware from './pages/pc_hardware/PC_Hardware'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route path='' element={<HomePage/>} />
          <Route path='laptop' element={<LaptopPage/>} />
          <Route path='pc_hardware' element={<PC_Hardware/>} />
  
        </Route>
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
