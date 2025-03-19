import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../assets/css/contactus.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pm8j8sg', // Replace with your Service ID
        'template_ji2x4ok', // Replace with your Template ID
        form.current,
        'WtLROtQn36UfRQFcY' // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log('Message Sent:', result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Reset form after submission
        },
        (error) => {
          console.log('Error:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };
  return (
    <>
      <Header />
      <div className="contact-us">
        {/* Hero Section */}
        <div className="hero-section">
          <h1>Contact Us</h1>
        </div>

        {/* Contact Info and Form */}
        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h2>Contact Info</h2>
            <br /><br /><br />
            <p>
              <strong>Office Address</strong><br />
              Red. Office. 14/4 Corner, Atika Industrial Area, Banshidhar Chowk, Rajkot – Gujarat -360003<br />
            </p>
            <br /><br /><br />
            <p>
            <strong>Marketing:</strong> +91 80000 77779 / +91 80000 14151<br />
            <strong>Quality Consultant:</strong> +91 80000 77779 / +91 80000 14151<br />
               <strong>For Sales Order:</strong>+91 80000 77779 / +91 80000 14151<br />
               <strong>Office:</strong> +91 80000 77779 / +91 80000 14151<br />
               <strong>Email:</strong>  <a style={{color:"white"}} href="mailto:Kingagrochemicals@gmail.com">Kingagrochemicals@gmail.com</a> <br />
            </p>
 
            <div className="social-icons">
              <h2>Get Social</h2>
              <a href="https://wa.me/8000014151"><i className="fab fa-whatsapp"></i></a>
              <a href="https://www.facebook.com/kingofagro?rdid=mtbneojk0Tk2DOcv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ACmXHRpsP%2F#"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/king_agro_chemicals?igsh=MWxnY3lmMnh2emV2NQ=="><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form">
            <h2>Get in Touch with Us</h2>
            <form ref={form} onSubmit={sendEmail}>
      <select name="enquiry_type" required>
        <option value="">- Select for Enquiry -</option>
        <option value="sales">Sales</option>
        <option value="support">Support</option>
        <option value="other">Other</option>
      </select>

      <textarea name="message" placeholder="Message" required></textarea>
      <input type="text" name="full_name" placeholder="Full Name" required />
      <input type="text" name="company_name" placeholder="Company Name" required />
      <input type="tel" name="mobile" placeholder="Mobile / WhatsApp Number" required />
      <input type="email" name="email" placeholder="Business Email Address" required />
      
      <div className="form-inline">
        <input type="text" name="city" placeholder="City" required />
        <input type="text" name="country" placeholder="Country" required />
      </div>

      <button type="submit">Submit</button>
    </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423.23837595649144!2d70.80268512838975!3d22.264436185345055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca4f3ea51095%3A0x391bf3a62d0d1fe6!2sKing%20Agro%20Chemicals!5e0!3m2!1sen!2sin!4v1742206568032!5m2!1sen!2sin"
             width="600"
              height="450"
                allowFullScreen=""
                 loading="lazy"
                 referrerPolicy ="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactUs