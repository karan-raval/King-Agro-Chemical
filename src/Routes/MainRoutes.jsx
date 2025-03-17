import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Download from '../Pages/Download';
import ContactUs from '../Pages/ContactUs';

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/products/ampulse" element={<h1>Ampulse Packing</h1>} />
        <Route path="/products/insecticides" element={<h1>Insecticides</h1>} />
        <Route path="/products/fungicides" element={<h1>Fungicides</h1>} />
        <Route path="/products/pgr" element={<h1>PGR</h1>} />
        <Route path="/download" element={<Download/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </>
  )
}

export default MainRoutes