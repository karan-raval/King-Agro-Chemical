import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import pgrGib5ml from "../assets/images/PGR-GIB-5ml.png"
import larvicide5ml from "../assets/images/LARVICIDE.png"
import viricide5ml from "../assets/images/VIRICIDE.png"
import fungicide5ml from "../assets/images/FUNGICIDE.png"
import MIXMICRONUTRIENTS5ml from "../assets/images/MIX-MICRONUTRIENTS.png"
import ALLSUCKINGPEST5ml from "../assets/images/ALLSUCKINGPEST.png"
import BORERSPECIAL5ml from "../assets/images/BORERSPECIAL.png"
import PGRGIB10ML from "../assets/images/PGR-GIB-10ML.png"
import MITYCIDE5ML from "../assets/images/MITYCIDE.png"
const AmpulsePacking = () => {
  const navigate = useNavigate();
    const products = [
        { name: "PGR (GIB)/5ML", image: pgrGib5ml },
        { name: "PGR (6BA)/5ML", image: "/path/to/fungicide.png" },
        { name: "PGR (GIB)/10ML DONGLE PACK", image: "/path/to/herbicide.png" },
        { name: "PGR (6BA)/10ML DONGLE PACK", image: "/path/to/pgr.png" },
        { name: "PGR (6BA)/10ML", image: "/path/to/pgr.png" },
        { name: "PGR (GIB)/10ML", image: PGRGIB10ML },
        { name: "MIX MICRONUTRIENTS", image: MIXMICRONUTRIENTS5ml },
        { name: "FUNGICIDE", image: fungicide5ml },
        { name: "VIRICIDE", image: viricide5ml },
        { name: "LARVICIDE", image: larvicide5ml },
        { name: "MITYCIDE", image: MITYCIDE5ML },
        { name: "ALL SUCKING PEST", image: ALLSUCKINGPEST5ml },
        { name: "BORER SPECIAL LARVICIDE", image: BORERSPECIAL5ml },
        { name: "ALL TYPES OF LARVA", image: "/path/to/pgr.png" },
        { name: "PGR 2ML ", image: "/path/to/pgr.png" },
      ];

      const handleProductClick = (name) => {
        navigate(`/product/${encodeURIComponent(name)}`); // Encode URL ke liye
      };

  return (
    
    <>
     <Header/>
        <div className="hero-section">
              <h1>AMPULSE PAKING</h1>
            </div>
          <Grid container spacing={4}  justifyContent="center" sx={{mx: "auto", width: "100%", padding: 2,maxWidth: 1200,"& .MuiGrid-item": {
      paddingLeft: "10px !important", // Reduce padding to 10px
      paddingRight: "10px !important" // Ensure balanced padding
    } }}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{
              display: "flex", 
              justifyContent: "center" 
            }}>
              <Card
                onClick={() => handleProductClick(product.name)}
                sx={{
                  '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
                  border: "1px solid #4CAF50",
                  borderRadius: 2,
                  boxShadow: 3,
                  cursor: "pointer",
                  maxWidth: 280,
width: "100%"
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  
                  sx={{ objectFit: "contain", padding: 1 , width:"100%",maxWidth: 260}}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Footer/>
    </>
  )
}

export default AmpulsePacking