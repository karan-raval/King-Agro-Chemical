import React from 'react'
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const products = [
    { name: "Insecticides", image: "/path/to/insecticide.png" },
    { name: "Fungicides", image: "/path/to/fungicide.png" },
    { name: "Herbicides", image: "/path/to/herbicide.png" },
    { name: "PGR", image: "/path/to/pgr.png" },
    { name: "PGR", image: "/path/to/pgr.png" },
    { name: "PGR", image: "/path/to/pgr.png" },
    { name: "PGR", image: "/path/to/pgr.png" },
    { name: "PGR", image: "/path/to/pgr.png" },
    { name: "PGR", image: "/path/to/pgr.png" },
    { name: "PGR", image: "/path/to/pgr.png" },
    { name: "PGR", image: "/path/to/pgr.png" },
    { name: "PGR", image: "/path/to/pgr.png" },
    { name: "PGR", image: "/path/to/pgr.png" }
  ];
const PGR = () => {
  return (
    <>
    <Header/>
    <div className="hero-section">
          <h1>PGR</h1>
        </div>
      <Grid container spacing={2} justifyContent="center" sx={{ padding: 2 }}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
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
        </Grid>
      ))}
    </Grid>
    <Footer/>
    </>
  )
}

export default PGR