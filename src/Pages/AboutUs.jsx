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
      <Header />
      <div className="about-page">
        {/* Hero Section */}
        <section className="hero-section ">
          <h1>About Us</h1>
        </section>


      </div>

      <div className="about-us">
        <div className="about-us-container">
          <h2>About Us</h2>
          <p>
            Founded with a vision to provide effective, eco-friendly agrochemical solutions,
            <span className="highlight"> King Agro Chemicals </span> has grown to become a trusted name in the industry.
            Based in <span className="highlight">Rajkot, Gujarat</span>, we specialize in manufacturing
            <span className="highlight"> PGR products, pesticides, and bio-pesticides</span> that meet the highest standards
            of quality and sustainability.
          </p>
          <p>
            Our products are designed to meet the diverse needs of farmers, ensuring improved crop protection,
            higher yields, and reduced environmental impact. We take pride in our research and development capabilities,
            continuously improving our products to cater to the evolving needs of the agriculture sector.
          </p>
        </div>
      </div>


      <div className="about-container">
        {/* Mission & Vision */}
        <div className="about-content">
          <div className="about-box">
            <h2>OUR MISSION :</h2>
            <p>
              To empower farmers with sustainable and innovative agricultural solutions, ensuring
              their crops are healthy, productive, and protected against pests and diseases.          </p>
          </div>
          <div className="about-box">
            <h2>OUR VISION :</h2>
            <p>
              To become the leading provider of eco-friendly agrochemicals, delivering high-quality
              products that support sustainable farming and contribute to the growth of agriculture.
            </p>
          </div>

        </div>
        <div className="services">
          <div className="services-container">
            <h2>Our Services</h2>

            <div className="services-grid">
              {/* Custom Formulation Solutions */}
              <div className="service-card">
                <div className="icon"></div>
                <h3>🌿 Custom Formulation Solutions</h3>
                <p>
                  We understand that every farm is unique. That's why we offer custom agrochemical formulations
                  designed to meet the specific needs of different crops and farming conditions.
                </p>
                <ul>
                  <li>Tailored solutions for different crop types</li>
                  <li>Expert team to analyze and create specific formulations</li>
                  <li>Enhanced productivity and crop health</li>
                </ul>
              </div>

              {/* Consultation and Technical Support */}
              <div className="service-card">
                <div className="icon"></div>
                <h3>💡Consultation and Technical Support</h3>
                <p>
                  At King Agro Chemicals, we believe in providing continuous support to our customers.
                  Our team of agricultural experts offers valuable guidance on:
                </p>
                <ul>
                  <li>Best agrochemical solutions</li>
                  <li>Proper application methods</li>
                  <li>Pest management strategies</li>
                  <li>Increasing productivity and yield</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-us">
          <h2>Why Choose Us</h2>
          <div className="badges">
            {/* Expertise and Innovation */}
            <div className="badge">
              <div className="badge-icon">🚀</div>
              <h3>Expertise and Innovation</h3>
              <p>
                With years of experience and a strong R&D team, we provide cutting-edge agrochemical solutions tailored to modern farming needs.
              </p>
            </div>

            {/* Eco-Friendly Solutions */}
            <div className="badge">
              <div className="badge-icon">🌍</div>
              <h3>Eco-Friendly Solutions</h3>
              <p>
                We prioritize the use of sustainable and eco-friendly products, ensuring a safer environment for future generations.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="badge">
              <div className="badge-icon">✅</div>
              <h3>Quality Assurance</h3>
              <p>
                Our products undergo rigorous testing to meet the highest quality standards, ensuring that they deliver consistent results.
              </p>
            </div>

            {/* Customer-Focused Approach */}
            <div className="badge">
              <div className="badge-icon">🤝</div>
              <h3>Customer-Focused Approach</h3>
              <p>
                We work closely with farmers to understand their challenges and offer products and solutions that help them succeed.
              </p>
            </div>
          </div>
        </div>



        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+918000014151"
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

      <Footer />
    </>
  )
}

export default AboutUs