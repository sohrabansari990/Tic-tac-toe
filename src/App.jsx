import React from 'react'
import Tic from './components/Tic'
import { BrowserRouter, Router, Routes , Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Result from './components/Result'

const App = () => {


  

  return (
    <BrowserRouter>
      <div className='parent flex min-h-screen w-full flex-col items-center relative bg-[#0a0e27] px-4 py-8 sm:py-12 select-none'>
        <Nav  />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/Tic' element={<Tic />} />
          <Route path='/Result' element={<Result />} />

        </Routes>
       
        
      </div>

    </BrowserRouter>
  )
}

export default App
