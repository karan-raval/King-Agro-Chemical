import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Download from '../Pages/Download';
import ContactUs from '../Pages/ContactUs';
import PGR from '../Pages/PGR';
import AmpulsePacking from '../Pages/AmpulsePacking';
import ProductDetails from '../Pages/ProductDetails';

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/product/:name" element={<ProductDetails />} />
        <Route path="/products/ampulse" element={<AmpulsePacking/>} />
        <Route path="/products/insecticides" element={<h1>Insecticides</h1>} />
        <Route path="/products/fungicides" element={<h1>Fungicides</h1>} />
        <Route path="/products/pgr" element={<PGR/>} />
        <Route path="/download" element={<Download/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </>
  )
}

export default MainRoutes