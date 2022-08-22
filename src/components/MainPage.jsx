import React ,{useState} from "react";
import {FaBars , FaTimes } from  'react-icons/fa';

const MainPage = () => {
  const [nav , setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[45px] flex justify-end items-center px-4 bg-gray-800 text-gray-300">
       
      <ul className="hidden md:flex space-x-10 text-l">
        <li className="hover:underline hover:text-4xl">Home</li>
        <li className="hover:underline hover:text-4xl ">About</li>
        <li className="hover:underline hover:text-4xl ">Contact</li>
        <li className="hover:underline hover:text-4xl ">Services</li>
      </ul>

      <div  onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
          </div>


      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl  hover:text-5xl hover:underline hover:text-pink-600'>
              Home
              </li>
              <li className='py-6 text-4xl hover:text-5xl hover:underline hover:text-pink-600'>
              About
              </li>
              <li className='py-6 text-4xl hover:text-5xl hover:underline hover:text-pink-600'>
              Skills
              </li>
              <li className='py-6 text-4xl hover:text-5xl hover:underline hover:text-pink-600'>
              Contact
              </li>
            </ul>
    </div>
  )
};

export default MainPage;
