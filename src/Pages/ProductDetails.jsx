import React from "react";
import "../assets/css/productdetails.css";
import pgrGib5ml from "../assets/images/PGR-GIB-5ml.png"; // Replace with actual paths
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AmpulseDetails = () => {
  const products = [
    "PGR (GIB)/5ML",
    "PGR (6BA)/5ML",
    "PGR (GIB)/10ML DONGLE PACK",
    "PGR (6BA)/10ML DONGLE PACK",
    "PGR (6BA)/10ML",
    "PGR (GIB)/10ML",
    "MIX MICRONUTRIENTS",
    "FUNGICIDE",
    "VIRICIDE",
    "LARVICIDE",
    "MITYCIDE",
    "ALL SUCKING PEST",
    "BORER SPECIAL LARVICIDE",
    "ALL TYPES OF LARVA",
    "PGR 2ML",
  ];

  const product = {
    name: "PGR (GIB)/5ML",
    commonName: "Plant Growth Regulator",
    features: [
      "Promotes plant growth and development.",
      "Improves crop yield and quality.",
      "Enhances root development.",
      "Increases resistance to environmental stress.",
    ],
    dose: "5 ml per acre",
    packing: "5 ml, 10 ml, 50 ml",
  };

  return (
    <>
    <Header/>
    <div className="ampulse-container">
      {/* Header Section */}
      <div className="ampulse-header">
        <h1>{product.name}</h1>
      </div>

      <div className="ampulse-content">
        {/* Sidebar */}
        <div className="ampulse-sidebar">
          <ul>
            {products.map((item, index) => (
              <li key={index} className={item === product.name ? "active" : ""}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Details */}
        <div className="ampulse-details">
          <div className="ampulse-image">
            <img src={pgrGib5ml} alt={product.name} />
          </div>

          <h2>{product.name}</h2>

          <div className="ampulse-specifications">
            <div className="spec-header">SPECIFICATIONS</div>
            <table>
              <tbody>
                <tr>
                  <td className="spec-label">Common Name:</td>
                  <td>{product.commonName}</td>
                </tr>
                <tr>
                  <td className="spec-label">Features & Uses:</td>
                  <td>
                    <ul>
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="spec-label">Dose/Acre:</td>
                  <td>{product.dose}</td>
                </tr>
                <tr>
                  <td className="spec-label">Packing:</td>
                  <td>{product.packing}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AmpulseDetails;
