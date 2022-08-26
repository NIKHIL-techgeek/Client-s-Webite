import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[45px] flex justify-between items-center px-4 bg-gray-800 text-gray-300">
      <div className="bg-[#c5cad1]">
        <img src={logo} alt="logo" style={{ width: "60px" }} />
      </div>
      <ul className="hidden md:flex space-x-10 text-l">
        <li className="hover:underline hover:text-4xl"><a href="/">Home</a></li>
        <li className="hover:underline hover:text-4xl "><a href="/about">About</a></li>
        <li className="hover:underline hover:text-4xl "><a href="/contact">Contact</a></li>
        <li className="hover:underline hover:text-4xl "><a href="/services">Services</a></li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl  hover:text-5xl hover:underline">Home</li>
        <li className="py-6 text-3xl hover:text-5xl hover:underline ">About</li>
        <li className="py-6 text-3xl hover:text-5xl hover:underline ">
          Skills
        </li>
        <li className="py-6 text-3xl hover:text-5xl hover:underline ">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
