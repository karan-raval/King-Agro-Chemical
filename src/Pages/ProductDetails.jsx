import React from "react";
import "../assets/css/productdetails.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pgrGib5ml from "../assets/images/PGR-GIB-5ml.png";
import larvicide5ml from "../assets/images/LARVICIDE.png";
import viricide5ml from "../assets/images/VIRICIDE.png";
import fungicide5ml from "../assets/images/FUNGICIDE.png";
import MIXMICRONUTRIENTS5ml from "../assets/images/MIX-MICRONUTRIENTS.png";
import ALLSUCKINGPEST5ml from "../assets/images/ALLSUCKINGPEST.png";
import BORERSPECIAL5ml from "../assets/images/BORERSPECIAL.png";
import PGRGIB10ML from "../assets/images/PGR-GIB-10ML.png";
import MITYCIDE5ML from "../assets/images/MITYCIDE.png";

const ProductDetails = () => {
  
const navigate = useNavigate();
  const { name } = useParams();

  // Products array ke structure ko AmpulsePacking ke jaisa rakho
  const products = [
    { name: "PGR (GIB)/5ML", image: pgrGib5ml, commonName: "EXTRA POWER", features: ["Provides better cell division, cell enlargement, helps in branching and flowering, increases fruit quality and yields, increases size, taste and colour of fruits"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray(100 Tray X 1 Box)" },
    { name: "PGR (GIB)/10ML", image: PGRGIB10ML, commonName: "GREENWAY", features: ["Provides better cell devisions.Cell enlargement it helps in branching and flowering Increases fruit quality and yields Increases size, taste and colour of fruits"], dose: "10 ML / 15 liter water", packing: "10 ML X 5 Nos = 1 Tray(50 Tray X 1 Box)" },
    { name: "FUNGICIDE", image: fungicide5ml, commonName: "FUNGI KING", features: ["Used against downy mildew, powdery mildew, grey mildew used against early bright, anthracnose, leaf spot, mosaic improve plants growth and crop quality"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray(100 Tray X 1 Box)" },
    { name: "VIRICIDE", image: viricide5ml, commonName: "KING V-GUARD", features: ["Used against all types viruses and bacteria in plant used against early bright, leaf spot, mosaic and leaf curl improve plants growth and crop quality"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray(100 Tray X 1 Box)" },
    { name: "LARVICIDE", image: larvicide5ml, commonName: "LARVAKING", features: ["Effective against Larva it has a toxic effect on eggs of some species and, in some cases, reduces fecundity it make plant healthier and decrease the insect stress"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray(100 Tray X 1 Box)" },
    { name: "MIX MICRONUTRIENTS", image: MIXMICRONUTRIENTS5ml, commonName: "NUTRIKING", features: ["Maintain the all nutrient balance in plant make plant healthier and decrease the atomsphere stress Increase the enzyme balance in plant and growth of overall plant Increases fruit quality and yields Increases size, taste and colour of fruits"], dose: "10 ML / 15 liter water", packing: "10 ML X 5 Nos = 1 Tray (100 Tray X 1 Box)" },
    { name: "MITYCIDE", image: MITYCIDE5ML, commonName: "CAPTAIN", features: ["It control of sucking and chewing insects, such as thripes, mites, jassid and aphides. it make plant healthier and decrease the insect stress"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray(100 Tray X 1 Box)" },
    { name: "ALL SUCKING PEST", image: ALLSUCKINGPEST5ml, commonName: "COMMANDO", features: ["Control of sucking and chewing insects, such as plant hoppers, stink bugs Effective against Larva, Aphids and whiteflies it make plant healthier and decrease the insect stress"],dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray (100 Tray X 1 Box)" },
    { name: "BORER SPECIAL LARVICIDE", image: BORERSPECIAL5ml, commonName: "SHOOTER", features: ["Effective against stem borer, shoot borer and all types of borer larvait has a toxic effect on eggs of some species and, in some cases, reduces fecundity it make plant healthier and decrease the insect stress"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray (100 Tray X 1 Box) (CORN/BRINJAL/BORER SPECIAL )" },
  ];

  // Select product based on name
  const product = products.find((p) => p.name === decodeURIComponent(name));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <div className="ampulse-container">
        <div className="ampulse-header">
          <h1>{product.name}</h1>
        </div>

        <div className="ampulse-content">
          {/* Sidebar */}
          <div className="ampulse-sidebar">
  <ul>
    {products.map((item, index) => (
      <li 
        key={index} 
        className={decodeURIComponent(name) === item.name ? "active" : ""}
        onClick={() => navigate(`/product/${encodeURIComponent(item.name)}`)}
      >
        {item.name} {/* Object ke bajaye string ko render kar rahe hain */}
      </li>
    ))}
  </ul>
</div>

          {/* Product Details */}
          <div className="ampulse-details">
            <div className="ampulse-image">
              <img src={product.image} alt={product.name} />
            </div>

            <h2>{product.name}</h2>

            <div className="ampulse-specifications">
              <div className="spec-header">SPECIFICATIONS</div>
              <table>
                <tbody>
                  <tr>
                    <td className="spec-label">Product Name:</td>
                    <td>{product.commonName}</td>
                  </tr>
                  <tr>
                    <td className="spec-label">Uses:</td>
                    <td>
                      <ul>
                        {product.features.map((feature, index) => (
                          <span key={index}>{feature}</span>
                        ))}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="spec-label">Dose:</td>
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
      <Footer />
    </>
  );
};

export default ProductDetails;
