import React, { useEffect, useState } from "react";
import "../assets/css/productdetails.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pgrGib5ml from "../assets/images/PGR-GIB-5ml.png";
import pgrGibsignle from "../assets/images/PGR-GIB-5ml-single.png";
import PGRGIBPOST from "../assets/images/PGR-GIB-POST.JPG";
import larvicide5ml from "../assets/images/LARVICIDE.png";
import LARVICIDESINGLE from "../assets/images/LARVICIDE-SINGLE.png";
import LARVICIDEPOST from "../assets/images/LARVICIDE-POST.JPG";
import viricide5ml from "../assets/images/VIRICIDE.png";
import VIRICIDESINGLE from "../assets/images/VIRICIDE-SINGLE.png";
import VIRICIDEPOST from "../assets/images/VIRICIDE-POST.JPG";
import fungicide5ml from "../assets/images/FUNGICIDE.png";
import FUNGICIDESINGLE from "../assets/images/FUNGICIDE-SINGLE.png";
import FUNGICIDEPOST from "../assets/images/FUNGICIDE-POST.jpg";
import MIXMICRONUTRIENTS5ml from "../assets/images/MIX-MICRONUTRIENTS.png";
import MICRONUTRIENTSSINGLE from "../assets/images/MICRONUTRIENTS-SINGLE.png";
import MICRONUTIENTSPOST from "../assets/images/MICRONUTIENTS-POST.JPG";
import ALLSUCKINGPEST5ml from "../assets/images/ALLSUCKINGPEST.png";
import ALLSUCKINGPESTSINGLE from "../assets/images/ALLSUCKINGPEST-SINGLE.png";
import ALLSUCKINGPESTPOST from "../assets/images/ALL-SUCKING-PEST-POST.JPG";
import BORERSPECIAL5ml from "../assets/images/BORERSPECIAL.png";
import SHOOTERPOST from "../assets/images/SHOOTER-POST.JPG";
import SHOTTERSINGLE from "../assets/images/SHOTTER-SINGLE.PNG";
import PGRGIB10ML from "../assets/images/PGR-GIB-10ML.png";
import MITYCIDE5ML from "../assets/images/MITYCIDE.png";
import GreenwayPOST from "../assets/images/Greenway-POST.JPG";
import GREENWAYSINGLE from "../assets/images/GREENWAY-SINGLE.PNG";
import CAPTAINPOST2 from "../assets/images/CAPTAIN-POST-2.JPG";
import CAPTAINSINGLE from "../assets/images/CAPTAIN-SINGLE.png";
import PGR6BA5ML from "../assets/images/PGR-6BA-5ML.png"
import PGR6BA5MLSINGLE from "../assets/images/PGR-6BA-5ML-SINGLE.png"
import PGR6BA10MLSINGLE from "../assets/images/PGR-6BA-10ML-SINGLE.png"
import PGRGIB10MLDONGLEPACK from "../assets/images/PGR-GIB-10ML-DONGLE-PACK.png"
import PGR6BA10MLDONGLEPACK from "../assets/images/PGR-6BA-10ML-DONGLE.png"
import PGR2ML from "../assets/images/PGR-2ML.png"
import ALLTYPESOFLARVA from "../assets/images/ALL-TYPES-OF-LARVA.png"
import PGR6BA10ML from "../assets/images/PGR-6BA-10ML.png"

const ProductDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const products = [
    { name: "PGR (GIB)/5ML", images: [pgrGib5ml, pgrGibsignle, PGRGIBPOST], commonName: "EXTRA POWER", features: ["Provides better cell division, cell enlargement, helps in branching and flowering, increases fruit quality and yields, increases size, taste and colour of fruits"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray (100 Tray X 1 Box)" },
    { name: "PGR (6BA)/5ML", images: [PGR6BA5ML, PGR6BA5MLSINGLE], commonName: "SAAGO", features: ["Provides better cell devisions. Cell enlargement it helps in branching and flowering Increases fruit quality and yields Increases size, taste and colour of fruits"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray (100 Tray X 1 Box)" },
    { name: "PGR (GIB)/10ML DONGLE PACK", images: [PGRGIB10MLDONGLEPACK], commonName: "GREENWAY", features: ["Provides better cell devisions. Cell enlargement it helps in branching and flowering Increases fruit quality and yields Increases size, taste and colour of fruits"], dose: "10 ml / 100 liter water", packing: " 10 ML Dongle Pack (500 Dongle X 1 Box)" },
    { name: "PGR (6BA)/10ML DONGLE PACK", images: [PGR6BA10MLDONGLEPACK], commonName: "KING 6BA", features: ["Provides better cell devisions. Cell enlargement it helps in branching and flowering Increases fruit quality and yields Increases size, taste and colour of fruits"], dose: "10 ml / 100 liter water", packing: " 10 ML Dongle Pack (500 Dongle X 1 Box)" },
    { name: "PGR (6BA)/10ML", images: [PGR6BA10ML, PGR6BA10MLSINGLE], commonName: "KING 6BA", features: ["Provides better cell devisions.Cell enlargement it helps in branching and flowering Increases fruit quality and yields Increases size, taste and colour of fruits"], dose: "10 ML / 15 liter water", packing: "10 ML X 5 Nos = 1 Tray (50 Tray X 1 Box)" },
    { name: "PGR (GIB)/10ML", images: [PGRGIB10ML, GREENWAYSINGLE, GreenwayPOST], commonName: "GREENWAY", features: ["Provides better cell devisions.Cell enlargement it helps in branching and flowering Increases fruit quality and yields Increases size, taste and colour of fruits"], dose: "10 ML / 15 liter water", packing: "10 ML X 5 Nos = 1 Tray (50 Tray X 1 Box)" },
    { name: "FUNGICIDE", images: [fungicide5ml, FUNGICIDESINGLE,FUNGICIDEPOST], commonName: "FUNGI KING", features: ["Used against downy mildew, powdery mildew, grey mildew used against early bright, anthracnose, leaf spot, mosaic improve plants growth and crop quality"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray (100 Tray X 1 Box)" },
    { name: "VIRICIDE", images: [viricide5ml, VIRICIDESINGLE, VIRICIDEPOST], commonName: "KING V-GUARD", features: ["Used against all types viruses and bacteria in plant used against early bright, leaf spot, mosaic and leaf curl improve plants growth and crop quality"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray (100 Tray X 1 Box)" },
    { name: "LARVICIDE", images: [larvicide5ml, LARVICIDESINGLE, LARVICIDEPOST], commonName: "LARVAKING", features: ["Effective against Larva it has a toxic effect on eggs of some species and, in some cases, reduces fecundity it make plant healthier and decrease the insect stress"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray (100 Tray X 1 Box)" },
    { name: "MIX MICRONUTRIENTS", images: [MIXMICRONUTRIENTS5ml, MICRONUTRIENTSSINGLE, MICRONUTIENTSPOST], commonName: "NUTRIKING", features: ["Maintain the all nutrient balance in plant make plant healthier and decrease the atomsphere stress Increase the enzyme balance in plant and growth of overall plant Increases fruit quality and yields Increases size, taste and colour of fruits"], dose: "10 ML / 15 liter water", packing: "10 ML X 5 Nos = 1 Tray (100 Tray X 1 Box)" },
    { name: "MITYCIDE", images: [MITYCIDE5ML, CAPTAINSINGLE, CAPTAINPOST2], commonName: "CAPTAIN", features: ["It control of sucking and chewing insects, such as thripes, mites, jassid and aphides. it make plant healthier and decrease the insect stress"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray(100 Tray X 1 Box)" },
    { name: "ALL SUCKING PEST", images: [ALLSUCKINGPEST5ml, ALLSUCKINGPESTSINGLE, ALLSUCKINGPESTPOST], commonName: "COMMANDO", features: ["Control of sucking and chewing insects, such as plant hoppers, stink bugs Effective against Larva, Aphids and whiteflies it make plant healthier and decrease the insect stress"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray (100 Tray X 1 Box)" },
    { name: "BORER SPECIAL LARVICIDE", images: [BORERSPECIAL5ml, SHOTTERSINGLE, SHOOTERPOST], commonName: "SHOOTER (SPECIALY FOR BRINJAL)", features: ["Effective against stem borer, shoot borer and all types of borer larvait has a toxic effect on eggs of some species and, in some cases, reduces fecundity it make plant healthier and decrease the insect stress"], dose: "5 ML / 15 liter water", packing: "5 ML X 5 Nos = 1 Tray (100 Tray X 1 Box) (CORN/BRINJAL/BORER SPECIAL )" },
    { name: "ALL TYPES OF LARVA", images:[ALLTYPESOFLARVA],commonName: "KHATMA", features: ["Effective against all types of larva likes sucking larva, borer larva it has a toxic effect on eggs of some species and, in some cases, reduces fecundity it also effective against inside flowering and fruiting larva specially brinjal, corn and cotton it make plant healthier and decrease the insect stress"], dose: "10 ML / 15 liter water", packing: "10 ML X 5 Nos = 1 Tray (100 Tray X 1 Box) (CORN/BRINJAL/BORER SPECIAL )"},
    { name: "PGR 2ML ", images: [PGR2ML],commonName: "PGR 2ML", features: ["Increases seed germination Increases flowering and fruiting Increase crop quality and yields"], dose: "2 ml /15 liter water", packing: "2 ML X 10 Nos = 1 Tray (100 Tray X 1 Box)"},
  ];

  const decodedName = decodeURIComponent(name).trim().toLowerCase();
const product = products.find((p) => p.name.trim().toLowerCase() === decodedName);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);



  if (!product) {
    return <div>Product not found. Please check the URL.</div>;
  }

  useEffect(() => {
    if (product?.images.length > 0) {
      // console.log("Setting image:", product.images[0]); // Debug ke liye
      setSelectedImage(product.images[0]);
    }
    window.scrollTo(0, 0);
    return () => {
      setSelectedImage(null); // Cleanup function
    };
  }, [product?.name]);

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
            <h2 className="sidebar-heading">AMPULSE PACKING</h2>
            <ul>
              {products.map((item, index) => (
                <li
                  key={index}
                  className={decodeURIComponent(name) === item.name ? "active" : ""}
                  onClick={() => navigate(`/product/${encodeURIComponent(item.name)}`)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Product Details */}
          <div className="ampulse-details">
            <div className="ampulse-image-section">
              {/* Main Image */}
              <div className="main-image">
                <img src={selectedImage} alt={product.name} />
              </div>

              {/* Image Slider */}
              <div className="image-slider">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={product.name}
                    className={selectedImage === img ? "active" : ""}
                    onClick={() => {
                      // console.log("Selected Image:", img);
                      setSelectedImage(img);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Specifications */}
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
