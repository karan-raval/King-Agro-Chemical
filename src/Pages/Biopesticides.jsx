import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import biolarvicide from '../assets/images/biolarvicide.png';
import whitefly from '../assets/images/whitefly.png';
import thipsandmites from '../assets/images/thipsandmites.png';
import KingBlast from '../assets/images/King-Blast.png';
import Humiking from '../assets/images/Humiking.png';
import Thiamethoxam30 from '../assets/images/Thiamethoxam30.png';

const products = [
  { id: "1", name: "Larvicide", image: biolarvicide },
  { id: "2", name: "Thrips & mites", image: thipsandmites },
  { id: "3", name: " White fly", image: whitefly },
];
const Biopesticides = () => {
  return (
    <>
       <Header />
      <div className="hero-section">
        <h1>Bio-Pesticides</h1>
      </div>
      <Grid container spacing={2} justifyContent="center" sx={{ padding: 2 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Link to={`/product/bio-pesticides/${product.id}`} style={{ textDecoration: "none" }}>
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

export default Biopesticides