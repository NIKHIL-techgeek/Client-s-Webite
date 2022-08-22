import React from "react";
import logo from "../assets/logo.svg";
const NavBar = () => {
  return (
    <div className="fixed w-full h-[45px] flex justify-end items-center px-4 bg-gray-800 text-gray-300">
       
      <ul className="hidden md:flex space-x-10 text-l">
        <li className="hover:underline hover:text-4xl">Home</li>
        <li className="hover:underline hover:text-4xl ">About</li>
        <li className="hover:underline hover:text-4xl ">Contact</li>
        <li className="hover:underline hover:text-4xl ">Services</li>
      </ul>
    </div>
  );
};

export default NavBar;
