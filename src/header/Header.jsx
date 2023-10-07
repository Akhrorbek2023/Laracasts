import React, { useState } from 'react'
import SearchModal from '../modals/SearchModal'
import SignIn from '../modals/SignIn'
import Hero from './Hero'
import Knowlage from './Knowledge'
import Navbar from './Navbar'


const Header = () => {
    const [showModalSearch, setShowModalSearch] = useState(false)

    const [showModalSignIn, setShowModalSignIn] = useState(false)
  return (
    <div className='bg-no-reapet bg-fixed bg-opacity-70 relative' style={{backgroundImage: `url(https://w0.peakpx.com/wallpaper/435/732/HD-wallpaper-laptop-numbers-dark.jpg)`}}>
       <div className='bg-black bg-opacity-70'>
       <Navbar showModalSearch={showModalSearch} setShowModalSearch= {setShowModalSearch}  showModalSignIn={showModalSignIn} setShowModalSignIn= {setShowModalSignIn} />
        <Hero/>
        <Knowlage/>
        {
            showModalSearch && <div className='w-full h-full absolute bg-black bg-opacity-70 top-0'>
            <div className='bg-opacity-80 '>
            <SearchModal showModalSearch={showModalSearch} setShowModalSearch= {setShowModalSearch} />
            </div>
         </div>
        }

        {
              showModalSignIn && <div className='w-full h-full absolute bg-black bg-opacity-70 top-0'>
              <div className='bg-opacity-80 ml-[35%]'>
              <SignIn  showModalSignIn={showModalSignIn} setShowModalSignIn= {setShowModalSignIn}/>
              </div>
           </div>
        }
       </div>
    </div>
  )
}

export default Header