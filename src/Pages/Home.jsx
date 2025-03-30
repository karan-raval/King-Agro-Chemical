import React, { useState, useEffect } from "react";
import sliderbg1 from "../assets/images/banner-1.jpg";
import product1 from "../assets/images/PGR-GIB-5ml.png";
import product2 from "../assets/images/MITYCIDE.png";
import product3 from "../assets/images/LARVICIDE.png";
import product4 from "../assets/images/FUNGICIDE.png";
import product5 from "../assets/images/MIX-MICRONUTRIENTS.png";
import product6 from "../assets/images/BORERSPECIAL.png";
import product7 from "../assets/images/King-Power.png";
import product8 from "../assets/images/Nutriking.png";
import aboutImage from "../assets/images/About-us-section.png";
import "../assets/css/home.css";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ProductSection from "../Components/ProductSection";
import icon1 from '../assets/images/quality-products.png'
import icon2 from '../assets/images/satisfied-customers.png'
import icon3 from '../assets/images/dedicated-team.png'
import icon4 from '../assets/images/dealer-outlets.png'

const slides = [
  {
    id: 1,
    background: sliderbg1,
    product: product1,
    title: "EXTRA POWER",
    subtitle: "INDIA'S BEST PGR",
  },
  {
    id: 2,
    background: sliderbg1,
    product: product2,
    title: "CAPTAIN",
    subtitle: "THIPS & MITES",
  },
  {
    id: 3,
    background: sliderbg1,
    product: product3,
    title: "LARVAKING",
    subtitle: "LARVICIDE",
  },
  {
    id: 4,
    background: sliderbg1,
    product: product4,
    title: "FUNGIKING",
    subtitle: "FUNGICIDE",
  },
  {
    id: 5,
    background: sliderbg1,
    product: product5,
    title: "NUTRIKING",
    subtitle: "MIX MICRONUTRIENTS",
  },
  {
    id: 6,
    background: sliderbg1,
    product: product6,
    title: "SHOOTER",
    subtitle: "BRINJAL SPECIAL LARVICIDE",
  },
];

const sectionData1 = [
  { img: icon1, title: "100+ ", description: "Quality Products" },
  { img: icon2, title: "50000+ ", description: "Satisfied Customers" },
  { img: icon3, title: "100+ ", description: "Dedicated Team" },
  { img: icon4, title: "1100+ ", description: "Dealer Outlets" }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Header />
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.background})`,
            }}
          >
            <div className="right-content">
              <img src={slide.product} alt="Product" className="product-image" />
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <section className="about-section">
        <div className="about-container">
          <div className="about-images">
            <img src={aboutImage} alt="About" className="farm-image" />
            <div className="small-circle">
              <img src={product8} alt="Product" className="left-product" />
              <img src={product7} alt="Product" className="right-product" />
            </div>
          </div>

          <div className="about-contentt">
            <h3 className="about-title">ABOUT US</h3>
            <h2 className="about-heading">
              We Are The Leader In <br />
              <span>Manufacturer of Pesticides & PGR</span>
            </h2>
            <p className="about-text">
              Established in 2014, King Agro Chemicals, are among the
              prominent Manufacturers and Suppliers of a diverse assortment of
              Agriculture Pesticides, Fungicide,Plant Growth Promoter, etc.
              We are also bulk supplier of all types of agriculture Products.
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <ProductSection />
      {/*  */}


      {/*  */}
      <div className="section">
        {sectionData1.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="highlight-section">Farmer... you are never alone</div>
      {/*  */}
      <Footer />
    </>
  );
};

export default Home;
