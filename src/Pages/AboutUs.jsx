import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../assets/css/aboutus.css'

const AboutUs = () => {
        // Back to top handler
        const handleScrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };

  return (
    <>
    <Header/>
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section ">
        <h1>About Us</h1>
      </section>

      
    </div>
    <div className="about-container">
      {/* Mission & Vision */}
      <div className="about-content">
        <div className="about-box">
          <h2>OUR MISSION :</h2>
          <p>
            To work closely with the farming community and improve the profitability & living standard of farmers.
          </p>
        </div>
        <div className="about-box">
          <h2>OUR VISION :</h2>
          <p>
            With our highly motivated & skilled staff, we can deliver the best agrochemicals products for our customers and contribute to sustainable agriculture.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="core-values">
        <h2>CORE VALUES:</h2>
        <ul>
          <li>Work towards result-oriented solutions.</li>
          <li>Focus on satisfying our customer needs.</li>
          <li>Engage with farmers at the grassroot level to identify and solve their problems.</li>
        </ul>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8000014151"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Back to Top Button */}
      <button className="back-to-top" onClick={handleScrollToTop}>
        ▲
      </button>
    </div>

    <Footer/>
    </>
  )
}

export default AboutUs