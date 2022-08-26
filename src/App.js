import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Services from './components/Services';
const App = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services />} />
        </Routes>
    </>
  );
};

export default App;
