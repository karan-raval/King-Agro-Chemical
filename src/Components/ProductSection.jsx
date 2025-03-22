import React, { useState, useEffect } from "react";
import product1 from "../assets/images/King-Power.png";
import product2 from "../assets/images/King-Star.png";
import product3 from "../assets/images/Humi-Hub.png";
import product4 from "../assets/images/King-Blast.png";
import product5 from "../assets/images/Humiking.png";
import product6 from "../assets/images/Nutriking.png";

const products = [
  { id: 1, name: "King Power", ingredient: "NANO TECHNOLOGY BASED PLANT GROWTH PROMOTER", description: "King Power is an organic liquid PGR suitable for all vegetables, fruits, and crops.", image: product1 },
  { id: 2, name: "King Star", ingredient: "HUMIC SNP", description: "King Star is designed for all types of crops like Rice, Groundnut, Fruits & Vegetables.", image: product2 },
  { id: 3, name: "Humi-Hub", ingredient: "HUMIC AMINO FULVIC", description: "Humi-Hub is an organic liquid PGR that enhances plant growth effectively.", image: product3 },
  { id: 4, name: "King BLAST", ingredient: "HUMIC AMINO FULVIC SEAWEED", description: "King Blast is formulated for crop health and productivity.", image: product4 },
  { id: 5, name: "HUMIKING", ingredient: "HUMIC Liquid", description: "HUMIKING is a liquid growth promoter that improves flowering and yield.", image: product5 },
  { id: 6, name: "NUTRKING", ingredient: "MIX MICRONUTRION", description: "NUTRKING enhances soil nutrients and crop productivity.", image: product6 },
];

const ProductSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + (isMobile ? 1 : 2)) % products.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="product-section">
      <div className="product-header">
        <h2 className="section-title">Product Category</h2>
        <p className="section-description">
          Our products use chemical and organic fertilizers to improve crop yield and plant health.
        </p>
      </div>

      <div className="product-slider">
        <div className="product-card-container">
          {[...Array(isMobile ? 1 : 2)].map((_, offset) => {
            const index = (currentIndex + offset) % products.length;
            return (
              <div key={products[index].id} className="product-card">
                <div className="product-card-content">
                  <h3>{products[index].name}</h3>
                  <strong>{products[index].ingredient}</strong>
                  <p>{products[index].description}</p>
                </div>
                <img src={products[index].image} alt={products[index].name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
