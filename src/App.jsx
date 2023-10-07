import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './footer/Footer'
import Home from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
