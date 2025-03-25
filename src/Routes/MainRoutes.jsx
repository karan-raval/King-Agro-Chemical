import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Download from '../Pages/Download';
import ContactUs from '../Pages/ContactUs';
import PGR from '../Pages/PGR';
import AmpulsePacking from '../Pages/AmpulsePacking';
import ProductDetails from '../Pages/ProductDetails';
import PageNotFound from '../Pages/PageNotFound';
import SinglePGR from '../Pages/SinglePGR';
import OtherProduct from '../Pages/OtherProduct';
import OtherSinplePage from '../Pages/OtherSinplePage';

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/product/:name" element={<ProductDetails />} />
        <Route path="/products/ampulse" element={<AmpulsePacking/>} />
        <Route path="/products/other-product" element={<OtherProduct/>} />
        <Route path="/products/other-product/:productId" element={<OtherSinplePage/>} />
        <Route path="/products/pgr" element={<PGR/>} />
        <Route path="/product/pgr/:productId" element={<SinglePGR />} />
        <Route path="/download" element={<Download/>} />
        <Route path="/contact" element={<ContactUs/>} />
        {/* <Route path="/*" element={<PageNotFound/>} /> */}
      </Routes>
    </>
  )
}

export default MainRoutes