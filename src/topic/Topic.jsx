import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllTopics from './AllTopics'
import DevOps from './DevOps'
import Frameworks from './Frameworks'
import Languages from './Languages'
import Navbar from './Navbar'
import Tech from './Tech'
import Testing from './Testing'
import Tooling from './Tooling'

const Topic = () => {
  return (
    <div className='bg-indigo-800'>
          <div className='container'>
       <div className='w-[700px] mx-auto text-white'>
            <h1 className='text-center text-[32px]'>Pick a topic. Any topic.</h1>
            <p className='text-center text-gray-200'>If you already know what you are looking for, Laracasts is devided into various topics ranging from framworks to packages to tools.</p>
        </div>
       </div>
        <Navbar/>
        <Routes>
            <Route path='/browse/' element={<AllTopics/>}/>
            <Route path='/browse/devops' element={<DevOps/>}/>
            <Route path='browse/frameworks' element={<Frameworks/>}/>
            <Route path='browse/languages' element={<Languages/>}/>
            <Route path='browse/techniques' element={<Tech/>}/>
            <Route path='browse/testing' element={<Testing/>}/>
            <Route path='browse/tooling' element={<Tooling/>}/>
        </Routes>
    </div>
  )
}

export default Topic