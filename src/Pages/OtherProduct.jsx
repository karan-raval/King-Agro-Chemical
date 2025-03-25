import React from 'react'
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import fungiking from '../assets/images/fungiking.png' 
import SiliconSpreaders from '../assets/images/Silicon-Spreaders.png' 
import PGRTablets from '../assets/images/PGR-Tablets.png' 
import HumicShinnyBall from '../assets/images/Humic-Shinny-Ball.png' 
import FulvicAcid from '../assets/images/Fulvic-Acid.png' 
import EmamectionBenzoate from '../assets/images/Emamection-Benzoate.png'

const products = [
    { id: "Fungi king", name: "Fungi King", image: fungiking },
    { id: "Silicon Spreaders", name: "Silicon Spreaders", image: SiliconSpreaders },
    { id: "PGR Tablets", name: "PGR Tablets", image: PGRTablets },
    { id: "Humic Shinny Ball", name: "Humic Shinny Ball", image: HumicShinnyBall },
    { id: "Fulvic Acid", name: "Fulvic Acid", image: FulvicAcid },
    { id: "Emamection Benzoate", name: "Emamection Benzoate", image: EmamectionBenzoate },
];

const OtherProduct = () => {
    
    return (
        <>
          <Header />
          <div className="hero-section">
            <h1>Other Product</h1>
          </div>
          <Grid container spacing={2} justifyContent="center" sx={{ padding: 2 }}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Link to={`/products/other-product/${product.id}`} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
                      border: "1px solid #4CAF50",
                      borderRadius: 2,
                      boxShadow: 3,
                      cursor: "pointer",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: "contain", padding: 1 }}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {product.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Footer />
    </>
  )
}

export default OtherProduct