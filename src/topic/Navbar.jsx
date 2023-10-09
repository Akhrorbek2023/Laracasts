import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
     <div className='container'>
        <ul className='flex justify-center space-x-4 text-gray-500 text-[20px] py-5'>
            <li className='hover:text-white focus:border-b-4 hover:border-b-4 hover:border-white py-2 border-b-4 border-b-transparent'>
                <Link to={"/browse/"}>All Topics</Link>
            </li>
            <li className='hover:text-white hover:border-b-4 hover:border-white py-2 border-b-4 border-b-transparent'>
                <Link to={"/browse/devops"}>DevOps</Link>
            </li>
            <li className='hover:text-white hover:border-b-4 hover:border-white py-2 border-b-4 border-b-transparent'>
                <Link to={"/browse/frameworks"}>Frameworks</Link>
            </li>
            <li className='hover:text-white hover:border-b-4 hover:border-white py-2 border-b-4 border-b-transparent'>
                <Link to={"/browse/languages"}>Languages</Link>
            </li>
            <li className='hover:text-white hover:border-b-4 hover:border-white py-2 border-b-4 border-b-transparent'>
                <Link to={"/browse/techniques"}>Techniques</Link>
            </li>
            <li className='hover:text-white hover:border-b-4 hover:border-white py-2 border-b-4 border-b-transparent'>
                <Link to={"/browse/testing"}>Testing</Link>
            </li>
            <li className='hover:text-white hover:border-b-4 hover:border-white py-2 border-b-4 border-b-transparent'>
                <Link to={"/browse/tooling"}>Tooling</Link>
            </li>
        </ul>
     </div>
    </div>
  )
}

export default Navbar