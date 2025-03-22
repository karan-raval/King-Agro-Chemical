import React from 'react'
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import KingPower from '../assets/images/King-Power.png' 
import KingStar from '../assets/images/King-Star.png' 
import HumiHub from '../assets/images/Humi-Hub.png' 
import KingBlast from '../assets/images/King-Blast.png' 
import Humiking from '../assets/images/Humiking.png' 
import Nutriking from '../assets/images/Nutriking.png' 

const products = [
    { id: "king-power", name: "King Power", image: KingPower },
    { id: "king-star", name: "King Star", image: KingStar },
    { id: "humi-hub", name: "Humi-Hub", image: HumiHub },
    { id: "king-blast", name: "King Blast", image: KingBlast },
    { id: "humiking", name: "Humiking", image: Humiking },
    { id: "nutriking", name: "Nutriking", image: Nutriking },
];

const PGR = () => {
  return (
    <>
      <Header />
      <div className="hero-section">
        <h1>PGR</h1>
      </div>
      <Grid container spacing={2} justifyContent="center" sx={{ padding: 2 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Link to={`/product/pgr/${product.id}`} style={{ textDecoration: "none" }}>
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
  );
};

export default PGR;
